import React, { memo, useCallback, useState } from "react";
import QuestsScreen from "./quests-screen";
import { submitUnityAction } from "@redux/levels/levels.actions";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { IConnectedScreenProps } from "@app/typings";
import {
  getChallengesStatus,
  getCurrentLevel,
  getNextLevelAvailableAt,
  getYuniversalProgress,
} from "@redux/levels/levels.selectors";
import {
  buildChestModalSubmitHandler,
  getIsLevelAvailable,
  handlePressLevelItem,
} from "./quests-screen.container.helpers";
import { useQuery } from "@apollo/client";
import { GQL_QUERY_GET_QUEST_MAP } from "@graphql/challenges";
import { GetMobileGameWeeklies, GetQuestMap, GetQuestMap_levels } from "@graphql/_core/schema";
import { YuniversalQuestsScreen } from "./yuniversal/yuniversal-quest-screen";
import { QuestsMapContext } from "./quests.context";
import { GQL_QUERY_GET_GAME_WEEKLIES } from "@graphql/weeklies";
import { useQueryOnScreenSeen } from "@hooks";
import { ROUTES } from "@navigation/constants";
import { getUserFeatures } from "@redux/user/user.selectors";

function isAvailable(nextAvailableAt: string): boolean {
  const nextAvailable = nextAvailableAt ? moment().diff(moment(nextAvailableAt), "seconds") : 0;

  return nextAvailable >= 0;
}

/**
 * When a user completes a challenge, but has multiple available challenges per day, we still increment their level
 * on the backend, but allow them to do the previous level as many times as they are allowed to
 */
function getLevelStatus(
  challengesStatus: ReturnType<typeof getChallengesStatus>,
  currentLevel: number,
  level: number,
  nextAvailableAt: string
) {
  const { hasDone: hasDoneChallenge, isAvailable: isChallengeAvailable } = challengesStatus;

  const hasTimer = !isAvailable(nextAvailableAt);

  if (currentLevel === level) {
    return {
      isActive: hasDoneChallenge ? hasTimer && !isChallengeAvailable : true,
      isDone: false,
      isNext: true,
      isPrevious: false,
      nextAvailableAt,
    };
  }

  const isUnityLevel = level % 50 === 0;
  const isPreviousLevel = currentLevel - 1 === level;
  const isPreviousLevelForUnity = currentLevel - 2 === level;
  const isFirstLevelOfTheWorld = currentLevel % 50 === 1;

  if ((!isUnityLevel && isPreviousLevel) || (isFirstLevelOfTheWorld && isPreviousLevelForUnity)) {
    const previousAvailable = hasDoneChallenge && hasTimer && isChallengeAvailable;
    return {
      isActive: previousAvailable,
      isDone: true,
      isNext: previousAvailable,
      isPrevious: true,
      nextAvailableAt: "",
    };
  }

  return {
    isDone: currentLevel > level,
    isNext: false,
    isPrevious: false,
    nextAvailableAt: "",
  };
}

export function getActiveLevel(formatedData: any[]) {
  const activeLevel = formatedData.find((level) => level.isNext && level.isActive);
  if (activeLevel) {
    return activeLevel.level;
  }

  return formatedData[0] ? formatedData[0].level : 0;
}

interface Props extends IConnectedScreenProps {
  componentId: string;
}

function QuestsScreenContainer(props: Props) {
  const { componentId, onLeftMenuPress } = props;
  const [unity, setUnity] = useState<number | null>(null);
  const [levelId, setLevelId] = useState<string>(null);
  const [repeatedUnity, setRepeatedUnity] = useState(false);
  const features = useSelector(getUserFeatures);
  const useHalfModalsForQuestMap = features.useHalfModalsForQuestMap;

  const dispatch = useDispatch();
  const challengesStatus = useSelector(getChallengesStatus);
  const nextLevelAvailableAt = useSelector(getNextLevelAvailableAt);
  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap, yuniversalLevel } = useSelector(getYuniversalProgress);

  const hideUnity = useCallback(() => {
    setUnity(null);
  }, []);

  const { loading, data } = useQuery<GetQuestMap>(GQL_QUERY_GET_QUEST_MAP, {
    fetchPolicy: "network-only",
  });

  const [, { loading: weekliesLoading, data: weekliesData }] = useQueryOnScreenSeen<GetMobileGameWeeklies>(
    GQL_QUERY_GET_GAME_WEEKLIES,
    ROUTES.quests
  );

  const levelsList = data?.levels || [];
  const handleSetUnity = useCallback((itemLevel: GetQuestMap_levels) => {
    setUnity(itemLevel.level);
    setLevelId(itemLevel.id);
    setRepeatedUnity(true);
  }, []);

  const handleSubmitUnity = useCallback(
    (itemLevel: GetQuestMap_levels) => {
      setUnity(itemLevel.level);
      setLevelId(itemLevel.id);
      dispatch(submitUnityAction({ levelId: itemLevel.id }));
      setRepeatedUnity(false);
    },
    [dispatch]
  );
  const formattedData = yuniversalMap
    ? []
    : levelsList.map((itemLevel) => {
        const levelStatus = getLevelStatus(challengesStatus, currentLevel, itemLevel.level, nextLevelAvailableAt);
        const isChestLevel = !!itemLevel.levelChest;

        return {
          ...itemLevel,
          ...levelStatus,
          isChestLevel,
          onPress: handlePressLevelItem({
            componentId,
            challengesStatus,
            handleSetUnity,
            handleSubmitUnity,
            itemLevel,
            levelStatus,
            nextLevelAvailableAt,
            handlePressShowChestModal: buildChestModalSubmitHandler({
              isNext: levelStatus.isNext,
              componentId,
              level: itemLevel.level,
              useHalfModalsForQuestMap,
              goals: itemLevel.goals,
              yuniversalMap,
              levelAvailable: getIsLevelAvailable(nextLevelAvailableAt),
            }),
            goals: itemLevel.goals,
            useHalfModalsForQuestMap: features.useHalfModalsForQuestMap,
          }),
        };
      });

  const context = {
    activeLevel: getActiveLevel(formattedData),
    formattedLevels: formattedData,
    weeklies: weekliesData?.getMobileGameWeeklies,
    isLoading: loading || weekliesLoading,
    levelsList,
    currentLevel,
  };

  return (
    <QuestsMapContext.Provider value={context}>
      {yuniversalMap && !unity ? (
        <YuniversalQuestsScreen
          componentId={componentId}
          yuniversalLevel={yuniversalLevel}
          yuniversalMap={yuniversalMap}
          levelList={levelsList}
          onLeftMenuPress={onLeftMenuPress}
        />
      ) : (
        <QuestsScreen
          onLeftMenuPress={onLeftMenuPress}
          hideUnity={hideUnity}
          unity={unity}
          levelId={levelId}
          repeatedUnity={repeatedUnity}
          componentId={componentId}
        />
      )}
    </QuestsMapContext.Provider>
  );
}

export default memo(QuestsScreenContainer);
