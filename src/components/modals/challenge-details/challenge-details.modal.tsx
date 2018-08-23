import * as React from "react";
import { SFC } from "react";
import { Image, View } from "react-native";
import { Button, Close, Text } from "../../atoms";
import data from "./challenge-details.modal.data";
import { getImage, getImageStyle } from "./challenge-details.modal.helpers";
import styles from "./challenge-details.modal.styles";
import Milestones, { IProps as MilestoneProps } from "./milestones";

interface IOwnProps {
    challengeType: string;
    duration: string;
    onPressClose: () => void;
    onPressCta: () => void;
    onPressSetUp?: () => void;
}

type Props = IOwnProps & MilestoneProps;

const ChallengeDetails: SFC<Props> = ({
    challengeType,
    duration,
    milestones,
    onPressClose,
    onPressCta,
    onPressSetUp = null,
    unit,
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
