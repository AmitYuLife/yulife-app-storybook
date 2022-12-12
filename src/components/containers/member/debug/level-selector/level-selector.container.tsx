import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { getUserCoinLedgerStart } from "@redux/user/user.actions";
import LevelSelectorScreen from "@components/screens/member/debug/level-selector/level-selector.screen";
import setUserQuestProgressWithClient from "@graphql/debug/setUserQuestProgress.gql";

const LevelSelector = () => {
  const dispatch = useDispatch();
  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap, yuniversalLevel } = useSelector(getYuniversalProgress);

  const onLeftIconPress = useCallback(() => Navigation.pop(ROUTES.debug), []);
  const onSubmit = useCallback(
    async (newCurrentLevel: number, newYuniversalMap?: number, newYuniversalLevel?: number) => {
      const success = await setUserQuestProgressWithClient(newCurrentLevel, newYuniversalMap, newYuniversalLevel);
      if (success) {
        dispatch(getUserCoinLedgerStart());
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
