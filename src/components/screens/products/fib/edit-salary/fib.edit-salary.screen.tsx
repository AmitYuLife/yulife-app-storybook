import React, { memo } from "react";
import { View, StyleSheet, SafeAreaView, ViewStyle, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { GenericHeading, Text } from "@atoms";
import { Style, Colours } from "@styles";
import { FibEditSalaryInput } from "./fib.edit-salary-input";
import MinimalButton from "@atoms/button/minimalButton";
import Logger from "@services/logging/logger";

export interface IEditSalaryScreen {
  onNavigateBack: () => void;
  onNavigateToSalaryDescription: () => void;
  salary: number;
  updateSalary: (salary: number) => void;
}

export const FibEditSalaryScreen = memo(function (props: IEditSalaryScreen) {
  const { onNavigateBack, salary, updateSalary, onNavigateToSalaryDescription } = props;

  function handlePress() {
    Logger.logEvent("salary_input");
    Keyboard.dismiss();
    onNavigateBack();
  }

  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <GenericHeading
          heading="Salary"
          onLeftIconPress={() => {
            Keyboard.dismiss();
            return onNavigateBack();
          }}
        />
        <View style={styles.mainContent}>
          <Text style={styles.text}>
            Because we designed this product based on your current salary we will need your{" "}
          </Text>
          <Text
            onPress={() => {
              Keyboard.dismiss();
              return onNavigateToSalaryDescription();
            }}
            style={StyleSheet.flatten([styles.link, styles.text])}
          >
            annual gross salary.
          </Text>
          <View style={styles.inputWrapper}>
            <FibEditSalaryInput value={salary} onChange={updateSalary} />
          </View>
        </View>
      </SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
        <View style={styles.button}>
          <MinimalButton
            disabled={!salary}
            backgroundColor={Colours.darkHotPink}
            shadowColor={Colours.darkHotPinkShadow}
            height={53}
            title="Done"
            onPress={handlePress}
            color="white"
            borderRadius={50}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    flex: 1,
    marginTop: Style.isAnyIphoneX() ? -10 : 0,
  },
  mainContent: {
    marginTop: 28,
    paddingHorizontal: Style.adjust(32),
  },
  link: {
    color: Colours.darkHotPink,
    textDecorationLine: "underline",
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
    height: 90,
  } as ViewStyle,
});
