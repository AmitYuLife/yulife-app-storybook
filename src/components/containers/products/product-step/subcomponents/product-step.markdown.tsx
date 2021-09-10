import React, { memo } from "react";
import { ContentItemMarkdown as GqlMarkdown } from "@graphql/_core/schema/ContentItemMarkdown";
import { ContentItemMarkdown } from "@components/sdui";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Style } from "@styles";

type Props = GqlMarkdown;

export const ProductStepMarkdown = memo((props: Props) => {
  return (
    <View style={styles.wrapper}>
      <ContentItemMarkdown {...props} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: Style.adjust(24),
    paddingRight: Style.adjust(64),
  } as ViewStyle,
});
