import { useQuery } from "@apollo/client/react/hooks";
import { Box, SkeletonLoading, TextTemplate } from "@atoms";
import { gql, MobileGamePartnerRewardsInventoryItem, SduiAction } from "@graphql/__generated";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import WalletCouponItem from "../../../molecules/reward-wallet/walletCouponItem";
import WalletItem from "../../../molecules/reward-wallet/walletItem";
import { StyleSheet } from "react-native";
import { t } from "@locale";
import WalletCouponLoading from "./subcomponents/wallet-coupon-loading";
import WalletItemLoading from "./subcomponents/wallet-item-loading";
interface IRewardsPurchasesContainerProps {
  rewardId: string;
  type: string;
}
function RewardsPurchasesContainer({ rewardId, type }: IRewardsPurchasesContainerProps) {
  const { data, loading } = useQuery(gql(`GetMobileGamePartnerRewardsInventoryItemsDocument`), {
    fetchPolicy: "network-only",
    variables: { rewardId, type },
  });

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
    ({ item }: ListRenderItemInfo<MobileGamePartnerRewardsInventoryItem>) => {
      if (loading) {
        if (type === "coupon") {
          return <WalletCouponLoading type="item" />;
        }

        return <WalletItemLoading />;
      }

      if (item.type === "coupon") {
        return <WalletCouponItem item={item} onPress={handleCardPress} />;
      }

      return <WalletItem item={item} onPress={handleCardPress} />;
    },
    [handleCardPress, loading, type]
  );

  const handleBackPress = useCallback(() => {
    Navigation.pop(ROUTES.wallet);
  }, []);

  const calculatedData = useMemo(() => {
    if (loading) {
      return Array.from({ length: 3 }).map(() => ({}));
    }

    return data?.getMobileGamePartnerRewardsInventoryItems?.items;
  }, [data?.getMobileGamePartnerRewardsInventoryItems?.items, loading]);
  return (
    <Box flexDirection="column" flex={1} p={20}>
      <GenericHeadingPad />
      <Box mb={16}>
        {loading ? (
          <SkeletonLoading style={styles.descriptionLoading} />
        ) : (
          <>
            <Box flexDirection="row" style={styles.descriptionContainer}>
              <Box>
                <TextTemplate color={"#464647"} type="b2b">
                  {data?.getMobileGamePartnerRewardsInventoryItems.title}
                </TextTemplate>
              </Box>
              <Box flexDirection="row">
                <TextTemplate
                  color={"#464647"}
                  type="b2b"
                >{`${data?.getMobileGamePartnerRewardsInventoryItems.label}:`}</TextTemplate>
                <TextTemplate color={"#956AFF"} type="b2b">
                  {" "}
                  {`${data?.getMobileGamePartnerRewardsInventoryItems.quantity}`}
                </TextTemplate>
              </Box>
            </Box>
            <Box>
              <TextTemplate color={"#464647"} type="b2">
                {data?.getMobileGamePartnerRewardsInventoryItems.description}
              </TextTemplate>
            </Box>
          </>
        )}
      </Box>
      <Box flex={1}>
        <FlashList extraData={loading} data={calculatedData} renderItem={renderItem} estimatedItemSize={142} />
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

const styles = StyleSheet.create({
  descriptionContainer: { justifyContent: "space-between" },
  descriptionLoading: { height: 50, width: "100%" },
});

export default RewardsPurchasesContainer;
