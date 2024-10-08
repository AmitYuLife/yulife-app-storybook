import React, { memo, useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { Animated, StyleSheet, View, AppStateStatus } from "react-native";
import { Image, Loading, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import {
  IAudioPlayerState,
  IAudioPlayerAction,
  reducer,
  INITIAL_STATE,
  AudioPlayerActionTypes,
} from "./audio-player.reducer";
import { Button, PressableWithDelay, VidePlayerButton } from "@molecules";
import {
  GenericHeadingAbsolute,
  GenericHeadingLogo,
  GenericHeadingPad,
  AvPlayerDescription,
  AvPlayerLoading,
  AvPlayerProgressBar,
  AvPlayerTimer,
} from "@organisms";
import { PlayIcon } from "@atoms/icon/play-icon";
import { VIDEO_PLAYER_TIMER, VIDEO_PROGRESS_BAR, VIDEO_PLAY_PAUSE_BUTTON, VIDEO_PLAYER, VIDEO_LOGO } from "@ids";
import { DETOX_ENABLED } from "@services/socket";
import Logger from "@services/logging/logger";
import { useDispatch, useSelector } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { useAppState, useBackHandler, useGetLottieJson } from "@hooks";
import { getActiveLevel, getVideoPlayerIsActive } from "@redux/levels/levels.selectors";
import { ChallengeSubmissionStatus, IActiveLevel } from "@redux/levels/levels.types";
import { HourglassIcon } from "@atoms/icon/hourglass-icon";
import { t } from "@locale";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import TrackPlayer, { State, Event, useTrackPlayerEvents, PlaybackErrorEvent } from "react-native-track-player";
import AudioPlayerService from "@services/audio-player";
import LottieView from "lottie-react-native";
import { ContentItemLottieFragment as GqlLottie } from "@graphql/__generated"; // this is temp until we refactor lottie types

export interface IAudioPlayerProps {
  source: string;
  poster?: string;
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  tag?: string;
  thumbnail: string;
  logo?: string;
  audioLogo?: string;
  onStart: (activeLevel: IActiveLevel) => void;
  onProgress?: (seconds: number) => void;
  onEnd: () => void;
  onError: () => void;
  onLeftIconPress: () => void;
  onRightIconPress: (showModal: boolean) => void;
  startErrorMessage?: string;
  theme: "light" | "dark";
  yuCoin?: number;
  stars?: number;
  lottie: GqlLottie;
  eventType: string;
  audioSourceType?: string;
  startChallengeButtonLabel: string;
  startTimeInSeconds?: number;
  autoPlay?: boolean;
  audioDuration: number;
}

const COMMON_PROPS = {
  duration: 300,
  useNativeDriver: true,
};

const PLAYER_EVENTS = [
  Event.PlaybackQueueEnded,
  Event.PlaybackError,
  Event.PlaybackState,
  Event.PlaybackProgressUpdated,
];

const LOGO: { logo: GenericHeadingLogo } = { logo: "yulife" };

const AUDIO_SAMPLE =
  "https://yulife-local.imgix.net/media/sample-15s.mp3?ixlib=js-3.2.1&s=c1577a7bc757df12c40b055fafd48908";

const AudioPlayer = ({
  source,
  poster,
  title,
  subtitle,
  description,
  tag,
  thumbnail,
  logo,
  audioLogo,
  onEnd,
  onError,
  onStart,
  onLeftIconPress,
  onRightIconPress,
  startErrorMessage,
  theme,
  shortDescription,
  yuCoin,
  stars,
  lottie,
  eventType,
  startTimeInSeconds,
  startChallengeButtonLabel,
  onProgress,
  audioDuration,
  autoPlay,
}: IAudioPlayerProps) => {
  const [appCurrentState, setAppCurrentState] = useState<AppStateStatus>("active");
  const [state, dispatch] = useReducer<React.Reducer<IAudioPlayerState, IAudioPlayerAction>>(reducer, INITIAL_STATE);

  const lottieRef = useRef<LottieView>();

  const lastPlayerStateRef = useRef<State>();
  const opacity = useRef(new Animated.Value(1)).current;

  const reduxDispatch = useDispatch();

  const activeLevel = useSelector(getActiveLevel);
  const videoPlayerIsActive = useSelector(getVideoPlayerIsActive);

  const { uri: lottieUri, loading: lottieUriLoading } = useGetLottieJson(lottie?.uri);
  const themeColour = useMemo(() => (theme === "light" ? Colours.neutral.white : Colours.neutral.n800), [theme]);

  const isPaused = state.playerState === State.Paused;
  const isPlaying = state.playerState === State.Playing;

  const isBuffering =
    state.playerState === State.Buffering ||
    state.playerState === State.Ready ||
    state.playerState === State.Loading ||
    // playerState is updated to paused after loading the track, then goes to ready
    // ref is necessary to debug make sure it's in a buffering state & not really paused
    // loading -> paused -> ready -> buffering -> playing
    (state.playerState === State.Paused && lastPlayerStateRef.current === State.Loading);

  lastPlayerStateRef.current = state.playerState;

  useTrackPlayerEvents(PLAYER_EVENTS, (event) => {
    switch (event.type) {
      case Event.PlaybackQueueEnded: {
        lottieRef.current?.pause();
        handleOnEnd();
        return;
      }

      case Event.PlaybackError: {
        return handleOnError(event);
      }

      case Event.PlaybackState: {
        return handlePlayerState(event.state);
      }

      case Event.PlaybackProgressUpdated: {
        const position = Math.round(event.position);
        const duration = Math.round(event.duration);
        onProgress(position);
        return dispatch({
          type: AudioPlayerActionTypes.SET_CURRENT_PROGRESS,
          payload: { position, duration },
        });
      }
    }
  });

  const audioUrl = useMemo(() => (DETOX_ENABLED ? AUDIO_SAMPLE : source), [source, DETOX_ENABLED]);

  const handlePlayerState = useCallback(
    (playerState: State) => {
      if (playerState === State.Ready && state.currentProgressInSeconds > 0 && state.showPlayer) {
        AudioPlayerService.playTrack();
      }

      dispatch({ type: AudioPlayerActionTypes.SET_PLAYER_STATE, payload: playerState });
    },
    [state.showPlayer, state.currentProgressInSeconds]
  );

  useEffect(() => {
    if (autoPlay) {
      handleStartButton();
    }

    return () => {
      fadeIn.stop();
      fadeOut.stop();
    };
  }, []);

  useEffect(() => {
    if (!isBuffering && state.playerState && !state.showPlayer) {
      dispatch({ type: AudioPlayerActionTypes.SET_SHOW_PLAYER, payload: true });
      lottieRef?.current?.play();
    }
  }, [isBuffering]);

  const fadeIn = Animated.timing(opacity, {
    toValue: 1,
    ...COMMON_PROPS,
  });

  const fadeOut = Animated.timing(opacity, {
    toValue: 0,
    ...COMMON_PROPS,
  });

  useBackHandler(() => {
    if (!state.showPlayer) {
      onLeftIconPress();
    }

    return false;
  });

  /**
   * Set's the app state, if the video is in the background etc
   */
  useAppState((appState: AppStateStatus) => {
    setAppCurrentState(appState);
  });

  /**
   * Set's the player initial start time
   */
  useEffect(() => {
    if (startTimeInSeconds && state.showPlayer) {
      TrackPlayer.seekTo(startTimeInSeconds);
    }

    return () => {
      // This is for android only
      if (state.showPlayer) {
        AudioPlayerService.resetPlayer();
      }
    };
  }, [state.showPlayer]);

  /**
   * Triggers the `onEnd` ballback when the video is finished
   */
  useEffect(() => {
    const isPlayerActive = appCurrentState === "active" && videoPlayerIsActive;

    if (state.isDoneOnBackground && isPlayerActive) {
      dispatch({ type: AudioPlayerActionTypes.SET_END_OF_SESSION_LOADING });
      onEnd();
    }
  }, [appCurrentState]);

  const onButtonAction = useCallback(async () => {
    if (state.showFocusScreen) {
      handleFocusScreen();
      return;
    }

    if (isPlaying) {
      await AudioPlayerService.pauseTrack();
      lottieRef.current?.pause();
    }

    if (isPaused) {
      await AudioPlayerService.playTrack();
      lottieRef.current?.resume();
    }

    reduxDispatch(logMixpanelEventActionCreator(isPaused ? "audio_player_is_paused" : "audio_player_is_playing"));
  }, [isPaused, isPlaying, state.showFocusScreen]);

  const handleStartButton = useCallback(async (): Promise<void> => {
    dispatch({ type: AudioPlayerActionTypes.SET_STARTING, payload: true });
    try {
      await AudioPlayerService.init();
      await AudioPlayerService.loadTrack({
        title,
        url: audioUrl,
        artist: shortDescription,
        artwork: thumbnail,
      });

      await onStart(activeLevel);
      await AudioPlayerService.playTrack();

      if (state.startErrorMessage) {
        dispatch({
          type: AudioPlayerActionTypes.SET_START_ERROR_MESSAGE,
          payload: "",
        });
      }

      reduxDispatch(logMixpanelEventActionCreator("audio_player_button_start_pressed", { type: eventType }));
    } catch (err) {
      reduxDispatch(getUserDataStart({ types: [AppDataType.activeChallenge] }));
      Logger.error(err, {
        location: "audio-player-handleStartButton",
      });

      dispatch({
        type: AudioPlayerActionTypes.SET_START_ERROR_MESSAGE,
        payload: startErrorMessage,
      });
    } finally {
      dispatch({ type: AudioPlayerActionTypes.SET_STARTING, payload: false });
    }
  }, [onStart, lottieUri]);

  const handleOnEnd = useCallback(async (): Promise<void> => {
    if (appCurrentState !== "active") {
      dispatch({ type: AudioPlayerActionTypes.SET_IS_DONE_ON_BACKGROUND });
      return;
    }

    try {
      dispatch({ type: AudioPlayerActionTypes.SET_END_OF_SESSION_LOADING });
      await onEnd();
    } catch (err) {
      dispatch({ type: AudioPlayerActionTypes.SET_ON_END_ERROR });
      onError();
      Logger.error(err, { location: "audio-player-handleOnEnd" });
    }
  }, [onEnd, onError, appCurrentState]);

  const handleFocusScreen = useCallback((): void => {
    if (!isPaused && !state.showFocusScreen) {
      dispatch({ type: AudioPlayerActionTypes.SET_SHOW_FOCUS_SCREEN, payload: true });
      fadeOut.start();
      reduxDispatch(logMixpanelEventActionCreator("audio_player_focused", { isFocused: true }));
    } else {
      dispatch({ type: AudioPlayerActionTypes.SET_SHOW_FOCUS_SCREEN, payload: false });
      fadeIn.start();
      reduxDispatch(logMixpanelEventActionCreator("audio_player_focused", { isFocused: false }));
    }
  }, [state.showFocusScreen, isPaused]);

  const handleOnError = useCallback(async (err: PlaybackErrorEvent) => {
    Logger.error(new Error(err?.message), { location: "audio-player-onError", ...err });
    onError();
  }, []);

  const handleOnRightIconPress = useCallback((): void => {
    onRightIconPress(state.showPlayer);
  }, [state.showPlayer]);

  const hasErrorOnReduxSubmission = useMemo(() => {
    return activeLevel.submissionErrorCount > 0;
  }, [activeLevel?.submissionErrorCount]);

  const shouldShowTryAgainError = state.showTryAgainError || hasErrorOnReduxSubmission;

  return (
    <View style={styles.wrapper}>
      <PressableWithDelay onPress={handleFocusScreen} style={styles.container} testID={VIDEO_PLAYER} delay={1000}>
        <GenericHeadingPad />

        {!lottieUri && state.showPlayer && !state.isLoadingEndOfSession ? null : (
          <Image source={{ uri: poster }} width={Style.DEVICE_WIDTH} style={{ ...StyleSheet.absoluteFillObject }} />
        )}
        {!lottieUri ? null : <LottieView ref={lottieRef} resizeMode="cover" style={styles.lottie} source={lottieUri} />}
        {state.showPlayer || autoPlay ? null : (
          <View style={styles.videoDescription}>
            <AvPlayerDescription
              title={title}
              subtitle={subtitle}
              description={description}
              yuCoin={yuCoin}
              stars={stars}
              tag={tag}
              logo={logo}
              duration={audioDuration}
            />
          </View>
        )}

        {!state.showPlayer || !audioLogo ? null : (
          <Animated.View style={[styles.audioLogo, { opacity }]}>
            <Image
              suppressLoadingUi={true}
              source={{ uri: audioLogo }}
              resizeMode="contain"
              width={Style.adjust(151)}
              height={Style.adjust(151)}
              testID={VIDEO_LOGO}
            />
          </Animated.View>
        )}

        {!state.showPlayer ? null : (
          <>
            {state.isLoadingEndOfSession ? null : (
              <View style={styles.currentProgressTime} testID={VIDEO_PLAYER_TIMER}>
                <AvPlayerTimer
                  textType="time"
                  time={state.currentProgressInMilliseconds}
                  colour={themeColour}
                  opacity={isBuffering ? 0.5 : 1}
                />
              </View>
            )}
            {!state.isLoadingEndOfSession ? null : (
              <View style={styles.currentProgressTime}>
                <HourglassIcon />
                <View style={styles.endOfSessionLoading}>
                  <TextTemplate type="b1" color={Colours.neutral.white} textAlign="center">
                    {t(`screens.video_player.${shouldShowTryAgainError ? "error_message" : "session_complete"}`)}
                  </TextTemplate>
                  {shouldShowTryAgainError ? (
                    <View style={styles.errorButton}>
                      <Button
                        translationKey="modals.generic_modal.on_meditopia_error.cta_label"
                        size="Small"
                        onPress={handleOnEnd}
                        isLoading={activeLevel.challengeSubmissionStatus === ChallengeSubmissionStatus.Loading}
                      />
                    </View>
                  ) : (
                    <TextTemplate type="b1" color={Colours.neutral.white} textAlign="center">
                      {t("screens.video_player.one_moment_please")}
                    </TextTemplate>
                  )}
                </View>
              </View>
            )}
            <Animated.View style={[styles.progressBarContainer, { opacity }]} testID={VIDEO_PROGRESS_BAR}>
              <View style={styles.currentProgress}>
                <AvPlayerTimer textType="l2b" time={state.currentProgressInMilliseconds} colour={themeColour} />
              </View>
              <View style={[styles.progressBar, { backgroundColor: themeColour }]}>
                <AvPlayerProgressBar
                  currentProgress={state.currentProgressInSeconds}
                  duration={state.durationInSeconds}
                />
              </View>
              <View style={styles.duration}>
                <AvPlayerTimer textType="l2b" time={state.durationInSeconds * 1000} colour={themeColour} />
              </View>
            </Animated.View>
            <Animated.View style={[styles.buttonWrapper, { opacity }]} testID={VIDEO_PLAY_PAUSE_BUTTON(isPaused)}>
              {shouldShowTryAgainError ? null : <VidePlayerButton onPress={onButtonAction} isPaused={isPaused} />}
            </Animated.View>
          </>
        )}
      </PressableWithDelay>
      {!state.startErrorMessage ? null : (
        <View style={styles.error}>
          <TextTemplate type="b2" textAlign="center" color={themeColour}>
            {state.startErrorMessage}
          </TextTemplate>
        </View>
      )}
      {state.showPlayer ? null : (
        <View style={styles.starSessionButton}>
          <Button
            testID="=start-audio-button"
            translatedLabel={startChallengeButtonLabel}
            onPress={handleStartButton}
            leftIcon={<PlayIcon />}
            isLoading={state.isStarting || isBuffering}
          />
        </View>
      )}
      {!lottieUriLoading ? null : <AvPlayerLoading />}

      {!isBuffering || state.currentProgressInSeconds === 0 ? null : (
        <View style={styles.bufferWrapper}>
          <Loading color="white" style={styles.buffer} />
        </View>
      )}

      <Animated.View style={styles.topbarWrapper}>
        <GenericHeadingAbsolute
          backgroundColor="transparent"
          onLeftIconPress={!state.showPlayer ? onLeftIconPress : null}
          color={themeColour}
          onRightIconPress={state.showFocusScreen ? null : handleOnRightIconPress}
          rightIcon="CLOSE"
          {...LOGO}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.black,
  },
  container: {
    flex: 1,
  },
  audioLogo: {
    alignItems: "center",
  },
  progressBarContainer: {
    flexDirection: "row",
    marginHorizontal: Style.adjust(24),
    alignItems: "center",
    marginTop: Style.adjust(32),
    justifyContent: "center",
    position: "absolute",
    bottom: Style.adjust(140),
    left: 0,
    right: 0,
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    width: "74%",
  },
  currentProgress: {
    position: "absolute",
    left: 0,
    width: "13%",
  },
  duration: {
    position: "absolute",
    alignItems: "flex-end",
    right: 0,
    width: "13%",
  },
  videoDescription: {
    marginTop: Style.adjust(32),
  },
  title: {
    alignItems: "center",
    marginTop: Style.adjust(25),
  },
  currentProgressTime: {
    alignItems: "center",
    justifyContent: "center",
    ...StyleSheet.absoluteFillObject,
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    paddingTop: Style.adjust(90),
    justifyContent: "center",
  },
  buttonWrapper: {
    position: "absolute",
    bottom: Style.adjust(40),
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
  },
  topbarWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  starSessionButton: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: Style.adjust(30),
  },
  backgroundVideo: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
  },
  error: {
    left: 0,
    bottom: Style.adjust(86),
    position: "absolute",
    width: "100%",
    paddingHorizontal: Style.adjust(20),
  },
  lottie: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
  },
  endOfSessionLoading: {
    marginTop: Style.adjust(16),
  },
  errorButton: {
    marginTop: Style.adjust(15),
  },
  bufferWrapper: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
    position: "absolute",
  },
  buffer: {
    marginLeft: Style.adjust(5),
    top: 50,
  },
});

export default memo(AudioPlayer);
