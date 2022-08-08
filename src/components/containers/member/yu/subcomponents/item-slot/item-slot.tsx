import React, { FC, memo, useMemo } from "react";
import { Image, StyleSheet, View } from "react-native";
import { styles } from "./styles";
import { TextTemplate } from "@atoms";
import { Colours } from "@styles";
import { GetYuScreen_getYuScreen_productSlots as Props } from "@graphql/_core/schema";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { useYuScreenOnPressHandler } from "../../hooks/useYuScreenOnPressHandler";
import { BACKGROUND_COLOUR_PRODUCT, RIGHT_STATUS_ICON } from "@ids";

export const ItemSlot: FC<Props> = memo(
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
    title,
    titleColour,
    topShadowColour,
  }) => {
    const handlePress = useYuScreenOnPressHandler({ event, onPress });

    const ItemSlotWrapper = useMemo(() => (onPress ? TouchableOpacityWithDelay : View), [onPress]);

    return (
      <View style={styles.container}>
        <ItemSlotWrapper onPress={handlePress} style={styles.slotWrapper}>
          {leftBackgroundImage ? (
            <View style={styles.slotYucoinPowerWrapper}>
              <Image style={styles.slotYucoinPowerImage} source={leftBackgroundImage} />
              {leftText ? (
                <TextTemplate color={leftTextColour || Colours.neutral.white} type="b1b">
                  {leftText}
                </TextTemplate>
              ) : null}
            </View>
          ) : null}
          {rightStatusIcon ? (
            <View style={styles.slotStatusWrapper}>
              <Image style={styles.slotStatusImage} source={rightStatusIcon} testID={RIGHT_STATUS_ICON} />
            </View>
          ) : null}
          <View style={StyleSheet.flatten([styles.slotInnerWrapperTop, { backgroundColor: topShadowColour }])} />
          <View style={StyleSheet.flatten([styles.slotInnerWrapperBottom, { backgroundColor: bottomShadowColour }])} />
          <View style={styles.slotSocket}>
            <View style={styles.slotSocketInner} />
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
            </View>
            {rightIcon ? (
              <View style={styles.rightIconImageWrapper}>
                <Image style={StyleSheet.flatten([styles.rightIconImage])} source={rightIcon} />
              </View>
            ) : null}
          </View>
        </ItemSlotWrapper>
      </View>
    );
  }
);
