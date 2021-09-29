import React, { useMemo, FC } from "react";
import { Image } from "@atoms";
import { StyleProp, View, ViewStyle } from "react-native";
import { Source } from "react-native-fast-image";

interface IProps {
  source: Source | number;
  transform: {
    // relative offset left
    left?: number;
    // relative offset top
    top?: number;
    // zoom original image
    zoom?: number;
    // image dimensions
    height?: number;
    width?: number;
  };
  containerHeight: number;
  containerWidth: number;
  suppressLoadingUi?: boolean;
}

export const CroppedImage: FC<IProps> = ({ transform, source, containerHeight, containerWidth, suppressLoadingUi }) => {
  const { left = 0, top = 0, zoom = 1, height, width } = transform || {};
  const scale = (height && width ? containerWidth / width : 1) * zoom;
  const scaledHeight = scale * (height || containerHeight);
  const scaledWidth = scale * (width || containerWidth);

  const viewStyle = useMemo(
    () =>
      ({
        overflow: "hidden",
        height: containerHeight,
        width: containerWidth,
      } as StyleProp<ViewStyle>),
    [containerHeight, containerWidth]
  );

  const imageStyle = useMemo(
    () =>
      ({
        position: "absolute",
        top: top * scale,
        left: left * scale,
      } as StyleProp<ViewStyle>),
    [left, scale, top]
  );

  return (
    <View style={viewStyle}>
      <Image
        style={imageStyle}
        width={scaledWidth}
        height={scaledHeight}
        source={source}
        suppressLoadingUi={suppressLoadingUi}
        resizeMode={"cover"}
      />
    </View>
  );
};
