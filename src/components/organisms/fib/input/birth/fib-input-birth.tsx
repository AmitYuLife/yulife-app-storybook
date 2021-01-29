import React, { useState } from "react";
import { connect } from "react-redux";
import { View, ViewStyle, StyleSheet, Appearance } from "react-native";
import moment from "moment";
import { styles } from "./fib-input-birth.styles";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { IReduxState } from "@redux/_core/reducers";
import { getFIBState } from "@redux/product/product.selectors";
import { Button } from "@atoms";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";
import DateTimePicker from "react-native-modal-datetime-picker";
import { BUTTON_TYPES } from "@atoms/button/button.types";
import { Colours } from "@styles";

type ConnectedProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & IProps;
interface IProps {
  label?: string;
  subLabel?: string;
  wrapperStyle?: ViewStyle;
}

const _FibInputBirth = (props: ConnectedProps) => {
  const {
    fibState: { birthDay, birthMonth, birthYear },
    updateBirthDay,
    updateBirthMonth,
    updateBirthYear,
    label,
    subLabel,
    wrapperStyle,
  } = props;

  const [showPicker, setShowPicker] = useState(false);

  function handleChange(date: Date) {
    setShowPicker(false);

    if (date) {
      const [year, month, day] = moment(date).format("YYYY-MM-DD").split("-");
      updateBirthDay(day);
      updateBirthMonth(month);
      updateBirthYear(year);
    }
  }

  function handlePress() {
    setShowPicker(true);
  }

  function handleCancel() {
    setShowPicker(false);
  }

  return (
    <View style={StyleSheet.flatten([styles.wrapper, wrapperStyle])}>
      <View style={styles.hiddenDatePickerWrapper} />
      <Button
        size="Fill"
        leftIcon={BUTTON_ICON.BIRTHDAY}
        rightIcon={BUTTON_ICON.EDIT}
        type={BUTTON_TYPES.TERTIARY}
        onPress={handlePress}
        label={label || `${birthDay} / ${birthMonth} / ${birthYear}`}
        tertiarySubLabel={subLabel}
      />
      <DateTimePicker
        date={moment(`${birthYear}-${birthMonth}-${birthDay}`, "YYYY-MM-DD").toDate()}
        mode="date"
        display="spinner"
        isVisible={showPicker}
        onConfirm={handleChange}
        onCancel={handleCancel}
        maximumDate={moment().toDate()}
        textColor={Appearance.getColorScheme() === "dark" ? Colours.neutral.white : Colours.neutral.n900}
      />
    </View>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  fibState: getFIBState(state).answers,
});

const mapDispatchToProps = {
  updateBirthDay: (value: string) => updateFIBAnswerValue({ key: "birthDay", value }),
  updateBirthMonth: (value: string) => updateFIBAnswerValue({ key: "birthMonth", value }),
  updateBirthYear: (value: string) => updateFIBAnswerValue({ key: "birthYear", value }),
};

const redux = connect(mapStateToProps, mapDispatchToProps);

export const FibInputBirth = redux(_FibInputBirth);
