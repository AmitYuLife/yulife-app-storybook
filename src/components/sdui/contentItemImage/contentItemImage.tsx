import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { ContentItemImage as GqlPad } from "@graphql/_core/schema";
import { Image } from "@atoms";
import { mapServerStyles } from "../_utils/mapServerStyles";

type Props = GqlPad;

export const ContentItemImage = memo((props: Props) => {
  const wrapperStyles = mapServerStyles(props.wrapperStyles);
  const imageStyles = mapServerStyles(props.styles);

  return (
    <View style={[styles.wrapper, wrapperStyles]}>
      <Image width={imageStyles?.width as number} style={imageStyles} source={{ uri: props.image.uri }} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
});
