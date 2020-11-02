import React from "react";
import styles from "./duels-heading.styles";
import { Text } from "@atoms";

interface IProps {
  label: string;
  inactive?: boolean;
}

const DuelsHeading = ({ label, inactive }: IProps) => {
  return (
    <Text style={styles.heading} bold={!inactive}>
      {label}
    </Text>
  );
};

export default DuelsHeading;
