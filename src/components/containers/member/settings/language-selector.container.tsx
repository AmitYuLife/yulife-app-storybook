import React, { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Navigation } from "@navigation/main";
import { getUserFeatures } from "@redux/user/user.selectors";
import { GAME_SETTINGS_LANGUAGE_SELECTOR_SCREEN } from "@ids";
import { t, getAvailableLocaleOptions, getCurrentLocale, setLocale } from "@locale";
import SettingLayout from "./setting.layout";
import Logger from "@services/logging/logger";

type Props = {
  componentId: string;
};

const LanguageSelectorContainer = ({ componentId }: Props) => {
  const features = useSelector(getUserFeatures);
  const [locale, setLocalLocale] = useState(getCurrentLocale());
  const onRightIconPress = useCallback(() => Navigation.popToRoot(componentId), [componentId]);
  const onLeftIconPress = useCallback(() => Navigation.pop(componentId), [componentId]);

  return (
    <SettingLayout
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      headerText={t("screens.language_selector_settings.title")}
      screenTestId={GAME_SETTINGS_LANGUAGE_SELECTOR_SCREEN}
      options={getAvailableLocaleOptions(features?.showAllLanguages).map((o) => ({
        id: o.id,
        title: `${o.flag} ${o.name}`,
        description: "",
        isSelected: o.id === locale || o.overwrite === locale,
        onPress: async () => {
          setLocalLocale(o.id);
          await setLocale(o.id, true);
          Logger.setUserLanguagePreferenceOnIntercom(o.intercomLanguage);
          await Navigation.setAppLoading(
            t("screens.language_selector_settings.setting_language_loading_message", { value: o.name })
          );
        },
      }))}
    />
  );
};

export default memo(LanguageSelectorContainer);
