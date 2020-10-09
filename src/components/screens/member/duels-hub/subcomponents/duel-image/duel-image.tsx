import React from "react";
import { View } from "react-native";
import { AvatarEmpty } from "@components/molecules";
import { emptyStyles, filledStyles } from "./duel-image.styles";
import FastImage from "react-native-fast-image";

export default function DuelImage({ uri }: { uri: string }) {
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
