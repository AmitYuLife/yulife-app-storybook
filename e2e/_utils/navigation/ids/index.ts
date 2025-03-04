// types
export type ProductStatus = "active" | "locked" | "unlockable";
export type ItemSlot =
  | "pants"
  | "chest"
  | "gloves"
  | "boots"
  | "compass"
  | "map"
  | "binoculars"
  | "clockPendant";
export type Planet = "EARTH" | "RED" | "BRIGHT" | "ORANGE" | "PURPLE" | "RING";

// screens
export const COMPONENT_HOME_SCREEN = "COMPONENT_HOME_SCREEN";
export const DAILY_STEPS_SCREEN = "DAILY_STEPS_SCREEN";
export const REWARDS_SCREEN = "REWARDS_SCREEN";
export const REWARDS_LIST_SCREEN = "REWARDS_LIST_SCREEN";
export const ACTIVITY_HISTORY_SCREEN = "ACTIVITY_HISTORY_SCREEN";
export const ACTIVITY_HISTORY_SCREEN_SCROLL = "ACTIVITY_HISTORY_SCREEN_SCROLL";
export const ACTIVITY_HISTORY_CHALLENGE_VALUE = (title: string) =>
  `ACTIVITY_HISTORY_CHALLENGE_VALUE_${title}`;
export const STATS_SCREEN = "STATS_SCREEN";
export const SETTINGS_SCREEN = "SETTINGS_SCREEN";
export const SETTINGS_SCREEN_SCROLL = "SETTINGS_SCREEN_SCROLL";
export const QUESTS_SCREEN = (level: number) => `QUESTS_SCREEN_${level.toString()}`;
export const QUESTS_SCREEN_YUNIVERSAL = (level: number) => `QUESTS_SCREEN_YUNIVERSAL_${level}`;
export const LEVEL_BUBBLE = (level: number) => `LEVEL_BUBBLE_${level}`;
export const MENU_SCREEN = "MENU_SCREEN";
export const CHALLENGE_SCREEN = "CHALLENGE_SCREEN";
export const YUMATTER_SCREEN = "YUMATTER_SCREEN";
export const SMART_HEALTH_SCREEN = "SMART_HEALTH_SCREEN";
export const TODAYS_YUCOIN = "TODAYS_YUCOIN";
export const TODAYS_EARNINGS = "TODAYS_EARNINGS";
export const CHALLENGE_SET = "CHALLENGE_SET";
export const GENERIC_SCREEN_HEADING = (title: string) => `GENERIC_SCREEN_HEADING_${title}`;
export const GENERIC_SCREEN_CTA = (ctaLabel: string) => `GENERIC_SCREEN_CTA${ctaLabel}`;
export const CHALLENGE_PROGRESS_BAR = "CHALLENGE_PROGRESS_BAR";
export const STATS_VALUE = (value: any) => `STATS_VALUE_${value.toString()}`;
export const CHALLENGE_HISTORY_THIS_WEEK = (value: number) => `CHALLENGE_HISTORY_THIS_WEEK${value}`;
export const CHALLENGE_HISTORY_LAST_WEEK = (value: number) => `CHALLENGE_HISTORY_LAST_WEEK${value}`;
export const CHALLENGE_UNAVAILABLE = `CHALLENGE_UNAVAILABLE`;
export const WEGIFT_DETAILS = "WEGIFT_DETAILS";
export const YUNITY_REACHED = (yunityNum: number) => `YUNITY_REACHED_${yunityNum}`;
export const YUNITY_HEADER = (levelName: string) => `YUNITY_HEADER_${levelName}`;
export const YUNITY_SUBHEADER = (worldType: string) => `YUNITY_SUBHEADER_${worldType}`;
export const SCROLLABLE_LAYOUT = "SCROLLABLE_LAYOUT";
export const WELLBEING_HUB_SCREEN = "WELLBEING_HUB_SCREEN";
export const REFERRALS_SCREEN = "REFERRALS_SCREEN";
export const GAME_SETTINGS_SCREEN = "GAME_SETTINGS_SCREEN";
export const GAME_SETTINGS_LANGUAGE_SELECTOR_SCREEN = "GAME_SETTINGS_LANGUAGE_SELECTOR_SCREEN";
export const REWARD_STORE_SETTINGS_SCREEN = "REWARD_STORE_SETTINGS_SCREEN";
export const WELLBEING_HUB_SETTINGS_SCREEN = "REWARD_STORE_SETTINGS_SCREEN";
export const PERK_SCREEN = "PERK_SCREEN";
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
export const MEDIA_PORTRAIT_CLOSE = "MEDIA_PORTRAIT_CLOSE";
export const CHALLENGE_SET_SCROLL = "CHALLENGE_SET_SCROLL";
export const REWARDS_LIST_SCREEN_SCROLL = "REWARDS_LIST_SCREEN_SCROLL";
export const REWARDS_TABS = (name: string) => `REWARDS_TAB_${name}`;
export const SDUI_BODY_SCROLL = "SDUI_BODY_SCROLL";
export const CHALLENGE_PROGRESS_SCREEN = (challengeType: string) =>
  `CHALLENGE_PROGRESS_SCREEN_${challengeType}`;
export const QUEST_MAP_ONBOARDING_IMAGE = (image: string) => `QUEST_MAP_ONBOARDING_IMAGE${image}`;
export const YUMOJI_PROMPT_CTA = "yumoji-prompt-cta";
export const YUMOJI_PROMPT_COPY = (copy: string) => `YUMOJI_PROMPY_COPY_${copy}`;
export const BATTLE_PASS_SCREEN = "BATTLE_PASS_SCREEN";
export const CHALLENGE_FAILED_SCREEEN = "CHALLENGE_FAILED_SCREEEN";

// buttons
export const BUTTON_LOGIN = (disabled: boolean) => `BUTTON_LOGIN_${disabled})`;
export const BUTTON_SIGNUP_BONUS_NEXT = "BUTTON_SIGNUP_BONUS_NEXT";
export const BUTTON_INTRO_SCREEN = (index: number) => `BUTTON_INTRO_SCREEN_${index}`;
export const BUTTON_TOP_LEFT_BAR = "BUTTON_TOP_LEFT_BAR";
export const BUTTON_CLOSE = "BUTTON_CLOSE";
export const BUTTON_CLOSE_TEXT_VIEW = "BUTTON_CLOSE-text-view";
export const BUTTON_CLOSE_HEADER = (header: any) => `BUTTON_CLOSE_HEADER_${header}`;
export const BUTTON_CLOSE_CHALLENGE = "BUTTON_CLOSE_CHALLENGE";
export const BUTTON_CLOSE_ONBOARDING = "BUTTON_CLOSE_ONBOARDING";
export const BACK_BUTTON = "BACK_BUTTON";
export const EDIT_BUTTON = "EDIT_BUTTON";
export const ARROW_BUTTON = `ARROW_BUTTON`;
export const PLUS_BUTTON = "PLUS_BUTTON";
export const CHANGE_MEMBER_NICK_BUTTON = "CHANGE_MEMBER_NICK_BUTTON";
export const INPUT_LOGIN_EMAIL = "INPUT_LOGIN_EMAIL";
export const INPUT_LOGIN_PASSWORD = (pw: any) => `INPUT_LOGIN_PASSWORD_${pw}`;
export const INPUT_BUTTON = (label: string) => `INPUT_BUTTON_${label}`;
export const TAB_BUTTON = (label: string) => `TAB_BUTTON_${label}`;
export const MENU_ITEM = (label: string) => `MENU_ITEM_${label.toString().replace(/ /g, "")}`;
export const MENU_ICON = "MENU_ICON";
export const LEVEL_CHALLENGE_BUTTON = (level: number) => `LEVEL_CHALLENGE_BUTTON_${level}`;
export const YUCOIN = "YUCOIN";
export const NAV_BAR = (icon: "yucoin" | "quests" | "yu" | "leaderboard" | "rewards") =>
  `NAV_BAR_${icon}`;
export const CHECK_REWARDS_BUTTON = "CHECK_REWARDS_BUTTON";
export const YUNIVERSAL_CONTNIUE_BUTTON = "YUNIVERSAL_CONTNIUE_BUTTON";
export const GP_CONTINUE = "GP_CONTINUE";
export const ADD_BENEFICIARY = "ADD_BENEFICIARY";
export const CALM_BUTTON = "CALM_BUTTON";
export const MEDITOPIA_BUTTON = "MEDITOPIA_BUTTON";
export const HEADSPACE_BUTTON = "HEADSPACE_BUTTON";
export const BENEFICIARY_CONTINUE = "BENEFICIARY_CONTINUE";
export const BENEFICIARY_DONE = "BENEFICIARY_DONE";
export const JOIN_COMMUNITY_GOAL_BUTTON = "JOIN_COMMUNITY_GOAL_BUTTON";
export const ACTIVITY_FEED = "ACTIVITY_FEED";
export const ACTIVITY_HISTORY_MONTH = (month: string) => `ACTIVITY_HISTORY_${month}`;
export const YUCOIN_POWER_INFO = "YUCOIN_POWER_INFO";
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
export const TAKE_A_CHALLENGE_LEFT_BUTTON = "TAKE_CHALLENGE_LEFT";
export const BUTTON_CLOSE_RIGHT_ID = "BUTTON_CLOSE_RIGHT_ID";
export const LEFT_HEADIND_BUTTON = (header: any) => `LEFT_HEADIND_BUTTON${header}`;
export const SHOW_HIDE_BALANCE = "SHOW_HIDE_BALANCE";
export const SDUI_SWITCH = (value: boolean) => `SDUI_SWITCH_${value}`;
export const QUESTION_MARK_MODAL = "QUESTION_MARK_MODAL";
export const RADIO_ITEM_SELECTED = (textValue: string, selected: boolean) =>
  `RADIO_ITEM_SELECTED_${textValue}_${selected}`;
export const LEVEL_SVG = (colour: string, level: number) => `LEVEL_SVG_${colour}_${level}`;
export const LABELS_CTA_CONTINUE = "labels.cta.continue";
export const REWARDS_LOCATION_CONFIRM = "screens.content_location.first_time.confirm";
export const WELLBEING_HUB_LOCATION_CONFIRM = "screens.content_location.first_time.confirm";
export const STORE_LOCATION_TAB_BUTTON = "STORE_LOCATION_TAB_BUTTON";
export const PURCHASED_TAB_BUTTON = "PURCHASED_TAB_BUTTON";
export const CONTENT_ITEM_BUTTON_IMAGE_NO_URL = "CONTENT_ITEM_BUTTON_IMAGE_";
export const CONTENT_FORM_SUBMIT = "CONTENT_FORM_SUBMIT";
export const YUCOIN_SCREEN_TAKE_CHALLENGE_BUTTON = "DAILY_STEPS_ONLINE_TAKE_CHALLENGE_BUTTON";
export const SCROLLABLE_CONTENT_DISMISS = "scrollable-content-dismiss-button";
export const STREAKS_SCREEN_BUTTON = "STREAKS_SCREEN_CTA_BUTTON";
export const CHALLENGE_TAKE_CHALLENGE_BUTTON = "screens.challenges.details.cta_label";
export const ANIMATED_CHEST_BUTTON = "animated-chest-screen-cta-button";
export const SCROLLABLE_CONTENT_CTA = "SCROLLABLE_CONTENT_CTA";
export const SWITCH_ICON = "SWITCH_ICON";
export const COLLECT_REWARD_CTA = "COLLECT_REWARD_CTA";
export const REWARDS_UNAVAILABLE_PURCHASE_HISTORY = "screens.rewards.unavailable.purchase_history";
export const REWARDS_GOT_IT = "rewards.got-it";
export const TERTIARY_BUTTON = (label: string) => `TERTIARY_BUTTON_${label}`;
export const BUTTON_BASE = (title: string, disabled = false) => `BUTTON_BASE_${title}_${disabled}`;
export const REWARD_STORE_LOCATION_CONFIRM = "screens.rewards.list.welcome.confirm-text-view";
export const HERO_IMAGE_CONFIRM_BUTTON = "hero-image-confirm-button";
export const HERO_IMAGE_CANCEL_BUTTON = "hero-image-cancel-button";
export const SURVEY_REWARD = (yucoin: string) => `SURVEY_REWARD_${yucoin}`;

// components
export const VIEW_CONFETTI_COIN = (coins: number) => `VIEW_CONFETTI_COIN_${coins}`;
export const VIEW_TOP_RIGHT_COIN_COUNTER = (coins: number) =>
  `VIEW_TOP_RIGHT_COIN_COUNTER_${coins}`;
export const INPUT_RESET_PASSWORD = "INPUT_RESET_PASSWORD";
export const REWARD_ITEM = (rewardId: string) => `REWARD_ITEM_${rewardId}`;
export const LOCKED_REWARD_ITEM = (rewardId: string) => `LOCKED_REWARD_ITEM_${rewardId}`;
export const CHALLENGE_HISTORY_STARS = (starCount: number, challengeType: string) =>
  `CHALLENGE_HISTORY_STARS+${starCount}_${challengeType}`;
export const EARN_RATE_ROW = (label: string, standardValue: number) =>
  `EARN_RATE_ROW_${label}_${standardValue}`;
export const INPUT_FIELD = "INPUT_FIELD";
export const INPUT_FIELD_VALUE = (value: any) => `INPUT_FIELD_VALUE_${value}`;
export const INPUT_BENEFICIARY_DETAIL = (placeholder: string) =>
  `INPUT_BENEFICIARY_DETAIL_${placeholder}`;
export const INPUT_AVIOS_FORM_FIELD = (placeholder: string) =>
  `INPUT_AVIOS_FORM_FIELD_${placeholder}`;
export const DATE_INPUT = "DATE_INPUT";
export const DATE_PICKER = "DATE_PICKER";
export const FULL_SCREEN_SWIPER = (value: "LEFT" | "RIGHT") => `FULL_SCREEN_SWIPER_${value}`;
export const FULL_SCREEN_LOTTIE_SWIPER = (value: "LEFT" | "RIGHT") =>
  `FULL_SCREEN_LOTTIE_SWIPER_${value}`;
export const SCROLL_PICKER = (id: string) => `SCROLL_PICKER_${id}`;
export const SCROLL_PICKER_ACTIVE_ITEM = (id: string) => `SCROLL_PICKER_ACTIVE_ITEM_${id}`;
export const SURGE_ICON = "SURGE_ICON";
export const SCROLL_NUMBER_PICKER = (id: number) => `SCROLL_PICKER_${id}`;
export const HORIZONTAL_SCROLLER = "HORIZONTAL_SCROLLER";
export const DAILYSTEP_SCREEN_COIN = "DAILYSTEP_SCREEN_COIN";
export const STATUS_ICON = (value: string) => `STATUS_ICON_${value}`;
export const MEDITATION_ITEM = (title: string) => MEDIA_LIST_ITEM_TITLE(title);
export const MEDITATION_STAR_REWARD = (star: number) => MEDIA_STAR_REWARD(star);
export const MEDITATION_YUCOIN_REWARD = (yucoin: number) => MEDIA_YUCOIN_REWARD(yucoin);
export const CHALLENGE_HISTORY_YUCOIN_STARS = (
  yuCoin: string,
  stars: number,
  challengeType: string,
  index: number
) => `CHALLENGE_HISTORY_YUCOIN+${yuCoin}_${stars}_${challengeType}_${index}`;
export const WELLDONE_BANNER = "WELLDONE_BANNER";
export const YUNITY_CARD = (description: string) => `YUNITY_CARD_${description}`;
export const COUNTDOWN_COMPONENT = "COUNTDOWN_COMPONENT";
export const COUNTDOWN_UNIT = (unit: number, dateType: string) =>
  unit < 10 && (dateType === "Mins" || "Hours")
    ? `COUNTDOWN_UNIT0${unit}_${dateType}`
    : `COUNTDOWN_UNIT${unit}_${dateType}`;
export const CHALLENGE_HISTORY_NEW_SLOT = (type: string, yucoin: string, rating: number) =>
  `CHALLENGE_HISTORY_NEW_SLOT_${type}_${yucoin}_${rating}`;
export const PRODUCT_CARD_TITLE = (title: string) => `PRODUCT_CARD_${title}`;
export const PRODUCT_CARD_IMAGE = (imageURL: any) => `PRODUCT_CARD_IMAGE${imageURL}`;
export const PRODUCT_CARD_BOTTOM = (copy: string) => `PRODUCT_CARD_BOTTOM${copy}`;
export const YUCOIN_LABEL = (yuCoin: string) => `YUCOIN_LABEL${yuCoin}`;
export const DISMISS_BUTTON = "DISMISS_BUTTON";
export const WARNING_BANNER = (text: string) => `WARNING_BANNER_${text}`;
export const REWARDS_STORE_GAME_PROGRESS = "REWARDS_STORE_GAME_PROGRESS";
export const LOTTIE_VIEW = "LOTTIE_VIEW";
export const FOOTER_LEGAL_DISCLAIMER = "FOOTER_LEGAL_DISCLAIMER";
export const VOUCHER_CODE_TITLE = (text: string) => `VOUCHER_CODE_TITLE_${text}`;
export const VOUCHER_CODE = (code: string) => `VOUCHER_CODE_${code}`;

// modals
export const WELCOME_MODAL = (heading: string) => `WELCOME_MODAL${heading}`;
export const QUEST_DETAIL_HALF_MODAL = (heading: string) => `QUEST_DETAIL_HALF_MODAL_${heading}`;
export const SMOKING_STREAK_HALF_MODAL = (heading: string) =>
  `POPUP_WITH_HEADER_ICON_MODAL_${heading}`;
export const HALF_MODAL_CTA = "rewards.got-it";

// text
export const STATS_TITLE = (title: string) => `STATS_TITLES_${title}`;
export const CHALLENGE_TILE = (text: string) => `CHALLENGE_TILE_${text}`;
export const CHALLENGE_REWARD = (reward: string | number) => `CHALLENGE_REWARD_${reward}`;
export const VALUE_DESCRIPTION = (value: any, description: string) =>
  `VALUE_DESCRIPTION_${value}_${description}`;
export const TEXT_TEMPLATE = (copy: string, textType?: string) =>
  `TEXT_TEMPLATE_${copy}${textType}`;
export const MARKDOWN_TEXT = (copy: string) => `MARKDOWN_TEXT_${copy}`;
export const APPREVIEW_TEXT = (text: string) => `APPREVIEW_TEXT_${text}`;
export const STEPS_COUNT = (steps: number) => `STEPS_COUNT_${steps}`;
export const CYCLING_COUNT = (cycling: string) => `CYCLING_COUNT_${cycling}`;
export const MINDFUL_COUNT = (mindfulness: string) => ` MINDFUL_COUNT_${mindfulness}`;
export const COVER_TYPE = (copy: string) => `COVER_TYPE_${copy}`;

// reward purchased
export const WEGIFT_CONFIRMED = "WEGIFT_CONFIRMED";
export const PURCHASE_IMAGE = (url: any) => `PURCHASE_IMAGE_${url}`;
export const CONTENT_ITEM_IMAGE = "CONTENT_ITEM_IMAGE";
export const PURCHASED_ITEM = (name: string) => `PURCHASED_ITEM_${name}`;

// leaderboard
export const LEADERBOARD_NAME = (name: string, score: string, rank: number, type?: string) =>
  `LEADERBOARD_NAME_${name}_${score}_${rank}${type ? `_${type}` : null}`;
export const LEADERBOARD_SCREEN = "LEADERBOARD_SCREEN";
export const LEADERBOARD_TOP_SCREEN = "LEADERBOARD_TOP_SCREEN";
export const LEADERBOARD_INFO_BUTTON = "LEADERBOARD_INFO_BUTTON";
export const LEADERBOARD_INFO = "LEADERBOARD_INFO";
export const LEADERBOARD_TITLE = (title: string) => `LEADERBOARD_TITLE_${title}`;
export const LEADERBOARD_DROPDOWN = "LEADERBOARD_DROPDOWN";
export const DUELS_BUTTON = "DUELS_BUTTON";
export const SEARCH_BUTTON = "SEARCH_BUTTON";
export const GOALS_BUTTON = "GOALS_BUTTON";
export const LEADERBOARD_SCROLL_LIST = "LEADERBOARD_SCROLL_LIST";
export const LEADERBOARD_STATUS = (leaderboardName: string, leaderboardStatus: string) =>
  `LEADERBOARD_STATUS_${leaderboardName}_${leaderboardStatus}`;
export const LEADERBOARD_SWITCH = (leaderboardName: string, consent?: boolean) =>
  `LEADERBOARD_SWITCH_${leaderboardName}${consent}`;
export const LEADERBOARD_COMMUNITY_LIST = (names: string[]) =>
  `LEADERBOARD_COMMUNITY_LIST_${names.sort()}`;
export const COMMUNITY_LIST_ITEM = (title: string) => `COMMUNITY_LIST_ITEM_${title}`;
export const SCORE = (num: any) => `SCORE_${num}`;
export const LEADERBOARD_DESC = (desc: string) => `LEADERBOARD_DESC_${desc}`;
export const LEADBOARD_TAB = (tabName: string) => `LEADERBOARD_NAME_${tabName}`;
export const SEARCH_RESULTS = (names: string[]) => `SEARCH_RESULTS_${names.sort()}`;
export const SEARCH_CLOSE = "SEARCH_CLOSE";
export const HIGHLIGHTED_LEADERBOARD_NAME = (
  name: string,
  score: string,
  rank: number,
  highlighted?: string
) => `LEADERBOARD_NAME_${name}_${score}_${rank}${highlighted ? `_${highlighted}` : null}`;
export const LEADERBOARD_EMPLOYEE_NAME = (name: string) => `LEADERBOARD_EMPLOYEE_NAME_${name}`;
export const LEADERBOARD_REFERRAL_REMINDER = "LEADERBOARD_REFERRAL_REMINDER";
export const LEADERBOARD_REFERRAL_REMINDER_CLOSE = "LEADERBOARD_REFERRAL_REMINDER_CLOSE";
export const LEADEADRBOARD_JOIN_BUTTON = "screens.leaderboard.turn_board_on.confirm";
export const DISABLED_USER_REASON = (reason: string) => `DISABLED_USER_REASON_${reason}`;

// YUSCREEN
export const YUSCREEN = "YUSCREEN";
export const GET_STARTED_BUTTON = "GET_STARTED_BUTTON";
export const EMPTY_YUSCREEN_COPY = "EMPTY_YUSCREEN_COPY";
export const FEMALE_BODY = "FEMALE_BODY";
export const MALE_BODY = "MALE_BODY";
export const EARN_RATE_BUTTON = (earnRate: number) => `EARN_RATE_BUTTON_${earnRate}`;
export const PACKAGE_SCREEN = "PACKAGE_SCREEN";
export const YOUR_YUCOIN_SCREEN = "YOUR_YUCOIN_SCREEN";
export const EARN_RATE_TABLE = "EARN_RATE_TABLE";
export const YUCOIN_POWER = (powerNum: string | number) => `YUCOIN_POWER_${powerNum}`;
export const AVATAR_ITEM = (itemUrl: string, status: string) => `AVATAR_ITEM_${itemUrl}_${status}`;
export const YUSCREEN_SCROLL_VIEW = "YUSCREEN_SCROLL_VIEW";
export const PRODUCT_TOOL_TIP = (coverType: string, toolTipName: string, earnRate: number) =>
  `PRODUCT_TOOL_TIP_${coverType}_${toolTipName}_${earnRate}`;
export const CAROUSEL_CARD = "CAROUSEL_CARD";
export const YUMOJI_AVATAR_YUSCREEN_V4 = "YUMOJI_AVATAR_YUSCREEN_V4";
export const BACKGROUND_COLOUR_PRODUCT = (hexColour: any) =>
  `BACKGROUND_COLOUR_PRODUCT_${hexColour}`;
export const RIGHT_STATUS_ICON = `RIGHT_STATUS_ICON`;
export const ONBOARDING_SCREEN = "ONBOARDING_SCREEN";
export const YUCOIN_POWER_V4_SCREEN = (earnRate: number) => `YUCOIN_POWER_V4_SCREEN_${earnRate}`;
export const LEFT_SIDE_TEXT_SLOT_POWER = (earnRate: string) =>
  `LEFT_SIDE_TEXT_SLOT_POWER_${earnRate}}`;
export const LEFT_SIDE_BACKGROUD_IMAGE_SLOT = (imgSrc: string) =>
  `LEFT_SIDE_BACKGROUD_IMAGE_SLOT_${imgSrc}}`;
export const RIGHT_SIDE_IMAGE_SLOT = (imgSrc: string) => `RIGHT_SIDE_IMAGE_SLOT_${imgSrc}}`;
export const SLOT_TITLE = (title: string) => {
  const removedSpaces = title.replace(/\s+/g, " ");
  return `PRODUCT_SLOT_${removedSpaces}`;
};
export const ONBOARDING_SCREEN_MARKDOWN = (text: string) => `ONBOARDING_SCREEN_MARKDOWN_${text}`;
export const RIGHT_SIDE_IMAGE_BOX_OPTION = (imgSrc: string) =>
  `RIGHT_SIDE_IMAGE_BOX_OPTION_${imgSrc}}`;
export const BOX_OPTION_TITLE = (title: string) => `BOX_OPTION_TITLE_${title}`;
export const BOX_OPTION_DESCRIPTION = (description: string) =>
  `BOX_OPTION_DESCRIPTION_${description}`;
export const INFO_PANEL_IMAGE = (imgSrc: string) => `INFO_PANEL_IMAGE_${imgSrc}`;
export const INFO_PANEL_DESCRIPTION = (description: string) =>
  `INFO_PANEL_DESCRIPTION_${description}`;
export const INFO_PANEL_BUTTON = "info-panel-button";
export const PCP_LIST_DESCRIPTION = `PCP_LIST_DESCRIPTION`;
export const REFERRAL_IMAGE = "REFERRAL_IMAGE";
export const REFERRAL_BUTTON = (text: string) => `REFERRAL_BUTTON_${text}`;
export const YUMOJI_YUSCREEN_V5 = "YUMOJI_YUSCREEN_V5";
export const YUSCREEN_V5_USERNAME = (username: string) => `YUSCREEN_V5_USERNAME_${username}`;
export const YUSCREEN_V5_WORLD_AND_LEVEL = (world: string, level: string | number) =>
  `YUSCREEN_V5_WORLD_LEVEL_${world}_${level}`;
export const YUSCREEN_V5_WELLBEING_SECTION_BUTTON = "YUSCREEN_V5_WELLBEING_SECTION_BUTTON";
export const YUSCREEN_V5_WELLBEING_SECTION_BUTTON_TEXT_VIEW =
  "YUSCREEN_V5_WELLBEING_SECTION_BUTTON-text-view";
export const YUSCREEN_V5_WELLBEING_SECTION_HEADER = "YUSCREEN_V5_WELLBEING_SECTION_HEADER";
export const YUSCREEN_V5_PROTECTION_TITLE = "yu-product-card-carousel-title";
export const YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD = (product: string) =>
  `YU_SCREEN_PRODUCT_CARD_TITLE-${product}`;
export const YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_LOGO = (uri: any) =>
  `YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_LOGO_${uri}`;
export const YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_BODY_DESC = (body: string) =>
  `YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_LOGO_${body}`;
export const YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_ILLUSTRATION = (uri: any) =>
  `YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_ILLUSTRATION_${uri}`;
export const YUSCREEN_V5_WELLBEING_SECTION_ITEM = (title: string, index: string) =>
  `YUSCREEN_V5_WELLBEING_SECTION_ITEM_${title}_${index}`;
export const YUSCREEN_V5_PRODUCT_CARD_BUTTON = (height: string, product: string) =>
  `yu-product-card-${height}-${product}`;
export const YUSCREEN_V5_SEE_MORE_PROTECTION_BUTTON = "yu-product-card-carousel-cta-button";
export const YUMOJI_EQUIPMENT = "YUMOJI_EQUIPMENT";
export const YUMOJI_ONBOARDING_BUTTON = "yu-onboarding-button";
export const YUMOJI_DO_THIS_LATER = "screens.yumoji_builder.create.link-text-view";
export const OWNED_PILL = "owned-filter-button-text";
export const AVAILABLE_PILL = "available-filter-button-text";
export const HERO_CARD_SECTION = "HERO_CARD_SECTION";

export const CAROUSEL_CARD_BUTTON = (cardTitle: string) => `CAROUSEL_CARD_BUTTON_${cardTitle}`;

// PRODUCT DETAILS
export const PRODUCT_DETAILS_SCROLL_VIEW = "PRODUCT_DETAILS_SCROLL_VIEW";
export const ALL_PRODUCTS_CONTAINER_VIEW = "ALL_PRODUCTS_CONTAINER_VIEW";
export const CONTENT_SMALL_IMAGE_CARD_URL = (url: any) =>
  `CONTENT_SMALL_ITEM_IMAGE_CARD_URL_${url}`;
export const CONTENT_MIDDLE_ITEM_IMAGE = (url: any) => `CONTENT_MIDDLE_ITEM_IMAGE_${url}`;
export const TOP_RIGHT_ITEM_IMAGE = (url: any) => `TOP_RIGHT_ITEM_IMAGE_${url}`;
export const YUGI_INFO_BANNER_IMAGE = (url: any) => `YUGI_INFO_BANNER_IMAGE_${url}`;
export const CONTENT_ITEM_BUTTON_IMAGE = (url: any) => `CONTENT_ITEM_BUTTON_IMAGE_${url}`;
export const SPONSOR_LOGO_IMAGE = (url: any) => `SPONSOR_LOGO_IMAGE_${url}`;
export const PRODUCT_DETAILS_HOLDING_TITLE = "PRODUCT_DETAILS_HOLDING_TITLE";

// CERTIFICATE
export const CERTIFICATE_SCROLL_VIEW = "CERTIFICATE_SCROLL_VIEW";
export const CERTIFICATE_KEY_VALUES = (key: string, value: string) =>
  `CERTIFICATE_KEY_VALUES_${key}_${value}`;
export const POLICY_CERTIFICATE_TITLE = "POLICY_CERTIFCATE_TITLE";
export const POLICY_CERTIFICATE_CONTENT = "POLICY_CERTIFICATE_CONTENT";

// CONNECTION SETUP
export const CONNECTION_SETUP_TITLE = "CONNECTION_SETUP_TITLE";

// AVATAR BUILDER
export const BODY_ITEM_TITLE = (title: string) => `BODY_ITEM_TITLE_${title}`;
export const BODY_ITEM_COLOUR = (colorItemTitle: string) => `BODY_ITEM_COLOUR_${colorItemTitle}`;
export const BODY_PART_ITEM = (partID: string) => `BODY_PART_ITEM_${partID}`;
export const SELECTED_COLOR = (hexColour: string) => `SELECTED_COLOR_${hexColour}`;
export const LEADERBOARD_PEDESTAL = "LEADERBOARD_PEDESTAL";
export const AVATAR_BODY = (bodyItems: string[]) => `AVATAR_BODY_${bodyItems}`;
export const LEADERBOARD_HEAD_AVATAR = (bodyItems: string[]) =>
  `LEADERBOARD_HEAD_AVATAR_${bodyItems}`;
export const PERSONAL_PRODUCT = (
  type: "LifeInsurance" | "IncomeProtection" | "CriticalIllness" | "TravelInsurance" | string
) => `PERSONAL_PRODUCT_${type}`;
export const SURVEY_SCREEN = "SURVEY_SCREEN";
export const CHECK_BOX_STATE = (label: string, state: boolean) =>
  `CHECK_BOX_STATE_${label}_${state}`;
export const SURVEY_TEXT_BOX = "SURVEY_TEXT_BOX";
export const AVATAR_BUILDER_LIST = "AVATAR_BUILDER_LIST";
export const BUILDER_BODY = (bodyItems: string[]) => `BUILDER_BODY${bodyItems}`;
export const NO_ITEM_SELECTED = "NO_ITEM_SELECTED";
export const HEAD_TYPE = (type: string) => `HEAD_TYPE_${type}`;
export const YUSCREEN_AVATAR = "YUSCREEN_AVATAR";
export const YUMOJI_CONTINUE_BUTTON = "YUMOJI_CONTINUE_BUTTON";

// SDUI
export const CONTENT_ITEM = (type: string, id: string) => `SDUI_${type.toUpperCase()}_${id}`;
export const CONTENT_ITEM_INPUT = (id: string) => `SDUI_INPUT_${id}`;
export const CONTENT_ITEM_CHOICE = (id: string) => `SDUI_CHOICE_${id}`;
export const CONTENT_ITEM_MULTI_BUTTON = (id: string) => `SDUI_MULTI_BUTTON_${id}`;
export const CONTENT_ITEM_INFO_CARD = (id: string) => `SDUI_INFO_CARD_${id}`;
export const SDUI_SCREEN_SCROLL_VIEW = "SDUI_SCREEN_SCROLL_VIEW";
export const GESTURE_WRAPPER = "GESTURE_WRAPPER";
export const ENGAGEMENT_SURVEY_WORK_MOTIVATION = "SDUI_INPUT_work_motivation_text-input";
export const ENGAGEMENT_SURVEY_EQUAL_OPPORTUNITIES_REASON =
  "SDUI_INPUT_equal_opportunities_reason_text-input";
export const ENGAGEMENT_SURVEY_ENJOY_ABOUT_COMPANY =
  "SDUI_INPUT_enjoy_most_about_company_text-input";
export const ENGAGEMENT_SURVEY_ONE_CHANGE_TO_IMPROVE_COMPANY =
  "SDUI_INPUT_one_change_to_improve_company_text-input";

// FIB new
export const PRODUCT_STEP_BODY_SCROLL_VIEW = `PRODUCT_STEP_BODY_SCROLL_VIEW`;
export const CONDITION_OPTION = (name: string, isActive: boolean) =>
  `CONDITION_OPTION_${name}_${isActive}`;

// YUMOJI BUILDER
export const BODY_TYPE = (type: string) => `BODY_TYPE_${type}`;
export const CATEGORY_TYPE = (type: string) => `CATEGORY_TYPE_${type}`;
export const COLOUR = (hexColour: string) => `COLOUR_${hexColour}`;
export const YUMOJI_PART_ID = (id: string) => `YUMOJI_PART_ID_${id}`;
export const YUMOJI_BODY = (bodyParts: string[]) => `YUMOJI_BODY_${bodyParts}`;
export const YUMOJI_PART_ID_STATUS = (status: string, id: string) =>
  `YUMOJI_PART_ID_STATUS_${status}_${id}`;
export const YUMOJI_DO_IT_LATER_LINK = "screens.yumoji_builder.create.link";

// FIB
export const FIB_SALARY_INPUT = "FIB_SALARY_INPUT";
export const FIB_SALARY_INPUT_VALUE = (value: string) => `FIB_SALARY_INPUT_VALUE_${value}`;
export const FIB_BROWSE_SCREEN = "FIB_BROWSE_SCREEN";
export const YUMOJI_PODIUM = (index: number) => `YUMOJI_PODIUM${index}`;

export const EMPTY_AVATAR = "EMPTY_AVATAR";
export const YEAR_SCROLLER = "YEAR_SCROLLER";
export const MONTH_SCROLLER = "MONTH_SCROLLER";
export const SCROLLER_VALUE = (value: number) => `SCROLLER_VALUE${value}`;
export const HIGHLIGHTED_SCROLLER_VALUE = (value: number) => `HIGHLIGHTED_SCROLLER_VALUE_${value}`;
export const CUSTOM_COVER_SCREEN = "CUSTOM_COVER_SCREEN";
export const PERCENTAGE_COVERED = (value: number) => `PERCENTAGE_COVERD_${value}`;
export const FIB_INTRO_SCREEN = "FIB_INTRO_SCREEN";
export const PACKAGE_INFO = "PACKAGE_INFO";
export const ARMOR_OPTION = (style: string) => `ARMOR_OPTION${style}`;
export const SELECTED_ARMOR = (uri: string) => `SELECTED_ARMOR${uri}`;
export const FIB_FIRST_NAME_INPUT = "FIB_FIRST_NAME_INPUT";
export const FOOT_INPUT = "FOOT_INPUT";
export const INCH_INPUT = "INCH_INPUT";
export const CM_INPUT = "CM_INPUT";
export const KG_INPUT = "KG_INPUT";
export const DRINKS_INPUT = "DRINKS_INPUT";
export const UNDERWRITING_JOURNEY_SCREEN = "UNDERWRITING_JOURNEY_SCREEN";
export const UNDERWRITING_REVIEW_SCREEN = "UNDERWRITING_REVIEW_SCREEN";
export const UNDERWRITING_REVIEW_ANSWERS = (question: string, answer: string) =>
  `UNDERWRITING_REVIEW_ANSWERS_${question}_${answer}`;
export const UNDERWRITING_REVIEW_CONFIRM = "UNDERWRITING_REVIEW_CONFIRM";
export const SEX_BUTTON = (title: string, state: boolean) => `SEX_BUTTON_${title}_${state}`;
export const PACKAGE_OPTION = (type: string) => `PACKAGE_OPTION_${type}`;
export const PACKAGE_TYPES = "PACKAGE_TYPES";
export const SALARY_COVERED = (percentage: number) => `SALARY_COVERED_${percentage}`;
export const PACKAGE_YUCOIN_POWER = (yucoinPower: number) => `YUCOIN_POWER_${yucoinPower}`;
export const SELECTED_PACKAGE_TITLE = (title: string) => `SELECTED_PACKAGE_TITLE_${title}`;
export const SUMMARY_SCROLL_VIEW = "SUMMARY_SCROLL_VIEW";
export const SEARCH_ITEM = (text: string) => `SEARCH_ITEM${text}`;
export const SEARCH_FLAT_LIST = "SEARCH_FLAT_LIST";
export const CONTACT_DETAILS_INPUT = (placeHolder: string) =>
  `CONTACT_DETAILS_INPUT_${placeHolder}`;
export const CONTACT_DETAILS_SCROLL_VIEW = "CONTACT_DETAILS_SCROLL_VIEW";
export const CONTACT_DETAILS_CARD = (
  name: string,
  firstAddressLine: string,
  postCode: string,
  email: string,
  phoneNumber: string
) => `CONTACT_DETAILS_CARD_${name}__${firstAddressLine}_${postCode}_${email}_${phoneNumber}`;
export const GP_INPUT = "GP_INPUT";
export const GP_LIST_ITEM = (name: string) => `GP_LIST_ITEM_${name}`;
export const GP_CONFIRMATION = (
  gpName: string,
  practiceName: string,
  address1: string,
  postCode: string
) => `GP_CONFIRMATION_${gpName}_${practiceName}_${address1}_${postCode}`;
export const GP_DETAILS_CARD = (name: string, postCode: string) =>
  `GP_DETAILS_CARD_${name}_${postCode}`;
export const CHECKOUT_SCROLL_VIEW = "CHECKOUT_SCROLL_VIEW";
export const PAYMENT_DETAILS_CARD = (endDigits: string, name: string, expiry: string) =>
  `PAYMENT_DETAILS_CARD_${endDigits}_${name}_${expiry}`;
export const CHECKOUT_CHECKBOX = "CHECKOUT_CHECKBOX";

// DUELS
export const DUELS_HUB = "DUELS_HUB";
export const EMPTY_DUELS_HUB = "EMPTY_DUELS_HUB";
export const DUEL_OPTIONS_SCREEN = "DUEL_OPTIONS_SCREEN";
export const DUEL_RESPONSE = (opponentName: string) => `DUEL_RESPONSE_${opponentName}`;
export const DUELS_SEARCH = "DUELS_SEARCH";
export const SEARCH_INPUT = "SEARCH_INPUT";
export const CHALLENGE_FRIEND_BUTTON = "CHALLENGE_FRIEND_BUTTON";
export const DUELS_HUB_INVITATION = (name: string, wager: number, status: string) =>
  `DUELS_HUB_INVITATION_${name}_${wager}_${status}`;
export const DUEL_ENTRY = (name: string, wager: number, status: string) =>
  `DUEL_ENTRY_${name}_${wager}_${status}`;
export const DUEL_ICON = (name: string, status: any) => `DUEL_ICON_${name}_${status}`;
export const DUEL_DESCRIPTION = (opponentSteps: number, userSteps: number) =>
  `DUEL_DESCRIPTION_${opponentSteps}_${userSteps}`;
export const DUEL_AVATAR = (fullName: string) => `DUEL_AVATAR_${fullName}`;
export const DUEL_SEARCH_LIST_ITEM = (name: string) => `DUEL_SEARCH_LIST_ITEM_${name}`;
export const DUEL_NOTIFICATION_HEADING = (heading: string) =>
  `DUEL_NOTIFICATION_HEADING_${heading}`;
export const NEXT_BUTTON_DUEL_ONBOARDING = "NEXT_BUTTON_DUEL_ONBOARDING";
export const LETS_GO_BUTTON_DUEL_ONBOARDING = "LETS_GO_BUTTON_DUEL_ONBOARDING";
export const SET_DUEL_BUTTON = "modals.duels.duel_intro.button";
export const PICKER_AMOUNT_LABEL = "PICKER_AMOUNT_LABEL";
export const SEND_DUEL_REQUEST_BUTTON = "modals.duels.duel_options.button_label";
export const BRAGGING_RIGHT_OPTION = "BRAGGING_RIGHT_OPTION";
export const WAGER_OPTION = (yucoin: number) => `WAGER_OPTION_${yucoin}_yucoins`;
export const ACTIVE_TAB = "modals.duels.hub.active_tab";
export const COMPLETED_TAB = "modals.duels.hub.completed_tab";
export const ONBOARDING_BUTTON = "yu-onboarding-button";
export const FLOATING_CONTINUE_BUTTON = "floating-modal-close-button";
export const DUELS_INTRO_BUTTON = "modals.duels.duel_intro.button";

// COMMUNITY GOALS
export const NICKNAME_INPUT = "NICKNAME_INPUT";
export const COMMUNITY_GOAL_DROPDOWN = "COMMUNITY_GOAL_DROPDOWN";
export const GOAL_TOOLTIP_INFO = "GOAL_TOOLTIP_INFO";
export const AD_BANNERS = "AD_BANNERS";
export const FLAT_LIST_EVENTS = "FLAT_LIST_EVENTS";
export const RADIO_ICON_COLOUR = (hexColour: string) => `RADIO_ICON_COLOUR_${hexColour}`;

// FEEDBACK FORMS
export const FEEDBACK_FORM_QUESTION = (question: string) => `FEEDBACK_FORM_QUESTION_${question}`;
export const SLIDER_INPUT = (index: number) => `FEEDBACK_FORM_RATING_${index}`;
export const SLIDER_LABEL = (label: string) => `SLIDER_LABEL_${label}`;
export const FEEDBACK_TEXT_INPUT = "FEEDBACK_TEXT_INPUT";

// POLICY DOCUMENTS
export const POLICY_DOCUMENTS_TITLE = "POLICY_DOCUMENTS_TITLE";

// BENEFICIARIES
export const BENEFICIARY_DETAILS = (
  share: number,
  firstName: string,
  lastName: string,
  relation: string
) => `BENEFICIARY_DETAILS_${share}_${firstName}_${lastName}_${relation}`;
export const BENEFICIARY_SHARE_INPUT = "BENEFICIARY_SHARE_INPUT";
export const BENEFICIARIES_PERCENTAGE_ERROR = "BENEFICIARIES_PERCENTAGE_ERROR";
export const BENEFICIARY_DEFAULT_MODAL = "BENEFICIARY_DEFAULT_MODAL";

// WELLBEING HUB
export const WELLBEING_HUB_SCROLL_VIEW = "WELLBEING_HUB_SCROLL_VIEW";
export const WELLBEING_HUB_ITEM_SCROLL_VIEW = "WELLBEING_HUB_ITEM_SCROLL_VIEW";
export const WELLBEING_SERVICE_CARD = (title: string, index: string) =>
  `WELLBEING_SERVICE_CARD_${title}_${index}`;
export const WELLBEING_HUB_BUSINESS_ACCOUNT_DROP_DOWN = "WELLBEING_HUB_BUSINESS_ACCOUNT_DROP_DOWN";
export const WELLBEING_HUB_BUSINESS_ACCOUNT_NAME = (title: string) =>
  `WELLBEING_HUB_BUSINESS_ACCOUNT_NAME_${title}`;
export const WELLBEING_HUB_BUSINESS_ACCOUNTS_LIST = (names: string[]) =>
  `LEADERBOARD_COMMUNITY_LIST_${names.sort()}`;

// REFERRALS
export const REFERRALS_SCROLL_VIEW = "REFERRALS_SCROLL_VIEW";
export const REFERRALS_BUTTON_BADGE = (bool: boolean) => `REFERRALS_BUTTON_BADGE_${bool}`;
export const MENU_ICON_BADGE = (bool: boolean) => `MENU_ICON_BADGE_${bool}`;
export const REFERRALS_INVITE_BUTTON = `REFERRALS_INVITE_BUTTON`;
export const REFERRALS_BUTTON_HOMEPAGE = "REFERRALS_BUTTON_HOMEPAGE";
export const REFERRALS_QR_CODE = "REFERRALS_QR_CODE";
export const REFERRALS_IMAGE_URI = (uri: string) => `REFERRALS_IMAGE_URI_${uri}`;

// SETTINGS SCREEN
export const SETTINGS_NAME = (name: string) => `SETTINGS_NAME_${name}`;
export const SETTINGS_DESC = (desc: string) => `SETTINGS_DESC_${desc}`;
export const SETTINGS_SWITCH = (name: string, bool: boolean) => `SETTINGS_SWITCH_${name}_${bool}`;

// PLI
export const YUMOJI_OUTFIT_RADIO = (title: string) => `YUMOJI_OUTFIT_RADIO${title}`;
export const YUMOJI_OUTFIT_LABEL = (title: string) => `YUMOJI_OUTFIT_LABEL${title}`;
export const DENTAL_TOOLTIP_INFO = "DENTAL_TOOLTIP_INFO";
export const POPOVER = "POPOVER";
export const YULIFE_BUPA_LOGO = "YULIFE_BUPA_LOGO";

// CHALLENGES
export const TIME_REMAINING = (timeRemaing: string) => `TIME_REMAINING_${timeRemaing}`;
export const LEVEL_STAR_COUNT = (starArrLength: number) => `LEVEL_STAR_COUNT_${starArrLength}`;
export const MEDIA_LIST_HEADER = (header: string) => `MEDIA_LIST_HEADER_${header}`;
export const MEDIA_LIST_DESCRIPTION = (description: string) =>
  `MEDIA_LIST_DESCRIPTION_${description}`;
export const PARTNER_LOGO = "PARTNER_LOGO";
export const MEDIA_LIST_ITEM_TITLE = (title: string) => `MEDIA_LIST_ITEM_TITLE_${title}`;
export const MEDIA_LIST_ITEM_DESCRIPTION = (description: string) =>
  `MEDIA_LIST_ITEM_DESCRIPTION_${description}`;
export const MEDIA_STAR_REWARD = (star: number) => `MEDIA_REWARD_${star}`;
export const MEDIA_YUCOIN_REWARD = (yucoin: number) => `MEDIA_REWARD_${yucoin}`;
export const MEDIA_SMALL_LOGO = (logoUrl: string) => `MEDIA_SMALL_LOGO_${logoUrl}`;
export const CHALLENGE_SUCCESS_SCREEN = "CHALLENGE_SUCCESS_SCREEN";
export const CHALLENGE_TILE_BOOST_TAG = (heading: string, reward: string, hasBonus: boolean) =>
  `CHALLENGE_TILE_BOOST_TAG_${heading}_${reward}_${hasBonus}`;
export const CHALLENGE_PAGE_BOOST_SLOT = (reward: number) => `CHALLENGE_PAGE_BOOST_SLOT_${reward}`;
export const CHALLENGE_DETAILS_BADGE = (text: string) => `CHALLENGE_DETAILS_BADGE_${text}`;
export const CHALLENGE_TILE_SURGE_ICON = "CHALLENGE_TILE_SURGE_ICON";
export const CHALLENGE_LOCKED_ICON = "CHALLENGE_LOCKED_ICON";
export const GHI_REWARD_ICON = (level: string | number) => `GHI_REWARD_ICON_${level}`;
export const HINT_VARIANT = (variant: string) => `HINT_VARIANT_${variant}`;
export const QUEST_MODAL_MAYBE_LATER = "quest-detail-modal-dismiss-button-text-view";
export const QUEST_MAP_ONBOARDING_CLOSE = "quest-map-onboarding-close-button";
export const LOCKED_QUEST_LEVEL_CTA = "quest-detail-modal-cta-button";

// MEDITOPIA
export const MEDITOPIA_LOGO = "MEDITOPIA_LOGO";
export const VIDEO_PLAYER_TIMER = "VIDEO_PLAYER_TIMER";
export const VIDEO_PROGRESS_BAR = "VIDEO_PROGRESS_BAR";
export const VIDEO_PLAY_PAUSE_BUTTON = (paused: boolean) => `VIDEO_PLAY_PAUSE_BUTTON_${paused}`;
export const MEDITOPIA_TIMER_MINUTES = (mins: string) => `MEDITOPIA_TIMER_MINUTES_${mins}`;
export const MEDITOPIA_TIMER_SECS = (secs: string) => `MEDITOPIA_TIMER_SECS_${secs}`;
export const LOADING_BAR = "LOADING_BAR";
export const CHALLENGE_DETAILS_SCREEN = "CHALLENGE_DETAILS_SCREEN";
export const CHALLENGE_DETAILS_SCREEN_NEW = "CHALLENGE_DETAILS_SCREEN_NEW";
export const SET_UP_BUTTON = (text: string) => `SET_UP_BUTTON_${text}`;
export const REWARD_AMOUNT = (amount: number) => `REWARD_AMOUNT_${amount}`;
export const CHALLENGE_TYPE = (challengeType: string) => `CHALLENGE_TYPE_${challengeType}`;
export const TARGET = (target: string) => `TARGET_${target}`;
export const TODAYS_MEDITATION_SCREEN = "TODAYS_MEDITATION_SCREEN";
export const TODAYS_MEDITATION_HEADER = (header: string) => MEDIA_LIST_HEADER(header);
export const TODAYS_MEDITATION_DESCRIPTION = (description: string) =>
  MEDIA_LIST_DESCRIPTION(description);
export const VIDEO_PLAYER_SCREEN = "VIDEO_PLAYER_SCREEN";
export const VIDEO_LOGO = "VIDEO_LOGO";
export const MEDITATION_PARTNER_LOGO = PARTNER_LOGO;
export const VIDEO_PLAYER = "VIDEO_PLAYER";
export const VIDEO_PLAYER_START_BUTTON = "video-player-start-button";
export const TARGET_AND_REWARD = (target: string, reward: number) =>
  `TARGET_AND_REWARD_${target}${reward}`;

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
export const EMPTY_USER_YUMOJI_AVATAR = "EMPTY_USER_YUMOJI_AVATAR";
export const COMPARISON_ACTIVITY = (data: string | number) => `COMPARISON_ACTIVITY_${data}`;
export const COMPARISON_ACTIVITY_MINE = (data: string | number) =>
  `COMPARISON_ACTIVITY_MINE_${data}`;
export const COMPARISON_ACTIVITY_OPPONENT = (data: string | number) =>
  `COMPARISON_ACTIVITY_OPPONENT_${data}`;
export const USER_YUMOJI_AVATAR = "USER_YUMOJI_AVATAR";
export const INSPECT_SECTION_HEADER = (title: string) => `INSPECT_SECTION_HEADER_${title}`;
export const INSPECT_ACTIVITY_HEADER = "INSPECT_ACTIVITY_HEADER";
export const INSPECT_ACTIVITY_PERIOD = "INSPECT_ACTIVITY_PERIOD";
export const ACTIVITY_NAMES = (opponentName: string, name: string) =>
  `OPPONENT_ACTIVITY_INFO_${opponentName}_${name}`;
export const WINNER = (value: number) => `WINNER_${value}`;
export const SECOND_POSITION = (value: number) => `SECOND_POSITION_${value}`;
export const INSPECT_AVATAR = (order: number) => `INSPECT_AVATAR_${order}`;
export const RANK = (name: string, rank?: number) => `RANK_${rank}${name}}`;
export const SINGLE_USER = "SINGLE_USER";
export const LEFT_USER = "LEFT_USER";
export const RIGHT_USER = "RIGHT_USER";
export const AV_STATS = (value: number) => `AV_STATS_${value}`;
export const DRAW = (value: number) => `DRAW_${value}`;
export const USER_WORLD = (worldName: string) => `USER_WORLD_${worldName}`;
export const USER_LEVEL = (level: number) => `USER_LEVEL_${level};`;

// YUCOIN POWER
export const EARN_RATE = (earnRate: number) => `EARN_RATE_${earnRate}`;
export const YUCOIN_TITLE = "YUCOIN_TITLE";
export const YUCOIN_POWER_TEXT = "YUCOIN_POWER_TEXT";
export const ACTIVITY_LISTING = (activity: string, value: string | number) =>
  `ACTIVITY_LISTING_${activity}_${value}`;

export const LIST_YUMOJI = (index: number) => `LIST_YUMOJI_${index}`;

// EVENTS
export const EVENT_HEADING = (heading: string) => `EVENT_HEADING_${heading}`;
export const EVENT_DESCRIPTION = (description: string) => `EVENT_DESCRIPTION_${description}`;
export const NEW_EVENT_ICON = "NEW_EVENT_ICON";
export const EVENT_PROGRESS_BAR = (progress: number) => `EVENT_PROGRESS_BAR_${progress}`;
export const CLAIM_BUTTON = "CLAIM_BUTTON";
export const COLLECT_EVENT_REWARD_BUTTON = "COLLECT_EVENT_REWARD_BUTTON";
export const ANIMATED_CIRCLE = (colour: string) => `ANIMATED_CIRCLE_${colour}`;
export const NUM_OF_STARS = (number: number) => `NUM_OF_STARS+${number}`;
export const CHALLENGE_STARS = (
  isLefttHighlighted: boolean,
  isMidHighlighted: boolean,
  isRightHighlighted: boolean
) => `CHALLENGE_STARS_${isLefttHighlighted}_${isMidHighlighted}_${isRightHighlighted}`;
export const HERO_CARD_BADGE = (copy: string) => `HERO_CARD_BADGE_${copy}`;
export const EVENT_CARD_COLOUR = (colour: string) => `EVENT_CARD_COLOUR_${colour}`;
export const EVENT_DIALOG_BUTTON = "EVENT_DIALOG_BUTTON";

// ETOW
export const CELESTIAL_CARD = (description: string) => `CELESTIAL_CARD_${description}`;
export const PLANET = (planet: Planet) => `PLANET_${planet}`;
export const PLANET_AVATAR = "PLANET_AVATAR";

// CPD/YUNIVERSITY
export const CPD_COURSES_SCREEN = "CPD_COURSES_SCREEN";
export const CPD_COURSE_DETAIL_SCREEN = "CPD_COURSE_DETAIL_SCREEN";
export const CPD_COURSE_SCROLL_VIEW = "CPD_COURSE_SCROLL_VIEW";
export const CPD_FEEDBACK_BUTTON = (choice: string) => `CPD_FEEDBACK_BUTTON_${choice}`;
export const CPD_CERTIFICATE = "CPD_CERTIFICATE";
export const CPD_SAVE_BUTTON = "CPD_SAVE_BUTTON";

// WEEKLIES
export const WEEKLY_GOAL_ICON = (label: number, badge: Boolean) =>
  `WEEKLY_GOAL_ICON_${label}_${badge}`;
export const WEEKLY_PROGRESS_BAR = (progress: number, max: number, color: string) =>
  `WEEKLY_PROGRESS_BAR_${progress}_${max}_${color}`;

// Fiit
export const FIIT_CATEGORY_LIST_SCREEN = "FIIT_CATEGORY_LIST_SCREEN";
export const FIIT_CATEGORY_LIST_HEADER = (header: string) => MEDIA_LIST_HEADER(header);
export const FIIT_CATEGORY_LIST_DESCRIPTION = (description: string) =>
  MEDIA_LIST_DESCRIPTION(description);
export const FIIT_LOGO = PARTNER_LOGO;
export const FITT_MEDIA_ITEM_TITLE = (title: string) => MEDIA_LIST_ITEM_TITLE(title);
export const FIIT_MEDIA_ITEM_DESCRIPTION = (desciption: string) =>
  MEDIA_LIST_ITEM_DESCRIPTION(desciption);
export const FIIT_MEDIA_SCROLL_VIEW = "FIIT_MEDIA_SCROLL_VIEW";
export const FIIT_MEDIA_PLAYER_CLOSE = MEDIA_PORTRAIT_CLOSE;

// Notification Centre
export const NOTIF_CENTRE = "NOTIFICATION_CENTRE";
export const NOTIF_ICON_BADGE = (bool: boolean) => `NOTIF_ICON_BADGE_${bool}`;
export const INBOX_MESSAGE_ITEM = (title: string) => `INBOX_MESSAGE_ITEM_${title}`;
export const HERO_IMAGE_MODAL = "HERO_IMAGE_MODAL";

// Sudoku
export const CELL_ROW_COLUMN = (row: number, column: number, value: number) =>
  `${row}-${column}-${value}`;
export const SUDOKU_HINT = "SUDOKU_HINT";
export const SUDOKU_HINT_TIMER = (time: number) => `SUDOKU_HINT_TIMER_${time}`;
export const SUDOKU_PENALTY_TIME = (time: number) => `SUDOKU_PENALTY_TIME_${time}`;
export const SUDOKU_NUMBER_INPUT = (value: number, isCompleted = false) =>
  `SUDOKU_NUMBER_${value}_${isCompleted}`;
export const SUDOKU_PAUSE = "SUDOKU_PAUSE";
export const SUDOKU_STAT = (label: string, num: any) => `SUDOKU_STAT_${label}_${num}`;
export const SUDOKU_LEADERBOARD = (rank: number, name: string, time: string) =>
  `SUDOKU_LEADERBOARD_${rank}_${name}_${time}`;
export const SUDOKU_HOWTOPLAY_BUTTON = "HOW_TO_PLAY_SUDUKU";
export const SUDOKU_JOINLEADERBOARD_BUTTON = "JOIN_LEADERBOARD_SUDUKU";
export const SUDOKU_UNDO_BUTTON = "SUDOKU_UNDO";
export const SUDOKU_STAGING_SCREEN_SCROLL = "SUDOKU_STAGING_SCREEN_SCROLL";
export const SUDOKU_COMPLETED_SCREEN_SCROLL = "SUDOKU_COMPLETED_SCREEN_SCROLL";
export const CANCEL_CANCEL_CHALLENGE = "CANCEL_CANCEL_CHALLENGE";
export const SUDOKU_UNRANKED_LABEL = "SUDOKU_UNRANKED_LABEL";
export const SUDOKU_PRACTICE_BUTTON = "JOIN_PRACTICE_SUDUKU";
export const LEVEL_SUMMARY_YUDOKU_LEADERBOARD = (date: string) =>
  `LEVEL_SUMMARY_YUDOKU_LEADERBOARD_${date}`;

// functions

export const removeTextStyling = (inputString: string) => {
  return inputString.replace(/\*/g, "").replace(/\n/g, "");
};

// Maximise Yu
export const NUDGE_ITEM = (text: string) => `NUDGE_ITEM_${text}`;
export const MAXIMISE_TODAYS_EARNINGS = (current: number, max: number) =>
  `MAXIMISE_TODAYS_EARNINGS_${current}_${max}`;
export const NUDGE_ITEM_IMAGE = (uri: string) => `NUDGE_ITEM_IMAGE_${uri}`;
export const DONE_NUDGE_ICON = (text: string) => `DONE_NUDGE_ICON_${text}`;

// Smoking
export const YUSCREEN_SMOKING_TILE = "YUSCREEN_SMOKING_TILE";
export const YUSCREEN_SMOKING_TILE_TITLE = (title: string) =>
  `YUSCREEN_SMOKING_TILE_TITLE_${title}`;
export const SMOKING_TILE_BUTTON = "SMOKING_TILE_BUTTON";
export const SMOKING_CAROUSEL_LIST = "SMOKING_CAROUSEL_LIST";
export const SMOKING_CAROUSEL_LIST_ITEM = (id: string) => `SMOKING_CAROUSEL_LIST_ITEM_${id}`;
export const COMPLETED_SMOKING_CAROUSEL_LIST_ITEM = (id: string) =>
  `COMPLETED_SMOKING_CAROUSEL_LIST_ITEM_${id}`;
export const CLAIMED_SMOKING_CAROUSEL_LIST_ITEM = (id: string) =>
  `CLAIMED_SMOKING_CAROUSEL_LIST_ITEM_${id}`;
export const SMOKING_CAROUSEL_LIST_ITEM_CTA = (id: string) =>
  `SMOKING_CAROUSEL_LIST_ITEM_CTA_${id}`;
export const BATTLE_PASS_LIST = "BATTLE_PASS_LIST";
export const BATTLE_PASS_LIST_ITEM = (id: string) => `BATTLE_PASS_LIST_ITEM_${id}`;
export const BATTLE_PASS_LIST_IMAGE_LOCKED = (id: string) => `BATTLE_PASS_LIST_ITEM_${id}_LOCKED`;
export const BATTLE_PASS_LIST_IMAGE_UNLOCKED = (id: string) =>
  `BATTLE_PASS_LIST_ITEM_${id}_UNLOCKED`;
export const SMOKING_HEADER_BUTTON = "SMOKING_HEADER_BUTTON";
export const SMOKING_CONTAINER_SCROLL = "SMOKING_CONTAINER_SCROLL";
export const SMOKING_MILESTONE_TAPPABLE = (id: string) => `SMOKING_MILESTONE_TAPPABLE_${id}`;
export const SMOKING_MILESTONE_UNTAPPABLE = (id: string) => `SMOKING_MILESTONE_UNTAPPABLE_${id}`;
export const SMOKING_CARD = (id: string, value: string) => `SMOKING_CARD_${id}_${value}`;
export const SMOKING_INFO_PANEL = "SMOKING_INFO_PANEL";
export const MOMENTS_TO_MONITOR = "MOMENTS_TO_MONITOR";
export const SMOKING_HUB_REASONS = "SMOKING_HUB_REASONS";
export const SMOKING_HUB_OPT_OUT = "SMOKING_HUB_OPT_OUT";
export const SMOKING_INTRO_TITLE = "smoking_cessation_intro_title";
export const SMOKING_HEADER_DAYS = (currentStreak: number) =>
  `SMOKING_HEADER_DAYS_${currentStreak}`;
export const SMOKING_CHECKIN_OVERLAY = "SMOKING_CHECKIN_OVERLAY";
export const SMOKING_CELEBRATION_NEXT_BUTTON = "SMOKING_CELEBRATION_NEXT_BUTTON";
export const SMOKING_SPONSORSHIP_CARD_CTA = "SMOKING_SPONSORSHIP_CARD_CTA";
export const SMOKING_CHIP = (value: string) => `SMOKING_CHIP_${value}`;
export const SMOKING_MILESTONE_POPUP = (id: string) => `SMOKING_MILESTONE_POPUP_${id}`;
export const SMOKING_EDIT_CHECKBOX_ = (key: string) => `SMOKING_EDIT_CHECKBOX_${key}`;
export const SMOKING_OPT_OUT_HALF_MODAL = "SMOKING_OPT_OUT_HALF_MODAL";
export const BATTLE_PASS_LIST_ITEM_CTA = (id: string) => `BATTLE_PASS_LIST_ITEM_CTA_${id}`;
export const SMOKING_STORY_SCREEN = (heading: string) => `SMOKING_STORY_SCREEN_${heading}`;
export const SMOKING_MILESTONE_IMAGE = (source: string) => `SMOKING_MILESTONE_IMAGE_${source}`;
export const SMOKING_POPUP_HEADER = (message: string) => `SMOKING_POPUP_HEADER_${message}`;
export const SMOKING_POPUP_SUBHEADER = (heading: string) => `SMOKING_POPUP_SUBHEADER_${heading}`;
export const SMOKING_LAPSE_SCREEN_1 = "SMOKING_LAPSE_SCREEN_1";
export const SMOKING_LAPSE_SCREEN_2 = "SMOKING_LAPSE_SCREEN_2";
export const SMOKING_LAPSE_SCREEN_IMAGE = "SMOKING_LAPSE_SCREEN_IMAGE";
export const SMOKING_LAPSE_SCREEN_HEADER = "SMOKING_LAPSE_SCREEN_HEADER";
export const SMOKING_LAPSE_NEXT_BUTTON = "smoking-lapsed-next-button";
export const SMOKING_LAPSE_DATE_PICKER_NEXT_BUTTON = "smoking-lapsed-submit-button-text-view";
export const SMOKING_CELEBRATION_TITLE = (title: string) => `SMOKING_CELEBRATION_TITLE_${title}`;

// Smoking Questionnaire
export const SMOKING_ANSWER_CIG = "smoking_cessation_question_type_choice_cigarettes";
export const SMOKING_ANSWER_ROLL = "smoking_cessation_question_type_choice_roll_ups";
export const SMOKING_ANSWER_BOTH = "smoking_cessation_question_type_choice_both";
export const SMOKING_ANSWER_TEXT_FIELD = "SDUI_INPUT_smoking_cessation_question_amount_text-input";
export const SMOKING_SPEND_INPUT = "SDUI_INPUT_smoking_cessation_question_spend_text-input";
export const SMOKING_ANSWER_IMPROVE_HEALTH =
  "smoking_cessation_question_motivations_choice_improve_health";
export const SMOKING_ANSWER_MAINTAIN_APPEARANCE =
  "smoking_cessation_question_motivations_choice_maintain_appearance";
export const SMOKING_ANSWER_IMPROVE_FOR_FAMILY =
  "smoking_cessation_question_motivations_choice_for_family";
export const SMOKING_ANSWER_IMPROVE_SAVE_MONEY =
  "smoking_cessation_question_motivations_choice_save_money";
export const SMOKING_ANSWER_IMPROVE_FOR_PARTNER =
  "smoking_cessation_question_motivations_choice_for_partner";
export const SMOKING_ANSWER_IMPROVE_SMELL = "smoking_cessation_question_motivations_choice_smell";
export const SMOKING_ANSWER_IMPROVE_OTHER = "smoking_cessation_question_motivations_choice_other";
export const SMOKING_ANSWER_EXTREMELY = "smoking_cessation_question_worried_choice_extremely";
export const SMOKING_ANSWER_VERY = "smoking_cessation_question_worried_choice_very";
export const SMOKING_ANSWER_QUITE = "smoking_cessation_question_worried_choice_quite";
export const SMOKING_ANSWER_MILDLY = "smoking_cessation_question_worried_choice_midly";
export const SMOKING_ANSWER_NOT = "smoking_cessation_question_worried_choice_not";

export const SMOKING_ANSWER_AN_HOUR = "smoking_cessation_question_when_first_choice_after_wake";
export const SMOKING_ANSWER_DRINKING =
  "smoking_cessation_question_triggers_choice_drinking_alcohol";
export const SMOKING_ANSWER_VERY_CONFIDENT = "smoking_cessation_question_confident_choice_very";
export const SMOKING_ANSWER_NO = "smoking_cessation_question_replacement_choice_no";

export const SMOKING_LAPSE_ANSWER_BAR = "smoking_cessation_lapsed_question_location_choice_bar";
export const SMOKING_LAPSE_ANSWER_ALCOHOL =
  "smoking_cessation_lapsed_question_reason_choice_alcohol";
export const SMOKING_LAPSE_ANSWER_MODERATE =
  "smoking_cessation_lapsed_question_craving_intensity_choice_moderate";

// SMOKING OPT OUT
export const SMOKING_OPT_OUT_NOT_QUIT =
  "smoking_cessation_opt_out_feedback_choice_not_yet_quitting";

// DONATIONS
export const DONATIONS_PROGRESS_BAR = (progress: number, max: number, level: number) =>
  `DONATIONS_PROGRESS_BAR_${progress}_${max}_${level}`;
export const IMPACT_DONATION_TITLE = (title: string) => `IMPACT_DONATION_${title}`;
export const DONATION_BUTTON = (id: string) => `DONATION_BUTTON_${id}`;
export const IMPACT_DONATION_IMAGE = (url: any) => `IMPACT_DONATION_IMAGE_${url}`;
export const DONATIONS_LIST = "DONATIONS_LIST";
export const DONATION_LEVEL_UP_MODAL = "DONATION_LEVEL_UP_MODAL";
export const LEVEL_UP_CLAIM_MODAL_BUTTON = "battle-pass-level-up-modal-claim-button";
export const COMPLETED_BATTLE_PASS_LIST_ITEM = (buttonLabel: string, level: number) =>
  `COMPLETED_BATTLE_PASS_LIST_ITEM_${buttonLabel}_${level}`;
export const CLAIMED_BATTLE_PASS_LIST_ITEM = "CLAIMED_BATTLE_PASS_LIST_ITEM";
export const CLAIM_REWARD_MODAL = "modals.open_random_chest.open-text-view";
export const CLAIM_REWARD_BUTTON = "claimChestPrize-text-view";
export const INVENTORY_BANNER = "INVENTORY_BANNER";
export const INVENTORY_ITEM = (name: string) => `INVENTORY_ITEM_${name}`;
export const INVENTORY_GO_TO_REWARDS = "modals.consumables.go_to_rewards_button";
export const INVENTORY_ACTIVATE_POWER_UP = "modals.consumables.activate_button-text-view";
export const ACTIVATED_INVENTORY_ITEM = "ACTIVATED_INVENTORY_ITEM";
export const CLOSE_INVENTORY = "modals.consumables.close-text-view";
export const EXTRA_CHALLENGE_INDICATOR = (value: number) => `EXTRA_CHALLENGE_INDICATOR_${value}`;
export const YUMOJI_REWARD_PICKER_ITEM = "YUMOJI_REWARD_PICKER_ITEM";

// Generic CTA
export const CTA_CONFIRM = "labels.cta.confirm";
export const CTA_ACCEPT = "labels.cta.accept";
export const CTA_CONTINUE = "labels.cta.continue";
export const CTA_COLLECT = "labels.cta.collect";
export const CTA_GOT_IT = "labels.cta.got_it";
export const CTA_INVITE_COLLEAGUE = "labels.cta.invite";
export const CTA_LETS_GO = "labels.cta.lets_go";
export const CTA_GET_STARTED = "labels.cta.get_started";
export const CTA_SELECT = "labels.cta.select";

// Yunity Swipe (2048)
export const YUNITY_SWIPE_SETTINGS = "YUNITY_SWIPE_SETTINGS";
export const SKIN_INPUT = "SKIN_INPUT";
export const DIFFICULTY_INPUT = "DIFFICULTY_INPUT";
export const BOARD_SIZE_INPUT = "BOARD_SIZE_INPUT";
export const TARGET_SCORE_INPUT = "TARGET_SCORE_INPUT";
export const HAPTIC_TOGGLE = "HAPTIC_TOGGLE";
export const START_GAME_BUTTON = "START_GAME_BUTTON";
// TestIds from API
export const SCROLL_PICKER_CONFIRM_BUTTON = "scroll-picker-confirm-button-text-view";
export const QUESTIONNAIRE_JOURNEY_PROGRESS_BUTTON = "undefined-text-view";
export const ACTIVITY_FEED_BUTTON = "TAKE_CHALLENGE_LEFT-text-view";
export const FOOTER_LABEL_TEXT = "footer-label-text";

// P2P Gifting
export const GIFTING_INTRO = "GIFTING_INTRO";
export const P2P_GIFTING_CARD = "P2P_GIFTING_CARD";
export const P2P_START_BUTTON = "screens.gifting.send_prompt.button"; // "screens.gifting.send_prompt.button"
export const P2P_SELECTED_USER = (user: string) => `P2P_SELECTED_USER_${user}`;
export const P2P_SELECTED_SECTION = (selected: number) => `P2P_SELECTION_SECTION_${selected}`;
export const P2P_DESELECT_USER = (user: string) => `P2P_DESELECT_USER_${user}`;
export const P2P_NEXT_BUTTON = "labels.cta.next";
export const P2P_MESSAGE = (message: string) => `P2P_MESSAGE_${message}`;
export const P2P_GIFT_VIEW = "P2P_GIFT_VIEW";
export const P2P_GIFTING_AMOUNT = (label: string) => `P2P_GIFTING_AMOUNT_${label}`;
export const P2P_SEND_BUTTON = "screens.gifting.send";
export const P2P_SEND_YOUR_OWN_MESSAGE = "screens.gifting.send_your_own_message";
export const P2P_STICKER_ITEMS = (id: string) => `P2P_STICKER_ITEMS_${id}`;
export const P2P_STICKER = "P2P_STICKER";
export const P2P_STICKER_MODAL = "P2P_STICKER_MODAL";
export const P2P_SLIDER = "P2P_SLIDER";
export const P2P_SLIDER_ITEM = (id: string) => `P2P_SLIDER_ITEM_${id}`;
export const P2P_THANK_THEM_MESSAGE = "screens.gifting.thank_them";
export const SENDER_GIFTING_AMOUNT = (amount: number) => `SENDER_GIFTING_AMOUNT_${amount}`;
export const PINK_DOT = `PINK_DOT`;
