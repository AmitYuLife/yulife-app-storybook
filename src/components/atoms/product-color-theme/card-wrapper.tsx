import React, { memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { mapCoverToColor } from "@styles";
import LinearGradient from "react-native-linear-gradient";
import { CoverType } from "@graphql/__generated";

interface Props {
  coverType?: CoverType;
  children: React.ReactElement | React.ReactElement[];
  showShadow?: boolean;
}
const _CardWrapper = (props: Props) => {
  const { children, coverType, showShadow } = props;
  const { border, shadow } = mapCoverToColor(coverType);

  const padding = mapCoverToPadding(coverType, showShadow);
  const gradientPosition = mapGradientPosition(showShadow);

  return (
    <View style={StyleSheet.flatten([styles.wrapper, padding])}>
      <Shadow show={showShadow} shadow={shadow} />
      <LinearGradient colors={border} style={StyleSheet.flatten([styles.gradient, gradientPosition])} />
      <View style={styles.childrenWrapper}>{children}</View>
    </View>
  );
};

const Shadow = ({ shadow, show }: { shadow: string; show: boolean }) =>
  !show ? null : <View style={StyleSheet.flatten([styles.shadow, { backgroundColor: shadow }])} />;

export const CardWrapper = memo(_CardWrapper);

const mapGradientPosition = (showShadow: boolean) => {
  return {
    bottom: showShadow ? 4 : 0,
    right: showShadow ? 4 : 0,
  };
};

const mapCoverToPadding = (coverType: CoverType, showShadow: boolean) => {
  if (!showShadow) {
    return {
      padding: !coverType ? 1 : 2,
    };
  }

  return {
    paddingTop: coverType ? 2 : 1,
    paddingStart: coverType ? 2 : 1,
    paddingBottom: coverType ? 6 : 5,
    paddingEnd: coverType ? 6 : 5,
  };
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 16,
    overflow: "hidden",
  } as ViewStyle,
  gradient: {
    borderRadius: 16,
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  childrenWrapper: {
    borderRadius: 16,
    overflow: "hidden",
  } as ViewStyle,
  shadow: {
    position: "absolute",
    bottom: 0,
    right: 0,
    top: 4,
    left: 4,
    borderRadius: 16,
  } as ViewStyle,
});
