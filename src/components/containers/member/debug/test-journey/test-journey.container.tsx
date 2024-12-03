import React, { useCallback, useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import { uniq } from "lodash";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { TextTemplate } from "@atoms";
import { Button, TextInput, TouchableOpacityWithDelay } from "@molecules";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Colours, Style } from "@styles";
import { Storage, StorageKey } from "@utils/storage";
import { useAsyncEffect } from "@hooks";

const RECENT_SEARCHES_LIMIT = 10;

type TestJourneyStorageData = {
  recent?: string[]; // Last X recent searches
};

interface IProps {
  componentId: string;
}

const TestJourney = ({ componentId }: IProps) => {
  const [journeyInput, setJourneyInput] = useState("");
  const [storageData, setStorageData] = useState<TestJourneyStorageData>({});

  useAsyncEffect(async () => {
    const storageDataStr = await Storage.getItem(StorageKey.debugTestJourney);
    setStorageData(storageDataStr ? JSON.parse(storageDataStr) : {});
  }, []);

  const onClose = useCallback(() => {
    Keyboard.dismiss();
    Navigation.pop(ROUTES.debug);
  }, []);

  const updateStorageData = useCallback(async (text: string, removeText: boolean = false) => {
    const storageDataStr = await Storage.getItem(StorageKey.debugTestJourney);
    const data: TestJourneyStorageData = storageDataStr ? JSON.parse(storageDataStr) : {};

    const trimmedText = text.trim();
    const dataRecent = data?.recent || [];
    const recent = removeText ? dataRecent.filter((x) => x !== trimmedText) : [trimmedText, ...dataRecent];

    const newData: TestJourneyStorageData = {
      ...data,
      recent: uniq(recent).slice(0, RECENT_SEARCHES_LIMIT),
    };

    setStorageData(newData);
    await Storage.setItem(StorageKey.debugTestJourney, JSON.stringify(newData));
  }, []);

  const onSubmit = useCallback(() => {
    updateStorageData(journeyInput);
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
  }, [journeyInput, updateStorageData]);

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
        <View style={styles.recent}>
          {(storageData?.recent || []).map((recentSearchString) => (
            <View key={recentSearchString} style={styles.recentEntry}>
              <TouchableOpacityWithDelay
                onPress={() => {
                  setJourneyInput(recentSearchString);
                }}
              >
                <TextTemplate type="b2b" color={Colours.neutral.n700}>
                  {recentSearchString}
                </TextTemplate>
              </TouchableOpacityWithDelay>
              <TouchableOpacityWithDelay
                onPress={() => {
                  updateStorageData(recentSearchString, true);
                }}
                style={styles.clearRecentEntry}
              >
                <TextTemplate type="b2b" color={Colours.darkHotPink}>
                  x
                </TextTemplate>
              </TouchableOpacityWithDelay>
            </View>
          ))}
        </View>
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
  recent: {
    flex: 1,
    alignItems: "center",
    padding: Style.adjust(20),
    width: "100%",
  },
  recentEntry: {
    alignItems: "center",
    width: "100%",
  },
  clearRecentEntry: {
    position: "absolute",
    right: Style.adjust(0),
  },
  input: {
    marginBottom: Style.adjust(10),
  },
});

export default TestJourney;
