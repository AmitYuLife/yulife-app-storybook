export * from "react-native-fitkit";
import service from "react-native-fitkit";
// import mock from "../mock";
export default service;

// overwrite defaults here
export { default as FitKitAvailable } from "./e2e/fitkit-available";

// export function addListener(type: string, callback: any) {
//     console.log(type, "for lint"); // tslint:disable-line
//     return mock.onPedometerEvent(callback);
// }
