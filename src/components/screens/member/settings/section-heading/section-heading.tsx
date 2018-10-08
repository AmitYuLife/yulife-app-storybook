import * as React from "react";
import { SFC } from "react";
import { View } from "react-native";
import { Text } from "../../../../atoms";
import styles from "./section-heading.styles";

interface IProps {
    heading: string;
}

const SectionHeading: SFC<IProps> = ({ heading }) => (
    <View style={styles.paddingHorizontal}>
        <View style={styles.headingWrapper}>
            <Text bold={true} style={styles.heading}>
                {heading}
            </Text>
        </View>
    </View>
);

export default SectionHeading;
