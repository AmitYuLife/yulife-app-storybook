import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useGiftingSubmit } from "../hooks/use-gifting-submit";
import { VoidFunction } from "@utils";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { Alert, useWindowDimensions } from "react-native";
import { t } from "@locale";
import { UserSearchItem } from "@redux/_core/types";
import { useNavigation } from "@navigation/navigation.context";
import { Navigation } from "@navigation/main";
import { useBackHandler } from "@hooks";
import { giftingShowIntro } from "@redux/onboarding/onboarding.selectors";
import { incrementOnboardingVisits } from "@redux/onboarding/onboarding.actions";
import { getGiftingPagesConfig, GIFTING_PAGE } from "../context";

type Props = {
  maxRecipientsPerGiftRequest: number;
  selectedUsers: UserSearchItem[];
  selectedMessage: string;
  selectedYuCoinId: number;
  selectedBackgroundId: string;
  selectedStickerId: string;
  onFinish: VoidFunction;
};

export const useGiftingPages = ({
  maxRecipientsPerGiftRequest,
  selectedUsers,
  selectedMessage,
  selectedYuCoinId,
  selectedBackgroundId,
  selectedStickerId,
  onFinish,
}: Props) => {
  const { width } = useWindowDimensions();
  const { componentId } = useNavigation();
  const reduxDispatch = useDispatch();
  const showIntro = useSelector(giftingShowIntro);
  const totalCoins = useSelector(getTotalCoins);
  const pop = useCallback(() => Navigation.pop(componentId), [componentId]);
  const notEnoughCoinAlert = useCallback(() => Alert.alert("", t("screens.gifting.not_enough_coin")), []);
  const incrementVisits = useCallback(
    () => reduxDispatch(incrementOnboardingVisits({ key: "giftingIntroShownCount" })),
    [reduxDispatch]
  );
  const { handleSubmit, sendingState } = useGiftingSubmit({
    selectedUsers,
    amount: selectedYuCoinId,
    messagePresetId: selectedMessage,
    backgroundId: selectedBackgroundId,
    stickerId: selectedStickerId,
  });

  const [page, setPage] = useState<GIFTING_PAGE>(showIntro ? GIFTING_PAGE.INTRO : GIFTING_PAGE.SELECT_RECIPIENTS);
  const config = useMemo(
    () =>
      getGiftingPagesConfig({
        maxRecipientsPerGiftRequest,
        selectedBackgroundId,
        selectedMessage,
        selectedStickerId,
        selectedYuCoinId,
        onFinish,
        handleSubmit,
        notEnoughCoinAlert,
        totalCoins,
        setPage,
        incrementVisits,
        pop,
        selectedCount: selectedUsers.length,
      }),
    [
      maxRecipientsPerGiftRequest,
      selectedBackgroundId,
      selectedMessage,
      selectedStickerId,
      selectedYuCoinId,
      onFinish,
      handleSubmit,
      notEnoughCoinAlert,
      totalCoins,
      setPage,
      incrementVisits,
      pop,
      selectedUsers.length,
    ]
  );

  const scrollViewRef = useRef(null);

  const goToSuccess = () => setPage(GIFTING_PAGE.SUCCESS);
  const pagesConfig = useMemo(() => Object.values(config).slice(showIntro ? 0 : 1), [config, showIntro]);

  useEffect(() => {
    const needle = pagesConfig.findIndex((pagesConfigItem) => pagesConfigItem.id === page);

    scrollViewRef.current?.scrollTo?.({ x: needle * width, animated: true });
  }, [pagesConfig, page, width]);

  useBackHandler(config[page].backPress);

  return {
    heading: config[page].heading,
    scrollViewRef,
    handlePressNext: config[page].ctaPress,
    handlePressBack: config[page].backPress,
    disableCta: config[page].disableCta,
    page,
    ctaTranslationKey: config[page].cta,
    sendingState,
    goToSuccess,
  };
};
