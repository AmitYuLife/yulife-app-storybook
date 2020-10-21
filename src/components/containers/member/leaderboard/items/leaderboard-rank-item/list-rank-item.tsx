import React, { memo } from "react";
import { View, Animated } from "react-native";
import { LEADERBOARD_NAME } from "@ids";
import { Image } from "./subcomponents/image";
import { Rank } from "./subcomponents/rank";
import { Name } from "./subcomponents/name";
import { Score } from "./subcomponents/score";
import { baseStyles } from "./subcomponents/styles";
import { ILeaderboardRankItemProps } from "./rank-item.types";
import { DuelDialog } from "../../active-leaderboard/leaderboard-content/items/leaderboard-rank-item/duel-dialog";
import { TouchableOpacityWithDelay } from "@components/molecules";

const _ListRankItem = ({
  rank = 0,
  name = "",
  score = 0,
  uri = null,
  isCurrentUser = false,
  id = "",
  duelDialogId,
  setDuelDialogId,
  showDuels,
}: ILeaderboardRankItemProps) => {
  return (
    <>
      <TouchableOpacityWithDelay
        delay={200}
        style={baseStyles.wrapper}
        onPress={() => {
          if (showDuels && !isCurrentUser) {
            setDuelDialogId(duelDialogId === id ? "" : id);
          }
        }}
      >
        <Animated.View style={baseStyles.wrapper}>
          {isCurrentUser && <View style={baseStyles.currentUser} />}
          <View style={baseStyles.borderWrapper} testID={LEADERBOARD_NAME(name)}>
            <Rank rank={rank} />
            <Image uri={uri} />
            <Name name={name} bold={isCurrentUser} />
            <Score score={score} bold={isCurrentUser} />
          </View>
        </Animated.View>
      </TouchableOpacityWithDelay>
      {duelDialogId !== id ? null : <DuelDialog id={id} />}
    </>
  );
};

export const ListRankItem = memo(_ListRankItem);
