import React, { memo } from "react";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import { Colours } from "@styles";
import { addCommasToNumber } from "@utils";
import Plus from "./assets/plus";
import styles from "./plus-points.styles";

interface IProps {
  coins: number;
  testID?: string;
}

const PlusPoints = ({ coins, testID }: IProps) => (
  <View style={styles.textWrapper}>
    <View style={styles.plusWrapper}>
      <Plus scale={0.8} />
    </View>
    <TextTemplate type={"h1"} textAlign="center" color={Colours.darkHotPink} testID={testID}>
      {`${addCommasToNumber(coins)}`}
    </TextTemplate>
  </View>
);

export default memo(PlusPoints);
