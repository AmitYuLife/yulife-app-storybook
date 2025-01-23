import React, { memo, useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import Video, {
  VideoRef,
  OnLoadData,
  OnProgressData,
  PosterResizeModeType,
  ResizeMode,
  IgnoreSilentSwitchType,
  ViewType,
} from "react-native-video";
import moment from "moment";
import { Animated, StyleSheet, View, AppStateStatus } from "react-native";
import Lottie from "lottie-react-native";
import Config from "react-native-config";
import { CloseSvg, Image, Logo, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { IState, IAction, reducer, INITIAL_STATE, ActionTypes } from "./video-player.reducer";
import { Button, LottieView, Pressable, VidePlayerButton } from "@molecules";
import {
  AvPlayerDescription,
  AvPlayerLoading,
  AvPlayerProgressBar,
  AvPlayerTimer,
  GenericHeadingAbsolute,
  GenericHeadingLogo,
  GenericHeadingPad,
} from "@organisms";
import { PlayIcon } from "@atoms/icon/play-icon";
import {
  VIDEO_PLAYER_TIMER,
  VIDEO_PROGRESS_BAR,
  VIDEO_PLAY_PAUSE_BUTTON,
  VIDEO_PLAYER,
  VIDEO_LOGO,
  MEDIA_PORTRAIT_CLOSE,
} from "@ids";
import { DETOX_ENABLED } from "@services/socket";
import Logger from "@services/logging/logger";
import { useDispatch, useSelector } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { useAppState, useBackHandler, useGetLottieJson } from "@hooks";
import { getActiveLevel, getVideoPlayerIsActive } from "@redux/levels/levels.selectors";
import { ContentItemLottie as GqlLottie } from "@graphql/__generated";
import { HourglassIcon } from "@atoms/icon/hourglass-icon";
import { t } from "@locale";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import { ChallengeSubmissionStatus } from "@redux/levels/levels.types";
export interface IVideoPlayerProps {
  source: string;
  poster?: string;
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  tag?: string;
  thumbnail: string;
  logo?: string;
  videoLogo?: string;
  onStart: () => void;
  onProgress?: (seconds: number) => void;
  onEnd: () => void;
  onError: () => void;
  onLeftIconPress: () => void;
  onRightIconPress: (showModal: boolean) => void;
  startErrorMessage?: string;
  theme: "light" | "dark";
  yuCoin?: number;
  stars?: number;
  lottie?: GqlLottie;
  eventType: string;
  videoSourceType?: string;
  showTimer?: boolean;
  orientation: "landscape" | "portrait";
  startChallengeButtonLabel: string;
  startTimeInSeconds?: number;
  autoPlay?: boolean;
}

const commonProps = {
  duration: 300,
  useNativeDriver: true,
};

const VideoPlayer = ({
  source,
  poster,
  title,
  subtitle,
  description,
  tag,
  logo,
  videoLogo,
  onEnd,
  onProgress,
  onError,
  onStart,
  onLeftIconPress,
  onRightIconPress,
  startErrorMessage,
  theme,
  yuCoin,
  stars,
  lottie,
  eventType,
  videoSourceType = "mp4",
  showTimer = true,
  orientation,
  startTimeInSeconds,
  startChallengeButtonLabel,
  autoPlay = false,
  thumbnail,
}: IVideoPlayerProps) => {
  const playerRef = useRef<VideoRef>();
  const reduxDispatch = useDispatch();
  const lottieRef = useRef<Lottie>();
  const opacity = useRef(new Animated.Value(1)).current;
  const videoPlayerIsActive = useSelector(getVideoPlayerIsActive);
  const [appCurrentState, setAppCurrentState] = useState<AppStateStatus>("active");
  const { uri: lottieUri, loading: lottieUriLoading } = useGetLottieJson(lottie?.uri);
  const [state, dispatch] = useReducer<React.Reducer<IState, IAction>>(reducer, INITIAL_STATE);

  const activeLevel = useSelector(getActiveLevel);
  const themeColour = useMemo(() => (theme === "light" ? Colours.neutral.white : Colours.neutral.n800), [theme]);

  const fadeIn = Animated.timing(opacity, {
    toValue: 1,
    ...commonProps,
  });

  const fadeOut = Animated.timing(opacity, {
    toValue: 0,
    ...commonProps,
  });

  useBackHandler(() => {
    if (!state.isMusicControlMounted) {
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

  useEffect(() => {
    if (autoPlay) {
      dispatch({ type: ActionTypes.SET_MUSIC_CONTROL_MOUNTED });
    }
  }, [autoPlay]);

  /**
   * Triggers the `onEnd` ballback when the video is finished
   */
  useEffect(() => {
    const isPlayerActive = appCurrentState === "active" && videoPlayerIsActive;
    if (state.isDoneOnBackground && isPlayerActive) {
      dispatch({ type: ActionTypes.SET_END_OF_SESSION_LOADING });
      onEnd();
    }
  }, [appCurrentState]);

  /**
   * Set's up the initial player state
   */
  useEffect(() => {
    return () => {
      fadeIn.stop();
      fadeOut.stop();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        orientation === "landscape" &&
        !state.isPaused &&
        state.isMusicControlMounted &&
        !state.showFocusScreen &&
        !DETOX_ENABLED
      ) {
        handleFocusScreen();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [state.isMusicControlMounted, state.showFocusScreen, state.isPaused]);

  const handleOnProgress = useCallback(
    async ({ currentTime }: OnProgressData): Promise<void> => {
      const currentProgressInSeconds = Math.floor(currentTime);

      if (onProgress && currentProgressInSeconds > 0) {
        onProgress(currentProgressInSeconds);
      }

      dispatch({
        type: ActionTypes.SET_CURRENT_PROGRESS,
        payload: moment.duration(currentProgressInSeconds, "seconds").asMilliseconds(),
      });
    },
    [state.currentProgressInSeconds, onProgress]
  );

  const onLoad = useCallback(
    ({ duration }: OnLoadData): void => {
      const time = moment.duration(duration, "seconds").asMilliseconds();
      dispatch({ type: ActionTypes.SET_DURATION, payload: time });
      if (startTimeInSeconds) {
        playerRef.current?.seek(startTimeInSeconds);
      }
    },
    [startTimeInSeconds]
  );

  const onButtonAction = useCallback(async () => {
    if (Math.floor(state.durationInSeconds) <= state.currentProgressInSeconds && !state.isPaused) {
      return handleOnEnd();
    }

    if (state.showFocusScreen) {
      handleFocusScreen();
      return;
    }

    dispatch({ type: state.isPaused ? ActionTypes.PLAY_PLAYER : ActionTypes.PAUSE_PLAYER });

    if (lottieUri) {
      lottieRef?.current[state.isPaused ? "resume" : "pause"]();
    }

    reduxDispatch(logMixpanelEventActionCreator(state.isPaused ? "video_player_is_paused" : "video_player_is_playing"));
  }, [state.isPaused, state.durationInSeconds, state.showFocusScreen, state.currentProgressInSeconds]);

  const handleStartButton = useCallback(async (): Promise<void> => {
    try {
      dispatch({ type: ActionTypes.SET_STARTING, payload: true });
      await onStart();

      dispatch({ type: ActionTypes.SET_MUSIC_CONTROL_MOUNTED });

      if (lottieUri) {
        lottieRef?.current?.play();
      }

      if (state.startErrorMessage) {
        dispatch({
          type: ActionTypes.SET_START_ERROR_MESSAGE,
          payload: "",
        });
      }

      reduxDispatch(logMixpanelEventActionCreator("video_player_button_start_pressed", { type: eventType }));
    } catch (err) {
      reduxDispatch(getUserDataStart({ types: [AppDataType.activeChallenge] }));
      Logger.error(err, {
        location: "video-player-handleStartButton",
      });
      dispatch({
        type: ActionTypes.SET_START_ERROR_MESSAGE,
        payload: startErrorMessage,
      });
    } finally {
      dispatch({ type: ActionTypes.SET_STARTING, payload: false });
    }
  }, [onStart, state.durationInSeconds]);

  const handleOnEnd = useCallback(async (): Promise<void> => {
    if (appCurrentState !== "active") {
      dispatch({ type: ActionTypes.SET_IS_DONE_ON_BACKGROUND });
      return;
    }

    try {
      dispatch({ type: ActionTypes.SET_END_OF_SESSION_LOADING });
      await onEnd();
    } catch (err) {
      dispatch({ type: ActionTypes.SET_ON_END_ERROR });
      onError();
      Logger.error(err, { location: "video-player-handleOnEnd" });
    }
  }, [onEnd, appCurrentState, onError]);

  const handleFocusScreen = useCallback((): void => {
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
    async (err: any): Promise<void> => {
      Logger.error(new Error(JSON.stringify(err?.error || {})), { location: "video-player-onError" });

      if (state.retries > 0 && state.isMusicControlMounted) {
        playerRef.current.seek(state.currentProgressInSeconds);
        dispatch({ type: ActionTypes.SET_RETRIES });
        return dispatch({ type: ActionTypes.PLAY_PLAYER });
      }

      onError();
    },
    [state.currentProgressInSeconds, state.isMusicControlMounted, state.retries]
  );

  const handleOnRightIconPress = useCallback((): void => {
    onRightIconPress(state.isMusicControlMounted);
  }, [state.isMusicControlMounted]);

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
      metadata: {
        title,
        subtitle,
        description,
        imageUri: thumbnail,
      },
    }),
    [videoUrl, videoSourceType, title, subtitle, description, thumbnail]
  );

  const showYuLogo: { logo: GenericHeadingLogo } | null = useMemo(
    () => (orientation === "portrait" ? { logo: "yulife" } : null),
    [orientation]
  );

  const progressTimeLandscape = useMemo(
    () =>
      orientation === "landscape"
        ? { ...styles.currentProgressTime, transform: [{ rotate: "90deg" }], opacity }
        : [styles.buttonWrapper, { opacity }],
    [orientation, opacity]
  );

  const hasErrorOnReduxSubmission = useMemo(() => {
    return activeLevel.submissionErrorCount > 0;
  }, [activeLevel?.submissionErrorCount]);

  const shouldShowTryAgainError = state.showTryAgainError || hasErrorOnReduxSubmission;

  return (
    <View style={styles.wrapper}>
      <Pressable delay={1000} onPress={handleFocusScreen} style={styles.container} testID={VIDEO_PLAYER}>
        <Video
          ref={playerRef}
          source={videoSource}
          minLoadRetryCount={20}
          disableFocus={true}
          poster={poster}
          posterResizeMode={PosterResizeModeType.COVER}
          progressUpdateInterval={1000}
          resizeMode={orientation === "landscape" ? ResizeMode.NONE : ResizeMode.COVER}
          onError={handleOnError}
          onLoad={onLoad}
          onEnd={handleOnEnd}
          onProgress={handleOnProgress}
          paused={state.isPaused}
          playInBackground={true}
          ignoreSilentSwitch={IgnoreSilentSwitchType.IGNORE}
          showNotificationControls={true}
          viewType={ViewType.TEXTURE}
          useTextureView={true}
          style={
            !state.isMusicControlMounted
              ? styles.backgroundVideo
              : orientation === "landscape"
              ? styles.backgroundVideoLandscape
              : styles.backgroundVideo
          }
        />
        <GenericHeadingPad />

        {!lottieUri && state.isMusicControlMounted && !state.isLoadingEndOfSession ? null : (
          <Image source={{ uri: poster }} width={Style.DEVICE_WIDTH} style={{ ...StyleSheet.absoluteFillObject }} />
        )}
        {!lottieUri ? null : <LottieView ref={lottieRef} resizeMode="cover" style={styles.lottie} source={lottieUri} />}
        {state.isMusicControlMounted ? null : (
          <View style={styles.videoDescription}>
            <AvPlayerDescription
              title={title}
              subtitle={subtitle}
              description={description}
              duration={state.durationInSeconds}
              yuCoin={yuCoin}
              stars={stars}
              tag={tag}
              logo={logo}
            />
          </View>
        )}

        {!state.isMusicControlMounted || !videoLogo ? null : (
          <Animated.View style={[styles.videoLogo, { opacity }]}>
            <Image
              suppressLoadingUi={true}
              source={{ uri: videoLogo }}
              resizeMode="contain"
              width={Style.adjust(151)}
              height={Style.adjust(151)}
              testID={VIDEO_LOGO}
            />
          </Animated.View>
        )}

        {!state.isMusicControlMounted ? null : (
          <>
            {!showTimer || state.isLoadingEndOfSession || orientation === "landscape" ? null : (
              <View style={styles.currentProgressTime} testID={VIDEO_PLAYER_TIMER}>
                <AvPlayerTimer textType="time" time={state.currentProgressInMilliSeconds} colour={themeColour} />
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

            {orientation === "landscape" ? null : (
              <Animated.View style={[styles.progressBarContainer, { opacity }]} testID={VIDEO_PROGRESS_BAR}>
                <View style={styles.currentProgress}>
                  <AvPlayerTimer textType="l2b" time={state.currentProgressInMilliSeconds} colour={themeColour} />
                </View>
                <View style={[styles.progressBar, { backgroundColor: themeColour }]}>
                  <AvPlayerProgressBar
                    currentProgress={state.currentProgressInSeconds}
                    duration={state.durationInSeconds}
                  />
                </View>
                <View style={styles.duration}>
                  <AvPlayerTimer textType="l2b" time={state.durationInMilliSeconds} colour={themeColour} />
                </View>
              </Animated.View>
            )}

            <Animated.View style={progressTimeLandscape} testID={VIDEO_PLAY_PAUSE_BUTTON(state.isPaused)}>
              {orientation !== "landscape" ? null : (
                <View style={styles.logoLandscape}>
                  <Logo type="inverted" width={24} height={24} />
                </View>
              )}
              {shouldShowTryAgainError ? null : (
                <VidePlayerButton
                  onPress={onButtonAction}
                  isPaused={state.isPaused}
                  disabled={state.isLoadingEndOfSession}
                />
              )}
            </Animated.View>
          </>
        )}
      </Pressable>

      {!state.startErrorMessage ? null : (
        <View style={styles.error}>
          <TextTemplate type="b2" textAlign="center" color={themeColour}>
            {state.startErrorMessage}
          </TextTemplate>
        </View>
      )}

      {state.isMusicControlMounted ? null : (
        <View style={styles.starSessionButton}>
          <Button
            testID="video-player-start-button"
            translatedLabel={startChallengeButtonLabel}
            onPress={handleStartButton}
            leftIcon={<PlayIcon />}
            isLoading={state.isStarting}
          />
        </View>
      )}
      {!state.loading && !lottieUriLoading ? null : <AvPlayerLoading />}

      {!state.durationInSeconds ? null : (
        <Animated.View style={styles.topbarWrapper}>
          <GenericHeadingAbsolute
            backgroundColor="transparent"
            onLeftIconPress={!state.isMusicControlMounted ? onLeftIconPress : null}
            color={themeColour}
            {...showYuLogo}
            onRightIconPress={
              state.showFocusScreen || (orientation === "landscape" && state.isMusicControlMounted)
                ? null
                : handleOnRightIconPress
            }
            rightIcon="CLOSE"
          />
        </Animated.View>
      )}

      {!state.isMusicControlMounted || orientation === "portrait" ? null : (
        <Animated.View style={[styles.closeButton, { opacity }]}>
          <Pressable delay={1000} testID={MEDIA_PORTRAIT_CLOSE} onPress={handleOnRightIconPress}>
            <CloseSvg size={Style.adjust(24)} stroke={"white"} />
          </Pressable>
        </Animated.View>
      )}
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

  backgroundVideoLandscape: {
    width: Style.DEVICE_WIDTH * 1.8,
    height: "100%",
    transform: [{ rotate: "90deg" }],
    alignSelf: "center",
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
    width: "100%",
  },
  endOfSessionLoading: {
    marginTop: Style.adjust(16),
  },
  closeButton: {
    position: "absolute",
    right: 20,
    bottom: 40,
    width: 30,
    height: 30,
  },
  logoLandscape: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    height: Style.DEVICE_WIDTH - 30,
  },
  errorButton: {
    marginTop: Style.adjust(15),
  },
});

export default memo(VideoPlayer);
