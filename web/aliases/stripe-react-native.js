import React from "react";

export const initStripe = () => {};
export const useStripe = () => ({
  initPaymentSheet: () => Promise.resolve({}),
  presentPaymentSheet: () => Promise.resolve({}),
  confirmPaymentSheetPayment: () => Promise.resolve({}),
});
export const PaymentSheet = {
  SetupParams: { style: {} },
};
export const StripeProvider = ({ children }) => React.createElement(React.Fragment, null, children);
export const handleURLCallback = () => Promise.resolve(false);
