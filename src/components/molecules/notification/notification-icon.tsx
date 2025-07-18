import React, { memo } from "react";
import { NotificationIconActive } from "./active";
import { NotificationIconInactive } from "./inactive";
import { View } from "react-native";
import { NotificationIconBadge } from "./badge";
import { NOTIF_ICON_BADGE } from "@ids";

interface Props {
  badgeCount?: number;
}

function NotificationIcon({ badgeCount }: Props) {
  const CurrentIcon = badgeCount > 0 ? NotificationIconActive : NotificationIconInactive;

  return (
    <View testID={NOTIF_ICON_BADGE(badgeCount > 0, badgeCount)}>
      <CurrentIcon />
      <NotificationIconBadge badgeCount={badgeCount} />
    </View>
  );
}

export default memo(NotificationIcon);
