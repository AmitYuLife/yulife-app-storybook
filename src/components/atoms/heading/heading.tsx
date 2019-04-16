import * as React from "react";
import { PureComponent } from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import styles from "./heading.styles";

interface IProps {
    bold?: boolean;
    label: string;
    size?: Sizes;
    style?: TextStyle;
}
enum SIZES {
    DEFAULT = "default",
    LARGE = "large",
    SMALL = "small"
}

type Sizes = "default" | "large" | "small";

class Heading extends PureComponent<IProps> {
    public static Sizes = SIZES;

    public render() {
        const { label, size, style, bold } = this.props;
        return (
            <Text
                style={StyleSheet.flatten([
                    styles.base,
                    styles[size || SIZES.DEFAULT],
                    bold ? styles.bold : null,
                    style
                ])}
            >
                {label}
            </Text>
        );
    }
}

export default Heading;
