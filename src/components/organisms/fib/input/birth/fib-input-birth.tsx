import React, { useRef, RefObject, useEffect } from "react";
import { connect } from "react-redux";
import { TextInput, View } from "react-native";
import { styles } from "./fib-input-birth.styles";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { IReduxState } from "@redux/_core/reducers";
import { getFIBState } from "@redux/product/product.selectors";
import { InputField } from "../input-field";
import moment from "moment";
import { getUserDateOfBirth } from "@redux/user/user.selectors";

type ConnectedProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const _FibInputBirth = (props: ConnectedProps) => {
  const {
    fibState: { birthDay, birthMonth, birthYear },
    updateBirthDay,
    updateBirthMonth,
    updateBirthYear,
    userDoB,
  } = props;

  const dayRef: RefObject<TextInput> = useRef(null);
  const monthRef: RefObject<TextInput> = useRef(null);
  const yearRef: RefObject<TextInput> = useRef(null);

  useEffect(() => {
    const userFormattedDoB = moment(userDoB).format("DD-MM-YYYY").split("-");
    updateBirthDay(userFormattedDoB[0] || "");
    updateBirthMonth(userFormattedDoB[1] || "");
    updateBirthYear(userFormattedDoB[2] || "");
  }, [updateBirthDay, updateBirthMonth, updateBirthYear, userDoB]);

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
        label="DD"
        style={styles.textInput}
      />
      <InputField
        forwardRef={monthRef}
        value={birthMonth}
        onChangeText={validateMonth}
        maxLength={2}
        label="MM"
        onBackSpace={handleBackspaceMonth}
        style={styles.textInput}
      />
      <InputField
        forwardRef={yearRef}
        isLarge={true}
        value={birthYear}
        onChangeText={validateYear}
        maxLength={4}
        label="YYYY"
        onBackSpace={handleBackspaceYear}
        width={70}
        style={styles.textInput}
      />
    </View>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  fibState: getFIBState(state).answers,
  userDoB: getUserDateOfBirth(state),
});

const mapDispatchToProps = {
  updateBirthDay: (value: string) => updateFIBAnswerValue({ key: "birthDay", value }),
  updateBirthMonth: (value: string) => updateFIBAnswerValue({ key: "birthMonth", value }),
  updateBirthYear: (value: string) => updateFIBAnswerValue({ key: "birthYear", value }),
};

const redux = connect(mapStateToProps, mapDispatchToProps);

export const FibInputBirth = redux(_FibInputBirth);
