import React, { memo, useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import Video from "react-native-video";
import moment from "moment";
import MusicControl, { Command } from "react-native-music-control";
import { Animated, StyleSheet, View } from "react-native";
import { Loading, TextTemplate } from "@atoms";
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

interface IProps {
  source: string;
  poster: string;
  title: string;
  description: string;
  shortDescription: string;
  cover: string;
  onEnd: () => void;
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
  cover,
  onEnd,
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
      state: state.isPaused ? MusicControl.STATE_PAUSED : MusicControl.STATE_PLAYING,
      elapsedTime: state.currentProgressInSeconds,
    });
  }, [state.isPaused]);

  const onProgress = useCallback(
    ({ currentTime }) => {
      const time = moment.duration(currentTime, "seconds").asMilliseconds();
      const currentProgress = Math.floor(currentTime);
      const formatCurrentProgressInSeconds = Math.floor(state.currentProgressInSeconds);

      if (formatCurrentProgressInSeconds !== currentProgress && formatCurrentProgressInSeconds < currentProgress) {
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
    dispatch({ type: ActionTypes.SET_LOADING, payload: isBuffering });
  }, []);

  const onButtonAction = useCallback(() => {
    if (!state.musicControlMounted) {
      MusicControl.setNowPlaying({
        title,
        artwork: cover,
        artist: shortDescription,
        duration: state.durationInSeconds,
      });
      return dispatch({ type: ActionTypes.SET_MUSIC_CONTROL_MOUNTED });
    }

    return dispatch({ type: state.isPaused ? ActionTypes.PLAY_PLAYER : ActionTypes.PAUSE_PLAYER });
  }, [state.isPaused, state.durationInSeconds]);

  const handleFocusScreen = useCallback(() => {
    if (!state.isPaused && !state.showFocusScreen) {
      dispatch({ type: ActionTypes.SET_SHOW_FOCUS_SCREEN, payload: true });
      fadeOut.start();
    } else {
      dispatch({ type: ActionTypes.SET_SHOW_FOCUS_SCREEN, payload: false });
      fadeIn.start();
    }
  }, [state.isPaused, state.showFocusScreen]);

  return (
    <>
      <PressableWithDelay onPress={handleFocusScreen} style={styles.container}>
        <Video
          source={{ uri: source }}
          poster={poster}
          posterResizeMode="cover"
          resizeMode="cover"
          onError={(e) => console.log(e, "onError")}
          onLoad={onLoad}
          onEnd={onEnd}
          onProgress={onProgress}
          onBuffer={onBuffer}
          paused={state.isPaused}
          playInBackground={true}
          ignoreSilentSwitch="ignore"
          style={styles.backgroundVideo}
        />
        <GenericHeadingPad />

        {!state.musicControlMounted ? null : (
          <Animated.View style={[styles.progressBarContainer, { opacity }]}>
            <View style={[styles.progressBar, { backgroundColor: themeColour }]}>
              <View
                style={[
                  styles.currentProgressBar,
                  {
                    width:
                      `${Math.round((state.currentProgressInMilliSeconds / state.durationInMilliSeconds) * 100)}%` || 0,
                  },
                ]}
              />
            </View>
            <View style={styles.countDown}>
              <VideoPlayerTimer
                textType="l2"
                time={state.durationInMilliSeconds - state.currentProgressInMilliSeconds}
                colour={themeColour}
              />
            </View>
          </Animated.View>
        )}

        {state.musicControlMounted ? null : (
          <View style={styles.videoDescription}>
            <VideoPlayerDescription
              title={title}
              description={description}
              duration={state.durationInSeconds}
              yuCoin={yuCoin}
              stars={stars}
            />
          </View>
        )}

        {!state.musicControlMounted ? null : (
          <>
            <Animated.View style={[styles.title, { opacity }]}>
              <TextTemplate type="h3" color={themeColour}>
                {title}
              </TextTemplate>
            </Animated.View>
            <View style={styles.currentProgressTime}>
              <VideoPlayerTimer textType="time" time={state.currentProgressInMilliSeconds} colour={themeColour} />
              {!state.loading ? null : (
                <View style={styles.loading}>
                  <Loading />
                </View>
              )}
            </View>
            <Animated.View style={[styles.buttonWrapper, { opacity }]}>
              <VidePlayerButton onPress={onButtonAction} isPaused={state.isPaused} />
            </Animated.View>
          </>
        )}
      </PressableWithDelay>

      {state.musicControlMounted ? null : (
        <View style={styles.starSessionButton}>
          <Button label="Start session" onPress={onButtonAction} leftIcon={<PlayIcon />} />
        </View>
      )}
      {state.durationInSeconds ? null : <VideoPlayerLoading />}

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
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    width: "87%",
  },
  currentProgressBar: {
    height: 6,
    backgroundColor: Colours.primary.p400,
    borderRadius: 3,
  },
  countDown: {
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
    flex: 0.7,
  },
  loading: {
    position: "absolute",
    paddingTop: Style.adjust(90),
  },
  buttonWrapper: {
    position: "absolute",
    bottom: Style.adjust(130),
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
