import { memo, useCallback, useEffect } from "react";
import { Easing, useAnimatedStyle, useSharedValue, withDelay, withSequence, withTiming } from "react-native-reanimated";
import { VoidFunction } from "@utils";
import { Box, TextTemplate } from "@atoms";
import { Colours } from "@styles";

type PlusOneProps = {
  setAnimateAction: (animate: VoidFunction) => void;
};

const PlusOne = ({ setAnimateAction }: PlusOneProps) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  const triggerPlusOneAnimation = useCallback(() => {
    opacity.value = 0;
    translateY.value = 0;

    opacity.value = withSequence(withTiming(1, { duration: 400 }), withDelay(300, withTiming(0, { duration: 600 })));

    translateY.value = withTiming(-40, { duration: 1300, easing: Easing.inOut(Easing.ease) });
  }, []);

  useEffect(() => {
    setAnimateAction(triggerPlusOneAnimation);
  }, [setAnimateAction, triggerPlusOneAnimation]);

  return (
    <Box style={animatedStyle} forceAnimated={true} position="absolute" top={0} left={0}>
      <TextTemplate type="b2b" color={Colours.primary.p600}>
        +1
      </TextTemplate>
    </Box>
  );
};

export default memo(PlusOne);
