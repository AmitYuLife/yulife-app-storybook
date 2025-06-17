import { TextTemplate } from "@atoms";
import EnvelopeSvg from "@atoms/envelope/envelope-svg";
import { useTranslation } from "@hooks";
import { Style } from "@styles";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { NOTIFICATIONS_EMPTY } from "@ids";

const NotificationsEmpty = () => {
  const t = useTranslation(["screens.notifications.empty"]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.icon}>
        <EnvelopeSvg size={Style.adjust(140)} />
      </View>
      <TextTemplate textAlign="center" type="b2" testID={NOTIFICATIONS_EMPTY}>
        {t["screens.notifications.empty"]}
      </TextTemplate>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: Style.adjust(20),
    marginTop: Style.adjust(100),
  },
  icon: {
    marginBottom: Style.adjust(20),
  },
});

export default memo(NotificationsEmpty);
