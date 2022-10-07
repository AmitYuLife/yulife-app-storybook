import { GetQuestMap_levels } from "@graphql/_core/schema";
import { Navigation } from "react-native-navigation";
import { ROUTES, bottomTabs, MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { t } from "@locale";

const dismissChestModal = () => Navigation.dismissModal(MODALS.chest);

const dismissChallengeUnavailableModal = () => Navigation.dismissModal(MODALS.challengeUnavailable);

const dismissLevelUnavailableModal = () => Navigation.dismissModal(MODALS.levelUnavailable);

export const goToChallengesList = (componentId: string, level: number, levelName?: string, yuniversalMap?: number) =>
  Navigation.push(componentId, {
    component: {
      id: ROUTES.questsChallengesList,
      name: ROUTES.questsChallengesList,
      passProps: {
        level,
        levelName,
        yuniversalMap,
      },
      options: { bottomTabs },
    },
  });

const buildChestModalCopy = (isNext: boolean, level: number, yuniversalMap: number) => {
  if (isNext) {
    return {
      ctaLabel: t("screens.challenge_chest_modal.cta_label_is_next"),
      heading: t("screens.challenge_chest_modal.heading_is_next"),
    };
  }

  if (yuniversalMap) {
    return {
      ctaLabel: t("screens.challenge_chest_modal.cta_label_is_not_next"),
      heading: t("screens.challenge_chest_modal.heading_is_not_next_stage", { level }),
    };
  }

  return {
    ctaLabel: t("screens.challenge_chest_modal.cta_label_is_not_next"),
    heading: t("screens.challenge_chest_modal.heading_is_not_next_level", { level }),
  };
};

export const showChestModal = (
  componentId: string,
  level: GetQuestMap_levels,
  yuniversalMap: number,
  isNext: boolean
) =>
  showYuModal({
    component: {
      id: MODALS.chest,
      name: MODALS.chest,
      passProps: {
        ...buildChestModalCopy(isNext, level.level, yuniversalMap),
        isLocked: true,
        onPressCta: () => {
          if (isNext) {
            goToChallengesList(componentId, level.level, null, yuniversalMap);
          }

          dismissChestModal();
        },
        onPressCtaSecondary: isNext ? dismissChestModal : null,
      },
    },
  });

export const showChallengeUnavailableModal = (nextAvailableAt: string) =>
  showYuModal({
    component: {
      id: MODALS.challengeUnavailable,
      name: MODALS.challengeUnavailable,
      passProps: {
        nextAvailableAt,
        onPressCta: dismissChallengeUnavailableModal,
      },
    },
  });

export const showLevelUnavailableModal = (level: number, isUniversalLevel = false) =>
  showYuModal({
    component: {
      id: MODALS.levelUnavailable,
      name: MODALS.levelUnavailable,
      passProps: {
        level,
        isUniversalLevel,
        onPressCta: dismissLevelUnavailableModal,
      },
    },
  });

export const showLevelCompleteModal = (
  componentId: string,
  level: number,
  yuniversalMap?: number,
  levelName?: string
) =>
  Navigation.push(componentId, {
    component: {
      id: ROUTES.questsChallengesHistory,
      name: ROUTES.questsChallengesHistory,
      passProps: {
        level,
        yuniversalMap,
        levelName,
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
    levelChest?: string;
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
  const isChestLevel = !!itemLevel.levelChest;

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
    if (levelAvailable) {
      if (isUnityLevel) {
        return "DispatchSubmitUnityAction";
      }

      if (isChestLevel) {
        return "ShowChestModal";
      }

      return "GoToChallengesList";
    }

    return "ShowChallengeUnavailableModal";
  }

  if (isChestLevel) {
    return "ShowChestModal";
  }

  return "ShowLevelUnavailableModal";
}
