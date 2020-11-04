import React, { memo, useCallback } from "react";
import {
  FibLocalNavigation,
  FIB_UNDERWRITING_JOURNEY,
  FIB_CONFIRM_PACKAGES,
  FIB_EDIT_SALARY,
  FIB_INFO,
} from "../fib.types";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { connect, useDispatch } from "react-redux";
import { FibUnderwritingReviewAnswersScreen } from "@components/screens/products/fib/underwriting-journey/fib.underwriting-review-answers.screen";
import { getFIBState, getReviewAnswers } from "../../../../../redux/product/product.selectors";
import { Navigation } from "react-native-navigation";
import { ROUTES, MODALS } from "../../../../../navigation/constants";
import { updateFIBValue } from "@redux/product/product.actions";
import { GQL_MUTATION_CREATE_TOP_UPS_QUOTE, LifeInsuranceUserAnswers } from "@graphql/products";
import { useMutation } from "@apollo/react-hooks";
import moment from "moment";
import { InfoTypes } from "./fib.info.container";
import { CreateTopUpsQuote, CreateTopUpsQuoteVariables } from "../../../../../graphql/_core/schema";
import { CoverType, CreateTopUpsQuoteInput, ProductCode } from "../../../../../graphql/_core/schema/globalTypes";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IFibUnderwritingReviewAnswersContainerProps {
  navigation: FibLocalNavigation;
}

type Props = IFibUnderwritingReviewAnswersContainerProps & ConnectedState;

const FibUnderwritingReviewAnswersContainer = memo(function (props: Props) {
  const { navigation, answers, fibState, updateQuoteDate, updateRejectedValue } = props;
  const dispatch = useDispatch();

  const userAnswers = Object.keys(fibState.answers).map((questionId: string) => {
    return {
      questionId,
      value: JSON.stringify(fibState.answers[questionId]),
    } as LifeInsuranceUserAnswers;
  });

  const queryVariables: CreateTopUpsQuoteInput = {
    grossSalary: fibState.salary,
    coverType: fibState.selectedPackage as CoverType,
    userAnswers,
  };

  const [createFibQuote, { data }] = useMutation<CreateTopUpsQuote, CreateTopUpsQuoteVariables>(
    GQL_MUTATION_CREATE_TOP_UPS_QUOTE
  );

  const onSubmitButton = async () => {
    await createFibQuote({
      variables: {
        input: queryVariables,
        product: ProductCode.YULFIB,
      },
    });

    const quoteId = data?.createTopUpsQuote?.quoteId;
    if (quoteId) {
      dispatch(
        updateFIBValue({
          key: "latestQuoteId",
          value: quoteId,
        })
      );
    }

    const rejected = data?.createTopUpsQuote?.rejected;
    if (rejected) {
      dispatch(updateRejectedValue());
      return navigation.push(FIB_INFO, { type: "Rejected" } as { type: InfoTypes });
    }

    dispatch(updateQuoteDate(moment().format("YYYY-MM-DD")));
    dispatch(
      updateFIBValue({
        key: "medicalInvestigationRequired",
        value: data?.createTopUpsQuote?.medicalInvestigationRequired,
      })
    );
    const priceChangedFromAPI =
      !!Number(fibState.actualCost) && !!Number(data?.createTopUpsQuote?.actualCost)
        ? fibState.actualCost !== data.createTopUpsQuote?.actualCost
        : false;
    if (fibState.hasPriceChanged || priceChangedFromAPI) {
      await Navigation.showModal({
        component: {
          id: MODALS.generic,
          name: MODALS.generic,
          passProps: {
            onPress: async () => {
              dispatch(updateFIBValue({ key: "hasPriceChanged", value: false }));
              dispatch(updateFIBValue({ key: "actualCost", value: data.createTopUpsQuote?.actualCost }));
              await Navigation.dismissModal(MODALS.generic);
              navigation.push(FIB_CONFIRM_PACKAGES);
            },
            heading: "Price change",
            subheading: "Based on your answers, the final price of your life insurance package has changed.",
            ctaLabel: "Continue",
          },
        },
      });
    } else {
      navigation.push(FIB_CONFIRM_PACKAGES);
    }
  };

  const onAnswerPress = (questionId: string) => {
    if (questionId === FIB_EDIT_SALARY) {
      return navigation.push(FIB_EDIT_SALARY, { onPressDone: navigation.pop });
    }

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
          heading: "Leave Application?",
          subheading: "We’ll save your progress for you.",
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
  updateRejectedValue: () => updateFIBValue({ key: "rejected", value: true }),
});

export default connect<ConnectedState>(mapStateToProps)(FibUnderwritingReviewAnswersContainer);
