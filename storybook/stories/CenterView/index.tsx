import * as React from "react";
import { Component } from "react";
import { StyleSheet, View } from "react-native";
import style from "./style";

type BackgroundType = "light" | "dark";

interface IProps {
    background?: BackgroundType;
}

class CenterView extends Component<IProps> {

    public render() {
        const { background = "light", children } = this.props;

        return (
            <View
                style={StyleSheet.flatten([
                    style.main,
                    style[background]
                ])}
            >
                {children}
            </View>
        );
    }
}

export default CenterView;
