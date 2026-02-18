import { useState, useCallback, memo, useMemo, FC, useEffect, useRef } from "react";
import { labels as defaultLabels } from "@navigation/root";
import { ROUTES } from "@navigation/constants";
import { View, Platform } from "react-native";
import { NAV_BAR, Style } from "@styles/index";
import { Giraffe, Scroll, Treasure, Yu } from "./assets";
import Trophy from "./assets/trophy";
import styles from "./nav-bar.styles";

import useInterval from "@use-it/interval";
import { IIconProps, NavBarProps } from "./nav-bar.helpers";
import { t } from "@locale";
import { noop } from "@utils";
import { MobileTabs } from "@graphql/__generated";
import { get } from "lodash";
import { useSelector } from "react-redux";
import { getHighlightedTabs, getRouteState } from "@redux/app/app.selectors";
import { useDispatch } from "react-redux";
import { highlightNavbarTabReset } from "@redux/app/app.actions";
import Animated, { FadeIn, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";
import { LottieView } from "@components/molecules";
import type Lottie from "lottie-react-native";
import { getRewardsTabSettings } from "@redux/rewards-tab/rewards-tab.selectors";
import { IHighlightedTabOptions } from "@redux/app/app.types";
import { usePrizeHintPopup } from "@hooks";
import { DETOX_ENABLED } from "@services/socket";

import { StyleSheet } from "@styles";
const hasUnreadBadgeCount = (value: number) => (value || 0) > 0;

const NavBarView = (props: NavBarProps) => {
  const { activeIndex, hasQuestNotification, labels = defaultLabels, suspendedTabs = {}, badgeCounts = {} } = props;
  const [hasLaidOut, setHasLaidOut] = useState(false);
  const routeState = useSelector(getRouteState);
  const [displayElevation, setDisplayElevation] = useState(false);
  const { hasDonationBattlepass } = useSelector(getRewardsTabSettings);

  useInterval(
    () => {
      setDisplayElevation(true);
    },
    displayElevation || !hasLaidOut || Platform.OS === "ios" ? null : 1000
  );

  const handleLayout = useCallback(() => {
    setHasLaidOut(true);
  }, []);

  const notifications: Partial<Record<MobileTabs, boolean>> = useMemo(
    () => ({
      [MobileTabs.DailySteps]: hasQuestNotification || hasUnreadBadgeCount(badgeCounts?.[MobileTabs.DailySteps]),
      [MobileTabs.Quests]: hasQuestNotification || hasUnreadBadgeCount(badgeCounts?.[MobileTabs.Quests]),
      [MobileTabs.YuScreen]: hasUnreadBadgeCount(badgeCounts?.[MobileTabs.YuScreen]),
      [MobileTabs.Leaderboard]: hasUnreadBadgeCount(badgeCounts?.[MobileTabs.Leaderboard]),
      [MobileTabs.Rewards]: hasUnreadBadgeCount(badgeCounts?.[MobileTabs.Rewards]),
    }),
    [hasQuestNotification, badgeCounts]
  );

  const ListItemComponent = hasDonationBattlepass ? NavBarListItemAnimated : NavBarListItem;

  const isNavbarVisible = useMemo(() => {
    return labels.some((label, index) => index === activeIndex && label.id === routeState);
  }, [activeIndex, labels, routeState]);

  return (
    <View onLayout={handleLayout} style={styles.outerWrapper}>
      <View style={styles.shadow} />
      <View style={[styles.wrapper, displayElevation && styles.elevation]}>
        {labels.map((label, i) => {
          const data = ROUTE_MAPPING[label.id];

          if (!data?.Component) {
            return null;
          }

          const isActive = activeIndex === i;
          const isSuspended = suspendedTabs[label.id];

          return (
            <ListItemComponent
              key={label.id}
              id={label.id}
              Component={data.Component}
              isVisible={isNavbarVisible}
              accessibilityLabel={t(data.accessibilityLabelKey)}
              accessibilityValue={t(data.accessibilityTextKey)}
              hasNotification={notifications[label.name as MobileTabs]}
              isActive={isActive}
              isSuspended={isSuspended}
              onPressIn={isSuspended ? noop : label.onPress}
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
  id?: string;
  isVisible?: boolean;
  accessibilityLabel: string;
  accessibilityValue: string;
  Component: FC<IIconProps>;
};

const NavBarListItem = ({ accessibilityLabel, accessibilityValue, Component, ...props }: NavBarListItemProps) => {
  return (
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
};

const LOTTIE_STARS = require("@assets/lottie/star-highlight.lottie");
const NavBarListItemAnimated = memo(
  ({ id, accessibilityLabel, accessibilityValue, isActive, isVisible, Component, ...props }: NavBarListItemProps) => {
    const activeTabs = useSelector(getHighlightedTabs);
    const scaleValue = useSharedValue(1);
    const itemRef = useRef(null);

    const lottieRef = useRef<Lottie>(null);
    const dispatch = useDispatch();

    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const isAnimatingRef = useRef(false);

    usePrizeHintPopup({
      routeIds: [id],
      isEnabled: !isAnimatingRef.current && isVisible && !DETOX_ENABLED,
      viewRef: itemRef,
    });

    useEffect(() => {
      const activeTab: IHighlightedTabOptions | undefined = get(activeTabs, id);
      if (!isAnimatingRef.current && isVisible && activeTab) {
        isAnimatingRef.current = true;

        setIsAnimating(true);
        isAnimatingRef.current = true;

        scaleValue.value = withSequence(
          withTiming(1, { duration: 300 }),
          withTiming(1.1, { duration: 500 }),
          withTiming(1, { duration: 600 })
        );
      }
    }, [activeTabs, id, isActive, isVisible, scaleValue]);

    const onAnimationFinish = useCallback(() => {
      dispatch(highlightNavbarTabReset({ tab: id }));
      isAnimatingRef.current = false;
      setIsAnimating(false);
    }, [dispatch, id]);

    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            scale: scaleValue.value,
          },
        ],
      };
    });

    return (
      <Animated.View
        accessibilityState={{ selected: isActive }}
        accessibilityLabel={accessibilityLabel}
        accessibilityValue={{ text: accessibilityValue }}
        ref={itemRef}
        accessibilityRole="tab"
        accessible={true}
        style={animatedStyle}
      >
        {isAnimating ? (
          <Animated.View entering={FadeIn.duration(600)} pointerEvents={"none"}>
            <LottieView
              ref={lottieRef}
              source={LOTTIE_STARS}
              style={navItemStyles.lottie}
              autoPlay={true}
              loop={false}
              onAnimationFinish={onAnimationFinish}
            />
          </Animated.View>
        ) : null}
        <Component isActive={isActive} {...props} />
      </Animated.View>
    );
  }
);

const LOTTIE_HEIGHT = NAV_BAR.HEIGHT * 3;
const navItemStyles = StyleSheet.create({
  lottie: {
    width: LOTTIE_HEIGHT,
    height: LOTTIE_HEIGHT,
    top: -LOTTIE_HEIGHT / 3 + Style.adjust(-5),
    start: -LOTTIE_HEIGHT / 3 + Style.adjust(5),
    position: "absolute",
  },
});
