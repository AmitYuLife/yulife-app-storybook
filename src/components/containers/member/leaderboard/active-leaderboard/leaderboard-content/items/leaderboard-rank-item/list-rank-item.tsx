import React, { useContext, useEffect, useState, memo  } from "react";
import { View, Animated } from "react-native";
import { LEADERBOARD_NAME } from "@ids";
import { Image } from "./subcomponents/image";
import { Rank } from "./subcomponents/rank";
import { Name } from "./subcomponents/name";
import { Score } from "./subcomponents/score";
import { getAnimationValues } from "./subcomponents/createOpacityThreshold";
import { baseStyles } from "./subcomponents/styles";
import { ScrollValueContext } from "../../leaderboard-content.context";
import { ILeaderboardRankItemProps } from "./rank-item.types";

const _ListRankItem = ({ rank = 0, name = "", score = 0, uri = null, isCurrentUser = false }: ILeaderboardRankItemProps) => {
  const scrollValue = useContext(ScrollValueContext);
  const [opacity, setOpacity] = useState(1 as number | Animated.AnimatedInterpolation);

  useEffect(() => {
    if (isCurrentUser) {
      const { inputRange, outputRange } = getAnimationValues({ rank, reverse: true });
      setOpacity(scrollValue.interpolate({
        inputRange,
        outputRange,
        extrapolate: "clamp",
      }));
    }
  }, [isCurrentUser, rank, scrollValue]);

  return (
    <Animated.View style={[baseStyles.wrapper, { opacity }]}>
      <View style={baseStyles.borderWrapper} testID={LEADERBOARD_NAME(name)}>
        <Rank rank={rank} />
        <Image uri={uri} />
        <Name name={name} bold={isCurrentUser} />
        <Score score={score} bold={isCurrentUser} />
      </View>
    </Animated.View>
  );
};

export const ListRankItem = memo(_ListRankItem, () => true);
