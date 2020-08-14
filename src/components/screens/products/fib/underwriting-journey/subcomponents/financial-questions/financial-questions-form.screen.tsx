import React, { useState } from "react";
import { FibUnderwritingJourneyLayout } from "../../../layouts/fib.underwriting-journey-layout";
import { ScrollView, StyleSheet, ViewStyle } from "react-native";
import TitleWithIcon from "@atoms/fib/title-with-icon/title-with-icon";
import FibTitle from "@atoms/fib/title/title";
import { FinancialQuestionsForm, defaultFormValue, FormValue } from "./financial-questions-form";
import { Style } from "@styles";
import { IFibUnderwritingJourneyScreenProps } from "../../fib.underwriting-journey.screen";
import Footer from "../footer/footer";
import { useDispatch, connect } from "react-redux";
import { updateFIBValue } from "@redux/product/product.actions";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { Cover } from "@components/containers/products/fib/fib.types";

type Props = IFibUnderwritingJourneyScreenProps & ConnectedState;
type ConnectedState = ReturnType<typeof mapStateToProps>;

export function _FinancialQuestionsFormScreen(props: Props) {
  const { onNavigateBack, data, onFirstButtonPressed, onPreviousButtonPressed, existingCovers } = props;

  const [formValue, setFormValue] = useState<FormValue>(defaultFormValue);
  const dispatch = useDispatch();
  const [isFormValid, setFormValidState] = useState(false);

  function submitForm() {
    const cover: Cover = {
      companyName: formValue["company-held"],
      coverAmount: Number(formValue["amount-of-cover"]),
      coverName: formValue["cover-name"],
    };

    const payload = {
      key: "existingCovers",
      value: [...existingCovers, cover],
    };

    dispatch(updateFIBValue(payload));
    return onFirstButtonPressed();
  }

  return (
    <FibUnderwritingJourneyLayout heading={data.heading} onNavigateBack={onNavigateBack}>
      <ScrollView contentContainerStyle={styles.scrollViewContentStyle}>
        <TitleWithIcon icon={data.icon} title={data.title} />
        <FibTitle title={data.question} />
        <FinancialQuestionsForm
          setFormValidState={setFormValidState}
          formValue={formValue}
          setFormValue={setFormValue}
        />
      </ScrollView>
      <Footer
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

export const FinancialQuestionsFormScreen = connect(mapStateToProps)(_FinancialQuestionsFormScreen);

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
