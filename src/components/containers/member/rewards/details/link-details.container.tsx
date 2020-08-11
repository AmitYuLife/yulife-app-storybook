import { useMutation } from "@apollo/react-hooks";
import { RedeemRewardMutationTuple, GQL_MUTATION_REDEEM_REWARD } from "@graphql/rewards";
import React, { FC, useCallback, useMemo, useEffect } from "react";
import { Alert, Linking } from "react-native";
import Config from "react-native-config";
import { connect } from "react-redux";
import { GetRewards_getRewards } from "../../../../../graphql/_core/schema";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getOfflineState } from "../../../../../redux/app/app.selectors";
import Logger from "../../../../../services/logging/logger";
import { WegiftRewardDetailsScreen } from "../../../../screens";
import { handleLinkPress } from "@services/app-link";

interface IProps {
  componentId: string;
  reward: GetRewards_getRewards;
  onTabChange: (tab: "rewards" | "purchases", componentId: string) => void;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

type Props = IProps & ConnectedState;

const LinkRewardDetailsContainer: FC<Props> = (props) => {
  const {
    componentId,
    onTabChange,
    reward: {
      name,
      availability,
      code,
      currency_code,
      description,
      redeem_steps: { steps },
      uiSettings,
      link_type,
      available_denominations,
      terms_and_conditions_url,
      reward_sticker,
    },
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

  const labelCtaPrimary = useMemo(() => uiSettings.ctaLabel || "claim reward", [uiSettings.ctaLabel]);

  const onPressPicker = useCallback(() => ({}), []);

  const onRewardsTabPress = useCallback(() => onTabChange("rewards", componentId), [componentId, onTabChange]);
  const onPurchasesTabPress = useCallback(() => onTabChange("purchases", componentId), [componentId, onTabChange]);

  const handlePolicyPress = useMemo(() => handleLinkPress(Config.REWARDS_POLICY_URL), []);
  const handleTermsPress = useMemo(() => handleLinkPress(terms_and_conditions_url), [terms_and_conditions_url]);

  const [redeemReward, { loading }]: RedeemRewardMutationTuple = useMutation(GQL_MUTATION_REDEEM_REWARD);

  const handleSubmit = useCallback(() => {
    const [{ value }] = available_denominations;

    Alert.alert(
      uiSettings.alertHeading || "Claim reward",
      uiSettings.alertSubheading || `You will be redirected to ${name}.`,
      [
        { text: uiSettings.alertCancelLabel || "Cancel", style: "cancel" },
        {
          onPress: async () => {
            try {
              await redeemReward({ variables: { id: code, amount: value } });
            } catch (e) {
              Logger.logMixpanelError(e, "linkRewardDetailsContainer");
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
              // Record the fact that the user didn't see the link.
              Logger.logEvent("reward_redeem_link_unsupported", {
                reward_code: code,
                reward_name: name,
              });
            }
          },
          text: uiSettings.alertOkLabel || "OK",
        },
      ]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WegiftRewardDetailsScreen
      availableDenomitations={available_denominations}
      onPressPicker={onPressPicker}
      uiSettings={uiSettings}
      code={code}
      linkType={link_type}
      cost={0}
      rewardValue={0}
      rewardCurrency={currency_code}
      description={description}
      instructions={steps}
      isLoading={loading}
      onPressCtaPrimary={handleSubmit}
      labelCtaPrimary={labelCtaPrimary}
      onPressTerms={handleTermsPress}
      onPressPolicy={handlePolicyPress}
      onPressTopBar={onRewardsTabPress}
      onLeftTabPress={onRewardsTabPress}
      onRightTabPress={onPurchasesTabPress}
    />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  offline: getOfflineState(state),
});

export default connect<ConnectedState>(mapStateToProps)(LinkRewardDetailsContainer);
