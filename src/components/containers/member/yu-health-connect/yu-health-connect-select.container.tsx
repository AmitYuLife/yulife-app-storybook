import YuHealthConnectSelectScreen from "@components/screens/member/yu-health-connect/yu-health-connect-select.screen";
import { Navigation } from "@navigation/main";
import { getProviderAvailabilities } from "@redux/yu-health/yu-health.selectors";
import { SUPPORTED_PROVIDERS } from "@utils";
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

  const providers = useMemo(() => {
    if (availableProviders) {
      return availableProviders;
    }

    return SUPPORTED_PROVIDERS.filter(
      (provider) => providerAvailabilities?.[provider] === HealthProviderAvailability.available
    );
  }, [availableProviders, providerAvailabilities]);

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
