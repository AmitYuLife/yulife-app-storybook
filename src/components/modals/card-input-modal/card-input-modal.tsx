// TODO: Create generic modal that accept components as props
import React from "react";
import stripe, { CardTokenParams } from "tipsi-stripe";
import { Navigation } from "react-native-navigation";
import Logger from "@services/logging/logger";
import { MODALS } from "@navigation/constants";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { CardInputScreen } from "../../screens/products/fib/card-input-form/card-input-form";
import { ContactDetails } from "../../../redux/product/product.types";
import { useMutation } from "@apollo/react-hooks";
import { CollectPaymentMethodMutationTuple, GQL_MUTATION_COLLECT_PAYMENT_METHOD } from "../../../graphql/products";
import { PaymentMethodType } from "../../../graphql/_core/schema/globalTypes";

interface CardInputModalProps {
  contactDetails: ContactDetails & { fullName: string };
  setPaymentProgress: React.Dispatch<
    React.SetStateAction<{
      cardDetailsSent: boolean;
      purchased: boolean;
    }>
  >;
}

export default function CardInputModal(props: CardInputModalProps) {
  const { contactDetails, setPaymentProgress } = props;

  const [collectPaymentMethod, { loading }]: CollectPaymentMethodMutationTuple = useMutation(
    GQL_MUTATION_COLLECT_PAYMENT_METHOD
  );

  const backHandler = () => {
    Navigation.dismissModal(MODALS.cardInput);
    return true;
  };

  useBackHandler(backHandler);

  const handleOnContinue = async (form: CardTokenParams) => {
    try {
      const stripeToken = await stripe.createTokenWithCard(form);
      const { data } = await collectPaymentMethod({
        variables: {
          token: stripeToken.tokenId,
          type: PaymentMethodType.card,
        },
      });
      setPaymentProgress({
        purchased: data?.collectPaymentMethod?.purchased,
        cardDetailsSent: true,
      });
    } catch (error) {
      Logger.logEvent("fib_payment_failed", { message: error.message });
    } finally {
      backHandler();
    }
  };

  return (
    <CardInputScreen
      onNavigateBack={backHandler}
      onContinue={handleOnContinue}
      contactDetails={contactDetails}
      loading={loading}
    />
  );
}
