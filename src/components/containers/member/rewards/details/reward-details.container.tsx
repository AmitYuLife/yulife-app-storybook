import React, { FC, useEffect, useCallback } from "react";
import { Alert, Keyboard, Linking } from "react-native";
import { Navigation } from "@navigation/main";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery } from "@apollo/client";
import {
  RedeemRewardMutationTuple,
  GQL_MUTATION_REDEEM_REWARD,
  GQL_QUERY_GET_REWARD_ITEM_DETAILS,
} from "@graphql/rewards";
import {
  RedeemReward,
  GetRewardItemDetails,
  GetRewardItemDetails_getRewardItemDetails_confirmAlert as ConfirmAlert,
  GetRewardItemDetails_getRewardItemDetails_availableDenominations as Denomination,
} from "@graphql/_core/schema";
import { bottomTabs, MODALS, ROUTES } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { getOfflineState } from "@redux/app/app.selectors";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { refreshTotalCoins } from "@redux/coins/coins.actions";
import Logger from "@services/logging/logger";
import { RewardDetailsScreen, RewardDetailsLoadingScreen } from "@screens";
import { useBackHandler } from "@hooks";
import { AviosMetadata } from "@graphql/_core/schema/globalTypes";
import { ListPicker, ISelectInputOption } from "@molecules";
import { t } from "@locale";

interface IProps {
  componentId: string;
  rewardId: string;
  popTo?: string;
}

interface IDisplayAlert {
  confirmAlert: ConfirmAlert;
  denomination: Denomination;
  rewardProviderId: string;
  code: string;
  metadata: AviosMetadata;
  name: string;
}

const RewardDetailsContainer: FC<IProps> = ({ rewardId, popTo }) => {
  const dispatch = useDispatch();
  const totalCoins = useSelector(getTotalCoins);
  const offline = useSelector(getOfflineState);

  const handleBackPress = useCallback(() => {
    Keyboard.dismiss();
    Navigation.popTo(popTo || ROUTES.rewards);
  }, []);

  const [redeemReward, { loading }]: RedeemRewardMutationTuple = useMutation(GQL_MUTATION_REDEEM_REWARD);
  const { data, loading: loadingReward, error } = useQuery<GetRewardItemDetails>(GQL_QUERY_GET_REWARD_ITEM_DETAILS, {
    variables: { id: rewardId },
    fetchPolicy: "no-cache",
  });

  useBackHandler(() => {
    handleBackPress();
    return true;
  });

  const notEnoughCoinsAlert = useCallback(() => {
    Alert.alert(t("alerts.not_enough_coins.title"), t("alerts.not_enough_coins.body"), [
      {
        text: t("labels.cta.got_it"),
      },
    ]);
  }, []);

  useEffect(() => {
    if (loadingReward || !data?.getRewardItemDetails) {
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

  const displayAlert = ({ confirmAlert, denomination, rewardProviderId, code, metadata, name }: IDisplayAlert) => {
    Alert.alert(confirmAlert.title, denomination.alertMessage, [
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
            return redeemRewardLink(code, denomination.value);
          }

          redeemRewardVoucher(code, denomination.value, metadata);
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
          const purchase = result.data.redeemReward;

          dispatch(refreshTotalCoins());

          if (purchase?.sduiStepId) {
            await Navigation.push(ROUTES.rewards, {
              component: {
                id: ROUTES.rewardPurchase,
                name: ROUTES.rewardPurchase,
                passProps: {
                  stepId: purchase.sduiStepId,
                  dynamicId: purchase.id,
                },
                options: { bottomTabs },
              },
            });
          } else {
            const confirmedRoute = rewardProviderId === "avios" ? ROUTES.aviosConfirmed : ROUTES.wegiftConfirmed;

            await Navigation.push(ROUTES.rewards, {
              component: {
                id: confirmedRoute,
                name: confirmedRoute,
                passProps: {
                  purchase,
                  shouldPopToRoot: true,
                },
                options: { bottomTabs },
              },
            });
          }
        }
      } catch (e) {
        const passProps = {
          ctaLabel: t("screens.rewards.purchases.voucher_not_available.cta_label"),
          heading: t("screens.rewards.purchases.voucher_not_available.heading"),
          onPress: () => Navigation.dismissModal(MODALS.rewards),
          subheading: t("screens.rewards.purchases.voucher_not_available.subheading"),
        };

        if (offline) {
          passProps.ctaLabel = t("labels.cta.got_it");
          passProps.heading = t("screens.rewards.purchases.offline.heading");
          passProps.subheading = t("screens.rewards.purchases.offline.subheading");
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
    [data, redeemReward, offline]
  );

  const handleRewardPurchase = useCallback(
    async (metadata?: AviosMetadata) => {
      const { rewardProviderId, confirmAlert, code, availableDenominations, name } = data.getRewardItemDetails;

      let denomination = availableDenominations[0];

      if (availableDenominations.length > 1) {
        const onPress = async (option: ISelectInputOption) => {
          denomination = availableDenominations[option.value];
          await Navigation.dismissOverlay(MODALS.blurredOverlay);

          if (totalCoins < denomination.yuCoin) {
            return notEnoughCoinsAlert();
          }

          displayAlert({ confirmAlert, denomination, rewardProviderId, code, metadata, name });
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

        await Navigation.showOverlayWithChild(child);
      } else {
        displayAlert({ confirmAlert, denomination, rewardProviderId, code, metadata, name });
      }
    },
    [data, redeemRewardLink, redeemRewardVoucher, totalCoins]
  );

  if (loadingReward || error) {
    if (error) {
      handleBackPress();
    }

    return <RewardDetailsLoadingScreen handleBack={handleBackPress} />;
  }

  return (
    <RewardDetailsScreen
      rewardItem={data?.getRewardItemDetails}
      isLoading={loading}
      onPressTopBar={handleBackPress}
      onSubmit={handleRewardPurchase}
    />
  );
};

export default RewardDetailsContainer;
