import * as React from "react";
import { PureComponent, SFC } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "../../atoms";
import styles, {
    getImage,
    getImageStyle,
} from "./challenge-tile.styles";

export interface IChallengeTileProps {
    image: Images;
    activity?: string;
    duration?: string;
    reward?: string;
    isImageBackgroundFlipped?: boolean;
    isLocked?: boolean;
    minimumLevel?: number;
}

export enum IMAGES {
    SQUIRREL = "squirrel",
    ELEPHANT = "elephant",
    BIRD = "bird",
    OSTRICH = "ostrich",
}

export type Images =
    | "squirrel"
    | "elephant"
    | "bird"
    | "ostrich";

type Props = IChallengeTileProps;

class ChallengeTile extends PureComponent<Props> {

    public static Images = IMAGES;

    public render() {
        const {
            image = null,
            isImageBackgroundFlipped = false,
            activity = "",
            duration = "",
            reward = "",
            isLocked = false,
            minimumLevel,
        } = this.props;

        return (
            <View style={styles.wrapper}>
                <AnimalImage
                    image={image}
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
                        activity={activity}
                        duration={duration}
                        reward={reward}
                    />
                )}
            </View>
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
                : null,
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
                    : null,
            ])}
        />
        <Image
            style={isLocked ? null : getImageStyle(image)}
            source={getImage(image)}
            resizeMode="contain"
        />
    </View>
);

const ContentWrapper: SFC<Partial<Props>> = ({ activity, duration, reward }) => (
    <View style={styles.sectionBottomWrapper}>
        <Content
            activity={activity}
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

const Content: SFC<Partial<Props>> = ({ activity, duration, reward }) => (
    <View style={styles.contentWrapper}>
        <View style={styles.contentTitleWrapper}>
            <Text bold={true} style={styles.contentTitle}>
                {activity}
            </Text>
        </View>
        <View style={styles.contentDurationWrapper}>
            <Text bold={true} style={styles.contentTitle}>
                {duration} mins
            </Text>
        </View>
        <View style={styles.contentRewardWrapper}>
            <Text style={styles.contentReward}>
                {reward} yucoin
            </Text>
        </View>
    </View>
);
