import * as React from "react";
import { TextTemplate } from "@atoms";
import { Linking, Platform, StyleSheet, View } from "react-native";
import { Style } from "@styles";
import { ActionButton, Button, SecondaryButton } from "@components/molecules";
import { challengeEndAction } from "@redux/levels/levels.actions";
import { useTranslation } from "@hooks";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActiveLevel } from "@redux/levels/levels.selectors";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { HealthAppIcon } from "@atoms/icon/health-app-icon";
import { FaqIcon } from "@atoms/icon/faq-icon";
import { openAppleHealthSummary } from "@services/app-link";

const MINIMUM_LOADING_TIME = 500;

function ChallengeNoDataModal() {
  const dispatch = useDispatch();
  const { isLoading: isLevelLoading } = useSelector(getActiveLevel);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const t = useTranslation([
    "screens.challenge_no_data.title",
    "screens.challenge_no_data.description",
    "screens.challenge_no_data.buttons.retry",
    "screens.challenge_no_data.buttons.cancel_challenge",
    "screens.challenge_no_data.buttons.faq",
    "screens.challenge_no_data.buttons.open_apple_health",
    "screens.daily.fitkit.help.faq_uri",
  ]);

  useEffect(() => {
    if (!isLevelLoading && isLoading) {
      // Fake minimum loading time so loading states don't flash if network is too quick
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, MINIMUM_LOADING_TIME);

      return () => clearTimeout(timeout);
    }

    if (!isLoading && isLevelLoading) {
      setIsLoading(true);
    }
  }, [isLevelLoading, isLoading]);

  const onClose = useCallback(() => {
    Navigation.dismissModal(MODALS.challengeNoData);
  }, []);

  const onCancel = useCallback(() => {
    dispatch(challengeEndAction({ skipDefer: true, location: "challenge-no-data.modal onCancel" }));
    onClose();
  }, [dispatch, onClose]);

  const onRetry = useCallback(() => {
    dispatch(challengeEndAction({ location: "challenge-no-data.modal onRetry" }));
  }, [dispatch]);

  const openHelp = useCallback(() => {
    Linking.openURL(t["screens.daily.fitkit.help.faq_uri"]);
  }, [t]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.mainContentWrapper}>
        <View style={styles.contentWrapper}>
          <View style={styles.titleContainer}>
            <TextTemplate type="h2" textAlign="center">
              {t["screens.challenge_no_data.title"]}
            </TextTemplate>
          </View>
          <TextTemplate type="b2" textAlign="center">
            {t["screens.challenge_no_data.description"]}
          </TextTemplate>
        </View>
        <View style={styles.buttonsWrapper}>
          <View style={styles.retryButton}>
            <Button onPress={onRetry} translationKey="screens.challenge_no_data.buttons.retry" isLoading={isLoading} />
          </View>
          <SecondaryButton onPress={onCancel} translationKey="screens.challenge_no_data.buttons.cancel_challenge" />
        </View>
      </View>
      <View style={styles.actionButtons}>
        <ActionButton label={t["screens.challenge_no_data.buttons.faq"]} onPress={openHelp} icon={<FaqIcon />} />
        {Platform.OS === "ios" ? (
          <ActionButton
            onPress={openAppleHealthSummary}
            label={t["screens.challenge_no_data.buttons.open_apple_health"]}
            icon={<HealthAppIcon />}
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: Style.adjust(25),
    paddingBottom: Style.adjust(10),
    minHeight: Style.adjust(220),
    justifyContent: "space-between",
  },
  actionButtons: {
    marginBottom: Style.adjust(24),
  },
  mainContentWrapper: {
    flex: 1,
    justifyContent: "center",
    marginTop: Style.adjust(32),
  },
  retryButton: {
    marginBottom: Style.adjust(5),
  },
  contentWrapper: {
    marginBottom: Style.adjust(30),
  },
  titleContainer: {
    marginBottom: Style.adjust(15),
  },
  buttonsWrapper: {},
});

export default ChallengeNoDataModal;
