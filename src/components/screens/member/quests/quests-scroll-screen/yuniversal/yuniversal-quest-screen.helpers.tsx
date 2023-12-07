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
import { showYuModal } from "@navigation/root";
import { MODALS, ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { getAssets } from "../unity-movies/unity.data";

type LevelButtonState =
  | "Completed"
  | "Available"
  | "UnityAvailable"
  | "TimeGated"
  | "HardTimeGated"
  | "UnityLocked"
  | "Locked";

const getLevelButtonState = (
  challengesStatus: ITodayChallengesStatus,
  yuniversalLevel: number,
  level: number,
  isLast: boolean
): LevelButtonState => {
  if (level < yuniversalLevel - 1) {
    return "Completed";
  }

  if (level === yuniversalLevel - 1) {
    if (challengesStatus.hasDone && challengesStatus.isAvailable) {
      if (isLast) {
        return "UnityAvailable";
      }

      return "Available";
    }

    return "Completed";
  }

  if (level > yuniversalLevel) {
    if (isLast) {
      return "UnityLocked";
    }

    return "Locked";
  }

  if (challengesStatus.hasDone) {
    if (challengesStatus.isAvailable) {
      return "TimeGated";
    }

    return "HardTimeGated";
  }

  if (isLast) {
    return "UnityAvailable";
  }

  return "Available";
};

interface SlotColours {
  backgroundColour: string;
  backgroundColour2?: string;
  shadowColour: string;
  textColour: string;
  pressColour: string;
  notificationColour: string;
}

export const slotColours: Record<string, SlotColours> = {
  active: {
    backgroundColour: Colours.primary.p600,
    shadowColour: Colours.primary.p600Shadow,
    textColour: Colours.neutral.white,
    pressColour: Colours.primary.p100,
    notificationColour: Colours.primary.p600,
  },
  waiting: {
    backgroundColour: "rgb(145,0,76)",
    shadowColour: "rgb(100,0,50)",
    textColour: Colours.neutral.white,
    pressColour: "rgb(100,0,50)",
    notificationColour: "rgb(145,0,76)",
  },
  done: {
    backgroundColour: Colours.ocean.us106,
    shadowColour: "#A759A7",
    textColour: Colours.neutral.white,
    pressColour: Colours.ocean.us105,
    notificationColour: Colours.ocean.us106,
  },
  locked: {
    backgroundColour: Colours.neutral.white,
    shadowColour: "#DFDFDF",
    textColour: "#956AFF",
    pressColour: Colours.neutral.n200,
    notificationColour: "#956AFF",
  },
  chestLocked: {
    backgroundColour: "#9796FE",
    backgroundColour2: "#FF7DFF",
    shadowColour: "#7243F9",
    textColour: "#956AFF",
    pressColour: Colours.neutral.n200,
    notificationColour: "#956AFF",
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
  notificationIcon?: {
    uri?: string;
  };
  notificationBorderWidth?: number;
  onPress: () => void;
}

const getLevelProps = (
  componentId: string,
  challengesStatus: ITodayChallengesStatus,
  yuniversalLevel: number,
  yuniversalMap: number,
  level: GetQuestMap_levels,
  nextLevelAvailableAt: string,
  currentLevel: number,
  avatar: { uri: string },
  submitUnity: (levelId: string) => void,
  isLast: boolean,
  useHalfModalsForQuestMap: boolean
): ILevelProps => {
  const levelButtonState = getLevelButtonState(challengesStatus, yuniversalLevel, level.level, isLast);

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
    notificationIcon: level.notificationIcon,
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
        notificationBorderWidth: 2,
      };
    case "UnityAvailable":
      return {
        ...commonProps,
        ...slotColours.active,
        isActive: true,
        onPress: () => {
          const assets = getAssets(currentLevel - 1);

          showYuModal({
            component: {
              id: MODALS.EOTWChest,
              name: MODALS.EOTWChest,
              passProps: {
                level: currentLevel,
                levelId: level.id,
                yuniversalLevel,
                assets,
                yuniversalMap,
                avatar,
                onPressCta: () => {
                  Navigation.mergeOptions(ROUTES.dailySteps, {
                    bottomTabs: {
                      currentTabIndex: 0,
                    },
                    statusBar: {
                      drawBehind: false,
                      visible: true,
                    },
                  });
                  Navigation.dismissModal(MODALS.EOTWChest);
                },
              },
            },
          });
          submitUnity(level.id);
        },
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
        notificationBorderWidth: 2,
      };
    case "UnityLocked":
      return {
        ...commonProps,
        ...slotColours.chestLocked,
        withOverlay: true,
        isActive: false,
        icon: lockIcon,
        onPress: () => showChestModal(componentId, level, yuniversalMap, false, levelSlot.name),
      };
    case "Locked":
    default:
      return {
        ...commonProps,
        ...slotColours.locked,
        isActive: false,
        icon: lockIcon,
        onPress: () =>
          showLevelUnavailableModal({
            useHalfModalsForQuestMap,
            name: levelSlot.name,
            level: level.level,
          }),
      };
  }
};

export const getLevelsProps = (
  componentId: string,
  challengesStatus: ITodayChallengesStatus,
  yuniversalLevel: number,
  yuniversalMap: number,
  levelList: GetQuestMap_levels[],
  nextLevelAvailableAt: string,
  currentLevel: number,
  avatar: { uri: string },
  submitUnity: (levelId: string) => void,
  useHalfModalsForQuestMap: boolean
): ILevelProps[] =>
  levelList.reduce((acc, level, index) => {
    const levelProps = getLevelProps(
      componentId,
      challengesStatus,
      yuniversalLevel,
      yuniversalMap,
      level,
      nextLevelAvailableAt,
      currentLevel,
      avatar,
      submitUnity,
      index === levelList.length - 1,
      useHalfModalsForQuestMap
    );
    if (levelProps) {
      acc.push(levelProps);
    }

    return acc;
  }, [] as ILevelProps[]);
