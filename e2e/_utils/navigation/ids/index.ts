
// types
export type ProductStatus = "active" | "locked" | "unlockable";
export type ItemSlot = "pants" | "chest" | "gloves" | "boots" | "compass" | "map" | "binoculars" | "clockPendant";



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
export const CHALLENGE_HISTORY_THIS_WEEK = (value: number) => `CHALLENGE_HISTORY_THIS_WEEK${value}`
export const CHALLENGE_HISTORY_LAST_WEEK = (value: number) => `CHALLENGE_HISTORY_LAST_WEEK${value}`
export const CHALLENGE_UNAVAILABLE = `CHALLENGE_UNAVAILABLE`
export const WEGIFT_DETAILS = "WEGIFT_DETAILS"
export const YUNITY_REACHED = (yunityNum:number) => `YUNITY_REACHED_${yunityNum}`
export const YUNITY_HEADER = (levelName:string) => `YUNITY_HEADER_${levelName}`
export const SCROLLABLE_LAYOUT = "SCROLLABLE_LAYOUT"


// buttons
export const BUTTON_LOGIN = "BUTTON_LOGIN";
export const BUTTON_SIGNUP_BONUS_NEXT = "BUTTON_SIGNUP_BONUS_NEXT";
export const BUTTON_INTRO_SCREEN = (index: number) => `BUTTON_INTRO_SCREEN_${index}`;
export const BUTTON_TOP_LEFT_BAR = "BUTTON_TOP_LEFT_BAR";
export const BUTTON_CLOSE = "BUTTON_CLOSE";
export const BUTTON_CLOSE_HEADER = (header:any) => `BUTTON_CLOSE_HEADER_${header}`
export const BUTTON_CLOSE_CHALLENGE = "BUTTON_CLOSE_CHALLENGE"
export const BACK_BUTTON = "BACK_BUTTON"
export const EDIT_BUTTON = "EDIT_BUTTON"
export const PLUS_BUTTON = "PLUS_BUTTON"
export const CHANGE_MEMBER_NICK_BUTTON = "CHANGE_MEMBER_NICK_BUTTON"
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
export const YUNIVERSAL_CONTNIUE_BUTTON = "YUNIVERSAL_CONTNIUE_BUTTON"
export const GP_CONTINUE = "GP_CONTINUE"
export const ADD_BENEFICIARY = "ADD_BENEFICIARY"
export const CALM_BUTTON = "CALM_BUTTON"
export const HEADSPACE_BUTTON = "HEADSPACE_BUTTON"

// components
export const VIEW_CONFETTI_COIN = (coins: number) => `VIEW_CONFETTI_COIN_${coins}`;
export const VIEW_TOP_RIGHT_COIN_COUNTER = (coins: number) => `VIEW_TOP_RIGHT_COIN_COUNTER_${coins}`;
export const INPUT_RESET_PASSWORD = "INPUT_RESET_PASSWORD"
export const REWARD_ITEM = (code: string) => `REWARD_ITEM_${code}`
export const LOCKED_REWARD_ITEM = (code: string) => `LOCKED_REWARD_ITEM_${code}`
export const CHALLENGE_HISTORY_STARS = (starCount: number, challengeType: string) => `CHALLENGE_HISTORY_STARS+${starCount}_${challengeType}`
export const EARN_RATE_ROW = (label:string, standardValue:number) => `EARN_RATE_ROW_${label}_${standardValue}`
export const INPUT_FIELD = "INPUT_FIELD"
export const INPUT_FIELD_VALUE = (value:any) => `INPUT_FIELD_VALUE_${value}`

// modals
export const WELCOME_MODAL = (heading: string) => `WELCOME_MODAL${heading}`

// text
export const STATS_TITLE = (title: string) => `STATS_TITLES_${title}`
export const CHALLENGE_TILE = (text: string) => `CHALLENGE_TILE_${text}`
export const VALUE_DESCRIPTION = (value:any, description:string) => `VALUE_DESCRIPTION_${value}_${description}`
export const TEXT_TEMPLATE = (copy:string) => `TEXT_TEMPLATE_${copy}`

// reward purchased
export const WEGIFT_CONFIRMED = "WEGIFT_CONFIRMED"
export const PURCHASE_IMAGE = (url: any) => `PURCHASE_IMAGE_${url}`

// leaderboard
export const LEADERBOARD_NAME = (name: string) => `LEADERBOARD_NAME_${name}`
export const LEADERBOARD_SCREEN = "LEADERBOARD_SCREEN";
export const LEADERBOARD_TOP_SCREEN = "LEADERBOARD_TOP_SCREEN"
export const LEADERBOARD_INFO_BUTTON = "LEADERBOARD_INFO_BUTTON"
export const LEADERBOARD_INFO = "LEADERBOARD_INFO"
export const LEADERBOARD_TITLE = (title:string) => `LEADERBOARD_TITLE_${title}`
export const DUELS_BUTTON = "DUELS_BUTTON"
export const GOALS_BUTTON = "GOALS_BUTTON"
export const LEADERBOARD_SCROLL_LIST = "LEADERBOARD_SCROLL_LIST"

// create a leaderboard
export const GROUP_NAME_INPUT = "GROUP_NAME_INPUT"
export const LEADERBOARD_EMAIL_INPUT = "LEADERBOARD_EMAIL_INPUT"
export const LEADERBOARD_STATUS = (leaderboardName: string, leaderboardStatus: string) => `LEADERBOARD_STATUS_${leaderboardName}_${leaderboardStatus}`
export const LEADERBOARD_SWITCH = (leaderboardName: string) => `LEADERBOARD_SWITCH_${leaderboardName}`

// YUSCREEN
export const YUSCREEN = "YUSCREEN"
export const GET_STARTED_BUTTON = "GET_STARTED_BUTTON"
export const EMPTY_YUSCREEN_COPY = "EMPTY_YUSCREEN_COPY"
export const FEMALE_BODY = "FEMALE_BODY"
export const MALE_BODY = "MALE_BODY"
export const EARN_RATE_BUTTON = (earnRate: number) => `EARN_RATE_BUTTON_${earnRate}`
export const PACKAGE_SCREEN = "PACKAGE_SCREEN"
export const YOUR_YUCOIN_SCREEN = "YOUR_YUCOIN_SCREEN"
export const EARN_RATE_TABLE = "EARN_RATE_TABLE"
export const YUCOIN_POWER = (powerNum: string) => `YUCOIN_POWER_${powerNum}`
export const AVATAR_ITEM = (label:string, status:string) => `AVATAR_ITEM_${label}_${status}`
export const YUSCREEN_SCROLL_VIEW = "YUSCREEN_SCROLL_VIEW"
export const YUSCREEN_V3 = (onYuscreenV3:boolean) => `YUSCREEN_V3_${onYuscreenV3}`
export const PRODUCT_TOOL_TIP = (coverType:string, toolTipName:string, benefitValue:string, earnRate:number) => `PRODUCT_TOOL_TIP_${coverType}_${toolTipName}_${benefitValue}_${earnRate}`

// PRODUCT DETAILS
export const PRODUCT_DETAILS_SCROLL_VIEW = "PRODUCT_DETAILS_SCROLL_VIEW"

// CERTIFICATE
export const CERTIFICATE_SCROLL_VIEW = "CERTIFICATE_SCROLL_VIEW"
export const CERTIFICATE_KEY_VALUES = (key:string, value:string) => `CERTIFICATE_KEY_VALUES_${key}_${value}`


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

// FIB
export const FIB_SALARY_INPUT = "FIB_SALARY_INPUT"
export const FIB_SALARY_INPUT_VALUE =(value:string) => `FIB_SALARY_INPUT_VALUE_${value}`
export const FIB_BROWSE_SCREEN =  "FIB_BROWSE_SCREEN"
export const YUMOJI_PODIUM = (index: number) => `YUMOJI_PODIUM${index}`
export const EMPTY_AVATAR = "EMPTY_AVATAR";
export const YEAR_SCROLLER = "YEAR_SCROLLER"
export const MONTH_SCROLLER = "MONTH_SCROLLER"
export const SCROLLER_VALUE = (value: number) => `SCROLLER_VALUE${value}`
export const HIGHLIGHTED_SCROLLER_VALUE = (value:number) => `HIGHLIGHTED_SCROLLER_VALUE_${value}`
export const CUSTOM_COVER_SCREEN = "CUSTOM_COVER_SCREEN"
export const PERCENTAGE_COVERED = (value:number) => `PERCENTAGE_COVERD_${value}`
export const FIB_INTRO_SCREEN = "FIB_INTRO_SCREEN"
export const PACKAGE_INFO = "PACKAGE_INFO"
export const ARMOR_OPTION = (style: string) => `ARMOR_OPTION${style}`
export const SELECTED_ARMOR = (uri: string) => `SELECTED_ARMOR${uri}`
export const FIB_FIRST_NAME_INPUT = "FIB_FIRST_NAME_INPUT"
export const FOOT_INPUT = "FOOT_INPUT"
export const INCH_INPUT = "INCH_INPUT"
export const CM_INPUT = "CM_INPUT"
export const KG_INPUT = "KG_INPUT"
export const DRINKS_INPUT = "DRINKS_INPUT"
export const UNDERWRITING_JOURNEY_SCREEN = "UNDERWRITING_JOURNEY_SCREEN"
export const UNDERWRITING_REVIEW_SCREEN = "UNDERWRITING_REVIEW_SCREEN"
export const UNDERWRITING_REVIEW_ANSWERS = (question: string, answer: string) => `UNDERWRITING_REVIEW_ANSWERS_${question}_${answer}`
export const UNDERWRITING_REVIEW_CONFIRM = "UNDERWRITING_REVIEW_CONFIRM"
export const SEX_BUTTON = (title: string, state: boolean) => `SEX_BUTTON_${title}_${state}`
export const PACKAGE_OPTION = (type:string) => `PACKAGE_OPTION_${type}`
export const PACKAGE_TYPES = "PACKAGE_TYPES"
export const SALARY_COVERED = (percentage:number) => `SALARY_COVERED_${percentage}`
export const PACKAGE_YUCOIN_POWER = (yucoinPower:number)=> `YUCOIN_POWER_${yucoinPower}`
export const SELECTED_PACKAGE_TITLE = (title:string) => `SELECTED_PACKAGE_TITLE_${title}`
export const SUMMARY_SCROLL_VIEW = "SUMMARY_SCROLL_VIEW"
export const SEARCH_ITEM = (text: string) => `SEARCH_ITEM${text}`
export const SEARCH_FLAT_LIST = "SEARCH_FLAT_LIST"
export const CONTACT_DETAILS_INPUT = (placeHolder: string) => `CONTACT_DETAILS_INPUT_${placeHolder}`
export const CONTACT_DETAILS_SCROLL_VIEW = "CONTACT_DETAILS_SCROLL_VIEW"
export const CONTACT_DETAILS_CARD = (name: string, firstAddressLine: string, postCode:string, email: string, phoneNumber: string) => `CONTACT_DETAILS_CARD_${name}__${firstAddressLine}_${postCode}_${email}_${phoneNumber}`
export const GP_INPUT = "GP_INPUT"
export const GP_LIST_ITEM = (name: string) => `GP_LIST_ITEM_${name}`
export const GP_CONFIRMATION = (gpName: string, practiceName: string, address1: string, postCode: string) => `GP_CONFIRMATION_${gpName}_${practiceName}_${address1}_${postCode}`
export const GP_DETAILS_CARD = (name: string, postCode: string) => `GP_DETAILS_CARD_${name}_${postCode}`
export const CHECKOUT_SCROLL_VIEW = "CHECKOUT_SCROLL_VIEW"
export const PAYMENT_DETAILS_CARD = (endDigits: string, name: string, expiry: string) => `PAYMENT_DETAILS_CARD_${endDigits}_${name}_${expiry}`
export const CHECKOUT_CHECKBOX = "CHECKOUT_CHECKBOX"

// DUELS
export const DUELS_HUB = "DUELS_HUB"
export const EMPTY_DUELS_HUB = "EMPTY_DUELS_HUB"
export const DUEL_OPTIONS_SCREEN = "DUEL_OPTIONS_SCREEN"
export const DUEL_RESPONSE = (opponentName:string) => `DUEL_RESPONSE_${opponentName}`
export const DUELS_SEARCH = "DUELS_SEARCH"
export const SEARCH_INPUT = "SEARCH_INPUT"
export const CHALLENGE_FRIEND_BUTTON = "CHALLENGE_FRIEND_BUTTON"
export const DUELS_HUB_INVITATION = (firstName:string, lastName:string, wager:number, status:string) => `DUELS_HUB_INVITATION_${firstName}_${lastName}_${wager}_${status}`
export const DUEL_ENTRY = (firstName: string, lastName: string, wager: number, status: string) => `DUEL_ENTRY${firstName}_${lastName}_${wager}_${status}`
export const DUEL_ICON = (firstName:string, lastName:string, status:any) => `DUEL_ICON_${firstName}_${lastName}_${status}`
export const DUEL_DESCRIPTION = (opponentSteps: number, userSteps:number) => `DUEL_DESCRIPTION_${opponentSteps}_${userSteps}`
export const DUEL_AVATAR = (fullName: string) => `DUEL_AVATAR_${fullName}`

// COMMUNITY GOALS
export const NICKNAME_INPUT = "NICKNAME_INPUT"
export const COMMUNITY_GOAL_DROPDOWN = "COMMUNITY_GOAL_DROPDOWN"

// FEEDBACK FORMS
export const FEEDBACK_FORM_QUESTION =(question:string) => `FEEDBACK_FORM_QUESTION_${question}`
export const SLIDER_INPUT = (index:number) => `FEEDBACK_FORM_RATING_${index}`
export const SLIDER_LABEL = (label:string) => `SLIDER_LABEL_${label}`
export const FEEDBACK_TEXT_INPUT = "FEEDBACK_TEXT_INPUT"