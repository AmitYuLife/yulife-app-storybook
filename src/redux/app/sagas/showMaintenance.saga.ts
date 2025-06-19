import { Alert } from "react-native";
import { call } from "redux-saga/effects";

export default function* showMaintenanceSaga() {
  yield call(() => {
    Alert.alert(
      "Under maintenance",
      "Please come back later",
      [
        {
          onPress: () => {
            // Quick and dirty way to close the app, and track in bugsnag
            throw new Error("503 Pressed!");
          },
          text: "OK",
        },
      ],
      { cancelable: false }
    );
  });
}
