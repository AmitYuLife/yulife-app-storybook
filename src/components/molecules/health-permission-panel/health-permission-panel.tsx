import React, { memo, useMemo } from "react";
import { View, ViewStyle } from "react-native";
import { InfoPanel } from "@molecules";
import { useTranslation } from "@hooks";

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
    "screens.daily.disconnected.button",
  ]);

  const copy = useMemo(() => {
    if (isUnavailable) {
      return {
        title: t["screens.daily.disconnected.unavailable.title"],
        body: "Please check your permissions so we can reward you for your activity.",
      };
    }

    if (isUnauthorised) {
      return {
        title: t["screens.daily.disconnected.unauthorised.title"],
        body: "We haven't received any health data today! Make sure your permissions are up to date.",
      };
    }
  }, [isUnauthorised, isUnavailable, t]);

  const button = useMemo(() => {
    return {
      label: t["screens.daily.disconnected.button"],
      onPress: () => {
        // Disabled
      },
      disabled: true,
    };
  }, [t]);

  const wrapperStyle = useMemo((): ViewStyle => ({ justifyContent: "flex-end", width }), [width]);

  return (
    <View style={wrapperStyle}>
      <InfoPanel
        containerOnPress={onPress}
        markdown={copy.body}
        forceShowButton={true}
        type="warning"
        titleMarkdown={copy.title}
        button={button}
        showIcon={true}
      />
    </View>
  );
};

export default memo(HealthPermissionPanel);
