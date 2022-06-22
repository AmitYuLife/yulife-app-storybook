import React, { memo, useContext, useEffect, useState } from "react";
import Logger from "@services/logging/logger";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useStripe, PaymentSheet, PaymentSheetError } from "@stripe/stripe-react-native";
import {
  ContentItemPersonalProductSelectPaymentButton as GqlSelectPaymentBtn,
  GetMobilePaymentCardSetup,
  ConfirmPaymentCard,
  ConfirmPaymentCardVariables,
} from "@graphql/_core/schema";
import { GQL_QUERY_GET_MOBILE_PAYMENT_CARD_SETUP, GQL_MUTATION_CONFIRM_PAYMENT_CARD } from "@graphql/payment";
import { ContentItemInfoButton } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";

type Props = GqlSelectPaymentBtn;

export const ProductStepSelectPaymentButton = memo((props: Props) => {
  const { button, companyName, companyCountryCode, themeStyle, applePayEnabled, googlePayEnabled } = props;
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const { dynamicData, setDynamicData } = useContext(ProductStepContext);
  const [needsRefetch, setsNeedsRefetch] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(false);

  const { data, refetch } = useQuery<GetMobilePaymentCardSetup>(GQL_QUERY_GET_MOBILE_PAYMENT_CARD_SETUP, {
    fetchPolicy: "network-only",
  });

  const [confirmPaymentCard] = useMutation<ConfirmPaymentCard, ConfirmPaymentCardVariables>(
    GQL_MUTATION_CONFIRM_PAYMENT_CARD
  );

  useEffect(() => {
    if (needsRefetch) {
      refetch().catch(() => null);
    }
  }, [needsRefetch]);

  useEffect(() => {
    if (data?.setup?.clientSecret) {
      setsNeedsRefetch(false);
      setButtonEnabled(true);
    }
  }, [data]);

  const handlePress = async () => {
    setButtonEnabled(false);

    try {
      await initPaymentSheet({
        customerId: data.setup.providerCustomerId,
        customerEphemeralKeySecret: data.setup.ephemeralSecret,
        setupIntentClientSecret: data.setup.clientSecret,
        merchantDisplayName: companyName,
        merchantCountryCode: companyCountryCode,
        applePay: applePayEnabled,
        googlePay: googlePayEnabled,
        style: themeStyle as PaymentSheet.SetupParams["style"],
        customFlow: false,
        testEnv: true,
      });

      const present = await presentPaymentSheet();

      if (present.error?.code === PaymentSheetError.Canceled) {
        return setButtonEnabled(true);
      }

      if (present.error?.code === PaymentSheetError.Failed) {
        return setsNeedsRefetch(true);
      }

      const res = await confirmPaymentCard({ variables: { paymentId: data.setup.paymentId } });
      setsNeedsRefetch(true);
      if (res?.data?.confirmPaymentCard) {
        setDynamicData((state) => ({ ...state, ...res.data.confirmPaymentCard }));
      }
    } catch (e) {
      Logger.error(e, { where: "payment-card-selection" });
      setsNeedsRefetch(true);
    }
  };

  const additionalInfo = (button?.answerKeys || [])
    .map((key) => dynamicData[key])
    .filter(Boolean)
    .join("\n");

  return <ContentItemInfoButton {...button} onPress={buttonEnabled && handlePress} additionalInfo={additionalInfo} />;
});
