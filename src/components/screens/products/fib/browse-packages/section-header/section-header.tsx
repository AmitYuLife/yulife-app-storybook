import * as React from "react";
import { SFC } from "react";
import { StyleSheet, TextStyle } from "react-native";
import { Text } from "@atoms/index";
import { Style } from "@styles";

interface IProps {
  header: string;
}
const SectionHeader: SFC<IProps> = ({ header }) => {
  return <Text style={styles.header}>{header}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: Style.SCALE_UP_AND_DOWN(24),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    lineHeight: 32,
    color: "#464647",
    letterSpacing: 1,
    marginLeft: Style.adjust(32),
    marginTop: Style.adjust(48),
    marginBottom: Style.adjust(8),
  } as TextStyle,
});

export default SectionHeader;
