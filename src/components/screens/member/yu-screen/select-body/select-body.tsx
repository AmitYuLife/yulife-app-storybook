import React, { useCallback, useEffect, useState, useRef, MutableRefObject } from "react";
import { View } from "react-native";
import { Navigation } from "react-native-navigation";
import { Button, BoxOption, TextTemplate } from "@atoms";
import FemaleBody from "../svg/female-body";
import MaleBody from "../svg/male-body";
import styles from "./select-body.styles";
import { AvatarBuilderHeading } from "../avatar-builder/avatar.types";
import { useBackHandler } from "@services/hooks/useBackHandler";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { MODALS, ROUTES } from "@navigation/constants";
import Logger from "@services/logging/logger";
import { Style } from "@styles";
import { TEXT_TEMPLATE } from "@ids";

export type SelectedBody = "None" | "Male" | "Female";

interface IProps {
  onMaleBodySelected: () => void;
  onFemaleBodySelected: () => void;
  onContinue: () => void;
  heading: AvatarBuilderHeading;
  bodyType: SelectedBody;
}

const BODY_HEIGHT = Style.adjust(344);

function SelectBody({ onMaleBodySelected, onFemaleBodySelected, onContinue, heading, bodyType }: IProps) {
  const [selectedBody, selectBody] = useState<SelectedBody>(bodyType);
  const isBackPressed = useRef(false);

  const isMale = selectedBody === "Male";
  const isFemale = selectedBody === "Female";
  const isNone = selectedBody === "None";

  // respect if parent prop changes
  useEffect(() => selectBody(bodyType), [bodyType]);

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

  const backButtonHandler = useCallback(() => {
    if (!isBackPressed.current) {
      isBackPressed.current = true;
      showExitModal(isBackPressed);

      return true;
    }

    // never
    return false;
  }, [isBackPressed]);

  useBackHandler(backButtonHandler);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <View style={styles.elementWrapper}>
        <View style={styles.title}>
          <TextTemplate type="h1" testID={TEXT_TEMPLATE("Pick a body type")}>
            {" "}
            Pick a body type
          </TextTemplate>
        </View>
        <View style={styles.selectorWrapper}>
          <BoxOption
            onPress={selectMaleBody}
            isSelected={isMale}
            selectedStyle={styles.bodySelected}
            innerHeight={BODY_HEIGHT}
          >
            <MaleBody isSelected={isMale} />
          </BoxOption>

          <BoxOption
            onPress={selectFemaleBody}
            isSelected={isFemale}
            selectedStyle={styles.bodySelected}
            innerHeight={BODY_HEIGHT}
          >
            <FemaleBody isSelected={isFemale} />
          </BoxOption>
        </View>
        <View style={styles.buttonsWrapper}>
          <Button disabled={isNone} onPress={() => onContinuePressed(selectedBody)} label="Continue" />
        </View>
      </View>
      <GenericHeadingAbsolute
        heading={heading}
        onLeftIconPress={() => {
          showExitModal(isBackPressed);
        }}
        leftIcon="CLOSE"
      />
    </View>
  );
}

export default SelectBody;

const showExitModal = (isBackPressed: MutableRefObject<boolean>) => {
  const setInitialState = () => {
    Navigation.dismissModal(MODALS.generic);
    isBackPressed.current = false;
  };

  Navigation.showModal({
    component: {
      id: MODALS.generic,
      name: MODALS.generic,
      passProps: {
        heading: "Exit Yumoji builder?",
        subheading: "Are you sure you want to exit? You will lose any unsaved changes.",
        ctaLabel: "Keep Editing",
        onPress: setInitialState,
        onPressBack: setInitialState,
        ctaLabelSecondary: "Exit",
        onPressSecondary: () => {
          Logger.logMixpanelEvent("avatar_save", { type: "discarded" });
          Navigation.dismissAllModals();
          Navigation.popTo(ROUTES.yuScreen);
        },
      },
    },
  });
};
