import React, { useCallback, useEffect, useState, memo, useMemo } from "react";
import { ScrollView, View } from "react-native";
import { TextTemplate } from "@atoms";
import { Button, LinkButton } from "@molecules";
import FemaleBody from "../svg/female-body";
import MaleBody from "../svg/male-body";
import styles from "./select-body.styles";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Style } from "@styles";
import { BoxOption } from "@molecules";
import { useTranslation } from "@hooks";
import { AvatarBodyType } from "@graphql/__generated";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

interface IProps {
  bodyType: AvatarBodyType;
  hasYumoji?: boolean;
  onContinue: (bodyType: AvatarBodyType) => void;
  onPressExitButton: () => void;
}

const BODY_HEIGHT = Style.adjust(344);

const SelectBody = ({ bodyType, hasYumoji, onContinue, onPressExitButton }: IProps) => {
  const [selectedBody, selectBody] = useState<AvatarBodyType>(bodyType);
  const translations = useTranslation([
    "labels.cta.continue",
    "screens.yumoji_builder.create.title",
    "screens.yumoji_builder.create.link",
    "screens.yumoji_builder.edit.title",
  ]);

  const { theme } = useTheme();

  const bodySelectedStyle = useMemo(
    () => ({ borderColor: theme.colors.primary.p600, backgroundColor: theme.colors.primary.p50 }),
    [theme]
  );

  const isMale = selectedBody === AvatarBodyType.Male;
  const isFemale = selectedBody === AvatarBodyType.Female;
  const isNone = selectedBody === AvatarBodyType.Neutral;

  // respect if parent prop changes
  useEffect(() => selectBody(bodyType), [bodyType]);

  const selectMaleBody = useCallback(() => {
    selectBody(AvatarBodyType.Male);
  }, []);

  const selectFemaleBody = useCallback(() => {
    selectBody(AvatarBodyType.Female);
  }, []);

  const onContinuePressed = useCallback(() => {
    onContinue(selectedBody);
  }, [onContinue, selectedBody]);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <GenericHeadingAbsolute logo="yulife" onRightIconPress={onPressExitButton} rightIcon="CLOSE" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.elementWrapper}>
          <View>
            <View style={styles.title}>
              <TextTemplate textAlign="center" type="h1">
                {hasYumoji
                  ? translations["screens.yumoji_builder.edit.title"]
                  : translations["screens.yumoji_builder.create.title"]}
              </TextTemplate>
            </View>
          </View>
          <View style={styles.selectorWrapper}>
            <BoxOption
              onPress={selectMaleBody}
              isSelected={isMale}
              selectedStyle={bodySelectedStyle}
              innerHeight={BODY_HEIGHT}
            >
              <MaleBody isSelected={isMale} />
            </BoxOption>

            <BoxOption
              onPress={selectFemaleBody}
              isSelected={isFemale}
              selectedStyle={bodySelectedStyle}
              innerHeight={BODY_HEIGHT}
            >
              <FemaleBody isSelected={isFemale} />
            </BoxOption>
          </View>
        </View>
        <View style={styles.buttonsWrapper}>
          <Button disabled={isNone} onPress={onContinuePressed} translationKey="labels.cta.continue" />
          {!hasYumoji ? (
            <LinkButton onPress={onPressExitButton} translationKey="screens.yumoji_builder.create.link" />
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(SelectBody);
