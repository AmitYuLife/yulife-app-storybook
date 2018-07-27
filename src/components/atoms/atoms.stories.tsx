import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../../../storybook/stories/CenterView";
import {
    Blurb,
    Button,
    CentredScreen,
    Heading
} from "./";

storiesOf("Atoms", module)
    .add("1. Blurb", () => (
        <CenterView>
            <Blurb label="Let's begin the journey of making you the best of yu!" />
        </CenterView>
    ))
    .add("2. Button", () => (
        <CenterView>
            <Button
                type={Button.Types.SECONDARY}
                onPress={action("button-click")}
                label="sign up"
            />
        </CenterView>
    ))
    .add("3a. Centred Screen - Forest", () => (
        <CentredScreen
            footerImage={CentredScreen.FooterImages.FOREST}
        />
    ))
    .add("3b. Centred Screen - Large Forest", () => (
        <CentredScreen
            footerImage={CentredScreen.FooterImages.LARGE_FOREST}
        />
    ))
    .add("4a. Heading - default", () => (
        <CenterView>
            <Heading label="This is the default heading" />
        </CenterView>
    ))
    .add("4a. Centred Screen - large", () => (
        <CenterView>
            <Heading
                size={Heading.Sizes.LARGE}
                label="This is a large heading"
            />
        </CenterView>
    ));
