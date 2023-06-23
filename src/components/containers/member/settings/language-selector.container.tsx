import React, { memo, useCallback, useState } from "react";
import { Navigation } from "@navigation/main";
import SettingLayout from "./setting.layout";
import { GAME_SETTINGS_LANGUAGE_SELECTOR_SCREEN } from "@ids";
import { t, getAvailableLocales, getLocale, setLocale } from "@locale";

type Props = {
  componentId: string;
};

const LanguageSelectorContainer = ({ componentId }: Props) => {
  const [locale, setLocalLocale] = useState(getLocale());
  const onRightIconPress = useCallback(() => Navigation.popToRoot(componentId), [componentId]);
  const onLeftIconPress = useCallback(() => Navigation.pop(componentId), [componentId]);

  return (
    <SettingLayout
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      headerText={t("screens.language_selector_settings.title")}
      screenTestId={GAME_SETTINGS_LANGUAGE_SELECTOR_SCREEN}
      options={getAvailableLocales().map((o) => ({
        id: o.id,
        title: `${o.flag} ${o.name}`,
        description: "",
        isSelected: o.id === locale || o.overwrite === locale,
        onPress: () => {
          setLocale(o.id);
          setLocalLocale(o.id);
        },
      }))}
    />
  );
};

export default memo(LanguageSelectorContainer);
