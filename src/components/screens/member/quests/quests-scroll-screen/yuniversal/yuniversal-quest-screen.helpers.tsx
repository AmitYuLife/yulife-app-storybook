import { ITodayChallengesStatus } from "@redux/levels/levels.selectors";
import { GetQuestMap_levels } from "@graphql/_core/schema";
import { slots } from "./level/level-slots";
import {
  goToChallengesList,
  showLevelCompleteModal,
  showChestModal,
  showChallengeUnavailableModal,
  showLevelUnavailableModal,
} from "../quests-screen.container.helpers";
import { Colours } from "@styles";
import { ILevelBubbleProps } from "./level/level-bubble";

type LevelButtonState =
  | "Completed"
  | "Available"
  | "ChestAvailable"
  | "TimeGated"
  | "HardTimeGated"
  | "ChestLocked"
  | "Locked";

const getLevelButtonState = (
  challengesStatus: ITodayChallengesStatus,
  yuniversalLevel: number,
  level: number,
  hasChest: boolean
): LevelButtonState => {
  if (level < yuniversalLevel - 1) {
    return "Completed";
  }

  if (level === yuniversalLevel - 1) {
    if (challengesStatus.hasDone && challengesStatus.isAvailable) {
      if (hasChest) {
        return "ChestAvailable";
      }

      return "Available";
    }

    return "Completed";
  }

  if (level > yuniversalLevel) {
    if (hasChest) {
      return "ChestLocked";
    }

    return "Locked";
  }

  if (challengesStatus.hasDone) {
    if (challengesStatus.isAvailable) {
      return "TimeGated";
    }

    return "HardTimeGated";
  }

  if (hasChest) {
    return "ChestAvailable";
  }

  return "Available";
};

interface SlotColours {
  backgroundColour: string;
  backgroundColour2?: string;
  shadowColour: string;
  textColour: string;
  pressColour: string;
}

export const slotColours: Record<string, SlotColours> = {
  active: {
    backgroundColour: Colours.primary.p600,
    shadowColour: Colours.primary.p600Shadow,
    textColour: Colours.neutral.white,
    pressColour: Colours.primary.p100,
  },
  waiting: {
    backgroundColour: "rgb(145,0,76)",
    shadowColour: "rgb(100,0,50)",
    textColour: Colours.neutral.white,
    pressColour: "rgb(100,0,50)",
  },
  done: {
    backgroundColour: Colours.ocean.us106,
    shadowColour: "#A759A7",
    textColour: Colours.neutral.white,
    pressColour: Colours.ocean.us105,
  },
  locked: {
    backgroundColour: Colours.neutral.white,
    shadowColour: "#DFDFDF",
    textColour: "#956AFF",
    pressColour: Colours.neutral.n200,
  },
  chestLocked: {
    backgroundColour: "#9796FE",
    backgroundColour2: "#FF7DFF",
    shadowColour: "#7243F9",
    textColour: "#956AFF",
    pressColour: Colours.neutral.n200,
  },
};

interface ILevelProps {
  x: number;
  y: number;
  radius: number;
  text: string | number;
  rating: number;
  isActive: boolean;
  backgroundColour: string;
  backgroundColour2?: string;
  shadowColour: string;
  textColour: string;
  withOverlay?: boolean;
  pressColour: string;
  icon?: ILevelBubbleProps["icon"];
  nextLevelAvailableAt?: string;
  onPress: () => void;
}

const getLevelProps = (
  componentId: string,
  challengesStatus: ITodayChallengesStatus,
  yuniversalLevel: number,
  yuniversalMap: number,
  level: GetQuestMap_levels,
  nextLevelAvailableAt: string
): ILevelProps => {
  const levelButtonState = getLevelButtonState(challengesStatus, yuniversalLevel, level.level, !!level.levelChest);

  const levelSlot = slots.find((slot) => slot.level === level.level);

  if (!levelSlot) {
    return null;
  }

  const { x, y, isChest, text, lockIcon } = levelSlot;

  const commonProps = {
    x,
    y,
    radius: isChest ? 27.5 : 25,
    text: text || level.level,
    rating: level.rating,
  };

  switch (levelButtonState) {
    case "Completed":
      return {
        ...commonProps,
        ...slotColours.done,
        isActive: false,
        onPress: () => showLevelCompleteModal(componentId, level.level, yuniversalMap, levelSlot.name),
      };
    case "Available":
      return {
        ...commonProps,
        ...slotColours.active,
        isActive: true,
        onPress: () => goToChallengesList(componentId, level.level, levelSlot.name, yuniversalMap),
      };
    case "ChestAvailable":
      return {
        ...commonProps,
        ...slotColours.active,
        isActive: true,
        onPress: () => showChestModal(componentId, level, yuniversalMap, true),
      };
    case "TimeGated":
      return {
        ...commonProps,
        ...slotColours.locked,
        isActive: false,
        nextLevelAvailableAt,
        onPress: () => showChallengeUnavailableModal(nextLevelAvailableAt, true),
      };
    case "HardTimeGated":
      return {
        ...commonProps,
        ...slotColours.waiting,
        isActive: true,
        nextLevelAvailableAt,
        onPress: () => showChallengeUnavailableModal(nextLevelAvailableAt, true),
      };
    case "ChestLocked":
      return {
        ...commonProps,
        ...slotColours.chestLocked,
        withOverlay: true,
        isActive: false,
        icon: lockIcon,
        onPress: () => showChestModal(componentId, level, yuniversalMap, false),
      };
    case "Locked":
    default:
      return {
        ...commonProps,
        ...slotColours.locked,
        isActive: false,
        icon: lockIcon,
        onPress: () => showLevelUnavailableModal(level.level, true),
      };
  }
};

export const getLevelsProps = (
  componentId: string,
  challengesStatus: ITodayChallengesStatus,
  yuniversalLevel: number,
  yuniversalMap: number,
  levelList: GetQuestMap_levels[],
  nextLevelAvailableAt: string
): ILevelProps[] =>
  levelList.reduce((acc, level) => {
    const levelProps = getLevelProps(
      componentId,
      challengesStatus,
      yuniversalLevel,
      yuniversalMap,
      level,
      nextLevelAvailableAt
    );
    if (levelProps) {
      acc.push(levelProps);
    }

    return acc;
  }, [] as ILevelProps[]);
