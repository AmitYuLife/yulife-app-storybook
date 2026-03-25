import { Box } from "@atoms";
import { MobileGameUserWalletItem, GetMobileGameUserWalletRewardItemsQuery } from "@graphql/__generated";
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
import WalletSubSectionHeader, {
  MobileGameUserWalletSubSectionHeader,
} from "./subcomponents/wallet-sub-section-header";

const MAX_SUB_SECTION_PREVIEW = 3;

const parseListItem = (item: MobileGameUserWalletItem, isExpired?: boolean): MobileGameUserWalletListItem => ({
  ...item,
  itemType: "wallet_item",
  ...(isExpired && { isExpired }),
});

type WalletSections = GetMobileGameUserWalletRewardItemsQuery["getMobileGameUserWalletRewardItems"]["sections"];

const appendSubSection = (
  list: MobileGameUserWalletListItem[],
  sections: WalletSections | undefined,
  config: {
    headerType: "used-section-header" | "expired-section-header";
    title: string;
    isExpired?: boolean;
    seeMoreProps: Record<string, unknown>;
  }
) => {
  if (!sections?.length) {
    return;
  }

  list.push({ itemType: config.headerType, title: config.title });

  const allItems = sections.flatMap((section) => section.items);

  allItems.slice(0, MAX_SUB_SECTION_PREVIEW).forEach((item) => {
    list.push(parseListItem(item, config.isExpired));
  });

  const hasMore = allItems.length > MAX_SUB_SECTION_PREVIEW || sections.some((section) => section.hasMore);
  if (hasMore) {
    list.push({
      itemType: "see_more",
      onPress: () =>
        Navigation.push(ROUTES.walletItems, {
          component: {
            id: ROUTES.walletSeeMore,
            name: ROUTES.walletSeeMore,
            passProps: { ...config.seeMoreProps, title: config.title },
          },
        }),
    });
  }
};

type MobileGameUserWalletListItem =
  | (MobileGameUserWalletItem & { itemType: "wallet_item"; isExpired?: boolean })
  | MobileGameUserWalletHeader
  | MobileGameUserWalletSectionHeader
  | MobileGameUserWalletMoreAction
  | MobileGameUserWalletSubSectionHeader<"used-section-header">
  | MobileGameUserWalletSubSectionHeader<"expired-section-header">;
interface IRewardsWalletItemsContainerProps {
  rewardId: string;
}
const RewardsWalletItemsContainer = ({ rewardId }: IRewardsWalletItemsContainerProps) => {
  const { data, loading, refetch } = useWalletRewardItems({
    rewardId,
    markedAsUsed: false,
    expired: false,
  });
  const { data: usedData, refetch: refetchUsed } = useWalletRewardItems({
    rewardId,
    markedAsUsed: true,
    expired: false,
  });
  const { data: expiredData, refetch: refetchExpired } = useWalletRewardItems({ rewardId, expired: true });

  const handleRefresh = useCallback(() => {
    refetch();
    refetchUsed();
    refetchExpired();
  }, [refetch, refetchUsed, refetchExpired]);

  useNavigationComponentDidAppear(handleRefresh, ROUTES.walletItems);

  const { handleSduiActionWithParams: handleCardPress } = useSduiCallbackFunctionOrReduxAction();

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<MobileGameUserWalletListItem>) => {
      if (item.itemType === "section-header") {
        return <WalletSectionHeader {...item} />;
      }

      if (item.itemType === "see_more") {
        return <WalletSectionMore {...item} />;
      }

      if (item.itemType === "used-section-header" || item.itemType === "expired-section-header") {
        return <WalletSubSectionHeader {...item} />;
      }

      if (item.itemType === "header") {
        return <WalletHeader {...item} />;
      }

      return <WalletItemCard item={item} index={index} onPress={handleCardPress} isExpired={item.isExpired} />;
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
            itemType: "header",
            image: data?.getMobileGameUserWalletRewardItems?.image,
          });
        }

        acc.push({
          itemType: "section-header",
          title: section.title,
          icon: section.icon,
          description: section.description,
        });

        section.items.forEach((item) => {
          acc.push(parseListItem(item));
        });

        if (section.hasMore) {
          acc.push({
            itemType: "see_more",
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

    appendSubSection(list, usedData?.getMobileGameUserWalletRewardItems?.sections, {
      headerType: "used-section-header",
      title: t("screens.rewards.wallet.used_section.title"),
      seeMoreProps: { rewardId, markedAsUsed: true },
    });

    appendSubSection(list, expiredData?.getMobileGameUserWalletRewardItems?.sections, {
      headerType: "expired-section-header",
      title: t("screens.rewards.wallet.expired_section.title"),
      isExpired: true,
      seeMoreProps: { rewardId, expired: true },
    });

    return list;
  }, [
    data?.getMobileGameUserWalletRewardItems?.image,
    data?.getMobileGameUserWalletRewardItems?.sections,
    usedData?.getMobileGameUserWalletRewardItems?.sections,
    expiredData?.getMobileGameUserWalletRewardItems?.sections,
    rewardId,
  ]);

  const keyExtractor = useCallback((item: MobileGameUserWalletListItem, index: number) => {
    if (item.itemType === "wallet_item") {
      return `${item.isExpired ? "expired_" : ""}wallet_item_${item.id}`;
    }

    return `${item.itemType}_${index}`;
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
