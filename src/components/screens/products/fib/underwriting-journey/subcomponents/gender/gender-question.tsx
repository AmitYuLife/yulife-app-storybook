import React, { memo } from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getFIBState } from "@redux/product/product.selectors";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { Colours, Style } from "@styles";
import { FIB_GENDER_SCREEN_ID } from "@containers/products/fib/data/underwriting-journey-data";
import { BoxOption } from "@atoms";
import { GenderIconType } from "@atoms/gender/gender";
import { SEX_BUTTON } from "@ids";
import { BoxLabel } from "./box-label";

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

const GenderQuestion = memo(function _GenderQuestion() {
  const dispatch = useDispatch();
  const currentGender = useSelector(getFIBState).answers[FIB_GENDER_SCREEN_ID];

  return (
    <View style={styles.wrapper}>
      {genders.map(({ title, color, icon, value, backgroundColor }) => {
        const active = currentGender === value;

        return (
          <View key={value} style={styles.boxWrapper}>
            <BoxOption
              onPress={() => dispatch(updateFIBAnswerValue({ key: FIB_GENDER_SCREEN_ID, value }))}
              testID={SEX_BUTTON(title, active)}
              isSelected={active}
              selectedStyle={{
                borderColor: color,
                backgroundColor,
              }}
            >
              <BoxLabel color={color} icon={icon} title={title} />
            </BoxOption>
          </View>
        );
      })}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginTop: Style.adjust(112, { shrinkMultiplier: 0.5, shrinkThreshold: Style.DEVICE_HEIGHT < 700 }),
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  boxWrapper: {
    marginHorizontal: Style.adjust(12),
    flex: 1,
  } as ViewStyle,
});

export default GenderQuestion;
