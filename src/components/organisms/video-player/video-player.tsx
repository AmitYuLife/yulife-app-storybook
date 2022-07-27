import React, { memo, useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import Video from "react-native-video";
import moment from "moment";
import MusicControl, { Command } from "react-native-music-control";
import { Animated, StyleSheet, View } from "react-native";
import { Loading } from "@atoms";
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
import { DETOX_ENABLED } from "@services/socket";
import Logger from "@services/logging/logger";

interface IProps {
  source: string;
  poster: string;
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  logo: string;
  onStart: () => void;
  onEnd: () => void;
  onError: () => void;
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  theme: "light" | "dark";
  yuCoin: number;
  stars: number;
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
  onEnd,
  onError,
  onStart,
  onLeftIconPress,
  onRightIconPress,
  theme,
  shortDescription,
  yuCoin,
  stars,
}: IProps) => {
  const [state, dispatch] = useReducer<React.Reducer<IState, IAction>>(reducer, INITIAL_STATE);
  const opacity = useRef(new Animated.Value(1)).current;
  const themeColour = useMemo(() => (theme === "light" ? Colours.neutral.white : Colours.neutral.n800), [theme]);

  const fadeIn = Animated.timing(opacity, {
    toValue: 1,
    ...commonProps,
  });
  const fadeOut = Animated.timing(opacity, {
    toValue: 0,
    ...commonProps,
  });

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
      MusicControl.stopControl();
    };
  }, []);

  useEffect(() => {
    MusicControl.updatePlayback({
      state: state.isPaused || state.isBuffering ? MusicControl.STATE_PAUSED : MusicControl.STATE_PLAYING,
      elapsedTime: state.currentProgressInSeconds,
    });
    Logger.logMixpanelEvent(state.isPaused ? "video_player_is_paused" : "video_player_is_playing");
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

  const onBuffer = useCallback(({ isBuffering }) => {
    dispatch({ type: ActionTypes.SET_BUFFERING, payload: isBuffering });
    Logger.logMixpanelEvent("video_player_is_buffering", { isBuffering });
  }, []);

  const onButtonAction = useCallback(() => {
    dispatch({ type: state.isPaused ? ActionTypes.PLAY_PLAYER : ActionTypes.PAUSE_PLAYER });
    Logger.logMixpanelEvent("video_player_play_button_start_pressed");
  }, [state.isPaused, state.durationInSeconds]);

  const handleStartButton = useCallback(async () => {
    dispatch({ type: ActionTypes.SET_LOADING, payload: true });
    try {
      await onStart();
      MusicControl.setNowPlaying({
        title,
        artwork: thumbnail,
        artist: shortDescription,
        duration: state.durationInSeconds,
      });
      dispatch({ type: ActionTypes.SET_MUSIC_CONTROL_MOUNTED });
      Logger.logMixpanelEvent("video_player_button_start_pressed");
    } catch (err) {
      Logger.error(err, { location: "video-player-handleStartButton" });
    } finally {
      dispatch({ type: ActionTypes.SET_LOADING, payload: false });
    }
  }, [onStart, state.durationInSeconds]);

  const handleOnEnd = useCallback(async () => {
    try {
      await onEnd();
      MusicControl.resetNowPlaying();
    } catch (err) {
      Logger.error(err, { location: "video-player-handleOnEnd" });
    }
  }, [onEnd]);

  const handleFocusScreen = useCallback(() => {
    if (!state.isPaused && !state.showFocusScreen) {
      dispatch({ type: ActionTypes.SET_SHOW_FOCUS_SCREEN, payload: true });
      fadeOut.start();
      Logger.logMixpanelEvent("video_player_focused", { isFocused: true });
    } else {
      dispatch({ type: ActionTypes.SET_SHOW_FOCUS_SCREEN, payload: false });
      fadeIn.start();
      Logger.logMixpanelEvent("video_player_focused", { isFocused: false });
    }
  }, [state.isPaused, state.showFocusScreen]);

  const handleOnError = useCallback(async (err) => {
    onError();
    Logger.error(err, { location: "video-player-onError" });
  }, []);

  const videoUrl = useMemo(
    () =>
      DETOX_ENABLED
        ? "https://yulife-local.imgix.net/media/meditation/meditopia/15-seconds-video.mp4?ixlib=js-3.2.1&s=5270f77d06c4b2ad83e582610a75553b"
        : source,
    [source, DETOX_ENABLED]
  );

  return (
    <>
      <PressableWithDelay onPress={handleFocusScreen} style={styles.container}>
        <Video
          source={{ uri: videoUrl }}
          poster={poster}
          posterResizeMode="cover"
          resizeMode="cover"
          onError={handleOnError}
          onLoad={onLoad}
          onEnd={handleOnEnd}
          onProgress={onProgress}
          onBuffer={onBuffer}
          paused={state.isPaused}
          playInBackground={true}
          ignoreSilentSwitch="ignore"
          style={styles.backgroundVideo}
        />
        <GenericHeadingPad />

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

        {!state.musicControlMounted ? null : (
          <>
            <View style={styles.currentProgressTime}>
              <VideoPlayerTimer textType="time" time={state.currentProgressInMilliSeconds} colour={themeColour} />
              {!state.isBuffering ? null : (
                <View style={styles.loading}>
                  <Loading />
                </View>
              )}
            </View>
            <Animated.View style={[styles.progressBarContainer, { opacity }]}>
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
            <Animated.View style={[styles.buttonWrapper, { opacity }]}>
              <VidePlayerButton onPress={onButtonAction} isPaused={state.isPaused} />
            </Animated.View>
          </>
        )}
      </PressableWithDelay>

      {state.musicControlMounted ? null : (
        <View style={styles.starSessionButton}>
          <Button label="Start session" onPress={handleStartButton} leftIcon={<PlayIcon />} />
        </View>
      )}
      {!state.loading ? null : <VideoPlayerLoading />}

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
});

export default memo(VideoPlayer);
