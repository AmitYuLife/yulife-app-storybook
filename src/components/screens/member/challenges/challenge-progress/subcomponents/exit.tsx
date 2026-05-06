import { useState } from "react";
import { Pressable } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { t } from "@locale";

export interface IProps {
  primaryColour?: string;
  secondaryColour?: string;
  onPress: () => void;
}

const Exit = ({ primaryColour = "#ED9CA0", secondaryColour = "white", onPress }: IProps) => {
  const [opacity, setOpacity] = useState(1);

  const onPressIn = () => setOpacity(0.5);
  const onPressOut = () => setOpacity(1);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={t("screens.challenge_progress.accessibility.exit_challenge")}
    >
      <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <Circle opacity={opacity} cx="16" cy="16" r="16" fill={primaryColour} />
        <Path
          d="M12 21L20 11"
          stroke={secondaryColour}
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M20 21L12 11"
          stroke={secondaryColour}
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Pressable>
  );
};

export default Exit;
