import React, { FC, memo, useEffect, useMemo, useState } from "react";
import { View, NativeSyntheticEvent, NativeScrollEvent, ScrollView } from "react-native";
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
import { HERO_HEADER_SCROLL_AMOUNT, ANIMATION_START_Y, styles } from "./yu-screen.styles";
import moment from "moment";

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

  const { scrollThreshold, heroHeaderTravel } = useMemo(() => {
    const values = {
      scrollThreshold: HERO_HEADER_SCROLL_AMOUNT - ANIMATION_START_Y,
      heroHeaderTravel: HERO_HEADER_SCROLL_AMOUNT,
    };

    if (infoBar?.verticalOffset) {
      values.scrollThreshold += Style.adjust(infoBar?.verticalOffset);
      values.heroHeaderTravel += Style.adjust(infoBar?.verticalOffset);
    }

    return values;
  }, [infoBar?.verticalOffset]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollAmount = event.nativeEvent.contentOffset.y;
    setCollapseHeader(scrollAmount > scrollThreshold);
  };

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

  return (
    <View style={[styles.wrapper, { backgroundColor: colours.ground }]}>
      <View style={styles.contentWrapper}>
        <HeroHeaderBackground theme={theme} image={image} imageSize={backgroundImageSize} colours={colours} />
        <View style={styles.innerWrapper} testID={YUSCREEN}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}
            testID={YUSCREEN_SCROLL_VIEW}
            stickyHeaderIndices={[1]}
            onScroll={onScroll}
            scrollEventThrottle={100}
            contentInsetAdjustmentBehavior="never"
          >
            <View style={{ height: heroHeaderTravel }} />
            <HeroHeaderForeground
              collapsed={collapseHeader}
              backgroundColor={colours.sky}
              platformImage={infoBar.image}
              infoBarOffset={infoBar.verticalOffset}
            />
            {sections.map(renderSection)}
            <View style={styles.footerPadding} />
          </ScrollView>
        </View>
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
