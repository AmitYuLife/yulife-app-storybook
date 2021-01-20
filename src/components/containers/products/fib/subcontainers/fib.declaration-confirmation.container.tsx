import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FibLocalNavigation } from "../fib.types";
import { FibCheckoutHubContainer } from "./fib.checkout-hub.container";
import { useCheckoutQuery } from "./hooks/useCheckoutQuery";
import { usePayment } from "./hooks/usePayment";
import { onUnderwritingClose } from "../fib.helpers";
import { updateFIBValue } from "@redux/product/product.actions";

interface Props {
  navigation: FibLocalNavigation;
}

const FibDeclarationConfirmationContainer = memo(function (props: Props) {
  const { navigation } = props;
  const { data: checkoutData, loading: checkoutLoading } = useCheckoutQuery();
  const { paymentProviderDetails, handlePressPayment, handleConfirmPayment, paymentLoading } = usePayment({
    navigation,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (checkoutData?.gpDetails) {
      const gpDetails = {
        practiceName: checkoutData.gpDetails.gpPractice,
        practiceAddress: checkoutData.gpDetails.gpAddress,
        practiceTown: checkoutData.gpDetails.gpTown,
        practicePostCode: checkoutData.gpDetails.gpPostcode,
        gpName: checkoutData.gpDetails.gpName,
      };

      dispatch(updateFIBValue({ key: "gpDetails", value: gpDetails }));
    }
  }, [checkoutData, dispatch]);

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
