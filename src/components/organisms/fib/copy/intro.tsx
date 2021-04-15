import React from "react";
import { StyleSheet, View, TextStyle, ViewStyle } from "react-native";
import { Text, TextTemplate } from "@atoms";
import { useSelector } from "react-redux";
import { getFullName } from "@redux/product/product.selectors";
import { Style } from "@styles";
import FibTitle from "@atoms/fib/title/title";

const COPY1 = `In order to get you covered, I’ll need to know a bit about you. `;
const COPY2 = `Your answers will not be seen by your employer.`;
const COPY3 = `\n\nI’ll send you 200 YuCoin for the approximately 5 minutes it takes to complete my questions! Ready?`;

export const CopyIntro = () => {
  const fullName = useSelector(getFullName);

  return (
    <View style={styles.wrapper}>
      <Text bold={true} style={FibTitle.TITLE_STYLE}>
        {`Let's get personal, ${fullName}.`}
      </Text>
      <View style={styles.paragraphWrapper}>
        <Text>
          <TextTemplate type="b2">{COPY1}</TextTemplate>
          <TextTemplate type="b2b">{COPY2}</TextTemplate>
          <TextTemplate type="b2">{COPY3}</TextTemplate>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: Style.DEVICE_WIDTH - Style.adjust(108),
    marginTop: Style.adjust(32),
  } as ViewStyle,
  paragraphWrapper: {
    marginTop: Style.adjust(24),
  } as TextStyle,
});
