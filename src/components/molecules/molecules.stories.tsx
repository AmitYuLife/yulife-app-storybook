import { action } from "@storybook/addon-actions";
import { boolean, number, select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../../../storybook/stories/CenterView";
import { NavBar, TopBar } from "./";

storiesOf("Molecules", module)
    .addDecorator(withKnobs)
    .add("1. NavBar", () => (
        <CenterView background="dark">
            <NavBar
                activeIndex={select("Active Index", {0: "yucoin", 1: "quest", 2: "reward"}, 0, "NavBar")}
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
    ));
