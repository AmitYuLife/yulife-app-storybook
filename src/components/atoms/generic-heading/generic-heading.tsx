import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../";
import styles from "./generic-heading.styles";

interface IProps {
    heading: string;
    hidesBorder?: boolean;
}

class GenericHeading extends PureComponent<IProps> {
    public render() {
        return (
            <View style={styles.padding}>
                <View
                    style={
                        StyleSheet.flatten([
                            styles.headingWrapper,
                            this.props.hidesBorder
                                ? { borderBottomWidth: 0 }
                                : null
                        ])}
                >
                    <Text
                        bold={true}
                        style={styles.heading}
                    >
                        {this.props.heading}
                    </Text>
                </View>
            </View>
        );
    }
}

export default GenericHeading;
