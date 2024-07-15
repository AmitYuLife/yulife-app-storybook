import { TextTemplate } from "@atoms/index";
import { Button, CentredScreen } from "@molecules";
import React, { memo } from "react";
import { View } from "react-native";
import styles from "./generic-error.screen.styles";
import { useTranslation } from "@hooks";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";

interface IProps {
  onPressBack: () => void;
}

/**
 * this screen should only be used when an SDUI details page or similar screen has failed to be fetched
 * */
const GenericErrorScreen = ({ onPressBack }: IProps) => {
  const translations = useTranslation([
    "screens.generic_error.heading",
    "screens.generic_error.subheading",
    "labels.cta.got_it",
  ]);

  return (
    <CentredScreen>
      <View style={styles.wrapper}>
        <GenericHeadingPad />
        <View style={styles.contentWrapper}>
          <View accessible={true}>
            <TextTemplate type="h1" textAlign="center">
              {translations["screens.generic_error.heading"]}
            </TextTemplate>
            <TextTemplate type="b2" textAlign="center">
              {translations["screens.generic_error.subheading"]}
            </TextTemplate>
          </View>
          <View style={styles.buttonWrapper}>
            <Button onPress={onPressBack} size="Medium" translationKey="labels.cta.got_it" />
          </View>
        </View>
        <GenericHeadingAbsolute logo="yulife" onLeftIconPress={onPressBack} />
      </View>
    </CentredScreen>
  );
};

export default memo(GenericErrorScreen);
