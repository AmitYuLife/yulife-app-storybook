import React, { memo, useCallback } from "react";
import { View, Animated } from "react-native";
import { LEADERBOARD_NAME, LIST_YUMOJI } from "@ids";
import { Image } from "./subcomponents/image";
import { Rank } from "./subcomponents/rank";
import { Name } from "./subcomponents/name";
import { Score } from "./subcomponents/score";
import { baseStyles } from "./subcomponents/styles";
import { ILeaderboardRankItemProps } from "./rank-item.types";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { RANK } from "@ids";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";

const _ListRankItem = ({
  rank = 0,
  name = "",
  score = 0,
  uri = null,
  isCurrentUser = false,
  id = "",
  index,
  componentId = ROUTES.leaderboards,
}: ILeaderboardRankItemProps) => {
  const onPress = useCallback(() => {
    Navigation.push(componentId, {
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
  }, [id, componentId, index]);

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
          <View style={baseStyles.borderWrapper} testID={RANK(name)}>
            <Rank rank={rank} />
            <Image uri={uri} testID={LIST_YUMOJI(index)} />
            <Name name={name} bold={isCurrentUser} />
            <Score score={score} bold={isCurrentUser} />
          </View>
        </Animated.View>
      </TouchableOpacityWithDelay>
    </>
  );
};

export const ListRankItem = memo(_ListRankItem);
