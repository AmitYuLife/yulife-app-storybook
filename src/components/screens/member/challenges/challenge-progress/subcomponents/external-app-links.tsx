import React, { memo } from "react";
import { TextTemplate } from "@atoms";
import { CalmButton, HeadspaceButton, FiitButton, LinkButton, MeditopiaButton } from "@molecules";
import { Style } from "@styles";
import { Platform, StyleSheet, View, ViewStyle } from "react-native";
import { useSelector } from "react-redux";
import { getUserFeatures } from "@redux/user/user.selectors";
import { t } from "@locale";

export interface ExternalLinksProps {
  hideOverlay: () => void;
}

export const MeditationExternalLinks = memo(({ hideOverlay }: ExternalLinksProps) => {
  const features = useSelector(getUserFeatures);
  return (
    <>
      <TextTemplate type="h2" textAlign="center">
        {t("screens.challenge_progress.external_app_links.heading")}
      </TextTemplate>
      <View style={styles.spaceSmall} />
      <TextTemplate type="b2" textAlign="center">
        {t("screens.challenge_progress.external_app_links.subheading", { syncApp: Platform.select({ ios: t("apple_health"), android: t("google_fit") }) })}
      </TextTemplate>
      {/* //@TODO: GS-340 - This is temporary until we release the new meditation, delete this after */}
      {features.newMediaPlayer ? null : <MeditopiaButton style={styles.spaceMedium} onPressCallback={hideOverlay} />}
      <CalmButton style={styles.spaceSmall} onPressCallback={hideOverlay} />
      <HeadspaceButton style={styles.spaceSmall} onPressCallback={hideOverlay} />

      <LinkButton wrapperStyle={styles.spaceXsmall} label={t("screens.challenge_progress.external_app_links.different_app_cta_label")} onPress={hideOverlay} />
    </>
  );
});

export const FiitExternalLinks = memo(({ hideOverlay }: ExternalLinksProps) => (
  <>
    <TextTemplate type="h2" textAlign="center">
      {t("screens.challenge_progress.external_app_links.fiit.heading")}
    </TextTemplate>
    <View style={styles.spaceSmall} />
    <TextTemplate type="b2" textAlign="center">
      {t("screens.challenge_progress.external_app_links.fiit.subheading")}
    </TextTemplate>
    <FiitButton style={styles.spaceMedium} onPressCallback={hideOverlay} />
  </>
));

const styles = StyleSheet.create({
  spaceXsmall: {
    marginTop: Style.adjust(4),
  } as ViewStyle,
  spaceSmall: {
    marginTop: Style.adjust(12),
  } as ViewStyle,
  spaceMedium: {
    marginTop: Style.adjust(32),
  } as ViewStyle,
});
