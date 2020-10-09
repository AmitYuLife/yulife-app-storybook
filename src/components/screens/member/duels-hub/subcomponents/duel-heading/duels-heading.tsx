import React from "react";
import styles from "./duels-heading.styles";
import { Text } from "@atoms";

interface IProps {
  label: string;
  inactive?: boolean;
}

const DuelsHeading = ({ label, inactive }: IProps) => {
  const style = [styles.heading];

  if (inactive) {
    style.push(styles.inactive);
  }

  return <Text style={style}>{label}</Text>;
};

export default DuelsHeading;
