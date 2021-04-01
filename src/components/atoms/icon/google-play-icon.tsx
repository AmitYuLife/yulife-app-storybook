import * as React from "react";
import { Style } from "@styles";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

export const GooglePlayIcon = () => (
  <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24" fill="none">
    <Path fill="#fff" d="M0 0h24v24H0z" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.369 1.32C3.135 1.572 3 1.96 3 2.463V20.38c0 .504.135.891.378 1.134l.063.054 10.04-10.04v-.225L3.432 1.266l-.064.054z"
      fill="url(#prefix__paint0_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.82 14.888l-3.348-3.35v-.234l3.35-3.35.072.045 3.962 2.252c1.134.64 1.134 1.693 0 2.341l-3.962 2.251a4.3 4.3 0 00-.074.045z"
      fill="url(#prefix__paint1_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.893 14.843l-3.421-3.422L3.369 21.524c.37.396.99.441 1.684.054l11.84-6.735z"
      fill="url(#prefix__paint2_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.893 8L5.053 1.275C4.36.878 3.738.932 3.37 1.328l10.102 10.093 3.422-3.42z"
      fill="url(#prefix__paint3_linear)"
    />
    <Path
      opacity={0.2}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.82 14.771l-11.758 6.68c-.657.379-1.243.352-1.62.01l-.064.063.063.054c.378.341.964.369 1.62-.01l11.84-6.725-.08-.072z"
      fill="#000"
    />
    <Path
      opacity={0.12}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.854 12.475l-4.043 2.296.073.072 3.962-2.251c.567-.324.846-.747.846-1.17-.036.387-.324.756-.838 1.053z"
      fill="#000"
    />
    <Path
      opacity={0.25}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.053 1.392l15.802 8.977c.513.288.801.666.846 1.053 0-.422-.28-.846-.846-1.17L5.053 1.275C3.92.627 3 1.166 3 2.463v.117c0-1.296.919-1.828 2.053-1.188z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="prefix__paint0_linear"
        x1={12.579}
        y1={2.27}
        x2={-3.502}
        y2={6.555}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00A0FF" />
        <Stop offset={0.007} stopColor="#00A1FF" />
        <Stop offset={0.26} stopColor="#00BEFF" />
        <Stop offset={0.512} stopColor="#00D2FF" />
        <Stop offset={0.76} stopColor="#00DFFF" />
        <Stop offset={1} stopColor="#00E3FF" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint1_linear"
        x1={22.332}
        y1={11.422}
        x2={2.724}
        y2={11.422}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFE000" />
        <Stop offset={0.409} stopColor="#FFBD00" />
        <Stop offset={0.775} stopColor="orange" />
        <Stop offset={1} stopColor="#FF9C00" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint2_linear"
        x1={15.033}
        y1={13.283}
        x2={2.123}
        y2={35.011}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF3A44" />
        <Stop offset={1} stopColor="#C31162" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint3_linear"
        x1={0.826}
        y1={-4.64}
        x2={6.586}
        y2={5.064}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#32A071" />
        <Stop offset={0.069} stopColor="#2DA771" />
        <Stop offset={0.476} stopColor="#15CF74" />
        <Stop offset={0.801} stopColor="#06E775" />
        <Stop offset={1} stopColor="#00F076" />
      </LinearGradient>
    </Defs>
  </Svg>
);
