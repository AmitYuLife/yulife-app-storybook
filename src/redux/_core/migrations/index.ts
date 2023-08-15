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
};
