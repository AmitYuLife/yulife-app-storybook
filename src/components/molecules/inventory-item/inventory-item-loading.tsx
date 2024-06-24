import { SkeletonLoading, Stack } from "@atoms";
import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { inventoryItemStyles } from "./inventory-item";
import { Style } from "@styles";

const InventoryItemLoading = () => {
  return (
    <Stack style={inventoryItemStyles.container} gap={Style.adjust(12)} direction="row" alignItems="center">
      <View>
        <SkeletonLoading style={styles.icon} />
      </View>
      <View style={inventoryItemStyles.textContainer}>
        <SkeletonLoading style={styles.text} />
      </View>
      <View>
        <SkeletonLoading style={styles.quantity} />
      </View>
    </Stack>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: Style.adjust(26),
    height: Style.adjust(26),
    borderRadius: Style.adjust(100),
  },
  text: {
    width: "90%",
    height: Style.adjust(26),
  },
  quantity: {
    width: Style.adjust(26),
    height: Style.adjust(26),
  },
});

export default memo(InventoryItemLoading);
