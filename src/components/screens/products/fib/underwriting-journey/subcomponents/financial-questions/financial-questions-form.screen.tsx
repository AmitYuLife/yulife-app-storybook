import React, { useState } from "react";
import { FibUnderwritingJourneyLayout } from "../../../layouts/fib.underwriting-journey-layout";
import { ScrollView, StyleSheet, ViewStyle } from "react-native";
import TitleWithIcon from "@atoms/fib/title-with-icon/title-with-icon";
import FibTitle from "@atoms/fib/title/title";
import { FinancialQuestionsForm } from "./financial-questions-form";
import { Style } from "@styles";
import { IFibUnderwritingJourneyScreenProps } from "../../fib.underwriting-journey.screen";
import Footer from "../footer/footer";

export function FinancialQuestionsFormScreen(props: IFibUnderwritingJourneyScreenProps) {
  const { onNavigateBack, data, onFirstButtonPressed, onPreviousButtonPressed } = props;
  const [isFormValid, setFormValidState] = useState(false);

  function submitForm() {
    return onFirstButtonPressed();
  }

  return (
    <FibUnderwritingJourneyLayout heading={data.heading} onNavigateBack={onNavigateBack}>
      <ScrollView contentContainerStyle={styles.scrollViewContentStyle}>
        <TitleWithIcon icon={data.icon} title={data.title} />
        <FibTitle title={data.question} />
        <FinancialQuestionsForm setFormValidState={setFormValidState} />
      </ScrollView>
      <Footer
        firstButton={{ action: submitForm, label: "Done", disabled: !isFormValid }}
        onPreviousButtonPressed={onPreviousButtonPressed}
      />
    </FibUnderwritingJourneyLayout>
  );
}

const styles = StyleSheet.create({
  scrollViewContentStyle: {
    paddingBottom: 130,
    paddingHorizontal: 32,
  } as ViewStyle,
  buttonWrapper: {
    width: Style.DEVICE_WIDTH - 70,
    alignSelf: "center",
    height: 90,
  },
});
