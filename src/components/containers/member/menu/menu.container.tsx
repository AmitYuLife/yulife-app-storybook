import { bottomTabs, MODALS, ROUTES } from "@navigation/constants";
import { Alert } from "react-native";
import { nativeApplicationVersion } from "expo-application";
import { Navigation } from "@navigation/main";
import { useDispatch, useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";
import { getPushNotifications } from "@redux/device/device.selectors";
import { logOutStart, openMyAccount } from "@redux/user/user.actions";
import { IMenuLink, MenuScreen } from "@screens";
import assets, { LINKS, LinkTypes } from "./assets";
import { IS_DEVELOP } from "@utils";
import { showYuModal } from "@navigation/root";
import Logger from "@services/logging/logger";
import { t } from "@locale";
import { LayoutComponent } from "react-native-navigation";
import { useUserFeatures } from "@hooks";
import { PushPermissionsStatus } from "@redux/device/device.types";
import { UserSupportLevel } from "@services/logging/types";
import { getSupportLevel } from "@redux/user/user.selectors";
import { sduiActionOpenSupportChat } from "@redux/server-driven-ui/sdui.actions";
import { useCallback, useMemo } from "react";
import { getDebugQueriesToolEnabled } from "@redux/debug/debug.selectors";
import { PUSH_NOTIFICATION_DENY_LIMIT } from "@redux/device/device.constants";

const MenuContainer = () => {
  const dispatch = useDispatch();
  const currentRoute = useSelector(getRouteState);
  const permissions = useSelector(getPushNotifications);
  const supportLevel = useSelector(getSupportLevel);

  const { showReferrals, showDebug } = useUserFeatures();
  const debugQueriesToolEnabled = useSelector(getDebugQueriesToolEnabled);

  const openSupport = useCallback(() => {
    const callback = () => {
      dispatch(sduiActionOpenSupportChat());
    };

    if (permissions.status !== PushPermissionsStatus.enabled && permissions.denyCount < PUSH_NOTIFICATION_DENY_LIMIT) {
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
  }, [permissions, dispatch]);

  const handlePressLogout = useCallback(() => {
    Alert.alert(t("screens.menu.logout.alert_title"), t("screens.menu.logout.alert_description"), [
      {
        style: "cancel",
        text: t("labels.cta.cancel"),
      },
      {
        onPress: () => dispatch(logOutStart()),
        text: t("screens.menu.logout.alert_log_out_button"),
      },
    ]);
  }, [dispatch]);

  const handlePressLink = useCallback(
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
          openSupport();
          return null;
        case LINKS.DEBUG:
          handlePush(currentRoute, ROUTES.debug);
          return null;
        case LINKS.LEADERBOARD:
          handlePush(currentRoute, ROUTES.leaderboard);
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
          Logger.logMixpanelEvent("user_action", {
            action_type: "pressed_referral_info",
            version: "v2",
          });
          handlePush(currentRoute, ROUTES.referralInformation, {}, { sourceId: ROUTES.menu });
          return null;
        default:
          return null;
      }
    },
    [currentRoute, dispatch, openSupport, handlePressLogout]
  );

  const supportMenuItems: IMenuLink[] = useMemo(() => {
    if (supportLevel === UserSupportLevel.None) {
      return [];
    }

    return [
      {
        condition: true,
        label: t(supportLevel === UserSupportLevel.Basic ? "screens.menu.support.label" : "screens.menu.chat.label"),
        onPress: handlePressLink(LINKS.SUPPORT),
        source: assets[LINKS.SUPPORT],
      },
    ];
  }, [handlePressLink, supportLevel]);

  const links: IMenuLink[] = useMemo(
    () => [
      {
        condition: showReferrals,
        label: t("screens.menu.invite_a_colleague.label"),
        onPress: handlePressLink(LINKS.REFERRALS_INFO),
        source: assets[LINKS.REFERRALS_INFO],
        highlight: true,
      },
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
        condition: debugQueriesToolEnabled,
        label: t("screens.menu.tools.label"),
        onPress: handlePressLink(LINKS.TOOLS),
        source: assets[LINKS.SETTINGS],
      },
      ...supportMenuItems,
      {
        condition: true,
        label: t("screens.menu.logout.label"),
        onPress: handlePressLink(LINKS.LOGOUT),
        source: assets[LINKS.LOGOUT],
      },
    ],
    [handlePressLink, showReferrals, debugQueriesToolEnabled, supportMenuItems]
  );

  return (
    <MenuScreen
      onPressClose={handleClose}
      links={links}
      version={nativeApplicationVersion}
      onDebugPress={showDebug || IS_DEVELOP ? handlePressLink(LINKS.DEBUG) : null}
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
