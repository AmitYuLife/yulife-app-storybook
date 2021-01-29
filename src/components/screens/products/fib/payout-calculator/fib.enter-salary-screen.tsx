import React, { memo, useEffect, useState, useCallback, useRef } from "react";
import { View, StyleSheet, ViewStyle, TextStyle, Platform, KeyboardAvoidingView, Keyboard } from "react-native";
import { Button, Text } from "@atoms";
import { Style, Colours } from "@styles";
import { Navigation } from "react-native-navigation";
import { MODALS } from "../../../../../navigation/constants";
import GenericOverlay from "@components/modals/generic-overlay/generic-overlay";
import { FibInputSalary } from "../../../../organisms/fib/input/salary/fib-input-salary";

export interface IFibEnterSalaryScreenProps {
  submitSalary: () => void;
  updateSalary: (salary: number) => void;
  salary: number;
}

export const FibEnterSalaryScreen = memo(function (props: IFibEnterSalaryScreenProps) {
  const { updateSalary, submitSalary, salary } = props;
  const [titleMargin, setTitleMargin] = useState(64);
  const timer = useRef<NodeJS.Timeout>(null);

  const onClose = () => {
    Keyboard.dismiss();
    timer.current = setTimeout(() => {
      Navigation.dismissOverlay(MODALS.enterSalary);
    }, 50);
  };

  const onDonePressed = () => {
    submitSalary();
    onClose();
  };

  const handleKeyboardEventShown = useCallback(() => {
    if (Platform.OS === "android") {
      setTitleMargin(0);
    }
  }, [setTitleMargin]);

  const handleKeyboardEventDismiss = useCallback(() => {
    setTitleMargin(64);
  }, [setTitleMargin]);

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", handleKeyboardEventShown);
    return () => {
      Keyboard.removeListener("keyboardDidShow", handleKeyboardEventShown);
    };
  }, [handleKeyboardEventShown]);

  useEffect(() => {
    Keyboard.addListener(Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide", handleKeyboardEventDismiss);
    return () => {
      Keyboard.removeListener(
        Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
        handleKeyboardEventDismiss
      );
    };
  }, [handleKeyboardEventDismiss]);

  return (
    <GenericOverlay onClose={onClose}>
      <KeyboardAvoidingView behavior={"padding"} style={styles.avoidingViewWrapper}>
        <View style={styles.wrapper}>
          <Text bold={true} style={StyleSheet.flatten([styles.titleStyle, { marginTop: titleMargin }])}>
            Enter your salary
          </Text>
          <Text style={styles.text}>
            Because we designed this product based on your current salary we will need your annual gross salary.
          </Text>

          <FibInputSalary setInputSalary={updateSalary} salary={salary} />

          <View style={styles.button}>
            <Button disabled={!salary} label="Done" type="Primary" onPress={onDonePressed} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </GenericOverlay>
  );
});

const styles = StyleSheet.create({
  avoidingViewWrapper: { flex: 1 },
  text: {
    fontSize: Style.adjust(16),
    letterSpacing: 1,
    lineHeight: Style.adjust(24),
  },
  titleStyle: {
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(32),
    letterSpacing: 1,
    color: Colours.neutral.n800,
    marginTop: 64,
    marginBottom: 16,
  } as TextStyle,
  button: {
    width: Style.DEVICE_WIDTH - 70,
    alignSelf: "center",
    position: "absolute",
    bottom: Platform.select({ ios: 80, android: 100 }),
  } as ViewStyle,
  wrapper: {
    paddingTop: 24,
    paddingHorizontal: 24,
    width: Style.DEVICE_WIDTH,
    flex: 1,
  },
  birthDayButtonWrapper: {
    marginTop: 40,
  },
});
