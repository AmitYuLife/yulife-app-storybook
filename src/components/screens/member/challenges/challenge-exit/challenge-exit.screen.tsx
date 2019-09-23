import { BUTTON_TYPES } from "@atoms/button/button.types";
import { Button, Close, Text } from "@atoms/index";
import { GetMobileCopy_getMobileCopy_screens_challenges_newExitChallenge } from "@graphql/_core/schema";
import * as React from "react";
import { Image, SafeAreaView, StyleSheet } from "react-native";
import { ChallengeType } from "../challenge-progress/challenge-progress.screen";
import assets from "./assets";
import styles from "./challenge-exit.styles";

interface IProps {
    challengeType: ChallengeType;
    copy: GetMobileCopy_getMobileCopy_screens_challenges_newExitChallenge;
    onPressExit: () => void;
    onOpenURL: () => void;
    onClose: () => void;
    isCancelling: boolean;
}

export default function ChallengeExitScreen({
    challengeType,
    onPressExit,
    onOpenURL,
    onClose,
    copy,
    isCancelling
}: IProps) {
    return (
        <SafeAreaView style={styles.wrapper}>
            <Close onPress={onClose} />
            <Image source={assets.gear} style={styles.image} />
            <Text style={styles.headingText} bold={true}>
                {copy.heading}
            </Text>
            {challengeType !== "meditation" ? null : <Text style={styles.descriptionText}>{copy.subheading}</Text>}

            <Button
                wrapperStyle={StyleSheet.flatten([styles.buttonStyle, styles.exitChallengeWrapper])}
                type={BUTTON_TYPES.SECONDARY}
                label={copy.ctaLabel}
                onPress={onPressExit}
                isLoading={isCancelling}
            />
            {challengeType !== "meditation" ? null : (
                <>
                    <Button
                        wrapperStyle={styles.buttonStyle}
                        type={BUTTON_TYPES.SECONDARY}
                        label={copy.ctaLabelSecondary}
                        onPress={onOpenURL}
                    />
                </>
            )}
        </SafeAreaView>
    );
}
