import React, { memo, ComponentProps } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";
import { Heading } from "../common";
import { Faq } from "../faqs/faq";
import { Button } from "@atoms";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";

interface IFaqs {
  items: Array<ComponentProps<typeof Faq>>;
  title?: string;
}

export const Documents = memo(({ items = [], title = "Documents" }: IFaqs) => {
  return (
    <View>
      <Heading title={title} />
      {items.map((item, i) => (
        <View key={i} style={styles.wrapper}>
          <Button
            type="Tertiary"
            size="Fill"
            onPress={item?.onPress}
            label={item?.label}
            height={Style.adjust(60)}
            iconSvgXml={item?.iconSvgXml}
            rightIcon={BUTTON_ICON.ARROW_RIGHT}
          />
        </View>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Style.adjust(10),
    marginTop: Style.adjust(8),
  } as ViewStyle,
});
