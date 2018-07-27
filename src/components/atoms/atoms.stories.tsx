import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Text } from "react-native";
import CenterView from "../../../storybook/stories/CenterView";
import {
    Blurb,
    Button,
    CentredScreen,
    CoinConfetti,
    Heading,
    Pad,
    TextInput
} from "./";

storiesOf("Atoms", module)
    .addDecorator(withKnobs)
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
    .add("4. Heading", () => (
        <CenterView>
            <Heading label="This is the default heading" />
            <Heading
                size={Heading.Sizes.LARGE}
                label="This is a large heading"
            />
        </CenterView>
    ))
    .add("5. TextInput", () => (
        <CenterView>
            <Text>Email</Text>
            <TextInput
                value=""
                onChange={action("email changed")}
                hasError={false}
                errorMessage=""
                type={TextInput.Types.EMAIL}
                onBlur={action("email blur")}
            />
            <Pad height={30} />
            <Text>Password</Text>
            <TextInput
                value=""
                onChange={action("password changed")}
                hasError={false}
                errorMessage=""
                type={TextInput.Types.PASSWORD}
                onBlur={action("password blur")}
            />
        </CenterView>
    ))
    .add("6a. Coin Confetti - without reward", () => (
        <CenterView>
            <CoinConfetti />
        </CenterView>
    ))
    .add("6b. Coin Confetti - with reward", () => (
        <CenterView>
            <CoinConfetti
                coins={2500}
            />
        </CenterView>
    ));
