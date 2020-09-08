import React, { memo, useCallback } from "react";
import { FibLocalNavigation, FIB_UNDERWRITING_JOURNEY, FIB_CONFIRM_PACKAGES } from "../fib.types";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { connect, useDispatch } from "react-redux";
import { FibUnderwritingReviewAnswersScreen } from "@components/screens/products/fib/underwriting-journey/fib.underwriting-review-answers.screen";
import { getFIBState, getReviewAnswers } from "../../../../../redux/product/product.selectors";
import { Navigation } from "react-native-navigation";
import { ROUTES, MODALS } from "../../../../../navigation/constants";
import { updateFIBValue } from "@redux/product/product.actions";
import moment from "moment";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IFibUnderwritingReviewAnswersContainerProps {
  navigation: FibLocalNavigation;
}

type Props = IFibUnderwritingReviewAnswersContainerProps & ConnectedState;

const FibUnderwritingReviewAnswersContainer = memo(function (props: Props) {
  const { navigation, answers, updateQuoteDate } = props;
  const dispatch = useDispatch();
  const onSubmitButton = () => {
    dispatch(updateQuoteDate(moment().format("YYYY-MM-DD")));
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
            try {
              await Navigation.popTo(ROUTES.yuScreen);
            } catch (e) {
              // We arrived to the review screen without passing through yuScreen
              // This should never happen but because our current way of testing
              // we need this try/catch block
              await Navigation.popTo(ROUTES.debug);
            }

            return;
          },
        },
      },
    });
  }, []);

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
  updateQuoteDate: (value: string) => updateFIBValue({ key: "quoteDate", value }),
});

export default connect<ConnectedState>(mapStateToProps)(FibUnderwritingReviewAnswersContainer);
