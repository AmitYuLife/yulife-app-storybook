import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import MinimalButton from "./minimalButton";
import { Colours } from "@styles/index";
import {
    withKnobs,
    text,
    number,
    boolean,
} from "@storybook/addon-knobs";

storiesOf("MinimalButton")
    .addDecorator(withKnobs)
    .addDecorator((g: () => React.ReactNode) => (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {g()}
        </View>
    ))
    .add("default", () => (
        <View style={{ width: number("width", 306) }}>
            <MinimalButton
                onPress={() => console.log("@! hello")}
                title={text("title", "hello")}
                height={number("height", 50)}
                disabled={boolean("disabled", false)}
                isLoading={boolean("loading", false)}
                color={text("color", "white")}
                backgroundColor={text("background", Colours.darkHotPink)}
                shadowColor={text("shadow", Colours.darkHotPinkShadow)}
                borderRadius={number("borderRadius", 50)}
            />
        </View>
    ));
