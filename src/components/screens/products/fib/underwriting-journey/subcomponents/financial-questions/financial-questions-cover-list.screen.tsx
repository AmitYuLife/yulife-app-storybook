import React from "react";
import { FibUnderwritingJourneyLayout } from "../../../layouts/fib.underwriting-journey-layout";
import { ScrollView, StyleSheet, ViewStyle } from "react-native";
import TitleWithIcon from "@atoms/fib/title-with-icon/title-with-icon";
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
    <FibUnderwritingJourneyLayout heading={data.heading} onNavigateBack={onNavigateBack}>
      <ScrollView contentContainerStyle={styles.scrollViewContentStyle}>
        <TitleWithIcon icon={data.icon} title={data.title} />
        <FibTitle title={data.question} />
        <FinancialQuestionsCoverList existingCovers={existingCovers} onAddCover={onSecondButtonPressed} />
      </ScrollView>
      <Footer
        firstButton={{ action: onFirstButtonPressed, label: "Done" }}
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

export const FinancialQuestionsCoverListScreen = connect(mapStateToProps)(_FinancialQuestionsCoverListScreen);

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
