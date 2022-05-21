import React, { FC, useEffect, useCallback } from "react";
import { Alert, Keyboard, Linking } from "react-native";
import { Navigation } from "react-native-navigation";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  RedeemRewardMutationTuple,
  GQL_MUTATION_REDEEM_REWARD,
  GQL_QUERY_GET_REWARD_ITEM_DETAILS,
} from "@graphql/rewards";
import {
  RedeemReward,
  GetRewardItemDetails,
  GetRewardItemDetails_getRewardItemDetails_confirmAlert,
} from "@graphql/_core/schema";
import { bottomTabs, MODALS, ROUTES } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { getOfflineState } from "@redux/app/app.selectors";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { getNotEnoughCoinsAlertCopy, getPurchasesCopy } from "@redux/copy/copy.selectors";
import { refreshTotalCoins } from "@redux/coins/coins.actions";
import Logger from "@services/logging/logger";
import { RewardDetailsScreen, RewardDetailsLoadingScreen } from "@screens";
import { useBackHandler } from "@hooks";
import { AviosMetadata } from "@graphql/_core/schema/globalTypes";
import { formatMoney } from "@services/money";
import { ListPicker, ISelectInputOption } from "@molecules";
import { showOverlayWithChild } from "@modals/blurred-overlay/showOverlayWithChild";

interface IProps {
  componentId: string;
  rewardId: string;
}

interface IDisplayAlert {
  confirmAlert: GetRewardItemDetails_getRewardItemDetails_confirmAlert;
  denominationYuCoin: number;
  amount: number;
  rewardProviderId: string;
  code: string;
  metadata: AviosMetadata;
  name: string;
}

const RewardDetailsContainer: FC<IProps> = ({ rewardId }) => {
  const dispatch = useDispatch();
  const totalCoins = useSelector(getTotalCoins);
  const offline = useSelector(getOfflineState);
  const purchasesCopy = useSelector(getPurchasesCopy);
  const notEnoughCoinsAlertCopy = useSelector(getNotEnoughCoinsAlertCopy);

  const handleBackPress = useCallback(() => {
    Keyboard.dismiss();
    Navigation.popToRoot(ROUTES.rewards);
  }, []);

  const [redeemReward, { loading }]: RedeemRewardMutationTuple = useMutation(GQL_MUTATION_REDEEM_REWARD);
  const { data, loading: loadingReward } = useQuery<GetRewardItemDetails>(GQL_QUERY_GET_REWARD_ITEM_DETAILS, {
    variables: { id: rewardId },
    fetchPolicy: "no-cache",
  });

  useBackHandler(() => {
    handleBackPress();
    return true;
  });

  const notEnoughCoinsAlert = useCallback(() => {
    Alert.alert(notEnoughCoinsAlertCopy.title, notEnoughCoinsAlertCopy.body, [
      {
        text: notEnoughCoinsAlertCopy.btnLabel,
      },
    ]);
  }, []);

  useEffect(() => {
    if (loadingReward || !data.getRewardItemDetails) {
      return;
    }

    const { availableDenominations, availability, rewardSticker, code, name } = data.getRewardItemDetails;
    Logger.logEvent("reward_viewed", {
      reward_availability: availability,
      reward_available_denominations: availableDenominations,
      reward_best_sticker: rewardSticker,
      reward_code: code,
      reward_name: name,
      balance: totalCoins,
    });
  }, [loadingReward, data, totalCoins]);

  const displayAlert = ({
    confirmAlert,
    denominationYuCoin,
    amount,
    rewardProviderId,
    code,
    metadata,
    name,
  }: IDisplayAlert) => {
    const parsedMessage = confirmAlert.message
      .replace("$PRICE", formatMoney(amount))
      .replace("$YUCOIN", denominationYuCoin.toString());

    Alert.alert(confirmAlert.title, parsedMessage, [
      {
        style: "cancel",
        text: confirmAlert.cancelLabel,
        onPress: () =>
          Logger.logEvent("reward_redemption_canceled", {
            reward_name: name,
          }),
      },
      {
        onPress: () => {
          if (rewardProviderId === "link") {
            return redeemRewardLink(code, amount);
          }

          redeemRewardVoucher(code, amount, metadata);
        },
        text: confirmAlert.okLabel,
      },
    ]);
  };

  const redeemRewardLink = useCallback(
    async (id: string, amount: number) => {
      const { availability, code, name } = data.getRewardItemDetails;

      try {
        await redeemReward({ variables: { id, amount } });
      } catch (e) {
        Logger.error(e, { event: "linkRewardDetailsContainer", file: "link-details-container" });
      }

      try {
        await Linking.openURL(availability);
        Logger.logEvent("reward_redeem_pressed", {
          reward_amount: 0,
          reward_code: code,
          reward_name: name,
          reward_yucoin_spent: 0,
        });
      } catch (e) {
        Logger.logEvent("reward_redeem_link_unsupported", {
          reward_code: code,
          reward_name: name,
        });
      }
    },
    [data, redeemReward]
  );

  const redeemRewardVoucher = useCallback(
    async (id: string, amount: number, aviosMetadata: AviosMetadata) => {
      const { rewardProviderId } = data.getRewardItemDetails;
      const metadata = Object.keys(aviosMetadata).length > 0 ? { avios: { ...aviosMetadata } } : null;

      try {
        const result = await redeemReward({ variables: { id, amount, metadata } });

        if ((result as { data: RedeemReward }).data.redeemReward) {
          //TODO-REWARDS: https://yulife.atlassian.net/browse/GS-70
          const confirmedRoute = rewardProviderId === "avios" ? ROUTES.aviosConfirmed : ROUTES.wegiftConfirmed;

          dispatch(refreshTotalCoins());

          await Navigation.push(ROUTES.rewards, {
            component: {
              id: confirmedRoute,
              name: confirmedRoute,
              passProps: {
                purchase: (result as { data: RedeemReward }).data.redeemReward,
                shouldPopToRoot: true,
              },
              options: { bottomTabs },
            },
          });
        }
      } catch (e) {
        const passProps = {
          ctaLabel: purchasesCopy.voucherNotAvailable.ctaLabel,
          heading: purchasesCopy.voucherNotAvailable.heading,
          onPress: () => Navigation.dismissModal(MODALS.rewards),
          subheading: purchasesCopy.voucherNotAvailable.subheading,
        };

        if (offline) {
          passProps.ctaLabel = purchasesCopy.offline.ctaLabel;
          passProps.heading = purchasesCopy.offline.heading;
          passProps.subheading = purchasesCopy.offline.subheading;
        }

        await showYuModal({
          component: {
            id: MODALS.rewards,
            name: MODALS.rewards,
            passProps,
          },
        });
      }
    },
    [data, redeemReward, purchasesCopy, offline]
  );

  const handleRewardPurchase = useCallback(
    async (metadata?: AviosMetadata) => {
      const { rewardProviderId, confirmAlert, code, availableDenominations, name } = data.getRewardItemDetails;

      let amount = availableDenominations[0].value;
      let denominationYuCoin = availableDenominations[0].yuCoin;

      if (availableDenominations.length > 1) {
        const onPress = async (option: ISelectInputOption) => {
          denominationYuCoin = availableDenominations[option.value].yuCoin;
          amount = availableDenominations[option.value].value;
          await Navigation.dismissOverlay(MODALS.blurredOverlay);

          if (totalCoins < denominationYuCoin) {
            return notEnoughCoinsAlert();
          }

          displayAlert({ confirmAlert, denominationYuCoin, rewardProviderId, code, amount, metadata, name });
        };

        const options = availableDenominations.map(({ label }, index) => ({
          label,
          value: index,
        }));

        const items = options?.map((option) => ({
          ...option,
          onPress: () => onPress(option),
        }));

        const title = `You have ${totalCoins} YuCoin`;
        const child = <ListPicker instruction={title} items={items} />;

        await showOverlayWithChild(child);
      } else {
        displayAlert({ confirmAlert, denominationYuCoin, rewardProviderId, code, amount, metadata, name });
      }
    },
    [data, redeemRewardLink, redeemRewardVoucher, totalCoins]
  );

  if (loadingReward) {
    return <RewardDetailsLoadingScreen handleBack={handleBackPress} />;
  }

  return (
    <RewardDetailsScreen
      rewardItem={data.getRewardItemDetails}
      isLoading={loading}
      onPressTopBar={handleBackPress}
      onSubmit={handleRewardPurchase}
    />
  );
};

export default RewardDetailsContainer;
