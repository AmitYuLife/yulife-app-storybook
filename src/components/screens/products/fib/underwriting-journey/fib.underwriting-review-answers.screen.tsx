import React, { memo, useEffect, useRef } from "react";
import {
  StyleSheet,
  ViewStyle,
  Platform,
  ScrollView,
  Text,
  TextStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
  SafeAreaView,
} from "react-native";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";

import Style from "../../../../../styles/style";
import GenericHeading from "../../../../atoms/generic-heading/generic-heading";
import { ReviewAnswers } from "@atoms/fib/review-answers/review-answers";
import { Button } from "@atoms";
import { IAnswer } from "../../../../../redux/product/product.selectors";
import { NativeScrollPoint } from "react-native";

export interface IFibUnderwritingReviewAnswersScreenProps {
  onNavigateBack: () => void;
  answers: IAnswer[];
  onSubmitButton?: () => void;
  onAnswerPress: (questionId: string) => void;
  onScrollEnd: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  offset: NativeScrollPoint;
}

const _FibUnderwritingReviewAnswersScreen = memo(function (props: IFibUnderwritingReviewAnswersScreenProps) {
  const { onNavigateBack, onSubmitButton, onAnswerPress, onScrollEnd, answers, offset } = props;
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (offset && offset.y > 0) {
      setTimeout(() => {
        if (scrollViewRef.current && scrollViewRef.current.scrollTo) {
          scrollViewRef.current.scrollTo({ ...offset, animated: false });
        }
      }, 0);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const backHandler = React.useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  const disableSubmitButton = !!answers.filter((answer) => answer.incomplete).length;

  return (
    <SafeAreaView style={styles.wrapper}>
      <GenericHeading
        heading={"Review"}
        rightIcon={{ icon: "CLOSE" }}
        onRightIconPress={onNavigateBack}
        isBeta={true}
      />
      <ScrollView
        contentContainerStyle={styles.scrollViewContentStyle}
        onMomentumScrollEnd={onScrollEnd}
        ref={scrollViewRef}
      >
        {answers.map((item) => {
          return (
            <ReviewAnswers
              icon={item.icon}
              title={item.title}
              answer={item.answer}
              key={item.title}
              onAnswerPress={() => {
                onAnswerPress(item.questionId);
              }}
              incomplete={item.incomplete}
            />
          );
        })}
        <Text style={styles.agreementText}>I agree that all the above is accurate</Text>
        <Button
          type="Primary"
          size={"Large"}
          onPress={onSubmitButton}
          label={"Submit answers"}
          disabled={disableSubmitButton}
        />
      </ScrollView>
    </SafeAreaView>
  );
});

export const FibUnderwritingReviewAnswersScreen = memo(_FibUnderwritingReviewAnswersScreen);

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
    height: "100%",
  },
  scrollViewContentStyle: {
    paddingBottom: 16,
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
