import { getInitialState as getInitialUserState } from "../../src/redux/user/user.reducer";
import { DEFAULT_STORY_FEATURES } from "../../.storybook/story-store";
import type { IAchievement } from "@organisms/achievements-showcase/achievements-showcase";
import { SduiActionType } from "@redux/_core/types";
import type { YumojiPrompt } from "@redux/yu-screen/yu-screen.types";
import {
  STORY_ACHIEVEMENT_ENDURING_WANDERER,
  STORY_ACHIEVEMENT_ZENITH_BG,
  STORY_AVATAR_REMOTE_FILES,
  STORY_YUCOIN_ICON,
  STORY_YUMOJI_PNG_FULL,
  STORY_YUMOJI_PNG_MINI,
  STORY_YUMOJI_PROMPT_ILLUSTRATION,
} from "./story-assets";

/** Level 401 → Forest world (getCurrentWorld(401) === 0). */
export const MOCK_YU_SCREEN_LEVEL = 401;

/** Re-export avatar URLs for stories that preload Redux user state. */
export { STORY_YUMOJI_PNG_FULL as MOCK_YUMOJI_PNG_FULL, STORY_YUMOJI_PNG_MINI as MOCK_YUMOJI_PNG_MINI };

/** Equipped achievement shown in the hero AchievementsShowcase slot. */
export const MOCK_EQUIPPED_ACHIEVEMENT: IAchievement = {
  id: "achievement-zenith-of-the-mind",
  name: "Zenith of the Mind",
  description: "Complete 28 days of mindfulness practice.",
  type: "meditation",
  slot: 1,
  points: 0,
  backgroundColor: "#5300BD",
  textColor: "#FFFFFF",
  topBarType: "white",
  backgroundImage: {
    id: "zenith-bg",
    uri: STORY_ACHIEVEMENT_ZENITH_BG,
  },
  icon: {
    id: "zenith-icon",
    uri: STORY_ACHIEVEMENT_ENDURING_WANDERER,
  },
};

/** Yumoji create prompt shown when the user has no avatar yet. */
export const MOCK_YUMOJI_PROMPT: YumojiPrompt = {
  description: `Earn 100 ![](${STORY_YUCOIN_ICON})\nwhen you create\nyour Yumoji.`,
  button: {
    label: "Create Yumoji",
    onPress: { type: SduiActionType.SduiActionNavigate },
  },
  illustration: {
    id: "yumoji-prompt-illustration",
    uri: STORY_YUMOJI_PROMPT_ILLUSTRATION,
  },
};

/** Redux user slice override for YuScreen stories. */
export const MOCK_YU_SCREEN_USER = {
  ...getInitialUserState(),
  id: "user-alex-jones",
  firstName: "Alex",
  lastName: "Jones",
  fullName: "Alex Jones",
  earnRate: 1,
  features: {
    ...DEFAULT_STORY_FEATURES,
    tempGameShowAchievements: true,
  },
  avatar: {
    isAvatarCreated: true,
    avatarRemoteFiles: STORY_AVATAR_REMOTE_FILES,
  },
};
