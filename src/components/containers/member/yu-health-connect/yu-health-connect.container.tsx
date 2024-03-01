import HealthPermissionExplanationModal from "@components/modals/health-permission-explanation/health-permission-explanation.modal";
import YuHealthConnectScreen from "@components/screens/member/yu-health-connect/yu-health-connect.screen";
import { useVerifyAndAuthorizeCapability } from "@hooks";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { setActiveYuHealthProvider } from "@redux/yu-health/yu-health.actions";
import { getActiveProviderSelector, getProviderAvailabilities } from "@redux/yu-health/yu-health.selectors";
import { YU_HEALTH_DEFAULT_CAPABILITIES, getRecommendedProvider } from "@utils";
import { HealthProvider } from "@yu-life/react-native-yu-health";
import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface IYuHealthConnectContainerProps {
  componentId: string;
}

const YuHealthConnectContainer = ({ componentId }: IYuHealthConnectContainerProps) => {
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

  const onCancel = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const onConnect = useCallback(async () => {
    dispatch(setActiveYuHealthProvider(activeProvider));
    await verifyAndAuthorizeCapability(YU_HEALTH_DEFAULT_CAPABILITIES, { skipPreliminaryModal: true });

    onCancel();
  }, [activeProvider, dispatch, onCancel, verifyAndAuthorizeCapability]);

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
      onCancel={onCancel}
    />
  );
};

export default memo(YuHealthConnectContainer);
