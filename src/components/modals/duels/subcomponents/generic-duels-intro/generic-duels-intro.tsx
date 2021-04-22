import * as React from "react";
import { Animated, View } from "react-native";
import { Text, Button, SecondaryButton } from "@atoms/index";
import { DuelAvatar } from "../avatar/duel-avatar";
import styles from "./generic-duels-intro.styles";
import { DuelStepProps } from "../../duels.types";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { Navigation } from "react-native-navigation";

interface IGenericDuelsIntro extends Partial<DuelStepProps> {
  type: "invite" | "response";
  heading: string;
  primaryBtnLabel: string;
  secondaryBtnLabel?: string;
}

function GenericDuelsIntro({
  type,
  heading,
  primaryBtnLabel,
  secondaryBtnLabel,
  opponent,
  user,
  loading,
  goToNextStep,
  onDeclinePress,
  isLoading,
  loadingLabel,
  componentId,
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

  const onPressLeftIcon = () => Navigation.dismissModal(componentId);

  if (loading) {
    return null;
  }

  const isPrimaryButtonLoading = (isLoading || loading) && loadingLabel === "primary";
  const isSecondaryButtonLoading = (isLoading || loading) && loadingLabel === "secondary";

  return (
    <View style={styles.introWrapper}>
      <TopBarAbsolute leftIcon="Close" onPressLeftIcon={onPressLeftIcon} rightIcon={null} />
      <Animated.View style={[styles.container, { opacity }]}>
        <View style={styles.titleSection}>
          <Text style={type === "invite" ? styles.headingInvite : styles.headingResponse}>{heading}</Text>
        </View>
        <View style={styles.avatarSection}>
          <DuelAvatar uri={user?.avatar} />
          <DuelAvatar uri={opponent?.avatar} reverse={true} />
        </View>
        <View style={styles.versusSection}>
          <View style={styles.flex120}>
            <Text style={styles.youText} bold={true}>
              You
            </Text>
          </View>
          <View style={styles.flex50}>
            <Text bold={true} style={styles.vsText}>
              VS
            </Text>
          </View>
          <View style={styles.flex120}>
            {opponent && opponent.firstName && opponent.lastName ? (
              <>
                <Text style={styles.opponentNameText} bold={true}>
                  {opponent?.firstName}
                </Text>
                <Text style={styles.opponentNameText} bold={true}>
                  {opponent?.lastName}
                </Text>
              </>
            ) : (
              <Text bold={true} style={styles.opponentFallback}>
                ?
              </Text>
            )}
          </View>
        </View>
        <View style={styles.buttonSection}>
          <Button
            isLoading={isPrimaryButtonLoading}
            disabled={isPrimaryButtonLoading || isSecondaryButtonLoading}
            onPress={goToNextStep}
            label={primaryBtnLabel}
          />
          {secondaryBtnLabel ? (
            <SecondaryButton
              isLoading={isSecondaryButtonLoading}
              disabled={isPrimaryButtonLoading || isSecondaryButtonLoading}
              onPress={onDeclinePress}
              label={secondaryBtnLabel}
              wrapperStyle={styles.secondaryBtnWrapper}
            />
          ) : null}
        </View>
      </Animated.View>
    </View>
  );
}

export default GenericDuelsIntro;
