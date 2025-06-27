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
  GIFTING_PAGE,
  YuCoinDenominationChoice,
} from "./context/gifting-manager.types";
import { GiftingManagerContext } from "./context/gifting-manager.context";
import { useBackHandler, useGiftOptions, useSocialGroupUserSearch } from "@hooks";
import { useSelector } from "react-redux";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { UserSearchItem } from "@redux/_core/types";
import { keyBy, omit } from "lodash";
import { SocialGroupLeaderboardSearchType } from "../../../../graphql/__generated";

type Props = {
  preselectedUserIds?: string[];
  startingPage?: GIFTING_PAGE;
};

const GiftingManager = ({ preselectedUserIds, startingPage }: Props) => {
  const { data: leaderboardUsers, loading: leaderboardUsersLoading } = useSocialGroupUserSearch({
    searchType: SocialGroupLeaderboardSearchType.Gifting,
    allowUnfilteredSearch: true,
  });

  const [targetUsers, setTargetUsers] = useState<Record<string, UserSearchItem>>(keyBy([], "id"));

  useEffect(() => {
    const preselectedUsers =
      leaderboardUsers?.searchLeaderboardUser.filter((x) => (preselectedUserIds ?? []).includes(x.id)) ?? [];

    setTargetUsers(keyBy(preselectedUsers, "id"));
  }, [leaderboardUsers, preselectedUserIds]);

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
  const {
    maxDailySendsPerUser,
    maxRecipientsPerGiftRequest,
    backgrounds,
    stickers,
    yuCoinOptions,
    messagePresets,
    loading,
    sendsRemainingToday,
  } = useGiftOptions();
  const filteredYuCoinOptions = useMemo(
    () => yuCoinOptions.filter((option) => userCoins >= option.id * selectedUsersArray.length),
    [yuCoinOptions, selectedUsersArray.length]
  );

  const fullyLoaded = !loading && !leaderboardUsersLoading;

  const {
    handlePressBack,
    handlePressNext,
    heading,
    scrollViewRef,
    disableCta,
    page,
    ctaTranslationKey,
    sendingState,
    goToSuccess,
  } = useGiftingPages({
    maxRecipientsPerGiftRequest,
    selectedUsers: selectedUsersArray,
    selectedMessage: selectedMessage?.id,
    selectedYuCoinId: selectedYuCoin?.id,
    selectedBackgroundId: selectedBackground?.id,
    selectedStickerId: selectedSticker?.id,
    onFinish: onClose,
    startingPage,
    isGiftingPagesDataLoading: loading,
  });

  useBackHandler(handlePressBack);

  useEffect(() => {
    selectBackground(backgrounds[0]);

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
    () => ({
      maxDailySend: maxDailySendsPerUser,
      maxTarget: maxRecipientsPerGiftRequest,
      sendsRemainingToday,
      targetUsers,
      setTargetUsers: setUsers,
      page,
    }),
    [maxRecipientsPerGiftRequest, targetUsers, setUsers, page]
  );

  const isInPreview = page === GIFTING_PAGE.MESSAGE_PREVIEW;
  const textColor = isInPreview && selectedBackground?.textColor ? selectedBackground.textColor : Colours.neutral.n800;

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
        isInPreviewPage={isInPreview}
        isInSelectYuCoin={page === GIFTING_PAGE.SELECT_YU_COIN}
        isInSuccess={page === GIFTING_PAGE.SUCCESS}
        selectedUsersArray={selectedUsersArray}
        disableCta={disableCta}
        handlePressNext={handlePressNext}
        ctaTranslationKey={ctaTranslationKey}
        handlePressBack={handlePressBack}
        onClose={onClose}
        textColor={textColor}
        headingTitle={heading.title}
        headingDescription={heading.description}
        isLoaded={fullyLoaded}
        hasReachedLimit={fullyLoaded && sendsRemainingToday < 1}
        sendingState={sendingState}
        goToSuccess={goToSuccess}
        page={page}
      />
    </GiftingManagerContext.Provider>
  );
};

export default memo(GiftingManager);
