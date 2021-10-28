import { bottomTabs, MODALS, ROUTES } from "@navigation/constants";
import * as React from "react";
import { Alert } from "react-native";
import DeviceInfo from "react-native-device-info";
import Intercom from "@intercom/intercom-react-native";
import { Navigation, LayoutComponent } from "react-native-navigation";
import { useDispatch, useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";
import { getPushNotificationsCopy } from "@redux/copy/copy.selectors";
import { getPushNotifications } from "@redux/device/device.selectors";
import { logOutStart, openMyAccount } from "@redux/user/user.actions";
import { getUserFeatures } from "@redux/user/user.selectors";
import { MenuScreen } from "@screens";
import assets, { LINKS, LinkTypes } from "./assets";
import { IS_DEVELOP } from "@utils";
import { showYuModal } from "@navigation/root";

const MenuContainer = () => {
  const dispatch = useDispatch();
  const currentRoute = useSelector(getRouteState);
  const features = useSelector(getUserFeatures);
  const permissions = useSelector(getPushNotifications);
  const pushNotificationCopy = useSelector(getPushNotificationsCopy);

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
            copy: pushNotificationCopy,
          },
        },
      });
    } else {
      callback();
    }
  }, [permissions, pushNotificationCopy]);

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
        case LINKS.STATS:
          handlePush(currentRoute, ROUTES.stats);
          return null;
        case LINKS.ACTIVITY:
          handlePush(currentRoute, ROUTES.activityHistory);
          return null;
        case LINKS.SETTINGS:
          handlePush(currentRoute, ROUTES.settings);
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
          handlePush(currentRoute, ROUTES.referralInformation);
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
        label: "Statistics",
        onPress: handlePressLink(LINKS.STATS),
        source: assets[LINKS.STATS],
      },
      {
        condition: true,
        label: "Activity History",
        onPress: handlePressLink(LINKS.ACTIVITY),
        source: assets[LINKS.ACTIVITY],
      },
      {
        condition: true,
        label: "My Account",
        onPress: handlePressLink(LINKS.MEMBER),
        source: assets[LINKS.MEMBER],
      },
      {
        condition: true,
        label: "Wellbeing Hub",
        onPress: handlePressLink(LINKS.WELLBEING_HUB),
        source: assets[LINKS.WELLBEING_HUB],
      },
      {
        condition: true,
        label: "Settings",
        onPress: handlePressLink(LINKS.SETTINGS),
        source: assets[LINKS.SETTINGS],
      },
      {
        condition: true,
        label: "Chat",
        onPress: handlePressLink(LINKS.SUPPORT),
        source: assets[LINKS.SUPPORT],
      },
      {
        condition: true,
        label: "Log out",
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

const handlePush = async (currentRoute: string, route: string, options: LayoutComponent["options"] = {}) => {
  await Navigation.push(currentRoute, {
    component: {
      id: route,
      name: route,
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
