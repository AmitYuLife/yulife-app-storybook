import HealthPermissionExplanationModal from "@components/modals/health-permission-explanation/health-permission-explanation.modal";
import YuHealthConnectScreen from "@components/screens/member/yu-health-connect/yu-health-connect.screen";
import { useBackHandler, useVerifyAndAuthorizeCapability } from "@hooks";
import { t } from "@locale";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { setActiveYuHealthProvider } from "@redux/yu-health/yu-health.actions";
import { getActiveProviderSelector, getProviderAvailabilities } from "@redux/yu-health/yu-health.selectors";
import { HEALTH_PROVIDER_OPTIONS } from "@services/yuHealth/supported-health-types";
import {
  PROVIDER_RECOMMENDED_ORDER,
  YU_HEALTH_DEFAULT_CAPABILITIES,
  getRecommendedProvider,
  joinCapabilities,
} from "@utils";
import { HealthProvider, HealthProviderCapability, getCapabilities } from "@yu-life/react-native-yu-health";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface IYuHealthConnectContainerProps {
  componentId: string;
  navigateToNext?: (didSwitch: boolean) => void;
  unsupportedCapabilities?: HealthProviderCapability[];
  availableProviders?: HealthProvider[];
}

const YuHealthConnectContainer = ({
  componentId,
  navigateToNext,
  availableProviders,
  unsupportedCapabilities,
}: IYuHealthConnectContainerProps) => {
  const dispatch = useDispatch();
  const activeProvider = useSelector(getActiveProviderSelector);
  const providerAvailabilities = useSelector(getProviderAvailabilities);
  const [selectedProvider, setSelectedProvider] = useState<HealthProvider>();
  const verifyAndAuthorizeCapability = useVerifyAndAuthorizeCapability({ componentId });

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
  }, [selectedProvider, availableProviders, componentId]);

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
    onFinish(false);
    return false;
  });

  const onConnect = useCallback(async () => {
    dispatch(setActiveYuHealthProvider(selectedProvider));

    const providerCapabilities = await getCapabilities();
    const supportedCapabilities = providerCapabilities[selectedProvider];
    const capabilities = YU_HEALTH_DEFAULT_CAPABILITIES.filter((capability) =>
      supportedCapabilities.includes(capability)
    );

    await verifyAndAuthorizeCapability(capabilities, { skipPreliminaryModal: true });

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

    Navigation.showOverlayWithChild(modal, false);
  }, []);

  return (
    <YuHealthConnectScreen
      onConnect={onConnect}
      onChangeProvider={onChangeProvider}
      onOpenExplanation={onOpenExplanation}
      activeProvider={selectedProvider}
      onCancel={onFinish}
      body={bodyCopy}
    />
  );
};

export default memo(YuHealthConnectContainer);
