import { TextTemplate } from "@atoms";
import EnvelopeSvg from "@atoms/envelope/envelope-svg";
import { useTranslation } from "@hooks";
import { Style } from "@styles";
import React from "react";
import { StyleSheet, View } from "react-native";

export const NotificationsEmpty = () => {
  const t = useTranslation(["screens.notifications.empty"]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.icon}>
        <EnvelopeSvg size={Style.adjust(140)} />
      </View>
      <TextTemplate type="b2">{t["screens.notifications.empty"]}</TextTemplate>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: Style.adjust(100),
  },
  icon: {
    marginBottom: Style.adjust(20),
  },
});
