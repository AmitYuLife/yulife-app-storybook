import { LinkGroup } from "@components/molecules";
import React, { FC } from "react";
import { Loading, Pad } from "@atoms";
import FitKitAvailable from "./fitkit-available";
import FitKitUnavailable from "./fitkit-unavailable";
import { Style } from "@styles";
import { isSamsung } from "@utils";
import { FitKitHealthTrackingPlatform } from "@services/fitkit/fitkit.service";
import { CentredScreen } from "@molecules";
import { StyleSheet } from "react-native";
import { SCREEN_ONBOARDING_FITKIT_CONNECT_BUTTON_SKIP, SCREEN_ONBOARDING_FITKIT_CONNECT_BUTTON_PRIVACY } from "@ids";

interface IProps {
  connecting: boolean;
  fitKitAvailable: boolean;
  loading: boolean;
  onConnectPress: (platform: FitKitHealthTrackingPlatform) => void;
  onPrivacyPolicyPress: () => void;
  onSkipPress: () => void;
  dismissButtonTranslationKey?: string;
}

const isShortToMediumSamsung = Style.isShortToMedium() && isSamsung();

const FitKitConnectScreen: FC<IProps> = ({
  connecting,
  fitKitAvailable,
  loading,
  onConnectPress,
  onPrivacyPolicyPress,
  onSkipPress,
  dismissButtonTranslationKey,
}) => (
  <>
    {!loading ? (
      <CentredScreen backgroundImage={require("@assets/centred-screen/forestBackground.png")} style={styles.wrapper}>
        {isShortToMediumSamsung ? <Pad height={50} /> : <Pad height={120} />}
        {fitKitAvailable ? (
          <FitKitAvailable connecting={connecting} onConnectPress={onConnectPress} />
        ) : (
          <FitKitUnavailable />
        )}
        {isShortToMediumSamsung ? null : <Pad height={19} />}
        <LinkGroup data={getLinks(onSkipPress, onPrivacyPolicyPress, dismissButtonTranslationKey)} />
      </CentredScreen>
    ) : (
      <Loading />
    )}
  </>
);

const getLinks = (onSkip: () => void, onPrivacy: () => void, dismissButtonTranslationKey: string) => {
  return [
    {
      translationKey: dismissButtonTranslationKey || "screens.fitkit_connect.secondary_button_label",
      onPress: onSkip,
      testID: SCREEN_ONBOARDING_FITKIT_CONNECT_BUTTON_SKIP,
    },
    {
      translationKey: "screens.fitkit_connect.link_button_label",
      onPress: onPrivacy,
      testID: SCREEN_ONBOARDING_FITKIT_CONNECT_BUTTON_PRIVACY,
    },
  ];
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: Style.adjust(265),
  },
});

export default FitKitConnectScreen;
