import { Stack, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { Pressable, StyleSheet, View } from "react-native";
import { ChevronIcon } from "@atoms/icon/chevron-icon";
import { usePressedInWithDelay, usePressEffect, useTranslation } from "@hooks";
import Animated from "react-native-reanimated";
import { Image } from "expo-image";
import { memo } from "react";

const BANNER_IMAGE = require("./inventory-banner-icon.webp");
const BANNER_BACKGROUND = require("./inventory-banner-background.webp");

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface IInventoryBannerProps {
  amount?: number;
  onPress?: () => void;
}

const BANNER_CONTENT_POSITION = { top: 0, left: 0 };

const InventoryBanner = ({ amount, onPress }: IInventoryBannerProps) => {
  const { animatedStyle, onPressIn, onPressOut } = usePressEffect({ activeTranslate: 0 });
  const { handlePress } = usePressedInWithDelay({ onPress });

  const t = useTranslation(["molecules.inventory_banner.title", "molecules.inventory_banner.subtitle"]);

  return (
    <View style={styles.wrapper}>
      <AnimatedPressable onPressIn={onPressIn} onPressOut={onPressOut} style={animatedStyle} onPress={handlePress}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={BANNER_IMAGE} style={styles.bannerImage} />
            {amount ? (
              <View style={styles.indicator}>
                <TextTemplate type="l3b" color={Colours.neutral.white} lineHeight={Style.adjust(20)}>
                  {amount}
                </TextTemplate>
              </View>
            ) : null}
          </View>
          <View style={styles.inventoryBannerContainer}>
            <Stack style={styles.inventoryBannerBackgroundContainer} direction="row">
              <View style={styles.inventoryBannerBackgroundSpacer} />
              <View style={styles.inventoryBannerBackground} />
            </Stack>
            <Image
              source={BANNER_BACKGROUND}
              contentFit="contain"
              contentPosition={BANNER_CONTENT_POSITION}
              style={styles.inventoryBannerImage}
            />
            <Stack gap={4} style={styles.inventoryBannerContent}>
              <Stack gap={0}>
                <TextTemplate type="h3" lineHeight={Style.adjust(22)} color={Colours.darkPink}>
                  {t["molecules.inventory_banner.title"]}
                </TextTemplate>

                <TextTemplate color={Colours.neutral.n900} type="l1">
                  {t["molecules.inventory_banner.subtitle"]}
                </TextTemplate>
              </Stack>
              <View style={styles.chevronContainer}>
                <ChevronIcon />
              </View>
            </Stack>
          </View>
        </View>
      </AnimatedPressable>
    </View>
  );
};

export default memo(InventoryBanner);

const BANNER_HEIGHT = Style.adjust(75);
const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    justifyContent: "center",
    marginVertical: Style.adjust(10),
    height: BANNER_HEIGHT,
  },
  imageContainer: {
    position: "absolute",
    height: BANNER_HEIGHT,
  },
  container: {
    width: "100%",
    flexDirection: "row",
  },
  bannerImage: {
    width: BANNER_HEIGHT,
    height: BANNER_HEIGHT,
  },
  indicator: {
    width: Style.adjust(20),
    height: Style.adjust(20),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Style.adjust(100),
    position: "absolute",
    top: Style.adjust(1),
    left: Style.adjust(1),
    backgroundColor: Colours.primary.p600,
  },
  inventoryBannerContainer: {
    width: "100%",
    height: BANNER_HEIGHT,
    borderRadius: Style.adjust(10),
    overflow: "hidden",
    flexDirection: "row",
  },
  inventoryBannerBackgroundContainer: {
    width: "100%",
    height: BANNER_HEIGHT,
    position: "absolute",
  },
  inventoryBannerImage: {
    width: "100%",
    marginLeft: BANNER_HEIGHT * 0.765,
    position: "absolute",
    height: BANNER_HEIGHT,
  },
  inventoryBannerBackground: {
    backgroundColor: "#FFD600",
    height: BANNER_HEIGHT,
    flex: 1,
  },
  inventoryBannerBackgroundSpacer: {
    flex: 1,
    height: BANNER_HEIGHT,
  },
  inventoryBannerContent: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: Style.adjust(BANNER_HEIGHT * 1.2),
  },
  chevronContainer: {
    padding: Style.adjust(BANNER_HEIGHT / 6),
  },
});
