import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Button, Text } from "@atoms";
import { Colours, Style } from "@styles";
import { ScrollableLayout } from "@molecules";
import { FibInputBirth } from "../../../../organisms/fib/input/birth/fib-input-birth";
import { FibAnswers } from "../../../../../redux/product/product.types";
import { Navigation } from "react-native-navigation";
import { MODALS } from "../../../../../navigation/constants";
import { addCommasToNumber } from "@services/utils";
import FibInputSalaryTertiary from "../../../../organisms/fib/input/salary/fib-input-salary-tertiary";

export interface IFibPayoutCalculatorAddDataScreenProps {
  onNavigateBack: () => void;
  onContinue: () => void;
  fibAnswers: FibAnswers;
  salary: number;
}

export const FibPayoutCalculatorAddDataScreen = memo(function (props: IFibPayoutCalculatorAddDataScreenProps) {
  const {
    onNavigateBack,
    onContinue,
    salary,
    fibAnswers: { birthDay, birthMonth, birthYear },
  } = props;

  const dateOfBirthLabels =
    birthDay && birthMonth && birthYear
      ? { label1: `${birthDay} / ${birthMonth} / ${birthYear}`, label2: "Date of birth" }
      : { label1: "Enter your date of birth", label2: null };

  const salaryLabels = salary
    ? { label1: `£${addCommasToNumber(salary)}`, label2: "Annual gross salary" }
    : { label1: "Enter your annual salary", label2: null };

  const buttonDisabled = !(birthDay && birthMonth && birthYear && salary);

  const showEnterSalaryModal = () => {
    Navigation.showOverlay({
      component: {
        id: MODALS.enterSalary,
        name: MODALS.enterSalary,
        options: {
          layout: {
            componentBackgroundColor: "transparent",
          },
        },
      },
    });
  };

  return (
    <ScrollableLayout shouldCenterContent={true} onLeftIconPress={onNavigateBack} logo={"yulife"} isBeta={false}>
      <View style={styles.wrapper}>
        <Text bold={true} style={styles.titleStyle}>
          Payout Calculator
        </Text>
        <Text style={styles.description}>
          In order to see your payout we need to know your salary and date of birth.
        </Text>
        <FibInputSalaryTertiary
          label={salaryLabels.label1}
          subLabel={salaryLabels.label2}
          onPress={showEnterSalaryModal}
        />
        <FibInputBirth
          label={dateOfBirthLabels.label1}
          subLabel={dateOfBirthLabels.label2}
          wrapperStyle={styles.fibInputBirthWrapper}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button type="Primary" label="Continue" onPress={onContinue} disabled={buttonDisabled} />
      </View>
    </ScrollableLayout>
  );
});

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(32),
    letterSpacing: 1,
    color: Colours.products.fib.n800,
  } as TextStyle,
  description: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
    color: Colours.neutral.n700,
    marginTop: 24,
  } as TextStyle,
  buttonWrapper: {
    position: "absolute",
    bottom: 32,
    width: Style.DEVICE_WIDTH,
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
  fibInputBirthWrapper: { marginTop: 16 },
});
