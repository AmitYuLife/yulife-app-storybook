import { useQuery } from "@apollo/react-hooks";
import { BaseQueryOptions } from "@apollo/react-common";
import { GQL_QUERY_GET_ALL_PURCHASES, GQL_QUERY_GET_REWARDS } from "@graphql/rewards";
import { bottomTabs } from "@navigation/constants";
import moment from "moment";
import React, { FC, useState, useCallback, useMemo } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetRewards_getRewards, GetAllPurchases } from "../../../../graphql/_core/schema";
import { MODALS, ROUTES } from "../../../../navigation/constants";
import { IMainTabsProps } from "../../../../navigation/root";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getTotalCoins } from "../../../../redux/coins/coins.selectors";
import { getCopy } from "../../../../redux/copy/copy.selectors";
import { getCurrentLevel, getHasNotification } from "../../../../redux/levels/levels.selectors";
import Logger from "../../../../services/logging/logger";
import { formatMoney } from "../../../../services/money";
import { PurchasedListScreen, RewardsListScreen } from "../../../screens";

type Tab = "rewards" | "purchases";

type ConnectedState = ReturnType<typeof mapStateToProps>;

type Props = IMainTabsProps & ConnectedState;

const getDetailsRoute = (rewardProviderId: string) => {
  switch (rewardProviderId) {
    case "avios":
      return ROUTES.aviosDetails;
    case "link":
      return ROUTES.linkDetails;
    case "wegift":
    default:
      return ROUTES.wegiftDetails;
  }
};

const getConfirmedRoute = (rewardProviderId: string) => {
  switch (rewardProviderId) {
    case "avios":
      return ROUTES.aviosConfirmed;
    case "wegift":
    default:
      return ROUTES.wegiftConfirmed;
  }
};

const formatVoucherName = (num: number, currencyType: string, name: string) => {
  switch (currencyType) {
    case "AVIOS":
      return `${formatMoney(num)} AVIOS`;
    case "HUGGG":
      return name;
    case "GBP":
    default:
      return `£${formatMoney(num)} ${name} VOUCHER`;
  }
};

const requestOptions: BaseQueryOptions = {
  fetchPolicy: "cache-first",
};

const RewardsContainer: FC<Props> = (props) => {
  const [tab, setTab] = useState("rewards");

  const handleTabChange = useCallback(async (newTab: Tab, componentId: string = "") => {
    setTab(newTab);

    if (componentId) {
      await Navigation.popToRoot(componentId);
    }
  }, []);

  const handleRewardsTabPress = useCallback(() => handleTabChange("rewards"), [handleTabChange]);
  const handlePurchasesTabPress = useCallback(() => handleTabChange("purchases"), [handleTabChange]);

  const { loading: purchasesAreLoading, data: purchases, refetch: refetchPurchases } = useQuery<GetAllPurchases>(
    GQL_QUERY_GET_ALL_PURCHASES,
    requestOptions
  );

  const { hasNotification, totalCoins, copy } = props;

  const items = useMemo(
    () =>
      (purchases && purchases.getAllPurchases ? purchases.getAllPurchases : []).map((purchase) => {
        const { id, amount, currency_code, name, status, createdAt, yuCoinsSpent } = purchase;
        const [day, month] = moment(new Date(createdAt).toISOString()).format("DD-MMM").split("-");
        const reward = formatVoucherName(amount, currency_code, name);
        const route = getConfirmedRoute(purchase.rewardProviderId);

        return {
          cost: `${yuCoinsSpent} yucoin`,
          day,
          id,
          month,
          onPress: () =>
            Navigation.push(props.componentId, {
              component: {
                id: route,
                name: route,
                passProps: {
                  onTabChange: handleTabChange,
                  purchase,
                },
                options: { bottomTabs },
              },
            }),
          reward,
          status,
        };
      }),
    [purchases, handleTabChange, props.componentId]
  );

  const handlePurchasesRefetch = useCallback(() => refetchPurchases(), [refetchPurchases]);

  const { loading: rewardsAreLoading, data: rewards, refetch: refetchRewards } = useQuery(
    GQL_QUERY_GET_REWARDS,
    requestOptions
  );

  const handleRewardsRefetch = useCallback(() => refetchRewards(), [refetchRewards]);

  const handleRewardDetailsItemPress = useCallback(
    async (reward: GetRewards_getRewards) => {
      if (!reward.available_denominations.length) {
        Logger.logMixpanelEvent("reward_viewed", {
          locked: true,
          reward_availability: reward.availability,
          reward_best_sticker: reward.reward_sticker,
          reward_code: reward.code,
          reward_name: reward.name,
        });

        await Navigation.showModal({
          component: {
            id: MODALS.rewards,
            name: MODALS.rewards,
            passProps: {
              ctaLabel: copy.newLockedReward.ctaLabel,
              heading: copy.newLockedReward.heading,
              onPress: () => Navigation.dismissModal(MODALS.rewards),
              subheading: copy.newLockedReward.subheading.replace("${rewardName}", reward.name),
            },
          },
        });
      } else {
        const route = getDetailsRoute(reward.rewardProviderId);

        await Navigation.push(props.componentId, {
          component: {
            id: route,
            name: route,
            passProps: {
              onTabChange: handleTabChange,
              reward,
            },
            options: { bottomTabs },
          },
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.copy]
  );

  if (tab === "purchases") {
    return (
      <PurchasedListScreen
        data={items}
        hasNotification={hasNotification}
        onLeftMenuPress={props.onLeftMenuPress}
        onLeftTabPress={handleRewardsTabPress}
        onRightTabPress={handlePurchasesRefetch}
        loading={purchasesAreLoading}
        totalCoins={totalCoins}
        copy={copy}
      />
    );
  }
  return (
    <RewardsListScreen
      data={rewards && rewards.getRewards ? rewards.getRewards : []}
      hasNotification={hasNotification}
      onItemPress={handleRewardDetailsItemPress}
      onLeftMenuPress={props.onLeftMenuPress}
      onLeftTabPress={handleRewardsRefetch}
      onRightTabPress={handlePurchasesTabPress}
      loading={rewardsAreLoading}
      totalCoins={totalCoins}
    />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  hasNotification: getHasNotification(state),
  totalCoins: getTotalCoins(state),
  copy: getCopy(state, "purchases"),
  currentLevel: getCurrentLevel(state),
});

export default connect<ConnectedState>(mapStateToProps)(RewardsContainer);
