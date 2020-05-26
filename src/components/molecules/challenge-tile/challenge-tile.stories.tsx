import React from "react";
import { storiesOf } from "@storybook/react-native";
import ChallengeTile from "./challenge-tile";
import { ScrollView } from "react-native";
import { View } from "react-native-animatable";
import { ChallengeType } from "./challenge-tile.types";

const worlds = Array.from({ length: 4 }).map((_, i) => i);
const challengeTypes = ["meditation", "long walk", "brisk walk", "cycling", "short stroll", "day walk"] as ChallengeType[];

const defaultProps = {
    onPress: (): null => null,
    // currentWorld: number,
    // duration?: string,
    // image?: Images,
    // isLocked?: boolean,
    // minimumLevel?: number,
    // reward?: string,
};

storiesOf("ChallengeTile")
    .add("all", () => {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%", flex: 1, backgroundColor: "rgba(255,0,0,0.1)" }} contentContainerStyle={{ paddingTop: 50, paddingBottom: 50 }}>
                {worlds.map((world, index) => (
                    challengeTypes.map((challengeType) => (
                        <View key={`${world}-${challengeType}`} style={{ justifyContent: "center", alignItems: "center" }}>
                            <ChallengeTile {...defaultProps} key={index} currentWorld={world} challengeType={challengeType} />
                        </View>
                    ))
                ))}
            </ScrollView>
        );
    })
    .add("locked", () => {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%", flex: 1, backgroundColor: "rgba(255,0,0,0.1)" }} contentContainerStyle={{ paddingTop: 50, paddingBottom: 50 }}>
                {worlds.map((world, index) => (
                    challengeTypes.map((challengeType) => (
                        <View key={`${world}-${challengeType}`} style={{ justifyContent: "center", alignItems: "center" }}>
                            <ChallengeTile {...defaultProps} key={index} currentWorld={world} challengeType={challengeType} isLocked={true} />
                        </View>
                    ))
                ))}
            </ScrollView>
        );
    });