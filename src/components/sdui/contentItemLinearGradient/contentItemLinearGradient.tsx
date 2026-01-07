import React, { memo } from "react";
import { ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ContentItemLinearGradientFragment as GqlLinearGradient } from "@graphql/__generated";

import { StyleSheet } from "@styles";
type Props = GqlLinearGradient;

const _ContentItemLinearGradient = (props: Props) => {
  const { colors, styles, start = { x: 0, y: 0 }, end = { x: 1, y: 0 } } = props;

  if (!colors?.length) {
    return null;
  }

  return (
    <LinearGradient
      colors={colors}
      style={{
        ...innerStyles.gradient,
        ...(styles as unknown as ViewStyle),
      }}
      start={start}
      end={end}
    />
  );
};

const innerStyles = StyleSheet.create({
  gradient: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
});

export const ContentItemLinearGradient = memo(_ContentItemLinearGradient);
