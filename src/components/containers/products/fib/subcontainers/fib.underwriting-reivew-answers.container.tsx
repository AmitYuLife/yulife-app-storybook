import React, { memo } from "react";
import { FibLocalNavigation } from "../fib.types";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { connect } from "react-redux";
import { FibUnderwritingReviewAnswersScreen } from "@components/screens/products/fib/underwriting-journey/fib.underwriting-review-answers.screen";
import { getFIBState, getReviewAnswers } from "../../../../../redux/product/product.selectors";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IFibUnderwritingReviewAnswersContainerProps {
  navigation: FibLocalNavigation;
}

type Props = IFibUnderwritingReviewAnswersContainerProps & ConnectedState;

const FibUnderwritingReviewAnswersContainer = memo(function (props: Props) {
  const { navigation, answers } = props;
  return <FibUnderwritingReviewAnswersScreen onNavigateBack={() => navigation.popToMain()} answers={answers} />;
});

const mapStateToProps = (state: IReduxState) => ({
  fibState: getFIBState(state),
  answers: getReviewAnswers(state),
});

export default connect<ConnectedState>(mapStateToProps)(FibUnderwritingReviewAnswersContainer);
