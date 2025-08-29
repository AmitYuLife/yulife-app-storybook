import React, { memo } from "react";
import { View } from "react-native";
import Svg, { Path, RadialGradient, Stop } from "react-native-svg";

import { StyleSheet } from "@styles";
interface IProps {
  hasWhiteGlow?: boolean;
}

const Glow = ({ hasWhiteGlow = false }: IProps) => (
  <View style={styles.wrapper}>
    <Svg height="205" width="205" viewBox="0 0 410 410">
      <RadialGradient id="SVGID_1_" cx="205" cy="205" fx="205" fy="205" r="204.9995">
        <Stop offset="0" stopColor="#FFEC25" stopOpacity="0.3" />
        <Stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
      </RadialGradient>
      <RadialGradient id="SVGID_2_" cx="205" cy="205" fx="205" fy="205" r="204.9995">
        <Stop offset="0" stopColor="#FFFFFF" stopOpacity="0.8" />
        <Stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
      </RadialGradient>
      <Path
        fill={hasWhiteGlow ? "url(#SVGID_2_)" : "url(#SVGID_1_)"}
        d="M205,410c-9.8,0-19.7-0.7-29.4-2.1l28.5-198c0.3,0,0.5,0.1,0.8,0.1c0.6,0,1.2-0.1,1.6-0.2l65.1,189.1 C250.3,406.3,227.8,410,205,410z M156.4,404.2c-31.6-7.7-61.3-23.1-85.9-44.5l131.2-150.9c0.6,0.5,1.3,0.9,2,1.1L156.4,404.2z M289.9,391.6l-82.9-182c0.7-0.3,1.4-0.9,1.9-1.6l156.9,124C345.7,357.6,319.4,378.2,289.9,391.6z M56.5,346.3 C34,322.7,17.3,293.7,8.2,262.5l192-56c0.3,0.9,0.8,1.6,1.2,2L56.5,346.3z M377.2,316.2l-168-108.6c0.5-0.8,0.7-1.6,0.7-2 l199.1,19.2C405.9,257.2,394.9,288.9,377.2,316.2z M3.6,243.5C1.2,230.8,0,217.9,0,205c0-19.7,2.8-39.1,8.3-57.9l191.9,56.5 c-0.1,0.4-0.2,0.9-0.2,1.5c0,0.4,0,0.7,0.1,1L3.6,243.5z M410,205.2H210V205c0-0.9-0.2-1.6-0.5-2.2L387.2,111 c14.9,28.9,22.8,61.4,22.8,94V205.2z M200.3,203.2L14.7,128.6C26.8,98.5,46.2,71.3,70.8,50l130.9,151.2 C201.1,201.7,200.6,202.4,200.3,203.2z M209.3,202.4c-0.5-0.7-1.1-1.3-1.8-1.8L307.6,27.5c28.1,16.3,52.2,39.3,69.8,66.6 L209.3,202.4z M202.2,200.9L86.1,38C112.7,19,143.8,6.6,176.1,2l28.1,198C203.9,200.1,203.1,200.2,202.2,200.9z M207,200.4 c-0.6-0.3-1.2-0.4-2-0.4c-0.1,0-0.2,0-0.3,0L195.4,0.2c3.2-0.1,6.4-0.2,9.6-0.2c29.7,0,58.4,6.2,85.3,18.6L207,200.4z"
      />
    </Svg>
  </View>
);

export default memo(Glow);

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
});
