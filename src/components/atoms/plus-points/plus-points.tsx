import * as React from "react";
import { SFC } from "react";
import { View } from "react-native";
import Text from "../text/text";
import Plus from "./assets/plus";
import styles from "./plus-points.styles";

interface IProps {
  coins: number;
  testID?: string;
}

const PlusPoints: SFC<IProps> = ({ coins, testID }) => (
  <View style={styles.textWrapper}>
    <View style={styles.plusWrapper}>
      <Plus scale={0.8} />
    </View>
    <Text bold={true} style={styles.text} testID={testID}>{`${coins}`}</Text>
  </View>
);

export default PlusPoints;
