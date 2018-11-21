import * as React from "react";
import { SFC } from "react";
import { Image, Platform, SafeAreaView, TouchableOpacity, View } from "react-native";
import { GetCurrentWorld_getCurrentWorld } from "../../../graphql/_core/schema";
import { Button } from "../../atoms";
import { Text } from "../../atoms";
import { getSlotDuration } from "../../containers/member/quests/challenges-list/challenges-list.helpers";
import ChallengesListBackground from "../../screens/member/challenges/challenges-list/challenges-list-background/challenges-list-background"; // tslint:disable-line
import LevelCompleteSlot from "./level-complete-slot";
import styles from "./level-complete.modal.styles";

interface IProps {
    level: GetCurrentWorld_getCurrentWorld;
    onPressActivityHistory: () => void;
    onPressCta: () => void;
}

const LevelCompleteModal: SFC<IProps> = ({ level, onPressActivityHistory, onPressCta }) => (
    <SafeAreaView style={styles.wrapper}>
        <SafeAreaView style={styles.backgroundWrapper}>
            {Platform.OS === "ios" ? (
                <ChallengesListBackground />
            ) : (
                <Image
                    resizeMethod="scale"
                    resizeMode="contain"
                    source={require("../../../../assets/challenges-list/challenges-list-background.png")}
                    style={styles.background}
                />
            )}
        </SafeAreaView>
        <Text style={styles.levelHeading}>level {level.level}</Text>
        <View style={styles.challengeSetWrapper}>
            {level.slots.map((slot) => (
                <LevelCompleteSlot
                    key={slot.id}
                    availableAtLevel={slot.availableAtLevel}
                    duration={getSlotDuration(slot)}
                    type={slot.subtype}
                    reward={slot.yuCoinAwarded}
                    rating={slot.rating}
                    locked={slot.availableAtLevel > level.level}
                />
            ))}
        </View>
        <View style={styles.buttonsWrapper}>
            <Button
                type={Button.Types.PRIMARY}
                onPress={onPressCta}
                label="back"
            />
            <TouchableOpacity
                onPress={onPressActivityHistory}
                style={{}}
            >
                <Text style={styles.historyLink}>full history</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
);

export default LevelCompleteModal;
