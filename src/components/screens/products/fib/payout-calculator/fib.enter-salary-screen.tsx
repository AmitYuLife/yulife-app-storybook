import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle, Platform } from "react-native";
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

  const onDonePressed = () => {
    submitSalary();
    Navigation.dismissOverlay(MODALS.enterSalary);
  };

  return (
    <GenericOverlay onClose={() => Navigation.dismissOverlay(MODALS.enterSalary)}>
      <View style={styles.wrapper}>
        <Text bold={true} style={styles.titleStyle}>
          Enter your salary
        </Text>
        <Text style={styles.text}>
          {`Because we designed this product based on your current salary we will need your `}
          <Text style={StyleSheet.flatten([styles.link, styles.text])}>annual gross salary.</Text>
        </Text>

        <FibInputSalary setInputSalary={updateSalary} salary={salary} />

        <View style={styles.button}>
          <Button disabled={!salary} label="Done" type="Primary" onPress={onDonePressed} />
        </View>
      </View>
    </GenericOverlay>
  );
});

const styles = StyleSheet.create({
  link: {
    color: Colours.darkHotPink,
  },
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
