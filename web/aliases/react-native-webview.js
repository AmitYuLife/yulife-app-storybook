import React from "react";
import { View } from "react-native";

const WebView = (props) => React.createElement(View, { style: [{ flex: 1 }, props.style] });
export const ShouldStartLoadRequest = {};
export default WebView;
