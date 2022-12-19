import initial from "./0000_initial";
import dailyScreenImages from "./0001_daily_screen_images";
import inAppMeditationLastUpdate from "./0002_in_app_meditation_last_updated";
import migrationsFix from "./0003_migrations_fix";
import removeUserBusiness from "./0004_remove_user_business";
import removeTheme from "./0005_remove_theme";
import removeCopy from "./0006_remove_copy";

export const migrations = {
  "0": initial,
  "1": dailyScreenImages,
  "2": inAppMeditationLastUpdate,
  "3": migrationsFix,
  "4": removeUserBusiness,
  "5": removeTheme,
  "6": removeCopy,
};
