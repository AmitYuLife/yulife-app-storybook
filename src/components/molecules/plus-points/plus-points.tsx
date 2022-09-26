import React, { memo } from "react";
import { Platform, View } from "react-native";
import { TextTemplate } from "@atoms";
import { Colours } from "@styles";
import { addCommasToNumber } from "@utils";
import Plus from "./assets/plus";
import styles from "./plus-points.styles";
import { t } from "@locale";

interface IProps {
  coins: number;
  testID?: string;
}

const PlusPoints = ({ coins, testID }: IProps) => (
  <View
    style={styles.textWrapper}
    accessibilityLabel={t("molecules.coin_confetti.accessibility_label", { coins: addCommasToNumber(coins) })}
    accessible={Platform.select({ ios: true, android: false })}
    importantForAccessibility={"no"}
  >
    <View style={styles.plusWrapper}>
      <Plus scale={0.8} />
    </View>
    <TextTemplate type={"h1"} textAlign="center" color={Colours.darkHotPink} testID={testID} accessible={false}>
      {`${addCommasToNumber(coins)}`}
    </TextTemplate>
  </View>
);

export default memo(PlusPoints);
