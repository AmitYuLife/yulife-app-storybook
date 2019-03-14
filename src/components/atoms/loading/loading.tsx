import { Colours } from "@styles/index";
import * as React from "react";
import { ActivityIndicator } from "react-native";

const Loading = () => (
    <ActivityIndicator
        animating={true}
        color={Colours.darkHotPink}
        style={{ flex: 1, alignItems: "center", justifyContent: "center", height: 80 }}
        size="large"
    />
);

export default Loading;
