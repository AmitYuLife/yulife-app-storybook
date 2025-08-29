import React, { FC, useMemo, memo, useCallback } from "react";
import { View } from "react-native";
import { View as AnimatedView, Animation } from "react-native-animatable";
import { CloseSvg } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { Colours, Style, StyleSheet } from "@styles";
import styles from "./popover.styles";
import PopoverBackground from "./popover-background";
import { PopoverBeak } from "./popover-beak";

type Side = "left" | "right";

interface IProps {
  targetX: number;
  targetY: number;
  closeOnOutsideTouch?: boolean;
  onTouchTarget?: () => void;
  onClose: () => void;
  children: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  shadowOpacity?: number;
  animation?: Animation;
  animationDuration?: number;
  animationDelay?: number;
  targetSize?: number;
  width?: number;
  side?: Side;
  offset?: number;
}

const HIT_SLOP = {
  top: 8,
  bottom: 8,
  left: 8,
  right: 8,
};

const MAGIC_NUMBER = 69;

const Popover: FC<IProps> = ({
  targetX,
  targetY,
  onTouchTarget,
  closeOnOutsideTouch,
  onClose,
  children,
  backgroundColor = Colours.neutral.white,
  borderColor = Colours.neutral.n100,
  shadowOpacity = 0.16,
  animation = "fadeIn",
  animationDuration = 750,
  animationDelay = 0,
  targetSize = Style.adjust(48),
  width = 0,
  side = "left",
  offset = 0,
}) => {
  const handleTargetTouch = useCallback(() => {
    onTouchTarget();
    onClose();
  }, [onClose, onTouchTarget]);

  const { top, left, right } = useMemo(
    () => ({
      top: targetY - Style.adjust(24),
      left: side === "left" ? targetX + Style.adjust(16) + targetSize / 6 : null,
      right: side === "right" ? targetX + Style.adjust(16) - offset + targetSize / 6 : null,
    }),
    [targetY, targetX, side]
  );

  return (
    <>
      {!closeOnOutsideTouch ? null : <TouchableOpacityWithDelay style={styles.fullScreen} onPress={onClose} />}
      <View style={StyleSheet.absoluteFillObject}>
        {!onTouchTarget ? null : (
          <PopoverBackground
            targetSize={targetSize}
            targetX={targetX}
            targetY={targetY}
            onTouchTarget={handleTargetTouch}
            onClose={onClose}
          />
        )}
        <AnimatedView
          animation={animation}
          delay={animationDelay}
          duration={animationDuration}
          style={[styles.absolute, styles.shadowProp, { top, left, right, shadowOpacity }]}
          useNativeDriver={true}
          pointerEvents="box-none"
        >
          <View pointerEvents="box-none" style={[styles.popoverBody, { backgroundColor, borderColor }]}>
            {children}
            <TouchableOpacityWithDelay hitSlop={HIT_SLOP} onPress={onClose} style={styles.closeWrapper}>
              <CloseSvg size={Style.adjust(12)} />
            </TouchableOpacityWithDelay>
          </View>
          {side === "left" ? (
            <View pointerEvents="none" style={styles.popoverBeak}>
              <PopoverBeak backgroundColor={backgroundColor} borderColor={borderColor} />
            </View>
          ) : (
            <View
              pointerEvents="none"
              style={[styles.popoverBeakRight, { left: width + MAGIC_NUMBER, transform: [{ rotate: "180deg" }] }]}
            >
              <PopoverBeak backgroundColor={backgroundColor} borderColor={borderColor} />
            </View>
          )}
        </AnimatedView>
      </View>
    </>
  );
};

export default memo(Popover);
