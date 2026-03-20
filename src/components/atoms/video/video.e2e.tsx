import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { View } from "react-native";

const SIMULATED_DURATION_SECONDS = 15;

export type VideoRef = {
  seek: (time: number) => void;
};

export type OnLoadData = {
  duration: number;
};

export type OnProgressData = {
  currentTime: number;
};

export enum PosterResizeModeType {
  STRETCH = "stretch",
  REPEAT = "repeat",
  COVER = "cover",
  CONTAIN = "contain",
}

export enum ResizeMode {
  STRETCH = "stretch",
  COVER = "cover",
  CONTAIN = "contain",
  NONE = "none",
}

export enum IgnoreSilentSwitchType {
  INHERIT = "inherit",
  IGNORE = "ignore",
  OBEY = "obey",
}

export enum ViewType {
  SURFACE = 0,
  TEXTURE = 1,
}

interface VideoProps {
  style?: any;
  onLoad?: (data: OnLoadData) => void;
  onProgress?: (data: OnProgressData) => void;
  onEnd?: () => void;
  onError?: (error: any) => void;
  paused?: boolean;
  [key: string]: any;
}

const Video = forwardRef<VideoRef, VideoProps>(({ style, onLoad, onProgress, onEnd, paused }, ref) => {
  const currentTimeRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const onProgressRef = useRef(onProgress);
  const onEndRef = useRef(onEnd);

  useEffect(() => {
    onProgressRef.current = onProgress;
  }, [onProgress]);

  useEffect(() => {
    onEndRef.current = onEnd;
  }, [onEnd]);

  useImperativeHandle(ref, () => ({
    seek: (time: number) => {
      currentTimeRef.current = time;
    },
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      onLoad?.({ duration: SIMULATED_DURATION_SECONDS });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (paused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      return;
    }

    intervalRef.current = setInterval(() => {
      currentTimeRef.current += 1;
      onProgressRef.current?.({ currentTime: currentTimeRef.current });

      if (currentTimeRef.current >= SIMULATED_DURATION_SECONDS) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }

        onEndRef.current?.();
      }
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [paused]);

  return <View style={style} />;
});

export default Video;
