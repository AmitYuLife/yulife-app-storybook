import React, { memo, useCallback } from "react";
import { FibLocalNavigation } from "../fib.types";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";
import { FibHoldingGPDetails } from "../../../../screens/products/fib/underwriting-journey/info/fib.holding-gp-results.screen";
import { FibPaymentCongratulationScreen } from "@components/screens/products/fib/underwriting-journey/info/fib.payment-congratulation.screen";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "../../../../../navigation/constants";
import { FibRejectedScreen } from "@components/screens/products/fib/underwriting-journey/info/fib.rejected.screen";

export type InfoTypes = "HoldingGP" | "PaymentCongratulation" | "Rejected";
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

  const backHandler = useCallback(() => {
    navigation.pop();
    return true;
  }, [navigation]);

  useBackHandler(backHandler);

  const onClose = useCallback(() => {
    Navigation.popTo(ROUTES.yuScreen);
  }, []);

  switch (type) {
    case "HoldingGP":
      return <FibHoldingGPDetails onClose={onClose} onResetFib={onResetFib} />;
    case "PaymentCongratulation":
      return <FibPaymentCongratulationScreen onClose={onClose} packageType={packageType} />;
    case "Rejected":
      return <FibRejectedScreen onClose={onClose} onResetFib={onResetFib} />;
    default:
      return <></>;
  }
});

export default FibInfoContainer;
