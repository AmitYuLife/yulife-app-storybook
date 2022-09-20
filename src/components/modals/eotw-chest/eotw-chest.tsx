import * as React from "react";
import { useBackHandler } from "@hooks";
import { EOTWChestScreen } from "@screens";
import { ChestType, ChestItemType } from "@organisms";
import { ImageSourcePropType } from "react-native";

interface IProps {
  chestType: ChestType;
  title: string;
  level: number;
  levelId: string;
  avatar: ImageSourcePropType;
  items: ChestItemType[];
  onPressCta: () => void;
}

const AnimatedChestModal: React.FC<IProps> = (props) => {
  useBackHandler(() => {
    props.onPressCta();
    return true;
  });

  return <EOTWChestScreen {...props} />;
};

export default AnimatedChestModal;
