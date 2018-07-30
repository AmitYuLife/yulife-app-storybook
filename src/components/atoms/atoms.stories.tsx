import { action } from "@storybook/addon-actions";
import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";
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
    Stars,
    TextInput
} from "./";

storiesOf("Atoms", module)
    .addDecorator(withKnobs)
    .add("1. Blurb", () => (
        <CenterView>
            <Blurb label={text("Label", "Let's begin the journey of making you the best of yu!")} />
        </CenterView>
    ))
    .add("2. Button", () => (
        <CenterView>
            <Button
                type={Button.Types.PRIMARY}
                onPress={action("button-click")}
                label={text("Primary Label", "do a backflip", "PRIMARY")}
            />
            <Pad height={30} />
            <Button
                type={Button.Types.SECONDARY}
                onPress={action("button-click")}
                label={text("Secondary Label", "sign up", "SECONDARY")}
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
            <Heading label={text("Default Label", "Default heading", "DEFAULT")} />
            <Heading
                size={Heading.Sizes.LARGE}
                label={text("Large Label", "Large heading", "LARGE")}
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
                coins={number("Reward", 1000, {
                    max: 2000,
                    min: 0,
                    range: true,
                    step: 1,
                })}
            />
        </CenterView>
    ))
    .add("7. Stars", () => (
        <CenterView>
            <Stars
                isLeftHighlighted={boolean("Left Highlighted?", true, "Stars")}
                isMidHighlighted={boolean("Middle Highlighted?", true, "Stars")}
                isRightHighlighted={boolean("Right Highlighted?", true, "Stars")}
            />
        </CenterView>
    ));
