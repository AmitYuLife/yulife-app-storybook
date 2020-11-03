import React from "react";
import { StyleSheet, View, ViewStyle, TextStyle, Text } from "react-native";
import { Style } from "../../../../styles";
import { SvgFromXml } from "react-native-svg";

interface ITitleProps {
  icon: string;
  title: string;
}

export default function TitleWithIcon(props: ITitleProps) {
  const { icon, title } = props;
  return (
    <View style={styles.wrapper}>
      <SvgFromXml xml={icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const TITLE_FONT_SIZE = Style.adjust(12);

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(24),
    height: Style.adjust(24),
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  title: {
    fontSize: TITLE_FONT_SIZE,
    lineHeight: TITLE_FONT_SIZE * 1.2,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: 1,
    color: "#838385",
    marginLeft: Style.adjust(8),
  } as TextStyle,
});
