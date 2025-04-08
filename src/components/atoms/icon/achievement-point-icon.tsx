import React, { memo } from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  size?: number;
  locked?: boolean;
}

export const AchievementPointIcon = memo(({ size = 28, locked }: IProps) => (
  <Svg width={Style.adjust(size)} height={Style.adjust(size)} fill="none" viewBox="0 0 28 28">
    {locked ? <Disabled /> : <Enabled />}
  </Svg>
));

const Enabled = () => (
  <>
    <Path
      fill="#7740FF"
      d="M4.667 15.167v11.675c0 .852.898 1.412 1.672 1.042L14 23.431l7.66 4.453c.775.37 1.673-.19 1.673-1.042V15.167L14 20.16l-9.333-4.994Z"
    />
    <Path fill="url(#a)" d="M26 12c0 6.627-5.373 12-12 12S2 18.627 2 12 7.373 0 14 0s12 5.373 12 12Z" />
    <Path fill="#E30D76" d="M23.477 11.885a9.477 9.477 0 1 1-18.954 0 9.477 9.477 0 0 1 18.954 0Z" />
    <Path fill="#F43E8E" d="M7.299 5.183 20.7 18.586A9.477 9.477 0 0 0 7.298 5.183Z" />
    <G filter="url(#b)">
      <Path
        fill="#FFED49"
        d="M13.271 4.142c.238-.733 1.276-.733 1.514 0l1.21 3.72c.106.329.411.55.756.55h3.912c.771 0 1.092.987.468 1.44l-3.165 2.3a.796.796 0 0 0-.29.89l1.21 3.72c.238.733-.601 1.343-1.225.89l-3.165-2.3a.796.796 0 0 0-.936 0l-3.164 2.3c-.624.453-1.464-.157-1.225-.89l1.209-3.72a.796.796 0 0 0-.29-.89l-3.164-2.3c-.624-.453-.304-1.44.468-1.44h3.911c.345 0 .65-.221.757-.55l1.21-3.72Z"
      />
    </G>
    <Path
      fill="#fff"
      d="m8.021 3.5.463 1.526L10 5.52l-1.516.453L8.021 7.5l-.505-1.526L6 5.521l1.516-.495L8.02 3.5ZM23.021 13.5l.463 1.526L25 15.52l-1.516.453-.463 1.526-.505-1.526L21 15.521l1.516-.495.505-1.526Z"
    />
    <Defs>
      <LinearGradient id="a" x1={22} x2={0} y1={0} y2={26} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FF5AA2" />
        <Stop offset={1} stopColor="#E30D76" />
      </LinearGradient>
    </Defs>
  </>
);

const Disabled = () => (
  <>
    <Path
      fill="#A0A09B"
      d="M4.667 15.167v11.676c0 .851.898 1.41 1.672 1.041L14 23.431l7.66 4.453c.775.37 1.673-.19 1.673-1.041V15.167L14 20.16l-9.333-4.994Z"
    />
    <Path fill="url(#a)" d="M26 12c0 6.627-5.373 12-12 12S2 18.627 2 12 7.373 0 14 0s12 5.373 12 12Z" />
    <Path fill="#A0A09B" d="M23.477 11.885a9.477 9.477 0 1 1-18.954 0 9.477 9.477 0 0 1 18.954 0Z" />
    <Path fill="#A0A09B" d="M7.299 5.183 20.7 18.586A9.477 9.477 0 0 0 7.298 5.183Z" />
    <G filter="url(#b)">
      <Path
        fill="#FBFBFB"
        d="M13.271 4.142c.238-.733 1.276-.733 1.514 0l1.21 3.72c.106.329.411.55.756.55h3.912c.771 0 1.092.987.468 1.44l-3.165 2.3a.796.796 0 0 0-.29.89l1.21 3.72c.238.733-.601 1.343-1.225.89l-3.165-2.3a.796.796 0 0 0-.936 0l-3.164 2.3c-.624.453-1.464-.157-1.225-.89l1.209-3.72a.796.796 0 0 0-.29-.89l-3.164-2.3c-.624-.453-.304-1.44.468-1.44h3.911c.345 0 .65-.221.757-.55l1.21-3.72Z"
      />
    </G>
    <Defs>
      <LinearGradient id="a" x1={26} x2={0} y1={-5} y2={26} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D9D9D7" />
        <Stop offset={1} stopColor="#A0A09B" />
      </LinearGradient>
    </Defs>
  </>
);
