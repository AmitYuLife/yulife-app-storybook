import React, { useState } from "react";
import { FibBrowseContainer, FibFaqContainer } from "./subcontainers";
import { useLocalNavigation } from "@services/hooks/useLocalNavigation";
import {
  FibRoute,
  FibLocalNavigation,
  FIB_FAQ,
  FIB_BROWSE,
  FIB_CUSTOM_PERCENTAGE,
  FIB_FEEDBACK_FORM,
  FIB_UNDERWRITING_JOURNEY,
  FIB_CONFIRM_PACKAGES,
  FIB_UNDERWRITING_REVIEW_ANSWERS,
  FIB_CONTACT_DETAILS,
  FIB_DECLARATION_CONFIRMATION,
  FIB_GP_DETAILS,
  FIB_FAQ_LIST,
  FIB_INTRO_YUGI,
  FIB_INFO,
  FIB_CHOOSE_STYLE,
  FIB_PAYOUT_CALCULATOR,
} from "./fib.types";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { connect } from "react-redux";
import FibCustomPercentage from "./subcontainers/fib.custom-percentage.container";
import FibFeedbackFormContainer from "./subcontainers/fib.feedback-form.container";
import FibUnderwritingJourneyContainer from "./subcontainers/fib.underwriting-journey.container";
import FibUnderwritingReviewAnswersContainer from "./subcontainers/fib.underwriting-review-answers.container";
import FibConfirmPackagesContainer from "./subcontainers/fib.confirm-packages.container";
import FibContactDetailsContainer from "./subcontainers/fib.contact-details.container";
import FibDeclarationConfirmationContainer from "./subcontainers/fib.declaration-confirmation.container";
import FibInfoContainer from "./subcontainers/fib.info.container";
import FibFaqListContainer from "./subcontainers/fib.faqs-list.container";
import FibGpDetailsContainer from "./subcontainers/fib.gp-details.container";
import FibChooseStyleContainer from "./subcontainers/fib.choose-style.container";
import FibYugiIntroContainer from "./subcontainers/fib.yugi-intro.container";
import FibPayoutCalculatorContainer from "./subcontainers/fib.payout-calculator.conainer";

interface RouteProps {
  navigation: FibLocalNavigation;
  selectedFaq: string;
  selectFaq: (faqId: string) => void;
  initialQuestionId?: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

type Props = ConnectedState & {
  initialRoute?: FibRoute;
  initialQuestionId?: string;
  initialProps: any;
};

function getComponent(routeProps: RouteProps) {
  const { navigation, selectedFaq, selectFaq, initialQuestionId } = routeProps;
  const {
    currentRoute: { route },
  } = navigation;

  switch (route) {
    case FIB_FAQ:
      return <FibFaqContainer selectedFaqId={selectedFaq} navigation={navigation} selectFaq={selectFaq} />;
    case FIB_CUSTOM_PERCENTAGE:
      return <FibCustomPercentage navigation={navigation} />;
    case FIB_FEEDBACK_FORM:
      return <FibFeedbackFormContainer navigation={navigation} />;
    case FIB_UNDERWRITING_JOURNEY:
      return <FibUnderwritingJourneyContainer navigation={navigation} initialQuestionId={initialQuestionId} />;
    case FIB_UNDERWRITING_REVIEW_ANSWERS:
      return <FibUnderwritingReviewAnswersContainer navigation={navigation} />;
    case FIB_CONFIRM_PACKAGES:
      return <FibConfirmPackagesContainer navigation={navigation} selectFaq={selectFaq} />;
    case FIB_CONTACT_DETAILS:
      return <FibContactDetailsContainer navigation={navigation} />;
    case FIB_DECLARATION_CONFIRMATION:
      return <FibDeclarationConfirmationContainer navigation={navigation} />;
    case FIB_INFO:
      return <FibInfoContainer navigation={navigation} />;
    case FIB_GP_DETAILS:
      return <FibGpDetailsContainer navigation={navigation} />;
    case FIB_FAQ_LIST:
      return <FibFaqListContainer navigation={navigation} selectFaq={selectFaq} />;
    case FIB_INTRO_YUGI:
      return <FibYugiIntroContainer navigation={navigation} />;
    case FIB_CHOOSE_STYLE:
      return <FibChooseStyleContainer navigation={navigation} />;
    case FIB_PAYOUT_CALCULATOR:
      return <FibPayoutCalculatorContainer navigation={navigation} />;
    default:
      return <FibBrowseContainer navigation={navigation} />;
  }
}

function popToMain() {
  return Navigation.popTo(ROUTES.yuScreen);
}

function getInitialRoute(props: Props): FibRoute {
  if (props.initialRoute) {
    return props.initialRoute;
  }

  if (props.salary) {
    return FIB_BROWSE;
  }

  return FIB_INTRO_YUGI;
}

function _FibContainer(props: Props) {
  const initialRoute = getInitialRoute(props);

  const fibRouter = useLocalNavigation<FibRoute>({
    initialRoute,
    popToMain,
    defaultRoute: FIB_BROWSE,
    initialProps: props.initialProps,
  });

  const [selectedFaq, selectFaq] = useState("");

  const component = getComponent({
    navigation: fibRouter,
    selectedFaq,
    selectFaq,
    initialQuestionId: props.initialQuestionId,
  });

  return component;
}

function mapStateToProps(store: IReduxState) {
  return {
    salary: getFIBState(store).salary,
  };
}

const FibContainer = connect<ConnectedState>(mapStateToProps)(_FibContainer);

export default FibContainer;
