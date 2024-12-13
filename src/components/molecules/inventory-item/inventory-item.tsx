import { usePressEffect } from "../../../hooks/usePressEffect";
import { Image, Box, TextTemplate } from "@atoms";
import { AlarmClockIcon } from "@atoms/icon/alarm-clock-icon";
import { t } from "@locale";
import { Style } from "@styles";
import { memo, useCallback, useMemo, useRef, ReactNode } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { showTooltipPopupRelativeToView } from "@organisms/tooltip-popup/tooltip-popup.helper";
import { MODALS } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import InventoryItemPopover from "./inventory-item-popover";
import { useTrack } from "@hooks";
import { ACTIVATED_INVENTORY_ITEM, INVENTORY_ITEM } from "@ids";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const PLACEHOLDER_IMAGE = require("./item-placeholder.webp");

interface IInventoryItemProps {
  isActive: boolean;
  name: string;
  onPress?: () => void;
  quantity: number;
  activeUntil?: string;
  isDisabled?: boolean;
  iconUri?: string;
  icon?: ReactNode;
}

const InventoryItem = ({
  isActive,
  iconUri,
  icon,
  onPress: propOnPress,
  activeUntil,
  isDisabled,
  name,
  quantity,
}: IInventoryItemProps) => {
  const track = useTrack();

  const { animatedStyle, onPressIn, onPressOut } = usePressEffect({
    pressedTranslation: 1,
    duration: 175,
    pressedScale: 0.97,
    isActive,
  });

  const containerStyles = useMemo(() => {
    return [styles.container, isActive ? styles.containerSelected : {}, activeUntil ? styles.containerActivated : {}];
  }, [activeUntil, isActive]);

  const iconSource = useMemo(() => {
    return iconUri ? { uri: iconUri } : PLACEHOLDER_IMAGE;
  }, [iconUri]);

  const containerRef = useRef();

  const openPopUp = useCallback(() => {
    track("information_viewed", { name, type: "consumable" });
    showTooltipPopupRelativeToView({
      viewRef: containerRef,
      beakPosition: "bottomRight",
      style: {
        maxWidth: Style.DEVICE_WIDTH / 1.6,
      },
      children: (
        <InventoryItemPopover
          onClose={() => Navigation.dismissOverlay(MODALS.blurredOverlay)}
          activeUntil={activeUntil}
          name={name}
        />
      ),
    });
  }, [activeUntil, name, track]);

  const onPress = useCallback(() => {
    if (activeUntil) {
      openPopUp();
      return;
    }

    propOnPress?.();
  }, [activeUntil, openPopUp, propOnPress]);

  return (
    <AnimatedPressable
      onPressIn={onPressIn}
      style={animatedStyle}
      onPressOut={onPressOut}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Box style={containerStyles} gap={12} flexDirection="row" alignItems="center">
        {icon ? (
          icon
        ) : (
          <View style={styles.iconContainer}>
            <Image source={iconSource} width={Style.adjust(26)} style={styles.icon} suppressLoadingUi={true} />
          </View>
        )}
        <View style={styles.textContainer} testID={INVENTORY_ITEM(name)}>
          <TextTemplate type="b2" numberOfLines={1}>
            {name}
          </TextTemplate>
        </View>
        <Box flexDirection="row" center={true} gap={6} style={styles.rightContainer}>
          {activeUntil ? (
            <View style={styles.activeContainer}>
              <View style={styles.activeTextContainer}>
                <TextTemplate type="l2b" color="#E30D76" testID={ACTIVATED_INVENTORY_ITEM}>
                  {t("molecules.inventory_item.activated")}
                </TextTemplate>
              </View>
              <View style={styles.activeClockContainer} ref={containerRef}>
                <AlarmClockIcon />
              </View>
            </View>
          ) : null}
          {quantity > 0 ? (
            <TextTemplate type="b2b">{t("molecules.inventory_item.quantity", { quantity })}</TextTemplate>
          ) : null}
        </Box>
      </Box>
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
  containerActivated: {
    borderColor: "#F7B7D6",
  },
  icon: {
    aspectRatio: 1,
  },
  iconContainer: {
    width: Style.adjust(26),
    height: Style.adjust(26),
  },

  rightContainer: {
    minHeight: Style.adjust(35),
  },
  textContainer: {
    width: "100%",
    flex: 1,
  },
  activeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  activeTextContainer: {
    paddingHorizontal: Style.adjust(10),
    paddingRight: Style.adjust(22),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCE7F1",
    borderRadius: Style.adjust(8),
    height: Style.adjust(22),
  },
  activeClockContainer: {
    height: Style.adjust(28),
    width: Style.adjust(28),
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Style.adjust(100),
    borderColor: "white",
    backgroundColor: "#E30D76",
    marginLeft: -Style.adjust(16),
    borderWidth: Style.adjust(2),
  },
});

export const inventoryItemStyles = styles;

export default memo(InventoryItem);
