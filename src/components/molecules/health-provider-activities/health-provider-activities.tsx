import React, { ReactNode, memo, useMemo } from "react";
import { Box, TextTemplate } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { StyleProp, ViewStyle } from "react-native";
import { CheckIcon } from "@atoms/icon/check";
import { StepsIcon } from "@atoms/icon/steps-icon";
import { CrossIcon } from "@atoms/icon/cross";
import { CyclingIcon } from "@atoms/icon/cycling-icon";
import { MindfulnessIcon } from "@atoms/icon/mindfulness-icon";
import { SupportedHealthTypes } from "@services/yuHealth/supported-health-types";
import { t } from "@locale";

interface IProps {
  supportedTypes: SupportedHealthTypes[];
  style?: StyleProp<ViewStyle>;
}

interface ISupportedTypeOptions {
  label: string;
  icon: ReactNode;
}

const HealthProviderActivities = ({ style, supportedTypes }: IProps) => {
  const wrapperStyle = useMemo(() => [styles.wrapper, style], [style]);

  const SUPPORTED_TYPE_VALUES: Record<SupportedHealthTypes, ISupportedTypeOptions> = {
    [SupportedHealthTypes.steps]: {
      label: t("yu_health.activityTypes.steps"),
      icon: <StepsIcon width={20} height={20} />,
    },
    [SupportedHealthTypes.meditation]: {
      label: t("yu_health.activityTypes.meditation"),
      icon: <MindfulnessIcon size={20} />,
    },
    [SupportedHealthTypes.cycling]: {
      label: t("yu_health.activityTypes.cycling"),
      icon: <CyclingIcon width={20} height={20} />,
    },
  };

  return (
    <Box gap={10} style={wrapperStyle}>
      <TextTemplate type="b2b">{t("yu_health.activitySelection.title")}</TextTemplate>
      {Object.entries<ISupportedTypeOptions>(SUPPORTED_TYPE_VALUES).map(([type, options]) => {
        const isSupported = supportedTypes?.includes(type as unknown as SupportedHealthTypes);

        return (
          <Box gap={10} flexDirection="row" style={styles.activityRow} key={type}>
            <Box gap={10} flexDirection="row" style={isSupported ? styles.activityInfo : inactiveInfoStyle}>
              {options.icon}
              <TextTemplate type="l1">{options.label}</TextTemplate>
            </Box>

            {isSupported ? <CheckIcon size={18} /> : <CrossIcon size={18} />}
          </Box>
        );
      })}
    </Box>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.neutral.n50,
    padding: Style.adjust(16),
    borderColor: "#E3E3E1",
    borderWidth: 1,
    borderRadius: 8,
  },
  activityRow: {
    alignItems: "center",
  },
  activityInfo: {
    flex: 1,
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
    marginTop: Style.adjust(4),
  },

  arrow: {
    alignItems: "center",
    justifyContent: "center",
  },
});

const inactiveInfoStyle = [styles.activityInfo, { opacity: 0.6 }];

export default memo(HealthProviderActivities);
