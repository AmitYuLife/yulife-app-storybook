import { useSelector } from "react-redux";
import React, { memo, useMemo } from "react";
import LinearGradient from "react-native-linear-gradient";
import { View, ViewStyle } from "react-native";

import { Style, StyleSheet } from "@styles";
import { YUCOIN_POWER } from "@ids";
import { getUserEarnRate } from "@redux/user/user.selectors";
import { TouchableOpacityWithDelay } from "@components/molecules";

interface IYucoinPowerButtonBaseProps {
  style?: ViewStyle;
  onPress?: () => void;
  innerStyle?: ViewStyle;
  isShadowHidden?: boolean;
  children?: React.ReactNode;
}

const DEFAULT_BORDER_RADIUS = Style.adjust(20);

const GRADIENT = {
  colors: ["#FFE24A", "#FFEF53"],
  start: {
    x: 0,
    y: 0,
  },
  end: {
    x: 1,
    y: 0,
  },
};

const YucoinPowerButtonBase = ({
  style,
  onPress,
  children,
  innerStyle,
  isShadowHidden,
}: IYucoinPowerButtonBaseProps) => {
  const earnRate = useSelector(getUserEarnRate);

  /**
   * Ensures that the shadow always
   * has the same radius as the inner view.
   */
  const shadowStyle = useMemo((): ViewStyle => {
    return {
      ...styles.yucoinPowerButtonShadow,
      borderRadius: innerStyle?.borderRadius || DEFAULT_BORDER_RADIUS,
    };
  }, [innerStyle]);

  const combinedInnerStyle = useMemo((): ViewStyle => {
    return {
      ...styles.yucoinPowerButtonInner,
      ...innerStyle,
    };
  }, [innerStyle]);

  return (
    <TouchableOpacityWithDelay
      style={style}
      onPress={onPress}
      disabled={!onPress}
      accessibilityRole="button"
      testID={YUCOIN_POWER(earnRate)}
    >
      {isShadowHidden ? null : <View style={shadowStyle} />}
      <View style={combinedInnerStyle}>
        <LinearGradient
          end={GRADIENT.end}
          start={GRADIENT.start}
          colors={GRADIENT.colors}
          style={styles.yucoinPowerButtonBackground}
        />
        <View style={styles.yucoinPowerButtonShine} />
        {children}
      </View>
    </TouchableOpacityWithDelay>
  );
};

const styles = StyleSheet.create({
  yucoinPowerButtonInner: {
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FFE968",
    paddingVertical: Style.adjust(3),
    paddingHorizontal: Style.adjust(10),
    borderRadius: Style.adjust(DEFAULT_BORDER_RADIUS),
  },
  yucoinPowerButtonBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  yucoinPowerButtonShine: {
    top: 0,
    left: "-33%",
    width: "50%",
    height: "200%",
    position: "absolute",
    backgroundColor: "#FFF69F",
    transform: [{ rotate: "-25deg" }],
  },
  yucoinPowerButtonShadow: {
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "#ECB316",
    marginBottom: Style.adjust(-2),
    marginTop: Style.adjust(3),
    ...StyleSheet.absoluteFillObject,
  },
});

export default memo(YucoinPowerButtonBase);
