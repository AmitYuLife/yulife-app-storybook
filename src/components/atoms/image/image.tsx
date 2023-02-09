import React, { memo, useMemo, useState, useCallback } from "react";
import { StyleSheet, View, ViewStyle, ActivityIndicator, StyleProp, ColorValue } from "react-native";
import FastImage, { FastImageProps, ImageStyle, OnLoadEvent, ResizeMode, Source } from "react-native-fast-image";
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
  tintColor?: ColorValue;
  /**
   * suppresses loading ui
   * usually for prefetched assets that we know
   * are going to be instantly loaded
   */
  suppressLoadingUi?: boolean;
  CustomLoader?: React.ReactNode;
  onLoad?: (event: OnLoadEvent) => void;
  accessible?: FastImageProps["accessible"];
  accessibilityLabel?: FastImageProps["accessibilityLabel"];
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
      resizeMode = "contain",
      suppressLoadingUi,
      tintColor,
      onLoad,
      accessible,
      accessibilityLabel,
      CustomLoader,
    } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [nativeSize, setNativeSize] = useState({ height: propHeight, width: propWidth });

    const handleLoadStart = useCallback(() => setIsLoading(true), []);

    const handleLoadState = useCallback(
      (event: OnLoadEvent) => {
        const {
          nativeEvent: { width: nativeWidth, height: nativeHeight },
        } = event;
        setIsLoading(false);
        if (onLoad) {
          onLoad(event);
        }

        if (propHeight) {
          return;
        }

        // In rare occasions nativeWidth can be 0
        const nativeDimensions = { width: nativeWidth || propWidth, height: nativeHeight };
        if (!shallowEqual(nativeDimensions, nativeSize)) {
          setNativeSize(nativeDimensions);
        }
      },
      [propHeight, propWidth]
    );

    const dimensions = useMemo(() => {
      const calcHeight = loadingHeight || propHeight || (nativeSize.height / nativeSize.width) * propWidth;
      return { width: propWidth, height: calcHeight };
    }, [propHeight, propWidth, loadingHeight, nativeSize]);

    const containerStyle = useMemo(() => [styles.wrapper, dimensions, style], [dimensions, style]);

    const imageStyles = useMemo(() => [dimensions, imageStyle], [dimensions, imageStyle]);

    return (
      <View pointerEvents="none" style={containerStyle} testID={testID}>
        <FastImage
          onLoadStart={handleLoadStart}
          onLoad={handleLoadState}
          style={imageStyles}
          source={source}
          resizeMode={resizeMode}
          tintColor={tintColor}
          accessible={accessible}
          accessibilityLabel={accessibilityLabel}
        />
        <Loading
          isLoading={isLoading}
          suppressLoadingUi={suppressLoadingUi}
          theme={theme}
          CustomLoader={CustomLoader}
        />
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

type LoadingProps = {
  isLoading: boolean;
  suppressLoadingUi: Props["suppressLoadingUi"];
  theme: Props["theme"];
  CustomLoader?: Props["CustomLoader"];
};

const Loading = ({ isLoading, suppressLoadingUi, theme, CustomLoader }: LoadingProps) => {
  if (!suppressLoadingUi && isLoading) {
    return (
      <View style={styles.loader}>{CustomLoader || <ActivityIndicator size="large" color={getColor(theme)} />}</View>
    );
  }

  return null;
};

const getColor = (theme: Props["theme"]) => (theme === "light" ? Colours.neutral.white : Colours.primary.p600);
