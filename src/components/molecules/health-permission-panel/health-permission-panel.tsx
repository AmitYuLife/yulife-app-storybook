import React, { memo, useMemo } from "react";
import { View, ViewStyle } from "react-native";
import { InfoPanel } from "@molecules";
import { useTranslation } from "@hooks";
import { DETOX_ENABLED } from "@services/socket";

export interface IHealthPermissionPanelProps {
  width: number;
  isUnavailable: boolean;
  isUnauthorised: boolean;
  onPress: () => void;
}

const HealthPermissionPanel = ({ width, onPress, isUnavailable, isUnauthorised }: IHealthPermissionPanelProps) => {
  const t = useTranslation([
    "screens.daily.disconnected.unavailable.title",
    "screens.daily.disconnected.unauthorised.title",
    "screens.daily.disconnected.unavailable.body",
    "screens.daily.disconnected.unauthorised.body",
    "screens.daily.disconnected.unavailable.button",
    "screens.daily.disconnected.unauthorised.button",
  ]);

  const copy = useMemo(() => {
    if (isUnavailable) {
      return {
        title: t["screens.daily.disconnected.unavailable.title"],
        body: t["screens.daily.disconnected.unavailable.body"],
      };
    }

    return {
      title: t["screens.daily.disconnected.unauthorised.title"],
      body: t["screens.daily.disconnected.unauthorised.body"],
    };
  }, [isUnavailable, t]);

  const button = useMemo(() => {
    return {
      onPress: () => {
        // Disabled
      },
      disabled: true,
      label: isUnavailable
        ? t["screens.daily.disconnected.unavailable.button"]
        : t["screens.daily.disconnected.unauthorised.button"],
    };
  }, [isUnavailable, t]);

  const wrapperStyle = useMemo((): ViewStyle => ({ justifyContent: "flex-end", width }), [width]);

  // If we think health data is available but don't actually have any we show this panel
  // Because in a real-world scenario there would always be at least some data if there's no issues
  // However this isn't the case in detox, so we can skip this panel only if we're available but have no data
  if (!isUnavailable && (!isUnauthorised || DETOX_ENABLED)) {
    return null;
  }

  return (
    <View style={wrapperStyle}>
      <InfoPanel
        containerOnPress={onPress}
        markdown={copy.body}
        forceShowButton={true}
        hideButtonIcon={true}
        type="warning"
        titleMarkdown={copy.title}
        button={button}
        showIcon={true}
      />
    </View>
  );
};

export default memo(HealthPermissionPanel);
