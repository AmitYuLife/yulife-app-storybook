import React from "react";
import { View } from "react-native";
import styles from "./duels-tabs.styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { DUELS_HUB } from "@ids";
import { Text } from "@atoms";
import { t } from "@locale";

interface IProps {
  onPress: (index: number) => () => void;
  activePageIndex: number;
}

const DuelTab = ({ onPress, activePageIndex }: IProps) => {
  const isActive = activePageIndex === 0;
  const isCompleted = activePageIndex === 1;
  return (
    <View style={styles.wrapper} testID={DUELS_HUB}>
      <TouchableOpacityWithDelay disabled={activePageIndex === 0} style={styles.tab} onPress={onPress(0)}>
        <Text style={[styles.heading, isActive ? styles.pinkText : {}]} bold={true}>
          {t("modals.duels.hub.active_tab")}
        </Text>
      </TouchableOpacityWithDelay>
      <TouchableOpacityWithDelay disabled={activePageIndex === 1} style={styles.tab} onPress={onPress(1)}>
        <Text style={[styles.heading, isCompleted ? styles.pinkText : {}]} bold={true}>
          {t("modals.duels.hub.completed_tab")}
        </Text>
      </TouchableOpacityWithDelay>
    </View>
  );
};

export default DuelTab;
