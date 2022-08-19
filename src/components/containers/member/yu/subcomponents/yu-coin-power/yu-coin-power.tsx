import React, { FC, memo } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@atoms";
import { Style } from "@styles";
import { getUserEarnRate } from "@redux/user/user.selectors";
import { useSelector } from "react-redux";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { showEarnRateOverlay } from "../../navigation/showEarnRateOverlay";
import FastImage from "react-native-fast-image";

interface Props {
  pressable?: boolean;
}

const YUCOIN_POWER_IMAGE = require("./assets/ycPowerBg.png");
const YUCOIN_POWER_INTERACTIVE_IMAGE = require("./assets/ycPowerInteractiveBg.png");

export const YuCoinPower: FC<Props> = memo(({ pressable = true }) => {
  const YuCoinPowerWrapper = pressable ? TouchableOpacityWithDelay : View;

  return (
    <YuCoinPowerWrapper onPress={pressable ? showEarnRateOverlay : null} style={styles.ycWrapperOuter}>
      <FastImage style={styles.ycPowerBg} source={pressable ? YUCOIN_POWER_INTERACTIVE_IMAGE : YUCOIN_POWER_IMAGE} />
      <Yc />
    </YuCoinPowerWrapper>
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
  },
  ycWrapperOuter: {
    alignItems: "flex-end",
  },
  ycPowerBg: {
    width: Style.adjust(182),
    height: Style.adjust(66),
  },
  ycPowerVal: {
    fontSize: Style.adjust(40),
    lineHeight: Style.adjust(40),
    color: "#D17C00", // TODO: ASK DESIGN FOR NAME
  },
  ycPowerDescriptionWrapper: {
    justifyContent: "center",
    marginLeft: Style.adjust(8),
  },
  ycPowerDescription: {
    fontSize: Style.adjust(18),
    lineHeight: Style.adjust(18),
    color: "#D17C00",
  },
});
