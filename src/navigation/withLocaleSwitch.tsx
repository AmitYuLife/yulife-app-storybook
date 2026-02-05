import React, { ComponentType, useCallback } from "react";
import { setDeviceLocale } from "@redux/device/device.actions";
import { updateIsSwitchingLocale } from "@redux/detox/detox.actions";
import { useDispatch, useSelector } from "react-redux";
import { DevVersionSelector } from "@organisms";
import { Language, getAvailableLocaleOptions } from "@locale";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import { getDeviceLocale } from "@redux/device/device.selectors";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getIsSwitchingDeviceLocale } from "@redux/detox/detox.selectors";
import { DETOX_ENABLED } from "@services/socket";
import { queryYuScreenLayout } from "@redux/yu-screen/yu-screen.actions";

// TODO: should be in @components with the other hocs
export const withLocaleSwitch = (WrappedComponent: ComponentType<any>) => (props: any) => {
  const dispatch = useDispatch();
  const isSwitching = useSelector(getIsSwitchingDeviceLocale);
  const deviceLocale = useSelector(getDeviceLocale);
  const features = useSelector(getUserFeatures);

  const setVersion = useCallback((locale: Language) => {
    dispatch(updateIsSwitchingLocale(true));
    dispatch(setDeviceLocale({ locale }));
    dispatch(getUserDataStart({ types: [AppDataType.socialGroups] }));
    dispatch(queryYuScreenLayout());
    setTimeout(() => dispatch(updateIsSwitchingLocale(false)), 350);
  }, []);

  if (!DETOX_ENABLED && !features?.showLanguageTool) {
    return <WrappedComponent {...props} />;
  }

  return (
    <>
      {isSwitching ? null : <WrappedComponent {...props} />}
      <DevVersionSelector
        key={"lang-slctr-" + props.componentId}
        feature="showLanguageTool"
        marginTop={0}
        version={deviceLocale}
        setVersion={setVersion}
        defaultVersion={deviceLocale}
        options={getAvailableLocaleOptions(features?.showAllLanguages).map((l) => l.id)}
        textTemplateType="l4b"
      />
    </>
  );
};
