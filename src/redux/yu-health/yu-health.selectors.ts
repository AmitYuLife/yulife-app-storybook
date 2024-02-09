import { HealthProvider } from "@yu-life/react-native-yu-health";
import { IReduxState } from "../_core/reducers";

export const getActiveProviderSelector = (state: IReduxState): HealthProvider | undefined =>
  state.yuHealth.activeProvider;

export const getCapabilityStatuses = (state: IReduxState) => state.yuHealth.capabilityStatuses;

export const getYuHealthState = (state: IReduxState) => state.yuHealth;
