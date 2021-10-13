import { Button, TextTemplate } from "@atoms";
import React from "react";
import { View, Image } from "react-native";
import styles from "./products-survey.styles";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";

interface IProps {
  onExitConfirmed: () => void;
}

function ProductsSurveyGreetings({ onExitConfirmed }: IProps) {
  return (
    <View style={styles.greetingsWrapper}>
      <GenericHeadingPad />
      <View style={styles.greetingsContainer}>
        <View style={styles.headerTextGreetings}>
          <TextTemplate type="b2">
            We appreciate your feedback. Thank you for helping us make YuLife the best insurance company in the world!
          </TextTemplate>
        </View>
        <View style={styles.imageWrapper}>
          <Image source={require("@assets/yuscreen/animals.png")} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button onPress={onExitConfirmed} size="Medium" label="Close" wrapperStyle={styles.submitButton} />
        </View>
      </View>
      <GenericHeadingAbsolute heading="What would you like to see?" onRightIconPress={onExitConfirmed} />
    </View>
  );
}

export default ProductsSurveyGreetings;
