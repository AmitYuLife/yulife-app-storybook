import { Text, Button } from "@atoms/index";
import React from "react";
import { View, Image, SafeAreaView } from "react-native";
import styles from "./products-survey.styles";
import GenericHeading from "@atoms/generic-heading/generic-heading";

interface IProps {
  onExitConfirmed: () => void;
}

function ProductsSurveyGreetings({ onExitConfirmed }: IProps) {
  return (
    <SafeAreaView>
      <GenericHeading heading="What Would You Like To See?" onLeftIconPress={onExitConfirmed} />
      <View style={styles.greetingsWrapper}>
        <View style={{ flex: 1 }}>
          <Text style={styles.headerTextGreetings}>
            We appreciate your feedback. Thank you for helping us make yulife the best insurance company in the world!
          </Text>
        </View>
        <View style={styles.imageWrapper}>
          <Image source={require("../../../../../../assets/yuscreen/animals.png")}></Image>
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
    </SafeAreaView>
  );
}

export default ProductsSurveyGreetings;
