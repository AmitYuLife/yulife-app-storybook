import React, { FC, useMemo } from "react";
import { View, ScrollView } from "react-native";
import {
  GetYuScreen_getYuScreen_onboarding as OnboardingProps,
  GetYuScreen_getYuScreen_productSlots as ProductSlots,
} from "@graphql/_core/schema";
import styles from "./onboarding.styles";
import { TextTemplate } from "@atoms";
import { Button } from "@molecules";
import { YuCoinPower } from "../yu-coin-power/yu-coin-power";
import { ItemSlot, ItemSlotProps } from "../item-slot/item-slot";
import { getOnboardingProducts } from "./getOnboardingProducts";
import FastImage from "react-native-fast-image";
import { View as AnimatedView } from "react-native-animatable";
import { ONBOARDING_SCREEN } from "@ids";
import { OnboardingHandler } from "../../hooks/useOnboardingDismissalHandler";
import { useYuScreenOnPressHandler } from "../../hooks/useYuScreenOnPressHandler";

const BACKGROUND_IMAGE = require("./assets/onboarding-background.png");
const ITEM_SLOT_CONTAINER_IMAGE = require("./assets/item-slot-container.png");

interface Props {
  onboarding: OnboardingProps;
  onDismiss: OnboardingHandler;
  productSlots: Array<ProductSlots>;
}

export const Onboarding: FC<Props> = ({
  onboarding: {
    dismissByPlaceholder,
    heading,
    text,
    button: { event, label },
    placeholder,
  },
  onDismiss,
  productSlots,
}) => {
  const itemPlaceholder = useMemo<ItemSlotProps>(
    () => ({ ...placeholder, onPress: dismissByPlaceholder ? onDismiss : null }),
    [dismissByPlaceholder, onDismiss, placeholder]
  );
  const slotsToDisplay = useMemo(() => getOnboardingProducts(productSlots, itemPlaceholder), [
    itemPlaceholder,
    productSlots,
  ]);

  const handlePress = useYuScreenOnPressHandler({ event, onPress: onDismiss });

  return (
    <AnimatedView useNativeDriver={true} animation="fadeInUpBig" duration={500} style={styles.container}>
      <FastImage style={styles.backgroundImage} source={BACKGROUND_IMAGE} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper} testID={ONBOARDING_SCREEN}>
          <View style={styles.itemSlotContainer}>
            <FastImage style={styles.itemSlotContainerImage} source={ITEM_SLOT_CONTAINER_IMAGE} />
            <View style={styles.yuCoinPower}>
              <YuCoinPower pressable={false} />
            </View>
            <View style={styles.itemSlotsContainer}>
              {slotsToDisplay.map((props) => (
                <ItemSlot key={props.id} {...props} socketType="onboarding" />
              ))}
            </View>
          </View>
          <View style={styles.heading}>
            <TextTemplate type="h3" color="white" textAlign="center">
              {heading}
            </TextTemplate>
          </View>
          <View style={styles.text}>
            <TextTemplate type="b1" color="white" textAlign="center">
              {text}
            </TextTemplate>
          </View>
          <Button size="Fill" label={label} onPress={handlePress} />
        </View>
      </ScrollView>
    </AnimatedView>
  );
};
