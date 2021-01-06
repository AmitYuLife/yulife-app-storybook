import React, { memo, useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  ViewStyle,
  ScrollView,
  TextStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
  View,
} from "react-native";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";
import Style from "../../../../../styles/style";
import { ReviewAnswers } from "@atoms/fib/review-answers/review-answers";
import { Button, CheckBox } from "@atoms";
import { IAnswer } from "../../../../../redux/product/product.selectors";
import { NativeScrollPoint } from "react-native";
import { IRightIcon } from "@atoms/generic-heading/generic-heading.types";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { Yugi, YugiType } from "../layouts/yugi";
import FibTitle from "@atoms/fib/title/title";

export interface IFibUnderwritingReviewAnswersScreenProps {
  onNavigateBack: () => void;
  answers: IAnswer[];
  onSubmitButton?: () => void;
  onAnswerPress: (questionId: string) => void;
  onScrollEnd: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  offset: NativeScrollPoint;
}

const RIGHT_ICON = { icon: "CLOSE" } as IRightIcon;

const _FibUnderwritingReviewAnswersScreen = memo(function (props: IFibUnderwritingReviewAnswersScreenProps) {
  const { onNavigateBack, onSubmitButton, onAnswerPress, onScrollEnd, answers, offset } = props;
  const scrollViewRef = useRef<ScrollView>(null);
  const [confirmed, setConfirmed] = useState(false);

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

  const toggleConfirmed = () => setConfirmed(!confirmed);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView
        contentContainerStyle={styles.scrollViewContentStyle}
        onMomentumScrollEnd={onScrollEnd}
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
      >
        <FibTitle title="Please take a quick look over your answers before submitting." />
        <View style={styles.pad} />
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
        <View style={checkboxStyles.wrapper}>
          <CheckBox
            checked={confirmed}
            value=""
            label="I confirm that I have understood and answered all the questions honestly, accurately and to the best of my knowledge."
            onChange={toggleConfirmed}
            textStyle={checkboxStyles.text}
          />
        </View>
        <Button
          type="Primary"
          size={"Large"}
          onPress={onSubmitButton}
          label={"Submit answers"}
          disabled={disableSubmitButton || !confirmed}
        />
      </ScrollView>
      <GenericHeadingAbsolute
        hideBorder={false}
        logo="yulife"
        rightIcon={RIGHT_ICON}
        onRightIconPress={onNavigateBack}
        onLeftIconPress={onNavigateBack}
      />
      <Yugi yugi={YugiType.REVIEW} />
    </View>
  );
});

export const FibUnderwritingReviewAnswersScreen = memo(_FibUnderwritingReviewAnswersScreen);

const styles = StyleSheet.create({
  wrapper: {
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
  pad: {
    height: Style.adjust(40),
  } as ViewStyle,
});

const checkboxStyles = StyleSheet.create({
  wrapper: {
    maxWidth: Style.DEVICE_WIDTH - 48,
    alignItems: "center",
    alignSelf: "center",
    marginVertical: Style.adjust(32),
  } as ViewStyle,
  text: {
    maxWidth: Style.DEVICE_WIDTH - 64,
  } as TextStyle,
});
