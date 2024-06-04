import { Style } from "@styles";
import { Circle, Defs, LinearGradient, Path, RadialGradient, Stop, Svg } from "react-native-svg";

export const PlusOneChallengeBackgroundImageSvg = ({ size = Style.adjust(224) }: { size: number }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 224 224" fill="none">
      <Circle cx={112} cy={112} r={112} fill="url(#challenges_hint_0_linear_1_1012)" />
      <Circle cx={112} cy={112} r={86} fill="url(#challenges_hint_1_linear_1_1012)" />
      <Circle cx={112} cy={112} r={60} fill="url(#challenges_hint_2_radial_1_1012)" />
      <Path fill="url(#challenges_hint_3_linear_1_1012)" d="M112 136H113V145H112z" />
      <Path transform="rotate(180 113 82)" fill="url(#challenges_hint_4_linear_1_1012)" d="M113 82H114V91H113z" />
      <Circle cx={113} cy={112} r={28} fill="#0000001a" />
      <Circle cx={113} cy={109} r={27} fill="#E30D76" stroke="#fff" strokeWidth={2} />
      <Path
        d="M105.922 105.888c3.528 0 5.952 1.752 5.952 5.712 0 3.984-2.424 5.736-5.952 5.736-3 0-4.992-1.704-5.832-3.24a1.222 1.222 0 01-.168-.624 1.28 1.28 0 011.272-1.272c.408 0 .792.168 1.128.672.912 1.392 1.872 2.064 3.6 2.064 1.872 0 3.216-1.08 3.216-3.336 0-2.232-1.344-3.312-3.216-3.312-1.44 0-2.184.336-3.048.96-.312.216-.624.48-1.152.48-.696 0-1.296-.576-1.296-1.272 0-.144.024-.288.048-.408l1.2-6.216c.096-.456.528-.984 1.2-.984h7.2a1.23 1.23 0 011.224 1.224 1.23 1.23 0 01-1.224 1.224h-6.264l-.624 3.144c.552-.264 1.512-.552 2.736-.552zm14.5 9.024c2.472 0 3.528-1.776 3.528-6 0-4.176-1.056-6-3.528-6s-3.552 1.824-3.552 6c0 4.224 1.08 6 3.552 6zm0-14.4c4.272 0 6.264 2.664 6.264 8.4 0 5.76-1.992 8.424-6.264 8.424-4.32 0-6.288-2.664-6.288-8.424 0-5.736 1.968-8.4 6.288-8.4z"
        fill="#fff"
      />
      <Circle cx={133} cy={89} r={11.5} fill="#FCE93D" stroke="#FFE143" />
      <Path
        d="M133.703 90.948c0 .35-.294.644-.644.644h-1.862v1.848a.681.681 0 01-.672.672.681.681 0 01-.672-.672v-1.848h-1.862a.651.651 0 01-.644-.644c0-.35.294-.644.644-.644h1.862v-1.862c0-.364.308-.672.672-.672.364 0 .672.308.672.672v1.862h1.862c.35 0 .644.294.644.644zm2.381-4.298l-.812.546a.734.734 0 01-.462.154.777.777 0 01-.434-1.414l2.016-1.302c.154-.098.28-.168.49-.168.434 0 .798.364.798.798v8.05a.807.807 0 01-.798.798.807.807 0 01-.798-.798V86.65z"
        fill="#DB8200"
      />
      <Path
        d="M137 131l1.4 4.6 4.6 1.4-4.6 1.4-1.4 4.6-1.4-4.6-4.6-1.4 4.6-1.4 1.4-4.6zM90 77l1.167 3.833L95 82l-3.833 1.167L90 87l-1.167-3.833L85 82l3.833-1.167L90 77zM83 87l.7 2.3 2.3.7-2.3.7L83 93l-.7-2.3L80 90l2.3-.7.7-2.3z"
        fill="#FFD600"
      />
      <Defs>
        <LinearGradient
          id="challenges_hint_0_linear_1_1012"
          x1={112}
          y1={259.803}
          x2={119.481}
          y2={-130.129}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity={0.6} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="challenges_hint_1_linear_1_1012"
          x1={112}
          y1={225.492}
          x2={117.744}
          y2={-73.9205}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity={0.6} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <RadialGradient
          id="challenges_hint_2_radial_1_1012"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 -74.5 165.523 0 112 112)"
        >
          <Stop stopColor="#fff" stopOpacity={0} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.8} />
        </RadialGradient>
        <LinearGradient
          id="challenges_hint_3_linear_1_1012"
          x1={112.5}
          y1={136}
          x2={112.5}
          y2={145}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.33} stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="challenges_hint_4_linear_1_1012"
          x1={113.5}
          y1={82}
          x2={113.5}
          y2={91}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.33} stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
