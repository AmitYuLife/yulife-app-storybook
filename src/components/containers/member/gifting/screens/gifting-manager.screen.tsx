import { memo, RefObject } from "react";
import { ScrollView } from "react-native";
import { Box, Fade, TextTemplate, YuCoinMiniSvg } from "@atoms";
import { Button, UserSearchHeading } from "@molecules";
import { t } from "@locale";
import { GenericHeadingAbsolute } from "@organisms";
import { GiftingAsset, GiftingChoice, YuCoinDenominationChoice } from "../context";
import GiftingSearchContainer from "../gifting-search.container";
import GiftingYuCoinContainer from "../gifting-yu-coin.container";
import { GiftingMessagePreviewScreen } from "./gifting-message-preview.screen";
import GiftingMessageScreen from "./gifting-message.screen";
import { VoidFunction } from "@utils";
import { isNil } from "lodash";
import { UserSearchItem } from "@redux/_core/types";

type Props = {
  scrollViewRef: RefObject<ScrollView>;
  messagePresets: GiftingChoice[];
  selectedMessage: GiftingChoice;
  selectMessage: (id: GiftingChoice) => void;
  yuCoinOptions: YuCoinDenominationChoice[];
  selectedYuCoin: YuCoinDenominationChoice;
  selectYuCoin: (id: YuCoinDenominationChoice) => void;
  backgrounds: GiftingAsset[];
  stickers: GiftingAsset[];
  selectedBackground: GiftingAsset;
  selectedSticker: GiftingAsset;
  selectBackground: (id: GiftingAsset) => void;
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
}: Props) => (
  <Box flex={1}>
    <ScrollView
      ref={scrollViewRef}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
    >
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
      <Button
        isLoading={isSubmitting}
        disabled={isSubmitting || disableCta}
        onPress={handlePressNext}
        translationKey={ctaTranslationKey}
      />
    </Box>
    <GenericHeadingAbsolute
      onLeftIconPress={handlePressBack}
      onRightIconPress={onClose}
      heading={<UserSearchHeading heading={headingTitle} subheading={headingDescription} color={textColor} />}
      backgroundColor="transparent"
      color={textColor}
    />
  </Box>
);

export default memo(GiftingManagerScreen);
