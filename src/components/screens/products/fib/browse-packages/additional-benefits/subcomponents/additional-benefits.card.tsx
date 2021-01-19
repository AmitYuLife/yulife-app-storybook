import React, { memo } from "react";
import { View, StyleSheet, TextStyle } from "react-native";
import { TextWithBoldText } from "@components/molecules";
import { Colours, Style } from "@styles";
import { Text } from "@atoms";

interface IProps {
  text: string;
  title: string;
  showSeparator: boolean;
}
const AdditionalBenefitsCard = memo(function (props: IProps) {
  const { text, title, showSeparator } = props;

  return (
    <View>
      <Text bold={true} style={styles.title}>
        {title}
      </Text>
      <TextWithBoldText style={styles.infoText} value={text} />
      {showSeparator ? <View style={styles.separator} /> : null}
    </View>
  );
});

const styles = StyleSheet.create({
  title: {
    color: Colours.neutral.n700,
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    marginBottom: 16,
  },
  separator: {
    width: "100%",
    paddingTop: Style.adjust(16),
    marginBottom: Style.adjust(24),
    borderBottomWidth: 1,
    borderBottomColor: Colours.neutral.n100,
  },
  infoText: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    color: Colours.neutral.n800,
    letterSpacing: 0.6,
  } as TextStyle,
});

export default AdditionalBenefitsCard;
