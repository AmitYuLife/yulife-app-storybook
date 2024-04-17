import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { BottomShadow } from "@atoms";
import { t } from "@locale";
import { Tabs } from "@organisms";
import { Style } from "@styles";

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
      },
      {
        name: t("modals.duels.hub.completed_tab"),
        onPress: () => {
          onPress(1);
        },
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
