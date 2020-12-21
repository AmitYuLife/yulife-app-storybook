import React, { memo } from "react";
import { StyleSheet, ScrollView, ViewStyle, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Text } from "@atoms";
import { Style, Colours } from "@styles";
import Markdown from "@components/molecules/markdown/markdown";
import { IFibFAQ } from "@components/containers/products/fib/data/faq-fib-data";
import { Faq } from "../browse-packages/subcomponents/faqs/faq";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";

export interface IRedirectFAQ {
  faq: IFibFAQ;
  onPress: () => void;
}

interface IFibFaqScreenProps {
  onNavigateBack: () => void;
  faq: IFibFAQ;
  childFaqs?: IRedirectFAQ;
}

export const FibFaqScreen = memo(function (props: IFibFaqScreenProps) {
  const { onNavigateBack, faq, childFaqs } = props;

  const backHandler = React.useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView>
        <Animatable.View duration={500} animation="fadeIn" style={styles.flex} useNativeDriver={true}>
          <View style={styles.padding}>
            <Text bold={true} style={styles.header}>
              {faq.question}
            </Text>
            <Markdown text={faq.answer} containerStyle={styles.markdownContainer} markdownStyles={markdownStyles} />
          </View>
          {!childFaqs ? null : (
            <Faq
              label={childFaqs.faq.question}
              onPress={childFaqs.onPress}
              styles={redirectFAQStyles}
              redirectType="internal"
            />
          )}
        </Animatable.View>
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={onNavigateBack} />
    </View>
  );
});

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  } as ViewStyle,
  wrapper: {
    height: "100%",
  },
  markdownContainer: {
    marginBottom: Style.adjust(32),
    marginTop: Style.adjust(16),
  },
  header: {
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(32),
    letterSpacing: 1,
    color: Colours.neutral.n800,
    marginTop: Style.adjust(24),
  },
  padding: {
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
});

const markdownStyles = {
  text: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 1,
    color: Colours.neutral.n700,
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
};

const redirectFAQStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: Style.adjust(64),
    paddingHorizontal: Style.adjust(8),
    borderBottomWidth: 1,
    borderColor: Colours.neutral.n100,
  },
});
