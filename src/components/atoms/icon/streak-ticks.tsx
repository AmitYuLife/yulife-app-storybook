import * as React from "react";
import { TextTemplate } from "@atoms";
import { Style, StyleSheet } from "@styles";
import { View, ViewStyle } from "react-native";
import Svg, { Mask, Path, G, Ellipse } from "react-native-svg";
import { STREAK_TICKS } from "@ids";
import { useTheme } from "@modules/themes/hooks/useTheme";
import { MobileGameTheme } from "@modules/themes/types";

interface IProps {
  checked: boolean;
  label: string;
}

export const StreakTicks = ({ checked, label }: IProps) => {
  const { theme } = useTheme();
  const { primary } = theme.colors;

  return (
    <View style={styles.wrapper} testID={STREAK_TICKS(label, checked)}>
      <Svg width={Style.adjust(41)} height={Style.adjust(41)} viewBox="0 0 41 41" fill="none">
        {checked ? <Checked colors={primary} /> : <UnChecked />}
      </Svg>
      {checked ? null : (
        <View style={styles.number}>
          <TextTemplate type="b1b">{label}</TextTemplate>
        </View>
      )}
    </View>
  );
};

interface IColorProps {
  colors: MobileGameTheme["colors"]["primary"];
}

const Checked = ({ colors }: IColorProps) => (
  <>
    <Mask id="prefix__a" x={0} y={0} width={41} height={41}>
      <Path
        d="M40.816 20.352c0 11.046-8.954 20-20 20s-20-8.954-20-20c0-11.045 8.954-20 20-20s20 8.955 20 20z"
        fill={colors.p40}
      />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        d="M40.816 20.352c0 11.046-8.954 20-20 20s-20-8.954-20-20c0-11.045 8.954-20 20-20s20 8.955 20 20z"
        fill={colors.p600Shadow}
      />
      <Path
        d="M40.816 17.446c0 11.046-8.954 20-20 20s-20-8.954-20-20c0-11.045 8.954-20 20-20s20 8.955 20 20z"
        fill={colors.p600}
      />
      <Ellipse
        cx={16.314}
        cy={6.984}
        rx={5.646}
        ry={2.474}
        transform="rotate(-20.959 16.314 6.984)"
        fill={colors.p80}
      />
    </G>
    <Path
      d="M29.816 12.674l-12.506 12-5.494-5.4"
      stroke="#FBFBFB"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);

const UnChecked = () => (
  <>
    <Mask id="prefix__a" x={0} y={0} width={40} height={40}>
      <Path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20z" fill="#DEDEF0" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20z" fill="#DEDEF0" />
      <Path
        d="M40 17.094c0 11.045-8.954 20-20 20s-20-8.955-20-20c0-11.046 8.954-20 20-20s20 8.954 20 20z"
        fill="#EFF0FA"
      />
    </G>
  </>
);
const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  number: {
    position: "absolute",
  } as ViewStyle,
});
