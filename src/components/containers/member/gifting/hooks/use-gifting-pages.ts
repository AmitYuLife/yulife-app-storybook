import { Style } from "@styles";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useGiftingSubmit } from "../hooks/use-gifting-submit";
import { getGiftingCopyPageHeadings } from "../copy/get-gifting-copy-page-headings";
import { VoidFunction } from "@utils";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { Alert, Keyboard } from "react-native";
import { t } from "@locale";
import { GiftingManagerPages } from "../context/gifting-manager.types";
import { isNil } from "lodash";
import { UserSearchItem } from "@redux/_core/types";
import { useNavigation } from "@navigation/navigation.context";
import { Navigation } from "@navigation/main";
import { useBackHandler } from "@hooks";
import { giftingIntroShownCount } from "@redux/onboarding/onboarding.selectors";
import { incrementOnboardingVisits } from "@redux/onboarding/onboarding.actions";

type Props = {
  maxRecipientsPerGiftRequest: number;
  selectedUsers: UserSearchItem[];
  selectedMessage: string;
  selectedYuCoinId: number;
  hasSelectedBackground: boolean;
  hasSelectedSticker: boolean;
  onFinish: VoidFunction;
};

export const useGiftingPages = ({
  maxRecipientsPerGiftRequest,
  selectedUsers,
  selectedMessage,
  selectedYuCoinId,
  hasSelectedBackground,
  hasSelectedSticker,
  onFinish,
}: Props) => {
  const { componentId } = useNavigation();
  const reduxDispatch = useDispatch();
  const totalCoins = useSelector(getTotalCoins);
  const introShownCount = useSelector(giftingIntroShownCount);
  const firstPage = useRef(introShownCount > 2 ? 1 : 0).current;
  const pageHeadings = useMemo(
    () =>
      getGiftingCopyPageHeadings({
        maxRecipientsPerGiftRequest,
        selectedCount: selectedUsers.length,
      }),
    [maxRecipientsPerGiftRequest, selectedUsers.length]
  );
  const [page, setPage] = useState(firstPage);
  const scrollViewRef = useRef(null);
  const heading = useMemo(() => pageHeadings[page], [page, pageHeadings]);
  const ctaTranslationKey = useMemo(() => CTA_TRANSLATION_KEY_MAP[page], [page]);
  const { handleSubmit, loading: submitting } = useGiftingSubmit({
    selectedUsers,
    amount: selectedYuCoinId,
    messagePresetId: selectedMessage,
    onFinish,
  });

  const disableCta = useMemo(() => {
    if (page === GiftingManagerPages.INTRO) {
      return false;
    }

    if (page === GiftingManagerPages.SELECT_RECIPIENTS) {
      return !selectedUsers.length;
    }

    if (page === GiftingManagerPages.SELECT_MESSAGE) {
      return !selectedMessage;
    }

    if (page === GiftingManagerPages.SELECT_YU_COIN) {
      return isNil(selectedYuCoinId);
    }

    if (page === GiftingManagerPages.MESSAGE_PREVIEW) {
      return !hasSelectedBackground || !hasSelectedSticker;
    }
  }, [page, selectedMessage, selectedYuCoinId, selectedUsers, hasSelectedBackground, hasSelectedSticker]);

  const navigationFactory = useCallback(
    (increment: number) => () => {
      setPage((curr) => {
        const newPage = curr + increment;
        scrollViewRef.current?.scrollTo?.({ x: newPage * Style.DEVICE_WIDTH, animated: true });
        return newPage;
      });
    },
    []
  );

  useEffect(() => {
    scrollViewRef.current?.scrollTo?.({ x: firstPage * Style.DEVICE_WIDTH, animated: false });
  }, [scrollViewRef.current]);

  const handlePressNext = useMemo(() => {
    if (page === GiftingManagerPages.INTRO) {
      reduxDispatch(incrementOnboardingVisits({ key: "giftingIntroShownCount" }));
    }

    if (page === GiftingManagerPages.MESSAGE_PREVIEW) {
      return handleSubmit;
    }

    const totalCoinSpend = selectedUsers.length * selectedYuCoinId;
    if (page === GiftingManagerPages.SELECT_YU_COIN && totalCoins < totalCoinSpend) {
      return () => Alert.alert("", t("screens.gifting.not_enough_coin"));
    }

    return navigationFactory(1);
  }, [page, totalCoins, selectedUsers.length, selectedYuCoinId, navigationFactory]);

  const handlePressBack = useCallback(() => {
    if (page > GiftingManagerPages.SELECT_RECIPIENTS) {
      navigationFactory(-1)();
      return true;
    }

    Keyboard.dismiss();
    Navigation.pop(componentId);
    return true;
  }, [page, navigationFactory, onFinish]);

  useBackHandler(handlePressBack);

  return {
    heading,
    scrollViewRef,
    handlePressNext,
    handlePressBack,
    disableCta,
    page,
    ctaTranslationKey,
    submitting,
  };
};

const CTA_TRANSLATION_KEY_MAP: Record<number, string> = {
  [GiftingManagerPages.INTRO]: "labels.cta.get_started",
  [GiftingManagerPages.SELECT_RECIPIENTS]: "labels.cta.next",
  [GiftingManagerPages.SELECT_MESSAGE]: "labels.cta.next",
  [GiftingManagerPages.SELECT_YU_COIN]: "labels.cta.next",
  [GiftingManagerPages.MESSAGE_PREVIEW]: "screens.gifting.send",
};
