import React, { memo } from "react";
import { View, StyleSheet, TextStyle } from "react-native";
import { TextWithBoldText } from "@components/molecules";
import { Heading } from "../common";
import { Colours, Style } from "@styles";
import { Text } from "@atoms";

export interface AdditionalInformationItem {
  id: string;
  title: string;
  description: string;
  svg?: string;
}

export interface IAdditionalInformation {
  title?: string;
  items: AdditionalInformationItem[];
}

//TODO: Replace everywhere that uses this component to CardInformation component
const AdditionalInformation = ({ title, items }: IAdditionalInformation) => (
  <>
    {title ? <Heading title={title} /> : null}
    <View style={styles.wrapper}>
      {items.map((item, index) => (
        <View key={item.id}>
          <Text bold={true} style={styles.title}>
            {item.title}
          </Text>
          <TextWithBoldText style={styles.infoText} value={item.description} />
          {index + 1 !== items.length ? <View style={styles.separator} /> : null}
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

export default memo(AdditionalInformation);
