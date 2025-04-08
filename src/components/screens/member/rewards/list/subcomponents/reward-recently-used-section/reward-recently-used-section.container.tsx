import { Box } from "@atoms";
import { RewardOnPressArgs } from "@components/containers/member/rewards/rewards.types";
import { RewardSectionHeader } from "@components/molecules";
import { GetMobileRecentlyUsedRewardsListQuery } from "@graphql/__generated";
import { t } from "@locale";
import { RecentRewardCard } from "@organisms";
import { FlashList } from "@shopify/flash-list";
import { Style } from "@styles";
import { isEmpty } from "lodash";
import { memo, useCallback } from "react";
import { StyleSheet } from "react-native";

interface IRewardRecentlyUsedSectionContainerProps {
  recentRewards?: GetMobileRecentlyUsedRewardsListQuery["data"];
  onItemPress?: (item: RewardOnPressArgs) => void;
}

const MAX_ITEM_WIDTH = 105;
const ITEM_WIDTH = Math.min(Style.DEVICE_WIDTH / 2.5, MAX_ITEM_WIDTH);

type RecentlyUsedReward = GetMobileRecentlyUsedRewardsListQuery["data"]["recentlyUsedRewards"][0];
const RewardRecentlyUsedSectionContainer = ({
  recentRewards,
  onItemPress,
}: IRewardRecentlyUsedSectionContainerProps) => {
  const onPress = useCallback(
    (item: RecentlyUsedReward) => {
      onItemPress?.({
        id: item.id,
        name: item.name,
        sduiStepId: item.sduiStepId,
      });
    },
    [onItemPress]
  );

  const renderItem = useCallback(
    ({ item }: { item: RecentlyUsedReward }) => {
      return (
        <RecentRewardCard
          mr={20}
          label={item.name}
          imageUrl={item.image.uri}
          width={ITEM_WIDTH}
          onPress={() => onPress(item)}
        />
      );
    },
    [onPress]
  );

  if (isEmpty(recentRewards)) {
    return null;
  }

  return (
    <Box pb={15}>
      <RewardSectionHeader>{t("screens.rewards.list.recently_used")}</RewardSectionHeader>
      <FlashList
        horizontal={true}
        renderItem={renderItem}
        estimatedItemSize={Style.adjust(ITEM_WIDTH)}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        data={recentRewards.recentlyUsedRewards}
        contentContainerStyle={styles.container}
      />
    </Box>
  );
};

export default memo(RewardRecentlyUsedSectionContainer);

const styles = StyleSheet.create({
  container: {
    paddingLeft: Style.adjust(20),
    paddingRight: Style.adjust(10),
  },
});
