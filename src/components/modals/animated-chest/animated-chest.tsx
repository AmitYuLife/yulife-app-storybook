import * as React from "react";
import { AnimatedChestScreen } from "@screens";
import { useBackHandler } from "@services/hooks/useBackHandler";

interface IProps {
  ctaLabel: string;
  heading: string;
  isLocked?: boolean;
  onPressCta: () => void;
  onPressCtaSecondary?: () => void;
}

const AnimatedChestModal: React.FC<IProps> = (props) => {
  useBackHandler(() => {
    if (props.onPressCtaSecondary) {
      props.onPressCtaSecondary();
      return true;
    }

    if (props.onPressCta) {
      props.onPressCta();
      return true;
    }

    return false;
  });
  return <AnimatedChestScreen {...props} />;
};

export default AnimatedChestModal;
