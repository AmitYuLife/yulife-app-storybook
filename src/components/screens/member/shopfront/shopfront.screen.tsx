import { Box } from "@atoms";
import RewardSearchOverlayContainer from "@components/modals/reward-search-overlay/reward-search-overlay.container";
import RewardSearchHeader from "@components/modals/reward-search-overlay/subcomponents/reward-search-header";
import { GetMobileGameShopfrontQuery, GetMobileRewardsListQuery } from "@graphql/__generated/graphql";
import { NavBar, RewardPass, TopBar } from "@organisms";
import { GenericHeadingPad } from "@organisms/generic-heading/generic-heading-absolute";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import FirstTimeContentLocationSelection from "../content-location/first-time-content-location-selection";
import { memo, useCallback, useMemo } from "react";
import { NAV_BAR, TOP_BAR, Style, StyleSheet } from "@styles";
import { IIcon } from "@organisms/top-bar/subcomponents/left";
import moment from "moment";
import { InfoPanel, Pressable, RewardSectionHeader } from "@components/molecules";
import RewardRecentlyUsedSectionContainer from "../rewards/list/subcomponents/reward-recently-used-section/reward-recently-used-section.container";
import { RewardsListItem } from "../rewards/list/rewards-list.item";
import { t } from "@locale";
import { RewardOnPressArgs } from "@components/containers/member/rewards/rewards.types";
import NoStoreWalletButton from "../rewards/list/subcomponents/no-store-wallet-button/no-store-wallet-button";
import { isEmpty } from "lodash";
import { REWARDS_SCREEN, SHOPFRONT_REWARDS_LIST } from "@ids";

export enum RewardListItemTypes {
  RewardStoreExpiryWarning = "RewardStoreExpiryWarning",
  RewardsSectionHeader = "RewardSectionHeader",
  RewardPassItem = "RewardPassItem",
  ContentLocationSelection = "ContentLocationSelection",
  RewardRecentlyUsedSection = "RewardRecentlyUsed",
  NoStoreWallet = "NoStoreWallet",
}

interface IShopfrontScreenProps {
  leftIcons: IIcon[];
  isSearchOpen: boolean;
  onPressWallet: () => void;
  hasVoucherStore?: boolean;
  onEndReached?: () => void;
  handleEndReached: () => void;
  shouldShowFirstTimeModal: boolean;
  handleStoreLocationPress: () => void;
  shopfront: GetMobileGameShopfrontQuery;
  onItemPress: (item: RewardOnPressArgs) => void;
  setIsSearchOpen: (isSearchOpen: boolean) => void;
  allRewardItems: GetMobileRewardsListQuery["data"]["list"];
}

const SECTION_SPACING = 15;

const ShopfrontScreen = ({
  shopfront,
  leftIcons,
  onItemPress,
  isSearchOpen,
  onPressWallet,
  allRewardItems,
  hasVoucherStore,
  setIsSearchOpen,
  handleEndReached,
  handleStoreLocationPress,
  shouldShowFirstTimeModal,
}: IShopfrontScreenProps) => {
  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<(typeof listData)[number]>) => {
      if (item.__typename === "RewardStoreExpiryWarning") {
        if (!shopfront?.rewardList?.rewardStoreAccessRevokesAt) {
          return null;
        }

        const daysLeft = moment(shopfront?.rewardList?.rewardStoreAccessRevokesAt).diff(moment(), "days");

        return (
          <Box mb={16} mx={16}>
            <InfoPanel
              type="warning"
              titleMarkdown={t("screens.rewards.expiry_warning.title")}
              markdown={t("screens.rewards.expiry_warning.body", { daysLeft })}
              showIcon={true}
            />
          </Box>
        );
      }

      if (item.__typename === RewardListItemTypes.RewardPassItem) {
        const { label, primaryColor, passIcon, backgroundImage, onPress, foregroundImage, slots } = item;
        return (
          <Box px={20} mb={SECTION_SPACING}>
            <RewardPass
              key={label}
              label={label}
              primaryColor={primaryColor}
              onPress={onPress}
              passIcon={passIcon?.uri}
              index={index - 1}
              backgroundImage={backgroundImage?.uri}
              foregroundImage={foregroundImage?.uri}
              slots={slots.map(({ x, y, images }) => ({ x, y, images: images?.map(({ uri }) => uri) }))}
            />
          </Box>
        );
      }

      if (item.__typename === RewardListItemTypes.RewardsSectionHeader) {
        return (
          <Box mt={SECTION_SPACING}>
            <RewardSectionHeader>{item.children}</RewardSectionHeader>
          </Box>
        );
      }

      if (item.__typename === RewardListItemTypes.RewardRecentlyUsedSection) {
        return (
          <Box mt={SECTION_SPACING}>
            <RewardRecentlyUsedSectionContainer recentRewards={shopfront?.recentlyUsed} onItemPress={onItemPress} />
          </Box>
        );
      }

      if (item.__typename === RewardListItemTypes.NoStoreWallet) {
        return (
          <Box mt={SECTION_SPACING}>
            <NoStoreWalletButton onPress={onPressWallet} />
          </Box>
        );
      }

      if (item.__typename === "MobileRewardsListItem") {
        return <RewardsListItem {...item} onPress={() => onItemPress(item)} />;
      }

      return null;
    },
    [onItemPress, shopfront, onPressWallet]
  );

  const listData = useMemo(() => {
    const rewardPassItems = (shopfront?.rewardPasses?.activeRewardPasses || []).map((pass) => ({
      ...pass,
      __typename: RewardListItemTypes.RewardPassItem as const,
    }));

    return [
      ...(!hasVoucherStore ? [{ __typename: RewardListItemTypes.NoStoreWallet as const }] : []),
      ...(!isEmpty(rewardPassItems)
        ? [
            {
              __typename: RewardListItemTypes.RewardsSectionHeader as const,
              children: t("screens.rewards.list.reward_passes"),
            },
          ]
        : []),
      ...rewardPassItems,
      { __typename: RewardListItemTypes.RewardStoreExpiryWarning as const },
      { __typename: RewardListItemTypes.RewardRecentlyUsedSection as const },
      ...(hasVoucherStore
        ? [
            {
              __typename: RewardListItemTypes.RewardsSectionHeader as const,
              children: t("screens.rewards.list.store"),
            },
            ...(allRewardItems || []),
          ]
        : []),
    ];
  }, [allRewardItems, hasVoucherStore, shopfront?.rewardPasses?.activeRewardPasses]);

  const onSearchOpen = useCallback(() => {
    setIsSearchOpen(true);
  }, [setIsSearchOpen]);

  return (
    <Box bg="#FAFAFE" flex={1} testID={REWARDS_SCREEN}>
      <Box bg="white">
        <GenericHeadingPad />
        {hasVoucherStore ? (
          <Pressable onPress={onSearchOpen} pb={SECTION_SPACING} bg="white" pt={8}>
            <RewardSearchHeader
              onPress={onSearchOpen}
              editable={false}
              onPressWallet={onPressWallet}
              isOpen={isSearchOpen}
            />
          </Pressable>
        ) : null}
      </Box>
      <FlashList
        data={listData}
        testID={SHOPFRONT_REWARDS_LIST}
        renderItem={renderItem}
        onEndReachedThreshold={0.3}
        onEndReached={handleEndReached}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flashListContent}
      />
      <Box position="absolute" top={0} w="100%" pt={TOP_BAR.PADDING_TOP} bg="white" disableAutoAdjust={true}>
        <TopBar type="default" leftIcons={leftIcons} />
      </Box>

      <NavBar activeIndex={4} />
      {isSearchOpen ? (
        <RewardSearchOverlayContainer
          onItemPress={onItemPress}
          onClose={() => setIsSearchOpen(false)}
          onPressWallet={onPressWallet}
        />
      ) : null}
      <FirstTimeContentLocationSelection
        isActive={shouldShowFirstTimeModal}
        contentLocation={shopfront?.rewardList.rewardStoreLocation}
        contentLocationLabel={shopfront?.rewardList.rewardStoreLocationLabel}
        onChangeContentLocationPress={handleStoreLocationPress}
        placement="shopfront"
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  flashListContent: {
    paddingBottom: Style.adjust(NAV_BAR.HEIGHT + NAV_BAR.OUTER_PADDING),
  },
});

export default memo(ShopfrontScreen);
