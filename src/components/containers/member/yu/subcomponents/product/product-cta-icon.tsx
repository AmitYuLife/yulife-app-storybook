import React from "react";
import { SvgRightIcon } from "./assets/svg-right-icon";
import { SvgUnlockable } from "./assets/svg-unlockable";
import { SvgLocked } from "./assets/svg-locked";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";

export type ProductStatus = "active" | "locked" | "unlockable";

interface Props {
  status?: ProductStatus;
}

export const ProductCtaIcon = (props: Props) => {
  const { status } = props;
  const Icon = getIcon(status);

  return (
    <View style={styles.wrapper}>
      <Icon />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: Style.adjust(16),
  } as ViewStyle,
});

function getIcon(productState: Props["status"]) {
  switch (productState) {
    case "active":
      return SvgRightIcon;
    case "unlockable":
      return SvgUnlockable;
    default:
      return SvgLocked;
  }
}
