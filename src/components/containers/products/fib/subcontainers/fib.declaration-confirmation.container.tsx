import React, { memo, useState, useEffect, useCallback } from "react";
import { FibLocalNavigation } from "../fib.types";
import { connect } from "react-redux";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { FibConfirmationDeclarationScreen } from "@components/screens/products/fib/underwriting-journey/confirmation-declaration/fib.confirmation-declaration.screen";
import { FibConfirmationDetailsScreen } from "../../../../screens/products/fib/underwriting-journey/confirmation-declaration/fib.confirmation-details.screen";
import { useQuery } from "@apollo/react-hooks";
import { getFIBState } from "../../../../../redux/product/product.selectors";
import { Package } from "../../../../screens/products/fib/browse-packages/fib.browse.types";
import { getUserDateOfBirth } from "../../../../../redux/user/user.selectors";
import { calculatePayoutAmount, calculatePayoutCalculatorItems, packages } from "../fib.helpers";
import moment from "moment";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "../../../../../navigation/constants";
import {
  GetLifeInsuranceToUpsData,
  GetLifeInsuranceTopUpsVars,
  GQL_GET_LIFE_INSURANCE_TOP_UPS,
  LifeInsuranceUserAnswers,
} from "@graphql/products";

type ConnectedDispatch = typeof mapDispatchToProps;
type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IDeclarationConfirmationContainer {
  navigation: FibLocalNavigation;
}

type Props = IDeclarationConfirmationContainer & ConnectedDispatch & ConnectedState;

type ScreenId = "Confirmation" | "ConfirmationDetails";

const FibDeclarationConfirmationConatainer = memo(function (props: Props) {
  const { fibAnswers, grossSalary, selectedPackage, userDateOfBirth } = props;
  const [screenId, setScreenId] = useState<ScreenId>("Confirmation");
  const [statementConfirmed, setStatementConfirmed] = useState(false);
  const [deceaseAgeIndexYear, setDeceaseAgeIndexYear] = useState(0);
  const [deceaseAgeIndexMonth, setDeceaseAgeIndexMonth] = useState(0);
  const [payoutEstimatorItems, setPayoutEstimatorItems] = useState(
    calculatePayoutCalculatorItems(props.userDateOfBirth, deceaseAgeIndexYear)
  );

  const handleStatementConfirmed = () => {
    setStatementConfirmed((state) => !state);
  };

  useEffect(() => {
    const newItems = calculatePayoutCalculatorItems(props.userDateOfBirth, deceaseAgeIndexYear);
    setPayoutEstimatorItems(newItems);
  }, [deceaseAgeIndexYear, props.userDateOfBirth]);

  const userAnswers = Object.keys(fibAnswers).map((questionId: string) => {
    return {
      questionId,
      value: JSON.stringify(fibAnswers[questionId]),
    } as LifeInsuranceUserAnswers;
  });

  const customerAge = moment().diff(moment(userDateOfBirth), "years");

  const queryVariables: GetLifeInsuranceTopUpsVars = {
    grossSalary: grossSalary,
    coverType: selectedPackage,
    customCoverPercentage: 0,
    userAnswers,
  };

  const { loading, data } = useQuery<GetLifeInsuranceToUpsData, GetLifeInsuranceTopUpsVars>(
    GQL_GET_LIFE_INSURANCE_TOP_UPS,
    {
      variables: queryVariables,
      fetchPolicy: "cache-and-network",
    }
  );

  const deceaseAgeMonth =
    Number(payoutEstimatorItems.months[deceaseAgeIndexMonth]) ===
    Number(payoutEstimatorItems.months[deceaseAgeIndexMonth])
      ? payoutEstimatorItems.months[deceaseAgeIndexMonth]
      : payoutEstimatorItems.months[payoutEstimatorItems.months.length - 1] || 0; // Never show error, default to 0

  const deceaseAgeYear = payoutEstimatorItems.years[deceaseAgeIndexYear];

  const payoutAmount = calculatePayoutAmount({
    deceaseAgeMonth,
    deceaseAgeYear,
    sumAssured: data?.getLifeInsuranceTopUps?.sumAssured,
    term: data?.getLifeInsuranceTopUps?.term,
    dateOfBirth: userDateOfBirth,
  });

  const monthlyAmountProtected = Math.round(
    ((data?.getLifeInsuranceTopUps?.sumAssured / (data?.getLifeInsuranceTopUps?.term * 12)) * 100) / 100
  );

  const packageDetails: Package = {
    newEarnRate: data?.getLifeInsuranceTopUps.newEarnRate || 0,
    payoutAmount: Math.round(payoutAmount),
    earnRate: data?.getLifeInsuranceTopUps.earnRate || 0,
    salaryPercentageCovered: data?.getLifeInsuranceTopUps.salaryPercentageCovered || 0,
    estimatedCost: data?.getLifeInsuranceTopUps.estimatedCost || 0,
    id: selectedPackage,
    label: packages[selectedPackage].label,
    descriptionHeading: data?.getLifeInsuranceTopUps.descriptionHeading || "",
    term: data?.getLifeInsuranceTopUps.term,
    monthlyAmountProtected,
    actualCost: data?.getLifeInsuranceTopUps.actualCost || 0,
  };

  const onClose = useCallback(async () => {
    await Navigation.popTo(ROUTES.yuScreen);
  }, []);

  switch (screenId) {
    case "Confirmation":
      return (
        <FibConfirmationDeclarationScreen
          onClose={onClose}
          onBackButtonPress={onClose}
          onContinueButton={onClose}
          onDetailsPress={() => setScreenId("ConfirmationDetails")}
          selectedPackage={selectedPackage}
          actualCost={packageDetails.actualCost}
          loading={loading}
          statementConfirmed={statementConfirmed}
          setStatementConfirmed={handleStatementConfirmed}
        />
      );

    case "ConfirmationDetails":
      return (
        <FibConfirmationDetailsScreen
          onClose={onClose}
          onBackButtonPress={() => setScreenId("Confirmation")}
          selectedPackage={packageDetails}
          payoutEstimatorItems={payoutEstimatorItems}
          setDeceaseAgeIndexYear={setDeceaseAgeIndexYear}
          setDeceaseAgeIndexMonth={setDeceaseAgeIndexMonth}
          loading={loading}
          customerAge={customerAge}
        />
      );
  }
});

const mapStateToProps = (state: IReduxState) => ({
  fibAnswers: getFIBState(state).answers,
  grossSalary: getFIBState(state).salary,
  selectedPackage: getFIBState(state).selectedPackage,
  userDateOfBirth: getUserDateOfBirth(state),
});

const mapDispatchToProps = {};

export default connect<ConnectedState, ConnectedDispatch>(
  mapStateToProps,
  mapDispatchToProps
)(FibDeclarationConfirmationConatainer);
