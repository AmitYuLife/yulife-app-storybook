import { Box, TextTemplate } from "@atoms";
import { AlarmClockIcon } from "@atoms/icon/alarm-clock-icon";
import { useTrack } from "@hooks";
import { ACTIVATED_INVENTORY_ITEM, INVENTORY_ITEM } from "@ids";
import { t } from "@locale";
import { MODALS } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { showTooltipPopupRelativeToView } from "@organisms/tooltip-popup/tooltip-popup.helper";
import { Colours, Style, StyleSheet } from "@styles";
import { Image } from "expo-image";
import { memo, ReactNode, useCallback, useMemo, useRef } from "react";
import { Platform, Pressable, View } from "react-native";
import Animated from "react-native-reanimated";
import { usePressEffect } from "../../../hooks/usePressEffect";
import InventoryItemPopover from "./inventory-item-popover";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const PLACEHOLDER_IMAGE = require("./item-placeholder.webp");

interface IInventoryItemProps {
  isActive: boolean;
  name: string;
  onPress?: () => void;
  quantity: number;
  activeUntil?: string;
  disabledUntil?: string;
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
  disabledUntil,
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
    return [
      styles.container,
      isActive ? styles.containerSelected : {},
      activeUntil ? styles.containerActivated : {},
      disabledUntil || isDisabled ? styles.containerDisabled : {},
    ];
  }, [activeUntil, disabledUntil, isActive, isDisabled]);

  const iconSource = useMemo(() => {
    return iconUri ? { uri: iconUri } : PLACEHOLDER_IMAGE;
  }, [iconUri]);

  const iconStyles = useMemo(() => {
    return [styles.icon, disabledUntil || isDisabled ? styles.disabledIcon : {}];
  }, [disabledUntil, isDisabled]);

  const textColor = useMemo(() => {
    if (disabledUntil || isDisabled) {
      return Colours.neutral.n250;
    }

    return "#5C5757";
  }, [disabledUntil, isDisabled]);

  const containerRef = useRef<View>(null);

  const openPopUp = useCallback(() => {
    track("information_viewed", { name, type: "consumable" });
    showTooltipPopupRelativeToView({
      viewRef: containerRef,
      beakPosition: "bottomRight",
      style: {
        maxWidth: Style.DEVICE_WIDTH / 1.6,
      },
      withModal: Platform.select({ ios: false, android: true }),
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
      disabled={isDisabled || !!disabledUntil}
    >
      <Box style={containerStyles} gap={12} flexDirection="row" alignItems="center">
        {icon ? (
          icon
        ) : (
          <View style={styles.iconContainer}>
            <Image source={iconSource} style={iconStyles} />
          </View>
        )}
        <View style={styles.textContainer} testID={INVENTORY_ITEM(name)}>
          <TextTemplate color={textColor} type="b2" numberOfLines={1}>
            {name}
          </TextTemplate>
        </View>
        <Box flexDirection="row" center={true} gap={6} style={styles.rightContainer}>
          {activeUntil ? (
            <View style={styles.activeContainer}>
              <View style={styles.activeTextContainer}>
                <TextTemplate type="l2b" color={Colours.primary.p600} testID={ACTIVATED_INVENTORY_ITEM}>
                  {t("molecules.inventory_item.activated")}
                </TextTemplate>
              </View>
              <View style={styles.activeClockContainer} ref={containerRef}>
                <AlarmClockIcon />
              </View>
            </View>
          ) : null}
          {quantity > 0 ? (
            <TextTemplate color={textColor} type="b2b">
              {t("molecules.inventory_item.quantity", { quantity })}
            </TextTemplate>
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
  containerDisabled: {
    borderColor: Colours.neutral.n150,
  },
  icon: {
    aspectRatio: 1,
    width: Style.adjust(26),
  },
  disabledIcon: {
    opacity: 0.38,
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
    paddingEnd: Style.adjust(22),
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
    marginStart: -Style.adjust(16),
    borderWidth: Style.adjust(2),
  },
});

export const inventoryItemStyles = styles;

export default memo(InventoryItem);
