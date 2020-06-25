import * as React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import styles from "./avatar-heading.styles";
import { Text, Back } from "@atoms/index";

interface IProps {
  heading: string;
  onDonePressed: () => void;
  onBackPressed?: () => void;
  onXPressed?: () => void;
  showDoneButton?: boolean;
  hasBackButton: boolean;
}

function AvatarHeading({ heading, onDonePressed, onXPressed, onBackPressed, showDoneButton, hasBackButton }: IProps) {
  const onPressHandler = hasBackButton ? onBackPressed : onXPressed;
  return (
    <View style={styles.paddingHorizontal}>
      <View style={styles.headingWrapper}>
        <TouchableOpacity onPress={onPressHandler}>
          <View style={styles.exitButtonWrapper}>
            {hasBackButton ? <Back /> : <Image source={require("../../../../../../assets/icons/close.png")} />}
          </View>
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.heading}>
          {heading}
        </Text>
        {!showDoneButton ? (
          <View />
        ) : (
          <TouchableOpacity style={{ alignSelf: "center" }} onPress={onDonePressed}>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default AvatarHeading;
