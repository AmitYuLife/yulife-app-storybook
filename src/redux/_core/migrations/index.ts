import initial from "./0000_initial";
import dailyScreenImages from "./0001_daily_screen_images";
import inAppMeditationLastUpdate from "./0002_in_app_meditation_last_updated";
import migrationsFix from "./0003_migrations_fix";

export const migrations = {
  "0": initial,
  "1": dailyScreenImages,
  "2": inAppMeditationLastUpdate,
  "3": migrationsFix,
};
