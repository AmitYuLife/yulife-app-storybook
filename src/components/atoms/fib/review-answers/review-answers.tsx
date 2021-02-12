import React, { memo } from "react";
import { StyleSheet, View, ViewStyle, TextStyle } from "react-native";
import { Style } from "../../../../styles";
import { SvgFromXml } from "react-native-svg";
import TouchableOpacityWithDelay from "../../../molecules/touchable-opacity-delay/touchable-opacity-delay";
import Warning from "@atoms/text-input/assets/warning";
import { ArrowRightSvg, Text } from "@atoms";
import { UNDERWRITING_REVIEW_ANSWERS } from "@ids";

export interface IReviewAnswersProps {
  icon: string;
  title: string;
  answer: string;
  incomplete: boolean;
  onAnswerPress: () => void;
}

export const ReviewAnswers = memo(function (props: IReviewAnswersProps) {
  const { icon, answer, title, onAnswerPress, incomplete } = props;

  return (
    <TouchableOpacityWithDelay style={styles.wrapper} onPress={onAnswerPress}>
      <SvgFromXml xml={icon} />
      <View style={styles.textWrapper} testID={UNDERWRITING_REVIEW_ANSWERS(title, answer)}>
        <Text style={styles.title}>{title}</Text>
        {!incomplete ? (
          <Text style={styles.answer}>{answer}</Text>
        ) : (
          <View style={styles.incompleteWrapper}>
            <Text style={[styles.answer, styles.incompleteMessage]}>This question is missing answers</Text>
            <View style={styles.incompleteIcon}>
              <Warning width={22} height={20} />
            </View>
          </View>
        )}
      </View>
      <View style={styles.imageWrapper}>
        <ArrowRightSvg />
      </View>
      <View style={styles.delimiter} />
    </TouchableOpacityWithDelay>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 24,
    paddingTop: 15,
    paddingBottom: 8,
    minHeight: 80,
    width: "100%",
    flexDirection: "row",
  } as ViewStyle,
  textWrapper: {
    marginLeft: 8,
  } as ViewStyle,
  title: {
    width: Style.DEVICE_WIDTH * 0.65,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.8,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    color: "#464647",
  } as TextStyle,
  answer: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    color: "#5A5A5C",
    width: 256,
  } as TextStyle,
  delimiter: {
    width: Style.DEVICE_WIDTH,
    height: 1,
    backgroundColor: "#F3F3F3",
    position: "absolute",
    bottom: 0,
  } as ViewStyle,
  imageWrapper: {
    marginLeft: "auto",
    alignSelf: "center",
    marginRight: Style.adjust(7),
  } as ViewStyle,
  incompleteWrapper: {
    flexDirection: "row",
  } as ViewStyle,
  incompleteMessage: {
    color: "#FC0000",
    width: null,
  } as TextStyle,
  incompleteIcon: {
    marginLeft: 6,
  } as ViewStyle,
});
