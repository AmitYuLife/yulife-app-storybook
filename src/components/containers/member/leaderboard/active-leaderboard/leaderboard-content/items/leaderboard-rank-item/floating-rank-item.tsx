import React, { useContext, useState, useEffect } from "react";
import { ScrollValueContext } from "../../leaderboard-content.context";
import { Animated } from "react-native";
import { View } from "react-native-animatable";
import { baseStyles, floatingItemStyles } from "./subcomponents/styles";
import { Rank } from "./subcomponents/rank";
import { Image } from "./subcomponents/image";
import { Name } from "./subcomponents/name";
import { Score } from "./subcomponents/score";
import { getAnimationValues } from "./subcomponents/createOpacityThreshold";
import { TouchableOpacityWithDelay } from "@components/molecules";

interface Props {
  rank: number;
  name: string;
  score: number;
  uri: string;
  onPress?: () => void;
  isCurrentUser: boolean;
}

export const FloatingRankItem = ({
  rank = 0,
  name = "",
  score = 0,
  uri = null,
  onPress = (): void => null,
  isCurrentUser = false,
}: Props) => {
  const scrollValue = useContext(ScrollValueContext);
  const [opacity, setOpacity] = useState(0 as number | Animated.AnimatedInterpolation);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (!isCurrentUser) {
      return () => null;
    }

    const { inputRange, outputRange, opacityThreshold } = getAnimationValues({ rank });

    setOpacity(
      scrollValue.interpolate({
        inputRange,
        outputRange,
        extrapolate: "clamp",
      })
    );

    const listener = scrollValue.addListener(({ value }) => {
      setDisabled(value > opacityThreshold);
    });

    return () => scrollValue.removeListener(listener);
  }, [isCurrentUser, scrollValue, rank]);

  return (
    <Animated.View
      pointerEvents={disabled ? "none" : "auto"}
      style={[baseStyles.wrapper, floatingItemStyles.wrapper, { opacity }]}
    >
      <TouchableOpacityWithDelay style={floatingItemStyles.button} activeOpacity={0.7} onPress={onPress}>
        <View style={floatingItemStyles.background} />
        <View style={[baseStyles.borderWrapper, floatingItemStyles.borderWrapper]}>
          <Rank rank={rank} style={floatingItemStyles.text} />
          <Image uri={uri} />
          <Name name={name} bold={isCurrentUser} style={floatingItemStyles.text} />
          <Score score={score} bold={isCurrentUser} style={floatingItemStyles.text} />
        </View>
      </TouchableOpacityWithDelay>
    </Animated.View>
  );
};
