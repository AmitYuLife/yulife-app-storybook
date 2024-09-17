import moment from "moment";
import { Navigation } from "@navigation/main";
import { ROUTES, bottomTabs, MODALS } from "@navigation/constants";
import { pushToScreen, showYuModal } from "@navigation/root";
import { t } from "@locale";
import { ITodayChallengesStatus } from "@redux/levels/levels.selectors";
import {
  LegacyQuestModalProps,
  QuestDetailModalContainerProps,
  QuestFeatureToggles,
} from "./quest-detail-modal/quest-detail-modal.types";
import { QuestDetailModalContainer } from "./quest-detail-modal/quest-detail-modal.container";
import { VoidFunction } from "@utils";
import { GetQuestMapQuery } from "@graphql/__generated";

export const dismissChestModal = () => Navigation.dismissModal(MODALS.chest);

const dismissChallengeUnavailableModal = () => Navigation.dismissModal(MODALS.challengeUnavailable);

type QuestMapLevel = GetQuestMapQuery["levels"][0];
type Goal = GetQuestMapQuery["levels"][0]["goals"][0];

type GoToChallengesListProps = Pick<QuestDetailModalContainerProps, "name" | "level" | "goals" | "yuniversalMap"> & {
  componentId: string;
  useHalfModalsForQuestMap: boolean;
  questMapInterstitialModal: boolean;
  isNavigatingFromModal: boolean;
  levelAvailable: boolean;
  isChestLevel?: boolean;
  unlocksReward: boolean;
};
export const goToChallengesList = ({
  componentId,
  useHalfModalsForQuestMap,
  questMapInterstitialModal,
  name,
  level,
  goals,
  yuniversalMap,
  isNavigatingFromModal,
  levelAvailable,
  isChestLevel,
  unlocksReward,
}: GoToChallengesListProps) => {
  if (isNavigatingFromModal && useHalfModalsForQuestMap) {
    Navigation.dismissOverlayWithChild();
  }

  if (isChestLevel && !useHalfModalsForQuestMap) {
    dismissChestModal();
  }

  const goToQuestChallengesList = () => {
    pushToScreen(componentId, {
      component: {
        id: ROUTES.questsChallengesList,
        name: ROUTES.questsChallengesList,
        passProps: {
          level,
          levelName: name,
          yuniversalMap,
        },
        options: { bottomTabs },
      },
    });
  };

  const canShowHalfModalForQuestMap = useHalfModalsForQuestMap && questMapInterstitialModal;

  if (!goals?.length || !levelAvailable || !canShowHalfModalForQuestMap || isNavigatingFromModal) {
    return goToQuestChallengesList();
  }

  const heading = unlocksReward ? t("screens.challenge_next_modal.heading") : t("screens.challenge_next_modal.tease");
  const ctaLabelSubmit = t("screens.challenge_next_modal.cta_submit");
  const ctaLabelReject = t("screens.challenge_next_modal.cta_reject");

  return Navigation.showOverlayWithChild(
    <QuestDetailModalContainer
      name={name}
      level={level}
      onPressCta={() => {
        Navigation.dismissOverlayWithChild();
        goToQuestChallengesList();
      }}
      onPressClose={Navigation.dismissOverlayWithChild}
      onPressCtaDismiss={Navigation.dismissOverlayWithChild}
      ctaLabelSubmit={ctaLabelSubmit}
      ctaLabelReject={ctaLabelReject}
      heading={heading}
      goals={goals}
    />
  );
};

export const buildChestModalCopy = (isNext: boolean, level: number, name?: string) => {
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

export const showChestModal = ({
  useHalfModalsForQuestMap,
  level,
  isNext,
  name,
  onPressCta,
  goals,
}: Partial<QuestDetailModalContainerProps> &
  QuestFeatureToggles &
  Partial<LegacyQuestModalProps> & { onPressCta: VoidFunction }) => {
  const { ctaLabel, heading } = buildChestModalCopy(isNext, level, name);

  if (useHalfModalsForQuestMap) {
    return Navigation.showOverlayWithChild(
      <QuestDetailModalContainer
        name={name}
        level={level}
        onPressCta={onPressCta}
        onPressCtaDismiss={isNext ? Navigation.dismissOverlayWithChild : null}
        onPressClose={Navigation.dismissOverlayWithChild}
        ctaLabelSubmit={ctaLabel}
        ctaLabelReject={!isNext ? null : t("screens.challenge_next_modal.cta_reject")}
        heading={heading}
        goals={goals}
        displayChestCard={true}
      />
    );
  }

  showYuModal({
    component: {
      id: MODALS.chest,
      name: MODALS.chest,
      passProps: {
        ctaLabel,
        heading,
        isLocked: true,
        onPressCta,
        onPressCtaSecondary: isNext ? dismissChestModal : null,
      },
    },
  });
};

export const showChallengeUnavailableModal = ({
  nextAvailableAt,
  isYuniversalLevel,
  useHalfModalsForQuestMap,
  goals,
  level,
}: {
  nextAvailableAt: string;
  isYuniversalLevel: boolean;
  useHalfModalsForQuestMap: boolean;
  goals: Array<Goal>;
  level: number;
}) => {
  if (useHalfModalsForQuestMap) {
    return Navigation.showOverlayWithChild(
      <QuestDetailModalContainer
        level={level}
        nextAvailableAt={nextAvailableAt}
        onPressCta={Navigation.dismissOverlayWithChild}
        onPressClose={Navigation.dismissOverlayWithChild}
        goals={goals}
        heading={t("screens.level_locked.level", { level })}
        ctaLabelSubmit={t("labels.cta.got_it")}
      />
    );
  }

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
};

export const showLevelUnavailableModal = ({
  name,
  level,
  useHalfModalsForQuestMap,
  goals,
  onPressCta,
  onPressClose,
}: Partial<QuestDetailModalContainerProps> & QuestFeatureToggles) => {
  if (useHalfModalsForQuestMap) {
    return Navigation.showOverlayWithChild(
      <QuestDetailModalContainer
        name={name}
        level={level}
        onPressCta={onPressCta || Navigation.dismissOverlayWithChild}
        onPressClose={onPressClose || Navigation.dismissOverlayWithChild}
        goals={goals}
        heading={t(name ? "screens.level_locked.stage" : "screens.level_locked.level", { name, level })}
        ctaLabelSubmit={t("labels.cta.got_it")}
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

    return "GoToChallengesList";
  }

  if (isNext) {
    if (levelAvailable) {
      if (isUnityLevel) {
        return "GoToChallengesList";
      }

      if (isChestLevel) {
        return "GoToChallengesList";
      }

      return "GoToChallengesList";
    }

    return "GoToChallengesList";
  }

  if (isChestLevel) {
    return "ShowChestModal";
  }

  return "GoToChallengesList";
}

export const getIsLevelAvailable = (nextAvailableAt: string): boolean => {
  const nextAvailable = nextAvailableAt ? moment().diff(moment(nextAvailableAt), "seconds") : 0;

  return nextAvailable >= 0;
};

type HandlePressLevelItemParams = {
  unlocksReward: boolean;
  componentId: string;
  itemLevel: QuestMapLevel;
  nextLevelAvailableAt: string;
  levelStatus: {
    isActive?: boolean;
    isDone: boolean;
    isNext: boolean;
    isPrevious: boolean;
    nextAvailableAt: string;
  };
  goals: Array<Goal>;
  challengesStatus: ITodayChallengesStatus;
  handleSetUnity: (itemLevel: QuestMapLevel) => void;
  handleSubmitUnity: (itemLevel: QuestMapLevel) => void;
  handlePressShowChestModal: () => void;
  yuniversalMap?: number;
  useHalfModalsForQuestMap: boolean;
  questMapInterstitialModal: boolean;
  name?: string;
};

type BuildChestModalSubmitHandler = {
  componentId: string;
  isNext: boolean;
  level: number;
  useHalfModalsForQuestMap: boolean;
  questMapInterstitialModal: boolean;
  goals: Array<Goal>;
  yuniversalMap: number;
  levelAvailable: boolean;
  unlocksReward: boolean;
};
export const buildChestModalSubmitHandler = ({
  isNext,
  componentId,
  level,
  useHalfModalsForQuestMap,
  questMapInterstitialModal,
  goals,
  yuniversalMap,
  levelAvailable,
  unlocksReward,
}: BuildChestModalSubmitHandler) => {
  return () => {
    if (isNext) {
      goToChallengesList({
        componentId,
        useHalfModalsForQuestMap,
        questMapInterstitialModal,
        level,
        goals,
        yuniversalMap,
        isNavigatingFromModal: true,
        levelAvailable,
        unlocksReward,
      });
    }

    if (useHalfModalsForQuestMap && !isNext) {
      Navigation.dismissOverlayWithChild();
    }

    if (!useHalfModalsForQuestMap) {
      dismissChestModal();
    }
  };
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
    useHalfModalsForQuestMap,
    questMapInterstitialModal,
    goals,
    yuniversalMap,
    name,
  }: HandlePressLevelItemParams) =>
  () => {
    const levelAvailable = getIsLevelAvailable(nextLevelAvailableAt);
    const action = getLevelAction({
      levelStatus,
      challengesStatus,
      itemLevel,
      levelAvailable,
    });

    const defaultProps = {
      componentId,
      useHalfModalsForQuestMap,
      questMapInterstitialModal,
      name,
      level: itemLevel.level,
      goals,
      yuniversalMap,
      isNext: levelStatus.isNext,
      isNavigatingFromModal: false,
      levelAvailable,
      unlocksReward: !!itemLevel.notificationIcon,
    };

    switch (action) {
      case "SetUnity":
        return handleSetUnity(itemLevel);
      case "GoToChallengesList":
        return goToChallengesList(defaultProps);
      case "ShowLevelCompleteModal":
        return showLevelCompleteModal(componentId, itemLevel.level);
      case "DispatchSubmitUnityAction":
        return handleSubmitUnity(itemLevel);
      case "ShowChestModal":
        return showChestModal({
          useHalfModalsForQuestMap,
          level: itemLevel.level,
          isNext: levelStatus.isNext,
          name: name,
          goals,
          onPressCta: buildChestModalSubmitHandler(defaultProps),
        });

      case "ShowChallengeUnavailableModal":
        return showChallengeUnavailableModal({
          nextAvailableAt: nextLevelAvailableAt,
          isYuniversalLevel: false,
          useHalfModalsForQuestMap,
          goals,
          level: itemLevel.level,
        });
      case "ShowLevelUnavailableModal":
      default:
        showLevelUnavailableModal({
          name,
          level: itemLevel.level,
          useHalfModalsForQuestMap,
          goals,
          onPressCta: Navigation.dismissOverlayWithChild,
          onPressClose: Navigation.dismissOverlayWithChild,
        });
    }
  };
