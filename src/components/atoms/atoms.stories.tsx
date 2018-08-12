import { action } from "@storybook/addon-actions";
import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Text } from "react-native";
import {
    Blurb,
    BlurProvider,
    Button,
    CentredScreen,
    CoinConfetti,
    Heading,
    Pad,
    Stars,
    TextInput
} from ".";
import CenterView from "../../../storybook/stories/CenterView";
import { CollectRewardModal } from "../modals";
import { SignUpRewardScreen } from "../screens";

storiesOf("Atoms", module)
    .addDecorator(withKnobs)
    .add("1. BlurProvider", () => (
        <BlurProvider
            renderOverlay={({ toggleOverlay }) => (
                <CollectRewardModal
                    onPress={toggleOverlay}
                />
            )}
            render={({ toggleOverlay }) => (
                <SignUpRewardScreen
                    onCollectPress={toggleOverlay}
                    reward={200}
                />
            )}
        />
    ))
    .add("2. Blurb", () => (
        <CenterView>
            <Blurb label={text("Label", "Let's begin the journey of making you the best of yu!")} />
        </CenterView>
    ))
    .add("3. Button", () => (
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
    .add("4a. Centred Screen - Forest", () => (
        <CentredScreen
            footerImage={CentredScreen.FooterImages.FOREST}
        />
    ))
    .add("4b. Centred Screen - Large Forest", () => (
        <CentredScreen
            footerImage={CentredScreen.FooterImages.LARGE_FOREST}
        />
    ))
    .add("5. Heading", () => (
        <CenterView>
            <Heading label={text("Default Label", "Default heading", "DEFAULT")} />
            <Heading
                size={Heading.Sizes.LARGE}
                label={text("Large Label", "Large heading", "LARGE")}
            />
        </CenterView>
    ))
    .add("6. TextInput", () => (
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
    .add("7a. Coin Confetti - without reward", () => (
        <CenterView>
            <CoinConfetti />
        </CenterView>
    ))
    .add("7b. Coin Confetti - with reward", () => (
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
    .add("8. Stars", () => (
        <CenterView>
            <Stars
                isLeftHighlighted={boolean("Left Highlighted?", true, "Stars")}
                isMidHighlighted={boolean("Middle Highlighted?", true, "Stars")}
                isRightHighlighted={boolean("Right Highlighted?", true, "Stars")}
            />
        </CenterView>
    ));
