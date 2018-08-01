import * as React from "react";
import { SFC } from "react";
import { Image, View } from "react-native";
import { Button, Close, Text } from "../../../atoms";
import Assets from "./assets/";
import data from "./challenge-details.data";
import styles from "./challenge-details.styles";
import Milestones, { IProps as MilestoneProps } from "./milestones";

interface IOwnProps {
    challengeType: string;
    duration: string;
    onPressClose: () => void;
    onPressCta: () => void;
    onPressSetUp?: () => void;
}

type Props = IOwnProps & MilestoneProps;

const getImage = (challengeType: string) => {
    switch (challengeType) {
        case "brisk walk":
            return Assets.squirrel;
        case "day walk":
        case "short stroll":
            return Assets.elephant;
        case "long walk":
            return Assets.ostrich;
        case "meditation":
            return Assets.bird;
        default:
            return null;
    }
};

const getImageStyle = (challengeType: string) => {
    switch (challengeType) {
        case "meditation":
            return styles.imageMeditation;
        case "long walk":
            return styles.imageLongWalk;
        default:
            return styles.image;
    }
};

const ActiveChallenge: SFC<Props> = ({
    challengeType,
    duration = "",
    milestones = [],
    onPressClose = (): null => null,
    onPressCta = (): null => null,
    onPressSetUp = null,
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

export default ActiveChallenge;
