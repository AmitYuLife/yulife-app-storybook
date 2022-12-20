import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Colours, Style } from "@styles";
import { TextTemplate } from "@atoms";
import { PressableWithDelay } from "@molecules";
import { useTranslation } from "@hooks";

type Props = {
  selectedStore: string;
  onHistoryPress: () => void;
  onChangeStorePress: () => void;
};

const _HistoryAndStoreLocation = ({ selectedStore, onChangeStorePress, onHistoryPress }: Props) => {
  const t = useTranslation(["screens.rewards.list.rewards", "screens.rewards.list.history"]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.linkGroupWrapper}>
        <TextTemplate type="b2">{t["screens.rewards.list.rewards"]}</TextTemplate>
      </View>
      <View style={styles.linkGroup}>
        <PressableWithDelay style={styles.history} hitSlop={5} onPress={onHistoryPress}>
          <TextTemplate type="b2" color={Colours.primary.p600}>
            {t["screens.rewards.list.history"]}
          </TextTemplate>
        </PressableWithDelay>
        <View style={styles.divider} />
        <PressableWithDelay style={styles.changeStore} hitSlop={5} onPress={onChangeStorePress}>
          <TextTemplate type="b2" color={Colours.primary.p600}>
            {selectedStore}
          </TextTemplate>
        </PressableWithDelay>
      </View>
    </View>
  );
};

const HistoryAndStoreLocation = React.memo(_HistoryAndStoreLocation);
export default HistoryAndStoreLocation;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: Style.adjust(16),
    marginTop: Style.adjust(8),
    marginBottom: Style.adjust(16),
  },
  linkGroupWrapper: { flexDirection: "row" },
  linkGroup: { flexDirection: "row", alignItems: "center" },
  divider: {
    backgroundColor: Colours.divider,
    height: Style.adjust(16),
    width: 1,
  },
  history: { marginRight: Style.adjust(8) },
  changeStore: { marginLeft: Style.adjust(8) },
});
