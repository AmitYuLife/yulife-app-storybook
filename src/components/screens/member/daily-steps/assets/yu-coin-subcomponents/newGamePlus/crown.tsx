import * as React from "react";
import { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { Colours } from "@styles";

interface IProps {
  isGrayScale?: boolean;
}

const DEFAULT_COLORS = ["#FEED6A", "#FDEA66", "#FAE25B", "#F6D448", "#F0C02D", "#EDB720"];

const Crown = ({ isGrayScale }: IProps) => {
  const colors = isGrayScale ? Colours.toGrayScaleArray(DEFAULT_COLORS) : DEFAULT_COLORS;
  return (
    <>
      <Path
        d="M129.96 46.68c-16.916 4.92-43.24 5.438-61.537 0-1.813-3.02-3.712-9.839-3.625-14.586 0-1.208 1.467-1.985 2.589-1.812h.173c8.717 1.467 17.52-1.467 23.734-7.768 2.59-2.675 4.66-5.092 6.128-6.732 1.036-1.208 2.848-1.208 3.797 0 1.295 1.64 3.28 3.884 5.61 6.3 6.128 6.474 14.932 9.58 23.735 8.2.259 0 .432-.087.69-.087 1.209-.258 2.59.518 2.59 1.813-.087 9.062-3.798 14.327-3.884 14.672z"
        fill="url(#crown__paint0_linear)"
      />
      <Path d="M99.234 16.905a3.453 3.453 0 100-6.906 3.453 3.453 0 000 6.906z" fill="url(#crown__paint1_linear)" />
      <Path d="M64.452 32.181a3.452 3.452 0 100-6.905 3.452 3.452 0 000 6.905z" fill="url(#crown__paint2_linear)" />
      <Path d="M133.929 32.181a3.453 3.453 0 100-6.905 3.453 3.453 0 000 6.905z" fill="url(#crown__paint3_linear)" />
      <Defs>
        <LinearGradient
          id="crown__paint0_linear"
          x1={99.286}
          y1={14.608}
          x2={99.286}
          y2={51.108}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[0]} />
          <Stop offset={0.241} stopColor={colors[1]} />
          <Stop offset={0.469} stopColor={colors[2]} />
          <Stop offset={0.693} stopColor={colors[3]} />
          <Stop offset={0.912} stopColor={colors[4]} />
          <Stop offset={1} stopColor={colors[5]} />
        </LinearGradient>
        <LinearGradient
          id="crown__paint1_linear"
          x1={99.27}
          y1={9.935}
          x2={99.27}
          y2={16.985}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[0]} />
          <Stop offset={0.241} stopColor={colors[1]} />
          <Stop offset={0.469} stopColor={colors[2]} />
          <Stop offset={0.693} stopColor={colors[3]} />
          <Stop offset={0.912} stopColor={colors[4]} />
          <Stop offset={1} stopColor={colors[5]} />
        </LinearGradient>
        <LinearGradient
          id="crown__paint2_linear"
          x1={64.478}
          y1={25.195}
          x2={64.478}
          y2={32.245}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[0]} />
          <Stop offset={0.241} stopColor={colors[1]} />
          <Stop offset={0.469} stopColor={colors[2]} />
          <Stop offset={0.693} stopColor={colors[3]} />
          <Stop offset={0.912} stopColor={colors[4]} />
          <Stop offset={1} stopColor={colors[5]} />
        </LinearGradient>
        <LinearGradient
          id="crown__paint3_linear"
          x1={133.918}
          y1={25.195}
          x2={133.918}
          y2={32.245}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[0]} />
          <Stop offset={0.241} stopColor={colors[1]} />
          <Stop offset={0.469} stopColor={colors[2]} />
          <Stop offset={0.693} stopColor={colors[3]} />
          <Stop offset={0.912} stopColor={colors[4]} />
          <Stop offset={1} stopColor={colors[5]} />
        </LinearGradient>
      </Defs>
    </>
  );
};

export default Crown;
