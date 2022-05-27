import { TextTemplate } from "@atoms";
import { Button } from "@molecules";
import React from "react";
import { View, Image } from "react-native";
import styles from "./products-survey.styles";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";

interface IProps {
  title: string;
  postSubmissionMessage: string;
  onExitConfirmed: () => void;
}

function ProductsSurveyGreetings({ onExitConfirmed, postSubmissionMessage, title }: IProps) {
  return (
    <View style={styles.greetingsWrapper}>
      <GenericHeadingPad />
      <View style={styles.greetingsContainer}>
        <View style={styles.headerTextGreetings}>
          <TextTemplate type="b2">{postSubmissionMessage}</TextTemplate>
        </View>
        <View style={styles.imageWrapper}>
          <Image source={require("@assets/yuscreen/animals.png")} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button onPress={onExitConfirmed} size="Large" label="Close" wrapperStyle={styles.submitButton} />
        </View>
      </View>
      <GenericHeadingAbsolute heading={title} onRightIconPress={onExitConfirmed} />
    </View>
  );
}

export default ProductsSurveyGreetings;
