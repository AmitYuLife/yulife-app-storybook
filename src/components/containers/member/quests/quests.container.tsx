import { MODALS, ROUTES } from "@navigation/constants";
import { IMainTabsProps } from "@navigation/root";
import { useQuery } from "@apollo/react-hooks";
import { GetCurrentWorld_getCurrentWorld, GetCurrentWorld } from "@graphql/_core/schema";
import { GQL_QUERY_GET_CURRENT_WORLD } from "@graphql/challenges";
import { bottomTabs } from "@navigation/constants";
import { getCurrentWorld, getUnitTarget } from "@services/utils";
import { Style } from "@styles/index";
import moment from "moment";
import React, { FC, useState, useCallback, useMemo } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getTotalCoins } from "../../../../redux/coins/coins.selectors";
import { getCopy } from "../../../../redux/copy/copy.selectors";
import { submitUnityAction } from "../../../../redux/levels/levels.actions";
import {
  challengeCancelAction,
  challengeEndAction,
  challengeResetAction,
} from "../../../../redux/levels/levels.actions";
import {
  getActiveLevel,
  getChallengesStatus,
  getCurrentLevel,
  getNextLevelAvailableAt,
} from "../../../../redux/levels/levels.selectors";
import { displayStreaksCompletedAction } from "../../../../redux/streaks/streaks.actions";
import { getQuestsOfflineTheme } from "../../../../redux/theme/theme.selectors";
import { getUserFeatures } from "../../../../redux/user/user.selectors";
import { openCalm, openHeadspace } from "../../../../services/app-link";
import BlurProvider from "../../../atoms/blur/blur-provider";
import Loading from "../../../atoms/loading/loading";
import { ChallengeCompleteModal } from "../../../modals";
import {
  ChallengeExitScreen,
  ChallengeFailedScreen,
  ChallengeProgressScreen,
  ChallengeSuccessScreen,
  QuestsScreenOffline,
  QuestsScrollScreen,
} from "../../../screens";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

function isAvailable(nextAvailableAt: string): boolean {
  const nextAvailable = !!nextAvailableAt ? moment().diff(moment(nextAvailableAt), "seconds") : 0;

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

export type Props = IMainTabsProps & ConnectedState & ConnectedDispatch;

const dismissChestModal = () => Navigation.dismissModal(MODALS.chest);

const dismissChallengeUnavailableModal = () => Navigation.dismissModal(MODALS.challengeUnavailable);

const dismissLevelUnavailableModal = () => Navigation.dismissModal(MODALS.levelUnavailable);

const showChestModal = (
  componentId: string,
  level: GetCurrentWorld_getCurrentWorld,
  isNext: boolean,
  { ctaLabelIsNext, ctaLabelIsNotNext, headingIsNext, headingIsNotNext }: Props["copy"]["showChestModal"]
) =>
  Navigation.showModal({
    component: {
      id: MODALS.chest,
      name: MODALS.chest,
      passProps: {
        ctaLabel: isNext ? ctaLabelIsNext : ctaLabelIsNotNext,
        heading: isNext ? headingIsNext : `${headingIsNotNext} ${level.level}`,
        isLocked: true,
        onPressCta: () => {
          if (isNext) {
            goToChallengesList(componentId, level);
          }

          dismissChestModal();
        },
        onPressCtaSecondary: isNext ? dismissChestModal : null,
      },
    },
  });

const showChallengeUnavailableModal = (nextAvailableAt: string) =>
  Navigation.showModal({
    component: {
      id: MODALS.challengeUnavailable,
      name: MODALS.challengeUnavailable,
      passProps: {
        nextAvailableAt,
        onPressCta: dismissChallengeUnavailableModal,
      },
    },
  });

const showLevelUnavailableModal = (level: number) =>
  Navigation.showModal({
    component: {
      id: MODALS.levelUnavailable,
      name: MODALS.levelUnavailable,
      passProps: {
        level,
        onPressCta: dismissLevelUnavailableModal,
      },
    },
  });

const showLevelCompleteModal = (componentId: string, level: GetCurrentWorld_getCurrentWorld) =>
  Navigation.push(componentId, {
    component: {
      id: ROUTES.questsChallengesHistory,
      name: ROUTES.questsChallengesHistory,
      passProps: {
        level,
        onPressActivityHistory: () => {
          Navigation.push(componentId, {
            component: {
              id: ROUTES.activityHistory,
              name: ROUTES.activityHistory,
              options: { bottomTabs },
            },
          });
        },
      },
      options: { bottomTabs },
    },
  });

const goToChallengesList = (componentId: string, level: GetCurrentWorld_getCurrentWorld) =>
  Navigation.push(componentId, {
    component: {
      id: ROUTES.questsChallengesList,
      name: ROUTES.questsChallengesList,
      passProps: {
        level,
      },
      options: { bottomTabs },
    },
  });

const QuestsContainer: FC<Props> = (props) => {
  const {
    activeLevel,
    componentId,
    currentLevel,
    features,
    copy,
    challengesStatus,
    nextLevelAvailableAt,
    totalCoins,
    theme,
    onLeftMenuPress,
    displayStreaksCompletedAction: dispatchDisplayStreaksCompleted,
    challengeResetAction: dispatchChallengeReset,
  } = props;

  const {
    coins,
    endDateTime,
    level,
    milestones,
    rating,
    score,
    status,
    subtype,
    timeUp,
    unit,
    isLoading,
  } = activeLevel;

  const { loading, data, refetch } = useQuery<GetCurrentWorld>(GQL_QUERY_GET_CURRENT_WORLD);
  const [unity, setUnity] = useState(null as number);

  const currentWorld = useMemo(() => getCurrentWorld(level), [level]);
  const screenProps = useMemo(
    () => ({
      componentId,
      currentLevel,
      onLeftMenuPress,
      totalCoins,
    }),
    [currentLevel, totalCoins, componentId, onLeftMenuPress]
  );

  const handleResetChallenge = useCallback(
    (showStreakComplete = false) => () => {
      if (showStreakComplete) {
        dispatchDisplayStreaksCompleted();
      }
      refetch();
      dispatchChallengeReset();
    },
    [refetch, dispatchDisplayStreaksCompleted, dispatchChallengeReset]
  );

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
          } else if (features.showCompletedLevel) {
            showLevelCompleteModal(componentId, itemLevel);
          }
        } else if (levelStatus.isNext) {
          if (itemLevel.level % 50 === 0) {
            // is unity level
            setUnity(itemLevel.level);
            props.submitUnityAction({ levelId: itemLevel.id });
          } else if (levelAvailable) {
            if (isChestLevel) {
              showChestModal(componentId, itemLevel, true, copy.showChestModal);
            } else {
              goToChallengesList(componentId, itemLevel);
            }
          } else {
            showChallengeUnavailableModal(nextLevelAvailableAt);
          }
        } else {
          // selected isn't the next available
          if (isChestLevel) {
            showChestModal(componentId, itemLevel, false, copy.showChestModal);
          } else {
            showLevelUnavailableModal(itemLevel.level);
          }
        }
      },
    };
  });

  const hideUnity = useCallback(() => {
    setUnity(null);
  }, []);

  if (Style.isIPad()) {
    return (
      <QuestsScreenOffline
        fitkitAvailable={false}
        totalCoins={totalCoins}
        onLeftMenuPress={onLeftMenuPress}
        theme={theme.questsOffline}
      />
    );
  }

  if (status) {
    return status === "success" ? (
      <ChallengeSuccessScreen
        level={level}
        onPressCta={handleResetChallenge(true)}
        rating={rating}
        reward={coins}
        score={score}
        unit={unit as any}
        copy={copy.success}
      />
    ) : (
      <ChallengeFailedScreen level={level} onPress={handleResetChallenge()} copy={copy.failed} />
    );
  }

  if (timeUp) {
    return <ChallengeCompleteModal isLoading={isLoading} onCtaPress={props.challengeEndAction} copy={copy.completed} />;
  }

  if (subtype) {
    const progressTargets = milestones.map((item) => item.target[getUnitTarget(subtype)]);

    return (
      <BlurProvider
        render={({ showOverlay }) => (
          <ChallengeProgressScreen
            {...screenProps}
            currentWorld={currentWorld}
            challengeType={subtype as any}
            showCounter={features.showCounter}
            onCalmPress={openCalm}
            onDismissPress={showOverlay}
            onHeadspacePress={openHeadspace}
            endDateTime={endDateTime}
            userProgress={score}
            progressTargets={progressTargets}
            unit={unit as any}
          />
        )}
        renderOverlay={({ hideOverlay }) => (
          <ChallengeExitScreen
            onClose={hideOverlay}
            onPressExit={props.challengeCancelAction}
            isCancelling={isLoading}
            copy={copy.exitChallenge}
          />
        )}
      />
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <QuestsScrollScreen
      {...screenProps}
      data={formattedData}
      hideUnity={hideUnity}
      unity={unity}
      activeLevel={getTheActiveLevel(formattedData)}
    />
  );
};

export function getTheActiveLevel(formatedData: any[]) {
  return formatedData.findIndex((level) => level.isNext && level.isActive) + 1;
}

const mapStateToProps = (state: IReduxState) => ({
  activeLevel: getActiveLevel(state),
  challengesStatus: getChallengesStatus(state),
  currentLevel: getCurrentLevel(state),
  features: getUserFeatures(state),
  nextLevelAvailableAt: getNextLevelAvailableAt(state),
  totalCoins: getTotalCoins(state),
  theme: {
    questsOffline: getQuestsOfflineTheme(state),
  },
  copy: getCopy(state, "challenges"),
});

const mapDispatchToProps = {
  challengeCancelAction,
  challengeEndAction,
  challengeResetAction,
  displayStreaksCompletedAction,
  submitUnityAction,
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(QuestsContainer);
