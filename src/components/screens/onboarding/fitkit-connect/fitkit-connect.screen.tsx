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
import { t } from "@locale";

interface IProps {
  connecting: boolean;
  fitKitAvailable: boolean;
  loading: boolean;
  onConnectPress: (platform: FitKitHealthTrackingPlatform) => void;
  onPrivacyPolicyPress: () => void;
  onSkipPress: () => void;
  dismissButtonLabel?: string;
}

const isShortToMediumSamsung = Style.isShortToMedium() && isSamsung();

const FitKitConnectScreen: FC<IProps> = ({
  connecting,
  fitKitAvailable,
  loading,
  onConnectPress,
  onPrivacyPolicyPress,
  onSkipPress,
  dismissButtonLabel,
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
        <LinkGroup data={getLinks(onSkipPress, onPrivacyPolicyPress, dismissButtonLabel)} />
      </CentredScreen>
    ) : (
      <Loading />
    )}
  </>
);

const getLinks = (onSkip: () => void, onPrivacy: () => void, dismissButtonLabel: string) => {
  return [
    {
      label: dismissButtonLabel || t("screens.fitkit_connect.secondary_button_label"),
      onPress: onSkip,
    },
    {
      label: t("screens.fitkit_connect.link_button_label"),
      onPress: onPrivacy,
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
