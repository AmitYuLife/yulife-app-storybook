import React from "react";
import ChestLegacy from "./chest-legacy";
import { ChestSvg } from "./chest-svg";

interface IProps {
  scale?: number;
  colour?: string;
  isLegacy: boolean;
}

const Chest = ({ scale = 1, colour, isLegacy }: IProps) => {
  if (isLegacy) {
    return <ChestLegacy scale={scale} colour={colour} />;
  }

  return <ChestSvg />;
};

export default Chest;
