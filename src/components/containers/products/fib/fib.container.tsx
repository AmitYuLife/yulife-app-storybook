import React, { useState } from "react";
import {
  FibBrowseContainer,
  FibIntroductionContainer,
  FibEditSalaryContainer,
  FibFaqContainer,
  FibSalaryDescriptionContainer,
} from "./subcontainers";
import { useLocalNavigation } from "@services/hooks/useLocalNavigation";
import {
  FibRoute,
  FibLocalNavigation,
  FIB_INTRODUCTION,
  FIB_SALARY_DESCRIPTION,
  FIB_FAQ,
  FIB_EDIT_SALARY,
  FIB_BROWSE,
  FIB_CUSTOM_PERCENTAGE,
  FIB_FEEDBACK_FORM,
  FIB_UNDERWRITING_JOURNEY,
} from "./fib.types";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { connect } from "react-redux";
import FibCustomPercentage from "./subcontainers/fib.custom-percentage.container";
import FibFeedbackFormContainer from "./subcontainers/fib.feedback-form.container";
import FibUnderwritingJourneyContainer from "./subcontainers/fib.underwriting-journey.container";

interface RouteProps {
  navigation: FibLocalNavigation;
  selectedFaq: string;
  selectFaq: (faqId: string) => void;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

type Props = ConnectedState;

function getComponent(routeProps: RouteProps) {
  const { navigation, selectedFaq, selectFaq } = routeProps;
  const {
    currentRoute: { route },
  } = navigation;

  switch (route) {
    case FIB_SALARY_DESCRIPTION:
      return <FibSalaryDescriptionContainer navigation={navigation} />;
    case FIB_EDIT_SALARY:
      return <FibEditSalaryContainer navigation={navigation} />;
    case FIB_FAQ:
      return <FibFaqContainer selectedFaqId={selectedFaq} navigation={navigation} selectFaq={selectFaq} />;
    case FIB_INTRODUCTION:
      return <FibIntroductionContainer navigation={navigation} />;
    case FIB_CUSTOM_PERCENTAGE:
      return <FibCustomPercentage navigation={navigation} />;
    case FIB_FEEDBACK_FORM:
      return <FibFeedbackFormContainer navigation={navigation} />;
    case FIB_UNDERWRITING_JOURNEY:
      return <FibUnderwritingJourneyContainer navigation={navigation} />;
    default:
      return <FibBrowseContainer selectFaq={selectFaq} navigation={navigation} />;
  }
}

function popToMain() {
  return Navigation.popTo(ROUTES.yuScreen);
}

function FIBContainer(props: Props) {
  const initialRoute = props.salary ? FIB_BROWSE : FIB_INTRODUCTION;

  const fibRouter = useLocalNavigation<FibRoute>({
    initialRoute,
    popToMain,
    defaultRoute: FIB_BROWSE,
  });

  const [selectedFaq, selectFaq] = useState("");

  const component = getComponent({
    navigation: fibRouter,
    selectedFaq,
    selectFaq,
  });

  return component;
}

function mapStateToProps(store: IReduxState) {
  return {
    salary: getFIBState(store).salary,
  };
}

export default connect<ConnectedState>(mapStateToProps)(FIBContainer);
