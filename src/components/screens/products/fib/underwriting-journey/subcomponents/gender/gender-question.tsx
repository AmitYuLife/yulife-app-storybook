import React, { memo } from "react";
import { StyleSheet, ViewStyle, View, TextStyle } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getFIBState } from "@redux/product/product.selectors";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { Colours, Style } from "@styles";
import { FIB_GENDER_SCREEN_ID } from "../../../../../../containers/products/fib/data/underwriting-journey-data";
import { GenderIcon, Text } from "@atoms";
import { GenderIconType } from "../../../../../../atoms/gender/gender";
import { TouchableOpacityWithDelay } from "../../../../../../molecules";
import { SEX_BUTTON } from "@ids";

interface GenderBoxProps {
  title: string;
  icon: GenderIconType;
  color: string;
  active: boolean;
  backgroundColor: string;
  onGenderPress: () => void;
}

const genders = [
  {
    title: "Male",
    value: "M",
    icon: "male" as GenderIconType,
    color: Colours.ocean.up204,
    backgroundColor: Colours.ocean.up306,
  },
  {
    title: "Female",
    value: "F",
    icon: "female" as GenderIconType,
    color: Colours.primary.p400,
    backgroundColor: Colours.primary.p50,
  },
];

const GenderBox = memo(function ({ icon, color, title, active, backgroundColor, onGenderPress }: GenderBoxProps) {
  const shadow = active ? {} : { borderBottomColor: Colours.neutral.n100, borderBottomWidth: 4 };

  return (
    <TouchableOpacityWithDelay
      onPress={onGenderPress}
      activeOpacity={1}
      style={[styles.boxWrapper, { backgroundColor: active ? backgroundColor : null }, shadow]}
      testID={SEX_BUTTON(title, active)}
    >
      <View style={styles.iconWrapper}>
        <GenderIcon gender={icon} svgProps={{ color }} />
      </View>
      <View style={styles.textWrapper}>
        <Text bold={true} style={{ color }}>
          {title}
        </Text>
      </View>
    </TouchableOpacityWithDelay>
  );
});

const GenderQuestion = memo(function _GenderQuestion() {
  const dispatch = useDispatch();
  const currentGender = useSelector(getFIBState).answers[FIB_GENDER_SCREEN_ID];

  return (
    <View style={styles.wrapper}>
      {genders.map((genderOptions) => (
        <GenderBox
          key={genderOptions.value}
          title={genderOptions.title}
          icon={genderOptions.icon}
          color={genderOptions.color}
          backgroundColor={genderOptions.backgroundColor}
          active={currentGender === genderOptions.value}
          onGenderPress={() =>
            dispatch(updateFIBAnswerValue({ key: FIB_GENDER_SCREEN_ID, value: genderOptions.value }))
          }
        />
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginTop: Style.adjust(112, { shrinkMultiplier: 0.5, shrinkThreshold: Style.DEVICE_HEIGHT < 700 }),
    marginLeft: Style.adjust(32),
    marginRight: Style.adjust(8),
  } as ViewStyle,
  boxWrapper: {
    borderWidth: 1,
    borderColor: Colours.neutral.n100,
    borderRadius: 16,
    width: "40%",
    alignItems: "center",
    marginRight: Style.adjust(24),
    height: Style.adjust(104),
  } as ViewStyle,
  iconWrapper: { flexDirection: "column", height: "50%", paddingTop: Style.adjust(16) } as ViewStyle,
  textWrapper: { height: "50%", paddingVertical: Style.adjust(16) } as ViewStyle,
  genderBoxText: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.adjust(0.6),
  } as TextStyle,
});

export default GenderQuestion;
