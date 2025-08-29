import React, { memo, useMemo } from "react";
import { Style, StyleSheet } from "@styles";
import LinearGradient from "react-native-linear-gradient";

const BottomShadow = () => {
  const { start, end, colors } = useMemo(
    () => ({
      start: { x: 0, y: 0 },
      end: { x: 0, y: 1 },
      colors: ["#D9D9D933", "#D9D9D900"],
    }),
    []
  );

  return <LinearGradient colors={colors} start={start} end={end} style={styles.shadow} />;
};

const styles = StyleSheet.create({
  shadow: { height: Style.adjust(7), width: "100%", position: "absolute", bottom: -7 },
});

export default memo(BottomShadow);
