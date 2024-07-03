import { usePressEffect } from "../../../hooks/usePressEffect";
import { Image, Stack, TextTemplate } from "@atoms";
import { t } from "@locale";
import { Style } from "@styles";
import { memo, useMemo } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const PLACEHOLDER_IMAGE = require("./item-placeholder.webp");

interface IInventoryItemProps {
  isActive: boolean;
  name: string;
  onPress?: () => void;
  quantity: number;
  isDisabled?: boolean;
  iconUri?: string;
}

const InventoryItem = ({ isActive, iconUri, onPress, isDisabled, name, quantity }: IInventoryItemProps) => {
  const { animatedStyle, onPressIn, onPressOut } = usePressEffect({
    pressedTranslation: 1,
    duration: 175,
    pressedScale: 0.97,
    isActive,
  });

  const containerStyles = useMemo(() => {
    return StyleSheet.compose(styles.container, isActive ? styles.containerSelected : {});
  }, [isActive]);

  const iconSource = useMemo(() => {
    return iconUri ? { uri: iconUri } : PLACEHOLDER_IMAGE;
  }, [iconUri]);

  return (
    <AnimatedPressable
      onPressIn={onPressIn}
      style={animatedStyle}
      onPressOut={onPressOut}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Stack style={containerStyles} gap={Style.adjust(12)} direction="row" alignItems="center">
        <View style={styles.iconContainer}>
          <Image source={iconSource} width={Style.adjust(26)} style={styles.icon} suppressLoadingUi={true} />
        </View>
        <View style={styles.textContainer}>
          <TextTemplate type="b2">{name}</TextTemplate>
        </View>
        <View>
          <TextTemplate type="b2b">
            {quantity ? `${t("molecules.inventory_item.quantity", { quantity })}` : ""}
          </TextTemplate>
        </View>
      </Stack>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#D9D9D7",
    borderRadius: Style.adjust(8),
    marginBottom: Style.adjust(12),
    padding: Style.adjust(16),
    backgroundColor: "white",
  },
  containerSelected: {
    borderColor: "#956AFF",
    backgroundColor: "#F4F0FF",
  },
  icon: {
    aspectRatio: 1,
  },
  iconContainer: {
    width: Style.adjust(26),
    height: Style.adjust(26),
  },
  textContainer: {
    width: "100%",
    flex: 1,
  },
});

export const inventoryItemStyles = styles;

export default memo(InventoryItem);
