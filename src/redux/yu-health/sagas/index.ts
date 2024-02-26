import { AUTHENTICATED } from "@redux/app/app.actions";
import { select, takeLatest } from "redux-saga/effects";
import setDefaultProviderSaga from "./setDefaultProvider.saga";
import { YU_HEALTH_PERMISSIONS_REQUESTED, YU_HEALTH_SET_ACTIVE_PROVIDER } from "../yu-health.actions";
import setProviderSaga from "./setProvider.saga";
import refreshCapabilityPermissionsSaga from "./refreshCapabilityPermissions.saga";
import { getUserFeatures } from "@redux/user/user.selectors";
import { IFeature } from "@redux/user/user.types";
import refreshProviderAvailabilitySaga from "./refreshProviderAvailability.saga";

export default [
  // Try and set a default provider if we don't have one in the store
  takeLatest(AUTHENTICATED, yuHealthFeatureGuard(setDefaultProviderSaga)),

  // Refresh permissions in the store on authenticate, and after permissions have been requested
  takeLatest(AUTHENTICATED, yuHealthFeatureGuard(refreshCapabilityPermissionsSaga)),
  takeLatest(YU_HEALTH_PERMISSIONS_REQUESTED, yuHealthFeatureGuard(refreshCapabilityPermissionsSaga)),

  // Store the status of providers
  takeLatest(AUTHENTICATED, yuHealthFeatureGuard(refreshProviderAvailabilitySaga)),

  // Set an active provider
  takeLatest(YU_HEALTH_SET_ACTIVE_PROVIDER, yuHealthFeatureGuard(setProviderSaga)),
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
