import React from "react";
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
    /**
     * This is an alert modal, we don't want any action to happen
     * on android back handler. Only clicking continue should dismiss
     * the modal and move to next screen.
     **/

    return true;
  };

  useBackHandler(backHandler);

  const defaultScreenData = getFibInfoScreenData(InfoTypes.priceChanged);

  return (
    <FibInfoScreen
      onActionHandler={onBackHandler}
      icon="priceChanged"
      title={title || defaultScreenData.title}
      message={message || defaultScreenData.message}
    />
  );
}
