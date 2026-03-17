import React, { memo } from "react";
import { ImageSourcePropType, ImageStyle, Image, View, ColorValue, LayoutChangeEvent } from "react-native";
import styles from "./challenge-background.styles";

interface IProps {
  source: ImageSourcePropType;
  style: ImageStyle;
  backgroundColor?: ColorValue;
  onLayout?: (event: LayoutChangeEvent) => void;
}

const ChallengeBackground = ({ source, style, backgroundColor, onLayout }: IProps) => {
  return (
    <View style={[styles.background, { backgroundColor }]}>
      <Image onLayout={onLayout} resizeMode="cover" style={[style, styles.image]} source={source} />
    </View>
  );
};

export default memo(ChallengeBackground);
