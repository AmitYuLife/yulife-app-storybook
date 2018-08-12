import { action } from "@storybook/addon-actions";
import { object, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import {
    ChallengeCompleteModal,
    ChallengeDetailsModal,
    CollectRewardModal,
} from "./index";

storiesOf("Modals", module)
    .addDecorator(withKnobs)
    .add("1. Challenge Details", () => (
        <ChallengeDetailsModal
            challengeType={select("Challenge Type", [
                "brisk walk",
                "short stroll",
                "long walk",
                "meditation"
            ], "brisk walk", "ChallengeDetails")}
            duration={text("Duration", "0-3", "ChallengeDetails")}
            onPressClose={action("on press close")}
            onPressCta={action("on press cta")}
            milestones={object("Milestones", [
                {
                    reward: 1,
                    target: 1000
                },
                {
                    reward: 2,
                    target: 2000
                },
                {
                    reward: 3,
                    target: 3000
                }
            ], "ChallengeDetails")}
            unit="steps"
        />
    ))
    .add("2. Challenge Complete", () => (
        <ChallengeCompleteModal
            onCtaPress={action("on cta press")}
        />
    ))
    .add("3. Collect Reward", () => (
        <CollectRewardModal
            date={text("Date", "", "CollectReward")}
            onPress={action("on press")}
        />
    ));
