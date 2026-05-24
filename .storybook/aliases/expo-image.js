import React, { forwardRef, useCallback } from "react";
import { Image as RNImage, View } from "react-native";

const normalizeSource = (source) => {
  if (typeof source === "string") {
    return { uri: source };
  }

  return source;
};

const normalizeLoadEvent = (event, target) => ({
  ...event,
  source: {
    width: target?.naturalWidth ?? 0,
    height: target?.naturalHeight ?? 0,
  },
});

/** Web Storybook shim — normalizes react-native-web image events to the expo-image shape. */
const Image = forwardRef(({ onLoad, onError, style, source, ...props }, ref) => {
  const handleLoad = useCallback(
    (event) => {
      const target = event?.nativeEvent?.target;
      onLoad?.(normalizeLoadEvent(event, target));
    },
    [onLoad]
  );

  return (
    <RNImage
      ref={ref}
      source={normalizeSource(source)}
      style={style}
      onLoad={handleLoad}
      onError={onError}
      {...props}
    />
  );
});

Image.displayName = "ExpoImage";

Image.loadAsync = (uri) =>
  new Promise((resolve, reject) => {
    RNImage.getSize(uri, (width, height) => resolve({ width, height }), reject);
  });

Image.prefetch = async () => undefined;
Image.clearDiskCache = async () => undefined;
Image.clearMemoryCache = async () => undefined;

const ImageBackground = ({ children, style, source, imageStyle, ...props }) => (
  <View style={style} {...props}>
    <Image source={source} style={[{ position: "absolute", width: "100%", height: "100%" }, imageStyle]} />
    {children}
  </View>
);

export { Image, ImageBackground };
export default Image;
