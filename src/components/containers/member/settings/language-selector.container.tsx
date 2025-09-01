import React, { memo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigation } from "@navigation/main";
import { getUserFeatures } from "@redux/user/user.selectors";
import { GAME_SETTINGS_LANGUAGE_SELECTOR_SCREEN } from "@ids";
import { t, getAvailableLocaleOptions, isRTL } from "@locale";
import SettingLayout from "./setting.layout";
import { setDeviceLocale } from "@redux/device/device.actions";
import { getDeviceLocale } from "@redux/device/device.selectors";

type Props = {
  componentId: string;
};

const LanguageSelectorContainer = ({ componentId }: Props) => {
  const dispatch = useDispatch();
  const features = useSelector(getUserFeatures);
  const locale = useSelector(getDeviceLocale);
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
        title: isRTL() ? `${o.name} ${o.flag}` : `${o.flag} ${o.name}`,
        description: "",
        isSelected: o.id === locale || o.overwrite === locale,
        onPress: () => {
          dispatch(setDeviceLocale({ locale: o.id, shouldMutateTheApi: true }));
          const key = "screens.language_selector_settings.setting_language_loading_message";
          Navigation.setAppLoading(t(key, { value: o.name }));
        },
      }))}
    />
  );
};

export default memo(LanguageSelectorContainer);
