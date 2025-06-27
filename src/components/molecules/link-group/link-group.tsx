import * as React from "react";
import { View } from "react-native";
import { LinkButton } from "@molecules";
import styles from "./link-group.styles";

interface ILink {
  translationKey: string;
  onPress: () => void;
  testID?: string;
}

interface IProps {
  data: ILink[];
}

const LinkGroup = ({ data }: IProps) => (
  <View style={styles.wrapper}>
    {data.map(({ translationKey, onPress, testID }, index) => (
      <View key={index} style={styles.buttonWrapper}>
        <LinkButton wrapperStyle={styles.button} translationKey={translationKey} onPress={onPress} testID={testID} />
      </View>
    ))}
  </View>
);

export default LinkGroup;
