import { TextTemplate, YuCoinMiniSvg } from "@atoms";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Colours, Style } from "@styles";
import { memo } from "react";
import { Platform, StyleSheet, Text, View, ViewStyle } from "react-native";
import { t } from "@locale";
import { mapTypeToImage } from "./map-type-to-image";
import { mapTypeToPressHandler } from "./map-type-to-press-handler";
import { DoneNudgeIcon } from "@atoms/icon/nudge/done";
import { NUDGE_ITEM_MARGIN, NUDGE_ITEM_WIDTH } from "./styles";
import { CaretIcon } from "@atoms/icon/caret-icon";

type Props = {
  yuCoinAmount?: number;
  target?: string;
  type: string;
  done?: boolean;
};

export const NudgeItem = memo(({ yuCoinAmount, target, type, done }: Props) => {
  const pressHandler = done ? null : mapTypeToPressHandler(type);
  const Wrapper = pressHandler ? TouchableOpacityWithDelay : View;
  const opacity = { opacity: done ? 0.4 : 1 };
  const translationKey =
    type !== "active_challenge"
      ? `screens.yu.maximise.nudge.${type}`
      : Number(target) > 1
      ? `screens.yu.maximise.nudge.active_challenge_plural`
      : `screens.yu.maximise.nudge.active_challenge_singular`;

  return (
    <Wrapper style={styles.wrapper} onPress={pressHandler}>
      <View style={styles.imageWrapper}>{mapTypeToImage(type)}</View>
      <View style={[styles.titleWrapper, opacity]}>
        <Text numberOfLines={2} style={styles.center}>
          <Text>
            <TextTemplate numberOfLines={2} type="l1b">
              {t(translationKey, { target })}
            </TextTemplate>
            <View style={styles.inlineMargin} />
          </Text>
          {!yuCoinAmount ? null : (
            <View style={styles.yuCoinWrapper}>
              <TextTemplate type="l1b">
                {yuCoinAmount}
                <YuCoinMiniSvg style={styles.yuCoinMini} />
              </TextTemplate>
            </View>
          )}
        </Text>
      </View>
      <View style={styles.iconWrapper}>
        {done ? <DoneNudgeIcon /> : pressHandler ? <CaretIcon color={Colours.primary.p600} /> : null}
      </View>
    </Wrapper>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    height: Style.adjust(72),
    width: NUDGE_ITEM_WIDTH,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colours.neutral.n150,
    borderRadius: Style.adjust(8),
    marginLeft: NUDGE_ITEM_MARGIN,
    paddingRight: Style.adjust(16),
  } as ViewStyle,
  imageWrapper: {
    height: Style.adjust(72),
    width: Style.adjust(72),
    padding: Style.adjust(2),
  },
  titleWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    paddingVertical: Style.adjust(16),
    paddingHorizontal: Style.adjust(8),
  },
  iconWrapper: {
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  yuCoinMini: {
    transform: [
      { translateY: Platform.select({ ios: Style.adjust(2), android: Style.adjust(6) }) },
      { translateX: Style.adjust(2) },
    ],
  },
  yuCoinWrapper: {
    transform: [{ translateY: Style.adjust(3) }, { translateX: Style.adjust(0) }],
  },
  inlineMargin: {
    width: Style.adjust(3),
  },
});
