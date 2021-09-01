import * as React from "react";
import { View } from "react-native";
import FastImage from "react-native-fast-image";
import { GetRewards_getRewards_uiSettings } from "@graphql/_core/schema";
import { Text } from "@atoms";
import { renderExchange, renderValue } from "./unlocked-overlay.helpers";
import styles from "./unlocked-overlay.styles";

interface IProps {
  cost: number;
  linkType?: string;
  rewardCurrency: string;
  rewardValue: number;
  settings?: GetRewards_getRewards_uiSettings;
  logoImageUri: string;
}

export default function UnlockedOverlay({
  cost,
  linkType,
  rewardCurrency,
  rewardValue,
  settings,
  logoImageUri,
}: IProps) {
  const height = (settings && settings.logoHeight) || 30;
  const width = (settings && settings.logoWidth) || 100;

  return (
    <View style={styles.unlockedContainer}>
      <FastImage resizeMode="contain" style={{ height, width }} source={{ uri: logoImageUri }} />
      <Text bold={true} style={styles.voucherText}>
        {settings && settings.offerHeading ? settings.offerHeading : renderValue(rewardValue, rewardCurrency, linkType)}
      </Text>
      <Text style={styles.costText}>
        {settings && settings.offerSubheading ? settings.offerSubheading : renderExchange(cost, rewardCurrency)}
      </Text>
    </View>
  );
}
