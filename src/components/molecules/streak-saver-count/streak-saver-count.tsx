import { Box, TextTemplate } from "@atoms";
import { StreakSaverIcon } from "@atoms/icon/streak-saver-icon";
import { t } from "@locale";
import { Style, StyleSheet } from "@styles";
import { memo } from "react";
import { View } from "react-native";

interface IStreakSaverCountProps {
  count: number;
}

const StreakSaverCount = ({ count }: IStreakSaverCountProps) => {
  return (
    <View style={styles.wrapper}>
      <Box flexDirection="row" style={styles.stack} gap={6}>
        <StreakSaverIcon />
        <TextTemplate type="b2b">{t("molecules.inventory_item.quantity", { quantity: count })}</TextTemplate>
      </Box>
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
