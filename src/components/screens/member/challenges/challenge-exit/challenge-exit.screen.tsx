import { BUTTON_TYPES } from "@atoms/button/button.types";
import { Button, Text } from "@atoms/index";
import { GetMobileCopy_getMobileCopy_screens_challenges_newExitChallenge } from "@graphql/_core/schema";
import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import styles from "./challenge-exit.styles";

interface IProps {
    copy: GetMobileCopy_getMobileCopy_screens_challenges_newExitChallenge;
    onPressExit: () => void;
    onClose: () => void;
    isCancelling: boolean;
}

export default function ChallengeExitScreen({ onPressExit, onClose, copy, isCancelling }: IProps) {
    return (
        <SafeAreaView style={styles.wrapper}>
            <Text style={styles.headingText} bold={true}>
                {copy.heading}
            </Text>
            <Text style={styles.descriptionText}>{copy.subheading}</Text>

            <Button
                wrapperStyle={StyleSheet.flatten([styles.buttonStyle, styles.exitChallengeWrapper])}
                type={BUTTON_TYPES.PRIMARY}
                label={copy.ctaLabel}
                onPress={onClose}
            />
            <Button
                wrapperStyle={styles.buttonStyle}
                type={BUTTON_TYPES.SECONDARY}
                label={copy.ctaLabelSecondary}
                onPress={onPressExit}
                isLoading={isCancelling}
            />
        </SafeAreaView>
    );
}
