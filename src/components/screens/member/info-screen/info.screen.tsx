import * as React from "react";
import { Image, View } from "react-native";
import { Button, Text } from "@atoms";
import GenericHeadingAbsolute from "@atoms/generic-heading/generic-heading-absolute";
import assets from "./assets";
import styles from "./info.styles";

export interface InfoModalProps {
  type: "garmin" | "fitbit";
  onPress: () => void;
  heading: string;
  subheading: string;
  ctaLabel: string;
}

export default function InfoScreen({ type, heading, subheading, ctaLabel, onPress }: InfoModalProps) {
  return (
    <>
      <View style={styles.wrapper}>
        <Image style={styles.image} resizeMethod="scale" source={assets[type]} />
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.subheading}>{subheading}</Text>
        <Button wrapperStyle={styles.buttonWrapper} label={ctaLabel} onPress={onPress} />
      </View>
      <GenericHeadingAbsolute onRightIconPress={onPress} />
    </>
  );
}
