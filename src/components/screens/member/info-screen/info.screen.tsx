import * as React from "react";
import { Image, View } from "react-native";
import { Button, Close, Text } from "../../../atoms";
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
        <View style={styles.wrapper}>
            <Close onPress={onPress} />
            <Image style={styles.image} resizeMethod="scale" source={assets[type]} />
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.subheading}>{subheading}</Text>
            <Button
                wrapperStyle={styles.buttonWrapper}
                label={ctaLabel}
                onPress={onPress}
                type="Primary"
            />
        </View>
    );
}
