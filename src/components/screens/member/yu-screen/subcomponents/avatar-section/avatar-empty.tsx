import React, { memo } from "react";
import { Image, ImageStyle, StyleSheet } from "react-native";
import { EMPTY_AVATAR } from "@ids";

const AvatarEmptyFC = () => (
  <Image
    testID={EMPTY_AVATAR}
    style={styles.emptyAvatarImageLoadinState}
    source={require("../../../../../../../assets/yuscreen/avatar.png")}
  />
);

export const AvatarEmpty = memo(AvatarEmptyFC);

const styles = StyleSheet.create({
  emptyAvatarImageLoadinState: {
    width: 140,
    height: 334,
    resizeMode: "center",
  } as ImageStyle,
});
