import * as React from "react";
import { TextTemplate } from "@atoms";
import { View } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { memo, useMemo } from "react";
import { HealthProviderCapability } from "@yu-life/react-native-yu-health";
import { Button, SecondaryButton } from "@components/molecules";
import { useTranslation } from "@hooks";
import { joinCapabilities } from "@utils";

interface IHealthPermissionModalProps {
  capabilities: HealthProviderCapability[];
  onRequestPermissions: () => void;
  onCancel: () => void;
}

const HealthPermissionModal = ({ onRequestPermissions, onCancel, capabilities }: IHealthPermissionModalProps) => {
  const t = useTranslation([
    "yu_health.capabilitiesRequest.capabilities.steps",
    "yu_health.capabilitiesRequest.capabilities.meditation",
    "yu_health.capabilitiesRequest.capabilities.cycling",
    "yu_health.capabilitiesRequest.capabilities.heartRate",
    "yu_health.capabilitiesRequest.capabilities.workouts",
    "yu_health.capabilitiesRequest.capabilities.calories",
    "yu_health.capabilitiesRequest.join",
    "yu_health.capabilitiesRequest.header",
    "yu_health.capabilitiesRequest.body",
    "yu_health.capabilitiesRequest.continue",
    "yu_health.capabilitiesRequest.cancel",
  ]);

  const copy = useMemo(() => {
    return joinCapabilities(capabilities);
  }, [capabilities]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.mainContentWrapper}>
        <View style={styles.contentWrapper}>
          <View style={styles.titleContainer}>
            <TextTemplate type="h2" textAlign="center">
              {t["yu_health.capabilitiesRequest.header"]}
            </TextTemplate>
          </View>
          <TextTemplate type="b2" textAlign="center">
            {t["yu_health.capabilitiesRequest.body"]} {copy}
          </TextTemplate>
        </View>
        <View>
          <View style={styles.retryButton}>
            <Button translationKey="yu_health.capabilitiesRequest.continue" onPress={onRequestPermissions} />
          </View>
          <SecondaryButton translationKey="yu_health.capabilitiesRequest.cancel" onPress={onCancel} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    minHeight: Style.adjust(220),
    justifyContent: "flex-end",
  },
  actionButtons: {
    marginBottom: Style.adjust(24),
  },
  mainContentWrapper: {
    justifyContent: "center",
    marginTop: Style.adjust(32),
    paddingBottom: Style.adjust(38),
    paddingTop: Style.adjust(30),
    borderTopLeftRadius: Style.adjust(20),
    borderTopRightRadius: Style.adjust(20),
    paddingHorizontal: Style.adjust(30),
    backgroundColor: Colours.neutral.white,
  },
  retryButton: {
    marginBottom: Style.adjust(5),
  },
  contentWrapper: {
    marginBottom: Style.adjust(30),
  },
  titleContainer: {
    marginBottom: Style.adjust(15),
  },
});

export default memo(HealthPermissionModal);
