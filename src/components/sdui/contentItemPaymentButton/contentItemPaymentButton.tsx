import { memo } from "react";
import {
  ContentItemPaymentButtonFragment as GqlPaymentButton,
  ContentItemButtonFragment as GqlButton,
} from "@graphql/__generated";
import StripePaymentButton from "./provider/stripePaymentButton";
import { omit } from "lodash";

type Props = GqlPaymentButton;

export const ContentItemPaymentButton = memo((props: Props) => {
  const { paymentIntent, onSubmit, ...otherProps } = props;

  const buttonProps: Omit<GqlButton, "__typename"> = omit(otherProps, "__typename");

  if (props.paymentIntent.identifier === "stripe") {
    return <StripePaymentButton paymentIntent={paymentIntent} onSubmit={onSubmit} buttonProps={buttonProps} />;
  }
});
