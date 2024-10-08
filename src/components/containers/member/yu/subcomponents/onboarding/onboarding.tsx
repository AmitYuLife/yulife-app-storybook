import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { CloseSvg, RawImage, TextTemplate } from "@atoms";
import { Button, PressableWithDelay } from "@molecules";
import { DEFAULT_HEIGHT as buttonHeight } from "@components/molecules/button/button.styles";
import { Colours, Style, templateTextStyles } from "@styles";
import { TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";
import navBar from "@styles/nav-bar.styles";
import { YuCoinPower } from "../yu-coin-power/yu-coin-power";
import { ItemSlot } from "../item-slot/item-slot";
import { BUTTON_CLOSE_ONBOARDING, ONBOARDING_SCREEN, ONBOARDING_SCREEN_MARKDOWN, YUMOJI_ONBOARDING_BUTTON } from "@ids";
import { OnboardingHandler } from "../../hooks/useOnboardingButtonHandler";
import { useYuScreenOnPressHandler } from "../../hooks/useYuScreenOnPressHandler";
import { useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";
import Markdown from "@components/molecules/markdown/markdown";
import colours from "@styles/colours";
import { GetYuScreenQuery } from "@graphql/__generated";
import Animated, { FadeInUp } from "react-native-reanimated";

const BACKGROUND_IMAGE = require("@assets/yuscreen/onboarding/onboarding-background.png");
const ITEM_SLOT_CONTAINER_IMAGE = require("@assets/yuscreen/onboarding/item-slot-container.png");

interface IOnboardingProps {
  onClose: () => void;
  onPress: OnboardingHandler;
  onboarding: GetYuScreenQuery["getYuScreen"]["onboarding"];
}

export const Onboarding = ({ onboarding, onPress, onClose }: IOnboardingProps) => {
  const { button, isYuCoinPowerDisplayed, productSlots, heading, text, overlayImage } = onboarding;

  const currentRoute = useSelector(getRouteState);
  const handleOnPress = useYuScreenOnPressHandler({
    onPress,
    currentRoute,
    event: button.event,
  });

  return (
    <Animated.View entering={FadeInUp.duration(500)} style={styles.container}>
      <RawImage style={styles.backgroundImage} source={BACKGROUND_IMAGE} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper} testID={ONBOARDING_SCREEN}>
          <View style={styles.itemSlotContainer}>
            <RawImage style={styles.itemSlotContainerImage} source={ITEM_SLOT_CONTAINER_IMAGE} />
            {isYuCoinPowerDisplayed ? (
              <View style={styles.yuCoinPower}>
                <YuCoinPower pressable={false} />
              </View>
            ) : null}
            <View style={styles.itemSlotsContainer}>
              {productSlots.map(({ onPress: _, ...slot }) => (
                <ItemSlot key={slot.id} {...slot} onPress={onClose} socketType="onboarding" />
              ))}
            </View>
            {overlayImage ? (
              <View pointerEvents="none" style={styles.overlayImageWrapper}>
                <RawImage resizeMode="contain" style={styles.overlayImage} source={overlayImage} />
              </View>
            ) : null}
          </View>
          <View style={styles.heading}>
            <TextTemplate type="h3" color="white" textAlign="center">
              {heading}
            </TextTemplate>
          </View>
          <View style={styles.text} testID={ONBOARDING_SCREEN_MARKDOWN(text)}>
            <Markdown
              text={text}
              markdownStyles={{
                text: {
                  ...templateTextStyles.b1,
                  textAlign: "center",
                  color: colours.neutral.white,
                },
              }}
            />
          </View>
          <Button
            testID={YUMOJI_ONBOARDING_BUTTON}
            size="Fill"
            translatedLabel={button.label}
            onPress={handleOnPress}
          />
        </View>
      </ScrollView>
      <PressableWithDelay onPress={onClose} style={styles.closeWrapper} testID={BUTTON_CLOSE_ONBOARDING} delay={1000}>
        <CloseSvg stroke={Colours.neutral.white} />
      </PressableWithDelay>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  },
  contentWrapper: {
    flex: 1,
    paddingBottom: buttonHeight + navBar.DEFAULT_FULL_HEIGHT,
    paddingHorizontal: Style.adjust(32),
    paddingTop: TOP_BAR_WITH_PAD,
  },
  backgroundImage: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
    position: "absolute",
  },
  itemSlotContainer: {
    alignItems: "center",
    height: Style.adjust(322),
    marginBottom: Style.adjust(20),
    marginTop: Style.adjust(22),
  },
  itemSlotContainerImage: {
    width: Style.adjust(229),
    height: Style.adjust(322),
    position: "absolute",
  },
  yuCoinPower: {
    position: "absolute",
    top: Style.adjust(-20),
  },
  itemSlotsContainer: {
    paddingTop: Style.adjust(45),
  },
  heading: { paddingVertical: Style.adjust(8) },
  text: {
    paddingBottom: Style.adjust(32),
  },
  overlayImageWrapper: {
    position: "absolute",
    bottom: Style.adjust(1),
  },
  overlayImage: {
    width: Style.adjust(300),
    height: Style.adjust(322),
  },
  closeWrapper: {
    position: "absolute",
    top: TOP_BAR_WITH_PAD,
    right: Style.adjust(15),
  },
});
