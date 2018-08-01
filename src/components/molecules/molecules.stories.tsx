import { action } from "@storybook/addon-actions";
import { boolean, number, object, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import {
    ChallengesList,
    ChallengeTile,
    NavBar,
    Streak,
    TopBar,
} from ".";
import CenterView from "../../../storybook/stories/CenterView";

storiesOf("Molecules", module)
    .addDecorator(withKnobs)
    .add("1. NavBar", () => (
        <CenterView background="dark">
            <NavBar
                activeIndex={select("Active Index", {
                    0: "yucoin",
                    1: "quest",
                    2: "reward"
                }, 0, "NavBar")}
                hasNotification={boolean("Notification?", false, "NavBar")}
                scale={0.5}
            />
        </CenterView>
    ))
    .add("2. TopBar", () => (
        <CenterView>
            <TopBar
                onPress={action("topbar pressed")}
                coins={number("Coins", 246, {
                    max: 35000,
                    min: 0,
                    range: true,
                    step: 1,
                }, "TopBar")}
            />
        </CenterView>
    ))
    .add("3. Streak", () => (
        <Streak
            onPress={action("streak pressed")}
            currentStreak={number("Current Streak", 2, {
                max: 4,
                min: 0,
                range: true,
                step: 1,
            })}
            maxStreak={4}
            isFinished={boolean("Is Finished?", false)}
        />
    ))
    .add("4. Challenge Tile", () => (
        <CenterView background="dark">
            <ChallengeTile
                challengeType={text("Challenge Type", "brisk walk", "ChallengeTile")}
                duration={text("Duration", "3-10 mins", "ChallengeTile")}
                image={select("Image", ["bird", "squirrel", "elephant", "ostrich"], "squirrel", "ChallengeTile")}
                onPress={action("on press")}
                reward={text("Reward", "0-3", "ChallengeTile")}
            />
        </CenterView>
    ))
    .add("5. Challenges List", () => (
        <CenterView background="dark">
            <ChallengesList
                challenges={object("Challenges", [
                    {
                        challengeType: "brisk walk",
                        duration: "10",
                        image: ChallengeTile.Images.SQUIRREL,
                        reward: "0-3",
                    },
                    {
                        challengeType: "long walk",
                        duration: "30",
                        image: ChallengeTile.Images.OSTRICH,
                        reward: "0-6",
                    },
                    {
                        challengeType: "short stroll",
                        duration: "5",
                        image: ChallengeTile.Images.ELEPHANT,
                        reward: "0-1",
                    },
                    {
                        challengeType: "meditation",
                        duration: "3-10",
                        image: ChallengeTile.Images.BIRD,
                        reward: "0-3",
                    }
                ], "Challenges")}
            />
        </CenterView>
    ));
