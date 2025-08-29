import React, { memo } from "react";
import { Box, TextTemplate } from "@atoms";
import { BoxOption } from "@molecules";
import { Colours, Style, StyleSheet } from "@styles";
import { View } from "react-native";
import { ArrowButton } from "@components/molecules/arrow-button";
import HealthProviderLogo from "@components/molecules/health-provider-logo/health-provider-logo";
import { HealthProvider } from "@yu-life/react-native-yu-health";
import { HEALTH_PROVIDER_OPTIONS } from "@services/yuHealth/supported-health-types";
import { useTranslation } from "@hooks";

interface IProps {
  provider: HealthProvider;
  onPress: () => void;
}

const HealthProviderItem = ({ provider, onPress }: IProps) => {
  const options = HEALTH_PROVIDER_OPTIONS[provider];
  const t = useTranslation(["yu_health.activitySelection.recommended", "yu_health.activitySelection.optional"]);
  if (!options) {
    return null;
  }

  return (
    <BoxOption innerHeight={Style.adjust(90)} onPress={onPress} isSelected={false} innerWrapperStyle={styles.boxOption}>
      <Box gap={16} flexDirection="row" style={styles.wrapper}>
        <View style={styles.image}>
          <HealthProviderLogo provider={provider} size={Style.adjust(58)} />
        </View>
        <View style={styles.details}>
          <TextTemplate type="b2b">{options?.label}</TextTemplate>
          <View style={styles.description}>
            <TextTemplate type="l1">
              {options?.isRecommended
                ? t["yu_health.activitySelection.recommended"]
                : t["yu_health.activitySelection.optional"]}
            </TextTemplate>
          </View>
        </View>
        <View style={styles.arrow}>
          <ArrowButton color={Colours.primary.p600} />
        </View>
      </Box>
    </BoxOption>
  );
};

const styles = StyleSheet.create({
  boxOption: {
    justifyContent: "center",
  },
  wrapper: {
    flexDirection: "row",
    paddingEnd: 8,
    paddingStart: 16,
    alignItems: "center",
  },
  image: {
    marginStart: Style.adjust(8),
  },
  details: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },
  description: {
    marginTop: Style.adjust(2),
  },
  arrow: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(HealthProviderItem);
