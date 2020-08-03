import React from "react";
import { Image, View, StyleSheet, ImageStyle, ViewStyle } from "react-native";
import { Style } from "@styles";
import Text from "./card.text";

interface IProps {
  earnRate: number;
  hasCharmsOnly: boolean;
}

function Card(props: IProps) {
  const { earnRate, hasCharmsOnly } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.backgroundWrapper}>
        <Image style={styles.backgroundImage} source={require("./earnRateCard.png")} />
      </View>
      <View style={styles.textWrapper}>
        <View style={styles.leftPad} />
        <View>
          <Text hasCharmsOnly={hasCharmsOnly} earnRate={earnRate} />
        </View>
      </View>
    </View>
  );
}

export default Card;

const MARGIN_HORIZONTAL = Style.adjust(32);
const styles = StyleSheet.create({
  wrapper: {
    minHeight: Style.adjust(184),
    maxHeight: Style.adjust(200),
    overflow: "hidden",
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(16),
  } as ViewStyle,
  backgroundWrapper: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  } as ViewStyle,
  backgroundImage: {
    width: Style.DEVICE_WIDTH - MARGIN_HORIZONTAL,
    height: Style.adjust(180),
    overflow: "hidden",
    borderRadius: 16,
  } as ImageStyle,
  textWrapper: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 16,
    flexDirection: "row",
    paddingTop: Style.adjust(8),
  } as ViewStyle,
  leftPad: {
    width: Style.SCALE_UP_AND_DOWN(30),
  } as ViewStyle,
});
