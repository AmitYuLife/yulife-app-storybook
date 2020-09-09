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

export const BODY_AVATAR_HEIGHT = Style.SCALE_UP_AND_DOWN(128.5);
export const BODY_AVATAR_WIDTH = Style.SCALE_UP_AND_DOWN(58);
export const EMPTY_BODY_AVATAR_HEIGHT = Style.SCALE_UP_AND_DOWN(146);
export const EMPTY_BODY_AVATAR_WIDTH = Style.SCALE_UP_AND_DOWN(40);

function _Yumoji({ uri, testID }: Props) {
  if (!uri) {
    return <EmptyMaleBody height={EMPTY_BODY_AVATAR_HEIGHT} width={EMPTY_BODY_AVATAR_WIDTH} />;
  }

  return (
    <View style={styles.wrapper} testID={testID}>
      <FastImage source={{ uri }} style={styles.image} />
    </View>
  );
}

const MemoizedYumoji = memo(_Yumoji);
export const Yumoji = Object.assign(MemoizedYumoji, {
  BODY_AVATAR_HEIGHT,
  BODY_AVATAR_WIDTH,
  EMPTY_BODY_AVATAR_HEIGHT,
  EMPTY_BODY_AVATAR_WIDTH,
});

const styles = StyleSheet.create({
  wrapper: {
    overflow: "hidden",
    height: BODY_AVATAR_HEIGHT,
    width: BODY_AVATAR_WIDTH,
    alignItems: "center",
  },
  image: {
    height: BODY_AVATAR_HEIGHT,
    width: BODY_AVATAR_WIDTH,
  },
});
