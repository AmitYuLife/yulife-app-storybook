/* tslint:disable */
import { Platform } from "react-native";

export const close = require("../../../../../assets/close/close.png")

const ios = [
    require("../../../../../assets/meditation-set-up/ios1.png"),
    require("../../../../../assets/meditation-set-up/ios2.png"),
    require("../../../../../assets/meditation-set-up/ios3.png"),
    require("../../../../../assets/meditation-set-up/ios4.png"),
];

const android = [
    require("../../../../../assets/meditation-set-up/android1.png"),
    require("../../../../../assets/meditation-set-up/android2.png"),
    require("../../../../../assets/meditation-set-up/android3.png"),
    require("../../../../../assets/meditation-set-up/android4.png"),
];

const assets = Platform.OS === "android" ? android : ios;

export default assets;