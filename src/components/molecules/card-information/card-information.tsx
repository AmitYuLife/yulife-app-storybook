import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { Colours, Style, TemplateTextType, StyleSheet } from "@styles";
import { TextTemplate } from "@atoms";

export interface CardInformationItem {
  name?: string;
  type?: TemplateTextType;
  component?: React.ReactNode;
  style?: ViewStyle;
  separator?: boolean;
}

interface ICardInformation {
  title?: string;
  items: CardInformationItem[];
}
const CardInformation = ({ title, items }: ICardInformation) => (
  <>
    {title ? (
      <View style={styles.title}>
        <TextTemplate type="b1b">{title}</TextTemplate>
      </View>
    ) : null}
    <View style={styles.wrapper}>
      {items.map((item, index) => (
        <View key={index}>
          <View style={item.style}>
            {item?.name ? <TextTemplate type={item.type}>{item.name}</TextTemplate> : item?.component}
          </View>
          {item?.separator ? <View style={styles.separator} /> : null}
        </View>
      ))}
    </View>
  </>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.neutral.white,
    padding: Style.adjust(24),
    borderColor: Colours.neutral.n100,
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    marginBottom: 24,
  },
  separator: {
    width: "100%",
    marginVertical: Style.adjust(24),
    borderBottomWidth: 1,
    borderBottomColor: Colours.neutral.n100,
  },
});

export default memo(CardInformation);
