import * as React from "react";
import { AnimatedChestScreen } from "@screens";
import { useBackHandler } from "@hooks";

interface IProps {
  reward: number;
  onPressCta: () => void;
}

const AnimatedChestModal: React.FC<IProps> = (props) => {
  useBackHandler(() => {
    if (props.onPressCta) {
      props.onPressCta();
      return true;
    }

    return false;
  });
  return <AnimatedChestScreen {...props} />;
};

export default AnimatedChestModal;
