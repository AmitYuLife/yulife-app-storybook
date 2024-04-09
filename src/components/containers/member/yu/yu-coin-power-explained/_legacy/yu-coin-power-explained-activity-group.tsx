import React, { memo } from "react";
import { styles } from "./yu-coin-power-explained.styles";
import { RawImage, TextTemplate } from "@atoms";
import { View } from "react-native";
import { GetYuCoinPowerExplainedQuery } from "@graphql/__generated";
const YU_COIN_SMALL = require("@assets/yuscreen/yu-coin-power-explained/yu-coin-small.png");

type DailyCoreActivities = GetYuCoinPowerExplainedQuery["getYuCoinPowerExplained"]["activities"]["dailyCoreActivities"];
type AdditionalActivities =
  GetYuCoinPowerExplainedQuery["getYuCoinPowerExplained"]["activities"]["additionalActivities"];
type Props = DailyCoreActivities | AdditionalActivities;

const YuCoinPowerExplainedActivityGroup = memo(({ items, title }: Props) => {
  return (
    <View style={styles.activityGroup}>
      <View style={styles.activityGroupTitle}>
        <TextTemplate type="b2b">{title}</TextTemplate>
      </View>
      <View style={styles.activityGroupItemsWrapper}>
        {items.map((item) => (
          <View key={item.label} style={styles.activityGroupItem}>
            <RawImage source={item.icon} style={styles.activityGroupItemIcon} />
            <TextTemplate type="l1">{item.label}</TextTemplate>
            <View style={styles.activityGroupItemYuCoinWrapper}>
              <TextTemplate type="l1b">{item.reward}</TextTemplate>
              <RawImage source={YU_COIN_SMALL} style={styles.activityGroupItemYuCoinIcon} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
});

export default YuCoinPowerExplainedActivityGroup;
