import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";

export const isSamsung = () => {
  if (Platform.OS === "android") {
    return DeviceInfo.getBrand().toLowerCase().includes("samsung");
  }

  return false;
};
