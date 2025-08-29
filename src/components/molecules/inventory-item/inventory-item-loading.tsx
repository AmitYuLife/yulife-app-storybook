import { SkeletonLoading, Box } from "@atoms";
import { memo } from "react";
import { View } from "react-native";
import { inventoryItemStyles } from "./inventory-item";
import { Style, StyleSheet } from "@styles";

const InventoryItemLoading = () => {
  return (
    <Box style={inventoryItemStyles.container} gap={12} flexDirection="row" alignItems="center">
      <View>
        <SkeletonLoading style={styles.icon} />
      </View>
      <View style={inventoryItemStyles.textContainer}>
        <SkeletonLoading style={styles.text} />
      </View>
      <View>
        <SkeletonLoading style={styles.quantity} />
      </View>
    </Box>
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
