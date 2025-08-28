import React, { memo } from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, ViewStyle } from "react-native";

import { t } from "@locale";
import { Style, Colours } from "@styles";
import { ArrowIcon } from "@atoms/icon/arrow";
import { YucoinPowerButtonBase } from "@molecules";
import { TextTemplate, Box, Image } from "@atoms";
import { getUserEarnRate } from "@redux/user/user.selectors";
import { showYuCoinPowerExplainedOverlay } from "@components/containers/member/yu/navigation/showYuCoinPowerExplainedOverlay";

interface IYucoinPowerButtonProps {
  style?: ViewStyle;
  onPress?: () => void;
}

/**
 * A large button that displays the users YuCoin power
 * and allows them to navigate to the YuCoin Power modal.
 */
const YucoinPowerButton = ({ style, onPress = showYuCoinPowerExplainedOverlay }: IYucoinPowerButtonProps) => {
  const earnRate = useSelector(getUserEarnRate);

  return (
    <YucoinPowerButtonBase style={style} onPress={onPress}>
      <View style={styles.yucoinPowerButtonCoinWrapper}>
        <Image
          suppressLoadingUi={true}
          width={Style.adjust(68)}
          height={Style.adjust(68)}
          style={styles.yucoinPowerButtonCoin}
          source={require("@assets/icons/coin.png")}
        />
        <View>
          <TextTemplate color="#DB8200" type="h1">
            {earnRate}
          </TextTemplate>
        </View>
      </View>
      <View style={styles.yucoinPowerButtonTextWrapper}>
        <Box gap={6} flexDirection={"row"}>
          <TextTemplate type="h3" color={Colours.darkPink}>
            {t("molecules.yucoin_power_button.yucoin")}
          </TextTemplate>
          <TextTemplate type="h3" color={Colours.darkPink}>
            {t("molecules.yucoin_power_button.power")}
          </TextTemplate>
        </Box>
        <TextTemplate lineHeight={Style.adjust(15)} color={Colours.neutral.n900} type="l1">
          {t("molecules.yucoin_power_button.button_label")}
        </TextTemplate>
      </View>
      <View style={styles.yucoinPowerButtonArrow}>
        <ArrowIcon />
      </View>
    </YucoinPowerButtonBase>
  );
};

const styles = StyleSheet.create({
  yucoinPowerButtonCoinWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: Style.adjust(74),
    height: Style.adjust(68),
  },
  yucoinPowerButtonCoin: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  yucoinPowerButtonTextBold: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  },
  yucoinPowerButtonTextWrapper: {
    justifyContent: "center",
  },
  yucoinPowerButtonArrow: {
    marginStart: "auto",
  },
});

export default memo(YucoinPowerButton);
