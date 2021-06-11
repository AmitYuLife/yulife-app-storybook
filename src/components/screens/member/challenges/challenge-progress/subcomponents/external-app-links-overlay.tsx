import React from "react";
import { Platform, StyleSheet, View, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { useSelector } from "react-redux";
import { getActiveLevelSubtype } from "@redux/levels/levels.selectors";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { ExternalLinksProps, FiitExternalLinks, MeditationExternalLinks } from "./external-app-links";

const activeLevelSubtypeHashMap = {
  meditation: MeditationExternalLinks,
  fiit: FiitExternalLinks,
} as Record<string, (props: ExternalLinksProps) => JSX.Element>;

interface ExternalAppLinksOverlayProps {
  showScreen: boolean;
  setShowScreen: (val: boolean) => void;
}

export const ExternalAppLinksOverlay = ({ showScreen, setShowScreen }: ExternalAppLinksOverlayProps) => {
  const activeLevelSubtype = useSelector(getActiveLevelSubtype);

  const hideOverlay = () => setShowScreen(false);

  useBackHandler(() => {
    hideOverlay();

    return !!showScreen;
  });

  if (!showScreen) {
    return null;
  }

  const ExternalAppLinks = activeLevelSubtypeHashMap[activeLevelSubtype] || View;

  return (
    <View pointerEvents="box-none" style={styles.wrapper}>
      <View pointerEvents={showScreen ? "auto" : "none"} style={StyleSheet.absoluteFill}>
        <TouchableOpacityWithDelay onPress={() => setShowScreen(false)} activeOpacity={1} style={styles.background} />
      </View>
      <View style={styles.innerWrapper}>
        <ExternalAppLinks hideOverlay={hideOverlay} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.64)",
  } as ViewStyle,
  innerWrapper: {
    backgroundColor: Colours.neutral.white,
    borderRadius: 16,
    paddingTop: Style.adjust(32),
    paddingBottom: Platform.select({
      ios: Style.hasNotch ? Style.adjust(40) : Style.adjust(28),
      android: Style.adjust(20),
    }),
    paddingHorizontal: Style.adjust(32),
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  } as ViewStyle,
});
