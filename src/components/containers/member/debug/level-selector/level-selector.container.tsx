import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import LevelSelectorScreen from "@components/screens/member/debug/level-selector/level-selector.screen";
import { useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";

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
        refetchQueries: [{ query: gql("GetQuestMapDocument") }],
      });
      if (success) {
        dispatch(getUserDataStart({ types: [AppDataType.coinLedger, AppDataType.todayActivity] }));
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
