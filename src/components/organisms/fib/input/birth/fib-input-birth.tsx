import React, { useRef, RefObject, useEffect } from "react";
import { connect } from "react-redux";
import { TextInput, View } from "react-native";
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

  useEffect(() => {
    updateBirthDay("");
    updateBirthMonth("");
    updateBirthYear("");
  }, [updateBirthDay, updateBirthMonth, updateBirthYear]);

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
    if (!(birthMonth as string).length) {
      dayRef.current.focus();
    }
  };

  const handleBackspaceYear = () => {
    if (!(birthYear as string).length) {
      monthRef.current.focus();
    }
  };

  return (
    <View style={styles.wrapper}>
      <InputField
        forwardRef={dayRef}
        autoFocus={true}
        value={birthDay as string}
        onChangeText={validateDay}
        maxLength={2}
        label="Day"
      />
      <InputField
        forwardRef={monthRef}
        value={birthMonth as string}
        onChangeText={validateMonth}
        maxLength={2}
        label="Month"
        onBackSpace={handleBackspaceMonth}
      />
      <InputField
        forwardRef={yearRef}
        isLarge={true}
        value={birthYear as string}
        onChangeText={validateYear}
        maxLength={4}
        label="Year"
        onBackSpace={handleBackspaceYear}
        width={70}
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
