import React, { memo, ComponentProps } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Heading } from "../common";
import { Faq } from "../faqs/faq";

interface IFaqs {
  items: Array<ComponentProps<typeof Faq>>;
}

export const Documents = memo(({ items = [] }: IFaqs) => (
  <View>
    <Heading wrapperStyle={styles.headingWrapper} title="Documents" />
    {items.map((item, i) => (
      <View key={i} style={{ marginBottom: 10 }}>
        <Faq {...item} />
      </View>
    ))}
  </View>
));

const styles = StyleSheet.create({
  headingWrapper: {
    marginBottom: 24,
  } as ViewStyle,
});
