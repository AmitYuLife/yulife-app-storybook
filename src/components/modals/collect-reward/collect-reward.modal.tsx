import * as React from "react";
import { CollectRewardScreen } from "../../screens";

interface IProps {
    date?: string;
    onPress: () => void;
    yucoin: number;
}

export default function CollectRewardModal({ date, onPress, yucoin }: IProps) {
    return <CollectRewardScreen date={date} onPress={onPress} yucoin={yucoin} />;
}
