import { TextTemplate } from "@atoms/index";
import React, { FC } from "react";
import { View } from "react-native";
import moment from "moment";
import { Switch, TouchableOpacityWithDelay } from "@molecules";
import { INotificationsSectionItem } from "../settings.screen";
import styles from "./item.styles";
import { Colours } from "@styles";
import { SETTINGS_NAME, SETTINGS_DESC, SETTINGS_SWITCH, SETTINGS_REMINDER_TIME } from "@ids";
import { t } from "@locale";
import { noop } from "@utils";
import { useTheme } from "@app/modules/themes/hooks/useTheme";
import { isNumber } from "lodash";

type Props = Pick<
  INotificationsSectionItem,
  | "id"
  | "isActive"
  | "name"
  | "description"
  | "onSwitchPress"
  | "onTimePress"
  | "alertTimestamp"
  | "minutesFromStartOfDay"
> & {
  testID?: string;
  disabled?: boolean;
};

const NotificationsItem: FC<Props> = ({
  isActive,
  name,
  description,
  onSwitchPress,
  onTimePress,
  alertTimestamp,
  minutesFromStartOfDay,
  testID,
  disabled,
}) => {
  const { theme } = useTheme();

  const showTime = alertTimestamp || isNumber(minutesFromStartOfDay);

  return (
    <View style={[styles.wrapper, disabled ? styles.disabled : undefined]} testID={testID}>
      {showTime ? <View style={styles.seperator} /> : null}
      <View style={styles.container}>
        <View style={styles.nameWrapper}>
          <TextTemplate type="b2b" testID={SETTINGS_NAME(name)}>
            {name}
          </TextTemplate>
          <TextTemplate type="l2" testID={SETTINGS_DESC(description)}>
            {description}
          </TextTemplate>
        </View>
        <Switch onPress={disabled ? noop : onSwitchPress} value={isActive} testID={SETTINGS_SWITCH(name, isActive)} />
      </View>
      {!showTime ? null : (
        <>
          <View style={styles.reminderTime}>
            <TextTemplate type="b2b">{t("screens.settings.push_notifications.reminder_time")}</TextTemplate>
          </View>
          <TouchableOpacityWithDelay
            onPress={onTimePress ?? noop}
            style={styles.timer}
            disabled={!isActive}
            testID={SETTINGS_REMINDER_TIME(name)}
          >
            <TextTemplate type="b2" color={isActive ? theme.colors.primary.p600 : Colours.neutral.n800}>
              {isNumber(minutesFromStartOfDay)
                ? moment.utc().startOf("day").add(minutesFromStartOfDay, "minutes").format(t("format.time_short"))
                : moment.utc(alertTimestamp).format(t("format.time_short")) || ""}
            </TextTemplate>
          </TouchableOpacityWithDelay>
        </>
      )}
    </View>
  );
};

export default NotificationsItem;
