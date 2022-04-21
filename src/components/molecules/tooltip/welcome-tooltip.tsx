import { Text } from "@atoms/index";
import { Button } from "@molecules";
import { GetMobileCopy_getMobileCopy_screens_intro_welcome } from "@graphql/_core/schema";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import assets from "./assets";
import styles from "./toolttip.styles";
import { WELCOME_MODAL } from "@ids";

interface IProps {
  onPressCta: () => void;
  copy: GetMobileCopy_getMobileCopy_screens_intro_welcome;
}

export default function WelcomeTooltip({ onPressCta, copy }: IProps) {
  return (
    <>
      <View style={StyleSheet.flatten([styles.overlay, styles.darkerOverlay])} />
      <View style={styles.wrapper}>
        <View>
          <View style={styles.shadow} />
          <Image style={styles.giraffe} source={assets.giraffe} />
          <View style={[styles.tooltip, styles.welcomePadding]}>
            <Text bold={true} style={styles.heading} testID={WELCOME_MODAL(copy.heading)}>
              {copy.heading}
            </Text>
            <Text style={StyleSheet.flatten([styles.description, styles.welcomeMarginBottomThirty])}>
              {copy.descriptionOne}
            </Text>
            <Text style={StyleSheet.flatten([styles.description, styles.welcomeMarginBottomThirty])}>
              {copy.descriptionTwo}
            </Text>
            <Text style={StyleSheet.flatten([styles.description, styles.welcomeMarginBottomTwenty])}>
              {copy.descriptionThree}
            </Text>
            <View style={styles.buttonWrapper}>
              <Button size="Medium" onPress={onPressCta} label={copy.ctaLabel} />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
