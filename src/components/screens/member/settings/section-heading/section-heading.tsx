import * as React from "react";
import { FC } from "react";
import { View } from "react-native";
import { Text } from "@atoms";
import styles from "./section-heading.styles";

interface IProps {
  heading: string;
}

const SectionHeading: FC<IProps> = ({ heading }) => (
  <>
    <View style={styles.headingWrapper}>
      <Text bold={true} style={styles.heading}>
        {heading}
      </Text>
    </View>
  </>
);

export default SectionHeading;
