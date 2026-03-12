import React, { useCallback, useMemo } from "react";
import { IConnectedScreenProps } from "../../../../../typings";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import { Style, NAV_BAR, Colours, StyleSheet } from "@styles";
import { RewardsListLayout } from "../subcomponents/rewards-layout";
import { RewardsListLoading } from "../subcomponents/rewards-loading";
import FirstTimeContentLocationSelection from "../../content-location/first-time-content-location-selection";
import { REWARDS_LIST_SCREEN, REWARDS_LIST_SCREEN_SCROLL } from "@ids";
import { InfoPanel, RewardSectionHeader } from "@components/molecules";
import { Box } from "@atoms";
import { RewardsListItem } from "./rewards-list.item";
import { GetMobileRecentlyUsedRewardsListQuery, GetMobileRewardsListQuery } from "@graphql/__generated";
import { t } from "@locale";
import moment from "moment";
import { get } from "lodash";
import { useUserFeatures } from "@hooks";
import RewardRecentlyUsedSectionContainer from "./subcomponents/reward-recently-used-section/reward-recently-used-section.container";

type IGetMobileRewardsListData = GetMobileRewardsListQuery["data"];

interface Props extends IConnectedScreenProps {
  rewardsData: IGetMobileRewardsListData;
  onItemPress: (item: IGetMobileRewardsListData["list"][0]) => void;
  onRefresh: () => void;
  onChangeStoreLocationPress: () => void;
  loading: boolean;
  recentRewards?: GetMobileRecentlyUsedRewardsListQuery["data"];
}

enum RewardListItemTypes {
  GoalProductMilestones = "GoalProductMilestones",
  RewardStoreExpiryWarning = "RewardStoreExpiryWarning",
  RewardsSectionHeader = "RewardSectionHeader",
  RewardRecentlyUsedSection = "RewardRecentlyUsed",
}

type IData =
  | IGetMobileRewardsListData["list"][number]
  | ({ __typename: (typeof RewardListItemTypes)[keyof typeof RewardListItemTypes] } & { children?: string });

const keyExtractor = (item: IData) => {
  if (typeof item === "string") {
    return `rewards-list_${item}`;
  }

  return get(item, "id") || item.__typename;
};

const RewardsListScreen = React.memo((props: Props) => {
  const { loading, onRefresh, rewardsData, onItemPress, recentRewards, onLeftMenuPress, onChangeStoreLocationPress } =
    props;

  const { tempGameNewRewardsScreen } = useUserFeatures();

  // can't use negation as we need to ignore null and undefined
  const shouldShowFirstTimeModal = rewardsData?.hasUserSelectedStoreLocation === false;

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<IData>) => {
      if (item.__typename === RewardListItemTypes.GoalProductMilestones) {
        return null;
      }

      if (item.__typename === "RewardStoreExpiryWarning") {
        if (!rewardsData?.rewardStoreAccessRevokesAt) {
          return null;
        }

        const daysLeft = moment(rewardsData.rewardStoreAccessRevokesAt).endOf("day").diff(moment(), "days");

        return (
          <Box mb={16} mx={16}>
            <InfoPanel
              type="warning"
              titleMarkdown={t("screens.rewards.expiry_warning.title")}
              markdown={t("screens.rewards.expiry_warning.body", { daysLeft })}
              showIcon={true}
            />
          </Box>
        );
      }

      if (item.__typename === RewardListItemTypes.RewardsSectionHeader) {
        return <RewardSectionHeader>{item.children}</RewardSectionHeader>;
      }

      if (item.__typename === RewardListItemTypes.RewardRecentlyUsedSection) {
        return <RewardRecentlyUsedSectionContainer recentRewards={recentRewards} onItemPress={onItemPress} />;
      }

      if (item.__typename === "MobileRewardsListItem") {
        return <RewardsListItem {...item} onPress={() => onItemPress(item)} />;
      }

      return null;
    },
    [rewardsData?.rewardStoreAccessRevokesAt, recentRewards, onItemPress]
  );

  const dataWithChiplist = useMemo(() => {
    if (!tempGameNewRewardsScreen) {
      return [
        { __typename: RewardListItemTypes.RewardStoreExpiryWarning },
        { __typename: RewardListItemTypes.GoalProductMilestones },
        ...(rewardsData?.list || []),
      ];
    }

    return [
      { __typename: RewardListItemTypes.RewardStoreExpiryWarning },
      { __typename: RewardListItemTypes.GoalProductMilestones },
      { __typename: RewardListItemTypes.RewardRecentlyUsedSection },
      { __typename: RewardListItemTypes.RewardsSectionHeader, children: t("screens.rewards.list.store") },
      ...(rewardsData?.list || []),
    ];
  }, [rewardsData?.list, tempGameNewRewardsScreen]);

  return (
    <RewardsListLayout
      showNavbar={false}
      onLeftMenuPress={onLeftMenuPress}
      Overlay={
        <FirstTimeContentLocationSelection
          isActive={shouldShowFirstTimeModal}
          contentLocation={rewardsData?.rewardStoreLocation}
          contentLocationLabel={rewardsData?.rewardStoreLocationLabel}
          onChangeContentLocationPress={onChangeStoreLocationPress}
          placement="rewards"
        />
      }
    >
      <View style={styles.listWrapper} testID={REWARDS_LIST_SCREEN}>
        {loading ? (
          <RewardsListLoading />
        ) : (
          <View style={styles.listWrapper}>
            <FlatList
              refreshing={loading}
              onRefresh={onRefresh}
              data={dataWithChiplist}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              testID={REWARDS_LIST_SCREEN_SCROLL}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainerStyle}
            />
          </View>
        )}
      </View>
      <View style={styles.navBarFiller} />
    </RewardsListLayout>
  );
});

export default RewardsListScreen;

const MARGIN = Style.adjust(16);

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.white,
    marginTop: Style.adjust(5),
  },
  chipListWrapper: {
    position: "absolute",
    width: "100%",
    height: Style.adjust(50),
    top: -Style.adjust(10),
    zIndex: 1,
    backgroundColor: Colours.neutral.white,
  },
  navBarFiller: {
    height: NAV_BAR.DEFAULT_FULL_HEIGHT,
  },
  productWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: MARGIN,
    marginBottom: MARGIN,
  },
  rewardsEventPanel: {
    marginHorizontal: MARGIN,
    marginBottom: MARGIN,
  },
  contentContainerStyle: {
    paddingTop: Style.adjust(60),
  },
});
