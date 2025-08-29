import React, { memo } from "react";
import LinearGradient from "react-native-linear-gradient";
import { ViewStyle } from "react-native";
import { mapCoverToColor, StyleSheet } from "@styles";
import { CoverType } from "@graphql/__generated";

interface Props {
  coverType?: CoverType;
}

const _Separator = (props: Props) => {
  const { coverType } = props;

  return (
    <LinearGradient
      style={styles.separator}
      colors={mapCoverToColor(coverType).separator}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    opacity: 0.4,
  } as ViewStyle,
});

export const Separator = memo(_Separator);
