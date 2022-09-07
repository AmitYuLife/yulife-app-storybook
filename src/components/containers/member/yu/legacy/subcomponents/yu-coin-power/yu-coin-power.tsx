import React, { memo, useContext } from "react";
import { View, Image, StyleSheet, ViewStyle, ImageStyle, TextStyle } from "react-native";
import { Text, TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Style, Colours } from "@styles";
import { YUCOIN_POWER } from "@ids";
import { showYuCoinPowerExplainedOverlay } from "../../../navigation/showYuCoinPowerExplainedOverlay";
import { YuScreenContext } from "../../../context/yu-screen.context";

const POWER_LABEL_TOP = "YuCoin Power";
const getInfo = (power: number) => {
  if (power < 2) {
    return (
      <TextTemplate color={Colours.orange} type="b2">
        To increase your YuCoin Power, check out your available gear.
      </TextTemplate>
    );
  }

  return (
    <TextTemplate color={Colours.orange} type="b2">
      Your items boost your YuCoin. For every 1 you would have earned, you now get{" "}
      <TextTemplate color={Colours.orange} type="b2b">
        {power}
      </TextTemplate>
      .
    </TextTemplate>
  );
};

const _YuCoinPower = () => {
  const { earnRate = 1 } = useContext(YuScreenContext);

  return (
    <TouchableOpacityWithDelay
      activeOpacity={1}
      onPress={showYuCoinPowerExplainedOverlay}
      style={styles.wrapper}
      testID={YUCOIN_POWER(earnRate.toString())}
    >
      <View style={styles.backgroundWrapper}>
        <Image resizeMode="stretch" style={styles.backgroundImage} source={require("./background.png")} />
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.powerWrapper}>
          <Text bold={true} style={styles.powerLabelTop}>
            {POWER_LABEL_TOP}
          </Text>
          <Text bold={true} style={styles.power}>
            {earnRate}
          </Text>
        </View>
        <View style={styles.infoWrapper}>{getInfo(earnRate)}</View>
      </View>
    </TouchableOpacityWithDelay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(24),
    height: Style.adjust(144),
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "transparent",
    marginHorizontal: Style.adjust(22),
  } as ViewStyle,
  backgroundWrapper: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  backgroundImage: {
    alignSelf: "center",
    borderRadius: 8,
    width: "100%",
    height: Style.adjust(144),
  } as ImageStyle,
  contentWrapper: {
    flexDirection: "row",
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: Style.adjust(8),
  } as ViewStyle,
  powerWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    marginTop: 12,
  } as ViewStyle,
  powerLabelTop: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(16),
    color: Colours.orange,
    letterSpacing: 1,
  } as TextStyle,
  power: {
    fontSize: Style.adjust(56),
    color: Colours.orange,
    marginTop: Style.adjust(8),
    letterSpacing: 1,
  } as TextStyle,
  infoWrapper: {
    marginLeft: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Style.adjust(8),
    width: "50%",
    paddingRight: Style.adjust(24),
  } as TextStyle,
});

export const YuCoinPower = memo(_YuCoinPower);
