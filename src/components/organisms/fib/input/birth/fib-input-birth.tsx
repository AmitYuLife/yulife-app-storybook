import React, { useRef, RefObject } from "react";
import { connect } from "react-redux";
import { TextInput, View } from "react-native";
import { styles } from "./fib-input-birth.styles";
import { updateFIBValue } from "@redux/product/product.actions";
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
        autoFocus={!birthDay}
        value={birthDay}
        onChangeText={validateDay}
        maxLength={2}
        label="Day"
        placeholder="DD"
      />
      <InputField
        autoFocus={!!birthDay && !birthMonth}
        forwardRef={monthRef}
        value={birthMonth}
        onChangeText={validateMonth}
        maxLength={2}
        label="Month"
        placeholder="MM"
        onBackSpace={handleBackspaceMonth}
      />
      <InputField
        autoFocus={!!birthDay && !!birthMonth}
        forwardRef={yearRef}
        isLarge={true}
        value={birthYear}
        onChangeText={validateYear}
        maxLength={4}
        label="Year"
        placeholder="YYYY"
        onBackSpace={handleBackspaceYear}
      />
    </View>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  fibState: getFIBState(state),
});

const mapDispatchToProps = {
  updateBirthDay: (value: string) => updateFIBValue({ key: "birthDay", value }),
  updateBirthMonth: (value: string) => updateFIBValue({ key: "birthMonth", value }),
  updateBirthYear: (value: string) => updateFIBValue({ key: "birthYear", value }),
};

const redux = connect(mapStateToProps, mapDispatchToProps);

export const FibInputBirth = redux(_FibInputBirth);
