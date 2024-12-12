import React, { memo, useMemo, useState, useCallback } from "react";
import { StyleSheet, View, ViewStyle, ActivityIndicator, StyleProp, ColorValue, Image as RNImage } from "react-native";
import { Image as ExpoImage, ImageLoadEventData, ImageSource as Source, ImageStyle, ImageProps } from "expo-image";
import { Colours } from "@styles";
import { shallowEqual } from "react-redux";
import { isWeb } from "@utils";
import { round } from "lodash";
import { useUserFeatures } from "@hooks";

const PIXEL_FIX: number = 1;

export enum ImageCachePolicy {
  /**
   * Image is not cached at all.
   */
  none = "none",
  /**
   * Image is queried from the disk cache if exists, otherwise it's downloaded and then stored on the disk.
   */
  disk = "disk",
  /**
   * Image is cached in memory. Might be useful when we render a high-resolution picture many times.
   * Memory cache may be purged very quickly to prevent high memory usage and the risk of out of memory exceptions.
   */
  memory = "memory",
  /**
   * Image is cached in memory, but with a fallback to the disk cache.
   */
  memoryDisk = "memory-disk",
}

export interface IImageProps {
  width?: number;
  height?: number;
  transition?: number;
  placeholder?: Source;
  loadingHeight?: number;
  style?: StyleProp<ViewStyle>;
  cachePolicy?: ImageCachePolicy;
  imageStyle?: StyleProp<ImageStyle>;
  source: Source | number;
  theme?: "light" | "dark";
  testID?: string;
  resizeMode?: "contain" | "cover" | "stretch" | "center";
  /**
   * Has some known issues
   * @url https://github.com/expo/expo/issues/21530
   */
  tintColor?: ColorValue;
  /**
   * suppresses loading ui
   * usually for prefetched assets that we know
   * are going to be instantly loaded
   */
  suppressLoadingUi?: boolean;
  CustomLoader?: React.ReactNode;
  onLoad?: ImageProps["onLoad"];
  accessible?: boolean;
  accessibilityLabel?: string;
  onError?: ImageProps["onError"];
}

export const Image = memo(
  ({
    style,
    source,
    testID,
    onLoad,
    tintColor,
    imageStyle,
    accessible,
    transition,
    placeholder,
    CustomLoader,
    loadingHeight,
    theme = "light",
    width: propWidth,
    suppressLoadingUi,
    accessibilityLabel,
    height: propHeight = 0,
    resizeMode = "contain",
    onError,
  }: IImageProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(!isWeb());
    const [nativeSize, setNativeSize] = useState<{ width: number; height: number }>({
      height: propHeight,
      width: propWidth,
    });

    const handleLoadStart = useCallback(() => setIsLoading(!isWeb()), []);

    const handleLoadState = useCallback(
      (event: ImageLoadEventData) => {
        // this is only for storybook
        if (isWeb() && !nativeSize.width && !nativeSize.height) {
          return RNImage.getSize((source as { uri: string }).uri, (w, h) => {
            setNativeSize({ width: w, height: h });
          });
        }

        const { width: nativeWidth, height: nativeHeight } = event.source;

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

      [propHeight, propWidth, nativeSize, source, onLoad]
    );

    const dimensions = useMemo((): ImageStyle => {
      const roundedHeight = round(propHeight);
      const roundedWidth = round(propWidth);

      // We round the height to 2 decimal places to avoid
      // floating point issues that can cause infinite loops
      const calculatedHeight = round(nativeSize.height / nativeSize.width, 2) * roundedWidth;
      const height = loadingHeight || roundedHeight || calculatedHeight;

      // The image must be at least 1px to trigger the `onLoad` event
      // It must also be a little visible to trigger the `onLoad` event
      return {
        height: height || PIXEL_FIX,
        width: roundedWidth || PIXEL_FIX,
        opacity: height === 0 ? 0.1 : 1,
      };
    }, [propHeight, propWidth, loadingHeight, nativeSize]);

    const containerStyle = useMemo(() => [styles.wrapper, dimensions, style], [dimensions, style]);
    const themeColor = useMemo(() => (theme === "light" ? Colours.neutral.white : Colours.primary.p600), [theme]);
    const imageStyles = useMemo(() => [dimensions, imageStyle, { tintColor }], [dimensions, imageStyle, tintColor]);

    const loadingSpinner = useMemo(() => {
      if (suppressLoadingUi || !isLoading) {
        return null;
      }

      return <View style={styles.loader}>{CustomLoader || <ActivityIndicator size="large" color={themeColor} />}</View>;
    }, [isLoading, suppressLoadingUi, CustomLoader, themeColor]);

    return (
      <View pointerEvents="none" style={containerStyle} testID={testID}>
        <RawImage
          onLoadStart={handleLoadStart}
          onLoad={handleLoadState}
          style={imageStyles}
          source={source}
          transition={transition}
          resizeMode={resizeMode}
          accessible={accessible}
          placeholder={placeholder}
          accessibilityLabel={accessibilityLabel}
          onError={onError}
          // This resolves an issue where if the image is
          // loaded at a smaller size and is quickly resized.
          // The image could sometimes be blurry because expo-images
          // would resize the image but would not re-downscale the new version.
          allowDownscaling={false}
        />
        {loadingSpinner}
      </View>
    );
  },
  ({ source: prevSource, ...prevProps }, { source: nextSource, ...nextProp }) =>
    shallowEqual(prevProps, nextProp) && shallowEqual(prevSource, nextSource)
);

export const RawImage = ({ cachePolicy, ...props }: ImageProps) => {
  const { gameEnableExpoImageDiskCachingPolicy } = useUserFeatures();

  const defaultCachePolicy = gameEnableExpoImageDiskCachingPolicy ? ImageCachePolicy.disk : ImageCachePolicy.memoryDisk;

  return <ExpoImage cachePolicy={cachePolicy || defaultCachePolicy} {...props} />;
};

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

const {
  prefetch: prefetchImages,
  clearDiskCache: clearImageDiskCache,
  clearMemoryCache: clearImageMemoryCache,
} = ExpoImage;

export { Source, ImageStyle, clearImageDiskCache, clearImageMemoryCache, prefetchImages };
