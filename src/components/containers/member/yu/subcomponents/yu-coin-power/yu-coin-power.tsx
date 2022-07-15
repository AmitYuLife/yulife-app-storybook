import React, { memo } from "react";
import { Image, ImageStyle, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { Text } from "@atoms";
import { Style } from "@styles";
import { getUserEarnRate } from "@redux/user/user.selectors";
import { useSelector } from "react-redux";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { showEarnRateOverlay } from "../../navigation/showEarnRateOverlay";

export const YuCoinPower = memo(() => {
  return (
    <TouchableOpacityWithDelay onPress={showEarnRateOverlay} style={styles.ycWrapperOuter}>
      <Image style={styles.ycPowerBg} source={require("./ycPowerBg.png")} />
      <Yc />
    </TouchableOpacityWithDelay>
  );
});

const Yc = () => {
  const earnRate = useSelector(getUserEarnRate);

  return (
    <View style={styles.ycWrapper}>
      <Text bold={true} style={styles.ycPowerVal}>
        {earnRate}
      </Text>
      <View style={styles.ycPowerDescriptionWrapper}>
        <Text bold={true} style={styles.ycPowerDescription}>
          YuCoin
        </Text>
        <Text style={styles.ycPowerDescription}>Power</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ycWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: Style.adjust(10),
    right: Style.adjust(72),
  } as ViewStyle,
  ycWrapperOuter: {
    alignItems: "flex-end",
  } as ViewStyle,
  ycPowerBg: {
    width: Style.adjust(182),
    height: Style.adjust(66),
  } as ImageStyle,
  ycPowerVal: {
    fontSize: Style.adjust(40),
    lineHeight: Style.adjust(40),
    color: "#D17C00", // TODO: ASK DESIGN FOR NAME
  } as ViewStyle,
  ycPowerDescriptionWrapper: {
    justifyContent: "center",
    marginLeft: Style.adjust(8),
  } as ViewStyle,
  ycPowerDescription: {
    fontSize: Style.adjust(18),
    lineHeight: Style.adjust(18),
    color: "#D17C00",
  } as TextStyle,
});
