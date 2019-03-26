import { action } from "@storybook/addon-actions";
import { boolean, number, object, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import {
    AnimatedChest,
    ChallengeCompleteModal,
    ChallengeDetailsModal,
    CollectRewardModal,
    GenericModal,
    StreaksModal
} from "./index";

storiesOf("Modals", module)
    .addDecorator(withKnobs)
    .add("1. Challenge Details", () => (
        <ChallengeDetailsModal
            challengeType={select(
                "Challenge Type",
                ["brisk walk", "short stroll", "long walk", "meditation"],
                "brisk walk",
                "ChallengeDetails"
            )}
            duration={text("Duration", "0-3", "ChallengeDetails")}
            onPressClose={action("on press close")}
            onPressCta={action("on press cta")}
            milestones={object(
                "Milestones",
                [
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
                ],
                "ChallengeDetails"
            )}
            unit="steps"
        />
    ))
    .add("2. Challenge Complete", () => (
        <ChallengeCompleteModal isLoading={boolean("isLoading", true)} onCtaPress={action("on cta press")} />
    ))
    .add("3. Collect Reward", () => (
        <CollectRewardModal date={text("Date", "", "CollectReward")} onPress={action("on press")} yucoin={20} />
    ))
    .add("4. Generic Modal", () => (
        <GenericModal
            heading={text("heading", "the voucher is not currently available")}
            subheading={text("subheading", "Please come back later.")}
            ctaLabel={text("ctaLabel", "check other rewards")}
        />
    ))
    .add("5. Animated Chest", () => (
        <AnimatedChest
            isLocked={boolean("isLocked", false)}
            onPressCta={action("pressed animated chest cta")}
            heading={text("heading", "heading")}
            ctaLabel={text("cta", "cta")}
        />
    ))
    .add("6. Streaks", () => (
        <StreaksModal
            streakCompleted={number("streakCompleted", 0, {
                max: 5,
                min: 0,
                range: true,
                step: 1
            })}
            streakMax={number("streakMax", 1, {
                max: 5,
                min: 1,
                range: true,
                step: 1
            })}
            isDoneToday={boolean("isTodayDone", true)}
            onPressCtaPrimary={action("pressed streak cta primary")}
            onPressCtaSecondary={action("pressed streak cta secondary")}
            reward="250 yucoin"
            nextStreakAvailableAt=""
        />
    ));
