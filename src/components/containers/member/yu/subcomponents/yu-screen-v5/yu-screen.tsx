import { NOTIF_CENTRE, YUSCREEN, YUSCREEN_SCROLL_VIEW } from "@ids";
import { ROUTES } from "@navigation/constants";
import { useNavigation } from "@navigation/navigation.context";
import { NameLevelMiniAvatar, NavBar, TopBar } from "@organisms";
import { TOP_BAR_TYPES } from "@organisms/top-bar/top-bar.helpers";
import { SduiActionType } from "@redux/_core/types";
import { getRouteState } from "@redux/app/app.selectors";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { queryYuScreenLayout } from "@redux/yu-screen/yu-screen.actions";
import { getYuScreenLastLayoutUpdate, getYuScreenSections } from "@redux/yu-screen/yu-screen.selectors";
import { Colours, Style, TOP_BAR } from "@styles";
import { getTheme } from "@theme";
import { getCurrentWorld } from "@utils";
import { getCurrentWorldBackground } from "@utils/yuScreenV5";
import { groupBy } from "lodash";
import moment from "moment";
import { FC, memo, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Animated, LayoutChangeEvent, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { YuScreenContext } from "../../context/yu-screen.context";
import { renderSection } from "../yu-screen-sections";
import { HeroHeaderBackground } from "./hero-header-background";
import { HeroHeaderForeground } from "./hero-header-foreground";
import { HeroHeaderGradient } from "./hero-header-gradient";
import { useAnimation } from "./use-animation";
import { INITIAL_SCROLL, MIN_SECTIONS_HEIGHT, styles } from "./yu-screen.styles";
import { YumojiPrompt } from "./yumoji-prompt";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { IAchievement } from "@organisms/achievements-showcase/achievements-showcase";

interface IProps {
  onNotificationPress: () => void;
  showAchievements: boolean;
  achievements: {
    list: IAchievement[];
    numberOfSlots: number;
    points?: number;
  };
}

export const YuScreen: FC<IProps> = memo(({ onNotificationPress, achievements, showAchievements }) => {
  const { onLeftMenuPress } = useNavigation();
  const sections = useSelector(getYuScreenSections);
  const lastLayoutUpdate = useSelector(getYuScreenLastLayoutUpdate);
  const currentScreen = useSelector(getRouteState);
  const { yumojiRemoteUrl } = useContext(YuScreenContext);

  const dispatch = useDispatch();
  const [collapseHeader, setCollapseHeader] = useState(false);
  const [sectionsHeight, setSectionsHeight] = useState(0);
  const { gradientOpacity, translateY, yumojiOpacity, yumojiScale, headerHeight, headerIsChangingSize } =
    useAnimation(collapseHeader);

  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap } = useSelector(getYuniversalProgress);

  const isYuniversal = !!yuniversalMap;
  const currentWorld = getCurrentWorld(currentLevel);
  const theme = getTheme(currentLevel, yuniversalMap);
  const { image, imageSize, infoBar, colours, topBarType } = getCurrentWorldBackground(currentWorld, isYuniversal);

  const backgroundImageSize = useMemo(() => {
    if (!imageSize) {
      return null;
    }

    const imageSizeRatio = imageSize ? imageSize.width / imageSize.height : 1;
    return {
      width: Style.DEVICE_WIDTH,
      height: Style.DEVICE_WIDTH / imageSizeRatio,
    };
  }, [imageSize]);

  const scrollValue = useRef(new Animated.Value(0)).current;
  const headerY = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollValue } } }], {
    useNativeDriver: true,
  });

  useEffect(() => {
    const listenerId = scrollValue.addListener(({ value }) => {
      setCollapseHeader(value > INITIAL_SCROLL);
      headerY.setValue(value < 0 && !headerIsChangingSize ? -value : 0);
    });

    return () => scrollValue.removeListener(listenerId);
  }, [headerIsChangingSize]);

  useEffect(() => {
    if (currentScreen === ROUTES.yuScreen) {
      if (moment().isAfter(moment(lastLayoutUpdate).endOf("day"))) {
        dispatch(queryYuScreenLayout());
        return;
      }

      const sectionsToUpdate = sections.filter((section) => !section.ready || section.updateOnView);

      if (!sectionsToUpdate?.length) {
        return;
      }

      const groupedSections = groupBy(sectionsToUpdate, "loadingGroup");

      for (const sectionGroup of Object.values(groupedSections)) {
        const ids = sectionGroup.map((section) => section.id);
        dispatch({
          type: SduiActionType.QueryYuScreenSections,
          payload: JSON.stringify({ ids }),
        });
      }
    }
  }, [currentScreen, lastLayoutUpdate]);

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    setSectionsHeight(event.nativeEvent.layout.height);
  }, []);

  const memoizedStyles = useMemo(
    () => ({
      wrapper: { ...styles.wrapper, backgroundColor: colours.ground },
      yumojiPromptWrapper: { ...styles.yumojiPromptWrapper, opacity: yumojiOpacity },
      gradientWrapper: { ...styles.gradientWrapper, opacity: gradientOpacity },
      headerScaffold: { ...styles.headerScaffold, marginTop: yumojiRemoteUrl ? 0 : Style.adjust(8) },
      bouncingHeaderWrapper: { transform: [{ translateY: headerY }] },
      bottomPad: { ...styles.bottomPad, height: Math.max(MIN_SECTIONS_HEIGHT - sectionsHeight, 0) },
    }),
    [colours, yumojiRemoteUrl, sectionsHeight]
  );

  const [dynamicTopBarType, nameAndLevelColour] = useMemo(
    () => (collapseHeader ? [TOP_BAR_TYPES.DEFAULT, Colours.neutral.n800] : [topBarType, colours.nameAndLevelText]),
    [collapseHeader, topBarType, colours]
  );

  const leftIcons = useMemo(
    () => [
      {
        icon: LeftIcon.MENU,
        onPress: onLeftMenuPress,
        style: { marginRight: Style.adjust(16) },
      },
      ...(onNotificationPress
        ? [
            {
              icon: LeftIcon.NOTIFICATIONS,
              onPress: onNotificationPress,
              testID: NOTIF_CENTRE,
              style: { paddingLeft: Style.adjust(8) },
              hitSlop: {
                ...TOP_BAR.HIT_SLOP,
                left: 0,
              },
            },
          ]
        : []),
    ],
    [onNotificationPress, onLeftMenuPress]
  );

  const sectionsStyle = useMemo(
    () => ({
      ...styles.sections,
      paddingTop: showAchievements ? Style.adjust(45) : 0,
    }),
    [showAchievements]
  );
  return (
    <View style={memoizedStyles.wrapper}>
      <View style={styles.contentWrapper}>
        <HeroHeaderBackground
          theme={theme}
          image={image}
          imageSize={backgroundImageSize}
          colours={colours}
          disperseClouds={collapseHeader}
        />
        <View style={styles.innerWrapper} testID={YUSCREEN}>
          <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}
            testID={YUSCREEN_SCROLL_VIEW}
            stickyHeaderIndices={[1]}
            onScroll={onScroll}
            scrollEventThrottle={16}
            contentInsetAdjustmentBehavior="never"
            overScrollMode="never"
            alwaysBounceVertical={false}
          >
            <View style={memoizedStyles.headerScaffold} />
            <HeroHeaderForeground
              platformImage={infoBar.image}
              translateY={translateY}
              yumojiOpacity={yumojiOpacity}
              yumojiScale={yumojiScale}
              headerHeight={headerHeight}
              showAchievements={showAchievements}
              achievements={achievements}
            />
            <View style={sectionsStyle} onLayout={handleLayout}>
              {sections.map(renderSection)}
            </View>
            <View style={memoizedStyles.bottomPad} />
            <View style={styles.footerPadding} />
          </Animated.ScrollView>
        </View>
      </View>
      <View pointerEvents="box-none" style={styles.sectionTopWrapper}>
        <Animated.View style={memoizedStyles.bouncingHeaderWrapper}>
          <View style={styles.info}>
            <NameLevelMiniAvatar showYumoji={true} animateYumoji={collapseHeader} textColour={nameAndLevelColour} />
          </View>
          {yumojiRemoteUrl ? null : (
            <Animated.View
              pointerEvents={collapseHeader ? "none" : "box-none"}
              style={memoizedStyles.yumojiPromptWrapper}
            >
              <YumojiPrompt backgroundColor={colours.yumojiPromptBackground} />
            </Animated.View>
          )}
        </Animated.View>

        <Animated.View pointerEvents="none" style={memoizedStyles.gradientWrapper}>
          <HeroHeaderGradient />
        </Animated.View>
      </View>
      <View style={styles.topbarWrapper}>
        <TopBar type={dynamicTopBarType} leftIcons={leftIcons} />
      </View>
      <NavBar activeIndex={2} />
    </View>
  );
});
