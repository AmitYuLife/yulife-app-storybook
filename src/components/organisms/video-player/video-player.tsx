import React, { memo, useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import Video from "react-native-video";
import moment from "moment";
import MusicControl, { Command } from "react-native-music-control";
import { Animated, StyleSheet, View, AppStateStatus } from "react-native";
import LottieView from "lottie-react-native";
import Config from "react-native-config";
import { Image, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import {
  IState,
  IAction,
  reducer,
  INITIAL_STATE,
  ActionTypes,
  setMusicControlInitialConfig,
} from "./video-player.reducer";
import VideoPlayerLoading from "./video-player-loading";
import VideoPlayerDescription from "./video-player-description";
import VideoPlayerTimer from "./video-player-timer";
import { Button, PressableWithDelay, VidePlayerButton } from "@molecules";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { PlayIcon } from "@atoms/icon/play-icon";
import { VIDEO_PLAYER_TIMER, VIDEO_PROGRESS_BAR, VIDEO_PLAY_PAUSE_BUTTON, VIDEO_PLAYER, VIDEO_LOGO } from "@ids";
import { DETOX_ENABLED } from "@services/socket";
import Logger from "@services/logging/logger";
import { useDispatch, useSelector } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { useAppState, useBackHandler, useGetLottieJson } from "@hooks";
import { getVideoPlayerIsActive } from "@redux/levels/levels.selectors";
import { ContentItemLottie as GqlLottie } from "@graphql/_core/schema";
import { HourglassIcon } from "@atoms/icon/hourglass-icon";
import { t } from "@locale";

interface IProps {
  source: string;
  poster?: string;
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  logo?: string;
  videoLogo?: string;
  onStart: () => void;
  onEnd: () => void;
  onError: () => void;
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  startErrorMessage?: string;
  theme: "light" | "dark";
  yuCoin?: number;
  stars?: number;
  lottie?: GqlLottie;
  eventType: string;
  videoSourceType?: string;
  showTimer?: boolean;
}

const commonProps = {
  duration: 300,
  useNativeDriver: true,
};

const VideoPlayer = ({
  source,
  poster,
  title,
  description,
  thumbnail,
  logo,
  videoLogo,
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
  videoSourceType = "mp4",
  showTimer = true,
}: IProps) => {
  const [state, dispatch] = useReducer<React.Reducer<IState, IAction>>(reducer, INITIAL_STATE);
  const [appCurrentState, setAppCurrentState] = useState<AppStateStatus>("active");
  const opacity = useRef(new Animated.Value(1)).current;
  const lottieRef = useRef<LottieView>();
  const playerRef = useRef<Video>();
  const themeColour = useMemo(() => (theme === "light" ? Colours.neutral.white : Colours.neutral.n800), [theme]);
  const reduxDispatch = useDispatch();
  const videoPlayerIsActive = useSelector(getVideoPlayerIsActive);
  const { uri: lottieUri, loading: lottieUriLoading } = useGetLottieJson(lottie?.uri);

  const fadeIn = Animated.timing(opacity, {
    toValue: 1,
    ...commonProps,
  });
  const fadeOut = Animated.timing(opacity, {
    toValue: 0,
    ...commonProps,
  });

  const onChangeAppState = useCallback(
    (appState: AppStateStatus) => {
      setAppCurrentState(appState);
      MusicControl.updatePlayback({
        elapsedTime: state.currentProgressInSeconds,
      });
    },
    [appCurrentState, state.currentProgressInSeconds]
  );

  useBackHandler(() => {
    if (!state.musicControlMounted) {
      onLeftIconPress();
    }

    return false;
  });

  useAppState(onChangeAppState);

  useEffect(() => {
    (async () => {
      if (state.isDoneOnBackground && !state.isPaused && appCurrentState === "active" && videoPlayerIsActive) {
        dispatch({ type: ActionTypes.SET_END_OF_SESSION_LOADING });
        await onEnd();
      }
    })();
  }, [appCurrentState]);

  useEffect(() => {
    setMusicControlInitialConfig();
    MusicControl.on(Command.play, () => {
      dispatch({ type: ActionTypes.PLAY_PLAYER });
    });
    MusicControl.on(Command.pause, () => {
      dispatch({ type: ActionTypes.PAUSE_PLAYER });
    });

    return () => {
      fadeIn.stop();
      fadeOut.stop();
      MusicControl.resetNowPlaying();
    };
  }, []);

  useEffect(() => {
    MusicControl.updatePlayback({
      state: state.isPaused || state.isBuffering ? MusicControl.STATE_PAUSED : MusicControl.STATE_PLAYING,
      elapsedTime: state.currentProgressInSeconds,
    });
    reduxDispatch(logMixpanelEventActionCreator(state.isPaused ? "video_player_is_paused" : "video_player_is_playing"));
  }, [state.isPaused, state.isBuffering]);

  const onProgress = useCallback(
    ({ currentTime }) => {
      const time = moment.duration(currentTime, "seconds").asMilliseconds();
      const inComingProgress = Math.floor(currentTime);
      const formatCurrentProgressInSeconds = Math.floor(state.currentProgressInSeconds);

      if (formatCurrentProgressInSeconds !== inComingProgress && formatCurrentProgressInSeconds < inComingProgress) {
        dispatch({ type: ActionTypes.SET_CURRENT_PROGRESS, payload: time });
      }
    },
    [state.currentProgressInSeconds]
  );

  const onLoad = useCallback(({ duration }) => {
    const time = moment.duration(duration, "seconds").asMilliseconds();
    dispatch({ type: ActionTypes.SET_DURATION, payload: time });
  }, []);

  const onButtonAction = useCallback(() => {
    if (state.showFocusScreen) {
      return;
    }

    dispatch({ type: state.isPaused ? ActionTypes.PLAY_PLAYER : ActionTypes.PAUSE_PLAYER });

    if (lottieUri) {
      lottieRef?.current[state.isPaused ? "resume" : "pause"]();
    }

    reduxDispatch(logMixpanelEventActionCreator("video_player_play_button_start_pressed"));
  }, [state.isPaused, state.durationInSeconds, state.showFocusScreen]);

  const handleStartButton = useCallback(async () => {
    dispatch({ type: ActionTypes.SET_STARTING, payload: true });
    try {
      await onStart();
      MusicControl.setNowPlaying({
        title,
        artwork: thumbnail,
        artist: shortDescription,
        duration: state.durationInSeconds,
      });
      dispatch({ type: ActionTypes.SET_MUSIC_CONTROL_MOUNTED });
      if (lottieUri) {
        lottieRef?.current?.play();
      }

      if (state.startErrorMessage) {
        dispatch({ type: ActionTypes.SET_START_ERROR_MESSAGE, payload: "" });
      }

      reduxDispatch(logMixpanelEventActionCreator("video_player_button_start_pressed", { type: eventType }));
    } catch (err) {
      Logger.error(err, { location: "video-player-handleStartButton" });
      dispatch({ type: ActionTypes.SET_START_ERROR_MESSAGE, payload: startErrorMessage });
    } finally {
      dispatch({ type: ActionTypes.SET_STARTING, payload: false });
    }
  }, [onStart, state.durationInSeconds]);

  const handleOnEnd = useCallback(async () => {
    if (appCurrentState !== "active") {
      dispatch({ type: ActionTypes.SET_IS_DONE_ON_BACKGROUND });
      return;
    }

    try {
      dispatch({ type: ActionTypes.SET_END_OF_SESSION_LOADING });
      await onEnd();
    } catch (err) {
      Logger.error(err, { location: "video-player-handleOnEnd" });
    }
  }, [onEnd, appCurrentState]);

  const handleFocusScreen = useCallback(() => {
    if (!state.isPaused && !state.showFocusScreen) {
      dispatch({ type: ActionTypes.SET_SHOW_FOCUS_SCREEN, payload: true });
      fadeOut.start();
      reduxDispatch(logMixpanelEventActionCreator("video_player_focused", { isFocused: true }));
    } else {
      dispatch({ type: ActionTypes.SET_SHOW_FOCUS_SCREEN, payload: false });
      fadeIn.start();
      reduxDispatch(logMixpanelEventActionCreator("video_player_focused", { isFocused: false }));
    }
  }, [state.isPaused, state.showFocusScreen]);

  const handleOnError = useCallback(
    async (err) => {
      Logger.error(err, { location: "video-player-onError" });
      if (state.retries > 0 && state.musicControlMounted) {
        playerRef.current.seek(state.currentProgressInSeconds);
        dispatch({ type: ActionTypes.SET_RETRIES });
        return dispatch({ type: ActionTypes.PLAY_PLAYER });
      }

      onError();
    },
    [state.currentProgressInSeconds, state.musicControlMounted, state.retries]
  );

  const videoUrl = useMemo(
    () =>
      DETOX_ENABLED
        ? "https://yulife-local.imgix.net/media/meditation/meditopia/15-seconds-video.mp4?ixlib=js-3.2.1&s=5270f77d06c4b2ad83e582610a75553b"
        : source,
    [source, DETOX_ENABLED]
  );
  const videoSource = useMemo(
    () => ({
      uri: videoUrl,
      type: videoSourceType,
      headers: {
        yu_client_token: Config.YU_CLIENT_TOKEN,
      },
    }),
    [videoUrl, videoSourceType]
  );

  return (
    <>
      <PressableWithDelay onPress={handleFocusScreen} style={styles.container} testID={VIDEO_PLAYER}>
        <Video
          ref={playerRef}
          audioOnly={lottieUri ? true : false}
          source={videoSource}
          minLoadRetryCount={20}
          disableFocus={true}
          poster={poster}
          posterResizeMode="cover"
          resizeMode="cover"
          onError={handleOnError}
          onLoad={onLoad}
          onEnd={handleOnEnd}
          onProgress={onProgress}
          paused={state.isPaused}
          playInBackground={true}
          ignoreSilentSwitch="ignore"
          style={styles.backgroundVideo}
        />
        <GenericHeadingPad />

        {!lottieUri ? null : <LottieView ref={lottieRef} resizeMode="cover" style={styles.lottie} source={lottieUri} />}

        {state.musicControlMounted ? null : (
          <View style={styles.videoDescription}>
            <VideoPlayerDescription
              title={title}
              description={description}
              duration={state.durationInSeconds}
              yuCoin={yuCoin}
              stars={stars}
              logo={logo}
            />
          </View>
        )}

        {!state.musicControlMounted || !videoLogo ? null : (
          <Animated.View style={[styles.videoLogo, { opacity }]}>
            <Image
              suppressLoadingUi={true}
              source={{ uri: videoLogo }}
              resizeMode="cover"
              width={Style.adjust(151)}
              testID={VIDEO_LOGO}
            />
          </Animated.View>
        )}

        {!state.musicControlMounted ? null : (
          <>
            {!showTimer || state.isLoadingEndOfSession ? null : (
              <View style={styles.currentProgressTime} testID={VIDEO_PLAYER_TIMER}>
                <VideoPlayerTimer textType="time" time={state.currentProgressInMilliSeconds} colour={themeColour} />
              </View>
            )}
            {!state.isLoadingEndOfSession ? null : (
              <View style={styles.currentProgressTime}>
                <HourglassIcon />
                <View style={styles.endOfSessionLoading}>
                  <TextTemplate type="b1" color={Colours.neutral.white} textAlign="center">
                    {t("screens.video_player.session_complete")}
                  </TextTemplate>
                  <TextTemplate type="b1" color={Colours.neutral.white} textAlign="center">
                    {t("screens.video_player.one_moment_please")}
                  </TextTemplate>
                </View>
              </View>
            )}

            <Animated.View style={[styles.progressBarContainer, { opacity }]} testID={VIDEO_PROGRESS_BAR}>
              <View style={styles.currentProgress}>
                <VideoPlayerTimer textType="l2b" time={state.currentProgressInMilliSeconds} colour={themeColour} />
              </View>
              <View style={[styles.progressBar, { backgroundColor: themeColour }]}>
                <View
                  style={[
                    styles.currentProgressBar,
                    {
                      width:
                        `${Math.round((state.currentProgressInMilliSeconds / state.durationInMilliSeconds) * 100)}%` ||
                        0,
                    },
                  ]}
                />
              </View>
              <View style={styles.duration}>
                <VideoPlayerTimer textType="l2b" time={state.durationInMilliSeconds} colour={themeColour} />
              </View>
            </Animated.View>
            <Animated.View style={[styles.buttonWrapper, { opacity }]} testID={VIDEO_PLAY_PAUSE_BUTTON(state.isPaused)}>
              <VidePlayerButton onPress={onButtonAction} isPaused={state.isPaused} />
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

      {state.musicControlMounted ? null : (
        <View style={styles.starSessionButton}>
          <Button
            label="Start session"
            onPress={handleStartButton}
            leftIcon={<PlayIcon />}
            isLoading={state.isStarting}
          />
        </View>
      )}
      {!state.loading && !lottieUriLoading ? null : <VideoPlayerLoading />}

      {!state.durationInSeconds ? null : (
        <Animated.View style={styles.topbarWrapper}>
          <GenericHeadingAbsolute
            backgroundColor="transparent"
            logo="yulife"
            onLeftIconPress={!state.musicControlMounted ? onLeftIconPress : null}
            color={themeColour}
            onRightIconPress={onRightIconPress}
            rightIcon={state.showFocusScreen ? null : !state.musicControlMounted ? "COINS" : "CLOSE"}
          />
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoLogo: {
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
  currentProgressBar: {
    height: 6,
    backgroundColor: Colours.primary.p400,
    borderRadius: 3,
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
});

export default memo(VideoPlayer);
