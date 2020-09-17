import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { AvatarEmpty } from "@molecules";
import FastImage, { ImageStyle } from "react-native-fast-image";
import { Style } from "@styles";

export function Image({ uri }: { uri: string }) {
  if (!uri) {
    return (
      <View style={emptyStyles.wrapper}>
        <AvatarEmpty style={emptyStyles.image} />
      </View>
    );
  }

  return (
    <View style={filledStyles.wrapper}>
      <FastImage source={{ uri }} style={filledStyles.image} />
    </View>
  );
}

const AVATAR_WIDTH = Style.adjust(40);

const emptyStyles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(-6),
    height: "100%",
    width: AVATAR_WIDTH,
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
  } as ViewStyle,
  image: {
    width: Style.adjust(45),
    height: Style.adjust(105),
  } as ImageStyle,
});

const filledStyles = StyleSheet.create({
  wrapper: {
    marginBottom: -2,
    height: AVATAR_WIDTH,
    width: AVATAR_WIDTH,
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
  } as ViewStyle,
  image: {
    width: AVATAR_WIDTH,
    height: Style.adjust(90),
  } as ImageStyle,
});
