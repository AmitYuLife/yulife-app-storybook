import { useQuery } from "@apollo/client/react/hooks";
import { Box } from "@atoms";
import { gql, MobileGameUserWalletReward, SduiAction } from "@graphql/__generated";
import { t } from "@locale";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { memo, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import WalletCard from "../../../molecules/reward-wallet/walletCard";

import EmptyWallet from "./subcomponents/empty-wallet";

import WalletItemLoading from "./subcomponents/wallet-item-loading";

function RewardsWalletContainer() {
  const dispatch = useDispatch();

  const {
    data: inventoryCards,
    loading,
    refetch,
  } = useQuery(gql("GetMobileGameUserWalletRewardsDocument"), {
    fetchPolicy: "network-only",
  });

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
    ({ item }: ListRenderItemInfo<MobileGameUserWalletReward>) => {
      if (loading) {
        return <WalletItemLoading />;
      }

      return <WalletCard item={item} onPress={handleCardPress} />;
    },
    [handleCardPress, loading]
  );

  const EmptyComponent = useMemo(() => {
    if (loading || inventoryCards?.getMobileGameUserWalletRewards?.rewards?.length) {
      return null;
    }

    return (
      <EmptyWallet
        title={t("screens.rewards.wallet.empty.discount.heading")}
        description={t("screens.rewards.wallet.empty.discount.subheading")}
        image={require("@assets/reward-wallet/discount.png")}
      />
    );
  }, [inventoryCards?.getMobileGameUserWalletRewards?.rewards?.length, loading]);

  const handleBackPress = useCallback(() => {
    Navigation.popToRoot(ROUTES.rewards);
  }, []);

  const calculatedData = useMemo(() => {
    if (loading) {
      return Array.from({ length: 3 }).map(() => ({}));
    }

    return inventoryCards?.getMobileGameUserWalletRewards?.rewards;
  }, [inventoryCards?.getMobileGameUserWalletRewards?.rewards, loading]);

  return (
    <Box flexDirection="column" flex={1}>
      <GenericHeadingPad />

      {EmptyComponent ? (
        EmptyComponent
      ) : (
        <Box flex={1} p={20}>
          <FlashList
            data={calculatedData}
            renderItem={renderItem}
            estimatedItemSize={175}
            onRefresh={refetch}
            refreshing={loading}
            showsVerticalScrollIndicator={false}
          />
        </Box>
      )}
      <GenericHeadingAbsolute
        heading={t("screens.rewards.wallet.title")}
        leftIcon={LeftIcon.BACK}
        onLeftIconPress={handleBackPress}
        hideBorder={false}
      />
    </Box>
  );
}

export default memo(RewardsWalletContainer);
