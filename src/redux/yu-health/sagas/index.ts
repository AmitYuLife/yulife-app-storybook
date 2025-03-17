import { AUTHENTICATED, SET_MAIN_ROOT } from "@redux/app/app.actions";
import { select, take, takeLatest } from "redux-saga/effects";
import setDefaultProviderSaga from "./setDefaultProvider.saga";
import {
  YU_HEALTH_PERMISSIONS_REQUESTED,
  YU_HEALTH_REFRESH_CAPABILITY_PERMISSIONS,
  YU_HEALTH_SET_ACTIVE_PROVIDER,
} from "../yu-health.actions";
import setProviderSaga from "./setProvider.saga";
import refreshCapabilityPermissionsSaga from "./refreshCapabilityPermissions.saga";
import { getUserFeatures } from "@redux/user/user.selectors";
import { IFeature } from "@redux/user/user.types";
import refreshProviderAvailabilitySaga from "./refreshProviderAvailability.saga";
import { GET_ALL_USER_DATA_SUCCESS, GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "@redux/user/user.actions";
import { isEmpty } from "lodash";
import resetYuHealthStatusSaga from "./resetYuHealthStatus.saga";
import { PEDOMETER_UPDATES_SUCCESS } from "@redux/pedometer/pedometer.actions";
import refreshStepsPermissionsOnStepsUpdateSaga from "./refreshStepsPermissionsOnStepsUpdateSaga.saga";

export default [
  // Reset the persisted status of YuHealth
  takeLatest(SET_MAIN_ROOT, yuHealthFeatureGuard(resetYuHealthStatusSaga)),

  // Try and set a default provider if we don't have one in the store
  takeLatest([AUTHENTICATED, LOGIN_USER_SUCCESS], yuHealthFeatureGuard(setDefaultProviderSaga)),

  // Refresh permissions in the store on authenticate, and after permissions have been requested
  takeLatest([AUTHENTICATED, LOGIN_USER_SUCCESS], yuHealthFeatureGuard(refreshCapabilityPermissionsSaga)),
  takeLatest(YU_HEALTH_PERMISSIONS_REQUESTED, yuHealthFeatureGuard(refreshCapabilityPermissionsSaga)),
  takeLatest(YU_HEALTH_REFRESH_CAPABILITY_PERMISSIONS, yuHealthFeatureGuard(refreshCapabilityPermissionsSaga)),

  // Store the status of providers
  takeLatest([AUTHENTICATED, LOGIN_USER_SUCCESS], yuHealthFeatureGuard(refreshProviderAvailabilitySaga)),

  // Set an active provider
  takeLatest(YU_HEALTH_SET_ACTIVE_PROVIDER, yuHealthFeatureGuard(setProviderSaga)),

  // Update permissions when daily steps updated
  takeLatest(PEDOMETER_UPDATES_SUCCESS, yuHealthFeatureGuard(refreshStepsPermissionsOnStepsUpdateSaga)),
];

// Allows use of 'Function':
// eslint-disable-next-line @typescript-eslint/ban-types
function yuHealthFeatureGuard<T extends Function>(saga: T) {
  return function* yuHealthFeatureGuardSaga(...args: T extends (...args: infer A) => unknown ? A : never) {
    let features: IFeature = yield select(getUserFeatures);
    if (isEmpty(features) || !features.tempGameEnableReleaseYuHealthV3) {
      yield take([AUTHENTICATED, GET_ALL_USER_DATA_SUCCESS, GET_USER_SUCCESS]);
      features = yield select(getUserFeatures);
    }

    if (!features.tempGameEnableReleaseYuHealthV3) {
      return;
    }

    yield* saga(...args);
  };
}
