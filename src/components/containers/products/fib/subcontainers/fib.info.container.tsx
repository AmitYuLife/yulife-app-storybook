import React, { memo, useCallback } from "react";
import { FibLocalNavigation } from "../fib.types";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";
import { FibHoldingGPDetails } from "../../../../screens/products/fib/underwriting-journey/info/fib.holding-gp-results.screen";
import { FibPaymentCongratulationScreen } from "@components/screens/products/fib/underwriting-journey/info/fib.payment-congratulation.screen";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "../../../../../navigation/constants";

export type InfoTypes = "HoldingGP" | "PaymentCongratulation";
interface IFibInfoContainerProps {
  navigation: FibLocalNavigation;
}

const FibInfoContainer = memo(function (props: IFibInfoContainerProps) {
  const { navigation } = props;
  const { type, packageType }: { type: InfoTypes; packageType: string } = navigation.currentRoute.passProps;

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
      return <FibHoldingGPDetails onClose={onClose} />;
    case "PaymentCongratulation":
      return <FibPaymentCongratulationScreen onClose={onClose} packageType={packageType} />;
    default:
      return <></>;
  }
});

export default FibInfoContainer;
