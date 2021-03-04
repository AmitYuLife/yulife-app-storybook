import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { mapCoverToColor } from "@styles";
import { CoverType } from "@graphql/_core/schema/globalTypes";

interface Props {
  coverType?: CoverType;
}

const _FlatBackground = (props: Props) => {
  const { coverType } = props;
  const { secondary } = mapCoverToColor(coverType);

  return <View style={StyleSheet.flatten([styles.background, { backgroundColor: secondary }])} />;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
});

export const FlatBackground = memo(_FlatBackground);
