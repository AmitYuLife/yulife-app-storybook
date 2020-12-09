import { Text, Button } from "@atoms/index";
import React from "react";
import { View, Image } from "react-native";
import styles from "./products-survey.styles";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";

interface IProps {
  onExitConfirmed: () => void;
}

function ProductsSurveyGreetings({ onExitConfirmed }: IProps) {
  return (
    <View>
      <GenericHeadingPad />
      <View style={styles.greetingsWrapper}>
        <View style={{ flex: 1 }}>
          <Text style={styles.headerTextGreetings}>
            We appreciate your feedback. Thank you for helping us make yulife the best insurance company in the world!
          </Text>
        </View>
        <View style={styles.imageWrapper}>
          <Image source={require("../../../../../../assets/yuscreen/animals.png")} />
        </View>
        <View style={{ flex: 1, marginBottom: 32 }}>
          <Button
            onPress={onExitConfirmed}
            type="Primary"
            size="Medium"
            label="Close"
            wrapperStyle={styles.submitButton}
          />
        </View>
      </View>
      <GenericHeadingAbsolute heading="What Would You Like To See?" onLeftIconPress={onExitConfirmed} />
    </View>
  );
}

export default ProductsSurveyGreetings;
