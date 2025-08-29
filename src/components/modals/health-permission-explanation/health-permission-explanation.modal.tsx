import * as React from "react";
import { View } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { memo } from "react";
import { useTranslation } from "@hooks";
import { GenericScreen } from "@components/screens";

interface IHealthPermissionModalProps {
  onClose: () => void;
}

const HealthPermissionExplanationModal = ({ onClose }: IHealthPermissionModalProps) => {
  const t = useTranslation([
    "yu_health.explanation.title",
    "yu_health.explanation.body",
    "yu_health.explanation.button",
  ]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.mainContentWrapper}>
        <GenericScreen
          onPress={onClose}
          heading={t["yu_health.explanation.title"]}
          subheading={t["yu_health.explanation.body"]}
          ctaLabel={t["yu_health.explanation.button"]}
        />
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
    flexDirection: "row",
    marginTop: Style.adjust(32),
    paddingBottom: Style.adjust(38),
    paddingTop: Style.adjust(30),
    borderTopLeftRadius: Style.adjust(20),
    borderTopRightRadius: Style.adjust(20),
    backgroundColor: Colours.neutral.white,
  },
});

export default memo(HealthPermissionExplanationModal);
