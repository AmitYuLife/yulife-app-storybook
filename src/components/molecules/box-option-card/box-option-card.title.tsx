import { Colours, Style, StyleSheet } from "@styles";
// eslint-disable-next-line no-restricted-imports
import { Text, ViewStyle } from "react-native";

type Props = {
  children: string;
  numberOfLines?: number;
  style?: ViewStyle;
};

export const Title = ({ children, numberOfLines, style }: Props) => (
  <Text numberOfLines={numberOfLines} style={StyleSheet.flatten([styles.title, style])}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(20),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.6)),
    color: Colours.neutral.n800,
  },
});
