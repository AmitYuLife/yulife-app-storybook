import { Box, Loading } from "@atoms";
import WalletDiscountIem from "@components/molecules/reward-wallet/walletDiscountIem";
import { MobileGameUserWalletItem, SduiAction } from "@graphql/__generated";
import { useNavigationComponentDidAppear } from "@hooks";
import { t } from "@locale";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { Style, StyleSheet } from "@styles";
import { memo, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { DETOX_ENABLED } from "@services/socket";
import WalletCouponItem from "../../../molecules/reward-wallet/walletCouponItem";
import WalletItem from "../../../molecules/reward-wallet/walletItem";
import { useWalletRewardItems } from "./hooks/useWalletRewardItems";
import WalletHeader, { MobileGameUserWalletHeader, WalletHeaderLoading } from "./subcomponents/wallet-header";
import WalletItemLoading from "./subcomponents/wallet-item-loading";
import WalletSectionHeader, {
  MobileGameUserWalletSectionHeader,
  WalletSectionHeaderLoading,
} from "./subcomponents/wallet-section-header";
import WalletSectionMore, {
  MobileGameUserWalletMoreAction,
  WalletSectionMoreLoading,
} from "./subcomponents/wallet-section-more";
import WalletUsedSectionHeader, {
  MobileGameUserWalletUsedSectionHeader,
} from "./subcomponents/wallet-used-section-header";

type MobileGameUserWalletListItem =
  | (MobileGameUserWalletItem & { item_type: "wallet_item"; isUsed?: boolean })
  | MobileGameUserWalletHeader
  | MobileGameUserWalletSectionHeader
  | MobileGameUserWalletMoreAction
  | MobileGameUserWalletUsedSectionHeader;
interface IRewardsWalletItemsContainerProps {
  rewardId: string;
  type?: string;
}
const RewardsWalletItemsContainer = ({ rewardId, type }: IRewardsWalletItemsContainerProps) => {
  const { data, loading, loadingMore, handleFetchMore, refetch } = useWalletRewardItems({
    rewardId,
    type,
    markedAsUsed: false,
  });
  const {
    data: usedData,
    loadingMore: loadingMoreUsed,
    handleFetchMore: handleFetchMoreUsed,
    refetch: refetchUsed,
  } = useWalletRewardItems({ rewardId, markedAsUsed: true });

  const handleRefresh = useCallback(() => {
    refetch({ rewardId, type });
    refetchUsed({ rewardId });
  }, [refetch, refetchUsed, rewardId, type]);

  useNavigationComponentDidAppear(handleRefresh, ROUTES.walletItems);

  const dispatch = useDispatch();

  const handleCardPress = useCallback(
    (onPress: SduiAction) => {
      if (onPress?.type) {
        dispatch({
          type: onPress.type,
          payload: { serverPayload: onPress.payload },
        });
      }
    },
    [dispatch]
  );

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<MobileGameUserWalletListItem>) => {
      if (item.item_type === "section-header") {
        return <WalletSectionHeader {...item} />;
      }

      if (item.item_type === "see_more") {
        return <WalletSectionMore {...item} />;
      }

      if (item.item_type === "used-section-header") {
        return <WalletUsedSectionHeader {...item} />;
      }

      if (item.item_type === "header") {
        return <WalletHeader {...item} />;
      }

      const opacity = item.isUsed ? 0.5 : 1;

      if (item.type === "coupon") {
        return (
          <Box opacity={opacity}>
            <WalletCouponItem item={item} onPress={handleCardPress} index={index} />
          </Box>
        );
      }

      if (item.type === "discount") {
        return (
          <Box opacity={opacity}>
            <WalletDiscountIem item={item} onPress={handleCardPress} index={index} />
          </Box>
        );
      }

      return (
        <Box opacity={opacity}>
          <WalletItem item={item} onPress={handleCardPress} index={index} />
        </Box>
      );
    },
    [handleCardPress]
  );

  const handleBackPress = useCallback(() => {
    if (type) {
      Navigation.updateProps(ROUTES.walletItems, {
        rewardId,
        type: undefined,
      });
      return;
    }

    Navigation.pop(ROUTES.walletItems);
  }, [rewardId, type]);

  const calculatedData = useMemo(() => {
    const list: MobileGameUserWalletListItem[] =
      data?.getMobileGameUserWalletRewardItems?.sections?.reduce((acc, section, index, sections) => {
        if (index === 0 && data?.getMobileGameUserWalletRewardItems?.image?.uri) {
          acc.push({
            item_type: "header",
            image: data?.getMobileGameUserWalletRewardItems?.image,
          });
        }

        acc.push({
          item_type: "section-header",
          title: section.title,
          icon: section.icon,
          description: section.description,
          onPress: () => null,
        });

        section.items.forEach((item) => {
          acc.push({ ...item, item_type: "wallet_item", isUsed: false });
        });

        if (section.hasMore && index < sections.length - 1) {
          acc.push({
            item_type: "see_more",
            onPress: () =>
              Navigation.updateProps(ROUTES.walletItems, {
                rewardId,
                type: section.type,
              }),
          });
        }

        return acc;
      }, [] as MobileGameUserWalletListItem[]) || [];

    const usedSections = usedData?.getMobileGameUserWalletRewardItems?.sections;
    if (usedSections?.length) {
      list.push({
        item_type: "used-section-header",
        title: t("screens.rewards.wallet.used_section.title"),
      });

      usedSections.forEach((section) => {
        section.items.forEach((item) => {
          list.push({ ...item, item_type: "wallet_item", isUsed: true });
        });
      });

      const hasMoreUsed = usedSections.some((section) => section.hasMore);
      if (hasMoreUsed) {
        list.push({
          item_type: "see_more",
          onPress: handleFetchMoreUsed,
        });
      }
    }

    return list;
  }, [
    data?.getMobileGameUserWalletRewardItems?.image,
    data?.getMobileGameUserWalletRewardItems?.sections,
    usedData?.getMobileGameUserWalletRewardItems?.sections,
    rewardId,
    handleFetchMoreUsed,
  ]);

  const keyExtractor = useCallback((item: MobileGameUserWalletListItem, index: number) => {
    if (item.item_type === "header") {
      return `header`;
    }

    if (item.item_type === "section-header") {
      return `section-header_${index}`;
    }

    if (item.item_type === "see_more") {
      return `see_more_${index}`;
    }

    if (item.item_type === "used-section-header") {
      return `used-section-header_${index}`;
    }

    if (item.item_type === "wallet_item") {
      return `wallet_item_${item.id}`;
    }

    return `wallet_item_${index}`;
  }, []);

  const renderFooter = useCallback(() => {
    if (!loadingMore && !loadingMoreUsed) {
      return null;
    }

    return (
      <Box flexDirection="row" justifyContent="center" alignItems="center" mt={16}>
        <Loading size={24} />
      </Box>
    );
  }, [loadingMore, loadingMoreUsed]);
  return (
    <Box flexDirection="column" flex={1} p={16}>
      <GenericHeadingPad hideBorder={false} />
      <Box flex={1}>
        {loading ? (
          <ItemsLoadingList />
        ) : (
          <FlashList
            extraData={[loadingMore, loadingMoreUsed]}
            data={calculatedData}
            renderItem={renderItem}
            onRefresh={DETOX_ENABLED ? undefined : handleRefresh}
            refreshing={DETOX_ENABLED ? undefined : loading}
            contentContainerStyle={styles.listContent}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            onEndReached={handleFetchMore}
            onEndReachedThreshold={0}
            ListFooterComponent={renderFooter}
          />
        )}
      </Box>
      <GenericHeadingAbsolute
        heading={t("screens.rewards.wallet.title")}
        leftIcon={LeftIcon.BACK}
        onLeftIconPress={handleBackPress}
        hideBorder={false}
      />
    </Box>
  );
};

export default memo(RewardsWalletItemsContainer);

const ItemsLoadingList = memo(() => (
  <Box>
    <WalletHeaderLoading />
    <WalletSectionHeaderLoading />
    <WalletItemLoading />
    <WalletSectionMoreLoading />
  </Box>
));

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: Style.adjust(20),
  },
});
