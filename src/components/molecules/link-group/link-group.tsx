import * as React from "react";
import { SFC } from "react";
import { View } from "react-native";
import { Button } from "../../atoms";
import styles from "./link-group.styles";

interface ILink {
  label: string;
  onPress: () => void;
}

interface IProps {
  data: ILink[];
}

const LinkGroup: SFC<IProps> = ({ data }) => (
  <View style={styles.wrapper}>
    {data.map(({ label, onPress }, index) => (
      <View key={index} style={styles.buttonWrapper}>
        <Button wrapperStyle={styles.button} type="Link" label={label} onPress={onPress} />
        {data.length === 1 || index + 1 !== data.length ? null : <View style={styles.divider} />}
      </View>
    ))}
  </View>
);

export default LinkGroup;
