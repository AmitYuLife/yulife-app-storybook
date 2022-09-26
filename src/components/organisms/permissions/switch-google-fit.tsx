import React, { memo } from "react";
import { Button, SettingsHeader } from "@components/molecules";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import { styles } from "./_styles";
import { t } from "@locale";
import { GoogleFitIcon } from "@atoms/icon/google-fit-icon";

interface IProps {
  connectGoogleFit: () => void;
}

const SwitchGoogleFitSection = ({ connectGoogleFit }: IProps) => {
  return (
    <>
      <View style={styles.settingsHeader}>
        <SettingsHeader title={"Google Fit"} />
      </View>
      <View style={styles.googleFitIconWrapper}>
        <GoogleFitIcon height={80} width={80} />
      </View>
      <View style={styles.switchGoogleFitWrapper}>
        <TextTemplate type="b2">{t("screens.permissions.switch_to_google_fit")}</TextTemplate>
      </View>
      <Button
        size="Fill"
        label="Use Google Fit"
        wrapperStyle={styles.googleFitActionButton}
        onPress={connectGoogleFit}
      />
    </>
  );
};

export default memo(SwitchGoogleFitSection);
