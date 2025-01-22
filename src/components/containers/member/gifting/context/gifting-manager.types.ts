import { t } from "@locale";
import { Image, UserSearchItem } from "@redux/_core/types";
import { VoidFunction } from "@utils";
import { isNil } from "lodash";

export type GiftingAsset = {
  id: string;
  image: Image;
  textColor?: string;
};

export type GiftingBackgroundAsset = {
  id: string;
  image: Image;
  previewImage?: Image;
  textColor?: string;
  backgroundColor: string;
};

export interface IGiftingManagerState {
  targetUsers: Record<string, UserSearchItem>;
  maxTarget: number;
  maxDailySend: number;
}

export type GiftingChoice = {
  id: string;
  label: string;
};

export type YuCoinDenominationChoice = {
  id: number;
  label: string;
};

export enum GIFTING_PAGE {
  INTRO,
  SELECT_RECIPIENTS,
  SELECT_MESSAGE,
  SELECT_YU_COIN,
  MESSAGE_PREVIEW,
  SUCCESS,
}

type Props = {
  maxRecipientsPerGiftRequest: number;
  selectedCount: number;
  selectedMessage: string;
  selectedYuCoinId: number;
  selectedBackgroundId: string;
  selectedStickerId: string;
  totalCoins: number;
  onFinish: VoidFunction;
  handleSubmit: VoidFunction;
  notEnoughCoinAlert: VoidFunction;
  setPage: (page: GIFTING_PAGE) => void;
  incrementVisits: VoidFunction;
  pop: VoidFunction;
};

export const getGiftingPagesConfig = ({
  maxRecipientsPerGiftRequest,
  selectedCount,
  selectedMessage,
  selectedYuCoinId,
  selectedBackgroundId,
  selectedStickerId,
  onFinish,
  handleSubmit,
  notEnoughCoinAlert,
  totalCoins,
  setPage,
  pop,
  incrementVisits,
}: Props) => ({
  [GIFTING_PAGE.INTRO]: {
    id: GIFTING_PAGE.INTRO,
    cta: "labels.cta.get_started",
    heading: {
      title: "",
      description: "",
    },
    disableCta: false,
    ctaPress: () => {
      incrementVisits();
      setPage(GIFTING_PAGE.SELECT_RECIPIENTS);
    },
    backPress: () => {
      pop();
      return true;
    },
  },
  [GIFTING_PAGE.SELECT_RECIPIENTS]: {
    id: GIFTING_PAGE.SELECT_RECIPIENTS,
    cta: "labels.cta.next",
    heading: {
      title: t("screens.gifting.top_bar.select_target.heading"),
      description: !maxRecipientsPerGiftRequest
        ? ""
        : t("screens.gifting.top_bar.select_target.description", { smart_count: maxRecipientsPerGiftRequest }),
    },
    disableCta: selectedCount === 0,
    ctaPress: () => {
      setPage(GIFTING_PAGE.SELECT_MESSAGE);
    },
    backPress: () => {
      pop();
      return true;
    },
  },
  [GIFTING_PAGE.SELECT_MESSAGE]: {
    id: GIFTING_PAGE.SELECT_MESSAGE,
    cta: "labels.cta.next",
    heading: {
      title: t("screens.gifting.top_bar.select_message.heading"),
      description: t("screens.gifting.top_bar.select_message.description", { smart_count: selectedCount }),
    },
    disableCta: !selectedMessage,
    ctaPress: () => {
      setPage(GIFTING_PAGE.SELECT_YU_COIN);
    },
    backPress: () => {
      setPage(GIFTING_PAGE.SELECT_RECIPIENTS);
      return true;
    },
  },
  [GIFTING_PAGE.SELECT_YU_COIN]: {
    id: GIFTING_PAGE.SELECT_YU_COIN,
    cta: "labels.cta.next",
    heading: {
      title: t("screens.gifting.top_bar.set_coins.heading"),
      description: t("screens.gifting.top_bar.set_coins.description", { smart_count: selectedCount }),
    },
    disableCta: isNil(selectedYuCoinId),
    ctaPress: () => {
      if (totalCoins < selectedCount * selectedYuCoinId) {
        notEnoughCoinAlert();
      } else {
        setPage(GIFTING_PAGE.MESSAGE_PREVIEW);
      }
    },
    backPress: () => {
      setPage(GIFTING_PAGE.SELECT_MESSAGE);
      return true;
    },
  },
  [GIFTING_PAGE.MESSAGE_PREVIEW]: {
    id: GIFTING_PAGE.MESSAGE_PREVIEW,
    cta: "screens.gifting.send",
    heading: {
      title: t("screens.gifting.top_bar.message_preview.heading"),
      description: "",
    },
    disableCta: !selectedBackgroundId || !selectedStickerId,
    ctaPress: handleSubmit,
    backPress: () => {
      setPage(GIFTING_PAGE.SELECT_YU_COIN);
      return true;
    },
  },
  [GIFTING_PAGE.SUCCESS]: {
    id: GIFTING_PAGE.SUCCESS,
    cta: "",
    heading: {
      title: "",
      description: "",
    },
    disableCta: false,
    ctaPress: onFinish,
    backPress: () => {
      onFinish();
      return true;
    },
  },
});

export enum GiftSendingStates {
  SENDING = 1,
  SENT = 2,
  ERROR = 3,
}
