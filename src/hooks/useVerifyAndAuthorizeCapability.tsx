import HealthPermissionModal from "@components/modals/health-permission/health-permission.modal";
import { MODALS } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { showYuModal } from "@navigation/root";
import { setActiveYuHealthProvider, yuHealthPermissionsRequested } from "@redux/yu-health/yu-health.actions";
import { openSettingsAlert, shouldContinueWithPermissionStatus, shouldRequestHealthPermission } from "@utils";
import {
  HealthPermissionStatus,
  HealthProvider,
  HealthProviderCapability,
  getCapabilities,
  hasPermission,
  hasPermissions,
  requestPermissions,
} from "@yu-life/react-native-yu-health";
import { first, isEmpty } from "lodash";
import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";

interface IVerifyAndAuthorizeCapabilityProps {
  componentId?: string;
}

export const useVerifyAndAuthorizeCapability = (_props: IVerifyAndAuthorizeCapabilityProps = {}) => {
  const dispatch = useDispatch();

  /**
   * Handle unsupported capability
   * Shows switch modal
   */
  const handleUnsupportedCapability = useCallback(
    async (capability: HealthProviderCapability): Promise<boolean> => {
      const googleFitSupportedCapabilities = await getCapabilities();

      // TODO: This check is only needed because we don't have a generic switch modal yet
      // Will be added before release of YuHealth
      if (!googleFitSupportedCapabilities?.[HealthProvider.googleFit]?.includes(capability)) {
        // Google Fit does not support this capability (never the case right now)
        throw new Error(`Current provider does not support ${capability}, but neither does Google Fit`);
      }

      // TODO: This will open our generic switch modal in the future
      const hasSwitched = await new Promise<boolean>((res) => {
        showYuModal({
          component: {
            id: MODALS.switchToGoogleFit,
            name: MODALS.switchToGoogleFit,
            passProps: {
              onClose: () => {
                res(false);
              },
              onConnect: () => {
                dispatch(setActiveYuHealthProvider(HealthProvider.googleFit));
                res(true);
              },
            },
          },
        });
      });

      // If the user has switched provider, we should retry authorising the capability
      // If they haven't we should just exit
      return hasSwitched;
    },
    [dispatch]
  );

  /** Gets an array of capabilities and returns ones which need to requested */
  const getCapabilitiesRequiringAuthorization = useCallback(async (capabilities: HealthProviderCapability[]) => {
    const statuses = await Promise.all(capabilities.map((capability) => hasPermission(capability)));
    const requiresSystemPermission = statuses.some(
      (status) => status === HealthPermissionStatus.systemPermissionRequired
    );

    const capabilitiesToRequest = capabilities.filter((_, index) => shouldRequestHealthPermission(statuses[index]));
    return { capabilitiesToRequest, requiresSystemPermission };
  }, []);

  /**
   * Makes the system & provider permission request
   */
  const requestCapabilityPermissions = useCallback(
    async (capabilities: HealthProviderCapability[]): Promise<boolean> => {
      const { capabilitiesToRequest, requiresSystemPermission } = await getCapabilitiesRequiringAuthorization(
        capabilities
      );

      if (requiresSystemPermission) {
        // This will only be true if the user has denied the permission and we can't ask for it again
        openSettingsAlert();
        return false;
      }

      if (capabilitiesToRequest.length > 0) {
        const permissionResponse = await requestPermissions(capabilitiesToRequest);
        dispatch(yuHealthPermissionsRequested());

        // Check if any of the requested permissions did not pass the check
        return Object.values(permissionResponse).every(shouldContinueWithPermissionStatus);
      }

      // No permission request was made because all permissions are granted
      return true;
    },
    [dispatch, getCapabilitiesRequiringAuthorization]
  );

  const handlePermissionRequestModal = useCallback(
    async (capabilities: HealthProviderCapability[]) => {
      return new Promise<boolean>((res) => {
        const modal = (
          <HealthPermissionModal
            capabilities={capabilities}
            onCancel={() => {
              Navigation.dismissOverlayWithChild();
              return res(false);
            }}
            onRequestPermissions={async () => {
              const result = await requestCapabilityPermissions(capabilities);
              Navigation.dismissOverlayWithChild();
              return res(result);
            }}
          />
        );

        Navigation.showOverlayWithChild(modal, false);
      });
    },
    [requestCapabilityPermissions]
  );

  /**
   * Opens permission modal, requests permissions, and handles unsupported capabilities
   * Returns if the user has granted all capabilities or not
   */
  const verifyAndAuthorizeCapability = useCallback(
    async (
      capability: HealthProviderCapability | HealthProviderCapability[],
      { retrySafeguard, skipPreliminaryModal }: { skipPreliminaryModal?: boolean; retrySafeguard?: boolean } = {}
    ): Promise<boolean> => {
      const capabilities = Array.isArray(capability) ? capability : [capability];
      const status = await hasPermissions(capabilities);

      const unsupportedCapability = first(
        Object.entries(status).find(([_capability, permissionStatus]) => {
          return permissionStatus === HealthPermissionStatus.unsupported;
        })
      ) as HealthProviderCapability;

      if (unsupportedCapability) {
        const shouldRetry = await handleUnsupportedCapability(unsupportedCapability);
        if (shouldRetry && !retrySafeguard) {
          return await verifyAndAuthorizeCapability(capabilities, { retrySafeguard: true });
        }

        // The capability is unsupported, and they didn't switch
        return false;
      }

      const requestCapabilities = await getCapabilitiesRequiringAuthorization(capabilities);

      // We need to find ones that require permission
      if (!skipPreliminaryModal && !isEmpty(requestCapabilities?.capabilitiesToRequest)) {
        // Show the permission modal to get permissions
        return await handlePermissionRequestModal(requestCapabilities?.capabilitiesToRequest);
      }

      if (!isEmpty(requestCapabilities)) {
        const result = await requestCapabilityPermissions(capabilities);
        return Object.values(result).map(shouldContinueWithPermissionStatus).every(Boolean);
      }
    },
    [
      getCapabilitiesRequiringAuthorization,
      handlePermissionRequestModal,
      handleUnsupportedCapability,
      requestCapabilityPermissions,
    ]
  );

  return useMemo(() => verifyAndAuthorizeCapability, [verifyAndAuthorizeCapability]);
};
