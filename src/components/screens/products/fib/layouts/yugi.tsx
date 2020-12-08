import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { YugiSvg } from "./assets/yugi-svg";
import { Style } from "@styles";
import Svg from "react-native-svg";
import { YugiReviewSvg } from "./assets/yugi-review-svg";

interface Props {
  yugi: YugiType;
}

export enum YugiType {
  DEFAULT = "DEFAULT",
  REVIEW = "REVIEW",
}

export const Yugi = (props: Props) => {
  const { yugi } = props;

  if (!yugi) {
    return null;
  }

  const Yugi = getYugi(yugi);

  return (
    <View style={styles.yugiWrapper}>
      <Svg width={Style.adjust(55)} height={Style.adjust(180)} viewBox="0 0 55 180">
        <Yugi />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  yugiWrapper: {
    position: "absolute",
    top: Style.adjust(100),
    right: 0,
  } as ViewStyle,
});

function getYugi(yugi: YugiType) {
  switch (yugi) {
    case YugiType.REVIEW:
      return YugiReviewSvg;
    default:
      return YugiSvg;
  }
}
