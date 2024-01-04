import React, { memo, useCallback, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { Style } from "@styles";
import {
  getAvailabilityStatus,
  HealthProvider,
  HealthProviderCapability,
  HealthProviderAvailability,
  getCapabilities,
} from "@yu-life/react-native-yu-health";
import { TextTemplate } from "@atoms";
import colours from "@styles/colours";

interface IHealthProvider {
  name: HealthProvider;
  status: HealthProviderAvailability;
  capabilities?: HealthProviderCapability[];
}

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

const YuHealthDebug = () => {
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

  const onBack = useCallback(() => {
    Navigation.popToRoot(ROUTES.debug);
  }, []);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView>
        <View style={styles.container}>
          {providerStatus.map((provider) => (
            <View style={styles.providerContainer} key={provider.name}>
              <View style={styles.providerHeaderContainer}>
                <TextTemplate type="b1b">{provider.name}</TextTemplate>
                <TextTemplate type="b2b" color={getStateColor(provider.status)}>
                  {provider.status}
                </TextTemplate>
              </View>
              <View style={styles.capabilities}>
                {provider.capabilities?.map((capability) => (
                  <View style={styles.capability} key={capability}>
                    <TextTemplate type="b2" color={colours.yuscreen.white} key={capability}>
                      {capability}
                    </TextTemplate>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <GenericHeadingAbsolute heading={"YuHealth"} onLeftIconPress={onBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    padding: Style.adjust(16),
  },

  capability: {
    padding: Style.adjust(6),
    paddingHorizontal: Style.adjust(10),
    borderRadius: Style.adjust(8),
    marginRight: Style.adjust(6),
    marginBottom: Style.adjust(6),
    backgroundColor: colours.products.fib.rare,
  },

  capabilities: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: Style.adjust(20),
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

export default memo(YuHealthDebug);
