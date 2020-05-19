// screens
export const COMPONENT_HOME_SCREEN = "COMPONENT_HOME_SCREEN";
export const DAILY_STEPS_SCREEN = "DAILY_STEPS_SCREEN";
export const REWARDS_SCREEN = "REWARDS_SCREEN";
export const ACTIVITY_HISTORY_SCREEN = "ACTIVITY_HISTORY_SCREEN";
export const STATS_SCREEN = "STATS_SCREEN";
export const LEADERBOARD_SCREEN = "LEADERBOARD_SCREEN";
export const SETTINGS_SCREEN = "SETTINGS_SCREEN";
export const QUESTS_SCREEN = (level: number) => `QUESTS_SCREEN_${level.toString()}`;
export const LEVEL_BUBBLE = (level: number) => `LEVEL_BUBBLE_${level}`
export const MENU_SCREEN = "MENU_SCREEN";
export const CHALLENGE_SCREEN = "CHALLENGE_SCREEN";
export const YUMATTER_SCREEN = "YUMATTER_SCREEN";
export const TODAYS_YUCOIN = "TODAYS_YUCOIN"
export const CHALLENGE_SET = "CHALLENGE_SET"
export const GENERIC_SCREEN_HEADING = (title: string) => `GENERIC_SCREEN_HEADING_${title}`
export const GENERIC_SCREEN_CTA = (ctaLabel: string) => `GENERIC_SCREEN_CTA${ctaLabel}`
export const CHALLENGE_PROGRESS_BAR = "CHALLENGE_PROGRESS_BAR"

// buttons
export const BUTTON_LOGIN = "BUTTON_LOGIN";
export const BUTTON_SIGNUP_BONUS_NEXT = "BUTTON_SIGNUP_BONUS_NEXT";
export const BUTTON_INTRO_SCREEN = (index: number) => `BUTTON_INTRO_SCREEN_${index}`;
export const BUTTON_TOP_LEFT_BAR = "BUTTON_TOP_LEFT_BAR";
export const BUTTON_CLOSE = "BUTTON_CLOSE";
export const BUTTON_CLOSE_CHALLENGE = "BUTTON_CLOSE_CHALLENGE"

export const INPUT_LOGIN_EMAIL = "INPUT_LOGIN_EMAIL";
export const INPUT_LOGIN_PASSWORD = (pw: any) => `INPUT_LOGIN_PASSWORD_${pw}`;

export const INPUT_BUTTON = (label: string) => `INPUT_BUTTON_${label}`;
export const TAB_BUTTON = (label: string) => `TAB_BUTTON_${label}`;

export const MENU_ITEM = (label: string) => `MENU_ITEM_${label.toString().replace(/ /g, "")}`;
export const MENU_ICON = "MENU_ICON"

export const LEVEL_CHALLENGE_BUTTON = (level: number) => `LEVEL_CHALLENGE_BUTTON_${level}`;

export const YUCOIN = "YUCOIN"

export const NAV_BAR = (icon: "yucoin" | "quests" | "leaderboard" | "rewards") => `NAV_BAR_${icon}`
export const CHECK_REWARDS_BUTTON = "CHECK_REWARDS_BUTTON"

// components
export const VIEW_CONFETTI_COIN = (coins: number) => `VIEW_CONFETTI_COIN_${coins}`;
export const VIEW_TOP_RIGHT_COIN_COUNTER = (coins: number) => `VIEW_TOP_RIGHT_COIN_COUNTER_${coins}`;
export const INPUT_RESET_PASSWORD = "INPUT_RESET_PASSWORD"
export const REWARD_ITEM = (code: string) => `REWARD_ITEM_${code}`
export const LOCKED_REWARD_ITEM = (code: string) => `LOCKED_REWARD_ITEM_${code}`

// modals
export const WELCOME_MODAL = (heading: string) => `WELCOME_MODAL${heading}`

// text
export const STATS_TITLE = (title: string) => `STATS_TITLES_${title}`
export const CHALLENGE_TILE = (text: string) => `CHALLENGE_TILE_${text}`

// reward purchased
export const WEGIFT_CONFIRMED = "WEGIFT_CONFIRMED"
export const PURCHASE_IMAGE = (url: any) => `PURCHASE_IMAGE_${url}`