import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Keyboard } from "react-native";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { useGiftingPages } from "./hooks/use-gifting-pages";
import GiftingManagerScreen from "./screens/gifting-manager.screen";
import { prefetchImages } from "@atoms";
import { Colours } from "@styles";
import {
  GiftingAsset,
  GiftingBackgroundAsset,
  GiftingChoice,
  GiftingManagerPages,
  YuCoinDenominationChoice,
} from "./context/gifting-manager.types";
import { GiftingManagerContext } from "./context/gifting-manager.context";
import { useBackHandler, useGiftOptions } from "@hooks";
import { useSelector } from "react-redux";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { UserSearchItem } from "@redux/_core/types";
import { keyBy, omit } from "lodash";

type Props = {
  users?: UserSearchItem[];
};

const GiftingManager = ({ users }: Props) => {
  const [targetUsers, setTargetUsers] = useState<Record<string, UserSearchItem>>(keyBy(users, "id"));

  const onClose = useCallback(() => {
    Keyboard.dismiss();
    Navigation.popToRoot(ROUTES.gifting);

    return true;
  }, []);

  const userCoins = useSelector(getTotalCoins);
  const selectedUsersArray = useMemo(() => Object.values(targetUsers), [targetUsers]);
  const [selectedMessage, selectMessage] = useState<GiftingChoice>(null);
  const [selectedYuCoin, selectYuCoin] = useState<YuCoinDenominationChoice>(null);
  const [selectedBackground, selectBackground] = useState<GiftingBackgroundAsset>(null);
  const [selectedSticker, selectSticker] = useState<GiftingAsset>(null);
  const { maxRecipientsPerGiftRequest, backgrounds, stickers, yuCoinOptions, messagePresets, loading } =
    useGiftOptions();
  const filteredYuCoinOptions = useMemo(
    () => yuCoinOptions.filter((option) => userCoins >= option.id * selectedUsersArray.length),
    [yuCoinOptions, selectedUsersArray.length]
  );

  const { handlePressBack, handlePressNext, heading, scrollViewRef, disableCta, page, ctaTranslationKey, submitting } =
    useGiftingPages({
      maxRecipientsPerGiftRequest,
      selectedUsers: selectedUsersArray,
      selectedMessage: selectedMessage?.id,
      selectedYuCoinId: selectedYuCoin?.id,
      hasSelectedBackground: !!selectedBackground,
      hasSelectedSticker: !!selectedSticker,
      onFinish: onClose,
    });

  useBackHandler(handlePressBack);

  useEffect(() => {
    selectBackground(backgrounds[0]);
    selectSticker(stickers[0]);

    prefetchImages([
      ...backgrounds.map((background) => background.image.uri),
      ...stickers.map((sticker) => sticker.image.uri),
    ]);
  }, [backgrounds, stickers]);

  const setUsers = useCallback((payload: UserSearchItem) => {
    setTargetUsers((state) => {
      const isTargetSelected = !!state[payload.id];
      if (isTargetSelected) {
        return omit(state, payload.id);
      }

      return {
        ...state,
        [payload.id]: payload,
      };
    });
  }, []);

  const context = useMemo(
    () => ({ maxTarget: maxRecipientsPerGiftRequest, targetUsers, setTargetUsers: setUsers }),
    [maxRecipientsPerGiftRequest, targetUsers, setUsers]
  );

  const isInPreviewPage = page === GiftingManagerPages.MESSAGE_PREVIEW;
  const textColor =
    isInPreviewPage && selectedBackground?.textColor ? selectedBackground.textColor : Colours.neutral.n800;

  return (
    <GiftingManagerContext.Provider value={context}>
      <GiftingManagerScreen
        scrollViewRef={scrollViewRef}
        messagePresets={messagePresets}
        selectedMessage={selectedMessage}
        selectMessage={selectMessage}
        yuCoinOptions={filteredYuCoinOptions}
        selectedYuCoin={selectedYuCoin}
        selectYuCoin={selectYuCoin}
        backgrounds={backgrounds}
        stickers={stickers}
        selectedBackground={selectedBackground}
        selectedSticker={selectedSticker}
        selectBackground={selectBackground}
        selectSticker={selectSticker}
        isInPreviewPage={isInPreviewPage}
        isInSelectYuCoin={page === GiftingManagerPages.SELECT_YU_COIN}
        selectedUsersArray={selectedUsersArray}
        isSubmitting={submitting}
        disableCta={disableCta}
        handlePressNext={handlePressNext}
        ctaTranslationKey={ctaTranslationKey}
        handlePressBack={handlePressBack}
        onClose={onClose}
        textColor={textColor}
        headingTitle={heading.title}
        headingDescription={heading.description}
        isLoaded={!loading}
        hasReachedLimit={!loading && maxRecipientsPerGiftRequest < 1}
      />
    </GiftingManagerContext.Provider>
  );
};

export default memo(GiftingManager);
