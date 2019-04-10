import * as React from "react";
import { LevelLockedScreen } from "../../screens";

interface IProps {
    level: number;
    onPressCta: () => void;
}

export default function LevelUnavailable({ level, onPressCta }: IProps) {
    return <LevelLockedScreen level={level} onPressCta={onPressCta} />;
}
