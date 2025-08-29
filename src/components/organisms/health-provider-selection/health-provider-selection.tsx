import { Box, TextTemplate } from "@atoms";
import Radio from "@atoms/radio/radio";
import HealthProviderActivities from "@components/molecules/health-provider-activities/health-provider-activities";
import HealthProviderLogo from "@components/molecules/health-provider-logo/health-provider-logo";
import { HEALTH_PROVIDER_OPTIONS } from "@services/yuHealth/supported-health-types";
import { Colours, Style, StyleSheet } from "@styles";
import { HealthProvider } from "@yu-life/react-native-yu-health";
import React, { memo } from "react";
import { TouchableOpacity, View } from "react-native";

interface IHealthProviderSelectionProps {
  provider: HealthProvider;
  isSelected: boolean;
  onPress: () => void;
}

const HealthProviderSelection = ({ provider, onPress, isSelected }: IHealthProviderSelectionProps) => {
  const options = HEALTH_PROVIDER_OPTIONS[provider];

  if (!options) {
    return null;
  }

  return (
    <View>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <Box style={styles.header} flexDirection="row" gap={16}>
          <HealthProviderLogo size={Style.adjust(48)} provider={provider} />
          <Box style={styles.headerContent} gap={2}>
            <TextTemplate type="b2b">{options.label}</TextTemplate>
            <TextTemplate type="l1" color={options.isRecommended ? Colours.primary.p300 : undefined}>
              {options.isRecommended ? "Recommended" : "Optional"}
            </TextTemplate>
          </Box>
          <Radio width={Style.adjust(24)} height={Style.adjust(24)} selected={isSelected} />
        </Box>
      </TouchableOpacity>
      {options?.supportedTypes ? (
        <HealthProviderActivities supportedTypes={options.supportedTypes} style={styles.activities} />
      ) : null}
    </View>
  );
};

export default memo(HealthProviderSelection);

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colours.neutral.white,
    padding: Style.adjust(16),
    borderColor: "#E3E3E1",
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: "center",
  },
  headerContent: {
    flex: 1,
  },
  activities: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});
