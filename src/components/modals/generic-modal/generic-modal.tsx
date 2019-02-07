import * as React from "react";
import { View } from "react-native";
import { Button, Text } from "../../atoms";
import styles from "./generic-modal.styles";

interface IProps {
    onPress?: () => void;
    heading: string;
    subheading: string;
    ctaLabel: string;
    onPressSecondary?: () => void;
    ctaLabelSecondary?: string;
}

export default function GenericModal({
    heading,
    subheading,
    ctaLabel,
    onPress,
    onPressSecondary,
    ctaLabelSecondary
}: IProps) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.heading} bold={true}>
                {heading}
            </Text>
            <Text style={styles.subheading}>{subheading}</Text>
            <Button
                wrapperStyle={styles.buttonWrapper}
                label={ctaLabel}
                onPress={onPress || (() => null)}
                type={Button.Types.PRIMARY}
            />
            {!(onPressSecondary && ctaLabelSecondary) ? null : (
                <Button
                    wrapperStyle={styles.buttonWrapperSecondary}
                    label={ctaLabelSecondary}
                    onPress={onPressSecondary || (() => null)}
                    type={Button.Types.SECONDARY}
                />
            )}
        </View>
    );
}
