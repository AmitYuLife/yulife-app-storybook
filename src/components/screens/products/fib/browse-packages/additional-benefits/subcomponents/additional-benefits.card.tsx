import React, { memo } from "react";
import { View, ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";
import { TextWithBoldText } from "@components/molecules";
import { Style } from "../../../../../../../styles";

interface IProps {
  text: string;
  svg: string;
}
const AdditionalBenefitsCard = memo(function (props: IProps) {
  const { text, svg } = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        <View style={styles.imageWrapper}>
          <SvgXml xml={svg} width={72} height={72} />
        </View>
        <TextWithBoldText style={styles.infoText} value={text} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Style.adjust(16),
    marginTop: Style.adjust(16),
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  innerWrapper: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: Style.SCALE_UP_AND_DOWN(8),
    alignItems: "center",
    paddingVertical: Style.adjust(24),
    paddingHorizontal: Style.adjust(16),
  } as ViewStyle,
  infoText: {
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    lineHeight: 24,
    color: "#5A5A5C",
    letterSpacing: 1,
    width: Style.SCALE_UP_AND_DOWN(224),
  } as TextStyle,
  imageWrapper: {
    height: Style.SCALE_UP_AND_DOWN(72),
    width: Style.SCALE_UP_AND_DOWN(72),
    marginRight: Style.adjust(16),
  } as ImageStyle,
});

export default AdditionalBenefitsCard;
