import React from "react";
import { ActivityIndicator } from "react-native";

const Loading = () => (
    <ActivityIndicator
        animating={true}
        style={{ flex: 1, alignItems: "center", justifyContent: "center", height: 80 }}
        size="large"
    />
);

export default Loading;
