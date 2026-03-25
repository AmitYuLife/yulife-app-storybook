import { Box, Source } from "@atoms";
import { MobileGameUserWalletItem } from "@graphql/__generated";
import { useNavigationComponentDidAppear } from "@hooks";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { Style, StyleSheet } from "@styles";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks/useSduiCallbackFunctionOrReduxAction";
import { memo, useCallback, useMemo } from "react";
import { useWalletRewardItems } from "@components/containers/member/rewards/hooks/useWalletRewardItems";
import WalletItemCard from "../subcomponents/wallet-item-card";
import WalletItemLoading from "@components/containers/member/rewards/subcomponents/wallet-item-loading";
import WalletLoadingFooter from "../subcomponents/wallet-loading-footer";
import WalletSectionHeader from "@components/containers/member/rewards/subcomponents/wallet-section-header";
import WalletSubSectionHeader from "@components/containers/member/rewards/subcomponents/wallet-sub-section-header";

type WalletListItem = MobileGameUserWalletItem & { itemType: "wallet_item" };

interface IRewardsWalletSeeMoreContainerProps {
  rewardId: string;
  type?: string;
  markedAsUsed?: boolean;
  expired?: boolean;
  title: string;
  icon?: Source;
  description?: string;
}

const RewardsWalletSeeMoreContainer = ({
  rewardId,
  type,
  markedAsUsed,
  expired,
  title,
  icon,
  description,
}: IRewardsWalletSeeMoreContainerProps) => {
  const { data, loading, loadingMore, handleFetchMore, refetch } = useWalletRewardItems({
    rewardId,
    type,
    // When viewing expired items, don't filter by used status; otherwise default to showing non-used items
    markedAsUsed: markedAsUsed ?? (expired ? undefined : false),
    expired,
  });

  const handleRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  useNavigationComponentDidAppear(handleRefresh, ROUTES.walletSeeMore);

  const { handleSduiActionWithParams: handleCardPress } = useSduiCallbackFunctionOrReduxAction();

  const calculatedData = useMemo(() => {
    const sections = data?.getMobileGameUserWalletRewardItems?.sections;
    if (!sections) {
      return [];
    }

    return sections.reduce((acc, section) => {
      section.items.forEach((item) => {
        acc.push({ ...item, itemType: "wallet_item" });
      });
      return acc;
    }, [] as WalletListItem[]);
  }, [data?.getMobileGameUserWalletRewardItems?.sections]);

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<WalletListItem>) => {
      return <WalletItemCard item={item} index={index} onPress={handleCardPress} isExpired={expired} />;
    },
    [handleCardPress, expired]
  );

  const renderHeader = useCallback(() => {
    if (!markedAsUsed && !expired && icon) {
      return <WalletSectionHeader itemType="section-header" title={title} description={description} icon={icon} />;
    }

    if (expired) {
      return <WalletSubSectionHeader title={title} />;
    }

    return <WalletSubSectionHeader title={title} />;
  }, [markedAsUsed, expired, title, icon, description]);

  const handleBackPress = useCallback(() => {
    Navigation.pop(ROUTES.walletSeeMore);
  }, []);

  const keyExtractor = useCallback((item: WalletListItem, index: number) => {
    return `wallet_item_${item.id ?? index}`;
  }, []);

  const renderFooter = useCallback(() => {
    if (!loadingMore) {
      return null;
    }

    return <WalletLoadingFooter />;
  }, [loadingMore]);

  return (
    <Box flexDirection="column" flex={1} p={16}>
      <GenericHeadingPad hideBorder={false} />
      <Box flex={1}>
        {loading ? (
          <ItemsLoadingList />
        ) : (
          <FlashList
            extraData={loadingMore}
            data={calculatedData}
            renderItem={renderItem}
            refreshing={loading}
            contentContainerStyle={styles.listContent}
            keyExtractor={keyExtractor}
            onRefresh={handleRefresh}
            showsVerticalScrollIndicator={false}
            onEndReached={handleFetchMore}
            onEndReachedThreshold={0.3}
            ListHeaderComponent={renderHeader}
            ListFooterComponent={renderFooter}
          />
        )}
      </Box>
      <GenericHeadingAbsolute
        heading={title}
        leftIcon={LeftIcon.BACK}
        onLeftIconPress={handleBackPress}
        hideBorder={false}
      />
    </Box>
  );
};

export default memo(RewardsWalletSeeMoreContainer);

const ItemsLoadingList = memo(() => (
  <Box>
    <WalletItemLoading />
    <WalletItemLoading />
    <WalletItemLoading />
  </Box>
));

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: Style.adjust(20),
  },
});
