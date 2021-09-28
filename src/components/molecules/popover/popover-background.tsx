import React, { FC, useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { DarkScreen } from "@atoms";
import { Style } from "@styles";
import styles from "./popover.styles";
import { PressableWithDelay, TouchableOpacityWithDelay } from "..";

interface IProps {
  targetX?: number;
  targetY?: number;
  targetSize?: number;
  onTouchTarget?: () => void;
  onClose: () => void;
}

const PopoverBackground: FC<IProps> = ({ targetX, targetY, targetSize = Style.adjust(48), onTouchTarget, onClose }) => {
  const hasTarget = typeof targetX === "number" && typeof targetY === "number";

  const target = useMemo(
    () =>
      hasTarget
        ? {
            top: targetY - targetSize / 2,
            left: targetX - targetSize / 2,
            width: targetSize,
            height: targetSize,
          }
        : null,
    [hasTarget, targetX, targetY, targetSize]
  );

  return (
    <View pointerEvents="box-none" style={StyleSheet.absoluteFillObject}>
      <PressableWithDelay onPress={onClose}>
        <DarkScreen highlight={target} />
      </PressableWithDelay>
      {hasTarget ? (
        <TouchableOpacityWithDelay
          onPress={onTouchTarget}
          key="popover_target_pressable"
          style={[styles.absolute, target]}
        />
      ) : null}
    </View>
  );
};

export default PopoverBackground;
