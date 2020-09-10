import React, { memo, useCallback } from "react";
import { FibLocalNavigation, FIB_UNDERWRITING_JOURNEY, FIB_CONFIRM_PACKAGES } from "../fib.types";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { connect, useDispatch } from "react-redux";
import { FibUnderwritingReviewAnswersScreen } from "@components/screens/products/fib/underwriting-journey/fib.underwriting-review-answers.screen";
import { getFIBState, getReviewAnswers } from "../../../../../redux/product/product.selectors";
import { Navigation } from "react-native-navigation";
import { ROUTES, MODALS } from "../../../../../navigation/constants";
import { updateFIBValue } from "@redux/product/product.actions";
import {
  GetLifeInsuranceTopUpsVars,
  GetLifeInsuranceToUpsData,
  GQL_GET_LIFE_INSURANCE_TOP_UPS,
  LifeInsuranceUserAnswers,
} from "@graphql/products";
import { useQuery } from "@apollo/react-hooks";
import moment from "moment";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IFibUnderwritingReviewAnswersContainerProps {
  navigation: FibLocalNavigation;
}

type Props = IFibUnderwritingReviewAnswersContainerProps & ConnectedState;

const FibUnderwritingReviewAnswersContainer = memo(function (props: Props) {
  const { navigation, answers, fibState, updateQuoteDate } = props;
  const dispatch = useDispatch();

  const userAnswers = Object.keys(fibState.answers).map((questionId: string) => {
    return {
      questionId,
      value: JSON.stringify(fibState.answers[questionId]),
    } as LifeInsuranceUserAnswers;
  });

  const queryVariables: GetLifeInsuranceTopUpsVars = {
    grossSalary: fibState.salary,
    coverType: fibState.selectedPackage,
    userAnswers,
  };

  // Request only actual cost?
  const { data } = useQuery<GetLifeInsuranceToUpsData, GetLifeInsuranceTopUpsVars>(GQL_GET_LIFE_INSURANCE_TOP_UPS, {
    variables: queryVariables,
    fetchPolicy: "network-only",
  });

  const onSubmitButton = async () => {
    dispatch(updateQuoteDate(moment().format("YYYY-MM-DD")));
    const priceChangedFromAPI =
      fibState.actualCost && data?.getLifeInsuranceTopUps?.actualCost
        ? fibState.actualCost !== data.getLifeInsuranceTopUps.actualCost
        : false;
    if (fibState.hasPriceChanged || priceChangedFromAPI) {
      await Navigation.showModal({
        component: {
          id: MODALS.generic,
          name: MODALS.generic,
          passProps: {
            onPress: async () => {
              dispatch(updateFIBValue({ key: "hasPriceChanged", value: false }));
              dispatch(updateFIBValue({ key: "actualCost", value: data.getLifeInsuranceTopUps.actualCost }));
              await Navigation.dismissModal(MODALS.generic);
              navigation.push(FIB_CONFIRM_PACKAGES);
            },
            heading: "Price change",
            subheading:
              "The final price of your life insurance packaged has changed. This will appear in the finalise packages screen",
            ctaLabel: "Continue",
          },
        },
      });
    } else {
      navigation.push(FIB_CONFIRM_PACKAGES);
    }
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
            return await Navigation.popTo(ROUTES.yuScreen);
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
