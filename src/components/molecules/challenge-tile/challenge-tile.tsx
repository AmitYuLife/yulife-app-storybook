import * as React from "react";
import { PureComponent, SFC } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "../../atoms";
import assets from "./assets";
import { getImage, getImageStyle } from "./challenge-tile.helpers";
import styles from "./challenge-tile.styles";

export interface IChallengeTileProps {
    challengeType?: string;
    currentWorld: number;
    duration?: string;
    image?: Images;
    isImageBackgroundFlipped?: boolean;
    isLocked?: boolean;
    minimumLevel?: number;
    onPress?: () => void;
    reward?: string;
}

export enum IMAGES {
    DOLPHIN = "dolphin",
    SQUIRREL = "squirrel",
    ELEPHANT = "elephant",
    BIRD = "bird",
    OSTRICH = "ostrich",
    OTTER = "otter",
    TORTOISE = "tortoise",
    WHALE = "whale"
}

export type Images = "dolphin" | "squirrel" | "elephant" | "bird" | "ostrich" | "otter" | "tortoise" | "whale";

const challengeTileSettings = {
    briskWalk: [IMAGES.SQUIRREL, IMAGES.OTTER],
    longWalk: [IMAGES.OSTRICH, IMAGES.WHALE],
    meditation: [IMAGES.BIRD, IMAGES.DOLPHIN],
    shortStroll: [IMAGES.ELEPHANT, IMAGES.TORTOISE]
};

type Props = IChallengeTileProps;

class ChallengeTile extends PureComponent<Props> {
    public static Images = IMAGES;

    public getImage = (challengeType: string, currentWorld: number): Images => {
        switch (challengeType) {
            case "meditation":
                return challengeTileSettings.meditation[currentWorld || 0];
            case "long walk":
                return challengeTileSettings.longWalk[currentWorld || 0];
            case "brisk walk":
                return challengeTileSettings.briskWalk[currentWorld || 0];
            case "short stroll":
            default:
                return challengeTileSettings.shortStroll[currentWorld || 0];
        }
    }

    public render() {
        const {
            challengeType = "",
            currentWorld,
            duration = "",
            isImageBackgroundFlipped = false,
            isLocked = false,
            minimumLevel = 1,
            onPress = (): any => null,
            reward = ""
        } = this.props;

        return !challengeType ? null : (
            <TouchableOpacity onPress={onPress} style={styles.wrapper}>
                <AnimalImage
                    image={this.getImage(challengeType, currentWorld)}
                    isLocked={isLocked}
                    isImageBackgroundFlipped={isImageBackgroundFlipped}
                />
                {isLocked ? (
                    <LockedOverlay minimumLevel={minimumLevel} isImageBackgroundFlipped={isImageBackgroundFlipped} />
                ) : (
                    <ContentWrapper challengeType={challengeType} duration={duration} reward={reward} />
                )}
            </TouchableOpacity>
        );
    }
}

export default ChallengeTile;

const LockedOverlay: SFC<Partial<Props>> = ({ isImageBackgroundFlipped, minimumLevel }) => (
    <View
        style={StyleSheet.flatten([
            styles.lockedOverlay,
            isImageBackgroundFlipped ? styles.lockedOverlayFlipped : null
        ])}
    >
        <Image resizeMode="contain" style={styles.lockedImage} source={assets.lock} />
        <Text style={styles.lockedLabel} bold={true}>
            {`level ${minimumLevel}`}
        </Text>
    </View>
);

const AnimalImage: SFC<Partial<Props>> = ({ image, isLocked, isImageBackgroundFlipped }) => (
    <View style={isLocked ? styles.imageWrapperLocked : styles.imageWrapper}>
        <View
            style={StyleSheet.flatten([
                styles.imageBackground,
                isLocked ? styles.imageBackgroundLocked : null,
                isImageBackgroundFlipped ? styles.imageBackgroundFlipped : null
            ])}
        />
        <Image style={isLocked ? null : getImageStyle(image)} source={getImage(image)} resizeMode="contain" />
    </View>
);

const ContentWrapper: SFC<Partial<Props>> = ({ challengeType, duration, reward }) => (
    <View style={styles.sectionBottomWrapper}>
        <Content challengeType={challengeType} duration={duration} reward={reward} />
        <View style={styles.imageWrapperNext}>
            <Image source={assets.next} resizeMode="contain" style={styles.imageNext} />
        </View>
    </View>
);

const Content: SFC<Partial<Props>> = ({ challengeType, duration, reward }) => (
    <View style={styles.contentWrapper}>
        <View style={styles.contentTitleWrapper}>
            <Text bold={true} style={styles.contentTitle}>
                {challengeType}
            </Text>
        </View>
        <View style={styles.contentDurationWrapper}>
            <Text bold={true} style={styles.contentTitle}>
                {duration}
            </Text>
        </View>
        <View style={styles.contentRewardWrapper}>
            <Text style={styles.contentReward}>{reward} yucoin</Text>
        </View>
    </View>
);
