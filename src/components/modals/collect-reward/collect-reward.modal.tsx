import * as React from "react";
import { CollectRewardScreen } from "@screens";

interface IProps {
  heading?: string;
  onPress: () => void;
  yucoin: number;
  ctaLabel?: string;
}

const CollectRewardModal = ({ heading, onPress, yucoin, ctaLabel }: IProps) => {
  return <CollectRewardScreen heading={heading} onPress={onPress} yucoin={yucoin} ctaLabel={ctaLabel} />;
};

export default CollectRewardModal;
