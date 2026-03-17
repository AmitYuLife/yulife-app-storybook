import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import { Image, Source, TextTemplate } from "@atoms";
import { Button, SecondaryButton } from "@molecules";
import styles from "./generic.styles";
import { GENERIC_SCREEN_HEADING, GENERIC_SCREEN_CTA } from "@ids";

type ButtonProps = React.ComponentProps<typeof Button>;
export interface IGenericModalProps {
  heading: string;
  subheading: string;
  isPrimaryOnePressOnly?: boolean;
  onPressBack?: () => void;
  ctaLabel: string;
  onPress?: ButtonProps["onPress"];
  onPressSecondary?: ButtonProps["onPress"];
  ctaLabelSecondary?: string;
  isPrimaryLoading?: ButtonProps["isLoading"];
  isSecondaryLoading?: ButtonProps["isLoading"];
  textAlign?: React.ComponentProps<typeof TextTemplate>["textAlign"];
  image?: {
    source: Source;
    width: number;
    height: number;
  };
}

const GenericScreen = ({
  image,
  heading,
  subheading,
  ctaLabel,
  onPress,
  onPressSecondary,
  ctaLabelSecondary,
  isPrimaryLoading,
  isSecondaryLoading,
  isPrimaryOnePressOnly = false,
  textAlign = "center",
}: IGenericModalProps) => {
  const [hasPressedPrimary, setHasTouchedPrimary] = useState(false);
  const onPressPrimary = () => {
    if (isPrimaryOnePressOnly) {
      setHasTouchedPrimary(true);
    }

    if (onPress) {
      onPress();
    }
  };

  const renderPrimaryButton = onPress && ctaLabel;
  const renderSecondaryButton = onPressSecondary && ctaLabelSecondary;
  return (
    <View style={styles.wrapper}>
      {!image ? null : <Image style={styles.image} source={image.source} width={image.width} height={image.height} />}
      <TextTemplate textAlign={textAlign} type="h2" testID={GENERIC_SCREEN_HEADING(heading)}>
        {heading}
      </TextTemplate>
      <View style={styles.subheadingWrapper}>
        <TextTemplate textAlign={textAlign} type="b2">
          {subheading}
        </TextTemplate>
      </View>
      {!renderPrimaryButton ? null : (
        <Button
          testID={GENERIC_SCREEN_CTA(ctaLabel)}
          isLoading={isPrimaryLoading || hasPressedPrimary}
          wrapperStyle={styles.buttonWrapper}
          translatedLabel={ctaLabel}
          onPress={onPressPrimary}
        />
      )}
      {!renderSecondaryButton ? null : (
        <SecondaryButton
          testID={GENERIC_SCREEN_CTA(ctaLabelSecondary)}
          wrapperStyle={renderPrimaryButton ? styles.buttonWrapperSecondary : styles.buttonWrapper}
          translatedLabel={ctaLabelSecondary}
          onPress={onPressSecondary || (() => null)}
          isLoading={isSecondaryLoading}
        />
      )}
    </View>
  );
};

export default GenericScreen;
