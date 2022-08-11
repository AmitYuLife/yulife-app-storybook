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
import { ItemSlot } from "../item-slot/item-slot";
import { getOnboardingProducts } from "./getOnboardingProducts";
import { useDispatch } from "react-redux";
import { dismissYuScreenOnboarding } from "@redux/user/user.actions";
import FastImage from "react-native-fast-image";
import { View as AnimatedView } from "react-native-animatable";
import { ONBOARDING_SCREEN } from "@ids";

const BACKGROUND_IMAGE = require("./assets/onboarding-background.png");
const ITEM_SLOT_CONTAINER_IMAGE = require("./assets/item-slot-container.png");

interface Props {
  onboarding: OnboardingProps;
  productSlots: Array<ProductSlots>;
}

export const Onboarding: FC<Props> = ({ onboarding: { id, heading, text, button, placeholder }, productSlots }) => {
  const dispatch = useDispatch();
  const slotsToDisplay = useMemo(() => getOnboardingProducts(productSlots, placeholder), [productSlots, placeholder]);

  return (
    <AnimatedView useNativeDriver={true} animation="fadeInUpBig" duration={500} style={styles.container}>
      <FastImage style={styles.backgroundImage} source={BACKGROUND_IMAGE} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper} testID={ONBOARDING_SCREEN}>
          <View style={styles.itemSlotContainer}>
            <FastImage style={styles.itemSlotContainerImage} source={ITEM_SLOT_CONTAINER_IMAGE} />
            <View style={styles.yuCoinPower}>
              <YuCoinPower onPress={null} />
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
          <Button size="Fill" label={button.label} onPress={() => dispatch(dismissYuScreenOnboarding(id))} />
        </View>
      </ScrollView>
    </AnimatedView>
  );
};
