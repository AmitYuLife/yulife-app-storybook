import * as React from "react";
import { AnimatedChestScreen } from "../../screens";

interface IProps {
    ctaLabel: string;
    heading: string;
    isLocked?: boolean;
    onPressCta: () => void;
    onPressCtaSecondary?: () => void;
}

function AnimatedChestModal(props: IProps) {
    return <AnimatedChestScreen {...props} />;
}

export default AnimatedChestModal;
