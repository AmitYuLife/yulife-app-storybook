import React, { memo } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { mapCoverToColor } from "@styles";
import { CoverType } from "@graphql/_core/schema/globalTypes";

interface Props {
  coverType?: CoverType;
}

const _GradientBackground = (props: Props) => {
  const { coverType } = props;
  const { gradient } = mapCoverToColor(coverType);

  if (!gradient?.length) {
    return null;
  }

  return <LinearGradient colors={gradient} style={styles.gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} />;
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
});

export const GradientBackground = memo(_GradientBackground);
