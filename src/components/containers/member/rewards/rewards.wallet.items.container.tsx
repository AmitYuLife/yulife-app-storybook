import { Box } from "@atoms";
import { MobileGameUserWalletItem } from "@graphql/__generated";
import { useNavigationComponentDidAppear } from "@hooks";
import { t } from "@locale";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { Style, StyleSheet } from "@styles";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks/useSduiCallbackFunctionOrReduxAction";
import { memo, useCallback, useMemo } from "react";
import { DETOX_ENABLED } from "@services/socket";
import { useWalletRewardItems } from "./hooks/useWalletRewardItems";
import WalletHeader, { MobileGameUserWalletHeader, WalletHeaderLoading } from "./subcomponents/wallet-header";
import WalletItemCard from "@modules/wallet/subcomponents/wallet-item-card";
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

const MAX_USED_ITEMS_PREVIEW = 3;

type MobileGameUserWalletListItem =
  | (MobileGameUserWalletItem & { item_type: "wallet_item" })
  | MobileGameUserWalletHeader
  | MobileGameUserWalletSectionHeader
  | MobileGameUserWalletMoreAction
  | MobileGameUserWalletUsedSectionHeader;
interface IRewardsWalletItemsContainerProps {
  rewardId: string;
}
const RewardsWalletItemsContainer = ({ rewardId }: IRewardsWalletItemsContainerProps) => {
  const { data, loading, refetch } = useWalletRewardItems({
    rewardId,
    markedAsUsed: false,
  });
  const { data: usedData, refetch: refetchUsed } = useWalletRewardItems({ rewardId, markedAsUsed: true });

  const handleRefresh = useCallback(() => {
    refetch();
    refetchUsed();
  }, [refetch, refetchUsed]);

  useNavigationComponentDidAppear(handleRefresh, ROUTES.walletItems);

  const { handleSduiActionWithParams: handleCardPress } = useSduiCallbackFunctionOrReduxAction();

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

      return <WalletItemCard item={item} index={index} onPress={handleCardPress} />;
    },
    [handleCardPress]
  );

  const handleBackPress = useCallback(() => {
    Navigation.pop(ROUTES.walletItems);
  }, []);

  const calculatedData = useMemo(() => {
    const list: MobileGameUserWalletListItem[] =
      data?.getMobileGameUserWalletRewardItems?.sections?.reduce((acc, section, index) => {
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
        });

        section.items.forEach((item) => {
          acc.push({ ...item, item_type: "wallet_item" });
        });

        if (section.hasMore) {
          acc.push({
            item_type: "see_more",
            onPress: () =>
              Navigation.push(ROUTES.walletItems, {
                component: {
                  id: ROUTES.walletSeeMore,
                  name: ROUTES.walletSeeMore,
                  passProps: {
                    rewardId,
                    type: section.type,
                    title: section.title,
                    icon: section.icon,
                    description: section.description,
                  },
                },
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

      const allUsedItems = usedSections.flatMap((section) => section.items);

      allUsedItems.slice(0, MAX_USED_ITEMS_PREVIEW).forEach((item) => {
        list.push({ ...item, item_type: "wallet_item" });
      });

      const hasMoreUsed =
        allUsedItems.length > MAX_USED_ITEMS_PREVIEW || usedSections.some((section) => section.hasMore);
      if (hasMoreUsed) {
        list.push({
          item_type: "see_more",
          onPress: () =>
            Navigation.push(ROUTES.walletItems, {
              component: {
                id: ROUTES.walletSeeMore,
                name: ROUTES.walletSeeMore,
                passProps: {
                  rewardId,
                  markedAsUsed: true,
                  title: t("screens.rewards.wallet.used_section.title"),
                },
              },
            }),
        });
      }
    }

    return list;
  }, [
    data?.getMobileGameUserWalletRewardItems?.image,
    data?.getMobileGameUserWalletRewardItems?.sections,
    usedData?.getMobileGameUserWalletRewardItems?.sections,
    rewardId,
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

  return (
    <Box flexDirection="column" flex={1} p={16}>
      <GenericHeadingPad hideBorder={false} />
      <Box flex={1}>
        {loading ? (
          <ItemsLoadingList />
        ) : (
          <FlashList
            data={calculatedData}
            renderItem={renderItem}
            onRefresh={DETOX_ENABLED ? undefined : handleRefresh}
            refreshing={DETOX_ENABLED ? undefined : loading}
            contentContainerStyle={styles.listContent}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
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
