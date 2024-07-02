import React, { FC, memo, useEffect, useMemo, useRef, useState } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { setScreenViewForBurgerMenu } from "@navigation/utils";
import { YUSCREEN, YUSCREEN_SCROLL_VIEW } from "@ids";
import { getRouteState } from "@redux/app/app.selectors";
import { getYuScreenLastLayoutUpdate, getYuScreenSections } from "@redux/yu-screen/yu-screen.selectors";
import { queryYuScreenLayout, queryYuScreenSections } from "@redux/yu-screen/yu-screen.actions";
import { Style } from "@styles";
import { TopBarAbsolute, NavBar } from "@organisms";
import { HeroHeaderForeground } from "./hero-header-foreground";
import { renderSection } from "../yu-screen-sections";
import { HeroHeaderBackground } from "./hero-header-background";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { getCurrentWorld } from "@utils";
import { getTheme } from "@theme";
import { getCurrentWorldBackground } from "@utils/yuScreenV5";
import { COLLAPSED_HEADER_HEIGHT, styles } from "./yu-screen.styles";
import moment from "moment";
import { NameAndLevel } from "./name-and-level";
import { HeroHeaderGradient } from "./hero-header-gradient";
import { useAnimation } from "./use-animation";

interface Props {
  componentId: string;
}

export const YuScreen: FC<Props> = memo(() => {
  const sections = useSelector(getYuScreenSections);
  const lastLayoutUpdate = useSelector(getYuScreenLastLayoutUpdate);
  const currentScreen = useSelector(getRouteState);

  const dispatch = useDispatch();
  const [collapseHeader, setCollapseHeader] = useState(false);

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

  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollValue } } }], {
    useNativeDriver: true,
  });

  useEffect(() => {
    const listenerId = scrollValue.addListener(({ value }) => {
      setCollapseHeader(value > 20);
    });

    return () => scrollValue.removeListener(listenerId);
  }, []);

  useEffect(() => {
    if (currentScreen === ROUTES.yuScreen) {
      if (moment().isAfter(moment(lastLayoutUpdate).endOf("day"))) {
        dispatch(queryYuScreenLayout());
        return;
      }

      const sectionsToUpdate = sections.filter((section) => !section.ready || section.updateOnView);
      if (sectionsToUpdate?.length) {
        const ids = sectionsToUpdate.map((section) => section.id);
        dispatch(queryYuScreenSections(ids));
      }
    }
  }, [currentScreen, lastLayoutUpdate]);

  const { infoBarOpacity, translateY, yumojiOpacity, yumojiScale } = useAnimation(collapseHeader);

  return (
    <View style={[styles.wrapper, { backgroundColor: colours.ground }]}>
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
          >
            <View style={styles.headerScaffold} />
            <HeroHeaderForeground
              collapsed={collapseHeader}
              platformImage={infoBar.image}
              translateY={translateY}
              yumojiOpacity={yumojiOpacity}
              yumojiScale={yumojiScale}
            />
            {sections.map(renderSection)}
            <View style={styles.footerPadding} />
          </Animated.ScrollView>
        </View>
      </View>
      <View
        pointerEvents="box-none"
        style={{
          ...StyleSheet.absoluteFillObject,
          height: COLLAPSED_HEADER_HEIGHT,
        }}
      >
        <View style={styles.info}>
          <NameAndLevel showYumoji={collapseHeader} />
        </View>
        <Animated.View
          style={{
            position: "absolute",
            bottom: Style.adjust(-7),
            opacity: infoBarOpacity,
          }}
        >
          <HeroHeaderGradient />
        </Animated.View>
      </View>
      <TopBarAbsolute type={topBarType} onPressLeftIcon={openMenu} />
      <NavBar activeIndex={2} />
    </View>
  );
});

const openMenu = () => {
  setScreenViewForBurgerMenu();
  Navigation.mergeOptions(ROUTES.yuScreen, {
    sideMenu: {
      left: {
        enabled: true,
        visible: true,
      },
    },
    statusBar: {
      drawBehind: false,
      visible: true,
    },
  });
};
