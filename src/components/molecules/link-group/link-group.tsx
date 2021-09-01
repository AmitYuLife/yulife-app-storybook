import * as React from "react";
import { View } from "react-native";
import { LinkButton } from "@atoms";
import styles from "./link-group.styles";

interface ILink {
  label: string;
  onPress: () => void;
}

interface IProps {
  data: ILink[];
}

const LinkGroup = ({ data }: IProps) => (
  <View style={styles.wrapper}>
    {data.map(({ label, onPress }, index) => (
      <View key={index} style={styles.buttonWrapper}>
        <LinkButton wrapperStyle={styles.button} label={label} onPress={onPress} />
        {data.length === 1 || index + 1 !== data.length ? null : <View style={styles.divider} />}
      </View>
    ))}
  </View>
);

export default LinkGroup;
