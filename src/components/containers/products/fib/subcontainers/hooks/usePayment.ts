import stripe, { StripePaymentRequestToken } from "tipsi-stripe";
import { useState, useEffect, useCallback } from "react";
import { getFIBState, getFullName } from "@redux/product/product.selectors";
import { useSelector } from "react-redux";
import { FIB_INFO, FibLocalNavigation, FIB_FEEDBACK_FORM } from "../../fib.types";
import { InfoTypes } from "../fib.info.container";
import { toCapitalLetter } from "@services/utils";
import { Linking } from "react-native";
import { ProductCode } from "@graphql/_core/schema/globalTypes";
import {
  AddPaymentCard,
  AddPaymentCardVariables,
  ConfirmPaymentCard,
  ConfirmPaymentCardVariables,
  SubscribeToProduct,
  SubscribeToProductVariables,
} from "@graphql/_core/schema";
import { useMutation } from "@apollo/react-hooks";
import { GQL_QUERY_GET_TOP_UPS_QUOTE, GQL_MUTATION_SUBSCRIBE_TO_PRODUCT } from "@graphql/products";
import { GQL_MUTATION_ADD_PAYMENT_CARD, GQL_MUTATION_CONFIRM_PAYMENT_CARD } from "@graphql/payment";
import Logger from "@services/logging/logger";
import { getUserFeatures } from "@redux/user/user.selectors";

interface IUsePayment {
  navigation: FibLocalNavigation;
}

type SubmissionStatus = "not_submitted" | "waiting" | "submitted";

export const usePayment = ({ navigation }: IUsePayment) => {
  const {
    answers: { contactDetails },
  } = useSelector(getFIBState);
  const { productEntityId, latestQuoteId, medicalInvestigationRequired, selectedPackage } = useSelector(getFIBState);
  const fullName = useSelector(getFullName);
  const [paymentProviderDetails, setPaymentProviderDetails] = useState(null as StripePaymentRequestToken);
  const [isPaymentCollected, setPaymentCollected] = useState(false);
  const [isProductPurchased, setProductPurchased] = useState(false);
  const [isPaymentCancelled, setPaymentCancelled] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>("not_submitted");
  const paymentsEnabled = useSelector(getUserFeatures).paymentsEnabled;

  const [subscribeToProduct] = useMutation<SubscribeToProduct, SubscribeToProductVariables>(
    GQL_MUTATION_SUBSCRIBE_TO_PRODUCT
  );
  const [addPaymentCard] = useMutation<AddPaymentCard, AddPaymentCardVariables>(GQL_MUTATION_ADD_PAYMENT_CARD);
  const [confirmPaymentCard] = useMutation<ConfirmPaymentCard, ConfirmPaymentCardVariables>(
    GQL_MUTATION_CONFIRM_PAYMENT_CARD,
    {
      refetchQueries: [
        {
          query: GQL_QUERY_GET_TOP_UPS_QUOTE,
          variables: {
            product: ProductCode.YULFIB,
            input: {
              customerProductEntityId: productEntityId,
              quoteId: latestQuoteId,
            },
          },
        },
      ], // Update waiting for MSS quote status
    }
  );

  const handlePressPayment = useCallback(async () => {
    const {
      personalEmail,
      phoneNumber,
      firstAddressLine,
      secondAddressLine,
      townOrCity,
      postCode,
    } = contactDetails || {
      personalEmail: "",
      phoneNumber: "",
      firstAddressLine: "",
      secondAddressLine: "",
      townOrCity: "",
      postCode: "",
    };

    try {
      const response = await stripe.paymentRequestWithCardForm({
        requiredBillingAddressFields: "full",
        managedAccountCurrency: "gbp",
        prefilledInformation: {
          email: personalEmail || "",
          phone: phoneNumber || "",
          billingAddress: {
            name: fullName || "",
            line1: firstAddressLine || "",
            line2: secondAddressLine || "",
            city: townOrCity || "",
            postalCode: postCode || "",
            country: "GB",
            email: personalEmail || "",
            phone: phoneNumber || "",
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

      const { data: addPaymentCardResponse } = await addPaymentCard({
        variables: { providerPaymentMethodId: response.id || "" },
      });

      if (addPaymentCardResponse?.addPaymentCard?.clientSecret) {
        const confirmation = await stripe.confirmSetupIntent({
          paymentMethodId: response.id,
          clientSecret: addPaymentCardResponse?.addPaymentCard?.clientSecret,
        });

        if (confirmation.status !== "succeeded") {
          // TODO: Show error
          return;
        }
      }

      if (addPaymentCardResponse?.addPaymentCard?.redirectUrl) {
        await Linking.openURL(addPaymentCardResponse?.addPaymentCard?.redirectUrl);
      }

      const res = await confirmPaymentCard({
        variables: {
          providerPaymentMethodId: response.id,
          paymentId: addPaymentCardResponse?.addPaymentCard?.paymentId,
        },
      });

      setPaymentCollected(res?.data?.confirmPaymentCard || false);
      setPaymentProviderDetails(response);
    } catch (error) {
      setPaymentCancelled(true);
      Logger.error(error, {
        file: "src/components/containers/products/fib/subcontainers/hooks/usePayment.ts",
        function: "handlePressPayment",
      });
      return;
    }
  }, [addPaymentCard, confirmPaymentCard, setPaymentCollected, setPaymentProviderDetails, contactDetails, fullName]);

  const handleConfirmPayment = useCallback(async () => {
    if (!paymentsEnabled) {
      return navigation.push(FIB_FEEDBACK_FORM);
    }

    setSubmissionStatus("waiting");

    const { data } = await subscribeToProduct({ variables: { productCode: ProductCode.YULFIB } });

    setProductPurchased(data?.subscribeToProduct?.purchased || false);
    setSubmissionStatus("submitted");
  }, [subscribeToProduct, navigation, paymentsEnabled]);

  useEffect(() => {
    if (submissionStatus === "submitted") {
      if (isProductPurchased) {
        return navigation.push(FIB_INFO, {
          type: InfoTypes.paymentCongrats,
          packageType: toCapitalLetter(selectedPackage),
        });
      }

      if (isPaymentCollected && medicalInvestigationRequired) {
        return navigation.push(FIB_INFO, { type: InfoTypes.holdingGP });
      }

      // TODO: Something went wrong, show holding payment screen? error screen?
      if ((isPaymentCollected && !isProductPurchased) || isPaymentCancelled) {
        return navigation.push(FIB_INFO, { type: InfoTypes.holdingGP });
      }
    }
  }, [
    isProductPurchased,
    isPaymentCollected,
    isPaymentCancelled,
    submissionStatus,
    selectedPackage,
    medicalInvestigationRequired,
    navigation,
  ]);

  return {
    paymentProviderDetails,
    handlePressPayment,
    handleConfirmPayment,
    paymentLoading: submissionStatus === "waiting",
  };
};
