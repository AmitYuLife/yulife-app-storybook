import { AUTHENTICATED } from "@redux/app/app.actions";
import { select, takeLatest } from "redux-saga/effects";
import setDefaultProviderSaga from "./setDefaultProvider.saga";
import { YU_HEALTH_SET_ACTIVE_PROVIDER } from "../yu-health.actions";
import setProviderSaga from "./setProvider.saga";
import refreshCapabilityPermissionsSaga from "./refreshCapabilityPermissions.saga";
import { getUserFeatures } from "@redux/user/user.selectors";
import { IFeature } from "@redux/user/user.reducer";

export default [
  takeLatest(AUTHENTICATED, yuHealthFeatureGuard(setDefaultProviderSaga)),
  takeLatest(YU_HEALTH_SET_ACTIVE_PROVIDER, yuHealthFeatureGuard(setProviderSaga)),
  takeLatest(AUTHENTICATED, yuHealthFeatureGuard(refreshCapabilityPermissionsSaga)),
];

// Allows use of 'Function':
// eslint-disable-next-line @typescript-eslint/ban-types
function yuHealthFeatureGuard<T extends Function>(saga: T) {
  return function* yuHealthFeatureGuardSaga(...args: T extends (...args: infer A) => unknown ? A : never) {
    const features: IFeature = yield select(getUserFeatures);
    if (!features.tempGameEnableYuHealth) {
      return;
    }

    yield* saga(...args);
  };
}
