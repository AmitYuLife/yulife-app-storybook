import React, { useMemo } from "react";
import { Image } from "@atoms";
import { StyleProp, View, ViewStyle } from "react-native";
import { Style } from "@styles";
import { Source } from "react-native-fast-image";

interface IProps {
  previewPosition: {
    // relative offset left
    left: number;
    // relative offset top
    top: number;
    // zoom original image
    zoom: number;
  };
  containerHeight: number;
  containerWidth: number;
  // image dimensions
  height: number;
  width: number;
  source: Source | number;
}

export const CroppedImage = (props: IProps) => {
  const { height, containerHeight, width, containerWidth, previewPosition, source } = props;

  const { left, top, zoom } = previewPosition;

  const scale = (containerWidth / width) * zoom;

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
        width={Style.adjust(width * scale)}
        height={Style.adjust(height * scale)}
        source={source}
        resizeMode={"cover"}
      />
    </View>
  );
};
