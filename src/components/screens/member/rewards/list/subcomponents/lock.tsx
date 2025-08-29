import * as React from "react";
import { View } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { LockIcon } from "@atoms/icon/lock-icon";

type Props = {
  testID?: string;
};

const _LockedReward = ({ testID }: Props) => (
  <View testID={testID} style={styles.wrapper}>
    <View style={styles.inner}>
      <View style={styles.lock}>
        <LockIcon size={14} />
      </View>
    </View>
  </View>
);

const LockedReward = React.memo(_LockedReward);
export default LockedReward;

const styles = StyleSheet.create({
  wrapper: { position: "absolute", left: Style.adjust(8), top: Style.adjust(8) },
  inner: { flex: 1, justifyContent: "center", alignItems: "center" },
  lock: { backgroundColor: Colours.neutral.white, borderRadius: 99, padding: Style.adjust(6) },
});
