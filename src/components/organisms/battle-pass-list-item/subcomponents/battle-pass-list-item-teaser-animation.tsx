import { Box } from "@atoms";
import { ReactNode, memo } from "react";
import { Easing, useAnimatedStyle, withSequence, withTiming } from "react-native-reanimated";

const ENTER_DURATION = 300;

interface IAnimatedTeaserImageProps {
  children: ReactNode;
}

const BattlePassListItemTeaserAnimation = ({ children }: IAnimatedTeaserImageProps) => {
  const containerAnimationStyle = useAnimatedStyle(() => {
    return {
      width: "100%",
      height: "100%",
      transform: [
        {
          scale: withSequence(
            withTiming(0, { duration: 0 }),
            withTiming(1, { duration: ENTER_DURATION, easing: Easing.elastic(1.1) })
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
