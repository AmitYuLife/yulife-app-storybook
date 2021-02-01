import React from "react";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { FibInfoScreen } from "@components/screens/products/fib/info-screens/fib.info.screen";
import { getFibInfoScreenData, InfoTypes } from "@components/containers/products/fib/subcontainers/fib.info.container";

export interface PriceChangedModalProps {
  onBackHandler?: () => void;
  title?: string;
  message?: string;
}

export default function PriceChangeModal(props: PriceChangedModalProps) {
  const { onBackHandler, title, message } = props;

  const backHandler = () => {
    Navigation.dismissModal(MODALS.priceChanged);
    if (onBackHandler) {
      onBackHandler();
    }

    return true;
  };

  useBackHandler(backHandler);

  const defaultScreenData = getFibInfoScreenData(InfoTypes.priceChanged);

  return (
    <FibInfoScreen
      onBackHandler={backHandler}
      icon="priceChanged"
      title={title || defaultScreenData.title}
      message={message || defaultScreenData.message}
    />
  );
}
