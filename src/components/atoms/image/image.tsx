import { memo, useEffect, useMemo, useState, useCallback, ReactNode } from "react";
import {
  View,
  ViewStyle,
  ActivityIndicator,
  StyleProp,
  ColorValue,
  Image as RNImage,
  DimensionValue,
} from "react-native";
import {
  Image as ExpoImage,
  ImageLoadEventData,
  ImageSource as Source,
  ImageStyle,
  ImageProps,
  ImageContentFit,
  ImageContentPosition,
} from "expo-image";
import { Colours, StyleSheet } from "@styles";
import { shallowEqual } from "react-redux";
import { isWeb } from "@utils/device";
import { round } from "lodash";
import { useBoxProps, useUserFeatures } from "@hooks";
import { IBoxProps } from "@atoms/box/box.types";
import { isRTL } from "@locale";
import { useTheme } from "@app/modules/themes/hooks/useTheme";
import dd from "@services/datadog";

const PIXEL_FIX: number = 1;

const resolveRemoteImageSize = async (uri: string): Promise<{ width: number; height: number } | null> => {
  try {
    const ref = await ExpoImage.loadAsync(uri);
    if (ref?.width && ref?.height) {
      return { width: ref.width, height: ref.height };
    }
  } catch {
    dd.debug(`Couldn't load image uri`, { uri });
  }

  return null;
};

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

export interface IImageProps extends Omit<IBoxProps, "style"> {
  width?: number | DimensionValue;
  height?: number | DimensionValue;
  transition?: number;
  placeholder?: Source;
  loadingHeight?: number;
  style?: StyleProp<ViewStyle>;
  cachePolicy?: ImageCachePolicy;
  imageStyle?: StyleProp<ImageStyle>;
  source: Source | number;
  theme?: "light" | "dark";
  testID?: string;
  /** @deprecated use contentFit instead */
  resizeMode?: "contain" | "cover" | "stretch" | "center";
  contentFit?: ImageContentFit;
  contentPosition?: ImageContentPosition;
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
  autoFlipForRTL?: boolean;
  CustomLoader?: ReactNode;
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
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    resizeMode = "contain",
    contentFit,
    contentPosition,
    autoFlipForRTL = false,
    onError,
    ...props
  }: IImageProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(!isWeb());
    const { style: boxStyle } = useBoxProps(props);

    const rtlImageStyle = useMemo(
      () => (autoFlipForRTL && isRTL() ? { transform: [{ scaleX: -1 }] } : {}),
      [autoFlipForRTL]
    );

    const isBundledAsset = typeof source === "number";
    const disableNativeSizing = typeof propWidth !== "number" || typeof propHeight !== "number";
    const [nativeSize, setNativeSize] = useState<{ width: number; height: number } | undefined>(
      (() => {
        if (disableNativeSizing) {
          return undefined;
        }

        if (isBundledAsset) {
          const resolved = RNImage.resolveAssetSource(source);

          if (resolved?.width && resolved?.height) {
            return { width: resolved.width, height: resolved.height };
          }
        }

        return {
          height: propHeight,
          width: propWidth,
        };
      })()
    );

    const remoteUri =
      !isBundledAsset && source && typeof source === "object" && "uri" in source ? source.uri : undefined;
    const hasResolvedNativeSize = !!(nativeSize && nativeSize.height > 0 && nativeSize.width > 0);
    const [resolveSizeFailed, setResolveSizeFailed] = useState(false);

    useEffect(() => {
      if (!remoteUri || disableNativeSizing || (typeof propHeight === "number" && propHeight > 0)) {
        return;
      }

      if (hasResolvedNativeSize) {
        return;
      }

      let cancelled = false;
      (async () => {
        const size = await resolveRemoteImageSize(remoteUri);
        if (cancelled) {
          return;
        }

        if (size) {
          setNativeSize(size);
        } else {
          // Mount RawImage anyway so onLoad/onError can fire and the parent's fallback path runs.
          setResolveSizeFailed(true);
        }
      })();

      return () => {
        cancelled = true;
      };
    }, [remoteUri, disableNativeSizing, propHeight, hasResolvedNativeSize]);

    // Reset failure flag when the URI changes so a recycled FlashList row gets a fresh attempt.
    useEffect(() => {
      setResolveSizeFailed(false);
    }, [remoteUri]);

    const handleLoadStart = useCallback(() => setIsLoading(!isWeb()), []);

    const handleLoadState = useCallback(
      (event: ImageLoadEventData) => {
        if (isWeb() && nativeSize && !nativeSize.width && !nativeSize.height) {
          return RNImage.getSize((source as { uri: string }).uri, (w, h) => {
            setNativeSize({ width: w, height: h });
          });
        }

        const { width: nativeWidth, height: nativeHeight } = event.source;

        setIsLoading(false);

        if (onLoad) {
          onLoad(event);
        }

        if (disableNativeSizing || propHeight) {
          return;
        }

        // In rare occasions nativeWidth can be 0
        const nativeDimensions = { width: nativeWidth || propWidth, height: nativeHeight };

        if (!shallowEqual(nativeDimensions, nativeSize)) {
          setNativeSize(nativeDimensions);
        }
      },

      [disableNativeSizing, nativeSize, onLoad, propHeight, propWidth, source]
    );

    const dimensions = useMemo((): ImageStyle => {
      if (disableNativeSizing || !nativeSize) {
        return {
          height: propHeight,
          width: propWidth,
          opacity: 1,
        };
      }

      const roundedHeight = round(propHeight);
      const roundedWidth = round(propWidth);

      // loadAsync couldn't determine the size and we still don't know the height. Render a
      // square so RawImage has visible dimensions to load into; onLoad will then update the
      // real aspect ratio.
      if (resolveSizeFailed && roundedHeight === 0 && nativeSize.height === 0) {
        return {
          height: roundedWidth || PIXEL_FIX,
          width: roundedWidth || PIXEL_FIX,
          opacity: 1,
        };
      }

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
    }, [disableNativeSizing, propHeight, propWidth, nativeSize, loadingHeight, resolveSizeFailed]);
    const { theme: userTheme } = useTheme();

    const containerStyle = useMemo(() => [styles.wrapper, dimensions, style], [dimensions, style]);
    const themeColor = useMemo(
      () => (theme === "light" ? Colours.neutral.white : userTheme.colors.primary.p600),
      [theme, userTheme.colors.primary.p600]
    );
    const imageStyles = useMemo(() => [dimensions, imageStyle, { tintColor }], [dimensions, imageStyle, tintColor]);

    const loadingSpinner = useMemo(() => {
      if (suppressLoadingUi || !isLoading) {
        return null;
      }

      return <View style={styles.loader}>{CustomLoader || <ActivityIndicator size="large" color={themeColor} />}</View>;
    }, [isLoading, suppressLoadingUi, CustomLoader, themeColor]);

    const isAwaitingSize =
      !disableNativeSizing &&
      !(typeof propHeight === "number" && propHeight > 0) &&
      !hasResolvedNativeSize &&
      !resolveSizeFailed;

    return (
      <View pointerEvents="none" style={containerStyle} testID={testID}>
        {isAwaitingSize ? null : (
          <RawImage
            onLoadStart={handleLoadStart}
            onLoad={handleLoadState}
            style={[...imageStyles, boxStyle, rtlImageStyle]}
            source={source}
            transition={transition}
            // eslint-disable-next-line @typescript-eslint/no-deprecated
            resizeMode={resizeMode}
            contentFit={contentFit}
            contentPosition={contentPosition}
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
        )}
        {loadingSpinner}
      </View>
    );
  },
  ({ source: prevSource, ...prevProps }, { source: nextSource, ...nextProp }) =>
    shallowEqual(prevProps, nextProp) && shallowEqual(prevSource, nextSource)
);

export const RawImage = ({ cachePolicy, style: propStyle, ...props }: ImageProps & IBoxProps) => {
  const { gameEnableExpoImageDiskCachingPolicy } = useUserFeatures();
  const { style: boxStyle } = useBoxProps(props);

  const defaultCachePolicy = gameEnableExpoImageDiskCachingPolicy ? ImageCachePolicy.disk : ImageCachePolicy.memoryDisk;

  return (
    <ExpoImage style={[boxStyle as ImageStyle, propStyle]} cachePolicy={cachePolicy || defaultCachePolicy} {...props} />
  );
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
