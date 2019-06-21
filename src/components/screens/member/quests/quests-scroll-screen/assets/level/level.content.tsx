import * as React from "react";
import { StyleSheet, View } from "react-native";
import { getCurrentWorld } from "../../../../../../../services/utils";
import { Chest, DoubleLock, Lock, Text } from "../../../../../../atoms";
import { IChallenge } from "../../quests-screen";
import LevelPending from "./level-pending";
import LevelStar from "./level.star";
import styles from "./level.styles";

const getTextColor = (level: number) => {
    switch (true) {
        case level > 14 && level < 22:
            return "rgb(225, 210, 88)";
        case level > 64 && level < 72:
            return "rgb(233, 210, 10)";
        default:
            return "#fff";
    }
};

const getStarColor = (level: number, isCompleted: boolean) => {
    switch (true) {
        case level > 71 && level < 100:
        case level > 50 && level < 65:
            return isCompleted ? "rgb(142, 227, 255)" : "rgba(142, 227, 255, 0.4)";
        case level > 64 && level < 72:
            return isCompleted ? "rgb(233, 210, 10)" : "rgba(233, 210, 10, 0.3)";
        case level > 14 && level < 22:
            return isCompleted ? "rgb(225, 210, 88)" : "rgba(225, 210, 88, 0.3)";
        default:
            return isCompleted ? "white" : "rgba(255,255,255, 0.4)";
    }
};

const getLevelLockIcon = (currentLevel: number, level: IChallenge) => {
    switch (true) {
        case level.level === 20 && currentLevel < 19:
        case level.level === 41 && currentLevel < 40:
        case level.level === 45 && currentLevel < 44:
        case level.level === 48 && currentLevel < 47:
        case level.level === 70 && currentLevel < 69:
        case level.level === 91 && currentLevel < 89:
        case level.level === 95 && currentLevel < 94:
        case level.level === 98 && currentLevel < 97:
        case level.level === 120 && currentLevel < 118:
        case level.level === 145 && currentLevel < 144:
        case level.level === 148 && currentLevel < 147:
        case level.level === 170 && currentLevel < 169:
        case level.level === 191 && currentLevel < 190:
        case level.level === 195 && currentLevel < 194:
        case level.level === 198 && currentLevel < 197:
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
        const color = getTextColor(level.level);
        return (
            <View style={{ flexDirection: "column" }}>
                <Text style={StyleSheet.flatten([styles.text, { textAlign: "center", color }])}>{level.level}</Text>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <LevelStar key={`${level.id}_${i}`} colour={getStarColor(level.level, level.rating > i)} />
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

function getLockColor(level: number) {
    if (level > 64 && level < 72) {
        return "rgb(118, 82, 48)";
    }
    switch (getCurrentWorld(level)) {
        case 3:
            return "rgb(87, 133, 188)";
        case 2:
            return "rgb(183, 136, 67)";
        case 1:
            return "rgb(4, 40, 114)";
        case 0:
        default:
            return "rgb(73, 133, 193)";
    }
}
