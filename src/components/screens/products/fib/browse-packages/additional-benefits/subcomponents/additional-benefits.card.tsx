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
      <View style={styles.imageWrapper}>
        <SvgXml xml={svg} width={72} height={72} />
      </View>
      <TextWithBoldText style={styles.infotText} value={text} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingLeft: Style.adjust(16),
    paddingRight: Style.adjust(16),
    paddingVertical: Style.adjust(32),
    backgroundColor: "#FFFFFF",
    borderRadius: Style.SCALE_UP_AND_DOWN(8),
    marginTop: Style.SCALE_UP_AND_DOWN(16),
    alignItems: "center",
    marginLeft: Style.adjust(16),
    marginRight: Style.adjust(16),
  } as ViewStyle,
  infotText: {
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
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
