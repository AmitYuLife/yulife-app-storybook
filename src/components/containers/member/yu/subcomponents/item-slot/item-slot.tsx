import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import {
  slotStatusImageDimensions,
  getStyles,
  getRightIconImageDimensions,
  getSlotYuCoinPowerImageDimensions,
} from "./styles";
import { Image, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { OnboardingHandler } from "../../hooks/useOnboardingButtonHandler";
import {
  BACKGROUND_COLOUR_PRODUCT,
  LEFT_SIDE_BACKGROUD_IMAGE_SLOT,
  LEFT_SIDE_TEXT_SLOT_POWER,
  RIGHT_SIDE_IMAGE_SLOT,
  RIGHT_STATUS_ICON,
  SLOT_TITLE,
} from "@ids";
import { useYuScreenOnPressHandler } from "../../hooks/useYuScreenOnPressHandler";
import { useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";
import { GetYuScreenQuery, YuScreenProductButtonActionFragment } from "@graphql/__generated";

export interface IItemSlotProps extends Omit<GetYuScreenQuery["getYuScreen"]["productSlots"][0], "onPress"> {
  onPress?: YuScreenProductButtonActionFragment | OnboardingHandler;
  socketType?: "yuscreen" | "onboarding";
}

export const ItemSlot = memo(
  ({
    backgroundColour,
    bottomShadowColour,
    borderStyle,
    borderWidth,
    borderColor,
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
    depressed = false,
  }: IItemSlotProps) => {
    const currentRoute = useSelector(getRouteState);
    const handlePress = useYuScreenOnPressHandler({ event, onPress, currentRoute });

    const ItemSlotWrapper = onPress ? TouchableOpacityWithDelay : View;

    const styles = getStyles(depressed);
    const slotYuCoinPowerImageDimensions = getSlotYuCoinPowerImageDimensions(depressed);
    const rightIconImageDimensions = getRightIconImageDimensions(depressed);

    return (
      <View style={styles.container}>
        <ItemSlotWrapper onPress={handlePress} style={styles.slotWrapper}>
          {leftBackgroundImage ? (
            <View style={styles.slotYucoinPowerWrapper} testID={LEFT_SIDE_TEXT_SLOT_POWER(leftText)}>
              <Image
                {...slotYuCoinPowerImageDimensions}
                style={styles.slotYucoinPowerImage}
                source={leftBackgroundImage}
                testID={LEFT_SIDE_BACKGROUD_IMAGE_SLOT(leftBackgroundImage.id)}
              />
              {leftText ? (
                <View style={styles.leftTextWrapper}>
                  <TextTemplate color={leftTextColour || Colours.neutral.white} type="b1b">
                    {leftText}
                  </TextTemplate>
                </View>
              ) : null}
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
                {
                  borderStyle,
                  borderWidth,
                  borderColor,
                },
              ])}
            />
          </View>

          <View
            style={StyleSheet.flatten([
              styles.slotInnerWrapper,
              { backgroundColor: backgroundColour },
              !leftBackgroundImage ? { paddingLeft: Style.adjust(16) } : null,
            ])}
            testID={BACKGROUND_COLOUR_PRODUCT(backgroundColour)}
          >
            {leftBackgroundImage ? <View style={styles.spacer} /> : null}
            <View style={styles.titleWrapper}>
              <TextTemplate color={titleColour} type="l2b" lineHeight={Style.adjust(14)} testID={SLOT_TITLE(title)}>
                {title}
              </TextTemplate>
              {text ? (
                <TextTemplate color={titleColour} type="l3" lineHeight={Style.adjust(14)}>
                  {text}
                </TextTemplate>
              ) : null}
            </View>
            {rightIcon ? (
              <View style={styles.rightIconImageWrapper}>
                <Image {...rightIconImageDimensions} source={rightIcon} testID={RIGHT_SIDE_IMAGE_SLOT(rightIcon.id)} />
              </View>
            ) : null}
          </View>
        </ItemSlotWrapper>
        {rightStatusIcon ? (
          <View style={styles.slotStatusWrapper}>
            <Image {...slotStatusImageDimensions} source={rightStatusIcon} testID={RIGHT_STATUS_ICON} />
          </View>
        ) : null}
      </View>
    );
  }
);
