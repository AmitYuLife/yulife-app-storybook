import * as React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Heading, Pad } from "@atoms";
import styles from "./collect-reward.styles";
import { Button, CentredScreen, CoinConfetti } from "@molecules";

interface IProps {
  date?: string;
  onPress: () => void;
  yucoin: number;
  ctaLabel?: string;
}

const CollectReward: React.FC<IProps> = ({ onPress, date, yucoin, ctaLabel }) => (
  <View style={StyleSheet.absoluteFill}>
    <CentredScreen style={styles.centredScreen}>
      <CoinConfetti isExpanded={true} coins={yucoin} animationType="collect-reward" />
      <Pad height={8} />
      <View style={styles.dateWrapper}>{!date ? null : <Heading size="small" bold={true} label={date} />}</View>
      <Pad height={14} />
      <Button size="Small" label={ctaLabel ? ctaLabel : "collect"} onPress={onPress} />
      <Pad height={Platform.OS === "ios" ? 100 : 50} />
    </CentredScreen>
  </View>
);

export default CollectReward;
