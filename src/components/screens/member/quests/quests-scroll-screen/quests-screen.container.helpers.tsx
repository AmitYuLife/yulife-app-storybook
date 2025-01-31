import moment from "moment";
import { Navigation } from "@navigation/main";
import { ROUTES, bottomTabs, MODALS } from "@navigation/constants";
import { pushToScreen } from "@navigation/root";
import { t } from "@locale";
import { ITodayChallengesStatus } from "@redux/levels/levels.selectors";
import { LegacyQuestModalProps, QuestDetailModalContainerProps } from "./quest-detail-modal/quest-detail-modal.types";
import { QuestDetailModalContainer } from "./quest-detail-modal/quest-detail-modal.container";
import { VoidFunction } from "@utils";
import { GetQuestMapQuery, RemoteImage } from "@graphql/__generated";

export const dismissChestModal = () => Navigation.dismissModal(MODALS.chest);

type QuestMapLevel = GetQuestMapQuery["levels"][0];

type GoToChallengesListProps = Pick<QuestDetailModalContainerProps, "name" | "level" | "yuniversalMap"> & {
  componentId: string;
  questMapInterstitialModal: boolean;
  isNavigatingFromModal: boolean;
  levelAvailable: boolean;
  isChestLevel?: boolean;
  notificationIcon?: RemoteImage;
};

export const goToChallengesList = ({
  componentId,
  questMapInterstitialModal,
  name,
  level,
  yuniversalMap,
  isNavigatingFromModal,
  levelAvailable,
  notificationIcon,
}: GoToChallengesListProps) => {
  if (isNavigatingFromModal) {
    Navigation.dismissOverlayWithChild();
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

  if (!notificationIcon?.id || !levelAvailable || !questMapInterstitialModal || isNavigatingFromModal) {
    return goToQuestChallengesList();
  }

  const heading = notificationIcon?.id
    ? t("screens.challenge_next_modal.heading")
    : t("screens.challenge_next_modal.tease");
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
  level,
  isNext,
  name,
  onPressCta,
}: Partial<QuestDetailModalContainerProps> & Partial<LegacyQuestModalProps> & { onPressCta: VoidFunction }) => {
  const { ctaLabel, heading } = buildChestModalCopy(isNext, level, name);

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
      displayChestCard={true}
    />
  );
};

export const showChallengeUnavailableModal = ({
  nextAvailableAt,
  level,
}: {
  nextAvailableAt: string;
  isYuniversalLevel: boolean;
  level: number;
}) => {
  return Navigation.showOverlayWithChild(
    <QuestDetailModalContainer
      level={level}
      nextAvailableAt={nextAvailableAt}
      onPressCta={Navigation.dismissOverlayWithChild}
      onPressClose={Navigation.dismissOverlayWithChild}
      heading={t("screens.level_locked.level", { level })}
      ctaLabelSubmit={t("labels.cta.got_it")}
    />
  );
};

export const showLevelUnavailableModal = ({
  name,
  level,
  onPressCta,
  onPressClose,
}: Partial<QuestDetailModalContainerProps>) => {
  return Navigation.showOverlayWithChild(
    <QuestDetailModalContainer
      name={name}
      level={level}
      onPressCta={onPressCta || Navigation.dismissOverlayWithChild}
      onPressClose={onPressClose || Navigation.dismissOverlayWithChild}
      heading={t(name ? "screens.level_locked.stage" : "screens.level_locked.level", { name, level })}
      ctaLabelSubmit={t("labels.cta.got_it")}
    />
  );
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
  notificationIcon?: RemoteImage;
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
  challengesStatus: ITodayChallengesStatus;
  handleSetUnity: (itemLevel: QuestMapLevel) => void;
  handleSubmitUnity: (itemLevel: QuestMapLevel) => void;
  handlePressShowChestModal: () => void;
  yuniversalMap?: number;
  questMapInterstitialModal: boolean;
  name?: string;
};

type BuildChestModalSubmitHandler = {
  componentId: string;
  isNext: boolean;
  level: number;
  questMapInterstitialModal: boolean;
  yuniversalMap: number;
  levelAvailable: boolean;
  notificationIcon?: RemoteImage;
};
export const buildChestModalSubmitHandler = ({
  isNext,
  componentId,
  level,
  questMapInterstitialModal,
  yuniversalMap,
  levelAvailable,
  notificationIcon,
}: BuildChestModalSubmitHandler) => {
  return () => {
    if (isNext) {
      goToChallengesList({
        componentId,
        questMapInterstitialModal,
        level,
        yuniversalMap,
        isNavigatingFromModal: true,
        levelAvailable,
        notificationIcon,
      });
    }

    if (!isNext) {
      Navigation.dismissOverlayWithChild();
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
    questMapInterstitialModal,
    yuniversalMap,
    name,
    notificationIcon,
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
      questMapInterstitialModal,
      name,
      level: itemLevel.level,
      yuniversalMap,
      isNext: levelStatus.isNext,
      isNavigatingFromModal: false,
      levelAvailable,
      notificationIcon,
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
          level: itemLevel.level,
          isNext: levelStatus.isNext,
          name: name,
          onPressCta: buildChestModalSubmitHandler(defaultProps),
        });

      case "ShowChallengeUnavailableModal":
        return showChallengeUnavailableModal({
          nextAvailableAt: nextLevelAvailableAt,
          isYuniversalLevel: false,
          level: itemLevel.level,
        });
      case "ShowLevelUnavailableModal":
      default:
        showLevelUnavailableModal({
          name,
          level: itemLevel.level,
          onPressCta: Navigation.dismissOverlayWithChild,
          onPressClose: Navigation.dismissOverlayWithChild,
        });
    }
  };
