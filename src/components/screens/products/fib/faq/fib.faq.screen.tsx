import React, { memo } from "react";
import { StyleSheet, ScrollView, ViewStyle, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { TextTemplate, Icon } from "@atoms";
import { Style, Colours } from "@styles";
import Markdown from "@components/molecules/markdown/markdown";
import { IFibFAQ } from "@components/containers/products/fib/data/faq-fib-data";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { PressableWithDelay } from "@components/molecules";

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
          <View style={styles.container}>
            <TextTemplate type="h2">{faq.question}</TextTemplate>
            <Markdown text={faq.answer} containerStyle={styles.markdownContainer} />
          </View>
          {!childFaqs ? null : <Faq label={childFaqs.faq.question} onPress={childFaqs.onPress} />}
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
  container: {
    marginTop: Style.adjust(24),
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
  arrowRight: {
    marginLeft: "auto",
  } as ViewStyle,
  childFaqWrapper: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: Style.adjust(64),
    borderBottomWidth: 1,
    borderBottomColor: Colours.neutral.n100,
    paddingVertical: Style.adjust(16),
    paddingRight: Style.adjust(8),
    paddingLeft: Style.adjust(24),
  } as ViewStyle,
});

const Faq = ({ label, onPress }: { label: string; onPress: () => void }) => (
  <PressableWithDelay style={styles.childFaqWrapper} onPress={onPress}>
    <TextTemplate type="b2b">{label}</TextTemplate>
    <View style={styles.arrowRight}>
      <Icon.ArrowRight />
    </View>
  </PressableWithDelay>
);
