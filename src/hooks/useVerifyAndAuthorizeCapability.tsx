import { BlurredWrapper, Box } from "@atoms";
import ConfirmationModal from "@components/modals/confirmation-modal/confirmation-modal";
import { Colours } from "@styles";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { getEnabledHealthProviders } from "@redux/user/user.selectors";
import { setYuHealthStatus, yuHealthPermissionsRequested } from "@redux/yu-health/yu-health.actions";
import { getActiveProvider, getProviderAvailabilities } from "@redux/yu-health/yu-health.selectors";
import { YuHealthStatus } from "@redux/yu-health/yu-health.types";
import { API_HEALTH_PROVIDER_TO_GQL_MAP } from "@services/fitkit/yu-health.helpers";
import Logger from "@services/logging/logger";
import { joinCapabilities, shouldContinueWithPermissionStatus, shouldRequestHealthPermission } from "@utils";
import {
  HealthPermissionStatus,
  HealthProvider,
  HealthProviderAvailability,
  HealthProviderCapability,
  getCapabilities,
  hasPermission,
  hasPermissions,
  requestPermissions,
  requestSystemPermission,
} from "@yu-life/react-native-yu-health";
import { isEmpty } from "lodash";
import { useCallback, useMemo } from "react";
import { Alert, Linking } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "./useTranslation";
import { useModal } from "@app/modules/modals/useModal";

interface IVerifyAndAuthorizeCapabilityProps {
  componentId: string;
}

export const useVerifyAndAuthorizeCapability = ({ componentId }: IVerifyAndAuthorizeCapabilityProps) => {
  const dispatch = useDispatch();
  const providerAvailabilities = useSelector(getProviderAvailabilities);
  const activeProvider = useSelector(getActiveProvider);
  const { showModal } = useModal();

  const t = useTranslation([
    "yu_health.connect.system_permission_needed.title",
    "yu_health.connect.system_permission_needed.body",
    "yu_health.connect.system_permission_needed.cancel",
    "yu_health.connect.system_permission_needed.button",
    "yu_health.capabilitiesRequest.header",
    "yu_health.capabilitiesRequest.body",
    "yu_health.capabilitiesRequest.continue",
    "yu_health.capabilitiesRequest.cancel",
  ]);

  const enabledHealthProviders = useSelector(getEnabledHealthProviders);

  /**
   * Handle unsupported capability
   * Shows switch modal
   */
  const handleUnsupportedCapability = useCallback(
    async (capability: HealthProviderCapability): Promise<boolean> => {
      const providerStatuses = await getCapabilities();
      const availableProviders = Object.entries(providerStatuses)
        .filter(([provider]) => {
          return providerAvailabilities[provider] === HealthProviderAvailability.available;
        })
        .filter(([provider]) => {
          const gqlProvider = API_HEALTH_PROVIDER_TO_GQL_MAP[provider];
          return enabledHealthProviders.includes(gqlProvider);
        })
        .filter(([_, capabilities]) => {
          return capabilities.includes(capability);
        })
        .map(([provider]) => provider);

      if (isEmpty(availableProviders)) {
        Logger.error(new Error(`No available providers for this capability: ${capability}`), {
          file: "useVerifyAndAuthorizeCapability",
          capability,
          providerStatuses: JSON.stringify(providerStatuses),
          providerAvailabilities: JSON.stringify(providerAvailabilities),
        });

        return false;
      }

      return new Promise((res) => {
        Navigation.push(componentId, {
          component: {
            id: ROUTES.yuHealthConnect,
            name: ROUTES.yuHealthConnect,
            passProps: {
              availableProviders: availableProviders,
              unsupportedCapabilities: [capability],
              navigateToNext: (didSwitch: boolean) => {
                Navigation.pop(ROUTES.yuHealthConnect);
                return res(didSwitch);
              },
            },
          },
        });
      });
    },
    [componentId, enabledHealthProviders, providerAvailabilities]
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

  const openSystemPermission = useCallback(() => {
    Alert.alert(
      t["yu_health.connect.system_permission_needed.title"],
      t["yu_health.connect.system_permission_needed.body"],
      [
        {
          text: t["yu_health.connect.system_permission_needed.cancel"],
        },
        {
          text: t["yu_health.connect.system_permission_needed.button"],
          onPress: () => {
            Linking.openSettings();
          },
        },
      ]
    );
  }, [t]);

  /**
   * Makes the system & provider permission request
   */
  const requestCapabilityPermissions = useCallback(
    async (capabilities: HealthProviderCapability[]): Promise<boolean> => {
      const { capabilitiesToRequest, requiresSystemPermission } = await getCapabilitiesRequiringAuthorization(
        capabilities
      );

      if (requiresSystemPermission) {
        const permissions = await requestSystemPermission(capabilities);
        if (!isEmpty(permissions.notGrantedCapabilities)) {
          openSystemPermission();
          return false;
        }
      }

      if (capabilitiesToRequest.length > 0) {
        dispatch(setYuHealthStatus(YuHealthStatus.authorising));
        const permissionResponse = await requestPermissions(capabilitiesToRequest);
        dispatch(setYuHealthStatus(YuHealthStatus.ready));

        dispatch(yuHealthPermissionsRequested());

        // Check if any of the requested permissions did not pass the check
        return Object.values(permissionResponse).every(shouldContinueWithPermissionStatus);
      }

      // No permission request was made because all permissions are granted
      return true;
    },
    [dispatch, getCapabilitiesRequiringAuthorization, openSystemPermission]
  );

  const handlePermissionRequestModal = useCallback(
    async (capabilities: HealthProviderCapability[]) => {
      const copy = joinCapabilities(capabilities);

      return new Promise<boolean>((res) => {
        showModal(({ onClose }) => (
          <BlurredWrapper>
            <Box flex={1} justifyContent="flex-end">
              <Box borderTopLeftRadius={20} borderTopRightRadius={20} bg={Colours.neutral.white}>
                <ConfirmationModal
                  header={t["yu_health.capabilitiesRequest.header"]}
                  description={`${t["yu_health.capabilitiesRequest.body"]} ${copy}`}
                  confirmLabel={t["yu_health.capabilitiesRequest.continue"]}
                  cancelLabel={t["yu_health.capabilitiesRequest.cancel"]}
                  onConfirm={async () => {
                    onClose();
                    const result = await requestCapabilityPermissions(capabilities);
                    res(result);
                  }}
                  onCancel={() => {
                    onClose();
                    res(false);
                  }}
                />
              </Box>
            </Box>
          </BlurredWrapper>
        ));
      });
    },
    [requestCapabilityPermissions, showModal, t]
  );

  /**
   * Opens permission modal, requests permissions, and handles unsupported capabilities
   * Returns if the user has granted all capabilities or not
   */
  const verifyAndAuthorizeCapability = useCallback(
    async (
      capability: HealthProviderCapability | HealthProviderCapability[],
      {
        retrySafeguard,
        newProvider,
        skipPreliminaryModal,
      }: {
        skipPreliminaryModal?: boolean;
        retrySafeguard?: boolean;
        newProvider?: HealthProvider;
      } = {}
    ): Promise<boolean> => {
      if (!activeProvider && !newProvider) {
        // User hasn't setup a provider yet.
        return new Promise((res) => {
          Navigation.push(componentId, {
            component: {
              id: ROUTES.yuHealthConnect,
              name: ROUTES.yuHealthConnect,
              passProps: {
                navigateToNext: (didSwitch: boolean) => {
                  Navigation.pop(ROUTES.yuHealthConnect);
                  return res(didSwitch);
                },
              },
            },
          });
        });
      }

      const capabilities = Array.isArray(capability) ? capability : [capability];
      const status = await hasPermissions(capabilities);

      const [unsupportedCapability] =
        Object.entries(status).find(([_capability, permissionStatus]) => {
          return permissionStatus === HealthPermissionStatus.unsupported;
        }) || [];

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

      if (!isEmpty(requestCapabilities.capabilitiesToRequest) || requestCapabilities.requiresSystemPermission) {
        return await requestCapabilityPermissions(capabilities);
      }

      return true;
    },
    [
      componentId,
      activeProvider,
      handleUnsupportedCapability,
      handlePermissionRequestModal,
      requestCapabilityPermissions,
      getCapabilitiesRequiringAuthorization,
    ]
  );

  return useMemo(() => verifyAndAuthorizeCapability, [verifyAndAuthorizeCapability]);
};
