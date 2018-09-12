import * as React from "react";
import { PureComponent, SFC } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "../../atoms";
import styles, {
    getImage,
    getImageStyle
} from "./challenge-tile.styles";

export interface IChallengeTileProps {
    challengeType?: string;
    duration?: string;
    image?: Images;
    isImageBackgroundFlipped?: boolean;
    isLocked?: boolean;
    minimumLevel?: number;
    onPress?: () => void;
    reward?: string;
}

export enum IMAGES {
    SQUIRREL = "squirrel",
    ELEPHANT = "elephant",
    BIRD = "bird",
    OSTRICH = "ostrich"
}

export type Images =
    | "squirrel"
    | "elephant"
    | "bird"
    | "ostrich";

type Props = IChallengeTileProps;

class ChallengeTile extends PureComponent<Props> {

    public static Images = IMAGES;

    public getImage = (challengeType: string): Images => {
        switch (challengeType) {
            case "meditation":
            return IMAGES.BIRD;
            case "long walk":
            return IMAGES.OSTRICH;
            case "brisk walk":
                return IMAGES.SQUIRREL;
            case "short stroll":
            default:
                return IMAGES.ELEPHANT;
        }
    }

    public render() {
        const {
            challengeType = "",
            duration = "",
            isImageBackgroundFlipped = false,
            isLocked = false,
            minimumLevel = 1,
            onPress = (): any => null,
            reward = ""
        } = this.props;

        return (
            <TouchableOpacity
                onPress={onPress}
                style={styles.wrapper}
            >
                <AnimalImage
                    image={this.getImage(challengeType)}
                    isLocked={isLocked}
                    isImageBackgroundFlipped={
                        isImageBackgroundFlipped
                    }
                />
                {isLocked ? (
                    <LockedOverlay
                        minimumLevel={minimumLevel}
                        isImageBackgroundFlipped={
                            isImageBackgroundFlipped
                        }
                    />
                ) : (
                    <ContentWrapper
                        challengeType={challengeType}
                        duration={duration}
                        reward={reward}
                    />
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
            isImageBackgroundFlipped
                ? styles.lockedOverlayFlipped
                : null
        ])}
    >
        <Image
            resizeMode="contain"
            style={styles.lockedImage}
            source={require("./assets/lock.png")}
        />
        <Text
            style={styles.lockedLabel}
            bold={true}
        >
            {`level ${minimumLevel}`}
        </Text>
    </View>
);

const AnimalImage: SFC<Partial<Props>> = ({ image, isLocked, isImageBackgroundFlipped }) => (
    <View
        style={
            isLocked
                ? styles.imageWrapperLocked
                : styles.imageWrapper
        }
    >
        <View
            style={StyleSheet.flatten([
                styles.imageBackground,
                isLocked
                    ? styles.imageBackgroundLocked
                    : null,
                isImageBackgroundFlipped
                    ? styles.imageBackgroundFlipped
                    : null
            ])}
        />
        <Image
            style={isLocked ? null : getImageStyle(image)}
            source={getImage(image)}
            resizeMode="contain"
        />
    </View>
);

const ContentWrapper: SFC<Partial<Props>> = ({ challengeType, duration, reward }) => (
    <View style={styles.sectionBottomWrapper}>
        <Content
            challengeType={challengeType}
            duration={duration}
            reward={reward}
        />
        <View style={styles.imageWrapperNext}>
            <Image
                source={require("./assets/next.png")}
                resizeMode="contain"
                style={styles.imageNext}
            />
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
            <Text style={styles.contentReward}>
                {reward} yucoin
            </Text>
        </View>
    </View>
);
