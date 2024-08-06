import React, { FC, memo, useContext, useEffect, useMemo, useRef, useState } from "react";
import { View, Animated } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { setScreenViewForBurgerMenu } from "@navigation/utils";
import { YUSCREEN, YUSCREEN_SCROLL_VIEW } from "@ids";
import { getRouteState } from "@redux/app/app.selectors";
import { getYuScreenLastLayoutUpdate, getYuScreenSections } from "@redux/yu-screen/yu-screen.selectors";
import { queryYuScreenLayout } from "@redux/yu-screen/yu-screen.actions";
import { Colours, Style } from "@styles";
import { TopBarAbsolute, NavBar } from "@organisms";
import { HeroHeaderForeground } from "./hero-header-foreground";
import { renderSection } from "../yu-screen-sections";
import { HeroHeaderBackground } from "./hero-header-background";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { getCurrentWorld } from "@utils";
import { getTheme } from "@theme";
import { getCurrentWorldBackground } from "@utils/yuScreenV5";
import { INITIAL_SCROLL, styles } from "./yu-screen.styles";
import moment from "moment";
import { NameAndLevel } from "./name-and-level";
import { HeroHeaderGradient } from "./hero-header-gradient";
import { useAnimation } from "./use-animation";
import { YumojiPrompt } from "./yumoji-prompt";
import { YuScreenContext } from "../../context/yu-screen.context";
import { TOP_BAR_TYPES } from "@organisms/top-bar/top-bar.helpers";
import { SduiActionType } from "@redux/_core/types";

interface Props {
  componentId: string;
}

export const YuScreen: FC<Props> = memo(() => {
  const sections = useSelector(getYuScreenSections);
  const lastLayoutUpdate = useSelector(getYuScreenLastLayoutUpdate);
  const currentScreen = useSelector(getRouteState);
  const { yumojiRemoteUrl } = useContext(YuScreenContext);

  const dispatch = useDispatch();
  const [collapseHeader, setCollapseHeader] = useState(false);
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
      if (sectionsToUpdate?.length) {
        const ids = sectionsToUpdate.map((section) => section.id);
        dispatch({
          type: SduiActionType.QueryYuScreenSections,
          payload: JSON.stringify({ ids }),
        });
      }
    }
  }, [currentScreen, lastLayoutUpdate]);

  const memoizedStyles = useMemo(
    () => ({
      wrapper: { ...styles.wrapper, backgroundColor: colours.ground },
      yumojiPromptWrapper: { ...styles.yumojiPromptWrapper, opacity: yumojiOpacity },
      gradientWrapper: { ...styles.gradientWrapper, opacity: gradientOpacity },
      headerScaffold: { ...styles.headerScaffold, marginTop: yumojiRemoteUrl ? 0 : Style.adjust(8) },
      bouncingHeaderWrapper: { transform: [{ translateY: headerY }] },
    }),
    [colours, yumojiRemoteUrl]
  );

  const [dynamicTopBarType, nameAndLevelColour] = useMemo(
    () => (collapseHeader ? [TOP_BAR_TYPES.DEFAULT, Colours.neutral.n800] : [topBarType, colours.nameAndLevelText]),
    [collapseHeader, topBarType, colours]
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
            />
            {sections.map(renderSection)}
            <View style={styles.footerPadding} />
          </Animated.ScrollView>
        </View>
      </View>
      <View pointerEvents="box-none" style={styles.sectionTopWrapper}>
        <Animated.View style={memoizedStyles.bouncingHeaderWrapper}>
          <View style={styles.info}>
            <NameAndLevel showYumoji={collapseHeader} textColour={nameAndLevelColour} />
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
      <TopBarAbsolute type={dynamicTopBarType} onPressLeftIcon={openMenu} />
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
