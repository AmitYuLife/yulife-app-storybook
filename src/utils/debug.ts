import Config from "react-native-config";

export const IS_DEVELOP = ["dev", "develop"].includes(Config.ENV);
export const IS_LOCAL = ["dev"].includes(Config.ENV);
