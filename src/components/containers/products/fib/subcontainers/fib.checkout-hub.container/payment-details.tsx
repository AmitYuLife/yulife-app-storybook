import React, { memo } from "react";
import { InfoCard, LEFT_ICON } from "./info-card/info-card";
import { toCapitalLetter } from "@services/utils";
import { StripePaymentRequestToken } from "tipsi-stripe";
import { useSelector } from "react-redux";
import { getFullName } from "@redux/product/product.selectors";

interface Props {
  goToPaymentDetails: () => void;
  paymentProviderDetails: StripePaymentRequestToken;
}

export const PaymentDetails = memo(({ goToPaymentDetails, paymentProviderDetails }: Props) => {
  const fullName = useSelector(getFullName);
  const brand = paymentProviderDetails?.card?.brand || "";
  const last4 = paymentProviderDetails?.card?.last4 || "";
  const name = paymentProviderDetails?.billingDetails?.name || fullName;
  const expMonth = paymentProviderDetails?.card?.expMonth || "";
  const expYear = paymentProviderDetails?.card?.expYear || "";
  const hasCompleteData = brand && last4 && name && expMonth && !!expYear;
  const prompt = "Add payment details";
  const info = `**Payment Details**\n${transformBrandName(
    brand
  )} ending in ${last4}\n${name.toUpperCase()}\nExpires: ${expMonth}/${expYear}`;
  const markdown = hasCompleteData ? info : prompt;

  return (
    <InfoCard
      center={!hasCompleteData}
      leftIcon={getLeftIcon(hasCompleteData)}
      markdown={markdown}
      onPress={goToPaymentDetails}
    />
  );
});

const getLeftIcon = (hasCompleteData: boolean) => {
  if (hasCompleteData) {
    return LEFT_ICON.PAYMENT_DETAILS_COLOURED;
  }

  return LEFT_ICON.PAYMENT_DETAILS;
};

function transformBrandName(brand = "") {
  const normalised = brand.toLowerCase();

  switch (normalised) {
    case "amex":
      return "AMEX";
    case "unknown":
      return "Card";
    default:
      return toCapitalLetter(normalised);
  }
}
