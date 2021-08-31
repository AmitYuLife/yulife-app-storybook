import React, { FC, useMemo, memo, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { CloseSvg } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { Colours, Style } from "@styles";
import styles from "./popover.styles";
import PopoverBackground from "./popover-background";
import { PopoverBeak } from "./popover-beak";

interface IProps {
  targetX: number;
  targetY: number;
  onTouchTarget?: () => void;
  onClose: () => void;
  children: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  shadowOpacity?: number;
}

const HIT_SLOP = {
  top: 8,
  bottom: 8,
  left: 8,
  right: 8,
};

const Popover: FC<IProps> = ({
  targetX,
  targetY,
  onTouchTarget,
  onClose,
  children,
  backgroundColor = Colours.neutral.white,
  borderColor = Colours.neutral.n100,
  shadowOpacity = 0.16,
}) => {
  const handleTargetTouch = useCallback(() => {
    onClose();
    onTouchTarget();
  }, [onClose, onTouchTarget]);

  const { top, left } = useMemo(
    () => ({
      top: targetY - Style.adjust(24),
      left: targetX + Style.adjust(16),
    }),
    [targetY, targetX]
  );

  return (
    <View style={StyleSheet.absoluteFillObject}>
      {!onTouchTarget ? null : (
        <PopoverBackground targetX={targetX} targetY={targetY} onTouchTarget={handleTargetTouch} onClose={onClose} />
      )}
      <View style={[styles.absolute, styles.shadowProp, { top, left, shadowOpacity }]}>
        <View style={[styles.popoverBody, { backgroundColor, borderColor }]}>
          {children}
          <TouchableOpacityWithDelay hitSlop={HIT_SLOP} onPress={onClose} style={styles.closeWrapper}>
            <CloseSvg size={Style.adjust(12)} />
          </TouchableOpacityWithDelay>
        </View>
        <View style={styles.popoverBeak}>
          <PopoverBeak backgroundColor={backgroundColor} borderColor={borderColor} />
        </View>
      </View>
    </View>
  );
};

export default memo(Popover);
