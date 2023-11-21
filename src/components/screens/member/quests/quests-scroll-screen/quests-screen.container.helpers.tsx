import moment from "moment";
import { GetQuestMap_levels } from "@graphql/_core/schema";
import { Navigation } from "@navigation/main";
import { ROUTES, bottomTabs, MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { t } from "@locale";
import { ITodayChallengesStatus } from "@redux/levels/levels.selectors";
import { QuestDetailModalProps, QuestFeatureToggles } from "./quest-detail-modal/quest-detail-modal.types";
import { QuestDetailModal } from "./quest-detail-modal/quest-detail-modal.component";

const dismissChestModal = () => Navigation.dismissModal(MODALS.chest);

const dismissChallengeUnavailableModal = () => Navigation.dismissModal(MODALS.challengeUnavailable);

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

const buildChestModalCopy = (isNext: boolean, level: number, name?: string) => {
  if (isNext) {
    return {
      ctaLabel: t("screens.challenge_chest_modal.cta_label_is_next"),
      heading: t("screens.challenge_chest_modal.heading_is_next"),
    };
  }

  if (name) {
    return {
      ctaLabel: t("labels.cta.got_it"),
      heading: t("screens.challenge_chest_modal.heading_is_not_next_stage", { name }),
    };
  }

  return {
    ctaLabel: t("labels.cta.got_it"),
    heading: t("screens.challenge_chest_modal.heading_is_not_next_level", { level }),
  };
};

export const showChestModal = (
  componentId: string,
  level: GetQuestMap_levels,
  yuniversalMap: number,
  isNext: boolean,
  name?: string
) =>
  showYuModal({
    component: {
      id: MODALS.chest,
      name: MODALS.chest,
      passProps: {
        ...buildChestModalCopy(isNext, level.level, name),
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

export const showChallengeUnavailableModal = (nextAvailableAt: string, isYuniversalLevel = false) =>
  showYuModal({
    component: {
      id: MODALS.challengeUnavailable,
      name: MODALS.challengeUnavailable,
      passProps: {
        isYuniversalLevel,
        nextAvailableAt,
        onPressCta: dismissChallengeUnavailableModal,
      },
    },
  });

export const showLevelUnavailableModal = ({
  name,
  level,
  useHalfModalsForQuestMap,
  ...props
}: Partial<QuestDetailModalProps> & QuestFeatureToggles) => {
  if (useHalfModalsForQuestMap) {
    return Navigation.showOverlayWithChild(
      <QuestDetailModal
        name={name}
        level={level}
        onPressCta={props.onPressCta || Navigation.dismissOverlayWithChild}
        onPressClose={props.onPressClose || Navigation.dismissOverlayWithChild}
        type="unavailable"
      />
    );
  }

  showYuModal({
    component: {
      id: MODALS.levelUnavailable,
      name: MODALS.levelUnavailable,
      passProps: {
        level,
        name,
        onPressCta: () => Navigation.dismissModal(MODALS.levelUnavailable),
      },
    },
  });
};

export const showLevelCompleteModal = (
  componentId: string,
  level: number,
  yuniversalMap?: number,
  levelName?: string
) =>
  Navigation.push(componentId, {
    component: {
      id: ROUTES.challengesHistoryNew,
      name: ROUTES.challengesHistoryNew,
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

export const getIsLevelAvailable = (nextAvailableAt: string): boolean => {
  const nextAvailable = nextAvailableAt ? moment().diff(moment(nextAvailableAt), "seconds") : 0;

  return nextAvailable >= 0;
};

type HandlePressLevelItemParams = {
  componentId: string;
  itemLevel: GetQuestMap_levels;
  nextLevelAvailableAt: string;
  levelStatus: {
    isActive?: boolean;
    isDone: boolean;
    isNext: boolean;
    isPrevious: boolean;
    nextAvailableAt: string;
  };
  challengesStatus: ITodayChallengesStatus;
  handleSetUnity: (itemLevel: GetQuestMap_levels) => void;
  handleSubmitUnity: (itemLevel: GetQuestMap_levels) => void;
  levelUnavailableModalProps: Partial<QuestDetailModalProps>;
  useHalfModalsForQuestMap: boolean;
};

export const handlePressLevelItem =
  ({
    componentId,
    itemLevel,
    nextLevelAvailableAt,
    levelStatus,
    challengesStatus,
    handleSetUnity,
    handleSubmitUnity,
    levelUnavailableModalProps,
    useHalfModalsForQuestMap,
  }: HandlePressLevelItemParams) =>
  () => {
    const levelAvailable = getIsLevelAvailable(nextLevelAvailableAt);
    const action = getLevelAction({
      levelStatus,
      challengesStatus,
      itemLevel,
      levelAvailable,
    });

    switch (action) {
      case "SetUnity":
        return handleSetUnity(itemLevel);
      case "GoToChallengesList":
        return goToChallengesList(componentId, itemLevel.level);
      case "ShowLevelCompleteModal":
        return showLevelCompleteModal(componentId, itemLevel.level);
      case "DispatchSubmitUnityAction":
        return handleSubmitUnity(itemLevel);
      case "ShowChestModal":
        return showChestModal(componentId, itemLevel, null, levelStatus.isNext);
      case "ShowChallengeUnavailableModal":
        return showChallengeUnavailableModal(nextLevelAvailableAt);
      case "ShowLevelUnavailableModal":
      default:
        showLevelUnavailableModal({ useHalfModalsForQuestMap, ...levelUnavailableModalProps });
    }
  };
