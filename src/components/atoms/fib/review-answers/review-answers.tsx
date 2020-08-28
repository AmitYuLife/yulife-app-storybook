import React, { memo } from "react";
import { StyleSheet, View, ViewStyle, TextStyle, Text } from "react-native";
import { Style } from "../../../../styles";
import { SvgFromXml } from "react-native-svg";
import { arrowRightSvg } from "../../../screens/products/fib/browse-packages/subcomponents/faqs/svgs/svgArrowRight";
import TouchableOpacityWithDelay from "../../../molecules/touchable-opacity-delay/touchable-opacity-delay";

export interface IReviewAnswersProps {
  icon: string;
  title: string;
  answer: string;
  onAnswerPress: () => void;
}

export const ReviewAnswers = memo(function (props: IReviewAnswersProps) {
  const { icon, answer, title, onAnswerPress } = props;

  return (
    <TouchableOpacityWithDelay style={styles.wrapper} onPress={onAnswerPress}>
      <SvgFromXml xml={icon} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.answer}>{answer}</Text>
      </View>
      <View style={styles.imageWrapper}>
        <SvgFromXml height={18} width={18} xml={arrowRightSvg} />
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
    paddingRight: Style.adjust(24),
    alignSelf: "center",
  } as ViewStyle,
});
