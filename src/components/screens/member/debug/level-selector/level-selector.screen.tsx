import React, { useState, useCallback, useMemo, memo } from "react";
import { StyleSheet, View } from "react-native";
import { Colours, Style } from "@styles";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Button, TextInput } from "@molecules";
import { TextTemplate } from "@atoms";

interface IProps {
  currentLevel: number;
  yuniversalMap?: number;
  yuniversalLevel?: number;
  onLeftIconPress: () => void;
  onSubmit: (currentLevel: number, yuniversalMap?: number, yuniversalLevel?: number) => void;
}

const MAX_YUNIVERSAL_LEVEL = 6;
const LevelSelectorScreen = ({ currentLevel, yuniversalMap, yuniversalLevel, onLeftIconPress, onSubmit }: IProps) => {
  const [levelInput, setLevelInput] = useState(String(currentLevel));
  const [yuniversalMapInput, setYuniversalMapInput] = useState(yuniversalMap ? String(yuniversalMap) : "");
  const [yuniversalLevelInput, setYuniversalLevelInput] = useState(yuniversalLevel ? String(yuniversalLevel) : "");

  const onChangeLevel = useCallback((value: string) => {
    if (onlyContainsNumbers(value) && isLessThan(value, 1200)) {
      setLevelInput(value);
    }
  }, []);

  const onChangeYuniversalMap = useCallback((value: string) => {
    if (onlyContainsNumbers(value) && isLessThan(value, MAX_YUNIVERSAL_LEVEL + 1)) {
      setYuniversalMapInput(value);
    }
  }, []);

  const onChangeYuniversalLevel = useCallback((value: string) => {
    if (onlyContainsNumbers(value) && isLessThan(value, 8)) {
      setYuniversalLevelInput(value);
    }
  }, []);

  const saveCurrentLevel = useCallback(() => {
    onSubmit(Number(levelInput));
  }, [levelInput, onSubmit]);

  const saveYuniversalLevel = useCallback(() => {
    if (!yuniversalMapInput) {
      onSubmit(currentLevel);
      return;
    }

    const newYuniversalMap = Number(yuniversalMapInput);
    const newCurrentLevel = newYuniversalMap * 200 + 1;
    onSubmit(newCurrentLevel, newYuniversalMap, Number(yuniversalLevelInput));
  }, [currentLevel, yuniversalMapInput, yuniversalLevelInput]);

  const setCurrentLevelDisabled = useMemo(() => {
    const value = Number(levelInput);
    return Number.isNaN(value) || value <= 0 || value > 1200;
  }, [levelInput, onSubmit]);

  const setYuniversalLevelDisabled = useMemo(() => {
    if (!yuniversalMapInput && !yuniversalLevelInput) {
      return false;
    }

    const yuniversalMapValue = Number(yuniversalMapInput);
    const yuniversalLevelValue = Number(yuniversalLevelInput);
    return (
      !yuniversalMapInput ||
      !yuniversalLevelInput ||
      Number.isNaN(yuniversalMapValue) ||
      Number.isNaN(yuniversalLevelValue) ||
      yuniversalMapValue < 0 ||
      yuniversalMapValue > 5 ||
      yuniversalLevelValue < 0 ||
      yuniversalLevelValue > MAX_YUNIVERSAL_LEVEL + 1
    );
  }, [yuniversalMapInput, yuniversalLevelInput]);

  return (
    <View style={styles.container}>
      <GenericHeadingPad />
      <View style={styles.wrapper}>
        <TextTemplate type="b1" textAlign="center">
          Current Level
        </TextTemplate>
        <TextInput placeholder="level" style={styles.input} type="number" value={levelInput} onChange={onChangeLevel} />
        <Button
          size={"Medium"}
          onPress={saveCurrentLevel}
          translationKey="labels.cta.save"
          disabled={setCurrentLevelDisabled}
        />
        <View style={styles.padding} />
        <TextTemplate type="b1" textAlign="center">
          Yuniversal Map
        </TextTemplate>
        <TextInput
          placeholder="map"
          style={styles.input}
          type="number"
          value={yuniversalMapInput}
          onChange={onChangeYuniversalMap}
        />
        <TextTemplate type="b1" textAlign="center">
          Yuniversal Level
        </TextTemplate>
        <TextInput
          placeholder="level"
          style={styles.input}
          type="number"
          value={yuniversalLevelInput}
          onChange={onChangeYuniversalLevel}
        />
        <Button
          size={"Medium"}
          onPress={saveYuniversalLevel}
          translationKey="labels.cta.save"
          disabled={setYuniversalLevelDisabled}
        />
      </View>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={onLeftIconPress} />
    </View>
  );
};

export default memo(LevelSelectorScreen);

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
    width: Style.adjust(150),
    marginBottom: Style.adjust(10),
  },
  padding: {
    paddingTop: Style.adjust(40),
  },
});

const onlyContainsNumbers = (value: string) => /^\d*$/.test(value);
const isLessThan = (value: string, max: number) => !value || (Number(value) && Number(value) < max);
