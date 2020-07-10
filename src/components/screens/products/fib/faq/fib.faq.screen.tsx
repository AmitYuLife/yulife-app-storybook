import React, { memo } from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import { GenericHeading, Heading } from "@atoms";
import { Style } from "@styles";
import Markdown from "@components/molecules/markdown/markdown";
import { IFibFAQ } from "@components/containers/products/fib/faq-fib-data";
import { Faq } from "../browse-packages/subcomponents/faqs/faq";

export interface IRedirectFAQ {
  faq: IFibFAQ;
  onPress: () => void;
}

interface IFibFaqScreenProps {
  onNavigateBack: () => void;
  faq: IFibFAQ;
  redirectToAnotherFAQ?: IRedirectFAQ;
}

export const FibFaqScreen = memo(function (props: IFibFaqScreenProps) {
  const { onNavigateBack, faq, redirectToAnotherFAQ } = props;

  return (
    <View style={styles.wrapper}>
      <GenericHeading heading="FAQ" onLeftIconPress={onNavigateBack} />
      <ScrollView>
        <Heading label={faq.question} style={styles.header} />
        <Markdown text={faq.answer} containerStyle={styles.markdownContainer} markdownStyles={styles} />
        {!redirectToAnotherFAQ ? null : (
          <Faq
            label={redirectToAnotherFAQ.faq.question}
            onPress={redirectToAnotherFAQ.onPress}
            styles={redirectFAQStyles}
          />
        )}
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
    left: 0,
    right: 0,
    height: "100%",
  },
  markdownContainer: {
    marginHorizontal: 32,
    marginBottom: 32,
  },
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: "#5A5A5C",
  },
  header: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 1,
    color: "#464647",
    marginTop: 32,
    textAlign: "left",
    marginHorizontal: 32,
    marginBottom: 16,
  },
  list: {
    marginBottom: 8,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 4,
  },
  listItemBullet: {
    marginTop: 10,
    width: 4,
    height: 4,
    backgroundColor: "black",
    borderRadius: 2,
    marginRight: 10,
  },
});

const redirectFAQStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: Style.adjust(16),
    minHeight: Style.adjust(64),
  },
});
