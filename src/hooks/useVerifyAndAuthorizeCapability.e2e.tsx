import { HealthProvider, HealthProviderCapability } from "@yu-life/react-native-yu-health";
import { useCallback, useMemo } from "react";

interface IVerifyAndAuthorizeCapabilityProps {
  componentId: string;
}

export const useVerifyAndAuthorizeCapability = (_params: IVerifyAndAuthorizeCapabilityProps) => {
  const verifyAndAuthorizeCapability = useCallback(
    async (
      _capability: HealthProviderCapability | HealthProviderCapability[],
      _data: { skipPreliminaryModal?: boolean; retrySafeguard?: boolean; newProvider?: HealthProvider } = {}
    ): Promise<boolean> => {
      return true;
    },
    []
  );

  return useMemo(() => verifyAndAuthorizeCapability, [verifyAndAuthorizeCapability]);
};
