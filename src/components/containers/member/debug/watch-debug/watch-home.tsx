import { memo } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button } from "@components/molecules";
import { sendMessage } from "@yu-life/react-native-yu-watch";
import { YuWatchAction } from "@redux/yu-watch/yu-watch.types";

const WatchHome = () => {
  return (
    <>
      <View style={styles.container}>
        <Button
          translatedLabel="Ping watch"
          onPress={async () => {
            const response = await sendMessage({ type: YuWatchAction.Ping });
            Alert.alert(JSON.stringify(response));
          }}
        />
        <Button
          translatedLabel="Refresh challenges"
          onPress={() => {
            sendMessage({ type: YuWatchAction.RefreshChallenges });
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  item: {
    marginBottom: 15,
  },
  splitContainer: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default memo(WatchHome);
