import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export interface IProps {
  primaryColour?: string;
  secondaryColour?: string;
  onPress: () => void;
}

const Exit: React.SFC<IProps> = ({ primaryColour = "#ED9CA0", secondaryColour = "white", onPress }) => {
  const [opacity, setOpacity] = React.useState(1);

  const onPressIn = () => {
    setOpacity(0.5);
  };
  const onPressOut = () => {
    setOpacity(1);
    onPress();
  };

  return (
    <Svg onPressIn={onPressIn} onPressOut={onPressOut} width="32" height="32" viewBox="0 0 32 32" fill="none">
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
  );
};

export default Exit;
