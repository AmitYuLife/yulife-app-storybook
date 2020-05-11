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

        // This logic makes me want to kill myself
        // Please increment the next number if you agree
        // +3

        if (levelStatus.isDone) {
          if (itemLevel.level % 50 === 0) {
            // is unity level
            setUnity(itemLevel.level);
          } else if (levelStatus.isPrevious && challengesStatus.hasDone && challengesStatus.isAvailable) {
            goToChallengesList(componentId, itemLevel);
          } else if (showCompletedLevel) {
            showLevelCompleteModal(componentId, itemLevel);
          }
        } else if (levelStatus.isNext) {
          if (itemLevel.level % 50 === 0) {
            // is unity level
            setUnity(itemLevel.level);
            dispatchSubmitUnityAction({ levelId: itemLevel.id });
          } else if (levelAvailable) {
            if (isChestLevel) {
              showChestModal(componentId, itemLevel, true, showChestModalCopy);
            } else {
              goToChallengesList(componentId, itemLevel);
            }
          } else {
            showChallengeUnavailableModal(nextLevelAvailableAt);
          }
        } else {
          // selected isn't the next available
          if (isChestLevel) {
            showChestModal(componentId, itemLevel, false, showChestModalCopy);
          } else {
            showLevelUnavailableModal(itemLevel.level);
          }
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
