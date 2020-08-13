import React, { useState } from "react";
import { FibUnderwritingJourneyLayout } from "../layouts/fib.underwriting-journey-layout";
import { UnderwritingJourneyScreen } from "@components/containers/products/fib/data/underwriting-journey-data";
import { ScrollView, View, StyleSheet, ViewStyle } from "react-native";
import TitleWithIcon from "@atoms/fib/title-with-icon/title-with-icon";
import FibTitle from "@atoms/fib/title/title";
import { FinancialQuestionsForm } from "./subcomponents/financial-questions-form/financial-questions-form";
import { Button } from "@atoms";
import { Style } from "@styles";

interface Props {
  onNavigateBack: () => void;
  data: UnderwritingJourneyScreen;
}

export function FinancialQuestionsScreen(props: Props) {
  const { onNavigateBack, data } = props;
  const [isFormValid, setFormValidState] = useState(false);

  function submitForm() {
    return;
  }

  return (
    <>
      <FibUnderwritingJourneyLayout heading={data.heading} onNavigateBack={onNavigateBack}>
        <ScrollView contentContainerStyle={styles.scrollViewContentStyle}>
          <TitleWithIcon icon={data.icon} title={data.title} />
          <FibTitle title={data.question} />
          <FinancialQuestionsForm setFormValidState={setFormValidState} />
        </ScrollView>
        <View style={styles.buttonWrapper}>
          <Button type="Primary" size="Large" onPress={submitForm} disabled={!isFormValid} label="Done" />
        </View>
      </FibUnderwritingJourneyLayout>
    </>
  );
}

const styles = StyleSheet.create({
  scrollViewContentStyle: {
    paddingBottom: 130,
  } as ViewStyle,
  buttonWrapper: {
    width: Style.DEVICE_WIDTH - 70,
    alignSelf: "center",
    height: 90,
  },
});
