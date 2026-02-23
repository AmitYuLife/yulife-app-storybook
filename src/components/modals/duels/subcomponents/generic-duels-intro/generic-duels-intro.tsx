import * as React from "react";
import { Animated, View } from "react-native";
import { TextTemplate } from "@atoms";
import { Button, SecondaryButton } from "@molecules";
import { DuelAvatar } from "../avatar/duel-avatar";
import styles from "./generic-duels-intro.styles";
import { DuelStepProps } from "../../duels.types";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import colours from "@styles/colours";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { formatOpponentName } from "@utils/duels";
import { t } from "@locale";
import { DUEL_NOTIFICATION_HEADING } from "@ids";

interface IGenericDuelsIntro extends Partial<DuelStepProps> {
  type: "invite" | "response";
  heading: string;
  primaryTranslationKey: string;
  secondaryBtnTranslationKey?: string;
}

function GenericDuelsIntro({
  type,
  heading,
  primaryTranslationKey,
  secondaryBtnTranslationKey,
  opponent,
  user,
  loading,
  goToNextStep,
  onDeclinePress,
  isLoading,
  loadingLabel,
  dismiss,
}: IGenericDuelsIntro) {
  const [opacity] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    if (!loading) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }
  }, [loading, opacity]);

  if (loading) {
    return null;
  }

  const isPrimaryButtonLoading = (isLoading || loading) && loadingLabel === "primary";
  const isSecondaryButtonLoading = (isLoading || loading) && loadingLabel === "secondary";

  return (
    <View style={styles.introWrapper}>
      <TopBarAbsolute leftIcon={LeftIcon.CLOSE} onPressLeftIcon={dismiss} rightIcon={null} />
      <Animated.View style={[styles.container, { opacity }]}>
        <View style={styles.titleSection} testID={DUEL_NOTIFICATION_HEADING(heading)}>
          <TextTemplate type={type === "invite" ? "h1" : "b1b"} textAlign="center" color={colours.darkestGray}>
            {heading}
          </TextTemplate>
        </View>
        <View style={styles.avatarSection}>
          <DuelAvatar uri={user?.avatar} />
          <DuelAvatar uri={opponent?.avatar} reverse={true} />
        </View>
        <View style={styles.versusSection}>
          <View>
            <TextTemplate type="h3" color={colours.darkGray}>
              {t("labels.you")}
            </TextTemplate>
          </View>
          <View style={styles.flex50}>
            <TextTemplate type="h3" color={colours.primary.p600}>
              {t("labels.vs")}
            </TextTemplate>
          </View>
          <View>
            <TextTemplate type="h3" color={colours.darkGray} textAlign="center">
              {formatOpponentName(opponent?.fullName)}
            </TextTemplate>
          </View>
        </View>
        <View style={styles.buttonSection}>
          <Button
            isLoading={isPrimaryButtonLoading}
            disabled={isPrimaryButtonLoading || isSecondaryButtonLoading}
            onPress={goToNextStep}
            translationKey={primaryTranslationKey}
          />
          {secondaryBtnTranslationKey ? (
            <SecondaryButton
              isLoading={isSecondaryButtonLoading}
              disabled={isPrimaryButtonLoading || isSecondaryButtonLoading}
              onPress={onDeclinePress}
              translationKey={secondaryBtnTranslationKey}
              wrapperStyle={styles.secondaryBtnWrapper}
            />
          ) : null}
        </View>
      </Animated.View>
    </View>
  );
}

export default GenericDuelsIntro;
