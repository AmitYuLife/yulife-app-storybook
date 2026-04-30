import Config from "react-native-config";

export const IS_DEVELOP = !!Config.ENV && ["dev", "develop"].includes(Config.ENV);
export const IS_LOCAL = Config.ENV === "dev";
