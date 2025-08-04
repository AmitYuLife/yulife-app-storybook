import YuHealthConnectSelectScreen from "@components/screens/member/yu-health-connect/yu-health-connect-select.screen";
import { Navigation } from "@navigation/main";
import { getEnabledHealthProviders } from "@redux/user/user.selectors";
import { getProviderAvailabilities } from "@redux/yu-health/yu-health.selectors";
import { API_HEALTH_PROVIDER_TO_GQL_MAP } from "@services/fitkit/yu-health.helpers";
import Logger from "@services/logging/logger";
import { CLIENT_SUPPORTED_PROVIDERS } from "@utils";
import { HealthProvider, HealthProviderAvailability } from "@yu-life/react-native-yu-health";
import { memo, useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";

interface IYuHealthConnectContainerProps {
  componentId: string;
  initialProvider?: HealthProvider;
  availableProviders?: HealthProvider[];
  onChangeProvider: (provider: HealthProvider) => void;
}

const YuHealthConnectContainer = ({
  componentId,
  initialProvider,
  onChangeProvider,
  availableProviders,
}: IYuHealthConnectContainerProps) => {
  const [activeProvider, setActiveProvider] = useState<HealthProvider>(initialProvider);
  const providerAvailabilities = useSelector(getProviderAvailabilities);
  const enabledHealthProviders = useSelector(getEnabledHealthProviders);

  const providers = useMemo(() => {
    if (availableProviders) {
      return availableProviders;
    }

    return CLIENT_SUPPORTED_PROVIDERS.filter((provider) => {
      if (!enabledHealthProviders) {
        // Should never happen - we don't have user profile data
        Logger.error(new Error("enabledHealthProviders is empty"), { file: "yu-health-connect-select.container.tsx" });
        return true;
      }

      const gqlProvider = API_HEALTH_PROVIDER_TO_GQL_MAP[provider];
      return enabledHealthProviders.includes(gqlProvider);
    }).filter((provider) => providerAvailabilities?.[provider] === HealthProviderAvailability.available);
  }, [availableProviders, enabledHealthProviders, providerAvailabilities]);

  const onConfirm = useCallback(() => {
    onChangeProvider?.(activeProvider);
    Navigation.pop(componentId);
  }, [activeProvider, componentId, onChangeProvider]);

  const onCancel = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  return (
    <YuHealthConnectSelectScreen
      onConfirm={onConfirm}
      onCancel={onCancel}
      onChangeProvider={setActiveProvider}
      providers={providers}
      isLoadingProviders={!providerAvailabilities}
      activeProvider={activeProvider}
    />
  );
};

export default memo(YuHealthConnectContainer);
