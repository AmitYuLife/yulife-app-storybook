// screens
export const COMPONENT_HOME_SCREEN = "COMPONENT_HOME_SCREEN";
export const DAILY_STEPS_SCREEN = "DAILY_STEPS_SCREEN";
export const REWARDS_SCREEN = "REWARDS_SCREEN";
export const ACTIVITY_HISTORY_SCREEN = "ACTIVITY_HISTORY_SCREEN";
export const LEADERBOARD_SCREEN = "LEADERBOARD_SCREEN";
export const SETTINGS_SCREEN = "SETTINGS_SCREEN";
export const QUESTS_SCREEN = (level: number) => `QUESTS_SCREEN_${level.toString()}`;
export const MENU_SCREEN = "MENU_SCREEN";
export const CHALLENGE_SCREEN = "CHALLENGE_SCREEN";

// buttons
export const BUTTON_LOGIN = "BUTTON_LOGIN";
export const BUTTON_INTRO_SCREEN = (index: number) => `BUTTON_INTRO_SCREEN_${index}`;
export const BUTTON_TOP_LEFT_BAR = "BUTTON_TOP_LEFT_BAR";
export const BUTTON_CLOSE = "BUTTON_CLOSE";

export const INPUT_LOGIN_EMAIL = "INPUT_LOGIN_EMAIL";
export const INPUT_LOGIN_PASSWORD = "INPUT_LOGIN_PASSWORD";

export const INPUT_BUTTON = (label: string) => `INPUT_BUTTON_${label}`;
export const TAB_BUTTON = (label: string) => `TAB_BUTTON_${label}`;

export const MENU_ITEM = (label: string) => `MENU_ITEM_${label.toString().replace(/ /g, "")}`;

export const LEVEL_CHALLENGE_BUTTON = (level: number) => `LEVEL_CHALLENGE_BUTTON_${level}`;

// components
export const VIEW_CONFETTI_COIN = (coins: number) => `VIEW_CONFETTI_COIN_${coins}`;
export const VIEW_TOP_RIGHT_COIN_COUNTER = (coins: number) => `VIEW_TOP_RIGHT_COIN_COUNTER_${coins}`;
