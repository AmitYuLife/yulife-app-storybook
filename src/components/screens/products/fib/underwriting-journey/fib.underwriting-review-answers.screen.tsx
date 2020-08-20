import React, { memo } from "react";
import { StyleSheet, ViewStyle, View, Platform, ScrollView, Text, TextStyle } from "react-native";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";

import Style from "../../../../../styles/style";
import GenericHeading from "../../../../atoms/generic-heading/generic-heading";
import { ReviewAnswers } from "@atoms/fib/review-answers/review-answers";
import { Button } from "@atoms";

export interface IFibUnderwritingReviewAnswersScreenProps {
  onNavigateBack: () => void;
  answers: { icon: string; title: string; answer: string }[];
  onSubmitButton?: () => void;
}

const _FibUnderwritingReviewAnswersScreen = memo(function (props: IFibUnderwritingReviewAnswersScreenProps) {
  const { onNavigateBack, onSubmitButton, answers } = props;

  const backHandler = React.useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  return (
    <View style={styles.wrapper}>
      <GenericHeading heading={"Review"} rightIcon={{ icon: "CLOSE" }} onRightIconPress={onNavigateBack} />
      <ScrollView contentContainerStyle={styles.scrollViewContentStyle}>
        {answers.map((item) => {
          return <ReviewAnswers icon={item.icon} title={item.title} answer={item.answer} key={item.title} />;
        })}
        <Text style={styles.agreementText}>I agree that all the above is accurate</Text>
        <Button type="Primary" size={"Large"} onPress={onSubmitButton} label={"Submit answers"} />
      </ScrollView>
    </View>
  );
});

export const FibUnderwritingReviewAnswersScreen = memo(_FibUnderwritingReviewAnswersScreen);

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
    height: "100%",
  },
  scrollViewContentStyle: {
    paddingBottom: 68,
  } as ViewStyle,
  agreementText: {
    marginTop: 42,
    marginBottom: 21,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.8,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    color: "#5A5A5C",
    width: "100%",
    textAlign: "center",
  } as TextStyle,
});
