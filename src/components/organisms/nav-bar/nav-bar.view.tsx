import React, { useState, useCallback, memo, useMemo, FC } from "react";
import { labels as defaultLabels } from "@navigation/root";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { StyleSheet, View, Platform } from "react-native";
import { NAV_BAR } from "@styles/index";
import { Giraffe, Scroll, Treasure, Yu } from "./assets";
import Trophy from "./assets/trophy";
import styles from "./nav-bar.styles";
import useInterval from "@use-it/interval";
import { IIconProps, NavBarProps } from "./nav-bar.helpers";
import { t } from "@locale";
import { MobileTabs } from "@graphql/_core/schema/globalTypes";

const NavBarView = (props: NavBarProps) => {
  const { activeIndex, hasQuestNotification, tabNotifications, labels = defaultLabels, additionalBottom = 0 } = props;
  const [hasLaidOut, setHasLaidOut] = useState(false);
  const [displayElevation, setDisplayElevation] = useState(false);

  useInterval(
    () => {
      setDisplayElevation(true);
    },
    displayElevation || !hasLaidOut || Platform.OS === "ios" ? null : 1000
  );

  const handleLayout = useCallback(() => {
    setHasLaidOut(true);
  }, []);

  const handlePressOut = useCallback(
    (onPress: () => void) => () => {
      onPress();
    },
    []
  );

  const notifications: Partial<Record<MobileTabs, boolean>> = useMemo(
    () => ({
      [MobileTabs.quests]: hasQuestNotification,
    }),
    [hasQuestNotification]
  );

  const bottomStyle = useMemo(() => ({ bottom: NAV_BAR.getPositionBottom({ additionalBottom }) }), [additionalBottom]);

  return (
    <View onLayout={handleLayout} style={StyleSheet.flatten([styles.outerWrapper, styles.shadow, bottomStyle])}>
      <View style={[styles.wrapper, displayElevation && styles.elevation]}>
        {labels.map((label, i) => {
          const data = ROUTE_MAPPING[label.id];

          if (!data?.Component) {
            return null;
          }

          const isActive = activeIndex === i;

          return (
            <NavBarListItem
              key={label.id}
              Component={data.Component}
              accessibilityLabel={t(data.accessibilityLabelKey)}
              accessibilityValue={t(data.accessibilityTextKey)}
              hasNotification={
                notifications[label.name as MobileTabs] || tabNotifications.includes(label.name as MobileTabs)
              }
              isActive={isActive}
              isSuspended={Navigation.isNavBarRouteSuspended(label.id)}
              onPressIn={label.onPress}
              onPressOut={handlePressOut(label.onPress)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default memo(NavBarView);

const ROUTE_MAPPING = Object.freeze({
  [ROUTES.dailySteps]: {
    Component: Giraffe,
    accessibilityLabelKey: "navbar.yucoin.accessibility_label",
    accessibilityTextKey: "navbar.yucoin.accessibility_text_value",
  },
  [ROUTES.quests]: {
    Component: Scroll,
    accessibilityLabelKey: "navbar.quest.accessibility_label",
    accessibilityTextKey: "navbar.quest.accessibility_text_value",
  },
  [ROUTES.yuScreen]: {
    Component: Yu,
    accessibilityLabelKey: "navbar.yu.accessibility_label",
    accessibilityTextKey: "navbar.yu.accessibility_text_value",
  },
  [ROUTES.leaderboard]: {
    Component: Trophy,
    accessibilityLabelKey: "navbar.leaderboard.accessibility_label",
    accessibilityTextKey: "navbar.leaderboard.accessibility_text_value",
  },
  [ROUTES.rewards]: {
    Component: Treasure,
    accessibilityLabelKey: "navbar.rewards.accessibility_label",
    accessibilityTextKey: "navbar.rewards.accessibility_text_value",
  },
});

type NavBarListItemProps = IIconProps & {
  accessibilityLabel: string;
  accessibilityValue: string;
  Component: FC<IIconProps>;
};

const NavBarListItem = ({ accessibilityLabel, accessibilityValue, Component, ...props }: NavBarListItemProps) => (
  <View
    accessibilityState={{ selected: props.isActive }}
    accessibilityLabel={accessibilityLabel}
    accessibilityValue={{ text: accessibilityValue }}
    accessibilityRole="tab"
    accessible={true}
  >
    <Component {...props} />
  </View>
);
