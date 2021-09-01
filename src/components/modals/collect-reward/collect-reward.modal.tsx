import * as React from "react";
import { CollectRewardScreen } from "@screens";

interface IProps {
  date?: string;
  onPress: () => void;
  yucoin: number;
  ctaLabel?: string;
}

export default function CollectRewardModal({ date, onPress, yucoin, ctaLabel }: IProps) {
  return <CollectRewardScreen date={date} onPress={onPress} yucoin={yucoin} ctaLabel={ctaLabel} />;
}
