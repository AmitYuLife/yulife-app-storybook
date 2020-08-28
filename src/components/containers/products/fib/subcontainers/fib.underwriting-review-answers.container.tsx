import React, { memo, useCallback } from "react";
import { FibLocalNavigation, FIB_UNDERWRITING_JOURNEY, FIB_CONFIRM_PACKAGES } from "../fib.types";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { connect } from "react-redux";
import { FibUnderwritingReviewAnswersScreen } from "@components/screens/products/fib/underwriting-journey/fib.underwriting-review-answers.screen";
import { getFIBState, getReviewAnswers } from "../../../../../redux/product/product.selectors";
import { Navigation } from "react-native-navigation";
import { MODALS } from "../../../../../navigation/constants";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IFibUnderwritingReviewAnswersContainerProps {
  navigation: FibLocalNavigation;
}

type Props = IFibUnderwritingReviewAnswersContainerProps & ConnectedState;

const FibUnderwritingReviewAnswersContainer = memo(function (props: Props) {
  const { navigation, answers } = props;
  const onSubmitButton = () => {
    navigation.push(FIB_CONFIRM_PACKAGES);
  };

  const onAnswerPress = (questionId: string) => {
    return navigation.push(FIB_UNDERWRITING_JOURNEY, {
      initialQuestionIdFromReviewScreen: questionId,
      redirectedFromReviewScreen: true,
    });
  };

  const onNavigateBackHandler = useCallback(async () => {
    await Navigation.showModal({
      component: {
        id: MODALS.generic,
        name: MODALS.generic,
        passProps: {
          onPress: async () => {
            await Navigation.dismissModal(MODALS.generic);
          },
          heading: "Exit",
          subheading: "Are you sure you want to exit? Your progressed will be saved",
          ctaLabel: "Stay",
          ctaLabelSecondary: "Exit",
          onPressSecondary: async () => {
            await Navigation.dismissModal(MODALS.generic);
            return navigation.popToMain();
          },
        },
      },
    });
  }, [navigation]);

  return (
    <FibUnderwritingReviewAnswersScreen
      onNavigateBack={onNavigateBackHandler}
      answers={answers}
      onSubmitButton={onSubmitButton}
      onAnswerPress={onAnswerPress}
      onScrollEnd={navigation.onScrollEnd}
      offset={navigation.currentRoute.offset || { x: 0, y: 0 }}
    />
  );
});

const mapStateToProps = (state: IReduxState) => ({
  fibState: getFIBState(state),
  answers: getReviewAnswers(state),
});

export default connect<ConnectedState>(mapStateToProps)(FibUnderwritingReviewAnswersContainer);
