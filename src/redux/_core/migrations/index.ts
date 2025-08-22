import initial from "./0000_initial";
import dailyScreenImages from "./0001_daily_screen_images";
import inAppMeditationLastUpdate from "./0002_in_app_meditation_last_updated";
import migrationsFix from "./0003_migrations_fix";
import removeUserBusiness from "./0004_remove_user_business";
import removeTheme from "./0005_remove_theme";
import removeCopy from "./0006_remove_copy";
import removePopupVisibility from "./0007_remove_popup_visibility";
import addInAppMeditationNewFields from "./0008_add_in_app_meditation_new_fields";
import userHourlyActivityLastUpdated from "./0009_user_hourly_activity_last_updated";
import dailyPension from "./0010_daily_pension";
import addLocale from "./0011_add_locale";
import addFullName from "./0012_add_full_name";
import addLeaderboard from "./0013_add_leaderboard";
import addSocialGroupLeaderboards from "./0014_add_social_group_leaderboards";
import addTabNotifications from "./0015_add_tab_notifications";
import addChallengeFinishedResult from "./0016_add_challenge_finished_result";
import addYuScreen from "./0017_add_yu_screen";
import removeUserDateOfBirth from "./0018_remove_user_dateOfBirth";
import addHeroCards from "./0019_add_hero_cards";
import addHealthSmoking from "./0020_add_health_smoking";
import removeBattlePass from "./0021_remove_battle_pass";
import addDateFieldForInAppMeditation from "./0022_add_date_field_for_in_app_meditation";
import addChallengeIdToSudoku from "./0023_add_challenge_id_sudoku_state";
import addYuniversalMapToLevelActiveState from "./0024_add_yuniversal_map_active_level";
import removeTabNotifications from "./0025_remove_tab_notifications";
import removeHasAdBanner from "./0026_remove_has_ad_banner";
import addTodayScreenToUserEvents from "./0027_add_today_screen_to_user_events";
import addDebugPedometerStepsBeforeSubscribe from "./0028_debug_pedometer_steps_before_subscribe";
import removeLevelSlotId from "./0029_remove_level_slot_id";

export const migrations = {
  "0": initial,
  "1": dailyScreenImages,
  "2": inAppMeditationLastUpdate,
  "3": migrationsFix,
  "4": removeUserBusiness,
  "5": removeTheme,
  "6": removeCopy,
  "7": removePopupVisibility,
  "8": addInAppMeditationNewFields,
  "9": userHourlyActivityLastUpdated,
  "10": dailyPension,
  "11": addLocale,
  "12": addFullName,
  "13": addLeaderboard,
  "14": addSocialGroupLeaderboards,
  "15": addTabNotifications,
  "16": addChallengeFinishedResult,
  "17": addYuScreen,
  "18": removeUserDateOfBirth,
  "19": addHeroCards,
  "20": addHealthSmoking,
  "21": removeBattlePass,
  "22": addDateFieldForInAppMeditation,
  "23": addChallengeIdToSudoku,
  "24": addYuniversalMapToLevelActiveState,
  "25": removeTabNotifications,
  "26": removeHasAdBanner,
  "27": addTodayScreenToUserEvents,
  "28": addDebugPedometerStepsBeforeSubscribe,
  "29": removeLevelSlotId,
};
