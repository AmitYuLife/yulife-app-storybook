import React, { memo, ComponentProps } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";
import { Heading } from "../common";
import { Faq } from "../faqs/faq";

interface IFaqs {
  items: Array<ComponentProps<typeof Faq>>;
}

export const Documents = memo(({ items = [] }: IFaqs) => (
  <View>
    <Heading title="Documents" />
    {items.map((item, i) => (
      <View key={i} style={styles.wrapper}>
        <Faq {...item} />
      </View>
    ))}
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Style.adjust(10),
  } as ViewStyle,
});
