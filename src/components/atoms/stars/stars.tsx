import React from "react";
import { View } from "react-native";
import { StarLeft, StarMid, StarRight } from "./assets";
import styles from "./stars.styles";
import { CHALLENGE_STARS } from "@ids";

interface IProps {
  isLeftHighlighted?: boolean;
  isMidHighlighted?: boolean;
  isRightHighlighted?: boolean;
}

export const Stars = ({ isLeftHighlighted, isMidHighlighted, isRightHighlighted }: IProps) => {
  return (
    <View style={styles.wrapper} testID={CHALLENGE_STARS(isLeftHighlighted, isMidHighlighted, isRightHighlighted)}>
      <StarLeft isHighlighted={isLeftHighlighted} />
      <View style={styles.starMidWrapper}>
        <StarMid isHighlighted={isMidHighlighted} />
      </View>
      <StarRight isHighlighted={isRightHighlighted} />
    </View>
  );
};

export default Stars;
