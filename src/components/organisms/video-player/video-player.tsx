/* eslint-disable react-compiler/react-compiler */
/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import Video, {
  VideoRef,
  OnLoadData,
  OnProgressData,
  PosterResizeModeType,
  IgnoreSilentSwitchType,
  ViewType,
  OnVideoErrorData,
  ResizeMode,
} from "@atoms/video/video";
import moment from "moment";
// eslint-disable-next-line rulesdir/no-restricted-imports-clone
import { Animated, View, AppStateStatus } from "react-native";
import { useCasting, useCastingAntiCheat, AirplayButton, CastButton, showRoutePicker } from "@services/casting";
import type Lottie from "lottie-react-native";
import Config from "react-native-config";
import { CloseSvg, Image, Logo, TextTemplate } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { reducer, INITIAL_STATE, ActionTypes } from "./video-player.reducer";
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
import Logger from "@services/logger/logger";
import { useDispatch, useSelector } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import {
  useAppState,
  useBackHandler,
  useGetLottieJson,
  useGetVideoAvailableQualities,
  useScreenReaderChange,
} from "@hooks";
import { getActiveLevel, getVideoPlayerIsActive } from "@redux/levels/levels.selectors";
import { ContentItemLottie as GqlLottie } from "@graphql/__generated";
import { HourglassIcon } from "@atoms/icon/hourglass-icon";
import { t } from "@locale";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import { ChallengeSubmissionStatus } from "@redux/levels/levels.types";
import { useNetInfoInstance } from "@react-native-community/netinfo";
import { getUserDataSaverModeEnabled } from "@redux/user/user.selectors";
import { IYuLifeLogoProps } from "@atoms/logo";
import Box from "@atoms/box/box";
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
  logoType?: IYuLifeLogoProps["type"];
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
  logoType,
}: IVideoPlayerProps) => {
  const playerRef = useRef<VideoRef>(null);
  const reduxDispatch = useDispatch();
  const lottieRef = useRef<Lottie>(null);
  const opacity = useRef(new Animated.Value(1)).current;
  const handleOnEndRef = useRef<() => void>(() => {
    // attached after definition after useCasting is called
  });

  const videoPlayerIsActive = useSelector(getVideoPlayerIsActive);
  const dataSaverModeEnabled = useSelector(getUserDataSaverModeEnabled);

  const [appCurrentState, setAppCurrentState] = useState<AppStateStatus>("active");
  const { uri: lottieUri, loading: lottieUriLoading } = useGetLottieJson(lottie?.uri);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleRemotePlaybackEnded = useCallback(() => handleOnEndRef.current(), []);

  const {
    remotePlayback,
    isRemotePlaybackLoading,
    activeCastProtocol,
    isExternalPlaybackActive,
    showAirPlayButton,
    showGoogleCastButton,
    castingLabel,
    allowsExternalPlayback,
    handleLocalPlaybackExternalDisplayChange,
  } = useCasting({
    videoSourceType,
    onRemotePlaybackEnded: handleRemotePlaybackEnded,
  });

  // Anti-cheat: prevent seeking during casting
  const handleSeekToPosition = useCallback(
    (seconds: number) => {
      playerRef.current?.seek(seconds);
      remotePlayback?.seek(seconds);
    },
    [remotePlayback]
  );

  const { canSafelyMarkVideoAsCompleted } = useCastingAntiCheat({
    isCastingActive: isExternalPlaybackActive,
    currentProgressInSeconds: state.currentProgressInSeconds,
    isPaused: state.isPaused,
    activeCastProtocol,
    onCheatingDetected: handleSeekToPosition,
  });

  // force portrait mode when playing on external display, otherwise use prop
  const effectiveOrientation = isExternalPlaybackActive ? "portrait" : orientation;

  const activeLevel = useSelector(getActiveLevel);
  const themeColour = useMemo(() => (theme === "light" ? Colours.neutral.white : Colours.neutral.n800), [theme]);
  const isScreenReaderEnabled = useScreenReaderChange();

  const {
    netInfo: { type: connectionType },
  } = useNetInfoInstance();

  const { qualities, loading: qualitiesLoading } = useGetVideoAvailableQualities({
    source,
    videoSourceType,
    connectionType,
    dataSaverModeEnabled,
  });

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
    Logger.info("video_player app_state_change", {
      from: appCurrentState,
      to: appState,
      isDoneOnBackground: state.isDoneOnBackground,
      videoPlayerIsActive,
      activeCastProtocol,
    });
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
    if (!state.isDoneOnBackground) {
      return;
    }

    Logger.info("video_player resume-from-background — firing deferred onEnd", {
      appCurrentState,
      videoPlayerIsActive,
      activeCastProtocol,
    });

    handleOnEndRef.current();
  }, [appCurrentState, state.isDoneOnBackground]);

  /**
   * Set's up the initial player state and cleanup
   */
  useEffect(() => {
    return () => {
      fadeIn.stop();
      fadeOut.stop();
    };
  }, []);

  useEffect(() => {
    if (remotePlayback && remotePlayback.positionInSeconds !== null) {
      const currentProgressInSeconds = Math.floor(remotePlayback.positionInSeconds);

      if (onProgress && currentProgressInSeconds > 0) {
        onProgress(currentProgressInSeconds);
      }

      dispatch({
        type: ActionTypes.SET_CURRENT_PROGRESS,
        payload: moment.duration(currentProgressInSeconds, "seconds").asMilliseconds(),
      });
    }
  }, [remotePlayback, onProgress]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        effectiveOrientation === "landscape" &&
        !state.isPaused &&
        state.isMusicControlMounted &&
        !state.showFocusScreen &&
        !DETOX_ENABLED &&
        !isScreenReaderEnabled
      ) {
        handleFocusScreen();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [state.isMusicControlMounted, state.showFocusScreen, state.isPaused, isScreenReaderEnabled]);

  const handleOnProgress = useCallback(
    async ({ currentTime }: OnProgressData): Promise<void> => {
      if (remotePlayback && remotePlayback.positionInSeconds !== null) {
        // avoid seeking based on (incorrect) local playback state, if remote playback is active
        return;
      }

      const currentProgressInSeconds = Math.floor(currentTime);

      if (onProgress && currentProgressInSeconds > 0) {
        onProgress(currentProgressInSeconds);
      }

      dispatch({
        type: ActionTypes.SET_CURRENT_PROGRESS,
        payload: moment.duration(currentProgressInSeconds, "seconds").asMilliseconds(),
      });
    },
    [state.currentProgressInSeconds, onProgress, remotePlayback]
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

    if (remotePlayback) {
      if (remotePlayback.isPaused) {
        remotePlayback.play();
      } else {
        remotePlayback.pause();
      }

      reduxDispatch(
        logMixpanelEventActionCreator(remotePlayback.isPaused ? "video_player_is_paused" : "video_player_is_playing", {
          activeCastProtocol,
        })
      );
      return;
    }

    dispatch({ type: state.isPaused ? ActionTypes.PLAY_PLAYER : ActionTypes.PAUSE_PLAYER });

    if (lottieUri) {
      lottieRef.current?.[state.isPaused ? "resume" : "pause"]();
    }

    reduxDispatch(
      logMixpanelEventActionCreator(state.isPaused ? "video_player_is_paused" : "video_player_is_playing", {
        activeCastProtocol,
      })
    );
  }, [
    state.isPaused,
    state.durationInSeconds,
    state.showFocusScreen,
    state.currentProgressInSeconds,
    remotePlayback,
    activeCastProtocol,
  ]);

  const handleStartButton = useCallback(async (): Promise<void> => {
    try {
      dispatch({ type: ActionTypes.SET_STARTING, payload: true });
      await onStart();

      dispatch({ type: ActionTypes.SET_MUSIC_CONTROL_MOUNTED });

      if (remotePlayback) {
        await remotePlayback.startPlayback(source, {
          title,
          subtitle,
          description,
          imageUri: thumbnail,
        });
      }

      if (lottieUri) {
        lottieRef?.current?.play();
      }

      if (state.startErrorMessage) {
        dispatch({
          type: ActionTypes.SET_START_ERROR_MESSAGE,
          payload: "",
        });
      }

      reduxDispatch(
        logMixpanelEventActionCreator("video_player_button_start_pressed", { type: eventType, activeCastProtocol })
      );
    } catch (err) {
      reduxDispatch(getUserDataStart({ types: [AppDataType.activeChallenge] }));
      Logger.notify(err, {
        location: "video-player-handleStartButton",
        activeCastProtocol,
      });
      dispatch({
        type: ActionTypes.SET_START_ERROR_MESSAGE,
        payload: startErrorMessage,
      });
    } finally {
      dispatch({ type: ActionTypes.SET_STARTING, payload: false });
    }
  }, [
    onStart,
    state.durationInSeconds,
    remotePlayback,
    source,
    title,
    subtitle,
    description,
    thumbnail,
    activeCastProtocol,
    eventType,
    activeCastProtocol,
  ]);

  const handleOnEnd = useCallback(async (): Promise<void> => {
    Logger.info("video_player handleOnEnd invoked", {
      durationInSeconds: state.durationInSeconds,
      currentProgressInSeconds: state.currentProgressInSeconds,
      appCurrentState,
      activeCastProtocol,
      isPaused: state.isPaused,
    });

    if (!canSafelyMarkVideoAsCompleted(state.durationInSeconds)) {
      Logger.info("video_player handleOnEnd blocked by anti-cheat", {
        durationInSeconds: state.durationInSeconds,
        activeCastProtocol,
      });
      return;
    }

    remotePlayback?.stop();

    if (appCurrentState !== "active") {
      Logger.info("video_player handleOnEnd deferred — app backgrounded", {
        appCurrentState,
        activeCastProtocol,
      });
      dispatch({ type: ActionTypes.SET_IS_DONE_ON_BACKGROUND });
      return;
    }

    try {
      dispatch({ type: ActionTypes.SET_END_OF_SESSION_LOADING });
      await onEnd();
    } catch (err) {
      dispatch({ type: ActionTypes.SET_ON_END_ERROR });
      onError();
      Logger.notify(err, { location: "video-player-handleOnEnd", activeCastProtocol });
    }
  }, [
    onEnd,
    appCurrentState,
    onError,
    remotePlayback,
    canSafelyMarkVideoAsCompleted,
    state.durationInSeconds,
    state.currentProgressInSeconds,
    state.isPaused,
    activeCastProtocol,
  ]);
  handleOnEndRef.current = handleOnEnd;

  const handleFocusScreen = useCallback((): void => {
    if (!state.isPaused && !state.showFocusScreen) {
      dispatch({ type: ActionTypes.SET_SHOW_FOCUS_SCREEN, payload: true });
      fadeOut.start();
      reduxDispatch(logMixpanelEventActionCreator("video_player_focused", { isFocused: true, activeCastProtocol }));
    } else {
      dispatch({ type: ActionTypes.SET_SHOW_FOCUS_SCREEN, payload: false });
      fadeIn.start();
      reduxDispatch(logMixpanelEventActionCreator("video_player_focused", { isFocused: false, activeCastProtocol }));
    }
  }, [state.isPaused, state.showFocusScreen, activeCastProtocol]);

  const handleOnError = useCallback(
    async (err: OnVideoErrorData): Promise<void> => {
      Logger.notify(new Error(JSON.stringify(err?.error || {})), {
        location: "video-player-onError",
        activeCastProtocol,
      });

      if (state.retries > 0 && state.isMusicControlMounted) {
        playerRef.current?.seek(state.currentProgressInSeconds);
        dispatch({ type: ActionTypes.SET_RETRIES });
        return dispatch({ type: ActionTypes.PLAY_PLAYER });
      }

      onError();
    },
    [state.currentProgressInSeconds, state.isMusicControlMounted, state.retries, activeCastProtocol, onError]
  );

  const handleOnRightIconPress = useCallback((): void => {
    onRightIconPress(state.isMusicControlMounted);
  }, [state.isMusicControlMounted, onRightIconPress]);

  const videoUrl = useMemo(
    () =>
      DETOX_ENABLED
        ? "https://yulife-local.imgix.net/media/meditation/meditopia/15-seconds-video.mp4?ixlib=js-3.2.1&s=5270f77d06c4b2ad83e582610a75553b"
        : source,
    [source]
  );

  const videoSource = useMemo(
    () => ({
      uri: videoUrl,
      type: videoSourceType,
      minLoadRetryCount: 20,
      contentFit: effectiveOrientation === "landscape" ? ("none" as const) : ("cover" as const),
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
    () => (effectiveOrientation === "portrait" ? { logo: "yulife", logoType } : null),
    [effectiveOrientation, logoType]
  );

  const progressTimeLandscape = useMemo(
    () =>
      effectiveOrientation === "landscape"
        ? { ...styles.currentProgressTime, transform: [{ rotate: "90deg" }], opacity }
        : { ...styles.buttonWrapper, left: 0, right: 0, opacity },
    [effectiveOrientation, opacity]
  );

  const hasErrorOnReduxSubmission = useMemo(() => {
    return (activeLevel?.submissionErrorCount ?? 0) > 0;
  }, [activeLevel?.submissionErrorCount]);

  const shouldShowTryAgainError = state.showTryAgainError || hasErrorOnReduxSubmission;

  return (
    <View style={styles.wrapper}>
      <Pressable delay={1000} onPress={handleFocusScreen} style={styles.container} testID={VIDEO_PLAYER}>
        {videoSource?.uri ? (
          <Video
            ref={playerRef}
            // eslint-disable-next-line strict-null-checks/all
            source={videoSource}
            disableFocus={true}
            poster={poster ? { source: { uri: poster }, resizeMode: PosterResizeModeType.COVER } : undefined}
            resizeMode={effectiveOrientation === "landscape" ? ResizeMode.NONE : ResizeMode.COVER}
            progressUpdateInterval={1000}
            onError={handleOnError}
            onLoad={onLoad}
            onEnd={handleOnEnd}
            onProgress={handleOnProgress}
            paused={state.isPaused || remotePlayback !== null || isRemotePlaybackLoading}
            playInBackground={!isExternalPlaybackActive}
            ignoreSilentSwitch={IgnoreSilentSwitchType.IGNORE}
            showNotificationControls={!isExternalPlaybackActive}
            viewType={ViewType.TEXTURE}
            maxBitRate={qualities.bitRate}
            allowsExternalPlayback={allowsExternalPlayback}
            onExternalPlaybackChange={handleLocalPlaybackExternalDisplayChange}
            style={
              !state.isMusicControlMounted
                ? styles.backgroundVideo
                : effectiveOrientation === "landscape"
                ? styles.backgroundVideoLandscape
                : styles.backgroundVideo
            }
          />
        ) : null}
        <GenericHeadingPad />

        {!lottieUri &&
        state.isMusicControlMounted &&
        !state.isLoadingEndOfSession &&
        !isExternalPlaybackActive ? null : (
          <Image source={{ uri: poster }} width={Style.DEVICE_WIDTH} style={{ ...StyleSheet.absoluteFillObject }} />
        )}
        {!lottieUri ? null : <LottieView ref={lottieRef} resizeMode="cover" style={styles.lottie} source={lottieUri} />}
        {state.isMusicControlMounted ? null : (
          <View style={styles.videoDescription}>
            <AvPlayerDescription
              title={title}
              subtitle={subtitle}
              description={description}
              duration={state.durationInSeconds ?? 0}
              yuCoin={yuCoin ?? 0}
              stars={stars}
              tag={tag}
              logo={logo ?? ""}
            />
          </View>
        )}

        {!state.isMusicControlMounted || !videoLogo || isExternalPlaybackActive ? null : (
          <Animated.View style={[styles.videoLogo, { opacity }]}>
            <Image
              suppressLoadingUi={true}
              source={{ uri: videoLogo }}
              contentFit="contain"
              width={Style.adjust(151)}
              height={Style.adjust(151)}
              testID={VIDEO_LOGO}
            />
          </Animated.View>
        )}

        {!state.isMusicControlMounted ? null : (
          <>
            {!showTimer || state.isLoadingEndOfSession || effectiveOrientation === "landscape" ? null : (
              <View style={styles.currentProgressTime} testID={VIDEO_PLAYER_TIMER}>
                <AvPlayerTimer textType="time" time={state.currentProgressInMilliSeconds} colour={themeColour} />
                {castingLabel ? (
                  <TextTemplate type="b2" color={Colours.neutral.white} textAlign="center">
                    {castingLabel}
                  </TextTemplate>
                ) : null}
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

            {effectiveOrientation === "landscape" ? null : (
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
            <Animated.View style={progressTimeLandscape}>
              {effectiveOrientation !== "landscape" ? null : (
                <View style={styles.logoLandscape}>
                  <Logo type="inverted" width={24} height={24} />
                </View>
              )}
              {shouldShowTryAgainError ? null : (
                <VidePlayerButton
                  onPress={onButtonAction}
                  isPaused={remotePlayback ? remotePlayback.isPaused : state.isPaused}
                  disabled={state.isLoadingEndOfSession}
                  testID={VIDEO_PLAY_PAUSE_BUTTON(remotePlayback ? remotePlayback.isPaused : state.isPaused)}
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
      {!state.loading && !lottieUriLoading && !qualitiesLoading && !isRemotePlaybackLoading ? null : (
        <AvPlayerLoading />
      )}
      {!state.durationInSeconds ? null : (
        <GenericHeadingAbsolute
          backgroundColor="transparent"
          onLeftIconPress={!state.isMusicControlMounted ? onLeftIconPress : undefined}
          color={themeColour}
          {...showYuLogo}
          onRightIconPress={
            !isScreenReaderEnabled &&
            (state.showFocusScreen || (effectiveOrientation === "landscape" && state.isMusicControlMounted))
              ? undefined
              : handleOnRightIconPress
          }
          rightIcon="CLOSE"
          rightIconAccessibilityLabel={
            isScreenReaderEnabled && activeLevel?.id
              ? t("screens.challenge_progress.accessibility.exit_challenge")
              : undefined
          }
        />
      )}
      {!state.isMusicControlMounted || effectiveOrientation === "portrait" || isScreenReaderEnabled ? null : (
        <Animated.View style={[styles.closeButton, { opacity }]}>
          <Pressable delay={1000} testID={MEDIA_PORTRAIT_CLOSE} onPress={handleOnRightIconPress}>
            <CloseSvg size={Style.adjust(24)} stroke={"white"} />
          </Pressable>
        </Animated.View>
      )}

      {/* Cast buttons - visible before video starts */}
      {!state.isMusicControlMounted && (showAirPlayButton || showGoogleCastButton) ? (
        <Box position="absolute" top={51} right={65} flexDirection="row" gap={12} zIndex={9999} elevation={9999}>
          {showAirPlayButton ? (
            <Pressable
              size={44}
              justifyContent="center"
              alignItems="center"
              enableAnimation={true}
              onPress={() => {
                showRoutePicker({ prioritizesVideoDevices: true });
              }}
            >
              <AirplayButton tintColor={themeColour} prioritizesVideoDevices={true} />
            </Pressable>
          ) : null}
          {showGoogleCastButton ? (
            <Pressable size={44} justifyContent="center" alignItems="center" enableAnimation={true}>
              {/* eslint-disable-next-line react-native/no-inline-styles */}
              <CastButton style={{ width: 24, height: 24, tintColor: themeColour }} />
            </Pressable>
          ) : null}
        </Box>
      ) : null}
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
    start: 0,
    end: 0,
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
    start: 0,
    width: "13%",
  },
  duration: {
    position: "absolute",
    alignItems: "flex-end",
    end: 0,
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
    start: 0,
    end: 0,
    paddingTop: Style.adjust(90),
    justifyContent: "center",
  },
  buttonWrapper: {
    position: "absolute",
    bottom: Style.adjust(40),
    justifyContent: "center",
    alignItems: "center",
    start: 0,
    end: 0,
  },
  starSessionButton: {
    position: "absolute",
    bottom: 0,
    start: 0,
    end: 0,
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
    start: 0,
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
    end: 20,
    bottom: 40,
    width: 30,
    height: 30,
  },
  logoLandscape: {
    position: "absolute",
    start: 0,
    end: 0,
    alignItems: "center",
    height: Style.DEVICE_WIDTH - 30,
  },
  errorButton: {
    marginTop: Style.adjust(15),
  },
});

export default memo(VideoPlayer);
