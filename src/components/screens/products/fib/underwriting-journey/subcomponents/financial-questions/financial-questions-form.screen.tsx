import React, { useState } from "react";
import { FibUnderwritingJourneyLayout } from "../../../layouts/fib.underwriting-journey-layout";
import { ScrollView, StyleSheet, ViewStyle } from "react-native";
import TitleWithIcon from "@atoms/fib/title-with-icon/title-with-icon";
import FibTitle from "@atoms/fib/title/title";
import { FinancialQuestionsForm, defaultFormValue, FormValue } from "./financial-questions-form";
import { Style } from "@styles";
import { IFibUnderwritingJourneyScreenProps } from "../../fib.underwriting-journey.screen";
import Footer from "../footer/footer";
import { connect } from "react-redux";
import { updateFIBValue } from "@redux/product/product.actions";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { Cover } from "@components/containers/products/fib/fib.types";

type Props = IFibUnderwritingJourneyScreenProps & ConnectedState;
type ConnectedState = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

export function _FinancialQuestionsFormScreen(props: Props) {
  const {
    onNavigateBack,
    data,
    onFirstButtonPressed,
    onPreviousButtonPressed,
    existingCovers,
    updateExistingCovers,
  } = props;

  const [formValue, setFormValue] = useState<FormValue>(defaultFormValue);
  const [isFormValid, setFormValidState] = useState(false);

  function submitForm() {
    const cover: Cover = {
      companyName: formValue["company-held"],
      coverAmount: Number(formValue["amount-of-cover"]),
      coverName: formValue["cover-name"],
    };

    updateExistingCovers([...existingCovers, cover]);
    return onFirstButtonPressed();
  }

  return (
    <FibUnderwritingJourneyLayout
      heading={data.heading}
      onNavigateBack={onNavigateBack}
      progressBar={props.progressBar}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContentStyle} keyboardShouldPersistTaps="handled">
        <TitleWithIcon icon={data.icon} title={data.title} />
        <FibTitle title={data.question} />
        <FinancialQuestionsForm
          setFormValidState={setFormValidState}
          formValue={formValue}
          setFormValue={setFormValue}
        />
      </ScrollView>
      <Footer
        hideOnKeyboardOpen={true}
        firstButton={{ action: submitForm, label: "Done", disabled: !isFormValid }}
        onPreviousButtonPressed={onPreviousButtonPressed}
      />
    </FibUnderwritingJourneyLayout>
  );
}

function mapStateToProps(store: IReduxState) {
  return {
    existingCovers: getFIBState(store).existingCovers,
  };
}

const mapDispatchToProps = {
  updateExistingCovers: (value: Cover[]) => updateFIBValue({ key: "existingCovers", value }),
};

export const FinancialQuestionsFormScreen = connect(mapStateToProps, mapDispatchToProps)(_FinancialQuestionsFormScreen);

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
