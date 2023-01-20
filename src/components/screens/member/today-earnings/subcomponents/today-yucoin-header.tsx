import React, { memo, useMemo } from "react";
import { ImageStyle, StyleSheet, View, ViewStyle } from "react-native";
import { YuCoinPower } from "@components/molecules";
import { TextTemplate, YuCoinBadge } from "@atoms";
import { Colours, Style } from "@styles";
import { ActiveBuffsButton } from "@organisms";
import { BuffArea } from "@graphql/_core/schema/globalTypes";
import { PressableWithDelay } from "@molecules";
import { showYuCoinPowerExplainedOverlay } from "@components/containers/member/yu/navigation/showYuCoinPowerExplainedOverlay";
import { t } from "@locale";
interface IProps {
  yuCoinToday: string | number;
  yuCoinPower: string | number;
  currentWorld: number;
  currentYuniverse: number;
}
const TodayYuCoinHeader = ({ yuCoinToday, yuCoinPower, currentWorld, currentYuniverse }: IProps) => {
  const buffTypes = useMemo(() => [BuffArea.stepsMilestone], []);

  return (
    <>
      <View style={styles.yuCoinWrapper}>
        <YuCoinBadge
          hasWhiteGlow={false}
          width={110}
          height={116}
          currentWorld={currentWorld}
          currentYuniverse={currentYuniverse}
        />
        <ActiveBuffsButton iconWidth={25} iconHeight={25} style={styles.activeBuffs} buffTypes={buffTypes} />
      </View>
      <View style={styles.wrapper}>
        <View
          style={styles.textWrapper}
          accessible={true}
          accessibilityLabel={t("screens.today_earning.yucoin_header.coins.accessibility.accessibility_label", {
            coins: yuCoinToday,
          })}
        >
          <TextTemplate type="l1" color={Colours.orange}>
            {t("screens.today_earning.yucoin_header.coins.earned_today")}
          </TextTemplate>
          <TextTemplate type="h1" color={Colours.orange}>
            {t("yu_coin.amount", { amount: yuCoinToday })}
          </TextTemplate>
        </View>
        <View style={styles.yuCoinPower}>
          <PressableWithDelay
            onPress={showYuCoinPowerExplainedOverlay}
            accessibilityLabel={t(
              "screens.today_earning.yucoin_header.yucoin_power.accessibility.accessibility_label",
              {
                power: yuCoinPower,
              }
            )}
            accessibilityRole={"button"}
          >
            <YuCoinPower coins={yuCoinPower} />
          </PressableWithDelay>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(40),
    backgroundColor: Colours.primary.p106,
    alignItems: "center",
    marginHorizontal: Style.adjust(24),
    borderRadius: 8,
    borderColor: Colours.primary.p105,
    borderWidth: 1,
    padding: Style.adjust(16),
    zIndex: 1,
  } as ViewStyle,
  yuCoinWrapper: {
    position: "absolute",
    alignSelf: "center",
    top: Style.adjust(-13),
    zIndex: 2,
  } as ViewStyle,
  activeBuffs: {
    position: "absolute",
    right: Style.adjust(18),
    top: Style.adjust(18),
  } as ViewStyle,
  activeBuffIcon: {
    width: Style.adjust(26),
    height: Style.adjust(26),
  } as ImageStyle,
  textWrapper: {
    alignItems: "center",
    marginTop: Style.adjust(35),
  } as ViewStyle,
  yuCoinPower: {
    marginTop: Style.adjust(8),
  } as ViewStyle,
});

export default memo(TodayYuCoinHeader);
