import { GQL_QUERY_GET_REWARDS } from "@graphql/rewards";
import { bottomTabs } from "@navigation/constants";
import React, { useCallback } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetRewards, GetRewards_getRewards } from "@graphql/_core/schema";
import { MODALS, ROUTES } from "@navigation/constants";
import { IReduxState } from "@redux/_core/reducers";
import { getCopy } from "@redux/copy/copy.selectors";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import Logger from "@services/logging/logger";
import { RewardsListScreen } from "@screens/index";
import { IMainTabsProps, showYuModal } from "@navigation/root";
import { useQueryOnScreenSeenOnce } from "@services/hooks/useQueryOnScreenSeenOnce";
import { PixelRatio } from "react-native";
import { Style } from "@styles";

interface IProps {
  onTabChange: (newTab: "rewards" | "purchases", componentId?: string) => void;
  onLeftMenuPress: IMainTabsProps["onLeftMenuPress"];
  componentId?: IMainTabsProps["componentId"];
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

type Props = IProps & ConnectedState;

function RewardsListContainer(props: Props) {
  const { copy, onTabChange } = props;

  const [getRewards, { loading, data: rewards }] = useQueryOnScreenSeenOnce<GetRewards>(
    GQL_QUERY_GET_REWARDS,
    ROUTES.rewards,
    {
      variables: {
        width: PixelRatio.get() * Style.adjust(375),
        height: PixelRatio.get() * Style.adjust(150),
      },
    }
  );

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

        await showYuModal({
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
        const route = ROUTES.rewardDetails;

        await Navigation.push(props.componentId, {
          component: {
            id: route,
            name: route,
            passProps: {
              onTabChange,
              rewardId: reward.id,
            },
            options: { bottomTabs },
          },
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.copy]
  );

  const handleRightTabPress = useCallback(() => onTabChange("purchases"), [onTabChange]);

  return (
    <RewardsListScreen
      data={rewards?.getRewards || []}
      onItemPress={handleRewardDetailsItemPress}
      onLeftMenuPress={props.onLeftMenuPress}
      onLeftTabPress={getRewards}
      onRightTabPress={handleRightTabPress}
      loading={loading}
    />
  );
}

const mapStateToProps = (state: IReduxState) => ({
  copy: getCopy(state, "purchases"),
  currentLevel: getCurrentLevel(state),
});
export default connect<ConnectedState>(mapStateToProps)(RewardsListContainer);
