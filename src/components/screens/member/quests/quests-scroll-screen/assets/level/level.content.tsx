import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "../../../../../../atoms";
import { IChallenge } from "../../quests-screen";
import LevelPending from "./level-pending";
import styles from "./level.styles";

const images = {
    chest: require("../../../../../../../../assets/quests/chest-blue.png"),
    completedNoStar: require("../../../../../../../../assets/quests/completed-no-star.png"),
    completedStar: require("../../../../../../../../assets/quests/completed-star.png"),
    doubleLock: require("../../../../../../../../assets/quests/double-lock-blue.png"),
    lock: require("../../../../../../../../assets/quests/lock-blue.png")
};

const getLevelLockIcon = (currentLevel: number, level: IChallenge) => {
    switch (true) {
        case level.level === 20 && currentLevel < 18:
        case level.level === 41 && currentLevel < 39:
        case level.level === 45 && currentLevel < 43:
        case level.level === 48 && currentLevel < 46:
        case level.level === 56 && currentLevel < 54:
        case level.level === 70 && currentLevel < 68:
        case level.level === 91 && currentLevel < 89:
        case level.level === 95 && currentLevel < 94:
        case level.level === 98 && currentLevel < 97:
        case level.level === 120 && currentLevel < 118:
        case level.level === 145 && currentLevel < 144:
        case level.level === 148 && currentLevel < 147:
            return <Image source={images.doubleLock} />;
        default:
            return <Image source={images.lock} />;
    }
};

export default function getLevelButton(nextAvailable: number, currentLevel: number, level: IChallenge): any {
    const isUnity = level.level % 50 === 0;
    // step right up, we have more horrible logic, come and see the horrible logic!
    if (level.level === currentLevel) {
        return nextAvailable < 0 ? (
            <LevelPending
                nextAvailableAt={level.nextAvailableAt}
                textFill={!level.isActive && !isUnity ? "rgb(79, 151,139)" : "white"}
            />
        ) : (
            <Text style={styles.text} bold={true}>
                {level.level}
            </Text>
        );
    } else if (isUnity) {
        if (level.level > currentLevel) {
            return <Image source={images.lock} />;
        }
        return (
            <Text style={styles.text} bold={true}>
                {level.level}
            </Text>
        );
    } else if (level.isActive) {
        return (
            <Text style={styles.text} bold={true}>
                {level.level}
            </Text>
        );
    } else if (level.level < currentLevel) {
        return (
            <View style={{ flexDirection: "column" }}>
                <Text style={StyleSheet.flatten([styles.text, { textAlign: "center" }])}>{level.level}</Text>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <Image
                            key={`${level.id}_${i}`}
                            source={level.rating > i ? images.completedStar : images.completedNoStar}
                        />
                    ))}
                </View>
            </View>
        );
    } else {
        if (level.isChestLevel) {
            return <Image source={images.chest} />;
        } else {
            return getLevelLockIcon(currentLevel, level);
        }
    }
}
