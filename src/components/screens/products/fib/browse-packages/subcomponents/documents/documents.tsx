import React, { memo, ComponentProps } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Heading, DEFAULT_TEXT_PAD_LEFT } from "../common";
import { Style } from "@styles";
import { Faq } from "../faqs/faq";

interface IFaqs {
  items: Array<ComponentProps<typeof Faq>>;
}

export const Documents = memo(({ items = [] }: IFaqs) => (
  <View style={styles.wrapper}>
    <Heading wrapperStyle={styles.headingWrapper} title="Documents" />
    {items.map((item, i) => (
      <Faq key={i} {...item} />
    ))}
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(48),
  } as ViewStyle,
  headingWrapper: {
    paddingLeft: DEFAULT_TEXT_PAD_LEFT,
  } as ViewStyle,
});
