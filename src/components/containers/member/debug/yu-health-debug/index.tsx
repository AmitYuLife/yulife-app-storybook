import React, { memo, useCallback, useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import { GenericHeadingAbsolute, GenericHeadingPad, Tabs } from "@organisms";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { Style, StyleSheet } from "@styles";
import YuHealthInfo from "./yu-health-info";
import YuHealthActivity from "./yu-health-activity";
import YuHealthChallenges from "./yu-health-challenges";

const YuHealthDebug = () => {
  const [activeTab, setActiveTab] = useState<string>("YuHealth");

  const onBack = useCallback(() => {
    Navigation.popToRoot(ROUTES.debug);
  }, []);

  const list = useMemo(() => {
    return [
      {
        name: "YuHealth",
        onPress: () => {
          setActiveTab("YuHealth");
        },
      },
      {
        name: "Activity",
        onPress: () => {
          setActiveTab("Activity");
        },
      },
      {
        name: "Challenges",
        onPress: () => {
          setActiveTab("Challenges");
        },
      },
    ];
  }, []);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <Tabs list={list} />
      <ScrollView>
        {activeTab === "YuHealth" ? <YuHealthInfo /> : null}
        {activeTab === "Activity" ? <YuHealthActivity /> : null}
        {activeTab === "Challenges" ? <YuHealthChallenges /> : null}
      </ScrollView>
      <GenericHeadingAbsolute heading={"YuHealth"} onLeftIconPress={onBack} />
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

export default memo(YuHealthDebug);
