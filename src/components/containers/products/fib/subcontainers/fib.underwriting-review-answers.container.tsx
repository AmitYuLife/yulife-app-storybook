import React, { memo, useCallback } from "react";
import { FibLocalNavigation, FIB_UNDERWRITING_JOURNEY, FIB_CONFIRM_PACKAGES, FIB_INFO } from "../fib.types";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { connect, useDispatch } from "react-redux";
import { FibUnderwritingReviewAnswersScreen } from "@components/screens/products/fib/underwriting-journey/fib.underwriting-review-answers.screen";
import {
  getFIBState,
  getLifeInsuranceUserAnswers,
  getReviewAnswers,
} from "../../../../../redux/product/product.selectors";
import { Navigation } from "react-native-navigation";
import { ROUTES, MODALS } from "../../../../../navigation/constants";
import { updateFIBValue, updateFIBValuesFromNewQuote } from "@redux/product/product.actions";
import { GQL_MUTATION_CREATE_TOP_UPS_QUOTE } from "@graphql/products";
import { useMutation } from "@apollo/react-hooks";
import { InfoTypes } from "./fib.info.container";
import { CreateTopUpsQuote, CreateTopUpsQuoteVariables } from "../../../../../graphql/_core/schema";
import { CoverType, CreateTopUpsQuoteInput, ProductCode } from "../../../../../graphql/_core/schema/globalTypes";
import { FIB_INTRO_YUGI } from "../fib.types";
import { YUGI_INTRO_TYPE } from "./fib.yugi-intro.container";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IFibUnderwritingReviewAnswersContainerProps {
  navigation: FibLocalNavigation;
}

type Props = IFibUnderwritingReviewAnswersContainerProps & ConnectedState;

const FibUnderwritingReviewAnswersContainer = memo(function (props: Props) {
  const { navigation, answers, fibState, userAnswers } = props;
  const dispatch = useDispatch();

  const queryVariables: CreateTopUpsQuoteInput = {
    grossSalary: fibState.salary,
    coverType: fibState.selectedPackage as CoverType,
    userAnswers,
  };

  const [createFibQuote] = useMutation<CreateTopUpsQuote, CreateTopUpsQuoteVariables>(
    GQL_MUTATION_CREATE_TOP_UPS_QUOTE
  );

  const onSubmitButton = async () => {
    const { data } = await createFibQuote({
      variables: {
        input: queryVariables,
        product: ProductCode.YULFIB,
      },
    });
    dispatch(updateFIBValuesFromNewQuote(data?.createTopUpsQuote));

    const rejected = data?.createTopUpsQuote?.rejected;
    if (rejected) {
      return navigation.push(FIB_INFO, { type: InfoTypes.rejected });
    }

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
      navigation.push(FIB_INTRO_YUGI, { type: YUGI_INTRO_TYPE.ANSWERS_SUBMITTED });
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
  userAnswers: getLifeInsuranceUserAnswers(state),
});

export default connect<ConnectedState>(mapStateToProps)(FibUnderwritingReviewAnswersContainer);
