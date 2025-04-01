import React, { memo } from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  size?: number;
}

export const AchievementPointIcon = memo(({ size = 28 }: IProps) => (
  <Svg width={Style.adjust(size)} height={Style.adjust(size)} fill="none" viewBox="0 0 28 30">
    <Path
      fill="#7740FF"
      d="M4.667 17.25v10.977c0 .86.898 1.424 1.672 1.05L14 25.59l7.661 3.689a1.167 1.167 0 0 0 1.673-1.051V17.25L14 22.29l-9.334-5.04Z"
    />
    <Path fill="url(#a)" d="M26 13c0 6.627-5.373 12-12 12S2 19.627 2 13 7.373 1 14 1s12 5.373 12 12Z" />
    <Path fill="#E30D76" d="M23.477 12.885a9.477 9.477 0 0 1-18.954 0 9.477 9.477 0 1 1 18.954 0Z" />
    <Path fill="#F43E8E" d="M7.299 6.183 20.7 19.586A9.477 9.477 0 0 0 7.298 6.183Z" />
    <G filter="url(#b)">
      <Path
        fill="#FFED49"
        d="M13.271 5.142c.239-.733 1.276-.733 1.514 0l1.21 3.72c.106.329.411.55.756.55h3.912c.771 0 1.092.987.468 1.44l-3.165 2.3a.796.796 0 0 0-.289.89l1.209 3.72c.238.733-.601 1.343-1.225.89l-3.165-2.3a.796.796 0 0 0-.936 0l-3.164 2.3c-.624.453-1.463-.157-1.225-.89l1.209-3.72a.796.796 0 0 0-.29-.89l-3.164-2.3c-.624-.453-.303-1.44.468-1.44h3.912c.344 0 .65-.221.757-.55l1.208-3.72Z"
      />
    </G>
    <Path
      fill="#fff"
      d="m8.021 4 .463 1.526L10 6.02l-1.516.453L8.021 8l-.505-1.526L6 6.021l1.516-.495L8.02 4ZM23.021 14l.463 1.526L25 16.02l-1.516.453L23.021 18l-.505-1.526L21 16.021l1.516-.495L23.02 14Z"
    />
    <Defs>
      <LinearGradient id="a" x1={22} x2={0} y1={1} y2={27} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FF5AA2" />
        <Stop offset={1} stopColor="#E30D76" />
      </LinearGradient>
    </Defs>
  </Svg>
));
