import { memo, RefObject, useMemo } from "react";
import { ScrollView } from "react-native";
import { Box, Fade, TextTemplate, YuCoinMiniSvg } from "@atoms";
import { Button, UserSearchHeading } from "@molecules";
import { t } from "@locale";
import { GenericHeadingAbsolute } from "@organisms";
import { GiftingAsset, GiftingBackgroundAsset, GiftingChoice, YuCoinDenominationChoice } from "../context";
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
  selectedUsersArray: UserSearchItem[];
  isSubmitting: boolean;
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
  selectedUsersArray,
  isSubmitting,
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
}: Props) => {
  const ctaProps = useMemo(
    () =>
      !isLoaded
        ? {
            onPress: onClose,
            translationKey: "labels.cta.back",
          }
        : hasReachedLimit
        ? {
            onPress: onClose,
            translationKey: "labels.cta.got_it",
          }
        : {
            isLoading: isSubmitting,
            disabled: isSubmitting || disableCta,
            onPress: handlePressNext,
            translationKey: ctaTranslationKey,
          },
    [isLoaded, hasReachedLimit, isSubmitting, disableCta, handlePressNext, ctaTranslationKey, onClose]
  );

  const headerProps = useMemo(
    () =>
      !isLoaded
        ? { onRightIconPress: onClose }
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
    [hasReachedLimit, handlePressBack, onClose, textColor, headingTitle, headingDescription, isLoaded]
  );

  return (
    <Box flex={1}>
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      >
        {/** this logic needs refactoring, very hard to follow */}
        {hasReachedLimit ? <GiftingLimitReachedScreen /> : <GiftingIntroScreen />}
        {!isLoaded ? (
          <GiftingLoadingScreen />
        ) : hasReachedLimit ? (
          <GiftingLimitReachedScreen />
        ) : (
          <>
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
            />
          </>
        )}
      </ScrollView>
      {isInPreviewPage ? null : (
        <Box pointerEvents="none" position="absolute" bottom={0} h={200} left={0} right={0}>
          <Fade />
        </Box>
      )}
      <Box position="absolute" bottom={0} left={0} right={0} pb={24}>
        {isInSelectYuCoin && !isNil(selectedYuCoin) ? (
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
        <Button {...ctaProps} />
      </Box>
      <GenericHeadingAbsolute {...headerProps} />
    </Box>
  );
};

export default memo(GiftingManagerScreen);
