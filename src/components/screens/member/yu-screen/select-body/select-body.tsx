import React, { useCallback, useEffect, useState, memo } from "react";
import { View } from "react-native";
import { Button, TextTemplate } from "@atoms";
import FemaleBody from "../svg/female-body";
import MaleBody from "../svg/male-body";
import styles from "./select-body.styles";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { Style } from "@styles";
import { AvatarBodyType } from "@graphql/_core/schema/globalTypes";
import { BoxOption } from "@molecules";

interface IProps {
  onContinue: (bodyType: AvatarBodyType) => void;
  bodyType: AvatarBodyType;
  heading: string;
  onPressExitButton: () => void;
}

const BODY_HEIGHT = Style.adjust(344);

function SelectBody({ onContinue, bodyType, heading, onPressExitButton }: IProps) {
  const [selectedBody, selectBody] = useState<AvatarBodyType>(bodyType);

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
      <GenericHeadingAbsolute heading={heading} onLeftIconPress={onPressExitButton} leftIcon="CLOSE" />
    </View>
  );
}

export default memo(SelectBody);
