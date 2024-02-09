import React, { memo } from "react";
import { Button, SettingsHeader } from "@components/molecules";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import { permissionsStyles } from "./_styles";
import { t } from "@locale";
import { GoogleFitIcon } from "@atoms/icon/google-fit-icon";

interface IProps {
  connectGoogleFit: () => void;
}

const SwitchGoogleFitSection = ({ connectGoogleFit }: IProps) => {
  return (
    <>
      <View style={permissionsStyles.settingsHeader}>
        <SettingsHeader title={t("screens.permissions.switch_to_google_fit.title")} />
      </View>
      <View style={permissionsStyles.googleFitIconWrapper}>
        <GoogleFitIcon height={80} width={80} />
      </View>
      <View style={permissionsStyles.switchGoogleFitWrapper}>
        <TextTemplate type="b2">{t("screens.permissions.switch_to_google_fit.description")}</TextTemplate>
      </View>
      <Button
        size="Fill"
        label={t("screens.permissions.switch_to_google_fit.button_label")}
        wrapperStyle={permissionsStyles.googleFitActionButton}
        onPress={connectGoogleFit}
      />
    </>
  );
};

export default memo(SwitchGoogleFitSection);
