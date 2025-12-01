import { useVerifyAndAuthorizeCapability } from "@hooks";
import { TextTemplate } from "@atoms";
import { getCapabilityStatuses } from "@redux/yu-health/yu-health.selectors";
import { Colours, Style, StyleSheet } from "@styles";
import colours from "@styles/colours";
import { HealthPermissionStatus, HealthProviderCapability } from "@yu-life/react-native-yu-health";
import { memo } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { Button } from "@components/molecules";
import { useDispatch } from "react-redux";
import { refreshCapabilityPermissions } from "@redux/yu-health/yu-health.actions";
import { ROUTES } from "@navigation/constants";

const YuHealthChallenges = () => {
  const dispatch = useDispatch();
  const verifyAndAuthorizeCapability = useVerifyAndAuthorizeCapability({ componentId: ROUTES.yuHealthDebug });
  const capabilityStatuses = useSelector(getCapabilityStatuses);

  const getCapabilityColor = (capability: HealthProviderCapability) => {
    const status = capabilityStatuses?.[capability];

    switch (status) {
      case HealthPermissionStatus.granted:
        return Colours.debug.greenSuccess;
      case HealthPermissionStatus.notDetermined:
        return Colours.debug.tealInfo;
      case HealthPermissionStatus.notAsked:
        return Colours.debug.orangeWarning;
      default:
        return Colours.debug.redError;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          testID="yu-health-debug-manual-refresh-button"
          translatedLabel="Manual status refresh" // TODO: localise
          onPress={() => {
            dispatch(refreshCapabilityPermissions());
          }}
        />
      </View>
      {Object.values(HealthProviderCapability).map((capability) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            key={capability}
            style={{ ...styles.capability, backgroundColor: getCapabilityColor(capability) }}
            onPress={async () => {
              const shouldStart = await verifyAndAuthorizeCapability(capability);
              Alert.alert("Should we start the challenge?", shouldStart ? "Yes" : "No");
            }}
          >
            <TextTemplate type="l2b">{capability}</TextTemplate>
            <TextTemplate type="l2">Status: {capabilityStatuses?.[capability]}</TextTemplate>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    gap: 10,
    alignItems: "flex-start",
  },
  capability: {
    width: "48%",
    padding: Style.adjust(6),
    paddingHorizontal: Style.adjust(10),
    borderRadius: Style.adjust(8),
    minHeight: 80,
    backgroundColor: colours.products.fib.rare,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
  },
});

export default memo(YuHealthChallenges);
