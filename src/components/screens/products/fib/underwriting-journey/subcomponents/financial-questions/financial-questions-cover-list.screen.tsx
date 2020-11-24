import React from "react";
import { FibUnderwritingJourneyLayout } from "../../../layouts/fib.underwriting-journey-layout";
import { ScrollView, StyleSheet, ViewStyle } from "react-native";
import FibTitle from "@atoms/fib/title/title";
import { Style } from "@styles";
import { FinancialQuestionsCoverList } from "./financial-questions-cover-list";
import { IFibUnderwritingJourneyScreenProps } from "../../fib.underwriting-journey.screen";
import Footer from "../footer/footer";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getFIBState } from "@redux/product/product.selectors";

type Props = IFibUnderwritingJourneyScreenProps & ConnectedState;

type ConnectedState = ReturnType<typeof mapStateToProps>;

function _FinancialQuestionsCoverListScreen(props: Props) {
  const {
    data,
    onNavigateBack,
    onFirstButtonPressed,
    onSecondButtonPressed,
    onPreviousButtonPressed,
    existingCovers = [],
  } = props;

  return (
    <FibUnderwritingJourneyLayout
      heading={data.heading}
      onClose={onNavigateBack}
      progressBar={props.progressBar}
      onPreviousQuestion={onPreviousButtonPressed}
    >
      <ScrollView style={styles.wrapper}>
        <FibTitle title={data.question} />
        <FinancialQuestionsCoverList existingCovers={existingCovers} onAddCover={onSecondButtonPressed} />
      </ScrollView>
      <Footer firstButton={{ action: onFirstButtonPressed, label: "Done", disabled: existingCovers.length === 0 }} />
    </FibUnderwritingJourneyLayout>
  );
}

function mapStateToProps(store: IReduxState) {
  return {
    existingCovers: getFIBState(store).answers.existingCovers,
  };
}

export const FinancialQuestionsCoverListScreen = connect(mapStateToProps)(_FinancialQuestionsCoverListScreen);

const MARGIN_BOTTOM = Style.hasNotch ? 60 : 100;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: MARGIN_BOTTOM,
    paddingHorizontal: 32,
  } as ViewStyle,
  buttonWrapper: {
    width: Style.DEVICE_WIDTH - 70,
    alignSelf: "center",
    height: 90,
  },
});
