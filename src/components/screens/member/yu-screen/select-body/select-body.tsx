import React, { useCallback, useEffect } from "react";
import { Button, GenericHeading } from "@atoms";
import { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, BackHandler } from "react-native";
import FemaleBody from "../svg/female-body";
import MaleBody from "../svg/male-body";
import styles from "./select-body.styles";
import { AvatarBuilderHeading } from "../avatar-builder/avatar.types";

export type SelectedBody = "None" | "Male" | "Female";

interface IProps {
  onMaleBodySelected: () => void;
  onFemaleBodySelected: () => void;
  onContinue: () => void;
  onExitConfirmed: () => void;
  heading: AvatarBuilderHeading;
  bodyType: SelectedBody;
}

function SelectBody({
  onMaleBodySelected,
  onFemaleBodySelected,
  onContinue,
  onExitConfirmed,
  heading,
  bodyType,
}: IProps) {
  const [selectedBody, selectBody] = useState<SelectedBody>(bodyType);

  const isMale = selectedBody === "Male";
  const isFemale = selectedBody === "Female";
  const isNone = selectedBody === "None";

  const selectMaleBody = useCallback(() => {
    selectBody("Male");
  }, []);

  const selectFemaleBody = useCallback(() => {
    selectBody("Female");
  }, []);

  const onContinuePressed = useCallback(
    (bodySelected: SelectedBody) => {
      bodySelected === "Male" ? onMaleBodySelected() : onFemaleBodySelected();
      onContinue();
    },
    [onContinue, onMaleBodySelected, onFemaleBodySelected]
  );

  const backHandler = useCallback(() => {
    onExitConfirmed();
    return true;
  }, [onExitConfirmed]);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backHandler);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backHandler);
    };
  }, [backHandler]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <GenericHeading heading={heading} onLeftIconPress={onExitConfirmed} border="new" leftIcon="CLOSE" />
      <View style={styles.elementWrapper}>
        <View style={styles.selectorWrapper}>
          <TouchableOpacity onPress={selectMaleBody}>
            <View style={isMale ? styles.bodySelected : styles.body}>
              <MaleBody color={isMale ? "#F9BDD9" : "#C7C7C7"} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={selectFemaleBody}>
            <View style={isFemale ? styles.bodySelected : styles.body}>
              <FemaleBody color={isFemale ? "#F9BDD9" : "#C7C7C7"} />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.pickBodyText}>Pick a body type</Text>
        <View style={styles.buttonsWrapper}>
          <Button type="Primary" disabled={isNone} onPress={() => onContinuePressed(selectedBody)} label="Continue" />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SelectBody;
