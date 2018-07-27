import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../../../storybook/stories/CenterView";
import { NavBar, TopBar } from "./";

storiesOf("Molecules", module)
    .addDecorator(withKnobs)
    .add("1. NavBar", () => (
        <CenterView>
            <NavBar
                activeIndex={1}
                hasNotification={false}
                scale={0.5}
            />
        </CenterView>
    ))
    .add("2. TopBar", () => (
        <CenterView>
            <TopBar
                onPress={action("topbar pressed")}
                coins={12345}
            />
        </CenterView>
    ));
