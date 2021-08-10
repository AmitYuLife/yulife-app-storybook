import React, { FC, useEffect, useCallback } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  RedeemRewardMutationTuple,
  GQL_MUTATION_REDEEM_REWARD,
  GQL_QUERY_GET_REWARD_ITEM_DETAILS,
} from "@graphql/rewards";
import { Alert, Linking } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { RedeemReward, GetRewardItemDetails } from "@graphql/_core/schema";
import { bottomTabs, MODALS, ROUTES } from "@navigation/constants";
import { IReduxState } from "@redux/_core/reducers";
import { getOfflineState } from "@redux/app/app.selectors";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { getCopy } from "@redux/copy/copy.selectors";
import { getUserStart } from "@redux/user/user.actions";
import Logger from "@services/logging/logger";
import { RewardDetailsScreen, RewardDetailsLoadingScreen } from "@screens";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { showSelectInputModal } from "@atoms/select-input/select-input.helper";
import { ISelectInputOption } from "@atoms/select-input/select-input.types";
import { AviosMetadata } from "@graphql/_core/schema/globalTypes";
import { formatMoney } from "@services/money";

interface IProps {
  componentId: string;
  rewardId: string;
  onTabChange: (tab: "rewards" | "purchases", componentId: string) => void;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

const RewardDetailsContainer: FC<Props> = ({ onTabChange, componentId, copy, rewardId, totalCoins, offline }) => {
  const onRewardsTabPress = useCallback(() => onTabChange("rewards", componentId), [onTabChange, componentId]);
  const onPurchasesTabPress = useCallback(() => onTabChange("purchases", componentId), [onTabChange, componentId]);
  const [redeemReward, { loading }]: RedeemRewardMutationTuple = useMutation(GQL_MUTATION_REDEEM_REWARD);
  const { data, loading: loadingReward } = useQuery<GetRewardItemDetails>(GQL_QUERY_GET_REWARD_ITEM_DETAILS, {
    variables: { id: rewardId },
    fetchPolicy: "no-cache",
  });

  useBackHandler(() => {
    Navigation.pop(componentId);
    return true;
  });

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
    });
  }, [loadingReward, data]);

  const redeemRewardLink = useCallback(
    async (id: string, amount: number) => {
      const { availability, code, name } = data.getRewardItemDetails;

      try {
        await redeemReward({ variables: { id, amount } });
      } catch (e) {
        Logger.error(e, { event: "linkRewardDetailsContainer", file: "link-details-container" });
      }

      const supported = await Linking.canOpenURL(availability);

      if (supported) {
        Logger.logEvent("reward_redeem_pressed", {
          reward_amount: 0,
          reward_code: code,
          reward_name: name,
          reward_yucoin_spent: 0,
        });
        await Linking.openURL(availability);
      } else {
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

          getUserStart();
          await Navigation.push(ROUTES.rewards, {
            component: {
              id: confirmedRoute,
              name: confirmedRoute,
              passProps: {
                onTabChange: onTabChange,
                purchase: (result as { data: RedeemReward }).data.redeemReward,
              },
              options: { bottomTabs },
            },
          });
        }
      } catch (e) {
        const passProps = {
          ctaLabel: copy.voucherNotAvailable.ctaLabel,
          heading: copy.voucherNotAvailable.heading,
          onPress: () => Navigation.dismissModal(MODALS.rewards),
          subheading: copy.voucherNotAvailable.subheading,
        };

        if (offline) {
          passProps.ctaLabel = copy.offline.ctaLabel;
          passProps.heading = copy.offline.heading;
          passProps.subheading = copy.offline.subheading;
        }

        await Navigation.showModal({
          component: {
            id: MODALS.rewards,
            name: MODALS.rewards,
            passProps,
          },
        });
      }
    },
    [data, redeemReward, onTabChange, copy, offline, totalCoins]
  );

  const handleRewardPurchase = useCallback(
    async (metadata?: AviosMetadata) => {
      const { rewardProviderId, confirmAlert, code, availableDenominations } = data.getRewardItemDetails;

      await showSelectInputModal({
        title: `You have ${totalCoins} YuCoin`,
        options: availableDenominations.map((availableDenomination, index) => ({
          label: `£${formatMoney(availableDenomination.value)} - ${availableDenomination.yuCoin} YuCoin`,
          value: index,
        })),
        onPress: async (option: ISelectInputOption) => {
          const denominationYuCoin = availableDenominations[option.value].yuCoin;
          const amount = availableDenominations[option.value].value;
          const parsedMessage = confirmAlert.message
            .replace("$PRICE", formatMoney(amount))
            .replace("$YUCOIN", denominationYuCoin.toString());

          await Navigation.dismissOverlay(MODALS.listPicker);

          Alert.alert(confirmAlert.title, parsedMessage, [
            {
              style: "cancel",
              text: confirmAlert.cancelLabel,
            },
            {
              onPress: async () => {
                if (rewardProviderId === "link") {
                  return await redeemRewardLink(code, amount);
                }

                return await redeemRewardVoucher(code, amount, metadata);
              },
              text: confirmAlert.okLabel,
            },
          ]);
        },
      });
    },
    [data, redeemRewardLink, redeemRewardVoucher]
  );

  return (
    <>
      {loadingReward ? (
        <RewardDetailsLoadingScreen handleBack={onRewardsTabPress} />
      ) : (
        <RewardDetailsScreen
          rewardItem={data.getRewardItemDetails}
          isLoading={loading}
          onPressTopBar={onRewardsTabPress}
          onLeftTabPress={onRewardsTabPress}
          onRightTabPress={onPurchasesTabPress}
          onSubmit={handleRewardPurchase}
        />
      )}
    </>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  offline: getOfflineState(state),
  totalCoins: getTotalCoins(state),
  copy: getCopy(state, "purchases"),
});

const mapDispatchToProps = {
  getUserStart,
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(RewardDetailsContainer);
