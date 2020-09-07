import { GetCurrentQuestLevels_getCurrentQuestLevels } from "@graphql/_core/schema";
import { Navigation } from "react-native-navigation";
import { ROUTES, bottomTabs, MODALS } from "@navigation/constants";

const dismissChestModal = () => Navigation.dismissModal(MODALS.chest);

const dismissChallengeUnavailableModal = () => Navigation.dismissModal(MODALS.challengeUnavailable);

const dismissLevelUnavailableModal = () => Navigation.dismissModal(MODALS.levelUnavailable);

export const goToChallengesList = (componentId: string, level: GetCurrentQuestLevels_getCurrentQuestLevels) =>
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

export const showChestModal = (
  componentId: string,
  level: GetCurrentQuestLevels_getCurrentQuestLevels,
  isNext: boolean,
  {
    ctaLabelIsNext,
    ctaLabelIsNotNext,
    headingIsNext,
    headingIsNotNext,
  }: {
    ctaLabelIsNext: string;
    ctaLabelIsNotNext: string;
    headingIsNext: string;
    headingIsNotNext: string;
  }
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

export const showChallengeUnavailableModal = (nextAvailableAt: string) =>
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

export const showLevelUnavailableModal = (level: number) =>
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

export const showLevelCompleteModal = (componentId: string, level: GetCurrentQuestLevels_getCurrentQuestLevels) =>
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

export interface GetActionConditionArgs {
  levelStatus: {
    isDone: boolean;
    isNext: boolean;
    isPrevious: boolean;
  };
  challengesStatus: {
    hasDone: boolean;
    isAvailable: boolean;
  };
  itemLevel: {
    level: number;
    levelChestId?: string;
  };
  showCompletedLevel: boolean;
  levelAvailable: boolean;
}

export function getActionConditions({
  levelStatus,
  challengesStatus,
  itemLevel,
  showCompletedLevel,
  levelAvailable,
}: GetActionConditionArgs) {
  const conditions = {
    shouldSetUnity: false,
    shouldGoToChallengesList: false,
    shouldShowLevelCompleteModal: false,
    shouldDispatchSubmitUnityAction: false,
    shouldShowChestModal: false,
    shouldShowChallengeUnavailableModal: false,
    shouldShowLevelUnavailableModal: false,
  };

  const isUnityLevel = itemLevel.level % 50 === 0;
  const { isPrevious, isDone, isNext } = levelStatus;
  const { hasDone, isAvailable: isChallengeAvailable } = challengesStatus;
  const isChestLevel = !!itemLevel.levelChestId;

  if (isDone) {
    if (isUnityLevel) {
      conditions.shouldSetUnity = true;
    } else if (isPrevious && hasDone && isChallengeAvailable) {
      conditions.shouldGoToChallengesList = true;
    } else if (showCompletedLevel) {
      conditions.shouldShowLevelCompleteModal = true;
    }
  } else if (isNext) {
    if (isUnityLevel) {
      conditions.shouldSetUnity = true;
      conditions.shouldDispatchSubmitUnityAction = true;
    } else if (levelAvailable && isChestLevel) {
      conditions.shouldShowChestModal = true;
    } else if (levelAvailable) {
      conditions.shouldGoToChallengesList = true;
    } else {
      conditions.shouldShowChallengeUnavailableModal = true;
    }
  } else {
    if (isChestLevel) {
      conditions.shouldShowChestModal = true;
    } else {
      conditions.shouldShowLevelUnavailableModal = true;
    }
  }

  return conditions;
}
