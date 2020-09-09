import React, { useRef, RefObject, useState } from "react";
import { connect } from "react-redux";
import { TextInput, View, StyleSheet } from "react-native";
import { styles } from "./fib-input-birth.styles";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { IReduxState } from "@redux/_core/reducers";
import { getFIBState } from "@redux/product/product.selectors";
import { InputField } from "../input-field";
import moment from "moment";

type ConnectedProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const _FibInputBirth = (props: ConnectedProps) => {
  const {
    fibState: { birthDay, birthMonth, birthYear },
    updateBirthDay,
    updateBirthMonth,
    updateBirthYear,
  } = props;

  const dayRef: RefObject<TextInput> = useRef(null);
  const monthRef: RefObject<TextInput> = useRef(null);
  const yearRef: RefObject<TextInput> = useRef(null);

  const [isDayFocus, setIsDayFocus] = useState(false);
  const [isMonthFocus, setIsMonthFocus] = useState(false);
  const [isYearFocus, setIsYearFocus] = useState(false);

  const validateDay = (text: string) => {
    const parsedText = Number(text);
    const isValid = !isNaN(parsedText) && parsedText >= 0 && parsedText < 32;
    const shouldFocusToNext = text.length > 1;

    if (!isValid) {
      return updateBirthDay("");
    }

    updateBirthDay(text);

    if (shouldFocusToNext) {
      if (!birthMonth) {
        return monthRef.current.focus();
      }

      if (!birthYear) {
        return yearRef.current.focus();
      }
    }
  };

  const validateMonth = (text: string) => {
    const parsedText = Number(text);
    const isValid = !isNaN(parsedText) && parsedText >= 0 && parsedText < 13;
    const shouldFocusToNext = text.length > 1;

    if (!isValid) {
      return updateBirthMonth("");
    }

    updateBirthMonth(text);

    if (shouldFocusToNext) {
      if (!birthYear) {
        yearRef.current.focus();
      }
    }
  };

  const validateYear = (text: string) => {
    const now = moment();
    const yearToday = now.year();
    const parsedText = Number(text);
    const yearsAgo = now.clone().subtract(70, "years").year();
    const allowedAge = text.length < 4 || parsedText >= yearsAgo;
    const isValid = !isNaN(parsedText) && parsedText <= yearToday && allowedAge;

    if (!isValid) {
      return updateBirthYear("");
    }

    updateBirthYear(text);
  };

  const handleBackspaceMonth = () => {
    if (!birthMonth.length) {
      dayRef.current.focus();
    }
  };

  const handleBackspaceYear = () => {
    if (!birthYear.length) {
      monthRef.current.focus();
    }
  };

  return (
    <View style={styles.wrapper}>
      <InputField
        forwardRef={dayRef}
        autoFocus={true}
        value={birthDay}
        onChangeText={validateDay}
        maxLength={2}
        inlineLabel="DD"
        style={StyleSheet.flatten([styles.textInput, isDayFocus ? {} : styles.textInputOnBlur])}
        hasFocusActive={setIsDayFocus}
        width={36}
      />
      <InputField
        autoFocus={false}
        forwardRef={monthRef}
        value={birthMonth}
        onChangeText={validateMonth}
        maxLength={2}
        inlineLabel="MM"
        onBackSpace={handleBackspaceMonth}
        style={StyleSheet.flatten([styles.textInput, isMonthFocus ? {} : styles.textInputOnBlur])}
        hasFocusActive={setIsMonthFocus}
        width={48}
      />
      <InputField
        autoFocus={false}
        forwardRef={yearRef}
        isLarge={true}
        value={birthYear}
        onChangeText={validateYear}
        maxLength={4}
        inlineLabel="YYYY"
        onBackSpace={handleBackspaceYear}
        width={60}
        style={StyleSheet.flatten([styles.textInput, isYearFocus ? {} : styles.textInputOnBlur])}
        hasFocusActive={setIsYearFocus}
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
