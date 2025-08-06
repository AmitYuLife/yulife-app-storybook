import {
  HealthPermissionStatus,
  HealthProvider,
  HealthProviderAvailability,
  HealthProviderCapability,
} from "@yu-life/react-native-yu-health";
import {
  refreshProviderAvailability,
  resetYuHealthState,
  setActiveYuHealthProvider,
  setYuHealthStatus,
  updateCapabilityStatuses,
} from "./yu-health.actions";
import { createReducer } from "@reduxjs/toolkit";
import { YuHealthStatus } from "./yu-health.types";

export interface IYuHealthStore {
  /**
   * The currently active health provider
   */
  activeProvider: HealthProvider | null;
  /**
   * Are we loading / authorising / ready
   */
  status?: YuHealthStatus;
  /**
   * Permission status of capabilities
   */
  capabilityStatuses?: Record<HealthProviderCapability, HealthPermissionStatus>;
  /**
   * If there are no available providers
   */
  isUnavailable?: boolean;
  /**
   * Provider availabilities
   */
  providerAvailabilities?: Record<HealthProvider, HealthProviderAvailability>;
}

export const getInitialYuHealthState = (): IYuHealthStore => ({
  activeProvider: null,
  status: YuHealthStatus.loading,
});

const yuHealthReducer = createReducer(getInitialYuHealthState(), (builder) => {
  builder.addCase(setActiveYuHealthProvider, (state, action) => {
    state.activeProvider = action.payload;
  });

  builder.addCase(updateCapabilityStatuses, (state, action) => {
    state.capabilityStatuses = action.payload;
  });

  builder.addCase(setYuHealthStatus, (state, action) => {
    state.status = action.payload;
  });

  builder.addCase(refreshProviderAvailability, (state, action) => {
    state.providerAvailabilities = action.payload;

    state.isUnavailable = Object.values(action.payload).every(
      (availability) => availability === HealthProviderAvailability.not_available
    );
  });

  builder.addCase(resetYuHealthState, (state) => {
    state.providerAvailabilities = undefined;
    state.status = YuHealthStatus.loading;
  });
});

export default yuHealthReducer;
