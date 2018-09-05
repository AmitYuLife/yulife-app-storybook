import React, { SFC } from "react";
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

const GenericModal: SFC<IProps> = ({
    heading,
    subheading,
    ctaLabel,
    onPress,
    onPressSecondary,
    ctaLabelSecondary
}) => (
        <View style={styles.wrapper}>
            <Text style={styles.heading} bold={true}>{heading}</Text>
            <Text style={styles.subheading}>{subheading}</Text>
            <Button
                wrapperStyle={styles.buttonWrapper}
                label={ctaLabel}
                onPress={onPress || (() => null)}
                type={Button.Types.PRIMARY}
            />
            {
                !(onPressSecondary && ctaLabelSecondary) ? null : (
                    <Button
                        wrapperStyle={styles.buttonWrapperSecondary}
                        label={ctaLabelSecondary}
                        onPress={onPressSecondary || (() => null)}
                        type={Button.Types.SECONDARY}
                    />
                )
            }
        </View>
    );

export default GenericModal;
