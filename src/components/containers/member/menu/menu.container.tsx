import { bottomTabs, MODALS, ROUTES } from "@navigation/constants";
import * as React from "react";
import { Alert } from "react-native";
import DeviceInfo from "react-native-device-info";
import Intercom from "@intercom/intercom-react-native";
import { Navigation } from "@navigation/main";
import { useDispatch, useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";
import { getPushNotifications } from "@redux/device/device.selectors";
import { logOutStart, openMyAccount } from "@redux/user/user.actions";
import { getUserFeatures } from "@redux/user/user.selectors";
import { MenuScreen } from "@screens";
import assets, { LINKS, LinkTypes } from "./assets";
import { IS_DEVELOP } from "@utils";
import { showYuModal } from "@navigation/root";
import Logger from "@services/logging/logger";
import { t } from "@locale";
import { LayoutComponent } from "react-native-navigation";

const MenuContainer = () => {
  const dispatch = useDispatch();
  const currentRoute = useSelector(getRouteState);
  const features = useSelector(getUserFeatures);
  const permissions = useSelector(getPushNotifications);

  const handleIntercom = React.useCallback(() => {
    const callback = () => Intercom.displayMessenger();

    if (permissions.status !== "enabled") {
      showYuModal({
        component: {
          id: MODALS.pushNotifications,
          name: MODALS.pushNotifications,
          passProps: {
            callback,
            permissions,
          },
        },
      });
    } else {
      Logger.logMixpanelEvent("screen_view", { name: "chat" });
      callback();
    }
  }, [permissions]);

  const handlePressLogout = React.useCallback(() => {
    Alert.alert(
      "Log out?",
      "Your progress and YuCoin will be waiting for you when you log back in. Are you sure you want to log out from YuLife?",
      [
        {
          style: "cancel",
          text: "Cancel",
        },
        {
          onPress: () => dispatch(logOutStart()),
          text: "Log Out",
        },
      ]
    );
  }, [dispatch]);

  const handlePressLink = React.useCallback(
    (link: LinkTypes) => (): null => {
      switch (link) {
        case LINKS.ACTIVITY:
          handlePush(currentRoute, ROUTES.activityHistory);
          return null;
        case LINKS.SETTINGS:
          handlePush(currentRoute, ROUTES.settings);
          return null;
        case LINKS.TOOLS:
          handlePush(currentRoute, ROUTES.tools);
          return null;
        case LINKS.SUPPORT:
          handleIntercom();
          return null;
        case LINKS.DEBUG:
          handlePush(currentRoute, ROUTES.debug);
          return null;
        case LINKS.LEADERBOARD:
          handlePush(currentRoute, ROUTES.leaderboards);
          return null;
        case LINKS.LOGOUT:
          handlePressLogout();
          return null;
        case LINKS.MEMBER:
          handleClose();
          dispatch(openMyAccount());
          return null;
        case LINKS.WELLBEING_HUB:
          handlePush(currentRoute, ROUTES.wellbeingHubItems);
          return null;
        case LINKS.REFERRALS_INFO:
          handlePush(currentRoute, ROUTES.referralInformation, {}, { sourceId: ROUTES.menu });
          return null;
        default:
          return null;
      }
    },
    [currentRoute, dispatch, handleIntercom]
  );

  const links = React.useMemo(
    () => [
      {
        condition: true,
        label: t("screens.menu.activity_history.label"),
        onPress: handlePressLink(LINKS.ACTIVITY),
        source: assets[LINKS.ACTIVITY],
      },
      {
        condition: true,
        label: t("screens.menu.my_account.label"),
        onPress: handlePressLink(LINKS.MEMBER),
        source: assets[LINKS.MEMBER],
      },
      {
        condition: true,
        label: t("screens.menu.wellbeing_hub.label"),
        onPress: handlePressLink(LINKS.WELLBEING_HUB),
        source: assets[LINKS.WELLBEING_HUB],
      },
      {
        condition: true,
        label: t("screens.menu.settings.label"),
        onPress: handlePressLink(LINKS.SETTINGS),
        source: assets[LINKS.SETTINGS],
      },
      {
        condition: features.showHelperTools,
        label: t("screens.menu.tools.label"),
        onPress: handlePressLink(LINKS.TOOLS),
        source: assets[LINKS.SETTINGS],
      },
      {
        condition: true,
        label: t("screens.menu.chat.label"),
        onPress: handlePressLink(LINKS.SUPPORT),
        source: assets[LINKS.SUPPORT],
      },
      {
        condition: true,
        label: t("screens.menu.logout.label"),
        onPress: handlePressLink(LINKS.LOGOUT),
        source: assets[LINKS.LOGOUT],
      },
    ],
    [handlePressLink]
  );

  return (
    <MenuScreen
      onPressClose={handleClose}
      links={links}
      version={DeviceInfo.getVersion()}
      onDebugPress={features.showDebug || IS_DEVELOP ? handlePressLink(LINKS.DEBUG) : null}
      onInvitePress={handlePressLink(LINKS.REFERRALS_INFO)}
      showReferralButton={features.showReferrals}
    />
  );
};

export default MenuContainer;

const handlePush = async (
  currentRoute: string,
  route: string,
  options: LayoutComponent["options"] = {},
  passProps = {}
) => {
  await Navigation.push(currentRoute, {
    component: {
      id: route,
      name: route,
      passProps,
      options: {
        bottomTabs,
        sideMenu: {
          left: {
            enabled: false,
            visible: false,
          },
        },
        ...options,
      },
    },
  });
};

const handleClose = () =>
  Navigation.mergeOptions(ROUTES.menu, {
    sideMenu: {
      left: {
        enabled: false,
        visible: false,
      },
    },
  });
