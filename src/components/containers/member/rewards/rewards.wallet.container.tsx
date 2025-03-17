import { useLazyQuery, useQuery } from "@apollo/client/react/hooks";
import { Box, TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { gql, InventoryRewardsCategory, MobileGamePartnerRewardsInventoryCard, SduiAction } from "@graphql/__generated";
import { t } from "@locale";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { Colours, Style, TOP_BAR } from "@styles";
import { useCallback, useEffect, useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import WalletCard from "../../../molecules/reward-wallet/walletCard";
import WalletCouponCard from "../../../molecules/reward-wallet/walletCouponCard";
import WalletDiscountCard from "../../../molecules/reward-wallet/walletDiscountCard";
import EmptyWallet from "./subcomponents/empty-wallet";
import WalletCouponLoading from "./subcomponents/wallet-coupon-loading";
import WalletGiftCardLoading from "./subcomponents/wallet-gift-card-loading";

const HIT_SLOP_SIZE = Style.adjust(8);
const HIT_SLOP = {
  left: HIT_SLOP_SIZE,
  right: HIT_SLOP_SIZE,
  bottom: Style.adjust(12),
  top: HIT_SLOP_SIZE,
};

function RewardsPurchasesContainer() {
  const dispatch = useDispatch();
  const { data } = useQuery(gql(`GetMobileGamePartnerRewardsInventoryCategoriesDocument`), {
    fetchPolicy: "cache-and-network",
  });

  const [selectedCategory, selectCategory] = useState<InventoryRewardsCategory | null>(null);

  useEffect(() => {
    if (data?.getMobileGamePartnerRewardsInventoryCategories?.length) {
      selectCategory(data.getMobileGamePartnerRewardsInventoryCategories[0]);
    }
  }, [data?.getMobileGamePartnerRewardsInventoryCategories]);

  const [fetchCards, { data: inventoryCards, loading }] = useLazyQuery(
    gql("GetMobileGamePartnerRewardsInventoryCardsDocument"),
    { fetchPolicy: "network-only" }
  );

  const handleFetchCards = useCallback(() => {
    if (selectedCategory?.type) {
      fetchCards({ variables: { type: selectedCategory.type }, fetchPolicy: "network-only" });
    }
  }, [selectedCategory?.type, fetchCards]);

  useEffect(() => {
    handleFetchCards();
  }, [handleFetchCards]);

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
    ({ item }: ListRenderItemInfo<MobileGamePartnerRewardsInventoryCard>) => {
      if (loading) {
        if (selectedCategory?.type === "voucher") {
          return <WalletGiftCardLoading />;
        }

        return <WalletCouponLoading />;
      }

      if (item?.type === "coupon") {
        return <WalletCouponCard item={item} onPress={handleCardPress} />;
      }

      if (item?.type === "discount") {
        return <WalletDiscountCard item={item} onPress={handleCardPress} />;
      }

      return <WalletCard item={item} onPress={handleCardPress} />;
    },
    [handleCardPress, loading, selectedCategory?.type]
  );

  const EmptyComponent = useMemo(() => {
    if (loading || !selectedCategory?.id || inventoryCards?.getMobileGamePartnerRewardsInventoryCards?.items?.length) {
      return null;
    }

    if (selectedCategory?.type === "voucher") {
      return (
        <EmptyWallet
          title={t("screens.rewards.wallet.empty.voucher.heading")}
          description={t("screens.rewards.wallet.empty.voucher.subheading")}
          image={require("@assets/reward-wallet/gift-cards.png")}
        />
      );
    }

    return (
      <EmptyWallet
        title={t("screens.rewards.wallet.empty.discount.heading")}
        description={t("screens.rewards.wallet.empty.discount.subheading")}
        image={require("@assets/reward-wallet/discount.png")}
      />
    );
  }, [
    inventoryCards?.getMobileGamePartnerRewardsInventoryCards?.items?.length,
    loading,
    selectedCategory?.id,
    selectedCategory?.type,
  ]);

  const categories = useMemo(() => {
    if (data?.getMobileGamePartnerRewardsInventoryCategories) {
      return data.getMobileGamePartnerRewardsInventoryCategories.map((cat) => ({
        label: cat.title,
        id: cat.id,
        isActive: selectedCategory?.id === cat.id,
        onPress: () => selectCategory(cat),
      }));
    }

    return [];
  }, [data?.getMobileGamePartnerRewardsInventoryCategories, selectedCategory]);

  const handleBackPress = useCallback(() => {
    Navigation.popToRoot(ROUTES.rewards);
  }, []);

  const calculatedData = useMemo(() => {
    if (loading) {
      return Array.from({ length: 3 }).map(() => ({}));
    }

    return inventoryCards?.getMobileGamePartnerRewardsInventoryCards?.items;
  }, [inventoryCards?.getMobileGamePartnerRewardsInventoryCards?.items, loading]);

  return (
    <Box flexDirection="column" flex={1}>
      <GenericHeadingPad />
      <Box gap={10} flexDirection="row" ph={24} pv={16} style={styles.menuContainer}>
        {categories.map((category) => {
          const { label, id, isActive, onPress } = category;
          const tabStyles = isActive ? styles.active : styles.normal;
          return (
            <Box key={id} h={35}>
              <TouchableOpacityWithDelay onPress={onPress} hitSlop={HIT_SLOP} style={tabStyles}>
                <TextTemplate type="b2b" color={Colours.neutral.n800}>
                  {label}
                </TextTemplate>
              </TouchableOpacityWithDelay>
            </Box>
          );
        })}
      </Box>
      {EmptyComponent ? (
        EmptyComponent
      ) : (
        <Box flex={1} p={20}>
          <FlashList
            extraData={selectedCategory?.id}
            data={calculatedData}
            renderItem={renderItem}
            estimatedItemSize={175}
            onRefresh={handleFetchCards}
            refreshing={loading}
            showsVerticalScrollIndicator={false}
          />
        </Box>
      )}
      <GenericHeadingAbsolute
        heading={t("screens.rewards.wallet.title")}
        leftIcon={LeftIcon.BACK}
        onLeftIconPress={handleBackPress}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  active: {
    borderRadius: 100,
    height: Style.adjust(32),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Style.adjust(12),
    borderWidth: 1,
    borderColor: "#E30D76",
    backgroundColor: "#FCE7F1",
  },
  normal: {
    borderRadius: 100,
    height: Style.adjust(32),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Style.adjust(12),
    borderWidth: 1,
    borderColor: Colours.neutral.n100,
    backgroundColor: Colours.neutral.white,
  },
  topbarWrapper: {
    left: 0,
    top: TOP_BAR.PADDING_TOP,
    position: "absolute",
    right: 0,
  },
  menuContainer: { borderBottomWidth: 4, borderBottomColor: Colours.neutral.n100 },
  lottie: { width: 130, height: 130, position: "absolute", left: 0, bottom: 0 },
});

export default RewardsPurchasesContainer;
