import React from "react";
import { FibUnderwritingJourneyLayout } from "../../../layouts/fib.underwriting-journey-layout";
import { ScrollView, StyleSheet, ViewStyle, View } from "react-native";
import FibTitle from "@atoms/fib/title/title";
import { Style } from "@styles";
import { FinancialQuestionsCoverList } from "./financial-questions-cover-list";
import { IFibUnderwritingJourneyScreenProps } from "../../fib.underwriting-journey.screen";
import Footer from "../footer/footer";
import { useSelector } from "react-redux";
import { getFIBState } from "@redux/product/product.selectors";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { FINANCIAL_QUESTIONS_ICON } from "@atoms/fib/svg-assets/underwriting/svg-strings";
import {
  FIB_FINANCIAL_COVER_LIST_SCREEN_ID,
  FIB_FINANCIAL_CUSTOM_COVER_FORM_SCREEN_ID,
  ACCUMULATED_PROGRESS,
} from "@components/containers/products/fib/data/underwriting-journey-data";
import { YugiType } from "../../../layouts/yugi";
import { Cover } from "@components/containers/products/fib/fib.types";

type Props = IFibUnderwritingJourneyScreenProps;

export function FinancialQuestionsCoverListScreen(props: Props) {
  const existingCovers = useSelector(getFIBState).answers.existingCovers;

  const { data, onNavigateBack, onFirstButtonPressed, onPreviousButtonPressed, hideProgressBar } = props;

  return (
    <FibUnderwritingJourneyLayout
      centreLogo="yulife"
      onClose={onNavigateBack}
      hideProgressBar={hideProgressBar}
      onPreviousQuestion={onPreviousButtonPressed}
      yugi={YugiType.FINANCIAL}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
        <View style={styles.topPad} />
        <FibTitle title={data.question} />
        <FinancialQuestionsCoverList onAddCover={showFinancialCoverOverlay} />
        <View style={styles.paddingBottom} />
      </ScrollView>
      <Footer firstButton={{ action: onFirstButtonPressed, label: "Done", disabled: existingCovers.length === 0 }} />
    </FibUnderwritingJourneyLayout>
  );
}

const MARGIN_BOTTOM = Style.hasNotch ? 60 : 100;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: MARGIN_BOTTOM,
  } as ViewStyle,
  buttonWrapper: {
    width: Style.DEVICE_WIDTH - 70,
    alignSelf: "center",
    height: 90,
  },
  paddingBottom: {
    height: Style.adjust(40),
  } as ViewStyle,
  topPad: {
    height: Style.adjust(32),
  } as ViewStyle,
});

export function showFinancialCoverOverlay(coverForm?: Cover) {
  return () => {
    Navigation.showOverlay({
      component: {
        id: MODALS.financialCoverForm,
        name: MODALS.financialCoverForm,
        options: {
          layout: {
            componentBackgroundColor: "transparent",
          },
        },
        passProps: {
          data: {
            id: FIB_FINANCIAL_CUSTOM_COVER_FORM_SCREEN_ID,
            accumulatedProgress: ACCUMULATED_PROGRESS.FIB_FINANCIAL_CUSTOM_COVER_FORM_SCREEN_ID,
            category: "fib_financial",
            heading: "Financial",
            icon: FINANCIAL_QUESTIONS_ICON,
            title: "Cover Details",
            question: "We’ll need some details about your cover.",
            firstButton: { label: "Continue", actionId: FIB_FINANCIAL_COVER_LIST_SCREEN_ID },
            previousButton: { actionId: FIB_FINANCIAL_COVER_LIST_SCREEN_ID },
            coverForm,
          },
        },
      },
    });
  };
}
