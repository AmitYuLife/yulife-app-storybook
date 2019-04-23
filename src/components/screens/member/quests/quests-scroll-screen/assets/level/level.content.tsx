import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { getCurrentWorld } from "../../../../../../../services/utils";
import { Chest, DoubleLock, Lock, Text } from "../../../../../../atoms";
import { IChallenge } from "../../quests-screen";
import LevelPending from "./level-pending";
import styles from "./level.styles";

const images = {
    completedNoStar: require("../../../../../../../../assets/quests/completed-no-star.png"),
    completedStar: require("../../../../../../../../assets/quests/completed-star.png")
};

const getLevelLockIcon = (currentLevel: number, level: IChallenge) => {
    switch (true) {
        case level.level === 20 && currentLevel < 18:
        case level.level === 41 && currentLevel < 39:
        case level.level === 45 && currentLevel < 43:
        case level.level === 48 && currentLevel < 46:
        case level.level === 70 && currentLevel < 68:
        case level.level === 91 && currentLevel < 89:
        case level.level === 95 && currentLevel < 94:
        case level.level === 98 && currentLevel < 97:
        case level.level === 120 && currentLevel < 118:
        case level.level === 145 && currentLevel < 144:
        case level.level === 148 && currentLevel < 147:
            return <DoubleLock colour={getLockColor(level.level)} />;
        default:
            return <Lock colour={getLockColor(level.level)} />;
    }
};

export default function getLevelButton(nextAvailable: number, currentLevel: number, level: IChallenge): any {
    // step right up, we have more horrible logic, come and see the horrible logic!
    if (level.level % 50 === 0) {
        if (level.level > currentLevel) {
            return <Lock colour={getLockColor(level.level)} />;
        }
        return (
            <Text style={styles.text} bold={true}>
                {level.level}
            </Text>
        );
    } else if (level.level === currentLevel) {
        return nextAvailable < 0 ? (
            <LevelPending
                nextAvailableAt={level.nextAvailableAt}
                textFill={!level.isActive ? "rgb(79, 151,139)" : "white"}
            />
        ) : (
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
            return <Chest colour={getLockColor(level.level)} />;
        } else {
            return getLevelLockIcon(currentLevel, level);
        }
    }
}

function getLockColor(currentLevel: number) {
    switch (getCurrentWorld(currentLevel)) {
        case 2:
            return "rgb(183, 136, 67)";
        case 1:
            return "rgb(4, 40, 114)";
        case 0:
        default:
            return "rgb(79, 151, 139)";
    }
}
