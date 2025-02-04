import { Box } from "@atoms";
import { ReactNode, memo } from "react";
import { Easing, useAnimatedStyle, withSequence, withTiming } from "react-native-reanimated";

const EXIT_DURATION = 500;
const IMAGE_WAIT = 1000;
const ENTER_DURATION = 300;

interface IAnimatedTeaserImageProps {
  children: ReactNode;
}

const BattlePassListItemTeaserAnimation = ({ children }: IAnimatedTeaserImageProps) => {
  const containerAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSequence(
            withTiming(0, { duration: 0 }),
            withTiming(1, { duration: ENTER_DURATION, easing: Easing.elastic(1.1) }),
            withTiming(1, { duration: IMAGE_WAIT }),
            withTiming(0, { duration: EXIT_DURATION })
          ),
        },
      ],
    };
  });

  return (
    <Box style={containerAnimationStyle} forceAnimated={true}>
      {children}
    </Box>
  );
};

export default memo(BattlePassListItemTeaserAnimation);
