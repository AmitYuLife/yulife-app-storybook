import * as React from "react";
import { TextTemplate } from "@atoms";
import { StyleSheet, View } from "react-native";
import { Style } from "@styles";
import { memo } from "react";
import { HealthProviderCapability } from "@yu-life/react-native-yu-health";
import { Button, SecondaryButton } from "@components/molecules";

interface IHealthPermissionModalProps {
  capabilities: HealthProviderCapability[];
  onRequestPermissions: () => void;
  onCancel: () => void;
}

// TODO: Replace this with designed modal
// WIP layout: https://www.figma.com/file/jXTBhFJJiCN8IAXTmq4IZW/(L)-Google-Health-Connect?type=design&node-id=343-3918&mode=design&t=bYZHYDNtGaYbTzb3-0
const HealthPermissionModal = ({ onRequestPermissions, onCancel, capabilities }: IHealthPermissionModalProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.mainContentWrapper}>
        <View style={styles.contentWrapper}>
          <View style={styles.titleContainer}>
            <TextTemplate type="h2" textAlign="center">
              We need permissions!
            </TextTemplate>
          </View>
          <TextTemplate type="b2" textAlign="center">
            For capability: {capabilities.join(", ")}
          </TextTemplate>
        </View>
        <View>
          <View style={styles.retryButton}>
            <Button label={"Continue"} onPress={onRequestPermissions} />
          </View>
          <SecondaryButton label="Cancel" onPress={onCancel} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: Style.adjust(25),
    paddingBottom: Style.adjust(10),
    minHeight: Style.adjust(220),
    justifyContent: "space-between",
  },
  actionButtons: {
    marginBottom: Style.adjust(24),
  },
  mainContentWrapper: {
    flex: 1,
    justifyContent: "center",
    marginTop: Style.adjust(32),
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
