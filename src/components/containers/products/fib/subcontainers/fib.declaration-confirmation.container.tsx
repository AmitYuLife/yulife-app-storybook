import React, { memo, useState, useEffect, useCallback } from "react";
import { Linking } from "react-native";
import stripe from "tipsi-stripe";
import { FibLocalNavigation, FIB_INFO } from "../fib.types";
import { connect } from "react-redux";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { FibConfirmationDeclarationScreen } from "@components/screens/products/fib/underwriting-journey/confirmation-declaration/fib.confirmation-declaration.screen";
import { FibConfirmationDetailsScreen } from "../../../../screens/products/fib/underwriting-journey/confirmation-declaration/fib.confirmation-details.screen";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { getFIBState, getFullName, getBirthday } from "../../../../../redux/product/product.selectors";
import { Package } from "../../../../screens/products/fib/browse-packages/fib.browse.types";
import { getUserDateOfBirth } from "../../../../../redux/user/user.selectors";
import { calculatePayoutAmount, calculatePayoutCalculatorItems, onUnderwritingClose, packages } from "../fib.helpers";
import moment from "moment";
import { InfoTypes } from "./fib.info.container";
import { toCapitalLetter } from "../../../../../services/utils";
import {
  CollectPaymentMethodMutationTuple,
  GQL_MUTATION_COLLECT_PAYMENT_METHOD,
  GQL_QUERY_GET_TOP_UPS_QUOTE,
} from "@graphql/products";
import { GetTopUpsQuote, GetTopUpsQuoteVariables } from "../../../../../graphql/_core/schema/GetTopUpsQuote";
import { PaymentMethodType, ProductCode } from "../../../../../graphql/_core/schema/globalTypes";
import {
  ConfirmPaymentMethodMutationTuple,
  GQL_MUTATION_CONFIRM_PAYMENT_METHOD,
} from "../../../../../graphql/products/confirmPaymentMethod";

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
  const [paymentProgress, setPaymentProgress] = useState({ collected: false, purchased: false, canceled: false });
  const [paymentLoading, setPaymentLoading] = useState(false);

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

  const [collectPaymentMethod]: CollectPaymentMethodMutationTuple = useMutation(GQL_MUTATION_COLLECT_PAYMENT_METHOD);
  const [confirmPaymentMethod]: ConfirmPaymentMethodMutationTuple = useMutation(GQL_MUTATION_CONFIRM_PAYMENT_METHOD);

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
  // TODO: Helper -> buildPackageDetailsFromQuote
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

  // TODO: Move function to a helper
  const onContinue = useCallback(async () => {
    const stripeToken = await stripe.paymentRequestWithCardForm({
      requiredBillingAddressFields: "full",
      managedAccountCurrency: "gbp",
      prefilledInformation: {
        email: fibAnswers.contactDetails.personalEmail,
        phone: fibAnswers.contactDetails.phoneNumber,
        billingAddress: {
          name: fullName,
          line1: fibAnswers.contactDetails.firstAddressLine,
          line2: fibAnswers.contactDetails.secondAddressLine,
          city: fibAnswers.contactDetails.townOrCity,
          postalCode: fibAnswers.contactDetails.postCode,
          country: "GB",
          email: fibAnswers.contactDetails.personalEmail,
          phone: fibAnswers.contactDetails.phoneNumber,
        },
      },
      // TODO: Customize theme
      theme: {
        primaryBackgroundColor: "",
        secondaryBackgroundColor: "",
        primaryForegroundColor: "",
        secondaryForegroundColor: "",
        accentColor: "",
        errorColor: "",
      },
    });
    setPaymentLoading(true);
    const { data: collectPaymentResponse } = await collectPaymentMethod({
      variables: {
        input: {
          paymentMethodId: stripeToken.id,
          type: PaymentMethodType.card,
          productCode: ProductCode.YULFIB,
        },
      },
    });

    if (collectPaymentResponse?.collectPaymentMethod?.clientSecret) {
      try {
        const confirm = await stripe.confirmSetupIntent({
          paymentMethodId: stripeToken.id,
          clientSecret: collectPaymentResponse?.collectPaymentMethod?.clientSecret,
        });

        if (confirm.status !== "succeeded") {
          // TODO: Show error
        }

        const { data: confirmPaymentResponse } = await confirmPaymentMethod({
          variables: {
            paymentMethodId: confirm.paymentMethodId,
            productCode: ProductCode.YULFIB,
          },
        });

        setPaymentProgress({
          purchased: confirmPaymentResponse?.confirmPaymentMethod?.purchased,
          canceled: false,
          collected: collectPaymentResponse?.collectPaymentMethod?.collected,
        });
        setPaymentLoading(false);
      } catch (error) {
        // TODO: Don't change screen, show cancelled message
        setPaymentProgress({
          purchased: false,
          canceled: true,
          collected: collectPaymentResponse?.collectPaymentMethod?.collected,
        });
        setPaymentLoading(false);
      }
    }

    if (collectPaymentResponse?.collectPaymentMethod?.nextStepUrl) {
      await Linking.openURL(collectPaymentResponse?.collectPaymentMethod?.nextStepUrl);
    }

    setPaymentLoading(false);
  }, [fibAnswers.contactDetails, fullName, setPaymentProgress, collectPaymentMethod, confirmPaymentMethod]);

  /**
   *  TODO:
   * Show something when canceled
   * Redirect to screens in function of quote status
   *  */

  if (paymentProgress.purchased) {
    navigation.push(FIB_INFO, {
      type: InfoTypes.paymentCongrats,
      packageType: toCapitalLetter(selectedPackage),
    });
    return;
  }

  if (paymentProgress.collected && !paymentProgress.purchased) {
    if (medicalInvestigationRequired) {
      navigation.push(FIB_INFO, { type: InfoTypes.holdingGP });
    } else {
      // TODO: Something went wrong, show holding payment screen? error screen?
      navigation.push(FIB_INFO, {
        type: InfoTypes.paymentCongrats,
        packageType: toCapitalLetter(selectedPackage),
      });
    }

    return;
  }

  switch (screenId) {
    case "Confirmation":
      return (
        <FibConfirmationDeclarationScreen
          onClose={onUnderwritingClose}
          onBackButtonPress={() => {
            navigation.history[navigation.history.length - 2].passProps.navigatingBack = true;
            navigation.pop();
          }}
          onContinueButton={onContinue}
          onDetailsPress={() => setScreenId("ConfirmationDetails")}
          selectedPackage={selectedPackage}
          actualCost={packageDetails.actualCost}
          loading={loading || paymentLoading}
          statementConfirmed={statementConfirmed}
          setStatementConfirmed={handleStatementConfirmed}
        />
      );

    case "ConfirmationDetails":
      return (
        <FibConfirmationDetailsScreen
          onClose={onUnderwritingClose}
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
