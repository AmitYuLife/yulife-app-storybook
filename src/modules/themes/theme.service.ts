import { Storage, StorageKey } from "@utils/storage";
import DEFAULT_YULIFE_THEME from "./helpers/defaultTheme";

export class ThemeService {
  private THEME_ID: string = DEFAULT_YULIFE_THEME.id;

  public getThemeId = () => this.THEME_ID;

  public setThemeId = async (themeId: string) => {
    this.THEME_ID = themeId;
    await Storage.setItem(StorageKey.themeId, themeId);
  };

  public hydrateThemeId = async () => {
    try {
      const themeId = await Storage.getItem(StorageKey.themeId);
      if (themeId) {
        this.THEME_ID = themeId;
      }

      return true;
    } catch {
      return false;
    }
  };

  public clearThemeId = async () => {
    await Storage.removeItem(StorageKey.themeId);
    this.THEME_ID = DEFAULT_YULIFE_THEME.id;
  };
}

const themeService = new ThemeService();

export default themeService;
