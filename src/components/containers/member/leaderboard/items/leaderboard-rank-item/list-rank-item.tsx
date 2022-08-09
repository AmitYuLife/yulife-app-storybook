import React, { memo, useCallback } from "react";
import { View, Animated } from "react-native";
import { LEADERBOARD_NAME } from "@ids";
import { Image } from "./subcomponents/image";
import { Rank } from "./subcomponents/rank";
import { Name } from "./subcomponents/name";
import { Score } from "./subcomponents/score";
import { baseStyles } from "./subcomponents/styles";
import { ILeaderboardRankItemProps } from "./rank-item.types";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";

const _ListRankItem = ({
  rank = 0,
  name = "",
  score = 0,
  uri = null,
  isCurrentUser = false,
  id = "",
  index,
}: ILeaderboardRankItemProps) => {
  const onPress = useCallback(() => {
    Navigation.push(ROUTES.leaderboards, {
      component: {
        id: ROUTES.inspect,
        name: ROUTES.inspect,
        passProps: {
          userId: id.replace("lead_", ""),
          leaderboardPlacement: index + 1,
        },
      },
    });

    // if you are opening inspect from lean leaderboard
    return Navigation.dismissAllModals();
  }, [id, index]);

  return (
    <>
      <TouchableOpacityWithDelay
        testID={LEADERBOARD_NAME(name)}
        delay={200}
        style={baseStyles.wrapper}
        onPress={onPress}
      >
        <Animated.View style={baseStyles.wrapper}>
          {isCurrentUser && <View style={baseStyles.currentUser} />}
          <View style={baseStyles.borderWrapper}>
            <Rank rank={rank} />
            <Image uri={uri} />
            <Name name={name} bold={isCurrentUser} />
            <Score score={score} bold={isCurrentUser} />
          </View>
        </Animated.View>
      </TouchableOpacityWithDelay>
    </>
  );
};

export const ListRankItem = memo(_ListRankItem);
