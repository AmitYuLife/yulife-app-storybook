import { useQuery } from "@apollo/client/react/hooks";
import { Box, Loading } from "@atoms";
import WalletDiscountIem from "@components/molecules/reward-wallet/walletDiscountIem";
import { gql, MobileGameUserWalletItem, SduiAction } from "@graphql/__generated";
import { t } from "@locale";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { Style, StyleSheet } from "@styles";
import { memo, useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import WalletCouponItem from "../../../molecules/reward-wallet/walletCouponItem";
import WalletItem from "../../../molecules/reward-wallet/walletItem";
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

type MobileGameUserWalletListItem =
  | (MobileGameUserWalletItem & { item_type: "wallet_item" })
  | MobileGameUserWalletHeader
  | MobileGameUserWalletSectionHeader
  | MobileGameUserWalletMoreAction;
interface IRewardsWalletItemsContainerProps {
  rewardId: string;
  type?: string;
}
function RewardsWalletItemsContainer({ rewardId, type }: IRewardsWalletItemsContainerProps) {
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const { data, loading, refetch, fetchMore } = useQuery(gql(`GetMobileGameUserWalletRewardItemsDocument`), {
    variables: {
      rewardId,
      type,
    },
    fetchPolicy: "network-only",
  });

  const handleRefresh = useCallback(() => {
    refetch({
      rewardId,
      type,
    });
  }, [refetch, rewardId, type]);

  const dispatch = useDispatch();

  const handleFetchMore = useCallback(() => {
    const lastSectionIndex = data?.getMobileGameUserWalletRewardItems?.sections?.length - 1;
    if (lastSectionIndex === undefined || lastSectionIndex < 0) {
      return;
    }

    const lastSection = data?.getMobileGameUserWalletRewardItems?.sections?.[lastSectionIndex];

    if (lastSection?.hasMore) {
      setLoadingMore(true);
      fetchMore({
        variables: {
          rewardId,
          type: lastSection.type,
          offset: lastSection.items.length,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          const newSection = fetchMoreResult?.getMobileGameUserWalletRewardItems?.sections?.[0];
          if (!newSection) {
            return prev;
          }

          const result = {
            ...prev,
            getMobileGameUserWalletRewardItems: {
              ...prev.getMobileGameUserWalletRewardItems,
              sections: prev.getMobileGameUserWalletRewardItems.sections.map((section, index) => {
                if (index === lastSectionIndex) {
                  return {
                    ...section,
                    items: [...section.items, ...(newSection?.items || [])],
                    hasMore: newSection?.hasMore,
                  };
                }

                return section;
              }),
            },
          };
          return result;
        },
      }).finally(() => {
        setLoadingMore(false);
      });
    }
  }, [data?.getMobileGameUserWalletRewardItems?.sections, fetchMore, rewardId]);

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

      if (item.item_type === "header") {
        return <WalletHeader {...item} />;
      }

      if (item.type === "coupon") {
        return <WalletCouponItem item={item} onPress={handleCardPress} index={index} />;
      }

      if (item.type === "discount") {
        return <WalletDiscountIem item={item} onPress={handleCardPress} index={index} />;
      }

      return <WalletItem item={item} onPress={handleCardPress} index={index} />;
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
    return data?.getMobileGameUserWalletRewardItems?.sections?.reduce((list, section, index, sections) => {
      if (index === 0 && data?.getMobileGameUserWalletRewardItems?.image?.uri) {
        list.push({
          item_type: "header",
          image: data?.getMobileGameUserWalletRewardItems?.image,
        });
      }

      list.push({
        item_type: "section-header",
        title: section.title,
        icon: section.icon,
        description: section.description,
        onPress: () => null,
      });

      section.items.forEach((item) => {
        list.push({ ...item, item_type: "wallet_item" });
      });

      if (section.hasMore && index < sections.length - 1) {
        list.push({
          item_type: "see_more",
          onPress: () =>
            Navigation.updateProps(ROUTES.walletItems, {
              rewardId,
              type: section.type,
            }),
        });
      }

      return list;
    }, [] as MobileGameUserWalletListItem[]);
  }, [data?.getMobileGameUserWalletRewardItems?.image, data?.getMobileGameUserWalletRewardItems?.sections, rewardId]);

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

    if (item.item_type === "wallet_item") {
      return `wallet_item_${item.id}`;
    }

    return `wallet_item_${index}`;
  }, []);

  const renderFooter = useCallback(() => {
    if (!loadingMore) {
      return null;
    }

    return (
      <Box flexDirection="row" justifyContent="center" alignItems="center" mt={16}>
        <Loading size={24} />
      </Box>
    );
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
}

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
