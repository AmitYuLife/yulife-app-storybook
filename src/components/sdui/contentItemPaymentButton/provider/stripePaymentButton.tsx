import { memo, useCallback, useEffect, useState } from "react";
import {
  ContentItemPaymentButtonFragment as GqlPaymentButton,
  ContentItemButtonFragment as GqlButton,
  StripePaymentIntent,
} from "@graphql/__generated";
import { StripeProvider, useStripe } from "@stripe/stripe-react-native";
import { ContentItemButton } from "../../contentItemButton/contentItemButton";
import { Alert } from "react-native";
import { useSduiCallbackFunctionOrReduxAction } from "../../_hooks";
import Config from "react-native-config";
import Logger from "@services/logging/logger";

type Props = Pick<GqlPaymentButton, "onSubmit"> & {
  paymentIntent: StripePaymentIntent;
  buttonProps: Omit<GqlButton, "__typename">;
};

const StripePaymentButton = memo((props: Props) => {
  const { onSubmit, paymentIntent, buttonProps } = props;

  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { handleSduiAction } = useSduiCallbackFunctionOrReduxAction(onSubmit);

  const initializePaymentSheet = useCallback(
    async (currentPaymentIntent: Props["paymentIntent"]) => {
      setIsLoading(true);

      const { error } = await initPaymentSheet({
        merchantDisplayName: currentPaymentIntent.merchantDisplayName,
        customerId: currentPaymentIntent.paymentProviderCustomerId,
        customerEphemeralKeySecret: currentPaymentIntent.ephemeralSecret,
        paymentIntentClientSecret: currentPaymentIntent.clientSecret,
        allowsDelayedPaymentMethods: false,
        // TODO: test returnUrl
        returnURL: currentPaymentIntent.returnUrl,
        applePay: {
          merchantCountryCode: currentPaymentIntent.applePay.merchantCountryCode,
        },
        googlePay: {
          merchantCountryCode: currentPaymentIntent.googlePay.merchantCountryCode,
          testEnv: currentPaymentIntent.googlePay.isTestEnv,
        },
      });

      if (!error) {
        setIsLoading(false);
      }
    },
    [setIsLoading, initPaymentSheet]
  );

  const openPaymentSheet = useCallback(async () => {
    setIsSubmitting(true);

    try {
      const result = await presentPaymentSheet();

      if (result.error) {
        throw new Error(result.error.message);
      }

      await handleSduiAction(); // TODO hook up event tracking
    } catch (err) {
      // TODO - this gives some weird Stripe errors, probably need to rethink error handling
      Alert.alert("Error", err.message);
      Logger.error(err.message, { file: "stripePaymentButton.openPaymentSheet" });
    } finally {
      // reset loading state - if the onSubmit failed, the button will be enabled again
      // NB: we should have set refetchQueries: ["GetSduiJourney"] on the SDUI mutation
      // to ensure a new paymentIntent is fetched and the payment sheet re-initialized
      setIsSubmitting(false);
    }
  }, [setIsSubmitting, handleSduiAction, presentPaymentSheet]);

  useEffect(() => {
    initializePaymentSheet(paymentIntent);
  }, [initializePaymentSheet, paymentIntent]);

  return (
    <StripeProvider
      publishableKey={paymentIntent.provider.clientKey}
      merchantIdentifier={paymentIntent.provider.merchantIdentifier}
      urlScheme={Config.URL_SCHEME}
    >
      <ContentItemButton
        {...buttonProps}
        onPress={openPaymentSheet}
        disabled={isLoading || isSubmitting}
        isLoading={isLoading || isSubmitting}
      />
    </StripeProvider>
  );
});

export default StripePaymentButton;
