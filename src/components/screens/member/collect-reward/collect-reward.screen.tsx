import * as React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Heading, Pad } from "@atoms";
import styles from "./collect-reward.styles";
import { Button, CentredScreen, CoinConfetti } from "@molecules";
import { t } from "@locale";

interface IProps {
  heading?: string;
  onPress: () => void;
  yucoin: number;
  ctaLabel?: string;
}

const CollectReward: React.FC<IProps> = ({ onPress, heading, yucoin, ctaLabel }) => (
  <View style={StyleSheet.absoluteFill}>
    <CentredScreen style={styles.wrapper}>
      <CoinConfetti isExpanded={true} coins={yucoin} animationType="collect-reward" />
      <Pad height={8} />
      <View style={styles.dateWrapper}>{!heading ? null : <Heading size="small" bold={true} label={heading} />}</View>
      <Pad height={14} />
      <Button
        testID="collect-reward-screen-cta-button"
        size="Small"
        translatedLabel={ctaLabel || t("labels.cta.collect")}
        onPress={onPress}
      />
      <Pad height={Platform.OS === "ios" ? 100 : 50} />
    </CentredScreen>
  </View>
);

export default CollectReward;
