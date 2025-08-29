import { useSelector } from "react-redux";
import React, { memo, useMemo } from "react";
// eslint-disable-next-line no-restricted-imports
import { View, Text, ViewStyle } from "react-native";

import { t } from "@locale";
import { Style, Colours, StyleSheet } from "@styles";
import { ArrowIcon } from "@atoms/icon/arrow";
import { YucoinPowerButtonBase } from "@molecules";
import { Box, Image, TextTemplate } from "@atoms";
import { getUserEarnRate } from "@redux/user/user.selectors";
import { showYuCoinPowerExplainedOverlay } from "@components/containers/member/yu/navigation/showYuCoinPowerExplainedOverlay";

interface IYucoinPowerButtonMiniProps {
  style?: ViewStyle;
  onPress?: () => void;
}

const YucoinPowerButtonMini = ({ style, onPress = showYuCoinPowerExplainedOverlay }: IYucoinPowerButtonMiniProps) => {
  const earnRate = useSelector(getUserEarnRate);

  const yucoinPowerButtonStyle = useMemo((): ViewStyle => {
    return {
      ...styles.yucoinPowerButton,
      ...style,
    };
  }, [style]);

  return (
    <YucoinPowerButtonBase onPress={onPress} innerStyle={styles.yucoinPowerButtonInner} style={yucoinPowerButtonStyle}>
      <View style={styles.yucoinPowerButtonCoinWrapper}>
        <Image
          width={Style.adjust(28)}
          suppressLoadingUi={true}
          height={Style.adjust(28)}
          style={styles.yucoinPowerButtonCoin}
          source={require("@assets/icons/coin.png")}
        />
        <View>
          {/**
           * TODO: to be replaced with the new SVG coin component at a later date
           */}
          <Text style={styles.yucoinPowerButtonEarnRateText}>{earnRate}</Text>
        </View>
      </View>
      <View style={styles.yucoinPowerButtonTextWrapper}>
        <Box gap={4} flexDirection={"row"}>
          <TextTemplate type="l1b" color={Colours.darkPink}>
            {t("molecules.yucoin_power_button.yucoin")}
          </TextTemplate>
          <TextTemplate type="l1" color={Colours.darkPink}>
            {t("molecules.yucoin_power_button.power")}
          </TextTemplate>
        </Box>
      </View>
      <View style={styles.yucoinPowerButtonArrow}>
        <ArrowIcon size={Style.adjust(16)} />
      </View>
    </YucoinPowerButtonBase>
  );
};

const styles = StyleSheet.create({
  yucoinPowerButton: {
    alignSelf: "center",
    width: Style.adjust(140),
  },
  yucoinPowerButtonInner: {
    borderRadius: Style.adjust(8),
    paddingVertical: Style.adjust(1),
    paddingHorizontal: Style.adjust(3),
  },
  yucoinPowerButtonCoinWrapper: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: Style.adjust(30),
    height: Style.adjust(30),
  },
  yucoinPowerButtonCoin: {
    position: "absolute",
    left: Style.adjust(0),
  },
  yucoinPowerButtonEarnRateText: {
    color: Colours.orange,
    fontSize: Style.adjust(18),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  },
  yucoinPowerButtonTextWrapper: {
    marginStart: Style.adjust(3),
  },
  yucoinPowerButtonArrow: {
    marginStart: "auto",
  },
});

export default memo(YucoinPowerButtonMini);
