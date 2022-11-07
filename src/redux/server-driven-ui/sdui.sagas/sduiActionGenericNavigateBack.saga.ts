import { getRouteState } from "@redux/app/app.selectors";
import { Navigation } from "react-native-navigation";
import { call, select } from "redux-saga/effects";

export function* sduiActionGenericNavigateBack() {
  const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);
  const onExit = () => Navigation.pop(currentRoute);

  yield call(onExit);
}
