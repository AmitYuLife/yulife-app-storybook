import React, { memo } from "react";
import { View, Image, StyleSheet, ViewStyle, ImageStyle, TextStyle, Platform } from "react-native";
import { Text } from "@atoms";
import { TextWithBoldText, TouchableOpacityWithDelay } from "@components/molecules";
import { Style, Colours } from "@styles";
import media from "@styles/media";
import { showEarnRateOverlay } from "../../navigation/showEarnRateOverlay";
import { useQuery } from "@apollo/react-hooks";
import { GetYulifer } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { YUCOIN_POWER } from "@ids";

const POWER_LABEL_TOP = "YuCoin Power";
const getInfo = (power: number) =>
  power < 2
    ? "To increase your YuCoin Power, check out your available gear."
    : `Your items boosts your YuCoin. For every 1 you would have earned, you now get <bold>${power}</bold>.`;

const _YuCoinPower = () => {
  const { data } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });

  const yuCoinPower = data?.getYulifer?.earnRate || 1;

  return (
    <TouchableOpacityWithDelay
      activeOpacity={1}
      onPress={showEarnRateOverlay}
      style={styles.wrapper}
      testID={YUCOIN_POWER(yuCoinPower.toString())}
    >
      <View style={styles.backgroundWrapper}>
        <Image resizeMode="contain" style={styles.backgroundImage} source={require("./background.png")} />
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.powerWrapper}>
          <Text bold={true} style={styles.powerLabelTop}>
            {POWER_LABEL_TOP}
          </Text>
          <Text bold={true} style={styles.power}>
            {yuCoinPower}
          </Text>
        </View>
        <View style={styles.infoWrapper}>
          <TextWithBoldText style={styles.info} value={getInfo(yuCoinPower)} />
        </View>
      </View>
    </TouchableOpacityWithDelay>
  );
};

const INFO_WRAPPER_MARGIN_RIGHT = Platform.select({
  ios: Style.adjust(20),
  android: media.select(
    [
      {
        condition: Style.DEVICE_HEIGHT <= media.DEVICES.SamsungGalaxyA5.height,
        value: Style.adjust(12),
      },
    ],
    Style.adjust(20)
  ),
});

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(24),
    height: Style.adjust(144),
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "transparent",
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
    maxWidth: Style.adjust(343),
    marginBottom: Style.adjust(8),
  } as ViewStyle,
  powerWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: Style.adjust(144),
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
    maxWidth: Style.adjust(152),
    marginRight: INFO_WRAPPER_MARGIN_RIGHT,
  } as TextStyle,
  info: {
    color: Colours.orange,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
  } as TextStyle,
});

export const YuCoinPower = memo(_YuCoinPower);
