import { Style } from "@styles";
import { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { ReanimatedPlant } from "./reanimated-plant";
import { useSelector } from "react-redux";
import { getUserFeatures } from "@redux/user/user.selectors";

type Props = {
  animationStage: number;
  canStartPlantAnimation: boolean;
  lapsed: boolean;
  items: Array<{
    animation: string;
    start: number;
    end: number;
  }>;
};

export const AnimatedPlants = memo(({ animationStage, items, canStartPlantAnimation, lapsed }: Props) => {
  const features = useSelector(getUserFeatures);

  const memoized = useMemo(() => {
    return {
      plantsWrapperStyle: [
        styles.plantsWrapper,
        {
          left: getPlantWrapperLeftPosition(animationStage),
        },
      ],
    };
  }, [animationStage, features]);

  if (!items?.length) {
    return null;
  }

  return (
    <View style={memoized.plantsWrapperStyle}>
      {items.map((streakProgressAnimationItem) => (
        <ReanimatedPlant
          key={streakProgressAnimationItem.animation}
          start={streakProgressAnimationItem.start}
          end={streakProgressAnimationItem.end}
          animation={streakProgressAnimationItem.animation}
          shouldAnimate={canStartPlantAnimation}
          lapsed={lapsed}
        />
      ))}
    </View>
  );
});

function getPlantWrapperLeftPosition(animationStage: number) {
  if (animationStage > 14) {
    return Style.DEVICE_WIDTH / 18;
  }

  if (animationStage > 7) {
    return Style.DEVICE_WIDTH / 4.75;
  }

  return Style.DEVICE_WIDTH / 2.5;
}

const styles = StyleSheet.create({
  plantsWrapper: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
