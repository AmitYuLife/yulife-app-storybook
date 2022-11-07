import { ContentItem } from "@graphql/_core/schema";
import { Style } from "@styles";
import React from "react";
import { Animated, Platform, StyleSheet } from "react-native";
import { renderItemContent } from "../renderer";

interface Props {
  items: Array<ContentItem>;
}

export const Body = ({ items }: Props) => (
  <Animated.ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper} scrollEventThrottle={16}>
    {!items?.length ? null : <>{items.map(renderItemContent)}</>}
  </Animated.ScrollView>
);

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Platform.select({
      ios: -Style.IOS_NOTCH_HEIGHT,
      android: 0,
    }),
  },
});
