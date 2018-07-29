import * as React from "react";
import { SFC } from "react";
import { Image, View } from "react-native";
import { Button, Close, Text } from "../../../atoms";
import data from "./challenge-details.data";
import { getImage, getImageStyle } from "./challenge-details.helpers";
import styles from "./challenge-details.styles";
import Milestones, { IProps as IMilestoneProps } from "./milestones";

export type ChallengeType =
    | "brisk walk"
    | "short stroll"
    | "long walk"
    | "meditation";

interface IOwnProps {
    challengeType: ChallengeType;
    onPressClose: () => void;
    onPressCta: () => void;
    onPressSetUp?: () => void;
    duration: string;
}

type Props = IOwnProps & IMilestoneProps;

const ChallengeDetails: SFC<Props> = ({
    challengeType,
    duration = "",
    milestones = [],
    onPressClose = (): null => null,
    onPressCta = (): null => null,
    onPressSetUp = (): null => null,
    unit = "",
}) => (
    <View style={styles.wrapper}>
        <Close onPress={onPressClose} />
        <Image
            source={getImage(challengeType)}
            style={getImageStyle(challengeType)}
        />
        <View style={styles.contentWrapper}>
            <Text
                bold={true}
                style={styles.heading}
            >
                {`${challengeType} / ${duration}`}
            </Text>
            <Milestones
                milestones={milestones}
                unit={unit}
            />
        </View>
        <Button
            label={data.ctaLabel}
            onPress={onPressCta}
            type={Button.Types.PRIMARY}
            wrapperStyle={styles.ctaButton}
        />
        {!onPressSetUp ? (
            <Text style={styles.footer}>
                {data.footer}
            </Text>
        ) : (
            <Button
                label={data.setUpLabel}
                onPress={onPressSetUp}
                type={Button.Types.SECONDARY}
                wrapperStyle={styles.setUp}
            />
        )}
    </View>
);

export default ChallengeDetails;
