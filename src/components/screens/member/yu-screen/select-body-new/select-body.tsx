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
import { AvatarBodyType } from "@graphql/_core/schema/globalTypes";
import { showYuModal } from "@navigation/root";

interface IProps {
  onContinue: (bodyType: AvatarBodyType) => void;
  heading: AvatarBuilderHeading;
  bodyType: AvatarBodyType;
}

const BODY_HEIGHT = Style.adjust(344);

function SelectBody({ onContinue, heading, bodyType }: IProps) {
  const [selectedBody, selectBody] = useState<AvatarBodyType>(bodyType);
  const isBackPressed = useRef(false);

  const isMale = selectedBody === AvatarBodyType.male;
  const isFemale = selectedBody === AvatarBodyType.female;
  const isNone = selectedBody === AvatarBodyType.neutral;

  // respect if parent prop changes
  useEffect(() => selectBody(bodyType), [bodyType]);

  const selectMaleBody = useCallback(() => {
    selectBody(AvatarBodyType.male);
  }, []);

  const selectFemaleBody = useCallback(() => {
    selectBody(AvatarBodyType.female);
  }, []);

  const onContinuePressed = useCallback(() => {
    onContinue(selectedBody);
  }, [onContinue, selectedBody]);

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
          <TextTemplate type="h1">Pick a body type</TextTemplate>
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
          <Button disabled={isNone} onPress={onContinuePressed} label="Continue" />
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

  showYuModal({
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
