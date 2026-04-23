import { NetInfoState } from "@react-native-community/netinfo";
import { appNetworkChannel } from "@redux/app/app.channels";
import { getUserFeatures } from "@redux/user/user.selectors";
import EngagementTracking from "@services/logging/engagement-tracking";
import { call, select, take } from "redux-saga/effects";

export default function* loggingNetworkState() {
  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
  if (features.enhanceConnectionLogging) {
    const networkChannel: ReturnType<typeof appNetworkChannel> = yield call(appNetworkChannel);
    while (true) {
      const networkInfo: NetInfoState = yield take(networkChannel);
      EngagementTracking.logMixpanelEvent("user_connection_state", networkInfo);
    }
  }
}
