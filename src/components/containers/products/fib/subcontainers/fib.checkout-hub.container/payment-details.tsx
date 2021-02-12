import React, { memo } from "react";
import { InfoCard, LEFT_ICON } from "./info-card/info-card";
import { toCapitalLetter } from "@services/utils";
import { StripePaymentRequestToken } from "tipsi-stripe";
import { useSelector } from "react-redux";
import { getFullName } from "@redux/product/product.selectors";
import { Platform } from "react-native";
import { GetCheckoutDetails_paymentDetails } from "@graphql/_core/schema";
import { PAYMENT_DETAILS_CARD } from "@ids";

interface Props {
  goToPaymentDetails: () => void;
  paymentProviderDetails: StripePaymentRequestToken;
  paymentDetails?: GetCheckoutDetails_paymentDetails;
}

export const PaymentDetails = memo(({ goToPaymentDetails, paymentProviderDetails, paymentDetails }: Props) => {
  const fullName = useSelector(getFullName);
  const brand = paymentDetails?.brand || paymentProviderDetails?.card?.brand || "";
  const last4 = paymentDetails?.last4 || paymentProviderDetails?.card?.last4 || "";
  const name = paymentDetails?.name || paymentProviderDetails?.billingDetails?.name || fullName;
  const expMonth = paymentDetails?.expMonth || paymentProviderDetails?.card?.expMonth || "";
  const expYear = paymentDetails?.expYear || paymentProviderDetails?.card?.expYear || "";
  const hasCompleteData = brand && last4 && name && expMonth && !!expYear;
  const prompt = "Add payment details";
  const info = `**Payment Details**\n${transformBrandName(
    brand
  )} ending in ${last4}\n${name.toUpperCase()}\nExpires: ${expMonth}/${expYear}`;
  const markdown = hasCompleteData ? info : prompt;

  if (Platform.OS === "android" && !fullName) {
    // Android stripe form needs derived data
    // Should be an edge case to not have name and email at this point
    // but guarding just in case
    return null;
  }

  return (
    <InfoCard
      testID={PAYMENT_DETAILS_CARD(last4, name, `${expMonth}/${expYear}`)}
      isPrompt={!hasCompleteData}
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
