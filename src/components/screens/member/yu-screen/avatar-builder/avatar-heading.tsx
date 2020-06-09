import * as React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import styles from "./avatar-heading.styles";
import { Text } from "@atoms/index";

interface IProps {
  heading: string;
  onDonePresed: () => void;
  onXPressed: () => void;
  showDoneButton?: boolean;
}

function AvatarHeading({ heading, onDonePresed, onXPressed, showDoneButton }: IProps) {
  return (
    <View style={styles.paddingHorizontal}>
      <View style={styles.headingWrapper}>
        <TouchableOpacity onPress={onXPressed}>
          <View style={styles.exitButtonWrapper}>
            <Image source={require("../../../../../../assets/icons/close.png")} />
          </View>
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.heading}>
          {heading}
        </Text>
        {!showDoneButton ? (
          <View />
        ) : (
          <TouchableOpacity style={{ alignSelf: "center" }} onPress={onDonePresed}>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default AvatarHeading;
