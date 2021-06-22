import BlurProvider from "@atoms/blur/blur-provider";
import { useMutation } from "@apollo/react-hooks";
import { RedeemRewardMutationTuple, GQL_MUTATION_REDEEM_REWARD } from "@graphql/rewards";
import ListPicker from "@molecules/list-picker/list-picker";
import { getUserFeatures } from "@redux/user/user.selectors";
import React, { useEffect, FC, useCallback, useState, useMemo } from "react";
import { Alert } from "react-native";
import Config from "react-native-config";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetRewards_getRewards, RedeemReward } from "../../../../../graphql/_core/schema";
import { bottomTabs, MODALS, ROUTES } from "../../../../../navigation/constants";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getOfflineState } from "../../../../../redux/app/app.selectors";
import { getTotalCoins } from "../../../../../redux/coins/coins.selectors";
import { getCopy } from "../../../../../redux/copy/copy.selectors";
import { getUserStart } from "../../../../../redux/user/user.actions";
import Logger from "../../../../../services/logging/logger";
import { WegiftRewardDetailsScreen } from "../../../../screens";
import { handleLinkPress } from "@services/app-link";

interface IProps {
  componentId: string;
  reward: GetRewards_getRewards;
  onTabChange: (tab: "rewards" | "purchases", componentId: string) => void;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

const WegiftRewardDetailsContainer: FC<Props> = (props) => {
  const {
    componentId,
    onTabChange,
    copy,
    totalCoins,
    reward: {
      code,
      availability,
      currency_code,
      reward_sticker,
      name,
      description,
      redeem_steps: { steps },
      available_denominations,
      uiSettings,
      terms_and_conditions_url,
      logoImageUri,
      background: { uri: backgroundImageUri },
    },
    features = {},
  } = props;

  useEffect(() => {
    Logger.logEvent("reward_viewed", {
      reward_availability: availability,
      reward_available_denominations: available_denominations,
      reward_best_sticker: reward_sticker,
      reward_code: code,
      reward_name: name,
    });
  }, [availability, available_denominations, code, name, reward_sticker]);

  const onRewardsTabPress = useCallback(() => onTabChange("rewards", componentId), [componentId, onTabChange]);
  const onPurchasesTabPress = useCallback(() => onTabChange("purchases", componentId), [componentId, onTabChange]);

  const handlePolicyPress = useMemo(() => handleLinkPress(Config.REWARDS_POLICY_URL), []);
  const handleTermsPress = useMemo(() => handleLinkPress(terms_and_conditions_url), [terms_and_conditions_url]);

  const [denomination, setDenomination] = useState(available_denominations[0]);

  const labelCtaPrimary = useMemo(() => `buy with ${denomination.yuCoin} yucoin`, [denomination]);
  const showWegiftPicker = useMemo(() => features.showWegiftPicker, [features]);

  const [redeemReward, { loading }]: RedeemRewardMutationTuple = useMutation(GQL_MUTATION_REDEEM_REWARD);

  const handleSubmit = useCallback(() => {
    const heading = (uiSettings && uiSettings.alertHeading) || "Confirm purchase";
    const subheading =
      (uiSettings && uiSettings.alertSubheading) ||
      `You'll purchase ${name} £${denomination.value.toFixed(2)} voucher with ${denomination.yuCoin} yucoin.`;

    Alert.alert(heading, subheading, [
      { text: "Cancel", style: "cancel" },
      {
        onPress: async () => {
          try {
            const result = await redeemReward({ variables: { id: code, amount: denomination.value } });

            if ((result as { data: RedeemReward }).data.redeemReward) {
              props.getUserStart();
              await Navigation.push(ROUTES.rewards, {
                component: {
                  id: ROUTES.wegiftConfirmed,
                  name: ROUTES.wegiftConfirmed,
                  passProps: {
                    onTabChange: props.onTabChange,
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

            if (props.offline) {
              passProps.ctaLabel = copy.offline.ctaLabel;
              passProps.heading = copy.offline.heading;
              passProps.subheading = copy.offline.subheading;
            } else if (totalCoins < denomination.yuCoin) {
              passProps.ctaLabel = copy.notEnoughCoins.ctaLabel;
              passProps.heading = copy.notEnoughCoins.heading;
              passProps.subheading = copy.notEnoughCoins.subheading;
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
        text: "OK",
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [denomination]);

  return (
    <BlurProvider
      backgroundColor="dark"
      render={({ toggleOverlay }) => (
        <WegiftRewardDetailsScreen
          availableDenomitations={available_denominations}
          uiSettings={uiSettings}
          code={code}
          cost={denomination.yuCoin}
          rewardValue={denomination.value}
          rewardCurrency={currency_code}
          description={description}
          instructions={steps}
          onPressCtaPrimary={handleSubmit}
          onPressPicker={() => {
            if (features.showWegiftPicker) {
              toggleOverlay();
            }
          }}
          showWegiftPicker={showWegiftPicker}
          labelCtaPrimary={labelCtaPrimary}
          onPressTerms={handleTermsPress}
          onPressPolicy={handlePolicyPress}
          isLoading={loading}
          onPressTopBar={onRewardsTabPress}
          onLeftTabPress={onRewardsTabPress}
          onRightTabPress={onPurchasesTabPress}
          logoImageUri={logoImageUri}
          backgroundImageUri={backgroundImageUri}
        />
      )}
      renderOverlay={({ toggleOverlay }) => {
        if (!showWegiftPicker) {
          return null;
        }

        return (
          <ListPicker
            onPressCancel={toggleOverlay}
            instruction="Select the amount"
            items={available_denominations.map((item) => ({
              id: String(item.value),
              label: `£${item.value.toFixed(2)} - ${item.yuCoin} yucoin`,
              onPress: () => {
                setDenomination(item);
                toggleOverlay();
              },
            }))}
          />
        );
      }}
    />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  offline: getOfflineState(state),
  totalCoins: getTotalCoins(state),
  copy: getCopy(state, "purchases"),
  features: getUserFeatures(state),
});

const mapDispatchToProps = {
  getUserStart,
};

export default connect<ConnectedState, ConnectedDispatch>(
  mapStateToProps,
  mapDispatchToProps
)(WegiftRewardDetailsContainer);
