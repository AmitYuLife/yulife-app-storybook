import React, { memo } from "react";
import { NotificationIconActive } from "./active";
import { NotificationIconInactive } from "./inactive";
import { View } from "react-native";
import { NotificationIconBadge } from "./badge";

interface Props {
  badgeCount?: number;
}

function NotificationIcon({ badgeCount }: Props) {
  const CurrentIcon = badgeCount > 0 ? NotificationIconActive : NotificationIconInactive;

  return (
    <View>
      <CurrentIcon />
      <NotificationIconBadge badgeCount={badgeCount} />
    </View>
  );
}

export default memo(NotificationIcon);
