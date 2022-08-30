import React, { memo } from "react";
import { TextTemplate } from "@atoms";
import { CalmButton, HeadspaceButton, FiitButton, LinkButton, MeditopiaButton } from "@molecules";
import { Style } from "@styles";
import { Platform, StyleSheet, View, ViewStyle } from "react-native";
import { useSelector } from "react-redux";
import { getUserFeatures } from "@redux/user/user.selectors";

export interface ExternalLinksProps {
  hideOverlay: () => void;
}

export const MeditationExternalLinks = memo(({ hideOverlay }: ExternalLinksProps) => {
  const features = useSelector(getUserFeatures);
  return (
    <>
      <TextTemplate type="h2" textAlign="center">
        Choose an app to start
      </TextTemplate>
      <View style={styles.spaceSmall} />
      <TextTemplate type="b2" textAlign="center">
        {`You can use any app that syncs mindfulness minutes to ${
          Platform.OS === "ios" ? "Apple Health" : "Google Fit"
        }`}
      </TextTemplate>
      {/* //@TODO: GS-340 - This is temporary until we release the new meditation, delete this after */}
      {features.newMediaPlayer ? null : <MeditopiaButton style={styles.spaceMedium} onPressCallback={hideOverlay} />}
      <CalmButton style={styles.spaceSmall} onPressCallback={hideOverlay} />
      <HeadspaceButton style={styles.spaceSmall} onPressCallback={hideOverlay} />

      <LinkButton wrapperStyle={styles.spaceXsmall} label="I'm using a different app" onPress={hideOverlay} />
    </>
  );
});

export const FiitExternalLinks = memo(({ hideOverlay }: ExternalLinksProps) => (
  <>
    <TextTemplate type="h2" textAlign="center">
      Get started with Fiit
    </TextTemplate>
    <View style={styles.spaceSmall} />
    <TextTemplate type="b2" textAlign="center">
      Complete any Fiit class to get rewarded
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
