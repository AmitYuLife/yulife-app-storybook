import React, { memo } from "react";
import { View, Animated } from "react-native";
import { LEADERBOARD_NAME } from "@ids";
import { Image } from "./subcomponents/image";
import { Rank } from "./subcomponents/rank";
import { Name } from "./subcomponents/name";
import { Score } from "./subcomponents/score";
import { baseStyles } from "./subcomponents/styles";
import { ILeaderboardRankItemProps } from "./rank-item.types";

const _ListRankItem = ({
  rank = 0,
  name = "",
  score = 0,
  uri = null,
  isCurrentUser = false,
}: ILeaderboardRankItemProps) => {
  return (
    <Animated.View style={baseStyles.wrapper}>
      {isCurrentUser && <View style={baseStyles.currentUser} />}
      <View style={baseStyles.borderWrapper} testID={LEADERBOARD_NAME(name)}>
        <Rank rank={rank} />
        <Image uri={uri} />
        <Name name={name} bold={isCurrentUser} />
        <Score score={score} bold={isCurrentUser} />
      </View>
    </Animated.View>
  );
};

export const ListRankItem = memo(_ListRankItem);
