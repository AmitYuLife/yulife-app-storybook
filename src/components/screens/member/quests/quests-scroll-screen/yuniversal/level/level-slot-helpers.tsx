import * as React from "react";
import { LevelLockIcon } from "./level-lock-icon";
import { LevelChestIcon } from "./level-chest-icon";
import { ILevelBubbleProps } from "./level-bubble";

export const getLevelIcon = (icon: ILevelBubbleProps["icon"]) => {
  switch (icon) {
    case "chest":
      return <LevelChestIcon />;
    case "lock":
    default:
      return <LevelLockIcon />;
  }
};
