import { TextTemplate } from "@atoms";
import { Button } from "@components/molecules";
import { setActiveYuHealthProvider } from "@redux/yu-health/yu-health.actions";
import { getActiveProvider } from "@redux/yu-health/yu-health.selectors";
import { Style } from "@styles";
import colours from "@styles/colours";
import {
  HealthProvider,
  HealthProviderAvailability,
  HealthProviderCapability,
  getAvailabilityStatus,
  getCapabilities,
} from "@yu-life/react-native-yu-health";
import { memo, useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const getStateColor = (state: string) => {
  switch (state) {
    case HealthProviderAvailability.available:
      return "rgb(0,155,0)";
    case HealthProviderAvailability.not_available:
      return "rgb(155,0,0)";
    case HealthProviderAvailability.update_required:
      return "rgb(155,100,0)";
    default:
      return "black";
  }
};

interface IHealthProvider {
  name: HealthProvider;
  status: HealthProviderAvailability;
  capabilities?: HealthProviderCapability[];
}

const YuHealthInfo = () => {
  const dispatch = useDispatch();
  const [providerStatus, setProviderStatus] = useState<IHealthProvider[]>([]);

  const getStatus = useCallback(async () => {
    const status: Record<HealthProvider, HealthProviderAvailability> = await getAvailabilityStatus([]);

    const capabilities = await getCapabilities();

    const providers: IHealthProvider[] = Object.keys(status).map((provider: HealthProvider) => {
      return {
        name: provider,
        status: status[provider],
        capabilities: capabilities[provider],
      };
    });

    setProviderStatus(providers);
  }, []);

  useEffect(() => {
    getStatus();
  }, [getStatus]);

  const activeProvider = useSelector(getActiveProvider);

  const setActiveProvider = useCallback(
    (provider: HealthProvider) => {
      dispatch(setActiveYuHealthProvider(provider));
    },
    [dispatch]
  );

  return (
    <View style={styles.container}>
      <View style={styles.generalContainer}>
        <TextTemplate type="b2b">YuHealth Info</TextTemplate>
        <TextTemplate type="b2">
          Active provider: <TextTemplate type="b2b">{activeProvider ?? "NONE!"}</TextTemplate>
        </TextTemplate>
      </View>
      {providerStatus.map((provider) => (
        <View style={styles.providerContainer} key={provider.name}>
          <View style={styles.providerHeaderContainer}>
            <TextTemplate type="b1b">{provider.name}</TextTemplate>
            <TextTemplate type="b2b" color={getStateColor(provider.status)}>
              {provider.status}
            </TextTemplate>
          </View>
          <View style={styles.capabilities}>
            <TextTemplate type="b2">Supported capabilities:</TextTemplate>
            <TextTemplate type="b2b">{provider?.capabilities.join(", ")}</TextTemplate>
            {activeProvider !== provider.name && provider.status === HealthProviderAvailability.available ? (
              <View style={styles.setActiveButton}>
                <Button
                  testID="yu-health-debug-set-active-button"
                  translatedLabel="Set active"
                  onPress={() => setActiveProvider(provider.name)}
                />
              </View>
            ) : null}
          </View>
        </View>
      ))}
    </View>
  );
};

// TODO: localise (set active)

const styles = StyleSheet.create({
  capability: {
    padding: Style.adjust(6),
    paddingHorizontal: Style.adjust(10),
    borderRadius: Style.adjust(8),
    marginEnd: Style.adjust(6),
    marginBottom: Style.adjust(6),
    backgroundColor: colours.products.fib.rare,
  },
  generalContainer: {
    padding: Style.adjust(10),
  },
  setActiveButton: {
    marginTop: Style.adjust(10),
  },
  container: {
    padding: Style.adjust(12),
    gap: 10,
  },
  capabilities: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: Style.adjust(20),
    gap: 10,
  },
  providerContainer: {
    backgroundColor: colours.products.fib.rareLight,
    padding: Style.adjust(20),
  },
  providerHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default memo(YuHealthInfo);
