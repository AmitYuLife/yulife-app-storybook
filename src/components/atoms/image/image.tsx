import React, { memo, useMemo, useState, useCallback } from "react";
import { StyleSheet, View, ViewStyle, ActivityIndicator, StyleProp } from "react-native";
import FastImage, { ImageStyle, OnLoadEvent, ResizeMode, Source } from "react-native-fast-image";
import { Colours } from "@styles";
import { shallowEqual } from "react-redux";

interface Props {
  width: number;
  height?: number;
  loadingHeight?: number;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  source: Source | number;
  theme?: "light" | "dark";
  testID?: string;
  resizeMode?: ResizeMode;
  /**
   * suppresses loading ui
   * usually for prefetched assets that we know
   * are going to be instantly loaded
   */
  suppressLoadingUi?: boolean;
}

export const Image = memo(
  (props: Props) => {
    const {
      width: propWidth,
      height: propHeight = 0,
      loadingHeight,
      style,
      imageStyle,
      theme = "light",
      source,
      testID,
      resizeMode,
      suppressLoadingUi,
    } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [nativeSize, setNativeSize] = useState({ height: propHeight, width: propWidth });

    const handleLoadStart = useCallback(() => setIsLoading(true), []);

    const handleLoadState = useCallback(
      ({ nativeEvent: { width: nativeWidth, height: nativeHeight } }: OnLoadEvent) => {
        setIsLoading(false);
        if (propHeight) {
          return;
        }

        // In rare occasions nativeWidth can be 0
        setNativeSize({ width: nativeWidth || propWidth, height: nativeHeight });
      },
      [propHeight, propWidth]
    );

    const { width, height } = useMemo(() => {
      const calcHeight =
        (isLoading && loadingHeight) || propHeight || (nativeSize.height / nativeSize.width) * propWidth;
      return { width: propWidth, height: calcHeight };
    }, [propHeight, propWidth, isLoading, loadingHeight, nativeSize]);

    return (
      <View style={[styles.wrapper, { height, width }, style]} testID={testID}>
        <FastImage
          onLoadStart={handleLoadStart}
          onLoad={handleLoadState}
          style={[{ height, width }, imageStyle]}
          source={source}
          resizeMode={resizeMode}
        />
        {isLoading && !suppressLoadingUi ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color={getColor(theme)} />
          </View>
        ) : null}
      </View>
    );
  },
  ({ source: prevSource, ...prevProps }, { source: nextSource, ...nextProp }) =>
    shallowEqual(prevProps, nextProp) && shallowEqual(prevSource, nextSource)
);

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  loader: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
});

const getColor = (theme: Props["theme"]) => (theme === "light" ? Colours.neutral.white : Colours.primary.p600);
