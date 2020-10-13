import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";
import { DuelsIcon } from "../assets/duels-svg";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";

export function DuelsButton() {
  return (
    <TouchableOpacityWithDelay
      style={styles.wrapper}
      onPress={async () => {
        await Navigation.push(ROUTES.leaderboards, {
          component: {
            id: ROUTES.duelsHub,
            name: ROUTES.duelsHub,
          },
        });
      }}
    >
      <DuelsIcon />
    </TouchableOpacityWithDelay>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    right: 0,
    top: -20,
    position: "absolute",
    paddingRight: Style.adjust(10),
    paddingTop: Style.adjust(16),
    paddingVertical: Style.adjust(2),
    paddingBottom: Style.adjust(16),
    marginLeft: 10,
  } as ViewStyle,
});
