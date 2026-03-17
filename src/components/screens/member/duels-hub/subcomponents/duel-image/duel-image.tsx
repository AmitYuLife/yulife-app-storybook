import React from "react";
import { View } from "react-native";
import { AvatarEmpty } from "@components/molecules";
import { emptyStyles, filledStyles } from "./duel-image.styles";
import { RawImage } from "@atoms";

//TODO: Move this component outside of duels since were using it in many different places now

const DuelImage = ({ uri, size = "small" }: { uri: string; size?: "small" | "medium" }) => {
  if (!uri) {
    return (
      <View style={[emptyStyles.wrapper, size === "small" ? emptyStyles.small : emptyStyles.medium]}>
        <AvatarEmpty style={size === "small" ? emptyStyles.imageSmall : emptyStyles.imageMedium} />
      </View>
    );
  }

  return (
    <View style={[filledStyles.wrapper, size === "small" ? filledStyles.small : filledStyles.medium]}>
      <RawImage source={{ uri }} style={size === "small" ? filledStyles.imageSmall : filledStyles.imageMedium} />
    </View>
  );
};

export default DuelImage;
