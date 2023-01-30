import { TextTemplate } from "@atoms";
import { useTranslation } from "@hooks";
import { Style } from "@styles";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

const NotificationFooter = () => {
  const t = useTranslation(["screens.notifications.deleted_disclaimer"]);

  return (
    <View style={styles.wrapper}>
      <TextTemplate type="b2">{t["screens.notifications.deleted_disclaimer"]}</TextTemplate>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: Style.adjust(12),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(NotificationFooter);
