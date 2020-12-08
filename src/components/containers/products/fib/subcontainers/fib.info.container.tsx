import React, { memo, useCallback } from "react";
import { FibLocalNavigation, FIB_INTRODUCTION } from "../fib.types";
import { FibHoldingGPDetails } from "../../../../screens/products/fib/underwriting-journey/info/fib.holding-gp-results.screen";
import { FibPaymentCongratulationScreen } from "@components/screens/products/fib/underwriting-journey/info/fib.payment-congratulation.screen";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "../../../../../navigation/constants";
import { FibRejectedScreen } from "@components/screens/products/fib/underwriting-journey/info/fib.rejected.screen";
import { FibResultsInScreen } from "../../../../screens/products/fib/underwriting-journey/info/fib.results-in";

export enum InfoTypes {
  holdingGP = "HoldingGP",
  paymentCongrats = "PaymentCongratulation",
  rejected = "Rejected",
  resultsIn = "ResultsIn",
}
interface IFibInfoContainerProps {
  navigation: FibLocalNavigation;
}

const FibInfoContainer = memo(function (props: IFibInfoContainerProps) {
  const { navigation } = props;
  const {
    type,
    packageType,
    onResetFib,
  }: { type: InfoTypes; packageType: string; onResetFib: () => {} } = navigation.currentRoute.passProps;

  const resetFib = onResetFib
    ? () => {
        onResetFib();
        navigation.push(FIB_INTRODUCTION);
      }
    : null;

  const onClose = useCallback(() => {
    Navigation.popTo(ROUTES.yuScreen);
  }, []);

  switch (type) {
    case "HoldingGP":
      return <FibHoldingGPDetails onClose={onClose} onResetFib={resetFib} />;
    case "PaymentCongratulation":
      return <FibPaymentCongratulationScreen onClose={onClose} packageType={packageType} />;
    case "Rejected":
      return <FibRejectedScreen onClose={onClose} onResetFib={resetFib} />;
    case "ResultsIn":
      return <FibResultsInScreen onClose={onClose} navigation={navigation} />;
    default:
      return <></>;
  }
});

export default FibInfoContainer;
