import { Box, TextTemplate } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { Pressable, View } from "react-native";
import { ChevronIcon } from "@atoms/icon/chevron-icon";
import { usePressedInWithDelay, useTranslation } from "@hooks";
import Animated from "react-native-reanimated";
import { Image } from "expo-image";
import { memo } from "react";
import LottieView from "../lottie-view/lottie-view";
import { usePressEffect } from "../../../hooks/usePressEffect";
import { INVENTORY_BANNER, INVENTORY_BANNER_ITEM_COUNT } from "@ids";

const BANNER_IMAGE = require("./inventory-banner-icon.webp");
const BANNER_BACKGROUND = require("./inventory-banner-background.webp");

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface IInventoryBannerProps {
  amount?: number;
  onPress?: () => void;
}

const BANNER_CONTENT_POSITION = { top: 0, left: 0 };
const SPARKLE_LOTTIE = require("./inventory-banner-sparkles.lottie");

const InventoryBanner = ({ amount, onPress }: IInventoryBannerProps) => {
  const { animatedStyle, onPressIn, onPressOut } = usePressEffect({ pressedTranslation: 0 });
  const { handlePress } = usePressedInWithDelay({ onPress });

  const t = useTranslation(["molecules.inventory_banner.title", "molecules.inventory_banner.subtitle"]);

  return (
    <View style={styles.wrapper} testID={INVENTORY_BANNER}>
      <AnimatedPressable onPressIn={onPressIn} onPressOut={onPressOut} style={animatedStyle} onPress={handlePress}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={BANNER_IMAGE} style={styles.bannerImage} />
            <LottieView
              suppressLoadingUi={true}
              style={styles.sparkleLottie}
              source={SPARKLE_LOTTIE}
              loop={true}
              autoPlay={true}
            />
            {amount ? (
              <View style={styles.indicator} testID={INVENTORY_BANNER_ITEM_COUNT(amount)}>
                <TextTemplate type="l3b" color={Colours.neutral.white} lineHeight={Style.adjust(20)}>
                  {amount}
                </TextTemplate>
              </View>
            ) : null}
          </View>
          <View style={styles.inventoryBannerContainer}>
            <Box gap={10} style={styles.inventoryBannerBackgroundContainer} flexDirection="row">
              <View style={styles.inventoryBannerBackgroundSpacer} />
              <View style={styles.inventoryBannerBackground} />
            </Box>
            <Image
              source={BANNER_BACKGROUND}
              contentFit="contain"
              contentPosition={BANNER_CONTENT_POSITION}
              style={styles.inventoryBannerImage}
            />
            <Box gap={4} style={styles.inventoryBannerContent}>
              <Box gap={0}>
                <TextTemplate type="b2b" lineHeight={Style.adjust(20)} color={Colours.darkPink}>
                  {t["molecules.inventory_banner.title"]}
                </TextTemplate>

                <TextTemplate color={Colours.neutral.n900} type="l2">
                  {t["molecules.inventory_banner.subtitle"]}
                </TextTemplate>
              </Box>
              <View style={styles.chevronContainer}>
                <ChevronIcon size={22} />
              </View>
            </Box>
          </View>
        </View>
      </AnimatedPressable>
    </View>
  );
};

export default memo(InventoryBanner);

const BANNER_HEIGHT = Style.adjust(64);
const BANNER_WIDE_HEIGHT_MULTIPLIER = 0.87;
const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    justifyContent: "center",
    marginVertical: Style.adjust(10),
    height: BANNER_HEIGHT,
  },
  sparkleLottie: {
    position: "absolute",
    height: "100%",
    width: "100%",
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
    start: Style.adjust(1),
    backgroundColor: Colours.primary.p600,
  },
  inventoryBannerContainer: {
    width: "100%",
    height: BANNER_HEIGHT,
    borderRadius: Style.adjust(8),
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
    marginStart: BANNER_HEIGHT * 0.83,
    position: "absolute",
    overflow: "hidden",
    height: BANNER_HEIGHT * BANNER_WIDE_HEIGHT_MULTIPLIER,
    top: (BANNER_HEIGHT * (1 - BANNER_WIDE_HEIGHT_MULTIPLIER)) / 2,
  },
  inventoryBannerBackground: {
    backgroundColor: "#FFD600",
    borderRadius: Style.adjust(8),
    height: BANNER_HEIGHT * BANNER_WIDE_HEIGHT_MULTIPLIER,
    top: (BANNER_HEIGHT * (1 - BANNER_WIDE_HEIGHT_MULTIPLIER)) / 2,
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
    paddingStart: BANNER_HEIGHT * 1.2,
  },
  chevronContainer: {
    padding: Style.adjust(BANNER_HEIGHT / 6),
  },
});
