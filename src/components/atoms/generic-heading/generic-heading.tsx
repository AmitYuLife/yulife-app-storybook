import * as React from "react";
import { SFC } from "react";
import { StyleSheet, View } from "react-native";
import Text from "../text/text";
import styles from "./generic-heading.styles";

interface IProps {
    heading: string;
    subheading?: string;
    hidesBorder?: boolean;
}

const GenericHeading: SFC<IProps> = ({ heading, hidesBorder, subheading }) => (
    <View style={styles.paddingHorizontal}>
        <View
            style={StyleSheet.flatten([
                styles.headingWrapper,
                hidesBorder ? { borderBottomWidth: 0 } : null,
                subheading ? null : styles.paddingBottom
            ])}
        >
            <Text numberOfLines={1} bold={true} style={styles.heading}>
                {heading}
            </Text>
        </View>
        {subheading && (
            <View style={StyleSheet.flatten([styles.subheadingWrapper, styles.paddingBottom])}>
                <Text style={styles.subheading}>{subheading}</Text>
            </View>
        )}
    </View>
);

export default GenericHeading;
