import { useQuery } from "@apollo/client/react/hooks";
import { Box, TextTemplate } from "@atoms";
import { gql, MobileGamePartnerRewardsInventoryItem, SduiAction } from "@graphql/__generated";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import WalletCouponItem from "../../../molecules/reward-wallet/walletCouponItem";
import WalletItem from "../../../molecules/reward-wallet/walletItem";
import { StyleSheet } from "react-native";
import { t } from "@locale";

interface IRewardsPurchasesContainerProps {
  rewardId: string;
  type: string;
}
function RewardsPurchasesContainer({ rewardId, type }: IRewardsPurchasesContainerProps) {
  const { data } = useQuery(gql(`GetMobileGamePartnerRewardsInventoryItemsDocument`), {
    fetchPolicy: "cache-and-network",
    variables: { rewardId, type },
  });

  const dispatch = useDispatch();

  const handleCardPress = useCallback(
    (onPress: SduiAction) => {
      console.log({ onPress });
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
      if (item.type === "coupon") {
        return <WalletCouponItem item={item} onPress={handleCardPress} />;
      }

      return <WalletItem item={item} onPress={handleCardPress} />;
    },
    [handleCardPress]
  );

  const handleBackPress = useCallback(() => {
    Navigation.pop(ROUTES.wallet);
  }, []);

  return (
    <Box flexDirection="column" flex={1} p={20}>
      <GenericHeadingPad />
      <Box mb={16}>
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
      </Box>
      <Box flex={1}>
        <FlashList
          data={data?.getMobileGamePartnerRewardsInventoryItems?.items}
          renderItem={renderItem}
          estimatedItemSize={142}
        />
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
});

export default RewardsPurchasesContainer;
