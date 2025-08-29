import * as React from "react";
import { View } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { TextTemplate } from "@atoms";
import { Pressable } from "@molecules";
import { useTranslation } from "@hooks";

type Props = {
  selectedStore: string;
  onHistoryPress: () => void;
  onChangeStorePress: () => void;
};

const _HistoryAndStoreLocation = ({ selectedStore, onChangeStorePress, onHistoryPress }: Props) => {
  const t = useTranslation([
    "screens.rewards.list.rewards",
    "screens.rewards.list.history",
    "screens.rewards.list.store",
  ]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.linkGroup}>
        {!selectedStore ? null : (
          <>
            <Pressable delay={1000} hitSlop={5} onPress={onChangeStorePress}>
              <TextTemplate type="b2" color={Colours.primary.p600}>
                {`${t["screens.rewards.list.store"]}: ${selectedStore}`}
              </TextTemplate>
            </Pressable>
            <View style={styles.divider} />
          </>
        )}
        <Pressable delay={1000} hitSlop={5} onPress={onHistoryPress}>
          <TextTemplate type="b2" color={Colours.primary.p600}>
            {t["screens.rewards.list.history"]}
          </TextTemplate>
        </Pressable>
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
    justifyContent: "center",
    marginTop: Style.adjust(8),
    marginBottom: Style.adjust(16),
  },
  linkGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginStart: Style.adjust(8),
  },
  divider: {
    backgroundColor: Colours.divider,
    height: Style.adjust(16),
    width: 1,
    marginHorizontal: Style.adjust(8),
  },
});
