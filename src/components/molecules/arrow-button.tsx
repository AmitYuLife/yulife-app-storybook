import React, { memo, useMemo } from "react";
import { Colours, Style, StyleSheet } from "@styles";
import { ArrowIcon, IArrowIconProps } from "@atoms/icon/arrow";
import { View } from "react-native";

type IArrowButtonProps = IArrowIconProps;

export const ArrowButton = memo(
  ({
    size = Style.adjust(24),
    color = Colours.primary.p600,
    intent = "transparent",
    direction = "right",
  }: IArrowButtonProps) => {
    const arrowStyles = useMemo(() => {
      switch (intent) {
        case "primary":
          return [styles.arrowPrimary, { width: size, height: size }];
        case "secondary":
          return [styles.arrowSecondary, { width: size, height: size }];
        case "transparent":
          return [styles.arrowTransparent, { width: size, height: size }];
        default:
          return [{ width: size, height: size }];
      }
    }, [intent, size]);

    return (
      <View style={arrowStyles}>
        <View style={styles.arrowInner}>
          <ArrowIcon size={size} color={color} intent={intent} direction={direction} />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  arrowInner: {
    top: 0,
    start: 0,
    end: 0,
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
