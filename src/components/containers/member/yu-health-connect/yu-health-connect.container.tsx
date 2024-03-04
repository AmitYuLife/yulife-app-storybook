import HealthPermissionExplanationModal from "@components/modals/health-permission-explanation/health-permission-explanation.modal";
import YuHealthConnectScreen from "@components/screens/member/yu-health-connect/yu-health-connect.screen";
import { useBackHandler, useVerifyAndAuthorizeCapability } from "@hooks";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { setActiveYuHealthProvider } from "@redux/yu-health/yu-health.actions";
import { getActiveProviderSelector, getProviderAvailabilities } from "@redux/yu-health/yu-health.selectors";
import { YU_HEALTH_DEFAULT_CAPABILITIES, getRecommendedProvider } from "@utils";
import { HealthProvider, getCapabilities } from "@yu-life/react-native-yu-health";
import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface IYuHealthConnectContainerProps {
  componentId: string;
  navigateToNext?: () => void;
}

const YuHealthConnectContainer = ({ componentId, navigateToNext }: IYuHealthConnectContainerProps) => {
  const currentProvider = useSelector(getActiveProviderSelector);
  const providerAvailabilities = useSelector(getProviderAvailabilities);
  const verifyAndAuthorizeCapability = useVerifyAndAuthorizeCapability();
  const [activeProvider, setActiveProvider] = useState<HealthProvider>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!activeProvider && currentProvider) {
      setActiveProvider(currentProvider);
      return;
    }

    if (!activeProvider) {
      const provider = getRecommendedProvider({ providerAvailabilities });
      setActiveProvider(provider);
    }
  }, [activeProvider, currentProvider, providerAvailabilities]);

  const onChangeProvider = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        id: ROUTES.yuHealthConnectSelect,
        name: ROUTES.yuHealthConnectSelect,
        passProps: {
          initialProvider: activeProvider,
          onChangeProvider: (provider: HealthProvider) => {
            setActiveProvider(provider);
          },
        },
      },
    });
  }, [activeProvider, componentId]);

  const onFinish = useCallback(() => {
    if (navigateToNext) {
      navigateToNext();
      return;
    }

    Navigation.pop(componentId);
  }, [componentId, navigateToNext]);

  useBackHandler(() => {
    onFinish();
    return false;
  });

  const onConnect = useCallback(async () => {
    dispatch(setActiveYuHealthProvider(activeProvider));

    const providerCapabilities = await getCapabilities();
    const supportedCapabilities = providerCapabilities[activeProvider];
    const capabilities = YU_HEALTH_DEFAULT_CAPABILITIES.filter((capability) =>
      supportedCapabilities.includes(capability)
    );

    await verifyAndAuthorizeCapability(capabilities, { skipPreliminaryModal: true });

    onFinish();
  }, [activeProvider, dispatch, onFinish, verifyAndAuthorizeCapability]);

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
      activeProvider={activeProvider}
      onCancel={onFinish}
    />
  );
};

export default memo(YuHealthConnectContainer);
