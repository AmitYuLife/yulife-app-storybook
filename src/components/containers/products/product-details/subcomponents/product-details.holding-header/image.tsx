import React, { memo } from "react";
import { Image as ImageAtom } from "@atoms";
import { RemoteImage } from "@graphql/__generated";
import { View } from "react-native";
import { Style, StyleSheet } from "@styles";

type Props = {
  image: RemoteImage;
};

export const Image = memo(({ image }: Props) => {
  if (!image) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.image}>
        <ImageAtom source={image} width={Style.adjust(160)} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    height: 160,
    marginBottom: Style.adjust(24),
  },
});
