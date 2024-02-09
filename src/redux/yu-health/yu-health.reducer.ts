import {
  HealthPermissionStatus,
  HealthProvider,
  HealthProviderAvailability,
  HealthProviderCapability,
} from "@yu-life/react-native-yu-health";
import { refreshProviderAvailability, setActiveYuHealthProvider, updateCapabilityStatuses } from "./yu-health.actions";
import { createReducer } from "@reduxjs/toolkit";

export interface IYuHealthStore {
  /**
   * The currently active health provider
   */
  activeProvider: HealthProvider | null;
  /**
   * Is a health provder currently authorising (is their modal open)
   */
  isAuthorising?: boolean;
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
});

const yuHealthReducer = createReducer(getInitialYuHealthState(), (builder) => {
  builder.addCase(setActiveYuHealthProvider, (state, action) => {
    state.activeProvider = action.payload;
  });

  builder.addCase(updateCapabilityStatuses, (state, action) => {
    state.capabilityStatuses = action.payload;
  });

  builder.addCase(refreshProviderAvailability, (state, action) => {
    state.providerAvailabilities = action.payload;

    state.isUnavailable = Object.values(action.payload).every(
      (availability) => availability === HealthProviderAvailability.not_available
    );
  });
});

export default yuHealthReducer;
