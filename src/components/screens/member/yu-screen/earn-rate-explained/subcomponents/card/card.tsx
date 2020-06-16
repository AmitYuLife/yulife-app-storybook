import React from "react";
import { View, StyleSheet } from "react-native";
import { Style } from "@styles";
import EarnRateCard from "./background";
import Coins from "./background.coins";
import Text from "./card.text";

interface IProps {
  isAlpha: boolean;
  earnRate: number;
}

function Card(props: IProps) {
  const cardSize = Style.DEVICE_WIDTH - MARGIN_HORIZONTAL;
  const { earnRate, isAlpha } = props;

  return (
    <View style={styles.wrapper}>
      <EarnRateCard width={cardSize} />
      <Coins width="100%" />
      <Text earnRate={earnRate} isAlpha={isAlpha} />
      {/* {isAlpha ? <CharmCardText earnRate={earnRate} /> : <PowerUpCardText earnRate={earnRate} />} */}
    </View>
  );
}

export default Card;

const MARGIN_HORIZONTAL = 32;
const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 16,
    marginVertical: 32,
    minHeight: 184,
    maxHeight: 200,
    overflow: "hidden",
  },
});
