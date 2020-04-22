import * as React from "react";
import { SFC } from "react";
import { View } from "react-native";
import { StarLeft, StarMid, StarRight } from "./assets";
import styles from "./stars.styles";

interface IProps {
  isLeftHighlighted?: boolean;
  isMidHighlighted?: boolean;
  isRightHighlighted?: boolean;
}

const Stars: SFC<IProps> = ({ isLeftHighlighted, isMidHighlighted, isRightHighlighted }) => {
  return (
    <View style={styles.wrapper}>
      <StarLeft isHighlighted={isLeftHighlighted} />
      <View style={styles.starMidWrapper}>
        <StarMid isHighlighted={isMidHighlighted} />
      </View>
      <StarRight isHighlighted={isRightHighlighted} />
    </View>
  );
};

export default Stars;
