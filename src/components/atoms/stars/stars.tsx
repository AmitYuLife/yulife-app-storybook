import React from "react";
import { View } from "react-native";
import { StarLeft, StarMid, StarRight } from "./assets";
import { getStyles } from "./stars.styles";
import { CHALLENGE_STARS } from "@ids";

interface IProps {
  isLeftHighlighted?: boolean;
  isMidHighlighted?: boolean;
  isRightHighlighted?: boolean;
  scale?: number;
}

export const Stars = ({ isLeftHighlighted, isMidHighlighted, isRightHighlighted, scale = 1 }: IProps) => {
  const styles = getStyles(scale);
  return (
    <View style={styles.wrapper} testID={CHALLENGE_STARS(isLeftHighlighted, isMidHighlighted, isRightHighlighted)}>
      <StarLeft isHighlighted={isLeftHighlighted} scale={scale} />
      <View style={styles.starMidWrapper}>
        <StarMid isHighlighted={isMidHighlighted} scale={scale} />
      </View>
      <StarRight isHighlighted={isRightHighlighted} scale={scale} />
    </View>
  );
};

export default Stars;
