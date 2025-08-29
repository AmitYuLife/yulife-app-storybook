import React, { memo, useCallback, useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import { GenericHeadingAbsolute, GenericHeadingPad, Tabs } from "@organisms";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { Style, StyleSheet } from "@styles";
import WatchHome from "./watch-home";
import { useYuWatch } from "@hooks";

const WatchDebug = () => {
  useYuWatch();
  const [activeTab, setActiveTab] = useState<string>("Watch");

  const onBack = useCallback(() => {
    Navigation.popToRoot(ROUTES.debug);
  }, []);

  const list = useMemo(() => {
    return [
      {
        name: "Watch",
        onPress: () => {
          setActiveTab("Watch");
        },
      },
    ];
  }, []);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <Tabs list={list} />
      <ScrollView>{activeTab === "Watch" ? <WatchHome /> : null}</ScrollView>
      <GenericHeadingAbsolute heading={"YuWatch"} onLeftIconPress={onBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    padding: Style.adjust(16),
  },
});

export default memo(WatchDebug);
