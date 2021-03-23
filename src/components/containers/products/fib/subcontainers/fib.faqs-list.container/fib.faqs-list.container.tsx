import React from "react";
import { View, ScrollView, StyleSheet, ViewStyle, TextStyle } from "react-native";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { Text } from "@atoms";
import fibFaqItems from "../../../../../containers/products/fib/data/faq-fib-data";
import { FibLocalNavigation, FIB_FAQ } from "../../fib.types";
import { FibFaqsList } from "./fib.faqs-list";
import { IFibFAQ } from "../../data/faq-fib-data";
import { Style, Colours } from "@styles";
import { useBackHandler } from "@services/hooks/useBackHandler";

interface Props {
  navigation: FibLocalNavigation;
  selectFaq: (id: string) => void;
}

const FibFaqListContainer = (props: Props) => {
  const { navigation, selectFaq } = props;
  const faqs = fibFaqItems.map((faq: IFibFAQ) => ({
    label: faq.question,
    onPress: () => {
      navigation.push(FIB_FAQ);
      return selectFaq(faq.id);
    },
  }));

  useBackHandler(() => {
    navigation.pop();
    return true;
  });

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headingWrapper}>
          <Text bold={true} style={styles.heading}>
            FAQs
          </Text>
        </View>
        <FibFaqsList faqs={faqs} />
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={navigation.pop} />
    </View>
  );
};

export default FibFaqListContainer;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  headingWrapper: {
    paddingVertical: Style.adjust(24),
    paddingHorizontal: Style.adjust(32),
    borderBottomWidth: 1,
    borderColor: Colours.neutral.n100,
  } as ViewStyle,
  heading: {
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(32),
    letterSpacing: 1,
    color: Colours.neutral.n700,
  } as TextStyle,
});
