import Config from "react-native-config";
import AsyncStorage from "@react-native-community/async-storage";
import moment from "moment";

const MAX_CONFIG_AGE_IN_MINUTES = 60 * 24; // 24 hours

export type REGION = "UK" | "US" | "SA" | "JP";

type RegionConfig = {
  language: string;
  stripeKey: string;
  mixpanelKey: string;
  urls: {
    members: string;
    website: string;
    privacyPolicy: string;
    rewardsPolicy: string;
  };
  intercom: {
    appId: string;
    ios: string;
    android: string;
  };
  leanplum: {
    appId: string;
    prodKey: string;
    devKey: string;
  };
  sduiStaticDeeplinks: {
    name: string;
    stepId: string;
    dynamicRouteId?: string;
  }[];
};

type RegionStorage = {
  region: REGION;
  config: RegionConfig;
  createdAt?: Date;
};

class RegionService {
  private readonly REGION_STORAGE_KEY = "@yulife:region";
  private SELECTED_REGION: REGION = "UK";
  private REGION_CONFIG: RegionConfig;
  private REGION_CONFIG_LAST_UPDATED: Date;
  public ARE_MULTIPLE_REGIONS_ENABLED = Config.MULTI_REGION_ENABLED === "true";

  public readonly API_URLS: Record<REGION, string> = {
    UK: Config.API_URL_UK || Config.API_URL,
    US: Config.API_URL_US,
    SA: Config.API_URL_SA,
    JP: Config.API_URL_JP,
  };

  public readonly OPTIONS = [
    { key: "UK" as REGION, isEnabled: true, label: "United Kingdom" },
    { key: "US" as REGION, isEnabled: true, label: "United States" },
    { key: "SA" as REGION, isEnabled: true, label: "South Africa" },
    { key: "JP" as REGION, isEnabled: false, label: "日本 (Japan)" },
  ];

  public getAvailableRegions = () => this.OPTIONS.filter((o) => this.ARE_MULTIPLE_REGIONS_ENABLED || o.isEnabled);
  public getPreferredRegion = () => this.SELECTED_REGION;
  public getPreferredRegionUri = () => this.API_URLS[this.SELECTED_REGION];
  public getConfig = <Key extends keyof RegionConfig>(key: Key): RegionConfig[Key] => this.REGION_CONFIG?.[key];

  public configIsOutdated = () => {
    if (!this.REGION_CONFIG_LAST_UPDATED) {
      return true;
    }

    const lastUpdated = moment(this.REGION_CONFIG_LAST_UPDATED);

    if (!lastUpdated.isValid()) {
      return true;
    }

    if (moment().diff(lastUpdated, "minutes") > MAX_CONFIG_AGE_IN_MINUTES) {
      return true;
    }

    return false;
  };

  public hydratePreferredRegion = async () => {
    try {
      const data = await AsyncStorage.getItem(this.REGION_STORAGE_KEY);

      if (data) {
        const json: RegionStorage = JSON.parse(data);

        if (json?.region && json?.config) {
          const { region, config, createdAt } = json;

          if (Object.keys(this.API_URLS).includes(region)) {
            this.SELECTED_REGION = region;
            this.REGION_CONFIG = config;
            this.REGION_CONFIG_LAST_UPDATED = createdAt;
          }
        }
      }
    } catch (e) {
      // safe fail
      // config will be fetched in a redux saga
    }
  };

  public setRegion = (newRegion: REGION) => {
    this.SELECTED_REGION = newRegion;
  };

  public setConfig = async (config: RegionConfig) => {
    if (config?.mixpanelKey) {
      const now = new Date();
      await AsyncStorage.setItem(
        this.REGION_STORAGE_KEY,
        JSON.stringify({ region: this.SELECTED_REGION, config, createdAt: now })
      );
      this.REGION_CONFIG = config;
      this.REGION_CONFIG_LAST_UPDATED = now;
    }
  };
}

const region = new RegionService();
export default region;
