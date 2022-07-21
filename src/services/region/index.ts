import Config from "react-native-config";
import AsyncStorage from "@react-native-community/async-storage";

export type REGION = "UK" | "US";

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
};

type RegionStorage = {
  region: REGION;
  config: RegionConfig;
  createdAt?: string;
};

class RegionService {
  private readonly REGION_STORAGE_KEY = "@yulife:region";
  private SELECTED_REGION: REGION = "UK";
  private REGION_CONFIG: RegionConfig;
  public ARE_MULTIPLE_REGIONS_ENABLED = Config.MULTI_REGION_ENABLED === "true";

  public readonly API_URLS: Record<REGION, string> = {
    UK: Config.API_URL_UK || Config.API_URL,
    US: Config.API_URL_US,
  };

  public readonly OPTIONS = [
    { key: "UK" as REGION, label: "United Kingdom" },
    { key: "US" as REGION, label: "United States" },
  ];

  public getPreferredRegion = () => this.SELECTED_REGION;
  public getPreferredRegionUri = () => this.API_URLS[this.SELECTED_REGION];
  public getConfig = <Key extends keyof RegionConfig>(key: Key): RegionConfig[Key] => this.REGION_CONFIG?.[key];

  public hydratePreferredRegion = async () => {
    try {
      const data = await AsyncStorage.getItem(this.REGION_STORAGE_KEY);

      if (data) {
        const json: RegionStorage = JSON.parse(data);

        if (json?.region && json?.config) {
          const { region, config } = json;

          if (Object.keys(this.API_URLS).includes(region)) {
            this.SELECTED_REGION = region;
            this.REGION_CONFIG = config;
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
      await AsyncStorage.setItem(this.REGION_STORAGE_KEY, JSON.stringify({ region: this.SELECTED_REGION, config }));
      this.REGION_CONFIG = config;
    }
  };
}

const region = new RegionService();
export default region;
