import { Style } from "@styles";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useGiftingSubmit } from "../hooks/use-gifting-submit";
import { getGiftingCopyPageHeadings } from "../copy/get-gifting-copy-page-headings";
import { UserSearchItem } from "@redux/user/user.types";
import { VoidFunction } from "@utils";
import { useSelector } from "react-redux";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { Alert } from "react-native";
import { t } from "@locale";
import { GiftingManagerPages } from "../context/gifting-manager.types";
import { isNil } from "lodash";

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
  const totalCoins = useSelector(getTotalCoins);
  const pageHeadings = useMemo(
    () =>
      getGiftingCopyPageHeadings({
        maxRecipientsPerGiftRequest,
        selectedCount: selectedUsers.length,
      }),
    [maxRecipientsPerGiftRequest, selectedUsers.length]
  );
  const [page, setPage] = useState(0);
  const scrollViewRef = useRef(null);
  const heading = useMemo(() => pageHeadings[page], [page, pageHeadings]);
  const ctaTranslationKey = useMemo(
    () => (page === GiftingManagerPages.MESSAGE_PREVIEW ? "screens.gifting.send" : "labels.cta.next"),
    [page]
  );
  const { handleSubmit, loading: submitting } = useGiftingSubmit({
    selectedUsers,
    amount: selectedYuCoinId,
    messagePresetId: selectedMessage,
    onFinish,
  });

  const disableCta = useMemo(() => {
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
      setPage((curr) => curr + increment);
    },
    []
  );

  useEffect(() => {
    scrollViewRef.current.scrollTo({ x: page * Style.DEVICE_WIDTH, animated: true });
  }, [page]);

  const handlePressNext = useMemo(() => {
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
    if (page !== GiftingManagerPages.SELECT_RECIPIENTS) {
      navigationFactory(-1)();
      return true;
    }

    onFinish();
    return true;
  }, [page, navigationFactory, onFinish]);

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
