import moment from "moment";
import Config from "react-native-config";
import { Storage, StorageKey } from "@utils/storage";

const MAX_CONFIG_AGE_IN_MINUTES = 60 * 1; // 1 hour to avoid spamming the API, but short enough to support API changes

export const REGION_LIST = ["UK", "US", "SA", "JP", "KSA"] as const;

export type REGION = typeof REGION_LIST[number];

type RegionConfig = {
  language: string;
  stripeKey: string;
  mixpanelKey: string;
  mixpanelBaseUrl: string;
  enabledCaptchaProviders?: string[];
  hcaptchaSiteKey?: string;
  urls: {
    members: string;
    forgotPassword: string;
    website: string;
    privacyPolicy: string;
    eula: string;
    rewardsPolicy: string;
  };
  datadog: {
    appId?: string;
    appKey?: string;
    site: string;
    trackUserInteractions: boolean;
    trackXHRs: boolean;
    trackErrors: boolean;
  };
  intercom: {
    appId: string;
    ios: string;
    android: string;
  };
  leanplum: {
    appId: string;
    prodKey: string;
    devKey?: string;
  };
  customerio?: {
    apiKey: string;
    siteId: string;
    region: string;
  };
  sduiStaticDeeplinks: {
    name: string;
    stepId: string;
    dynamicRouteId?: string;
  }[];
  sduiJourney: {
    supportRequest: string;
  };
  sessionTimeout: number;
};

type RegionStorage = {
  region: REGION;
  config: RegionConfig;
  createdAt?: Date;
};

export class RegionService {
  private SELECTED_REGION: REGION = "UK";
  private REGION_CONFIG: RegionConfig;
  private REGION_CONFIG_LAST_UPDATED: Date;

  public readonly API_URLS: Record<REGION, string> = {
    UK: Config.API_URL_UK || Config.API_URL,
    US: Config.API_URL_US,
    SA: Config.API_URL_SA,
    JP: Config.API_URL_JP,
    KSA: Config.API_URL_KSA,
  };

  public readonly OPTIONS = [
    { key: "UK" as REGION, isEnabled: true, label: "United Kingdom" },
    { key: "US" as REGION, isEnabled: true, label: "United States" },
    { key: "SA" as REGION, isEnabled: true, label: "South Africa" },
    { key: "JP" as REGION, isEnabled: true, label: "日本 (Japan)" },
    { key: "KSA" as REGION, isEnabled: true, label: "السعودية (KSA)" },
  ].filter((o) => !!this.API_URLS?.[o.key]);

  public getAvailableRegions = (limit?: REGION[]) =>
    this.OPTIONS.filter((o) => o.isEnabled && (!limit || limit.includes(o.key)));
  public getPreferredRegion = () => this.SELECTED_REGION;
  public getRegionUri = (region?: REGION) => this.API_URLS[region || this.SELECTED_REGION];
  public getConfig = <Key extends keyof RegionConfig>(key: Key): RegionConfig[Key] => this.REGION_CONFIG?.[key];
  public getCaptchaConfig = () => ({
    hcaptchaSiteKey: this.getConfig("hcaptchaSiteKey"),
    enabledCaptchaProviders: this.getConfig("enabledCaptchaProviders") || [],
  });

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

  /** returns a bool saying if a config is valid */
  public hydratePreferredRegion = async () => {
    try {
      const data = await Storage.getItem(StorageKey.region);

      if (data) {
        const json: RegionStorage = JSON.parse(data);

        if (json?.region && json?.config) {
          const { region, config, createdAt } = json;

          if (Object.keys(this.API_URLS).includes(region)) {
            this.SELECTED_REGION = region;
            this.REGION_CONFIG = config;
            this.REGION_CONFIG_LAST_UPDATED = createdAt;

            return !this.configIsOutdated();
          }
        }
      }

      return false;
    } catch (e) {
      // safe fail
      // config will be fetched in a redux saga
      return false;
    }
  };

  public setRegion = (newRegion: REGION) => {
    this.SELECTED_REGION = newRegion;
  };

  public setConfig = async (config: RegionConfig) => {
    const now = new Date();
    await Storage.setItem(StorageKey.region, JSON.stringify({ region: this.SELECTED_REGION, config, createdAt: now }));
    this.REGION_CONFIG = config;
    this.REGION_CONFIG_LAST_UPDATED = now;
  };
}
