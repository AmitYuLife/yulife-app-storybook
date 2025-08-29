import React, { memo, useMemo } from "react";
// eslint-disable-next-line no-restricted-imports
import { View, Text, ViewStyle } from "react-native";
import { t } from "@locale";
import { Style, Colours, StyleSheet } from "@styles";
import { YucoinPowerButtonBase } from "@molecules";
import { Box, Image, TextTemplate } from "@atoms";
import { YUCOIN_LABEL } from "@ids";

interface IYuCoinLabelProps {
  style?: ViewStyle;
  earnRate: string;
}

const YUCOIN_SIZE = 25;

const YuCoinLabel = ({ earnRate, style }: IYuCoinLabelProps) => {
  const yucoinPowerButtonStyle = useMemo((): ViewStyle => {
    return {
      ...styles.yucoinPowerButton,
      ...style,
    };
  }, [style]);

  return (
    <YucoinPowerButtonBase
      isShadowHidden={true}
      innerStyle={styles.yucoinPowerButtonInner}
      style={yucoinPowerButtonStyle}
    >
      <View style={styles.yucoinPowerButtonCoinWrapper}>
        <Image
          suppressLoadingUi={true}
          width={Style.adjust(YUCOIN_SIZE)}
          height={Style.adjust(YUCOIN_SIZE)}
          style={styles.yucoinPowerButtonCoin}
          source={require("@assets/icons/coin.png")}
        />
        <View>
          <Text style={styles.yucoinPowerButtonEarnRateText} testID={YUCOIN_LABEL(earnRate)}>
            {earnRate}
          </Text>
        </View>
      </View>
      <View style={styles.yucoinPowerButtonTextWrapper}>
        <Box gap={-5} flexDirection={"column"}>
          <TextTemplate type="l3b" color={Colours.darkPink}>
            {t("molecules.yucoin_power_button.yucoin")}
          </TextTemplate>
          <TextTemplate type="l3" color={Colours.darkPink}>
            {t("molecules.yucoin_power_button.power")}
          </TextTemplate>
        </Box>
      </View>
    </YucoinPowerButtonBase>
  );
};

const styles = StyleSheet.create({
  yucoinPowerButton: {
    alignSelf: "center",
  },
  yucoinPowerButtonInner: {
    borderRadius: Style.adjust(8),
    paddingVertical: Style.adjust(1),
    paddingStart: Style.adjust(3),
    paddingEnd: Style.adjust(7),
  },

  yucoinPowerButtonCoinWrapper: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: Style.adjust(YUCOIN_SIZE),
    height: Style.adjust(YUCOIN_SIZE),
  },
  yucoinPowerButtonCoin: {
    position: "absolute",
    start: Style.adjust(0),
  },
  yucoinPowerButtonEarnRateText: {
    color: Colours.orange,
    fontSize: Style.adjust(12),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  },
  yucoinPowerButtonTextWrapper: {
    marginStart: Style.adjust(5),
  },
  yucoinPowerButtonArrow: {
    marginStart: "auto",
  },
});

export default memo(YuCoinLabel);
