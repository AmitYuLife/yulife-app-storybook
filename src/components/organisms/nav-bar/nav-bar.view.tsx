import { useState, useCallback, memo, useMemo, FC, useEffect, useRef } from "react";
import { labels as defaultLabels } from "@navigation/root";
import { ROUTES } from "@navigation/constants";
import { StyleSheet, View, Platform } from "react-native";
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
import { getHighlightedTabs } from "@redux/app/app.selectors";
import { useDispatch } from "react-redux";
import { highlightNavbarTabReset } from "@redux/app/app.actions";
import Animated, { FadeIn, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";
import { LottieView } from "@components/molecules";
import Lottie from "lottie-react-native";
import { getRewardsTabSettings } from "@redux/rewards-tab/rewards-tab.selectors";

const NavBarView = (props: NavBarProps) => {
  const { activeIndex, hasQuestNotification, tabNotifications, labels = defaultLabels, suspendedTabs = {} } = props;
  const [hasLaidOut, setHasLaidOut] = useState(false);
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
      [MobileTabs.Quests]: hasQuestNotification,
    }),
    [hasQuestNotification]
  );

  const ListItemComponent = hasDonationBattlepass ? NavBarListItemAnimated : NavBarListItem;

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
              accessibilityLabel={t(data.accessibilityLabelKey)}
              accessibilityValue={t(data.accessibilityTextKey)}
              hasNotification={
                notifications[label.name as MobileTabs] || tabNotifications.includes(label.name as MobileTabs)
              }
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
  ({ id, accessibilityLabel, accessibilityValue, Component, ...props }: NavBarListItemProps) => {
    const activeTabs = useSelector(getHighlightedTabs);
    const scaleValue = useSharedValue(1);

    const lottieRef = useRef<Lottie>(null);
    const dispatch = useDispatch();

    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    useEffect(() => {
      if (isAnimating && !get(activeTabs, id)) {
        setIsAnimating(false);
        return;
      }

      if (!isAnimating && get(activeTabs, id)) {
        setIsAnimating(true);

        scaleValue.value = withSequence(
          withTiming(1, { duration: 300 }),
          withTiming(1.1, { duration: 500 }),
          withTiming(1, { duration: 600 })
        );
      }
    }, [activeTabs, dispatch, id, isAnimating, scaleValue, setIsAnimating]);

    const onAnimationFinish = () => {
      dispatch(highlightNavbarTabReset({ tab: id }));
      setIsAnimating(false);
    };

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
        accessibilityState={{ selected: props.isActive }}
        accessibilityLabel={accessibilityLabel}
        accessibilityValue={{ text: accessibilityValue }}
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
        <Component {...props} />
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
    left: -LOTTIE_HEIGHT / 3 + Style.adjust(5),
    position: "absolute",
  },
});
