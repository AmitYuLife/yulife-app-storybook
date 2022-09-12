import React, { FC, memo } from "react";
import { StyleSheet, View } from "react-native";
import { rightIconImageDimensions, slotStatusImageDimensions, slotYuCoinPowerImageDimensions, styles } from "./styles";
import { Image, TextTemplate } from "@atoms";
import { Colours } from "@styles";
import {
  GetYuScreen_getYuScreen_productSlots as ProductSlots,
  YuScreenProductButtonAction,
} from "@graphql/_core/schema";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { BACKGROUND_COLOUR_PRODUCT, RIGHT_STATUS_ICON } from "@ids";
import { OnboardingHandler } from "../../hooks/useOnboardingDismissalHandler";
import { useYuScreenOnPressHandler } from "../../hooks/useYuScreenOnPressHandler";
import { useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";

export interface ItemSlotProps extends Omit<ProductSlots, "onPress"> {
  onPress?: YuScreenProductButtonAction | OnboardingHandler;
  socketType?: "yuscreen" | "onboarding";
}

export const ItemSlot: FC<ItemSlotProps> = memo(
  ({
    backgroundColour,
    bottomShadowColour,
    event,
    leftText,
    leftTextColour,
    leftBackgroundImage,
    onPress,
    rightIcon,
    rightStatusIcon,
    text,
    title,
    titleColour,
    topShadowColour,
    socketType = "yuscreen",
  }) => {
    const currentRoute = useSelector(getRouteState);
    const handlePress = useYuScreenOnPressHandler({ event, onPress, currentRoute });

    const ItemSlotWrapper = onPress ? TouchableOpacityWithDelay : View;

    return (
      <View style={styles.container}>
        <ItemSlotWrapper onPress={handlePress} style={styles.slotWrapper}>
          {leftBackgroundImage ? (
            <View style={styles.slotYucoinPowerWrapper}>
              <Image
                {...slotYuCoinPowerImageDimensions}
                style={styles.slotYucoinPowerImage}
                source={leftBackgroundImage}
              />
              {leftText ? (
                <TextTemplate color={leftTextColour || Colours.neutral.white} type="b1b">
                  {leftText}
                </TextTemplate>
              ) : null}
            </View>
          ) : null}
          {rightStatusIcon ? (
            <View style={styles.slotStatusWrapper}>
              <Image {...slotStatusImageDimensions} source={rightStatusIcon} testID={RIGHT_STATUS_ICON} />
            </View>
          ) : null}
          <View style={StyleSheet.flatten([styles.slotInnerWrapperTop, { backgroundColor: topShadowColour }])} />
          <View style={StyleSheet.flatten([styles.slotInnerWrapperBottom, { backgroundColor: bottomShadowColour }])} />
          <View
            style={StyleSheet.flatten([
              styles.slotSocket,
              socketType === "yuscreen" ? styles.slotSocketYuScreen : styles.slotSocketOnboarding,
            ])}
          >
            <View
              style={StyleSheet.flatten([
                styles.slotSocketInner,
                socketType === "yuscreen" ? styles.slotSocketInnerYuScreen : styles.slotSocketInnerOnboarding,
              ])}
            />
          </View>

          <View
            style={StyleSheet.flatten([styles.slotInnerWrapper, { backgroundColor: backgroundColour }])}
            testID={BACKGROUND_COLOUR_PRODUCT(backgroundColour)}
          >
            {leftBackgroundImage ? <View style={styles.spacer} /> : null}
            <View style={styles.titleWrapper}>
              <TextTemplate color={titleColour} type="l2b">
                {title}
              </TextTemplate>
              {text ? (
                <TextTemplate color={titleColour} type="l3">
                  {text}
                </TextTemplate>
              ) : null}
            </View>
            {rightIcon ? (
              <View style={styles.rightIconImageWrapper}>
                <Image {...rightIconImageDimensions} source={rightIcon} />
              </View>
            ) : null}
          </View>
        </ItemSlotWrapper>
      </View>
    );
  }
);
