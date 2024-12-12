import React, { memo, useMemo } from "react";
import { Colours, Style } from "@styles";
import { ArrowIcon, IArrowIconProps } from "@atoms/icon/arrow";
import { StyleSheet, View } from "react-native";

type IArrowButtonProps = IArrowIconProps;

export const ArrowButton = memo(
  ({
    width = Style.adjust(24),
    height = Style.adjust(24),
    color = Colours.primary.p600,
    intent = "transparent",
    direction = "right",
  }: IArrowButtonProps) => {
    const arrowStyles = useMemo(() => {
      switch (intent) {
        case "primary":
          return [styles.arrowPrimary, { width, height }];
        case "secondary":
          return [styles.arrowSecondary, { width, height }];
        case "transparent":
          return [styles.arrowTransparent, { width, height }];
        default:
          return [{ width, height }];
      }
    }, [intent, width, height]);

    return (
      <View style={arrowStyles}>
        <View style={styles.arrowInner}>
          <ArrowIcon width={width} height={height} color={color} intent={intent} direction={direction} />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  arrowInner: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
  },
  arrowPrimary: {
    backgroundColor: Colours.primary.p600,
    borderRadius: Style.adjust(12),
  },
  arrowSecondary: {
    borderWidth: Style.adjust(1),
    borderColor: Colours.primary.p600,
    borderRadius: Style.adjust(12),
  },
  arrowTransparent: {},
});

export default ArrowButton;
