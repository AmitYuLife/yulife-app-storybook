import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ContentItemProgressBar as GqlProgressBar } from "@graphql/_core/schema";
import { ProgressBar } from "@molecules";
import { Colours } from "@styles";

export const ContentItemProgressBar = memo((props: GqlProgressBar) => {
  const { currentPosition, maxLength } = props;

  return (
    <View style={styles.wrapper}>
      <ProgressBar currentPosition={currentPosition} maxLength={maxLength} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.neutral.white,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
});
