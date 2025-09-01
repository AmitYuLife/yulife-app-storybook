import HealthPermissionExplanationModal from "@components/modals/health-permission-explanation/health-permission-explanation.modal";
import YuHealthConnectScreen from "@components/screens/member/yu-health-connect/yu-health-connect.screen";
import { useBackHandler, useTrack, useVerifyAndAuthorizeCapability } from "@hooks";
import { t } from "@locale";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { setActiveYuHealthProvider } from "@redux/yu-health/yu-health.actions";
import { getActiveProvider, getProviderAvailabilities, getYuHealthStatus } from "@redux/yu-health/yu-health.selectors";
import { YuHealthStatus } from "@redux/yu-health/yu-health.types";
import Logger from "@services/logging/logger";
import { HEALTH_PROVIDER_OPTIONS } from "@services/yuHealth/supported-health-types";
import {
  PROVIDER_RECOMMENDED_ORDER,
  YU_HEALTH_DEFAULT_CAPABILITIES,
  getRecommendedProvider,
  joinCapabilities,
} from "@utils";
import {
  HealthProvider,
  HealthProviderAvailability,
  HealthProviderCapability,
  disconnect,
  getCapabilities,
  supportsDisconnect,
} from "@yu-life/react-native-yu-health";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface IYuHealthConnectContainerProps {
  componentId: string;
  navigateToNext?: (didSwitch: boolean) => void;
  unsupportedCapabilities?: HealthProviderCapability[];
  availableProviders?: HealthProvider[];
}

const LOADING_STATES = [YuHealthStatus.loading, YuHealthStatus.authorising];

const YuHealthConnectContainer = ({
  componentId,
  navigateToNext,
  availableProviders,
  unsupportedCapabilities,
}: IYuHealthConnectContainerProps) => {
  const dispatch = useDispatch();
  const track = useTrack();
  const yuHealthStatus = useSelector(getYuHealthStatus);
  const activeProvider = useSelector(getActiveProvider);
  const providerAvailabilities = useSelector(getProviderAvailabilities);
  const [selectedProvider, setSelectedProvider] = useState<HealthProvider>();
  const verifyAndAuthorizeCapability = useVerifyAndAuthorizeCapability({ componentId });

  const isLoading = LOADING_STATES.includes(yuHealthStatus);

  useEffect(() => {
    if (!selectedProvider && activeProvider) {
      // If we pass available providers (providers that are supported for a specific capability)
      // and our current provider isn't in the list, we display the recommended provider instead
      // of the current provider
      if (availableProviders && !availableProviders.includes(activeProvider)) {
        const provider = PROVIDER_RECOMMENDED_ORDER.find((healthProvider) =>
          availableProviders.includes(healthProvider)
        );

        setSelectedProvider(provider || activeProvider);
        return;
      }

      setSelectedProvider(activeProvider);
      return;
    }

    if (!selectedProvider) {
      const provider = getRecommendedProvider({ providerAvailabilities });
      setSelectedProvider(provider);
    }
  }, [selectedProvider, availableProviders, activeProvider, providerAvailabilities]);

  const bodyCopy = useMemo(() => {
    if (unsupportedCapabilities) {
      const unsupportedCopy = joinCapabilities(unsupportedCapabilities);
      const provider = HEALTH_PROVIDER_OPTIONS[activeProvider];
      if (!provider) {
        return "";
      }

      return t("yu_health.connect.unsupported", { provider: provider.label, capabilities: unsupportedCopy });
    }

    return t("yu_health.connect.body");
  }, [activeProvider, unsupportedCapabilities]);

  const onChangeProvider = useCallback(() => {
    track("button_pressed", {
      button_id: "yu_health_change_provider",
      isLoading,
      availableProviders,
    });

    if (isLoading) {
      return;
    }

    Navigation.push(componentId, {
      component: {
        id: ROUTES.yuHealthConnectSelect,
        name: ROUTES.yuHealthConnectSelect,
        passProps: {
          initialProvider: selectedProvider,
          availableProviders,
          onChangeProvider: (provider: HealthProvider) => {
            setSelectedProvider(provider);
          },
        },
      },
    });
  }, [isLoading, componentId, selectedProvider, availableProviders, track]);

  const onFinish = useCallback(
    (didSwitch?: boolean) => {
      if (navigateToNext) {
        navigateToNext(!!didSwitch);
        return;
      }

      Navigation.pop(componentId);
    },
    [componentId, navigateToNext]
  );

  useBackHandler(() => {
    if (!isLoading) {
      onFinish(false);
    }

    return false;
  });

  const onConnect = useCallback(async () => {
    const providerCapabilities = await getCapabilities();
    if (!selectedProvider || !providerCapabilities[selectedProvider]) {
      Logger.error(new Error("YuHealth: No selected provider or no capabilities"), {
        providerCapabilities: JSON.stringify(providerCapabilities),
        selectedProvider,
      });

      return;
    }

    dispatch(setActiveYuHealthProvider(selectedProvider));
    const supportedCapabilities = providerCapabilities[selectedProvider];
    const capabilities = YU_HEALTH_DEFAULT_CAPABILITIES.filter((capability) =>
      supportedCapabilities?.includes(capability)
    );

    const supportsDisconnection = await supportsDisconnect(selectedProvider);
    if (supportsDisconnection) {
      try {
        await disconnect(selectedProvider);
      } catch (e) {
        // We don't care if it fails
      }
    }

    await verifyAndAuthorizeCapability(capabilities, { skipPreliminaryModal: true, newProvider: selectedProvider });

    onFinish(true);
  }, [selectedProvider, dispatch, onFinish, verifyAndAuthorizeCapability]);

  const onOpenExplanation = useCallback(() => {
    const modal = (
      <HealthPermissionExplanationModal
        onClose={() => {
          Navigation.dismissOverlayWithChild();
        }}
      />
    );

    Navigation.showOverlayWithChild({ children: modal, withBlurBackground: false });
  }, []);

  const hasNoProviders = useMemo(() => {
    return !Object.values(providerAvailabilities || {}).some((value) => value === HealthProviderAvailability.available);
  }, [providerAvailabilities]);

  return (
    <YuHealthConnectScreen
      isLoading={isLoading}
      onConnect={onConnect}
      hasNoProviders={hasNoProviders}
      onChangeProvider={onChangeProvider}
      onOpenExplanation={onOpenExplanation}
      selectedProvider={selectedProvider}
      onCancel={() => onFinish(false)}
      body={bodyCopy}
    />
  );
};

export default memo(YuHealthConnectContainer);
