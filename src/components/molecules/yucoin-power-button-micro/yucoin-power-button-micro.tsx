import React, { memo, useMemo } from "react";
// eslint-disable-next-line no-restricted-imports
import { View, Text, ViewStyle } from "react-native";

import { t } from "@locale";
import { Style, Colours, StyleSheet } from "@styles";
import { Image, TextTemplate } from "@atoms";
import { YucoinPowerButtonBase } from "@molecules";

interface IYucoinPowerButtonMicroProps {
  style?: ViewStyle;
  yuCoinPower?: string | number;
}

const YUCOIN_COIN_SIZE = 30;

const YucoinPowerButtonMicro = ({ style, yuCoinPower }: IYucoinPowerButtonMicroProps) => {
  const yucoinPowerButtonStyle = useMemo((): ViewStyle => {
    return {
      ...styles.yucoinPowerButton,
      ...style,
    };
  }, [style]);

  return (
    <YucoinPowerButtonBase
      isShadowHidden={true}
      style={yucoinPowerButtonStyle}
      innerStyle={styles.yucoinPowerButtonInner}
    >
      <View style={styles.yucoinPowerButtonCoinWrapper}>
        <Image
          suppressLoadingUi={true}
          style={styles.yucoinPowerButtonCoin}
          width={Style.adjust(YUCOIN_COIN_SIZE)}
          height={Style.adjust(YUCOIN_COIN_SIZE)}
          source={require("@assets/icons/coin.png")}
        />
        <View>
          {/**
           * TODO: to be replaced with the new SVG coin component at a later date
           */}
          <Text style={styles.yucoinPowerButtonEarnRateText}>{yuCoinPower}</Text>
        </View>
      </View>
      <View style={styles.yucoinPowerButtonTextWrapper}>
        <View>
          <TextTemplate type="l3b" color={Colours.darkPink}>
            {t("molecules.yucoin_power_button.yucoin")}
          </TextTemplate>
        </View>
        <View style={styles.yucoinPowerTextOffset}>
          <TextTemplate type="l3" color={Colours.darkPink}>
            {t("molecules.yucoin_power_button.power")}
          </TextTemplate>
        </View>
      </View>
    </YucoinPowerButtonBase>
  );
};

const styles = StyleSheet.create({
  yucoinPowerButton: {
    alignSelf: "center",
  },
  yucoinPowerButtonInner: {
    paddingStart: Style.adjust(5),
    borderRadius: Style.adjust(8),
    paddingEnd: Style.adjust(10),
    paddingVertical: Style.adjust(2),
  },
  yucoinPowerButtonCoinWrapper: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: Style.adjust(YUCOIN_COIN_SIZE),
    height: Style.adjust(YUCOIN_COIN_SIZE),
  },
  yucoinPowerButtonCoin: {
    position: "absolute",
    left: Style.adjust(0),
  },
  yucoinPowerTextOffset: {
    marginTop: Style.adjust(-6),
  },
  yucoinPowerButtonEarnRateText: {
    color: Colours.orange,
    fontSize: Style.adjust(14),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  },
  yucoinPowerButtonTextWrapper: {
    marginStart: Style.adjust(5),
  },
  yucoinPowerButtonArrow: {
    marginStart: "auto",
  },
});

export default memo(YucoinPowerButtonMicro);
