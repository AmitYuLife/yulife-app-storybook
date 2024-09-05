import { Stack, TextTemplate } from "@atoms";
import { StreakSaverIcon } from "@atoms/icon/streak-saver-icon";
import { t } from "@locale";
import { Style } from "@styles";
import { memo } from "react";
import { StyleSheet, View } from "react-native";

interface IStreakSaverCountProps {
  count: number;
}

const StreakSaverCount = ({ count }: IStreakSaverCountProps) => {
  return (
    <View style={styles.wrapper}>
      <Stack direction="row" style={styles.stack} gap={Style.adjust(6)}>
        <StreakSaverIcon />
        <TextTemplate type="b2b">{t("molecules.inventory_item.quantity", { quantity: count })}</TextTemplate>
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
  stack: {
    padding: Style.adjust(6),
  },
});

export default memo(StreakSaverCount);
