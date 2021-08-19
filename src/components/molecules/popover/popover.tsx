import React, { FC, useMemo, memo, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { CloseSvg } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { Style } from "@styles";
import styles from "./popover.styles";
import PopoverBackground from "./popover-background";
import { PopoverBeak } from "./popover-beak";

interface IProps {
  targetX: number;
  targetY: number;
  onTouchTarget?: () => void;
  onClose: () => void;
  children: React.ReactNode;
}

const Popover: FC<IProps> = ({ targetX, targetY, onTouchTarget, onClose, children }) => {
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
      <PopoverBackground targetX={targetX} targetY={targetY} onTouchTarget={handleTargetTouch} onClose={onClose} />
      <View style={[styles.absolute, styles.shadowProp, { top, left }]}>
        <View style={styles.popoverBody}>
          {children}
          <TouchableOpacityWithDelay onPress={onClose} style={styles.closeWrapper}>
            <CloseSvg size={Style.adjust(16)} />
          </TouchableOpacityWithDelay>
        </View>
        <View style={styles.popoverBeak}>
          <PopoverBeak />
        </View>
      </View>
    </View>
  );
};

export default memo(Popover);
