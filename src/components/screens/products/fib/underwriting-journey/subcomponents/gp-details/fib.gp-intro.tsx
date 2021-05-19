import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, ScrollView, Platform, Linking } from "react-native";
import { Style, Colours } from "@styles";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import Footer from "@components/screens/products/fib/underwriting-journey/subcomponents/footer/footer";
import { CopyIntro } from "@organisms/fib/copy/intro";
import { GPRequestIcon } from "@atoms/icon/gp-request-icon";
import { NotVisibleEyeIcon } from "@atoms/icon/not-visible-eye-icon";
import { handleOpenWebView } from "@navigation/utils";
import Config from "react-native-config";
import Logger from "@services/logging/logger";

interface IProps {
  onClose: () => void;
  onNavigateBack: () => void;
  onContinue: () => void;
}

const copyIntroCards = [
  {
    icon: <GPRequestIcon />,
    description: "We may need to request a medical report from your doctor.",
  },
  {
    icon: <NotVisibleEyeIcon />,
    description: "Your report will **not** be seen by your employer.",
  },
];

const handlePressLinkButton = async () => {
  try {
    if (Platform.OS === "ios") {
      handleOpenWebView({ uri: Config.PRIVACY_POLICY_URL, title: "Privacy Policy" });
    } else {
      await Linking.openURL(Config.PRIVACY_POLICY_URL);
    }
  } catch (error) {
    Logger.error(error, { file: "fib.gp-intro", platform: Platform.OS });
  }
};

const linkButton = { action: handlePressLinkButton, label: "Privacy policy" };

const GPIntro = memo(({ onNavigateBack, onContinue, onClose }: IProps) => {
  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
        <View style={styles.copyWrapper}>
          <CopyIntro title="GP Report" cards={copyIntroCards} />
          <View style={{ height: Footer.HEIGHT }} />
        </View>
      </ScrollView>
      <Footer
        firstButton={{
          action: onContinue,
          label: "Continue",
        }}
        linkButton={linkButton}
      />
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={onNavigateBack} onRightIconPress={onClose} />
    </View>
  );
});

export default GPIntro;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
  copyWrapper: {
    paddingTop: Style.adjust(46),
    marginHorizontal: Style.adjust(24),
  },
});
