import React, { useCallback, useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { TextTemplate } from "@atoms";
import { Button, TextInput } from "@molecules";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Colours, Style } from "@styles";

interface IProps {
  componentId: string;
}

const TestJourney = ({ componentId }: IProps) => {
  const [journeyInput, setJourneyInput] = useState("");

  const onClose = useCallback(() => {
    Keyboard.dismiss();
    Navigation.pop(ROUTES.debug);
  }, []);

  const onSubmit = useCallback(() => {
    Keyboard.dismiss();
    Navigation.push(componentId, {
      component: {
        id: ROUTES.journey,
        name: ROUTES.journey,
        passProps: {
          journeyId: journeyInput,
        },
      },
    });
  }, [journeyInput]);

  return (
    <View style={styles.container}>
      <GenericHeadingPad />
      <View style={styles.wrapper}>
        <TextTemplate type="b1" textAlign="center">
          Journey ID
        </TextTemplate>
        <TextInput
          placeholder="journey_id"
          style={styles.input}
          type="text"
          value={journeyInput}
          onChange={setJourneyInput}
        />
        <Button
          testID="test-journey-go-button"
          size={"Medium"}
          onPress={onSubmit}
          translatedLabel={"Go"}
          disabled={journeyInput.length === 0}
        />
      </View>
      <GenericHeadingAbsolute heading="Test Journey" onRightIconPress={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.neutral.n50,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    padding: Style.adjust(20),
  },
  input: {
    marginBottom: Style.adjust(10),
  },
});

export default TestJourney;
