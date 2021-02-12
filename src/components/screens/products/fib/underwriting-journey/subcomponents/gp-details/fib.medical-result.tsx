import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Colours } from "@styles";
import { Text } from "@atoms";
import Svg, { Path, Rect } from "react-native-svg";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { GP_LIST_ITEM } from "@ids";

interface MedicalResultProps {
  icon: "practice" | "GP";
  index: number;
  header: string;
  firstLine: string;
  secondLine?: string;
  thirdLine?: string;
  onPress: () => void;
}

const MedicalPracticeIcon = ({ color = "#80F6CD" }) => (
  <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
      fill={color}
    />
    <Path
      d="M20.4993 18.3604V21.0201M20.4993 21.0201V23.6804M20.4993 21.0201H23.2218M20.4993 21.0201L17.7773 21.0201"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Rect x="10" y="13.8001" width="21" height="15.2" rx="4" stroke="white" strokeWidth="2" />
    <Path
      d="M23.6518 13.7309V12C23.6518 10.8954 22.7564 10 21.6518 10H18.97C17.8654 10 16.97 10.8954 16.97 12V13.7309"
      stroke="white"
      strokeWidth="2"
    />
  </Svg>
);

const GPIcon = ({ color = "#80F6CD" }) => (
  <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
      fill={color}
    />
    <Path
      d="M29.6848 28.7895V26.3685C29.6848 25.0843 29.1747 23.8527 28.2666 22.9446C27.3585 22.0365 26.1269 21.5264 24.8427 21.5264H15.1585C13.8743 21.5264 12.6427 22.0365 11.7346 22.9446C10.8266 23.8527 10.3164 25.0843 10.3164 26.3685V28.7895"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.0003 16.6842C22.6745 16.6842 24.8424 14.5163 24.8424 11.8421C24.8424 9.16788 22.6745 7 20.0003 7C17.3261 7 15.1582 9.16788 15.1582 11.8421C15.1582 14.5163 17.3261 16.6842 20.0003 16.6842Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.999 25.1582V27.579M19.999 27.579V30.0003M19.999 27.579H22.4202M19.999 27.579L17.5781 27.579"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const getIconColor = (index: number) => {
  switch (index / 4 - Math.floor(index / 4)) {
    case 0:
      return "#80F6CD";
    case 0.75:
      return "#7EDCF5";
    case 0.5:
      return "#C7B4FD";
    case 0.25:
    default:
      return "#F186BA";
  }
};

export const FibMedicalResult = ({
  icon,
  index,
  header,
  firstLine,
  secondLine,
  thirdLine,
  onPress,
}: MedicalResultProps) => {
  return (
    <TouchableOpacityWithDelay onPress={onPress} testID={GP_LIST_ITEM(header)}>
      <View style={styles.wrapper}>
        <View style={styles.iconWrapper}>
          {icon === "practice" ? (
            <MedicalPracticeIcon color={getIconColor(index)} />
          ) : (
            <GPIcon color={getIconColor(index)} />
          )}
        </View>
        <View>
          <Text bold={true} style={styles.text}>
            {icon === "practice" ? header : `Dr. ${header}`}
          </Text>
          {firstLine ? <Text style={styles.text}>{firstLine}</Text> : null}
          {secondLine ? <Text style={styles.text}>{secondLine}</Text> : null}
          {thirdLine ? <Text style={styles.text}>{thirdLine}</Text> : null}
        </View>
      </View>
    </TouchableOpacityWithDelay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginVertical: 12,
  } as ViewStyle,
  iconWrapper: {
    marginRight: 16,
  } as ViewStyle,
  text: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: Colours.neutral.n800,
  } as TextStyle,
});

export default FibMedicalResult;
