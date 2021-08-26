import React from "react";
import { View, ScrollView, StyleSheet, ViewStyle } from "react-native";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { YugiHeader } from "@atoms";
import fibFaqItems from "@containers/products/fib/data/faq-fib-data";
import { FibLocalNavigation, FIB_FAQ } from "../../fib.types";
import { FibFaqsList } from "./fib.faqs-list";
import { IFibFAQ } from "../../data/faq-fib-data";
import { Style, Colours } from "@styles";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { YugiFAQIcon } from "@atoms/icon/yugi-faq-icon";

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
        <View style={styles.header}>
          <YugiHeader title="Frequently Asked Questions." icon={<YugiFAQIcon />} />
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
    backgroundColor: Colours.neutral.n50,
    paddingTop: Style.adjust(24),
  } as ViewStyle,
  headingWrapper: {
    paddingVertical: Style.adjust(24),
    paddingHorizontal: Style.adjust(32),
    borderBottomWidth: 1,
    borderColor: Colours.neutral.n100,
  } as ViewStyle,
  header: {
    paddingLeft: Style.adjust(24),
  },
});
