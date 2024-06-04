import { TextTemplate } from "@atoms";
import { mapServerStyles } from "@components/sdui";
import { SduiStyle } from "@graphql/__generated";
import { memo, useEffect, useRef } from "react";
import { Animated } from "react-native";
import { INITIAL_DELAY } from "./animation/animation-constants";

interface Props {
  badge: {
    label: string;
    wrapperStyles?: SduiStyle[];
    textColor?: string;
  };
  animate?: boolean;
}

export const Badge = memo(({ badge, animate }: Props) => {
  const opacity = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const canAnimate = animate && badge?.label;

    if (!canAnimate) {
      return;
    }

    const createOpacityAnimation = (toValue: number) =>
      Animated.timing(opacity, { toValue, duration: 400, useNativeDriver: true });
    const createTranslateXAnimation = (toValue: number) =>
      Animated.timing(translateX, { toValue, duration: 400, useNativeDriver: true });
    const hide = Animated.parallel([createOpacityAnimation(0), createTranslateXAnimation(100)]);
    const waitAndPrepare = Animated.parallel([Animated.delay(4000), createTranslateXAnimation(-100)]);
    const show = Animated.parallel([createOpacityAnimation(1), createTranslateXAnimation(0)]);
    const init = Animated.delay(INITIAL_DELAY);

    const animation = Animated.sequence([init, hide, waitAndPrepare, show]);

    animation.start();

    return () => (canAnimate ? animation.stop() : null);
  }, [animate]);

  if (!badge?.label) {
    return null;
  }

  return (
    <Animated.View
      pointerEvents="none"
      style={{ ...mapServerStyles(badge.wrapperStyles), opacity, transform: [{ translateX }] }}
    >
      <TextTemplate color={badge.textColor} type="l2b">
        {badge.label}
      </TextTemplate>
    </Animated.View>
  );
});
