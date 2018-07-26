import { Navigation } from "react-native-navigation";
import {
    WelcomeScreen
} from "../components/screens";

export const registerScreens = () => {
    Navigation.registerComponent("yulife.WelcomeScreen", () => WelcomeScreen);
};
