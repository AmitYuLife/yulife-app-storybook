import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { GenericHeadingAbsolute, GenericHeadingPad, Tabs } from "@organisms";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { Style } from "@styles";
import WatchHome from "./watch-home";
import { addMessageReplyListener } from "@yu-life/react-native-yu-watch";
import { getToken } from "@services/storage";
import { getCurrentLocale, region } from "@locale";
import Config from "react-native-config";
import { getUserDataStart } from "@redux/user/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserId } from "@redux/user/user.selectors";

const WatchDebug = () => {
  const [activeTab, setActiveTab] = useState<string>("Watch");
  const dispatch = useDispatch();
  const currentUserId = useSelector(getCurrentUserId);

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

  useEffect(() => {
    const authTokenListener = addMessageReplyListener("GetAuthToken", async (_, reply) => {
      const token = await getToken();
      const url = region.getRegionUri();

      const response = {
        token,
        api_url: `${url}/graphql`,
        user_id: currentUserId,
        client_token: Config.YU_CLIENT_TOKEN,
        mixpanel_token: region.getConfig("mixpanelKey"),
        locale: getCurrentLocale(),
      };

      Alert.alert(
        "GetAuthToken",
        `Get auth token called. Replying with: \n${JSON.stringify({ ...response, token: "hidden" })}`
      );
      reply(response);
    });

    const appDataListener = addMessageReplyListener("RefetchAppData", (replyData) => {
      Alert.alert("RefetchAppData", `RefetchAppData called with payload: \n${JSON.stringify(replyData)}`);
      if (!Array.isArray(replyData?.dataTypes)) {
        return;
      }

      dispatch(getUserDataStart({ types: replyData?.dataTypes }));
    });

    return () => {
      authTokenListener.remove();
      appDataListener.remove();
    };
  }, [dispatch]);

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
