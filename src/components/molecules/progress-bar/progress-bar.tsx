import React from "react";
import { StyleSheet, View, ViewStyle, TextStyle } from "react-native";
import { Style, Colours } from "../../../styles";
import Svg, { Rect } from "react-native-svg";
import { YuCoinSvg } from "./yu-coin-svg";
import { Text } from "@atoms";

interface IProgressBarProps {
  currentPosition: number;
  maxLength: number;
  hideType?: "unrendered" | "invisible";
}

const YU_COIN_IMAGE_AND_TEXT_WIDTH = 58;
const HORIZONTAL_MARGINS = 48;
const MAX_UI_LENGTH = Style.DEVICE_WIDTH - HORIZONTAL_MARGINS - YU_COIN_IMAGE_AND_TEXT_WIDTH;

export default function ProgressBar(props: IProgressBarProps) {
  const { currentPosition, maxLength, hideType } = props;
  const safeCurrentPosition = currentPosition > maxLength ? maxLength : currentPosition;
  const currentProgressPercent = safeCurrentPosition / maxLength;
  const currentProgressUI = MAX_UI_LENGTH * currentProgressPercent;
  const shineWidth = currentProgressUI - 10;
  const safeShineWidth = shineWidth < 10 ? 0 : shineWidth;

  if (hideType === "unrendered") {
    return null;
  }

  if (hideType === "invisible") {
    return <View style={styles.emptyWrapper} />;
  }

  return (
    <View style={styles.wrapper}>
      <Svg width={MAX_UI_LENGTH} height={14} viewBox={`0 0 ${MAX_UI_LENGTH} 14`}>
        <Rect width={MAX_UI_LENGTH} height={14} rx={7} fill="#F0F0F0" />
        <Rect width={currentProgressUI} height={14} rx={7} fill="#F43E8E" />
        <Rect x={5} y={3} width={safeShineWidth} height={5} rx={2.5} fill="#F664A4" />
      </Svg>
      <YuCoinSvg style={styles.yuCoin} />
      <View style={styles.textWrapper}>
        <Text style={styles.text} bold={true}>
          200
        </Text>
      </View>
    </View>
  );
}

const PROGRESS_BAR_HEIGHT = Style.adjust(18);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    height: PROGRESS_BAR_HEIGHT,
    alignSelf: "center",
    width: Style.DEVICE_WIDTH - 48,
    alignItems: "center",
    marginTop: Style.adjust(16),
  } as ViewStyle,
  emptyWrapper: {
    height: PROGRESS_BAR_HEIGHT,
  } as ViewStyle,
  yuCoin: {
    marginLeft: Style.adjust(8),
  } as ViewStyle,
  textWrapper: {
    marginLeft: Style.adjust(4),
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(14),
    letterSpacing: 1,
    color: Colours.orange,
  } as TextStyle,
});
