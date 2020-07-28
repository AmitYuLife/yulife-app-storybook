
// screens
export const COMPONENT_HOME_SCREEN = "COMPONENT_HOME_SCREEN";
export const DAILY_STEPS_SCREEN = "DAILY_STEPS_SCREEN";
export const REWARDS_SCREEN = "REWARDS_SCREEN";
export const ACTIVITY_HISTORY_SCREEN = "ACTIVITY_HISTORY_SCREEN";
export const STATS_SCREEN = "STATS_SCREEN";
export const SETTINGS_SCREEN = "SETTINGS_SCREEN";
export const QUESTS_SCREEN = (level: number) => `QUESTS_SCREEN_${level.toString()}`;
export const LEVEL_BUBBLE = (level: number) => `LEVEL_BUBBLE_${level}`
export const MENU_SCREEN = "MENU_SCREEN";
export const CHALLENGE_SCREEN = "CHALLENGE_SCREEN";
export const YUMATTER_SCREEN = "YUMATTER_SCREEN";
export const SMART_HEALTH_SCREEN = 'SMART_HEALTH_SCREEN';
export const TODAYS_YUCOIN = "TODAYS_YUCOIN"
export const CHALLENGE_SET = "CHALLENGE_SET"
export const GENERIC_SCREEN_HEADING = (title: string) => `GENERIC_SCREEN_HEADING_${title}`
export const GENERIC_SCREEN_CTA = (ctaLabel: string) => `GENERIC_SCREEN_CTA${ctaLabel}`
export const CHALLENGE_PROGRESS_BAR = "CHALLENGE_PROGRESS_BAR"
export const STATS_VALUE = (value: any) => `STATS_VALUE_${value.toString()}`
export const STATS_CHALLENGE_HISTORY = (value: number) => `STATS_CHALLENGE_HISTORY_${value}`
export const CHALLENGE_UNAVAILABLE = `CHALLENGE_UNAVAILABLE`
// buttons
export const BUTTON_LOGIN = "BUTTON_LOGIN";
export const BUTTON_SIGNUP_BONUS_NEXT = "BUTTON_SIGNUP_BONUS_NEXT";
export const BUTTON_INTRO_SCREEN = (index: number) => `BUTTON_INTRO_SCREEN_${index}`;
export const BUTTON_TOP_LEFT_BAR = "BUTTON_TOP_LEFT_BAR";
export const BUTTON_CLOSE = "BUTTON_CLOSE";
export const BUTTON_CLOSE_CHALLENGE = "BUTTON_CLOSE_CHALLENGE"
export const BACK_BUTTON = "BACK_BUTTON"

export const INPUT_LOGIN_EMAIL = "INPUT_LOGIN_EMAIL";
export const INPUT_LOGIN_PASSWORD = (pw: any) => `INPUT_LOGIN_PASSWORD_${pw}`;

export const INPUT_BUTTON = (label: string) => `INPUT_BUTTON_${label}`;
export const TAB_BUTTON = (label: string) => `TAB_BUTTON_${label}`;

export const MENU_ITEM = (label: string) => `MENU_ITEM_${label.toString().replace(/ /g, "")}`;
export const MENU_ICON = "MENU_ICON"

export const LEVEL_CHALLENGE_BUTTON = (level: number) => `LEVEL_CHALLENGE_BUTTON_${level}`;

export const YUCOIN = "YUCOIN"

export const NAV_BAR = (icon: "yucoin" | "quests" | "yu" | "leaderboard" | "rewards") => `NAV_BAR_${icon}`
export const CHECK_REWARDS_BUTTON = "CHECK_REWARDS_BUTTON"

// components
export const VIEW_CONFETTI_COIN = (coins: number) => `VIEW_CONFETTI_COIN_${coins}`;
export const VIEW_TOP_RIGHT_COIN_COUNTER = (coins: number) => `VIEW_TOP_RIGHT_COIN_COUNTER_${coins}`;
export const INPUT_RESET_PASSWORD = "INPUT_RESET_PASSWORD"
export const REWARD_ITEM = (code: string) => `REWARD_ITEM_${code}`
export const LOCKED_REWARD_ITEM = (code: string) => `LOCKED_REWARD_ITEM_${code}`
export const CHALLENGE_HISTORY_STARS = (starCount: number, challengeType: string) => `CHALLENGE_HISTORY_STARS+${starCount}_${challengeType}`

// modals
export const WELCOME_MODAL = (heading: string) => `WELCOME_MODAL${heading}`

// text
export const STATS_TITLE = (title: string) => `STATS_TITLES_${title}`
export const CHALLENGE_TILE = (text: string) => `CHALLENGE_TILE_${text}`

// reward purchased
export const WEGIFT_CONFIRMED = "WEGIFT_CONFIRMED"
export const PURCHASE_IMAGE = (url: any) => `PURCHASE_IMAGE_${url}`

// leaderboard
export const LEADERBOARD_NAME = (name: string) => `LEADERBOARD_NAME_${name}`
export const LEADERBOARD_SCREEN = "LEADERBOARD_SCREEN";
export const LEADERBOARD_TOP_SCREEN = "LEADERBOARD_TOP_SCREEN"
export const LEADERBOARD_INFO_BUTTON = "LEADERBOARD_INFO_BUTTON"
export const LEADERBOARD_INFO = "LEADERBOARD_INFO"

// create a leaderboard
export const GROUP_NAME_INPUT = "GROUP_NAME_INPUT"
export const LEADERBOARD_EMAIL_INPUT = "LEADERBOARD_EMAIL_INPUT"
export const LEADERBOARD_STATUS = (leaderboardName: string, leaderboardStatus: string) => `LEADERBOARD_STATUS_${leaderboardName}_${leaderboardStatus}`

// YUSCREEN
export const YUSCREEN = "YUSCREEN"
export const GET_STARTED_BUTTON = "GET_STARTED_BUTTON"
export const EMPTY_YUSCREEN_COPY = "EMPTY_YUSCREEN_COPY"
export const FEMALE_BODY = "FEMALE_BODY"
export const MALE_BODY = "MALE_BODY"
export const EARN_RATE_BUTTON = (earnRate: number) => `EARN_RATE_BUTTON_${earnRate}`

// AVATAR BUILDER
export const BODY_ITEM_TITLE = (title: string) => `BODY_ITEM_TITLE_${title}`
export const BODY_ITEM_COLOUR = (colorItemTitle: string) => `BODY_ITEM_COLOUR_${colorItemTitle}`
export const BODY_PART_ITEM = (partID: string) => `BODY_PART_ITEM_${partID}`
export const SKIN_TONE = (hexColour: string) => `SKIN_TONE_${hexColour}`
export const SELECTED_COLOR = (hexColour: string) => `SELECTED_COLOR_${hexColour}`
export const LEADERBOARD_PEDESTAL = "LEADERBOARD_PEDESTAL"
export const AVATAR_BODY = (bodyItems: string[]) => `AVATAR_BODY_${bodyItems}`
export const LEADERBOARD_HEAD_AVATAR = (bodyItems: string[]) => `LEADERBOARD_HEAD_AVATAR_${bodyItems}`
export const PERSONAL_PRODUCT = (type: "LifeInsurance" | "IncomeProtection" | "CriticalIllness" | "TravelInsurance" | string) => `PERSONAL_PRODUCT_${type}`
export const SURVEY_SCREEN = "SURVEY_SCREEN"
export const CHECK_BOX_STATE = (label: string, state: boolean) => `CHECK_BOX_STATE_${label}_${state}`
export const SURVEY_TEXT_BOX = "SURVEY_TEXT_BOX"
export const AVATAR_BUILDER_LIST = "AVATAR_BUILDER_LIST"
export const BUILDER_BODY = (bodyItems: string[]) => `BUILDER_BODY${bodyItems}`
export const NO_ITEM_SELECTED = "NO_ITEM_SELECTED"
export const HEAD_TYPE = (type: string) => `HEAD_TYPE_${type}`
export const YUSCREEN_AVATAR = "YUSCREEN_AVATAR"
export const EMPTY_AVATAR = "EMPTY_AVATAR";