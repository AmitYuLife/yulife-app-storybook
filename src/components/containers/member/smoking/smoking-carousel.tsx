import { FC, memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { MobileGameEnterpriseGoalReward } from "@redux/health-smoking/health-smoking.types";
import { BattlePassList } from "@organisms";
import { Colours, Style } from "@styles";

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
        backgroundColour: item.backgroundColour ?? Colours.secondary.s100S3,
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
      <BattlePassList animationOffset={animationOffset} maxItemsToScroll={maxItemsToScroll} items={rewardListItems} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingTop: Style.adjust(16),
  },
});
