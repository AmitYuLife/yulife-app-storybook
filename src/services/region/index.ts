import Config from "react-native-config";
import AsyncStorage from "@react-native-community/async-storage";

type REGION = "UK" | "US";

class RegionService {
  private readonly STORAGE_KEY = "@yulife:region";
  private SELECTED_REGION = "UK";
  public ARE_MULTIPLE_REGIONS_ENABLED = false;

  public readonly API_URLS: Record<REGION, string> = {
    UK: Config.API_URL_UK || Config.API_URL,
    US: Config.API_URL_US,
  };

  public readonly OPTIONS = [
    { key: "UK" as REGION, label: "United Kingdom" },
    { key: "US" as REGION, label: "United States" },
  ];

  public getPreferredRegion = () => this.SELECTED_REGION;

  public hydratePreferredRegion = async () => {
    const region = await AsyncStorage.getItem(this.STORAGE_KEY);
    try {
      if (Object.keys(this.API_URLS).includes(region)) {
        this.SELECTED_REGION = region;
      }
    } catch (e) {
      // safe fail
    }
  };

  public setRegion = async (region: REGION) => {
    try {
      await AsyncStorage.setItem(this.STORAGE_KEY, region);
    } catch (e) {
      // safe fail
    }
  };

  public fetchConfig = async () => {
    // fetch from api_url/config
  };
}

const region = new RegionService();
export default region;
