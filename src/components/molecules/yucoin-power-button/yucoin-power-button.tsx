import React, { memo } from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { t } from "@locale";
import { YUCOIN_POWER } from "@ids";
import { Style, Colours } from "@styles";
import { ArrowIcon } from "@atoms/icon/arrow";
import { TextTemplate, Stack, Image } from "@atoms";
import { StackDirection } from "@atoms/stack/stack";
import { getUserEarnRate } from "@redux/user/user.selectors";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { showYuCoinPowerExplainedOverlay } from "@components/containers/member/yu/navigation/showYuCoinPowerExplainedOverlay";

interface IYucoinPowerButtonProps {
  style?: ViewStyle;
}

/**
 * A large button that displays the users YuCoin power
 * and allows them to navigate to the YuCoin Power modal.
 */
const YucoinPowerButton = memo(({ style }: IYucoinPowerButtonProps) => {
  const earnRate = useSelector(getUserEarnRate);

  return (
    <TouchableOpacityWithDelay
      style={style}
      accessibilityRole={"button"}
      testID={YUCOIN_POWER(earnRate)}
      onPress={showYuCoinPowerExplainedOverlay}
    >
      <View>
        <View style={styles.yucoinPowerButtonShadow} />
        <View style={styles.yucoinPowerButtonInner}>
          <LinearGradient
            end={{ x: 1, y: 0 }}
            start={{ x: 0, y: 0 }}
            colors={["#FFE24A", "#FFEF53"]}
            style={styles.yucoinPowerButtonBackground}
          />
          <View style={styles.yucoinPowerButtonShine} />
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
            <Stack gap={Style.adjust(8)} direction={StackDirection.horizontal}>
              <Text style={[styles.yucoinPowerButtonText, styles.yucoinPowerButtonTextBold]}>YuCoin</Text>
              <Text style={styles.yucoinPowerButtonText}>Power</Text>
            </Stack>
            <TextTemplate lineHeight={Style.adjust(15)} color={Colours.neutral.n900} type="l1">
              {t("molecules.yucoin_power_button.button_label")}
            </TextTemplate>
          </View>
          <View style={styles.yucoinPowerButtonArrow}>
            <ArrowIcon />
          </View>
        </View>
      </View>
    </TouchableOpacityWithDelay>
  );
});

const styles = StyleSheet.create({
  yucoinPowerButtonInner: {
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFE968",
    paddingLeft: Style.adjust(10),
    paddingRight: Style.adjust(15),
    borderRadius: Style.adjust(20),
    paddingVertical: Style.adjust(3),
  },
  yucoinPowerButtonBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  yucoinPowerButtonShine: {
    top: 0,
    left: 0,
    position: "absolute",
    width: Style.adjust(65),
    height: Style.adjust(200),
    backgroundColor: "#FFF69F",
    transform: [{ rotate: "-25deg" }],
  },
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
  yucoinPowerButtonText: {
    color: Colours.darkPink,
    fontSize: Style.adjust(24),
    letterSpacing: Style.getLetterSpacing(Style.adjust(1)),
  },
  yucoinPowerButtonTextBold: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  },
  yucoinPowerButtonTextWrapper: {
    justifyContent: "center",
  },
  yucoinPowerButtonArrow: {
    marginLeft: "auto",
  },
  yucoinPowerButtonShadow: {
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "#ECB316",
    marginBottom: Style.adjust(-2),
    borderRadius: Style.adjust(20),
    ...StyleSheet.absoluteFillObject,
  },
});

export default YucoinPowerButton;
