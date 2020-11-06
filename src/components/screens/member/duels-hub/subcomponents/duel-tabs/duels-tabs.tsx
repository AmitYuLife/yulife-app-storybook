import React from "react";
import { View } from "react-native";
import styles from "./duels-tabs.styles";
import { DuelHeading } from "../index";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { DUELS_HUB } from "@ids";

export type DuelHubTab = "active" | "past";

interface IProps {
  onPress: (tab: DuelHubTab) => () => void;
  activeTab: DuelHubTab;
}

const DuelTab = ({ onPress, activeTab }: IProps) => {
  return (
    <View style={styles.wrapper} testID={DUELS_HUB}>
      <TouchableOpacityWithDelay disabled={activeTab === "active"} style={styles.tab} onPress={onPress("active")}>
        <DuelHeading inactive={activeTab !== "active"} label="Active Duels" />
      </TouchableOpacityWithDelay>
      <TouchableOpacityWithDelay disabled={activeTab === "past"} style={styles.tab} onPress={onPress("past")}>
        <DuelHeading inactive={activeTab !== "past"} label="Past Duels" />
      </TouchableOpacityWithDelay>
    </View>
  );
};

export default DuelTab;
