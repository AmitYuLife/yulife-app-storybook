import { TextTemplate } from "@atoms/index";
import { Button, CentredScreen } from "@molecules";
import React, { memo } from "react";
import { View } from "react-native";
import styles from "./offline.screen.styles";
import { useTranslation } from "@hooks";
import { getTheme } from "@theme";

interface IProps {
  level: number;
  onPress: () => void;
}

const OfflineScreen = ({ level, onPress }: IProps) => {
  const { offlineScreen } = getTheme(level);
  const translations = useTranslation(["screens.offline.heading", "screens.offline.subheading", "labels.cta.got_it"]);

  return (
    <CentredScreen {...offlineScreen}>
      <View style={styles.wrapper}>
        <View style={styles.contentWrapper}>
          <View accessible={true}>
            <TextTemplate type="h1" color={offlineScreen.textColour} textAlign="center">
              {translations["screens.offline.heading"]}
            </TextTemplate>
            <TextTemplate type="b2" color={offlineScreen.textColour} textAlign="center">
              {translations["screens.offline.subheading"]}
            </TextTemplate>
          </View>
          <View style={styles.buttonWrapper}>
            <Button onPress={onPress} size="Medium" translationKey="labels.cta.got_it" />
          </View>
        </View>
      </View>
    </CentredScreen>
  );
};

export default memo(OfflineScreen);
