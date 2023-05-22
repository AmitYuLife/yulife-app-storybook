import { Colours, Style } from "@styles";
import { StyleSheet, Text } from "react-native";

type Props = {
  children: string;
};

export const Title = ({ children }: Props) => <Text style={styles.title}>{children}</Text>;

const styles = StyleSheet.create({
  title: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(20),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.6)),
    color: Colours.neutral.n800,
  },
});
