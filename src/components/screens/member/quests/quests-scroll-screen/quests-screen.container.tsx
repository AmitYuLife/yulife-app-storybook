import React, { useCallback, useState } from "react";
import { GetCurrentWorld } from "@graphql/_core/schema";
import { Loading } from "@atoms/index";
import QuestsScreen from "./quests-screen";
import { submitUnityAction } from "@redux/levels/levels.actions";
import moment from "moment";
import { connect } from "react-redux";
import { IConnectedScreenProps } from "@app/typings";
import { IReduxState } from "@redux/_core/reducers";
import { getChallengesStatus, getNextLevelAvailableAt } from "@redux/levels/levels.selectors";
import {
  goToChallengesList,
  showLevelCompleteModal,
  showChestModal,
  showChallengeUnavailableModal,
  showLevelUnavailableModal,
  getActionConditions,
} from "./quests-screen.container.helpers";

function isAvailable(nextAvailableAt: string): boolean {
  const nextAvailable = nextAvailableAt ? moment().diff(moment(nextAvailableAt), "seconds") : 0;

  return nextAvailable >= 0;
}

function getLevelStatus(
  challengesStatus: ConnectedState["challengesStatus"],
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
  return formatedData.findIndex((level) => level.isNext && level.isActive) + 1;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

interface Props extends ConnectedDispatch, ConnectedState, IConnectedScreenProps {
  componentId: string;
  data: GetCurrentWorld;
  loading: boolean;
  currentLevel: number;
  showCompletedLevel: boolean;
  showChestModalCopy: {
    ctaLabelIsNext: string;
    ctaLabelIsNotNext: string;
    headingIsNext: string;
    headingIsNotNext: string;
  };
}

function QuestsScreenContainer(props: Props) {
  const {
    data,
    loading,
    challengesStatus,
    nextLevelAvailableAt,
    componentId,
    currentLevel,
    dispatchSubmitUnityAction,
    showChestModalCopy,
    showCompletedLevel,
    onLeftMenuPress,
    totalCoins,
  } = props;
  const [unity, setUnity] = useState<number | null>(null);

  const hideUnity = useCallback(() => {
    setUnity(null);
  }, []);

  const currentWorldGQL = data?.getCurrentWorld ? data.getCurrentWorld : [];

  const formattedData = currentWorldGQL.map((itemLevel) => {
    const levelStatus = getLevelStatus(challengesStatus, currentLevel, itemLevel.level, nextLevelAvailableAt);
    const isChestLevel = !!itemLevel.levelChestId;

    return {
      ...itemLevel,
      ...levelStatus,
      isChestLevel,
      onPress: () => {
        const levelAvailable = isAvailable(nextLevelAvailableAt);
        const conditions = getActionConditions({
          levelStatus,
          challengesStatus,
          itemLevel,
          levelAvailable,
          showCompletedLevel,
        });

        if (conditions.shouldSetUnity) {
          setUnity(itemLevel.level);
        }

        if (conditions.shouldGoToChallengesList) {
          goToChallengesList(componentId, itemLevel);
        }

        if (conditions.shouldShowLevelCompleteModal) {
          showLevelCompleteModal(componentId, itemLevel);
        }

        if (conditions.shouldDispatchSubmitUnityAction) {
          dispatchSubmitUnityAction({ levelId: itemLevel.id });
        }

        if (conditions.shouldShowChallengeUnavailableModal) {
          showChallengeUnavailableModal(nextLevelAvailableAt);
        }

        if (conditions.shouldShowChestModal) {
          showChestModal(componentId, itemLevel, false, showChestModalCopy);
        }

        if (conditions.shouldShowLevelUnavailableModal) {
          showLevelUnavailableModal(itemLevel.level);
        }
      },
    };
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <QuestsScreen
      componentId={componentId}
      currentLevel={currentLevel}
      onLeftMenuPress={onLeftMenuPress}
      totalCoins={totalCoins}
      data={formattedData}
      hideUnity={hideUnity}
      unity={unity}
      activeLevel={getActiveLevel(formattedData)}
    />
  );
}

const mapStateToProps = (state: IReduxState) => ({
  challengesStatus: getChallengesStatus(state),
  nextLevelAvailableAt: getNextLevelAvailableAt(state),
});

const mapDispatchToProps = {
  dispatchSubmitUnityAction: submitUnityAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestsScreenContainer);
