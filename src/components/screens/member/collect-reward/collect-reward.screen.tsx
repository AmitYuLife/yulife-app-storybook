import * as React from "react";
import { SFC } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Button, CentredScreen, CoinConfetti, Heading, Pad } from "../../../atoms";
import styles from "./collect-reward.styles";

interface IProps {
  date?: string;
  onPress: () => void;
  yucoin: number;
}

const CollectReward: SFC<IProps> = ({ onPress, date, yucoin }) => (
  <View style={StyleSheet.absoluteFill}>
    <CentredScreen style={styles.centredScreen}>
      <CoinConfetti isExpanded={true} coins={yucoin} animationType="collect-reward" />
      <Pad height={8} />
      <View style={styles.dateWrapper}>
        {!date ? null : <Heading size={Heading.Sizes.SMALL} bold={true} label={date} />}
      </View>
      <Pad height={14} />
      <Button type="PrimarySmall" label={"collect"} onPress={onPress} />
      <Pad height={Platform.OS === "ios" ? 100 : 50} />
    </CentredScreen>
  </View>
);

export default CollectReward;
