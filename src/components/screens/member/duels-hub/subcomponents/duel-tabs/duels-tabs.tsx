import React, { memo, useMemo } from "react";
import { View } from "react-native";
import { BottomShadow } from "@atoms";
import { t } from "@locale";
import { Tabs } from "@organisms";
import { Style, StyleSheet } from "@styles";
import { ACTIVE_TAB, COMPLETED_TAB } from "@ids";

interface IProps {
  onPress: (index: number) => void;
  activePageIndex: number;
}

const DuelTabs = ({ onPress, activePageIndex }: IProps) => {
  const list = useMemo(() => {
    return [
      {
        name: t("modals.duels.hub.active_tab"),
        onPress: () => {
          onPress(0);
        },
        testID: ACTIVE_TAB,
      },
      {
        name: t("modals.duels.hub.completed_tab"),
        onPress: () => {
          onPress(1);
        },
        testID: COMPLETED_TAB,
      },
    ];
  }, [onPress]);

  return (
    <View style={styles.wrapper}>
      <Tabs list={list} defaultTab={activePageIndex} />
      <BottomShadow />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(4),
  },
});

export default memo(DuelTabs);
