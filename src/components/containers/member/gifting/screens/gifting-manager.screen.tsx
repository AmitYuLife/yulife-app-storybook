import { memo, RefObject, useContext, useMemo, useState } from "react";
import { ScrollView } from "react-native";
import { Box, Fade, TextTemplate, YuCoinMiniSvg } from "@atoms";
import { Button, UserSearchHeading } from "@molecules";
import { t } from "@locale";
import { GenericHeadingAbsolute } from "@organisms";
import {
  GIFTING_PAGE,
  GiftingAsset,
  GiftingBackgroundAsset,
  GiftingChoice,
  GiftingManagerContext,
  GiftSendingStates,
  YuCoinDenominationChoice,
} from "../context";
import GiftingSearchContainer from "../gifting-search.container";
import GiftingYuCoinContainer from "../gifting-yu-coin.container";
import GiftingIntroScreen from "./gifting-intro.screen";
import { GiftingMessagePreviewScreen } from "./gifting-message-preview.screen";
import GiftingMessageScreen from "./gifting-message.screen";
import { VoidFunction } from "@utils";
import { isNil } from "lodash";
import { UserSearchItem } from "@redux/_core/types";
import GiftingLimitReachedScreen from "./gifting-limit-reached.screen";
import GiftingLoadingScreen from "./gifting-loading.screen";
import GiftingSuccessScreen from "./gifting-success.screen";
import { GiftingLimitReachedPanel } from "../gifting-limit-reached-panel";
import { giftingShowIntro } from "@redux/onboarding/onboarding.selectors";
import { useSelector } from "react-redux";
import { Colours } from "@styles";

type Props = {
  scrollViewRef: RefObject<ScrollView>;
  messagePresets: GiftingChoice[];
  selectedMessage: GiftingChoice;
  selectMessage: (id: GiftingChoice) => void;
  yuCoinOptions: YuCoinDenominationChoice[];
  selectedYuCoin: YuCoinDenominationChoice;
  selectYuCoin: (id: YuCoinDenominationChoice) => void;
  backgrounds: GiftingBackgroundAsset[];
  stickers: GiftingAsset[];
  selectedBackground: GiftingBackgroundAsset;
  selectedSticker: GiftingAsset;
  selectBackground: (id: GiftingBackgroundAsset) => void;
  selectSticker: (id: GiftingAsset) => void;
  isInPreviewPage: boolean;
  isInSelectYuCoin: boolean;
  isInSuccess: boolean;
  selectedUsersArray: UserSearchItem[];
  disableCta: boolean;
  handlePressNext: VoidFunction;
  ctaTranslationKey: string;
  handlePressBack: VoidFunction;
  onClose: VoidFunction;
  textColor: string;
  headingTitle: string;
  headingDescription: string;
  isLoaded: boolean;
  hasReachedLimit: boolean;
  sendingState: GiftSendingStates;
  errorMessage: string;
  goToSuccess: VoidFunction;
  page: GIFTING_PAGE;
};

const GiftingManagerScreen = ({
  scrollViewRef,
  messagePresets,
  selectedMessage,
  selectMessage,
  yuCoinOptions,
  selectedYuCoin,
  selectYuCoin,
  backgrounds,
  stickers,
  selectedBackground,
  selectedSticker,
  selectBackground,
  selectSticker,
  isInPreviewPage,
  isInSelectYuCoin,
  isInSuccess,
  selectedUsersArray,
  disableCta,
  handlePressNext,
  ctaTranslationKey,
  handlePressBack,
  onClose,
  textColor,
  headingTitle,
  headingDescription,
  isLoaded,
  hasReachedLimit,
  sendingState,
  errorMessage,
  goToSuccess,
  page,
}: Props) => {
  const [showButton, setShowButton] = useState(true);
  const { sendsRemainingToday, targetUsers } = useContext(GiftingManagerContext);
  const showIntro = useSelector(giftingShowIntro);

  const showGiftingLimitReached = useMemo(
    () => isLoaded && !hasReachedLimit && sendsRemainingToday <= Object.values(targetUsers).length,
    [sendsRemainingToday, targetUsers]
  );

  const ctaProps = useMemo(
    () =>
      !isLoaded
        ? {
            onPress: onClose,
            translationKey: "labels.cta.back",
          }
        : hasReachedLimit || isInSuccess
        ? {
            onPress: onClose,
            translationKey: "labels.cta.got_it",
          }
        : {
            isLoading: sendingState === GiftSendingStates.SENDING,
            disabled: sendingState === GiftSendingStates.SENDING || disableCta,
            onPress: handlePressNext,
            translationKey: ctaTranslationKey,
          },
    [isLoaded, hasReachedLimit, sendingState, disableCta, handlePressNext, ctaTranslationKey, onClose, isInSuccess]
  );

  const headerProps = useMemo(
    () =>
      !isLoaded || isInSuccess
        ? { onRightIconPress: onClose, backgroundColor: "transparent" }
        : hasReachedLimit
        ? {
            onRightIconPress: onClose,
            backgroundColor: "transparent",
            color: textColor,
            logo: "yulife" as const,
          }
        : {
            onLeftIconPress: handlePressBack,
            onRightIconPress: onClose,
            backgroundColor: "transparent",
            color: textColor,
            logo: !headingTitle ? ("yulife" as const) : undefined,
            heading: headingTitle ? (
              <UserSearchHeading heading={headingTitle} subheading={headingDescription} color={textColor} />
            ) : null,
          },
    [hasReachedLimit, handlePressBack, onClose, textColor, headingTitle, headingDescription, isLoaded, isInSuccess]
  );

  const displayCoin = isInSelectYuCoin && !isNil(selectedYuCoin);
  const fadeHeight = displayCoin ? 144 : 112;

  const showFade = useMemo(() => !(isInPreviewPage || isInSuccess), [isInPreviewPage, isInSuccess]);

  const content = useMemo(() => {
    if (hasReachedLimit) {
      return <GiftingLimitReachedScreen />;
    }

    if (!isLoaded) {
      return <GiftingLoadingScreen />;
    }

    return (
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      >
        {showIntro ? <GiftingIntroScreen /> : null}
        <GiftingSearchContainer />
        <GiftingMessageScreen options={messagePresets} selectedMessage={selectedMessage} onSelect={selectMessage} />
        <GiftingYuCoinContainer options={yuCoinOptions} selectedAmount={selectedYuCoin} onSelect={selectYuCoin} />
        <GiftingMessagePreviewScreen
          backgrounds={backgrounds}
          stickers={stickers}
          selectedBackground={selectedBackground}
          selectedSticker={selectedSticker}
          selectBackground={selectBackground}
          selectSticker={selectSticker}
          message={selectedMessage}
          yuCoin={selectedYuCoin}
          sendingState={sendingState}
          errorMessage={errorMessage}
          setShowButton={setShowButton}
          goToSuccess={goToSuccess}
        />
        <GiftingSuccessScreen selectedUsersCount={selectedUsersArray.length} />
      </ScrollView>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    hasReachedLimit,
    isLoaded,
    showIntro,
    selectedUsersArray.length,
    page,
    selectedBackground,
    selectedSticker,
    selectedMessage,
    selectedYuCoin,
    sendingState,
  ]);

  return (
    <Box flex={1}>
      {content}
      {showFade ? (
        <Box pointerEvents="none" position="absolute" bottom={0} h={fadeHeight} left={0} right={0}>
          <Box flex={1}>
            <Fade />
          </Box>
          <Box h={fadeHeight - 30} bg={Colours.neutral.white} />
        </Box>
      ) : null}
      <Box position="absolute" bottom={0} left={0} right={0} pb={24}>
        {showGiftingLimitReached ? <GiftingLimitReachedPanel page={page} /> : null}
        {displayCoin ? (
          <Box flexDirection="row" mb={16} ph={40}>
            <Box flex={1}>
              <TextTemplate type="l1">{t("screens.gifting.total_yu_coin")}</TextTemplate>
            </Box>
            <Box justifyContent="center" flexDirection="row" alignItems="center" gap={4}>
              <TextTemplate type="l1b">{selectedYuCoin.id * selectedUsersArray.length}</TextTemplate>
              <YuCoinMiniSvg />
            </Box>
          </Box>
        ) : null}
        {!showButton ? null : <Button {...ctaProps} />}
      </Box>
      <GenericHeadingAbsolute {...headerProps} />
    </Box>
  );
};

export default memo(GiftingManagerScreen);
