import { HealthPermissionStatus, HealthProvider, HealthProviderCapability } from "@yu-life/react-native-yu-health";
import { setActiveYuHealthProvider, updateCapabilityStatuses } from "./yu-health.actions";
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
});

export default yuHealthReducer;
