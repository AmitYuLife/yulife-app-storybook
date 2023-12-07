import React, { FC, memo } from "react";
import { Circle, LinearGradient, Stop } from "react-native-svg";

interface IProps {
  radius: number;
  colour: string;
  colour2?: string;
  borderColour?: string;
}

export const LevelBubbleBackground: FC<IProps> = memo(({ radius, colour, colour2, borderColour }) => {
  if (colour2) {
    return (
      <>
        <Circle cx="0" cy="0" r={radius} stroke={borderColour} fill="url(#bubble_gradient)" />
        <LinearGradient id="bubble_gradient" x1="0" y1="28.5" x2="0" y2="-38.5" gradientUnits="userSpaceOnUse">
          <Stop stopColor={colour} />
          <Stop offset="1" stopColor={colour2} />
        </LinearGradient>
      </>
    );
  }

  return <Circle r={radius} stroke={borderColour} fill={colour} />;
});
