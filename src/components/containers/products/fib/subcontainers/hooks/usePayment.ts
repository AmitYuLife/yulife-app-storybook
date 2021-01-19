import stripe, { StripePaymentRequestToken } from "tipsi-stripe";
import { useState, useEffect, useCallback } from "react";
import { getFIBState, getFullName } from "@redux/product/product.selectors";
import { useSelector } from "react-redux";
import { FIB_INFO, FibLocalNavigation } from "../../fib.types";
import { InfoTypes } from "../fib.info.container";
import { toCapitalLetter } from "@services/utils";
import { Linking } from "react-native";
import { ProductCode, PaymentMethodType } from "@graphql/_core/schema/globalTypes";
import { ConfirmPaymentMethod } from "@graphql/_core/schema";
import { useMutation } from "@apollo/react-hooks";
import {
  CollectPaymentMethodMutationTuple,
  GQL_MUTATION_COLLECT_PAYMENT_METHOD,
  GQL_QUERY_GET_TOP_UPS_QUOTE,
} from "@graphql/products";
import {
  ConfirmPaymentMethodMutationTuple,
  GQL_MUTATION_CONFIRM_PAYMENT_METHOD,
} from "@graphql/products/confirmPaymentMethod";
import Logger from "@services/logging/logger";

interface IUsePayment {
  navigation: FibLocalNavigation;
}

export const usePayment = ({ navigation }: IUsePayment) => {
  const {
    answers: { contactDetails },
  } = useSelector(getFIBState);
  const { productEntityId, latestQuoteId, medicalInvestigationRequired, selectedPackage } = useSelector(getFIBState);
  const fullName = useSelector(getFullName);
  const [paymentProviderDetails, setPaymentProviderDetails] = useState(null as StripePaymentRequestToken);
  const [paymentProgress, setPaymentProgress] = useState({ collected: false, purchased: false, canceled: false });
  const [paymentLoading, setPaymentLoading] = useState(false);

  const [collectPaymentMethod]: CollectPaymentMethodMutationTuple = useMutation(GQL_MUTATION_COLLECT_PAYMENT_METHOD);
  const [confirmPaymentMethod]: ConfirmPaymentMethodMutationTuple = useMutation(GQL_MUTATION_CONFIRM_PAYMENT_METHOD, {
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
  });

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

      setPaymentProviderDetails(response);
    } catch (error) {
      Logger.error(error, {
        file: "src/components/containers/products/fib/subcontainers/hooks/usePayment.ts",
        function: "handlePressPayment",
      });
      return;
    }
  }, [setPaymentProviderDetails, contactDetails, fullName]);

  const handleConfirmPayment = useCallback(async () => {
    setPaymentLoading(true);
    const { data: collectPaymentResponse } = await collectPaymentMethod({
      variables: {
        input: {
          paymentMethodId: paymentProviderDetails?.id || "",
          type: PaymentMethodType.card,
          productCode: ProductCode.YULFIB,
        },
      },
    });

    if (collectPaymentResponse?.collectPaymentMethod?.clientSecret) {
      let confirmPaymentResponse: ConfirmPaymentMethod;
      try {
        const confirm = await stripe.confirmSetupIntent({
          paymentMethodId: paymentProviderDetails.id,
          clientSecret: collectPaymentResponse?.collectPaymentMethod?.clientSecret,
        });

        if (confirm.status !== "succeeded") {
          // TODO: Show error
        }

        const { data: confirmMutation } = await confirmPaymentMethod({
          variables: {
            paymentMethodId: confirm.paymentMethodId,
            productCode: ProductCode.YULFIB,
          },
        });
        confirmPaymentResponse = confirmMutation;
      } catch (error) {
        Logger.error(error, {
          file: "src/components/containers/products/fib/subcontainers/hooks/usePayment.ts",
          function: "handleConfirmPayment",
        });
      } finally {
        setPaymentLoading(false);
        setPaymentProgress({
          purchased: confirmPaymentResponse?.confirmPaymentMethod?.purchased || false,
          canceled: true,
          collected: collectPaymentResponse?.collectPaymentMethod?.collected,
        });
      }
    }

    if (collectPaymentResponse?.collectPaymentMethod?.nextStepUrl) {
      await Linking.openURL(collectPaymentResponse?.collectPaymentMethod?.nextStepUrl);
    }

    setPaymentLoading(false);
  }, [collectPaymentMethod, confirmPaymentMethod, paymentProviderDetails]);

  useEffect(() => {
    if (paymentProgress.purchased) {
      return navigation.push(FIB_INFO, {
        type: InfoTypes.paymentCongrats,
        packageType: toCapitalLetter(selectedPackage),
      });
    }

    if (paymentProgress.collected && medicalInvestigationRequired) {
      return navigation.push(FIB_INFO, { type: InfoTypes.holdingGP });
    }

    // TODO: Something went wrong, show holding payment screen? error screen?
    if ((paymentProgress.collected && !paymentProgress.purchased) || paymentProgress.canceled) {
      return navigation.push(FIB_INFO, { type: InfoTypes.holdingGP });
    }
  }, [paymentProgress, selectedPackage, medicalInvestigationRequired, navigation]);

  return { paymentProviderDetails, handlePressPayment, handleConfirmPayment, paymentLoading };
};
