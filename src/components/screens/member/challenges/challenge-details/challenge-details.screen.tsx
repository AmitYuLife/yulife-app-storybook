import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Close, Text } from "../../../../atoms";
import { data, getCardBackgroundColor, getImageAndStyle } from "./challenge-details.helpers";
import styles from "./challenge-details.styles";
import Milestones, { IMilestoneProps } from "./milestones";

interface IOwnProps {
    challengeType: string;
    currentWorld?: number;
    duration: string;
    isLoading?: boolean;
    error?: string;
    onPressClose: () => void;
    onPressCta: () => void;
    onPressSetUp?: () => void;
}

type Props = IOwnProps & IMilestoneProps;

export default function ChallengeDetailsScreen({
    challengeType,
    currentWorld = 0,
    duration,
    error = null,
    isLoading = false,
    milestones,
    onPressClose,
    onPressCta,
    onPressSetUp = null,
    unit
}: Props) {
    return (
        <View style={styles.wrapper}>
            <Close onPress={onPressClose} />
            <Image {...getImageAndStyle(challengeType, currentWorld)} />
            <View
                style={StyleSheet.flatten([
                    styles.contentWrapper,
                    {
                        backgroundColor: getCardBackgroundColor(currentWorld)
                    }
                ])}
            >
                <Text bold={true} style={styles.heading}>
                    {`${challengeType} / ${duration}`}
                </Text>
                <Milestones milestones={milestones} unit={unit} />
            </View>
            <Button
                disabled={isLoading}
                isLoading={isLoading}
                label={isLoading ? data.loading : data.ctaLabel}
                onPress={onPressCta}
                type={Button.Types.PRIMARY}
                wrapperStyle={styles.ctaButton}
            />
            {!onPressSetUp ? (
                <Text style={styles.footer}>{data.footer}</Text>
            ) : (
                <Button
                    label={data.setUpLabel}
                    onPress={onPressSetUp}
                    type={Button.Types.SECONDARY}
                    wrapperStyle={styles.setUp}
                />
            )}
            {!error ? null : <Text style={styles.error}>{error}</Text>}
        </View>
    );
}
