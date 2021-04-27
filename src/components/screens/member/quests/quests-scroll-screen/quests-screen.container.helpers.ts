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
  levelAvailable: boolean;
}

export type LevelAction =
  | "SetUnity"
  | "ShowLevelCompleteModal"
  | "DispatchSubmitUnityAction"
  | "ShowChestModal"
  | "GoToChallengesList"
  | "ShowChallengeUnavailableModal"
  | "ShowLevelUnavailableModal";

export function getLevelAction({
  levelStatus,
  challengesStatus,
  itemLevel,
  levelAvailable,
}: GetActionConditionArgs): LevelAction {
  const isUnityLevel = itemLevel.level % 50 === 0;
  const { isPrevious, isDone, isNext } = levelStatus;
  const { hasDone, isAvailable: isChallengeAvailable } = challengesStatus;
  const isChestLevel = !!itemLevel.levelChestId;

  if (isDone) {
    if (isUnityLevel) {
      return "SetUnity";
    }

    if (isPrevious && hasDone && isChallengeAvailable) {
      return "GoToChallengesList";
    }

    return "ShowLevelCompleteModal";
  }

  if (isNext) {
    if (isUnityLevel) {
      return "DispatchSubmitUnityAction";
    }

    if (levelAvailable && isChestLevel) {
      return "ShowChestModal";
    }

    if (levelAvailable) {
      return "GoToChallengesList";
    }

    return "ShowChallengeUnavailableModal";
  }

  if (isChestLevel) {
    return "ShowChestModal";
  }

  return "ShowLevelUnavailableModal";
}
