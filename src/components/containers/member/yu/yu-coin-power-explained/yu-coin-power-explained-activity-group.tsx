import React, { memo } from "react";
import { styles } from "./yu-coin-power-explained.styles";
import { TextTemplate } from "@atoms";

import {
  GetYuCoinPowerExplained_getYuCoinPowerExplained_activities_dailyCoreActivities as DailyCoreActivities,
  GetYuCoinPowerExplained_getYuCoinPowerExplained_activities_additionalActivities as AdditionalActivities,
} from "@graphql/_core/schema";
import { View } from "react-native";
import FastImage from "react-native-fast-image";

const YU_COIN_SMALL = require("@assets/yuscreen/yu-coin-power-explained/yu-coin-small.png");

type Props = DailyCoreActivities | AdditionalActivities;

const YuCoinPowerExplainedActivityGroup = memo(({ items, title }: Props) => {
  return (
    <View style={styles.activityGroup}>
      <View style={styles.activityGroupTitle}>
        <TextTemplate type="b2b">{title}</TextTemplate>
      </View>
      <View style={styles.activityGroupItemsWrapper}>
        {items.map((item, index) => (
          <View key={index} style={styles.activityGroupItem}>
            <FastImage source={item.icon} style={styles.activityGroupItemIcon} />
            <TextTemplate type="l1">{item.label}</TextTemplate>
            <View style={styles.activityGroupItemYuCoinWrapper}>
              <TextTemplate type="l1b">{item.reward}</TextTemplate>
              <FastImage source={YU_COIN_SMALL} style={styles.activityGroupItemYuCoinIcon} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
});

export default YuCoinPowerExplainedActivityGroup;
