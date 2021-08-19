import React, { FC, useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { DarkScreen } from "@atoms";
import PressableWithDelay from "@molecules/pressable-delay/pressable-delay";
import { Style } from "@styles";
import styles from "./popover.styles";

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
    <View style={StyleSheet.absoluteFillObject}>
      <PressableWithDelay key="popover_background_pressable" onPress={onClose}>
        <View>
          <DarkScreen highlight={target} />
        </View>
      </PressableWithDelay>
      {hasTarget ? (
        <PressableWithDelay onPress={onTouchTarget} key="popover_target_pressable">
          <View style={[styles.absolute, target]} />
        </PressableWithDelay>
      ) : null}
    </View>
  );
};

export default PopoverBackground;
