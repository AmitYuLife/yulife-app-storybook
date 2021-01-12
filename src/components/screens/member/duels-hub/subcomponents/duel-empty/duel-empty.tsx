import React from "react";
import styles from "./duel-empty.styles";
import { Button, Text } from "@atoms";
import { Image, View } from "react-native";
import images from "../../duels-hub.images";

interface IProps {
  text: string;
  buttonText: string;
  onPress: () => void;
}

function _DuelEmpty({ text, buttonText, onPress }: IProps) {
  return (
    <View>
      <View style={styles.emptyStateOutsideWrapper}>
        <Image style={styles.image} source={images.yugi} />
        <View style={styles.emptyStateWrapper}>
          <Text style={styles.emptyStateText}>{text}</Text>
        </View>
      </View>
      <Button label={buttonText} type="Primary" onPress={onPress} />
    </View>
  );
}

const DuelEmpty = React.memo(_DuelEmpty);

export default DuelEmpty;
