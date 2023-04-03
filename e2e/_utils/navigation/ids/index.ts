
// types
export type ProductStatus = "active" | "locked" | "unlockable";
export type ItemSlot = "pants" | "chest" | "gloves" | "boots" | "compass" | "map" | "binoculars" | "clockPendant";



// screens
export const COMPONENT_HOME_SCREEN = "COMPONENT_HOME_SCREEN";
export const DAILY_STEPS_SCREEN = "DAILY_STEPS_SCREEN";
export const REWARDS_SCREEN = "REWARDS_SCREEN";
export const REWARDS_LIST_SCREEN = "REWARDS_LIST_SCREEN";
export const ACTIVITY_HISTORY_SCREEN = "ACTIVITY_HISTORY_SCREEN";
export const ACTIVITY_HISTORY_SCREEN_SCROLL = "ACTIVITY_HISTORY_SCREEN_SCROLL";
export const STATS_SCREEN = "STATS_SCREEN";
export const SETTINGS_SCREEN = "SETTINGS_SCREEN";
export const QUESTS_SCREEN = (level: number) => `QUESTS_SCREEN_${level.toString()}`;
export const QUESTS_SCREEN_YUNIVERSAL = (level: number) => `QUESTS_SCREEN_YUNIVERSAL_${level}`;
export const LEVEL_BUBBLE = (level: number) => `LEVEL_BUBBLE_${level}`
export const MENU_SCREEN = "MENU_SCREEN";
export const CHALLENGE_SCREEN = "CHALLENGE_SCREEN";
export const YUMATTER_SCREEN = "YUMATTER_SCREEN";
export const SMART_HEALTH_SCREEN = 'SMART_HEALTH_SCREEN';
export const TODAYS_YUCOIN = "TODAYS_YUCOIN"
export const TODAYS_EARNINGS = "TODAYS_EARNINGS"
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
export const YUNITY_SUBHEADER = (worldType:string) => `YUNITY_SUBHEADER_${worldType}`
export const SCROLLABLE_LAYOUT = "SCROLLABLE_LAYOUT"
export const WELLBEING_HUB_SCREEN = "WELLBEING_HUB_SCREEN"
export const REFERRALS_SCREEN = "REFERRALS_SCREEN"
export const GAME_SETTINGS_SCREEN = "GAME_SETTINGS_SCREEN"
export const REWARD_STORE_SETTINGS_SCREEN = "REWARD_STORE_SETTINGS_SCREEN"
export const PERK_SCREEN = "PERK_SCREEN"
export const EVENT_DIALOG_SCREEN = "EVENT_DIALOG_SCREEN";
export const EVENT_DIALOG_SCREEN_SCROLL = "EVENT_DIALOG_SCREEN_SCROLL";
export const HEALTH_SCREEN = "HEALTH_SCREEN";
export const MEDITOPIA_CHALLENGE_LOAD_SCREEN = "MEDITOPIA_CHALLENGE_LOAD_SCREEN";
export const CHOOSE_MEDITOPIA_SCREEN = "CHOOSE_MEDITOPIA_SCREEN";
export const INSPECT_SCREEN = "INSPECT_SCREEN";
export const YUCOIN_EXPLAINED_SCROLL_VIEW = "YUCOIN_EXPLAINED_SCROLL_VIEW";
export const CELESTIAL_CHEST_SCREEN = "CELESTIAL_CHEST_SCREEN";
export const SPACE_TRAVEL_SCREEN = "SPACE_TRAVEL_SCREEN";
export const ONBOARDING_SCREEN_V4 = "ONBOARDING_SCREEN_V4";
export const V4_YUSCREEN = "V4_YUSCREEN";
export const VIDEO_PLAYER_DESCRIPTION_SCREEN = "VIDEO_PLAYER_DESCRIPTION";
export const MEDIA_PORTRAIT_CLOSE = "MEDIA_PORTRAIT_CLOSE"

// buttons
export const BUTTON_LOGIN = (disabled: boolean) => `BUTTON_LOGIN_${disabled})`;
export const BUTTON_SIGNUP_BONUS_NEXT = "BUTTON_SIGNUP_BONUS_NEXT";
export const BUTTON_INTRO_SCREEN = (index: number) => `BUTTON_INTRO_SCREEN_${index}`;
export const BUTTON_TOP_LEFT_BAR = "BUTTON_TOP_LEFT_BAR";
export const BUTTON_CLOSE = "BUTTON_CLOSE";
export const BUTTON_CLOSE_HEADER = (header:any) => `BUTTON_CLOSE_HEADER_${header}`
export const BUTTON_CLOSE_CHALLENGE = "BUTTON_CLOSE_CHALLENGE"
export const BACK_BUTTON = "BACK_BUTTON"
export const EDIT_BUTTON = "EDIT_BUTTON"
export const ARROW_BUTTON = `ARROW_BUTTON`
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
export const MEDITOPIA_BUTTON = "MEDITOPIA_BUTTON"
export const HEADSPACE_BUTTON = "HEADSPACE_BUTTON"
export const BENEFICIARY_CONTINUE = "BENEFICIARY_CONTINUE"
export const BENEFICIARY_DONE = "BENEFICIARY_DONE"
export const JOIN_COMMUNITY_GOAL_BUTTON = "JOIN_COMMUNITY_GOAL_BUTTON"
export const ACTIVITY_FEED = "ACTIVITY_FEED"
export const YUCOIN_POWER_INFO = "YUCOIN_POWER_INFO"
export const RIGHT_PRODUCT_STEP_MULTI_BUTTON = "RIGHT_PRODUCT_STEP_MULTI_BUTTON";
export const LEFT_PRODUCT_STEP_MULTI_BUTTON = "LEFT_PRODUCT_STEP_MULTI_BUTTON";
export const USE_OTHER_APP_BUTTON = "USE_OTHER_APP_BUTTON";
export const YU_COIN_COUNT = (coins: number) => `YU_COIN_COUNT_${coins}`;
export const BUTTON_LIST_SCREEN = (index: number) => `BUTTON_LIST_SCREEN_${index}`;
export const SCREEN_CLOSE = "SCREEN_CLOSE";
export const INFO_PANEL_CTA_ERROR_BUTTON = "INFO_PANEL_CTA_ERROR_BUTTON";
export const INFO_PANEL_CTA_WARNING_BUTTON = "INFO_PANEL_CTA_WARNING_BUTTON";
export const INFO_PANEL_CTA_SUCCESS_BUTTON = "INFO_PANEL_CTA_SUCCESS_BUTTON";
export const INFO_PANEL_CTA_NOTIFICATION_BUTTON = "INFO_PANEL_CTA_NOTIFICATION_BUTTON";
export const INSPECT_BUTTON = "INSPECT_BUTTON";

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
export const INPUT_BENEFICIARY_DETAIL = (placeholder: string) => `INPUT_BENEFICIARY_DETAIL_${placeholder}`
export const INPUT_AVIOS_FORM_FIELD = (placeholder: string) => `INPUT_AVIOS_FORM_FIELD_${placeholder}`
export const DATE_INPUT = 'DATE_INPUT'
export const DATE_PICKER = 'DATE_PICKER'
export const FULL_SCREEN_SWIPER = (value: "LEFT" | "RIGHT") => `FULL_SCREEN_SWIPER_${value}`;
export const FULL_SCREEN_LOTTIE_SWIPER = (value: "LEFT" | "RIGHT") => `FULL_SCREEN_LOTTIE_SWIPER_${value}`;
export const SCROLL_PICKER = (id: string) => `SCROLL_PICKER_${id}`
export const SCROLL_PICKER_ACTIVE_ITEM = (id: string) => `SCROLL_PICKER_ACTIVE_ITEM_${id}`
export const SURGE_ICON = 'SURGE_ICON'
export const SCROLL_NUMBER_PICKER = (id: number) => `SCROLL_PICKER_${id}`
export const HORIZONTAL_SCROLLER = 'HORIZONTAL_SCROLLER'
export const DAILYSTEP_SCREEN_COIN =  "DAILYSTEP_SCREEN_COIN";
export const STATUS_ICON = (value:string) => `STATUS_ICON_${value}`
export const MEDITATION_ITEM = (title: string) => MEDIA_LIST_ITEM_TITLE(title)
export const MEDITATION_STAR_REWARD = (star: number) => MEDIA_STAR_REWARD(star)
export const MEDITATION_YUCOIN_REWARD = (yucoin: number) => MEDIA_YUCOIN_REWARD(yucoin)
export const CHALLENGE_HISTORY_YUCOIN_STARS = (yuCoin: string, stars: number, challengeType: string, index: number) => `CHALLENGE_HISTORY_YUCOIN+${yuCoin}_${stars}_${challengeType}_${index}`
export const WELLDONE_BANNER = "WELLDONE_BANNER";
export const YUNITY_CARD = (description: string) => `YUNITY_CARD_${description}`;

// modals
export const WELCOME_MODAL = (heading: string) => `WELCOME_MODAL${heading}`

// text
export const STATS_TITLE = (title: string) => `STATS_TITLES_${title}`
export const CHALLENGE_TILE = (text: string) => `CHALLENGE_TILE_${text}`
export const CHALLENGE_REWARD = (reward: string|number) => `CHALLENGE_REWARD_${reward}`
export const VALUE_DESCRIPTION = (value:any, description:string) => `VALUE_DESCRIPTION_${value}_${description}`
export const TEXT_TEMPLATE = (copy:string) => `TEXT_TEMPLATE_${copy}`
export const MARKDOWN_TEXT = (copy:string) => `MARKDOWN_TEXT_${copy}`
export const APPREVIEW_TEXT = (text:string) => `APPREVIEW_TEXT_${text}`
export const STEPS_COUNT = (steps: number) => `STEPS_COUNT_${steps}`
export const CYCLING_COUNT = (cycling:string) => `CYCLING_COUNT_${cycling}`
export const MINDFUL_COUNT = (mindfulness:string) => ` MINDFUL_COUNT_${mindfulness}`
export const COVER_TYPE = (copy:string) => `COVER_TYPE_${copy}`

// reward purchased
export const WEGIFT_CONFIRMED = "WEGIFT_CONFIRMED"
export const PURCHASE_IMAGE = (url: any) => `PURCHASE_IMAGE_${url}`
export const CONTENT_ITEM_IMAGE = "CONTENT_ITEM_IMAGE"

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
export const YUCOIN_POWER = (powerNum: string | number) => `YUCOIN_POWER_${powerNum}`
export const AVATAR_ITEM = (itemUrl:string, status:string) => `AVATAR_ITEM_${itemUrl}_${status}`
export const YUSCREEN_SCROLL_VIEW = "YUSCREEN_SCROLL_VIEW"
export const YUSCREEN_V3 = (onYuscreenV3:boolean) => `YUSCREEN_V3_${onYuscreenV3}`
export const YUSCREEN_V4 = (onYuscreenV4:boolean) => `YUSCREEN_V4_${onYuscreenV4}`
export const PRODUCT_TOOL_TIP = (coverType:string, toolTipName:string, earnRate:number) => `PRODUCT_TOOL_TIP_${coverType}_${toolTipName}_${earnRate}`
export const CAROUSEL_CARD = "CAROUSEL_CARD"
export const YUMOJI_AVATAR_YUSCREEN_V4 = "YUMOJI_AVATAR_YUSCREEN_V4"
export const BACKGROUND_COLOUR_PRODUCT = (hexColour: any) => `BACKGROUND_COLOUR_PRODUCT_${hexColour}`
export const RIGHT_STATUS_ICON = `RIGHT_STATUS_ICON`
export const ONBOARDING_SCREEN = "ONBOARDING_SCREEN"
export const YUCOIN_POWER_V4_SCREEN = (earnRate: number) => `YUCOIN_POWER_V4_SCREEN_${earnRate}`;

// PRODUCT DETAILS
export const PRODUCT_DETAILS_SCROLL_VIEW = "PRODUCT_DETAILS_SCROLL_VIEW"
export const ALL_PRODUCTS_CONTAINER_VIEW = "ALL_PRODUCTS_CONTAINER_VIEW"
export const CONTENT_SMALL_IMAGE_CARD_URL = (url: any) => `CONTENT_SMALL_ITEM_IMAGE_CARD_URL_${url}`
export const CONTENT_MIDDLE_ITEM_IMAGE = (url: any) => `CONTENT_MIDDLE_ITEM_IMAGE_${url}`

// CERTIFICATE
export const CERTIFICATE_SCROLL_VIEW = "CERTIFICATE_SCROLL_VIEW"
export const CERTIFICATE_KEY_VALUES = (key:string, value:string) => `CERTIFICATE_KEY_VALUES_${key}_${value}`


// AVATAR BUILDER
export const BODY_ITEM_TITLE = (title: string) => `BODY_ITEM_TITLE_${title}`
export const BODY_ITEM_COLOUR = (colorItemTitle: string) => `BODY_ITEM_COLOUR_${colorItemTitle}`
export const BODY_PART_ITEM = (partID: string) => `BODY_PART_ITEM_${partID}`
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
export const YUSCREEN_AVATAR = "YUSCREEN_AVATAR";
export const YUMOJI_CONTINUE_BUTTON = "YUMOJI_CONTINUE_BUTTON";

// SDUI
export const CONTENT_ITEM_INPUT = (id: string) => `SDUI_INPUT_${id}`
export const CONTENT_ITEM_MULTI_BUTTON = (id: string) => `SDUI_MULTI_BUTTON_${id}`
export const SDUI_SCREEN_SCROLL_VIEW = "SDUI_SCREEN_SCROLL_VIEW"

// FIB new
export const PRODUCT_STEP_BODY_SCROLL_VIEW = `PRODUCT_STEP_BODY_SCROLL_VIEW`
export const CONDITION_OPTION = (name: string, isActive: boolean) => `CONDITION_OPTION_${name}_${isActive}`

// YUMOJI BUILDER
export const BODY_TYPE = (type: string) => `BODY_TYPE_${type}`
export const CATEGORY_TYPE = (type: string) => `CATEGORY_TYPE_${type}`
export const COLOUR = (hexColour: string) => `COLOUR_${hexColour}`
export const YUMOJI_PART_ID = (id: string) => `YUMOJI_PART_ID_${id}`
export const YUMOJI_BODY = (bodyParts: string[]) => `YUMOJI_BODY_${bodyParts}`

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
export const GOAL_TOOLTIP_INFO = "GOAL_TOOLTIP_INFO"
export const AD_BANNERS = "AD_BANNERS"
export const FLAT_LIST_EVENTS = "FLAT_LIST_EVENTS"
export const RADIO_ICON_COLOUR  = (hexColour: string) => `RADIO_ICON_COLOUR_${hexColour}`

// FEEDBACK FORMS
export const FEEDBACK_FORM_QUESTION =(question:string) => `FEEDBACK_FORM_QUESTION_${question}`
export const SLIDER_INPUT = (index:number) => `FEEDBACK_FORM_RATING_${index}`
export const SLIDER_LABEL = (label:string) => `SLIDER_LABEL_${label}`
export const FEEDBACK_TEXT_INPUT = "FEEDBACK_TEXT_INPUT"

// BENEFICIARIES
export const BENEFICIARY_DETAILS = (share:number, firstName:string, lastName:string, relation:string) => `BENEFICIARY_DETAILS_${share}_${firstName}_${lastName}_${relation}`
export const BENEFICIARY_SHARE_INPUT = "BENEFICIARY_SHARE_INPUT"
export const BENEFICIARIES_PERCENTAGE_ERROR = "BENEFICIARIES_PERCENTAGE_ERROR"
export const BENEFICIARY_DEFAULT_MODAL = "BENEFICIARY_DEFAULT_MODAL"

// WELLBEING HUB
export const WELLBEING_HUB_SCROLL_VIEW = "WELLBEING_HUB_SCROLL_VIEW"
export const MORE_INFO_BUTTON = (copy: string) => `MORE_INFO_BUTTON_${copy}`

// REFERRALS
export const REFERRALS_SCROLL_VIEW = "REFERRALS_SCROLL_VIEW"
export const REFERRALS_BUTTON_BADGE = (bool: boolean) => `REFERRALS_BUTTON_BADGE_${bool}`
export const MENU_ICON_BADGE = (bool: boolean) => `MENU_ICON_BADGE_${bool}`
export const REFERRALS_INVITE_BUTTON = `REFERRALS_INVITE_BUTTON`
export const REFERRALS_BUTTON_HOMEPAGE = "REFERRALS_BUTTON_HOMEPAGE"

// SETTINGS SCREEN
export const SETTINGS_NAME = (name:string) => `SETTINGS_NAME_${name}`
export const SETTINGS_DESC = (desc:string) => `SETTINGS_DESC_${desc}`
export const SETTINGS_SWITCH = (name:string, bool:boolean) => `SETTINGS_SWITCH_${name}_${bool}`

// PLI
export const YUMOJI_OUTFIT_RADIO = (title: string) => `YUMOJI_OUTFIT_RADIO${title}`
export const YUMOJI_OUTFIT_LABEL = (title: string) => `YUMOJI_OUTFIT_LABEL${title}`
export const DENTAL_TOOLTIP_INFO = "DENTAL_TOOLTIP_INFO"
export const POPOVER = "POPOVER"
export const YULIFE_BUPA_LOGO = "YULIFE_BUPA_LOGO"

// CHALLENGES
export const TIME_REMAINING = (timeRemaing: string) => `TIME_REMAINING_${timeRemaing}`;
export const LEVEL_STAR_COUNT = (starArrLength: number) => `LEVEL_STAR_COUNT_${starArrLength}`
export const MEDIA_LIST_HEADER = (header: string) => `MEDIA_LIST_HEADER_${header}`
export const MEDIA_LIST_DESCRIPTION = (description: string) => `MEDIA_LIST_DESCRIPTION_${description}`
export const PARTNER_LOGO = "PARTNER_LOGO"
export const MEDIA_LIST_ITEM_TITLE = (title: string) => `MEDIA_LIST_ITEM_TITLE_${title}`
export const MEDIA_LIST_ITEM_DESCRIPTION = (description: string) => `MEDIA_LIST_ITEM_DESCRIPTION_${description}`
export const MEDIA_STAR_REWARD = (star: number) => `MEDIA_REWARD_${star}`
export const MEDIA_YUCOIN_REWARD = (yucoin: number) => `MEDIA_REWARD_${yucoin}`
export const MEDIA_SMALL_LOGO = (logoUrl: string) => `MEDIA_SMALL_LOGO_${logoUrl}`
export const CHALLENGE_SUCCESS_SCREEN = "CHALLENGE_SUCCESS_SCREEN"

// MEDITOPIA
export const MEDITOPIA_LOGO = "MEDITOPIA_LOGO";
export const VIDEO_PLAYER_TIMER = "VIDEO_PLAYER_TIMER";
export const VIDEO_PROGRESS_BAR = "VIDEO_PROGRESS_BAR";
export const VIDEO_PLAY_PAUSE_BUTTON = (paused: boolean) => `VIDEO_PLAY_PAUSE_BUTTON_${paused}`;
export const MEDITOPIA_TIMER_MINUTES = (mins: string) => `MEDITOPIA_TIMER_MINUTES_${mins}`;
export const MEDITOPIA_TIMER_SECS = (secs: string) =>  `MEDITOPIA_TIMER_SECS_${secs}`;
export const LOADING_BAR = "LOADING_BAR";
export const CHALLENGE_DETAILS_SCREEN = "CHALLENGE_DETAILS_SCREEN";
export const TAKE_CHALLENGE_BUTTON = (text: string) => `TAKE_CHALLENGE_BUTTON_${text}`
export const SET_UP_BUTTON =  (text: string) => `SET_UP_BUTTON_${text}`
export const REWARD_AMOUNT = (amount: number) => `REWARD_AMOUNT_${amount}`
export const CHALLENGE_TYPE = (challengeType: string) => `CHALLENGE_TYPE_${challengeType}`
export const TARGET = (target: string) => `TARGET_${target}`;
export const TODAYS_MEDITATION_SCREEN = "TODAYS_MEDITATION_SCREEN";
export const TODAYS_MEDITATION_HEADER = (header: string) => MEDIA_LIST_HEADER(header)
export const TODAYS_MEDITATION_DESCRIPTION = (description: string) =>  MEDIA_LIST_DESCRIPTION(description)
export const VIDEO_PLAYER_SCREEN = "VIDEO_PLAYER_SCREEN";
export const VIDEO_LOGO = "VIDEO_LOGO";
export const MEDITATION_PARTNER_LOGO = PARTNER_LOGO
export const VIDEO_PLAYER = "VIDEO_PLAYER";

// INSPECT SCREEN
export const YUMOJI = "YUMOJI";
export const INSPECT_DATA = (value: number, label: string) => `INSPECT_DATA${value}_${label}`;
export const INSPECT_ACTIVITY = (data: string | number) => `INSPECT_ACTIVITY_${data}`;
export const USER_INFO = (userData: string) => `USER_INFO_${userData}`;
export const DUELS_STATS_SECTION = "DUELS_STATS_SECTION";
export const DUELS_STAT = (title: string) => `DUELS_STAT${title}`;
export const CHALLENGE_DUEL_BUTTON = "CHALLENGE_DUEL_BUTTON";
export const INSPECT_ACTIVITY_SECTION = "INSPECT_ACTIVITY_SECTION";
export const COMPARISON_STATS_SECTION = "COMPARISON_STATS_SECTION";
export const COMPARISON_NAMES = (name: string) => `COMPARISON_NAMES_${name}`;
export const EMPTY_USER_YUMOJI_AVATAR= "EMPTY_USER_YUMOJI_AVATAR";
export const COMPARISON_ACTIVITY = (data: string | number) => `COMPARISON_ACTIVITY_${data}`;
export const COMPARISON_ACTIVITY_MINE = (data: string | number) => `COMPARISON_ACTIVITY_MINE_${data}`;
export const COMPARISON_ACTIVITY_OPPONENT = (data: string | number) => `COMPARISON_ACTIVITY_OPPONENT_${data}`;
export const USER_YUMOJI_AVATAR = "USER_YUMOJI_AVATAR";
export const INSPECT_SECTION_HEADER = (title: string) => `INSPECT_SECTION_HEADER_${title}`;
export const INSPECT_ACTIVITY_HEADER = "INSPECT_ACTIVITY_HEADER";
export const INSPECT_ACTIVITY_PERIOD = "INSPECT_ACTIVITY_PERIOD";
export const ACTIVITY_NAMES = (opponentName: string, name: string) => `OPPONENT_ACTIVITY_INFO_${opponentName}_${name}`
export const WINNER = (value: number) => `WINNER_${value}`;
export const SECOND_POSITION = (value: number) => `SECOND_POSITION_${value}`;
export const INSPECT_AVATAR = (order: number) => `INSPECT_AVATAR_${order}`;
export const RANK = (name: string) => `RANK_${name}`
export const SINGLE_USER = "SINGLE_USER";
export const LEFT_USER = "LEFT_USER";
export const RIGHT_USER = "RIGHT_USER";
export const AV_STATS = (value: number) => `AV_STATS_${value}`;
export const DRAW = (value: number) => `DRAW_${value}`;
export const USER_WORLD = (worldName: string) => `USER_WORLD_${worldName}`;
export const USER_LEVEL = (level: number) => `USER_LEVEL_${level};`

// YUCOIN POWER
export const EARN_RATE = (earnRate: number) => `EARN_RATE_${earnRate}`;
export const YUCOIN_TITLE = "YUCOIN_TITLE";
export const YUCOIN_POWER_TEXT = "YUCOIN_POWER_TEXT";

export const LIST_YUMOJI = (index: number) => `LIST_YUMOJI_${index}`;

// EVENTS
export const EVENT_DESCRIPTION = (description: string) =>  `EVENT_DESCRIPTION_${description}`;
export const NEW_EVENT_ICON = "NEW_EVENT_ICON";
export const EVENT_PROGRESS_BAR = (progress: number) => `EVENT_PROGRESS_BAR_${progress}`;
export const CLAIM_BUTTON = "CLAIM_BUTTON";
export const GREAT_BUTTON = "GREAT_BUTTON";
export const ANIMATED_CIRCLE = (colour: string) => `ANIMATED_CIRCLE_${colour}`
export const NUM_OF_STARS = (number: number) => `NUM_OF_STARS+${number}`
export const CHALLENGE_STARS = (isLefttHighlighted: boolean, isMidHighlighted: boolean, isRightHighlighted: boolean) => `CHALLENGE_STARS_${isLefttHighlighted}_${isMidHighlighted}_${isRightHighlighted}`

// ETOW
export const CELESTIAL_CARD = (description: string) => `CELESTIAL_CARD_${description}`;

// CPD/YUNIVERSITY
export const CPD_COURSES_SCREEN = "CPD_COURSES_SCREEN";
export const CPD_COURSE_DETAIL_SCREEN = "CPD_COURSE_DETAIL_SCREEN";
export const CPD_COURSE_SCROLL_VIEW = "CPD_COURSE_SCROLL_VIEW";
export const CPD_FEEDBACK_BUTTON = (choice: string) => `CPD_FEEDBACK_BUTTON_${choice}`
export const CPD_CERTIFICATE = "CPD_CERTIFICATE";
export const CPD_SAVE_BUTTON = "CPD_SAVE_BUTTON";

// WEEKLIES
export const WEEKLY_GOAL_ICON = (label: number, badge: Boolean) => `WEEKLY_GOAL_ICON_${label}_${badge}`
export const WEEKLY_PROGRESS_BAR = (progress: number, max: number, color: string) => `WEEKLY_PROGRESS_BAR_${progress}_${max}_${color}`

// Fiit
export const FIIT_CATEGORY_LIST_SCREEN = "FIIT_CATEGORY_LIST_SCREEN";
export const FIIT_CATEGORY_LIST_HEADER = (header: string) => MEDIA_LIST_HEADER(header)
export const FIIT_CATEGORY_LIST_DESCRIPTION = (description: string) =>  MEDIA_LIST_DESCRIPTION(description)
export const FIIT_LOGO = PARTNER_LOGO
export const FITT_MEDIA_ITEM_TITLE = (title: string) => MEDIA_LIST_ITEM_TITLE(title)
export const FIIT_MEDIA_ITEM_DESCRIPTION = (desciption: string) => MEDIA_LIST_ITEM_DESCRIPTION(desciption)
export const FIIT_MEDIA_SCROLL_VIEW = "FIIT_MEDIA_SCROLL_VIEW"
export const FIIT_MEDIA_PLAYER_CLOSE = MEDIA_PORTRAIT_CLOSE

// Notification Centre
export const NOTIF_CENTRE = "NOTIFICATION_CENTRE"