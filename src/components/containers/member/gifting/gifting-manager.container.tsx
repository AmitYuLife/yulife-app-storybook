import { memo, Reducer, useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { Keyboard } from "react-native";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { useGiftingPages } from "./hooks/use-gifting-pages";
import GiftingManagerScreen from "./screens/gifting-manager.screen";
import { prefetchImages } from "@atoms";
import { Colours } from "@styles";
import {
  GiftingAsset,
  GiftingChoice,
  GiftingManagerPages,
  IGiftingManagerAction,
  IGiftingManagerState,
  YuCoinDenominationChoice,
} from "./context/gifting-manager.types";
import { setGiftingTargetUsers, setMaxGiftingTargets } from "./context/gifting-manager.actions";
import { GIFTING_MANAGER_INITIAL_STATE, giftingManagerReducer } from "./context/gifting-manager.reducer";
import { GiftingManagerContext } from "./context/gifting-manager.context";
import { UserSearchItem } from "@redux/user/user.types";
import { useBackHandler, useGiftOptions } from "@hooks";

type Props = {
  users?: UserSearchItem[];
};

const GiftingManager = ({ users }: Props) => {
  const [state, dispatch] = useReducer<Reducer<IGiftingManagerState, IGiftingManagerAction>>(
    giftingManagerReducer,
    GIFTING_MANAGER_INITIAL_STATE
  );
  const context = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const onClose = useCallback(() => {
    Keyboard.dismiss();
    Navigation.pop(ROUTES.gifting);

    return true;
  }, []);

  const selectedUsersArray = useMemo(() => Object.values(state.targetUsers), [state.targetUsers]);
  const [selectedMessage, selectMessage] = useState<GiftingChoice>(null);
  const [selectedYuCoin, selectYuCoin] = useState<YuCoinDenominationChoice>(null);
  const [selectedBackground, selectBackground] = useState<GiftingAsset>(null);
  const [selectedSticker, selectSticker] = useState<GiftingAsset>(null);
  const { maxRecipientsPerGiftRequest, backgrounds, stickers, yuCoinOptions, messagePresets } = useGiftOptions();

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

  useEffect(() => {
    dispatch(setMaxGiftingTargets(maxRecipientsPerGiftRequest));
  }, [maxRecipientsPerGiftRequest]);

  useEffect(() => {
    dispatch(setGiftingTargetUsers(users));
  }, [users]);

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
        yuCoinOptions={yuCoinOptions}
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
      />
    </GiftingManagerContext.Provider>
  );
};

export default memo(GiftingManager);
