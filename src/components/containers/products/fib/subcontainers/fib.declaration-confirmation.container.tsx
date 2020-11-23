import React, { memo, useState, useEffect, useCallback } from "react";
import { FibLocalNavigation, FIB_INFO } from "../fib.types";
import { connect } from "react-redux";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { FibConfirmationDeclarationScreen } from "@components/screens/products/fib/underwriting-journey/confirmation-declaration/fib.confirmation-declaration.screen";
import { FibConfirmationDetailsScreen } from "../../../../screens/products/fib/underwriting-journey/confirmation-declaration/fib.confirmation-details.screen";
import { useQuery } from "@apollo/react-hooks";
import { getFIBState, getFullName, getBirthday } from "../../../../../redux/product/product.selectors";
import { Package } from "../../../../screens/products/fib/browse-packages/fib.browse.types";
import { getUserDateOfBirth } from "../../../../../redux/user/user.selectors";
import { calculatePayoutAmount, calculatePayoutCalculatorItems, packages } from "../fib.helpers";
import stripe from "tipsi-stripe";
import moment from "moment";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "../../../../../navigation/constants";
import Logger from "@services/logging/logger";
import { InfoTypes } from "./fib.info.container";
import { toCapitalLetter } from "../../../../../services/utils";
import { GQL_QUERY_GET_TOP_UPS_QUOTE } from "@graphql/products";
import { GetTopUpsQuote, GetTopUpsQuoteVariables } from "../../../../../graphql/_core/schema/GetTopUpsQuote";
import { ProductCode } from "../../../../../graphql/_core/schema/globalTypes";

type ConnectedDispatch = typeof mapDispatchToProps;
type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IDeclarationConfirmationContainer {
  navigation: FibLocalNavigation;
}

type Props = IDeclarationConfirmationContainer & ConnectedDispatch & ConnectedState;

type ScreenId = "Confirmation" | "ConfirmationDetails";

const FibDeclarationConfirmationContainer = memo(function (props: Props) {
  const { fibState, userDateOfBirth, userDateOfBirthFib, fullName, navigation } = props;
  const {
    medicalInvestigationRequired,
    selectedPackage,
    answers: fibAnswers,
    latestQuoteId,
    productEntityId,
  } = fibState;
  const [screenId, setScreenId] = useState<ScreenId>("Confirmation");
  const [statementConfirmed, setStatementConfirmed] = useState(false);
  const [deceaseAgeIndexYear, setDeceaseAgeIndexYear] = useState(0);
  const [deceaseAgeIndexMonth, setDeceaseAgeIndexMonth] = useState(0);
  const [payoutEstimatorItems, setPayoutEstimatorItems] = useState(
    calculatePayoutCalculatorItems(props.userDateOfBirthFib || props.userDateOfBirth, deceaseAgeIndexYear)
  );

  const handleStatementConfirmed = () => {
    setStatementConfirmed((state) => !state);
  };

  useEffect(() => {
    const newItems = calculatePayoutCalculatorItems(
      props.userDateOfBirthFib || props.userDateOfBirth,
      deceaseAgeIndexYear
    );
    setPayoutEstimatorItems(newItems);
  }, [deceaseAgeIndexYear, props.userDateOfBirthFib, props.userDateOfBirth]);

  const customerAge = moment().diff(moment(userDateOfBirthFib || userDateOfBirth), "years");

  const { loading, data } = useQuery<GetTopUpsQuote, GetTopUpsQuoteVariables>(GQL_QUERY_GET_TOP_UPS_QUOTE, {
    variables: {
      input: {
        customerProductEntityId: productEntityId,
        quoteId: latestQuoteId,
      },
      product: ProductCode.YULFIB,
    },
    fetchPolicy: "cache-and-network",
  });

  const deceaseAgeMonth =
    Number(payoutEstimatorItems.months[deceaseAgeIndexMonth]) ===
    Number(payoutEstimatorItems.months[deceaseAgeIndexMonth])
      ? payoutEstimatorItems.months[deceaseAgeIndexMonth]
      : payoutEstimatorItems.months[payoutEstimatorItems.months.length - 1] || 0; // Never show error, default to 0

  const deceaseAgeYear = payoutEstimatorItems.years[deceaseAgeIndexYear];

  const payoutAmount = calculatePayoutAmount({
    deceaseAgeMonth,
    deceaseAgeYear,
    sumAssured: data?.getTopUpsQuote?.sumAssured,
    term: data?.getTopUpsQuote?.term,
    dateOfBirth: userDateOfBirthFib || userDateOfBirth,
  });

  const monthlyAmountProtected = Math.round(
    ((data?.getTopUpsQuote?.sumAssured / (data?.getTopUpsQuote?.term * 12)) * 100) / 100
  );

  const packageDetails: Package = {
    newEarnRate: data?.getTopUpsQuote?.newEarnRate || 0,
    payoutAmount: Math.round(payoutAmount),
    earnRate: data?.getTopUpsQuote?.earnRate || 0,
    salaryPercentageCovered: data?.getTopUpsQuote?.salaryPercentageCovered || 0,
    estimatedCost: data?.getTopUpsQuote?.actualCost || 0,
    id: selectedPackage,
    label: packages[selectedPackage].label,
    descriptionHeading: data?.getTopUpsQuote?.descriptionHeading || "",
    term: data?.getTopUpsQuote?.term,
    monthlyAmountProtected,
    actualCost: data?.getTopUpsQuote?.actualCost || 0,
  };

  const onClose = useCallback(async () => {
    await Navigation.popTo(ROUTES.yuScreen);
  }, []);

  const onContinue = useCallback(async () => {
    const contactDetails = fibAnswers.contactDetails;
    const options: any = {
      requiredBillingAddressFields: "full",
      managedAccountCurrency: "gbp",
      smsAutofillDisabled: true,
      prefilledInformation: {
        billingAddress: {
          name: fullName,
          line1: contactDetails.firstAddressLine,
          line2: contactDetails.secondAddressLine,
          city: contactDetails.townOrCity,
          state: "",
          country: "UK",
          postalCode: contactDetails.postCode,
        },
      },
    };

    try {
      stripe.setOptions({
        publishableKey: "pk_test_VqumpwZa4KKxLtY7NbqR4vSp",
      });

      // returned token will be sent to the server to take payments
      await stripe.paymentRequestWithCardForm(options);

      if (medicalInvestigationRequired) {
        navigation.push(FIB_INFO, { type: "HoldingGP" } as { type: InfoTypes });
      } else {
        navigation.push(FIB_INFO, { type: "PaymentCongratulation", packageType: toCapitalLetter(selectedPackage) } as {
          type: InfoTypes;
          packageType: string;
        });
      }
    } catch (e) {
      Logger.logEvent("fib_payment_failed", { message: e.message });
    }
  }, [navigation, fibAnswers, fullName, medicalInvestigationRequired, selectedPackage]);

  switch (screenId) {
    case "Confirmation":
      return (
        <FibConfirmationDeclarationScreen
          onClose={onClose}
          onBackButtonPress={() => navigation.pop()}
          onContinueButton={onContinue}
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
  fibState: getFIBState(state),
  userDateOfBirth: getUserDateOfBirth(state),
  userDateOfBirthFib: getBirthday(state, "YYYY-MM-DD"),
  fullName: getFullName(state),
});

const mapDispatchToProps = {};

export default connect<ConnectedState, ConnectedDispatch>(
  mapStateToProps,
  mapDispatchToProps
)(FibDeclarationConfirmationContainer);
