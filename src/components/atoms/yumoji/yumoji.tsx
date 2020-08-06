import React from "react";
import FastImage from "react-native-fast-image";
import { View, StyleSheet } from "react-native";
import { Style } from "@styles";
import { EmptyMaleBody } from "./assets/empty-male-body-svg";
import { memo } from "react";

interface Props {
  uri: string;
  testID: string;
}

function _Yumoji({ uri, testID }: Props) {
  if (!uri) {
    return <EmptyMaleBody />;
  }

  return (
    <View style={styles.wrapper} testID={testID}>
      <FastImage source={{ uri }} style={styles.image} />
    </View>
  );
}

export const Yumoji = memo(_Yumoji);

export const BODY_AVATAR_HEIGHT = Style.SCALE_UP_AND_DOWN(128.5);
export const BODY_AVATAR_WIDTH = Style.SCALE_UP_AND_DOWN(58);

const styles = StyleSheet.create({
  wrapper: {
    overflow: "hidden",
    justifyContent: "flex-start",
    height: BODY_AVATAR_HEIGHT,
    width: BODY_AVATAR_WIDTH,
    alignItems: "center",
  },
  image: {
    height: BODY_AVATAR_HEIGHT,
    width: BODY_AVATAR_WIDTH,
  },
});
