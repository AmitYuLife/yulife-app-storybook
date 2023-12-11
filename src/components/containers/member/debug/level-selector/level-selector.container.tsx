import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { AppDataType, getUserDataStart } from "@redux/user/user.actions";
import LevelSelectorScreen from "@components/screens/member/debug/level-selector/level-selector.screen";
import { useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { GQL_QUERY_GET_QUEST_MAP } from "@graphql/challenges";

const LevelSelector = () => {
  const dispatch = useDispatch();
  const [setUserQuestProgress] = useMutation(gql("SetUserQuestProgressDocument"));
  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap, yuniversalLevel } = useSelector(getYuniversalProgress);

  const onLeftIconPress = useCallback(() => Navigation.pop(ROUTES.debug), []);
  const onSubmit = useCallback(
    async (newCurrentLevel: number, newYuniversalMap?: number, newYuniversalLevel?: number) => {
      const success = await setUserQuestProgress({
        variables: {
          currentLevel: newCurrentLevel,
          yuniversalMap: newYuniversalMap,
          yuniversalLevel: newYuniversalLevel,
        },
        refetchQueries: [{ query: GQL_QUERY_GET_QUEST_MAP }],
      });
      if (success) {
        dispatch(getUserDataStart([AppDataType.coinLedger, AppDataType.todayActivity]));
      }

      Navigation.popToRoot(ROUTES.debug);
    },
    [dispatch]
  );

  return (
    <LevelSelectorScreen
      currentLevel={currentLevel}
      yuniversalMap={yuniversalMap}
      yuniversalLevel={yuniversalLevel}
      onLeftIconPress={onLeftIconPress}
      onSubmit={onSubmit}
    />
  );
};

export default LevelSelector;
