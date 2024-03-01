import YuHealthConnectSelectScreen from "@components/screens/member/yu-health-connect/yu-health-connect-select.screen";
import { Navigation } from "@navigation/main";
import { getProviderAvailabilities } from "@redux/yu-health/yu-health.selectors";
import { HealthProvider, HealthProviderAvailability } from "@yu-life/react-native-yu-health";
import { memo, useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";

interface IYuHealthConnectContainerProps {
  componentId: string;
  initialProvider?: HealthProvider;
  onChangeProvider: (provider: HealthProvider) => void;
}

const YuHealthConnectContainer = ({
  componentId,
  onChangeProvider,
  initialProvider,
}: IYuHealthConnectContainerProps) => {
  const [activeProvider, setActiveProvider] = useState<HealthProvider>(initialProvider);
  const providerAvailabilities = useSelector(getProviderAvailabilities);

  const providers = useMemo(() => {
    return Object.values(HealthProvider).filter(
      (provider) => providerAvailabilities[provider] === HealthProviderAvailability.available
    );
  }, [providerAvailabilities]);

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
      activeProvider={activeProvider}
    />
  );
};

export default memo(YuHealthConnectContainer);
