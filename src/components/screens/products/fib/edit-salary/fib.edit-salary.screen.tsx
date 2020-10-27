import React, { memo, useCallback } from "react";
import { View, StyleSheet, SafeAreaView, ViewStyle, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { GenericHeading, Text } from "@atoms";
import { Style, Colours } from "@styles";
import { FibEditSalaryInput } from "./fib.edit-salary-input";
import * as Animatable from "react-native-animatable";
import Button from "@atoms/button/button";
import Logger from "@services/logging/logger";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";

export interface IEditSalaryScreen {
  onNavigateBack: () => void;
  onPressDone: () => void;
  onNavigateToSalaryDescription: () => void;
  salary: number;
  updateSalary: (salary: number) => void;
}

export const FibEditSalaryScreen = memo(function (props: IEditSalaryScreen) {
  const { onNavigateBack, salary, updateSalary, onPressDone, onNavigateToSalaryDescription } = props;

  function handlePress() {
    Logger.logEvent("salary_input");
    Keyboard.dismiss();
    return onPressDone();
  }

  const backHandler = useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <GenericHeading
          heading="Salary"
          isBeta={true}
          onLeftIconPress={() => {
            Keyboard.dismiss();
            return onNavigateBack();
          }}
        />
        <Animatable.View useNativeDriver={true} duration={1000} animation="fadeIn" style={styles.mainContent}>
          <Text style={styles.text}>
            {`Let's get started! To begin, please enter your `}
            <Text
              onPress={() => {
                Keyboard.dismiss();
                return onNavigateToSalaryDescription();
              }}
              style={StyleSheet.flatten([styles.link, styles.text])}
            >
              annual gross salary.
            </Text>
          </Text>

          <View style={styles.inputWrapper}>
            <FibEditSalaryInput value={salary} onChange={updateSalary} />
          </View>
        </Animatable.View>
      </SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
        <View style={styles.button}>
          <Button disabled={!salary} label="Done" type="Primary" onPress={handlePress} />
        </View>
      </KeyboardAvoidingView>
    </>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
    height: "100%",
  },
  mainContent: {
    marginTop: 28,
    paddingHorizontal: Style.adjust(32),
  },
  link: {
    color: Colours.darkHotPink,
  },
  inputWrapper: {
    marginVertical: Style.adjust(50),
    marginHorizontal: Style.adjust(60),
  },
  text: {
    fontSize: Style.adjust(16),
    letterSpacing: 1,
    lineHeight: Style.adjust(24),
  },
  button: {
    width: Style.DEVICE_WIDTH - 70,
    alignSelf: "center",
    height: Style.adjust(90),
  } as ViewStyle,
});
