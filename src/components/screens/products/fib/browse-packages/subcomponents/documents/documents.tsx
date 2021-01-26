import React, { memo, ComponentProps } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";
import { Heading } from "../common";
import { Faq } from "../faqs/faq";

interface IFaqs {
  items: Array<ComponentProps<typeof Faq>>;
  title?: string;
}

export const Documents = memo(({ items = [], title = "Documents" }: IFaqs) => (
  <View>
    <Heading title={title} />
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
