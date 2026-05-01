import { FC, useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ViewStyle } from "react-native";
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { GetWellbeingHubItemsQuery } from "@graphql/__generated";
import { t } from "@locale";
import { Colours, Style, StyleSheet, TOP_BAR } from "@styles";
import { Box, SkeletonLoading } from "@atoms";
import { ChipList } from "@molecules";
import { GenericHeadingAbsolute } from "@organisms";
import { WELLBEING_HUB_SCREEN, WELLBEING_HUB_SCROLL_VIEW, WELLBEING_SERVICE_CARD } from "@ids";
import { TheOwlFenceIcon } from "@atoms/icon/the-owl-fence-icon";
import { ChipProps } from "@components/molecules/chip-list/chip-list";
import WellBeingServiceCard from "./sub-components/wellbeing-service-card";
import WellBeingServiceCardSkeleton from "./sub-components/wellbeing-service-card-skeleton";
import WellBeingServiceEmptyList from "./sub-components/wellbeing-service-empty-list";
import WellbeingHeader from "./sub-components/wellbeing-header";
import WellbeingHubHero from "./sub-components/wellbeing-hub-hero";
import FirstTimeContentLocationSelection from "../member/content-location/first-time-content-location-selection";
import { BusinessAccountState } from "@components/molecules/business-picker";
import { ThemeOverride, useThemeOverride } from "@modules/themes/context";
import { IYuLifeLogoProps } from "@atoms/logo";

interface IProps {
  loading: boolean;
  userFirstName: string;
  categoryChips: ChipProps[];
  cards: GetWellbeingHubItemsQuery["listItems"];
  location: GetWellbeingHubItemsQuery["location"];
  selectedCategory?: string;
  handleWellbeingLocationPress: () => void;
  handleClose: () => void;
  businessAccountState: BusinessAccountState;
}

const WellBeingHub: FC<IProps> = ({
  loading,
  categoryChips,
  userFirstName,
  cards,
  handleClose,
  handleWellbeingLocationPress,
  location,
  businessAccountState,
}) => {
  const themeOverride = useThemeOverride();

  const { headerTextColor, heroImageBackground, heroImageIcon, logoType } = getWellbeingHubValues(themeOverride);

  const wellbeingHeroUri = heroImageBackground?.uri;
  const wellbeingHeroIconUri = heroImageIcon?.uri;

  // can't use negation as we need to ignore null and undefined
  const shouldShowFirstTimeModal = location?.hasUserSelectedContentLocation === false;

  const isEmpty = !cards?.length && !loading && !shouldShowFirstTimeModal;

  const [headerHeight, setHeaderHeight] = useState(0);
  const loadingRef = useRef(loading);
  const shouldRecalculateHeaderHeight = useRef(true);

  useLayoutEffect(() => {
    // reset header height, we want it to be based on current content.
    if (!loading && loadingRef.current && shouldRecalculateHeaderHeight.current) {
      setHeaderHeight(0);
      shouldRecalculateHeaderHeight.current = false;
    }

    loadingRef.current = loading;
  }, [loading]);

  const wrappedBusinessAccountState = useMemo<BusinessAccountState>(
    () => ({
      ...businessAccountState,
      setSelectedBusinessAccount: (account) => {
        businessAccountState.setSelectedBusinessAccount(account);
        shouldRecalculateHeaderHeight.current = true;
        setHeaderHeight(0);
      },
    }),
    [businessAccountState]
  );

  const scrollY = useSharedValue(0);

  const collapseRange = useSharedValue(220);
  // Initialised high so the chips don't translate before they've been measured.
  const chipsRestY = useSharedValue(Number.MAX_SAFE_INTEGER);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const setCollapseRange = useCallback(
    (range: number) => {
      collapseRange.value = range;
    },
    [collapseRange]
  );

  const collapseRangeStyle = useAnimatedStyle(() => {
    return { height: collapseRange.value };
  });

  const chipsAnimatedStyle = useAnimatedStyle(() => {
    const threshold = chipsRestY.value;
    const translateY = Math.max(0, scrollY.value - threshold);
    return { transform: [{ translateY }] };
  });

  const title = t("screens.wellbeing_hub.header_title", { name: userFirstName });
  const description = t("screens.wellbeing_hub.header_description");

  if (isEmpty) {
    return (
      <Box flex={1} testID={WELLBEING_HUB_SCREEN}>
        <Box pl={24} mb={24} pt={TOP_BAR.TOP_BAR_WITH_PAD}>
          <WellbeingHeader title={title} description={description} businessAccountState={wrappedBusinessAccountState} />
        </Box>
        <WellBeingServiceEmptyList />

        <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleClose} backgroundColor="transparent" />
      </Box>
    );
  }

  return (
    <Box flex={1} testID={WELLBEING_HUB_SCREEN}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        testID={WELLBEING_HUB_SCROLL_VIEW}
        scrollEventThrottle={16}
        style={styles.scrollView}
        onScroll={scrollHandler}
        stickyHeaderIndices={[1]}
      >
        <Animated.View style={collapseRangeStyle} pointerEvents="none" />
        <Animated.View style={[styles.chipsSticky, chipsAnimatedStyle]}>
          <Box flex={1} bg={Colours.neutral.white} pt={8}>
            <ChipList chips={loading ? [] : categoryChips} isLoading={loading} style={styles.categoryChips} />
          </Box>
        </Animated.View>
        <Box pl={24} bg={Colours.neutral.white}>
          <Box mt={10} alignItems="center">
            {loading ? (
              <WellBeingServiceCardSkeleton limit={5} />
            ) : (
              cards?.map((card, index) => (
                <WellBeingServiceCard
                  key={card.id}
                  card={card}
                  testID={WELLBEING_SERVICE_CARD(card.title, index.toString())}
                />
              ))
            )}
          </Box>
        </Box>
        <Box alignItems="center" mv={40}>
          <TheOwlFenceIcon />
        </Box>
      </Animated.ScrollView>

      <WellbeingHubHero
        scrollY={scrollY}
        title={title}
        description={description}
        businessAccountState={wrappedBusinessAccountState}
        backdropUri={wellbeingHeroUri}
        iconUri={wellbeingHeroIconUri}
        color={headerTextColor}
        setCollapseRange={setCollapseRange}
        headerHeight={headerHeight}
        setHeaderHeight={setHeaderHeight}
        loading={loading}
      />
      <GenericHeadingAbsolute
        logo={loading ? undefined : "yulife"}
        onLeftIconPress={handleClose}
        color={headerTextColor}
        backgroundColor="transparent"
        logoType={loading ? undefined : (logoType as IYuLifeLogoProps["type"])}
      >
        {loading ? (
          <Box position="absolute" alignSelf="center" top={TOP_BAR.PADDING_TOP}>
            <SkeletonLoading w={Style.adjust(80)} h={Style.adjust(26)} />
          </Box>
        ) : null}
      </GenericHeadingAbsolute>

      <FirstTimeContentLocationSelection
        isActive={shouldShowFirstTimeModal}
        contentLocation={location?.location || ""}
        contentLocationLabel={location?.locationLabel || ""}
        onChangeContentLocationPress={handleWellbeingLocationPress}
        placement="wellbeing_hub"
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  chipsSticky: {
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
  categoryChips: {
    paddingStart: Style.adjust(27),
  } as ViewStyle,
  scrollView: {
    marginTop: TOP_BAR.TOP_BAR_WITH_PAD,
  } as ViewStyle,
});

const getWellbeingHubValues = (themeOverride: ThemeOverride | null) => {
  if (!themeOverride || !("sections" in themeOverride)) {
    return {
      headerTextColor: Colours.neutral.n800,
      heroImageBackground: null,
      heroImageIcon: null,
      logoType: undefined,
    };
  }

  return {
    headerTextColor: themeOverride?.sections?.wellbeing?.headerTextColor || Colours.neutral.n800,
    heroImageBackground: themeOverride?.sections?.wellbeing?.heroImageBackground || null,
    heroImageIcon: themeOverride?.sections?.wellbeing?.heroImageIcon || null,
    logoType: themeOverride?.sections?.wellbeing?.logoType || undefined,
  };
};

export default WellBeingHub;
