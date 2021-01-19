import React, { memo, useEffect } from "react";
import { FibLocalNavigation } from "../fib.types";
import { FibCheckoutHubContainer } from "./fib.checkout-hub.container";
import { useCheckoutQuery } from "./hooks/useCheckoutQuery";
import { usePayment } from "./hooks/usePayment";
import { onUnderwritingClose } from "../fib.helpers";
import { useDispatch } from "react-redux";
import { updateFIBValue } from "@redux/product/product.actions";

interface Props {
  navigation: FibLocalNavigation;
}

export const FIB_CHECKOUT_SCREEN_ID = "FIB_CHECKOUT_SCREEN_ID";

const FibDeclarationConfirmationContainer = memo(function (props: Props) {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { data: checkoutData, loading: checkoutLoading } = useCheckoutQuery();
  const { paymentProviderDetails, handlePressPayment, handleConfirmPayment, paymentLoading } = usePayment({
    navigation,
  });

  useEffect(() => {
    dispatch(updateFIBValue({ key: "lastQuestionId", value: FIB_CHECKOUT_SCREEN_ID }));
  }, [dispatch]);

  return (
    <FibCheckoutHubContainer
      data={checkoutData}
      loading={checkoutLoading || paymentLoading}
      onPressPayment={handlePressPayment}
      onContinue={handleConfirmPayment}
      navigation={navigation}
      paymentProviderDetails={paymentProviderDetails}
      onClose={onUnderwritingClose}
    />
  );
});

export default FibDeclarationConfirmationContainer;
