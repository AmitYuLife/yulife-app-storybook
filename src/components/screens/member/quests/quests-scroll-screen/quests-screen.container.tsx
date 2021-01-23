import React, { useCallback, useState } from "react";
import { GetCurrentQuestLevels } from "@graphql/_core/schema";
import QuestsScreen from "./quests-screen";
import { submitUnityAction } from "@redux/levels/levels.actions";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { IConnectedScreenProps } from "@app/typings";
import { getChallengesStatus, getCurrentLevel, getNextLevelAvailableAt } from "@redux/levels/levels.selectors";
import {
  goToChallengesList,
  showLevelCompleteModal,
  showChestModal,
  showChallengeUnavailableModal,
  showLevelUnavailableModal,
  getLevelAction,
} from "./quests-screen.container.helpers";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_CURRENT_QUEST_LEVELS } from "@graphql/challenges/getCurrentQuestLevels.gql";
import { getShowChestCopy } from "@redux/copy/copy.selectors";

function isAvailable(nextAvailableAt: string): boolean {
  const nextAvailable = nextAvailableAt ? moment().diff(moment(nextAvailableAt), "seconds") : 0;

  return nextAvailable >= 0;
}

function getLevelStatus(
  challengesStatus: ReturnType<typeof getChallengesStatus>,
  currentLevel: number,
  level: number,
  nextAvailableAt: string
) {
  const { hasDone: hasDoneChallenge, isAvailable: isChallengeAvailable } = challengesStatus;
  const isInSecondWorld = currentLevel > 51;

  if (currentLevel === level) {
    return {
      isActive: isInSecondWorld && hasDoneChallenge ? !isChallengeAvailable : true,
      isDone: false,
      isNext: true,
      isPrevious: false,
      nextAvailableAt,
    };
  }

  // previous level = currentLevel - 1
  // previous level for unity = currentLevel - 2
  if (
    (level % 50 !== 0 && currentLevel - 1 === level) ||
    (isInSecondWorld && currentLevel % 50 === 1 && currentLevel - 2 === level)
  ) {
    const previousAvailable = hasDoneChallenge && isChallengeAvailable;
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
  const activeLevel = formatedData.findIndex((level) => level.isNext && level.isActive) + 1;
  if (activeLevel) {
    return activeLevel;
  }

  return formatedData[0] ? formatedData[0].level : 0;
}

interface Props extends IConnectedScreenProps {
  componentId: string;
  showCompletedLevel: boolean;
}

function QuestsScreenContainer(props: Props) {
  const { componentId, showCompletedLevel, onLeftMenuPress } = props;
  const [unity, setUnity] = useState<number | null>(null);

  const dispatch = useDispatch();
  const showChestModalCopy = useSelector(getShowChestCopy);
  const challengesStatus = useSelector(getChallengesStatus);
  const nextLevelAvailableAt = useSelector(getNextLevelAvailableAt);
  const currentLevel = useSelector(getCurrentLevel);

  const hideUnity = useCallback(() => {
    setUnity(null);
  }, []);

  const { loading, data } = useQuery<GetCurrentQuestLevels>(GQL_QUERY_GET_CURRENT_QUEST_LEVELS, {
    fetchPolicy: "network-only",
  });

  const currentWorldGQL = data?.getCurrentQuestLevels ? data?.getCurrentQuestLevels : [];

  const formattedData = currentWorldGQL.map((itemLevel) => {
    const levelStatus = getLevelStatus(challengesStatus, currentLevel, itemLevel.level, nextLevelAvailableAt);
    const isChestLevel = !!itemLevel.levelChestId;

    return {
      ...itemLevel,
      ...levelStatus,
      isChestLevel,
      onPress: () => {
        const levelAvailable = isAvailable(nextLevelAvailableAt);
        const action = getLevelAction({
          levelStatus,
          challengesStatus,
          itemLevel,
          levelAvailable,
          showCompletedLevel,
        });

        switch (action) {
          case "SetUnity":
            setUnity(itemLevel.level);
            break;
          case "GoToChallengesList":
            goToChallengesList(componentId, itemLevel);
            break;
          case "ShowLevelCompleteModal":
            showLevelCompleteModal(componentId, itemLevel);
            break;
          case "DispatchSubmitUnityAction":
            setUnity(itemLevel.level);
            dispatch(submitUnityAction({ levelId: itemLevel.id }));
            break;
          case "ShowChestModal":
            showChestModal(componentId, itemLevel, levelStatus.isNext, showChestModalCopy);
            break;
          case "ShowChallengeUnavailableModal":
            showChallengeUnavailableModal(nextLevelAvailableAt);
            break;
          case "ShowLevelUnavailableModal":
          default:
            showLevelUnavailableModal(itemLevel.level);
            break;
        }
      },
    };
  });

  return (
    <QuestsScreen
      loading={loading}
      componentId={componentId}
      currentLevel={currentLevel}
      onLeftMenuPress={onLeftMenuPress}
      data={formattedData}
      hideUnity={hideUnity}
      unity={unity}
      activeLevel={getActiveLevel(formattedData)}
    />
  );
}

export default QuestsScreenContainer;
