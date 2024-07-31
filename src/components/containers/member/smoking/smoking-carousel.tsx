import { FC, memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { MobileGameEnterpriseGoalReward } from "@redux/health-smoking/health-smoking.types";
import { EnterpriseRewardList } from "@organisms";
import { Style } from "@styles";

interface Props {
  streak: MobileGameEnterpriseGoalReward[];
  animationOffset?: number;
  maxItemsToScroll?: number;
}

export const SmokingCarousel: FC<Props> = memo(({ streak, animationOffset = 0, maxItemsToScroll = 1 }) => {
  const rewardListItems = useMemo(
    () =>
      streak.map((item) => ({
        ...item,
        icon: {
          uri: item.icon?.uri,
          width: Style.adjust(64),
          height: Style.adjust(64),
        },
      })),
    [streak]
  );

  return (
    <View style={styles.container}>
      <EnterpriseRewardList
        animationOffset={animationOffset}
        maxItemsToScroll={maxItemsToScroll}
        items={rewardListItems}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: Style.adjust(16),
  },
});
