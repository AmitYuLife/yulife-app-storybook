import React, { memo, useMemo } from "react";
import { ImageStyle, StyleSheet, View, ViewStyle } from "react-native";
import { YuCoinPower } from "@components/molecules";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { ActiveBuffsButton } from "@organisms";
import { BuffArea } from "@graphql/_core/schema/globalTypes";
import { YuCoinIcon } from "@atoms/icon/yucoin-icon";
import { PressableWithDelay } from "@molecules";
import { showYuCoinPowerExplainedOverlay } from "@components/containers/member/yu/navigation/showYuCoinPowerExplainedOverlay";
import { YUCOIN_POWER } from "@ids";
interface IProps {
  yuCoinToday: string | number;
  yuCoinPower: string | number;
}
const TodayYuCoinHeader = ({ yuCoinToday, yuCoinPower }: IProps) => {
  const buffTypes = useMemo(() => [BuffArea.stepsMilestone], []);

  return (
    <View>
      <View style={styles.yuCoinWrapper}>
        <YuCoinIcon />
        <ActiveBuffsButton iconWidth={25} iconHeight={25} style={styles.activeBuffs} buffTypes={buffTypes} />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.textWrapper}>
          <TextTemplate type="l1" color={Colours.orange}>
            earned today
          </TextTemplate>
          <TextTemplate type="h1" color={Colours.orange}>
            {yuCoinToday} YuCoin
          </TextTemplate>
        </View>
        <View style={styles.yuCoinPower} testID={YUCOIN_POWER(yuCoinPower)}>
          <PressableWithDelay onPress={showYuCoinPowerExplainedOverlay}>
            <YuCoinPower coins={yuCoinPower} />
          </PressableWithDelay>
        </View>
      </View>
    </View>
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
    top: Style.adjust(7),
    zIndex: 2,
  } as ViewStyle,
  activeBuffs: {
    position: "absolute",
    right: 0,
    top: 0,
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
