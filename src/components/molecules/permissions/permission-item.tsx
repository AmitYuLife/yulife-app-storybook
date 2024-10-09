import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import React, { memo, useCallback, useMemo, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { RadioIcon } from "@atoms/icon/radio-icon";
import { ExclamationIcon } from "@atoms/icon/exclamation-icon";
import { InfoIcon } from "@atoms/icon/info-icon";
import { PermissionStatus } from "@yu-life/react-native-fitkit";
import { STATUS_ICON } from "@ids";
import Pressable from "../pressable/pressable";
import { HealthPermissionStatus } from "@yu-life/react-native-yu-health";

interface PermissionItemProps {
  title: string;
  status: PermissionStatus | HealthPermissionStatus;
  loading: boolean;
  description: string;
  requirement?: string;
  onRequest?: () => void;
  showInfoPopup: (viewRef: React.MutableRefObject<View>, markdown: string) => void;
  infoMessage: string;
  errorMessage: string;
}

const PermissionItem = ({
  infoMessage,
  errorMessage,
  title,
  status,
  loading,
  onRequest,
  description,
  requirement,
  showInfoPopup,
}: PermissionItemProps) => {
  const { color, requirementColor } = useMemo(
    () =>
      status === "not_supported" || status === HealthPermissionStatus.unsupported
        ? { color: Colours.neutral.n500, requirementColor: Colours.neutral.n500 }
        : { color: Colours.neutral.n800, requirementColor: Colours.primary.p200 },
    [status]
  );

  const permissionRef = useRef<View>();
  const onPress = useCallback(() => {
    // Fitkit
    if (status === "not_determined") {
      showInfoPopup(permissionRef, infoMessage);
      return;
    }

    // YuHealth
    if (status === HealthPermissionStatus.notDetermined) {
      showInfoPopup(permissionRef, infoMessage);
      return;
    }

    // Fitkit
    if (status === "denied" || status === "not_asked") {
      showInfoPopup(permissionRef, errorMessage);
      return;
    }

    // YuHealth
    if (status === HealthPermissionStatus.denied) {
      showInfoPopup(permissionRef, errorMessage);
      return;
    }

    onRequest?.();
  }, [status, onRequest, showInfoPopup, infoMessage, errorMessage]);

  return (
    <Pressable onPress={onPress} delay={1000}>
      <View ref={permissionRef} style={styles.permissionItem} testID={STATUS_ICON(status)}>
        <View style={styles.textBox}>
          <TextTemplate color={color} type={"b2"}>
            {title}
          </TextTemplate>
          {!requirement ? null : (
            <TextTemplate color={requirementColor} type={"l2"}>
              {requirement}
            </TextTemplate>
          )}
          <TextTemplate color={color} type={"l2"}>
            {description}
          </TextTemplate>
        </View>
        {getStatusIcon(status, loading)}
      </View>
    </Pressable>
  );
};

const getStatusIcon = (status: PermissionStatus | HealthPermissionStatus, loading: boolean) => {
  if (status === "not_supported" || status === HealthPermissionStatus.unsupported) {
    return <></>;
  }

  if (loading) {
    return <InfoIcon colour={Colours.neutral.n200} />;
  }

  switch (status) {
    case "denied":
    case "not_asked":
    case HealthPermissionStatus.denied:
    case HealthPermissionStatus.notAsked:
      return <ExclamationIcon />;
    case HealthPermissionStatus.notDetermined:
    case "not_determined":
      return <InfoIcon />;
    case HealthPermissionStatus.granted:
    case "authorised":
      return <RadioIcon checked={true} width={Style.adjust(26)} height={Style.adjust(26)} />;
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  permissionItem: {
    width: Style.DEVICE_WIDTH,
    marginBottom: Style.adjust(16),
    paddingHorizontal: Style.adjust(24),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  textBox: {
    maxWidth: Style.DEVICE_WIDTH * 0.7,
  },
});

export default memo(PermissionItem);
