import React, { memo, useCallback, useRef, useState, useEffect, useMemo } from "react";
import { FlatList, View, ViewToken, ListRenderItem } from "react-native";
import { Text, PageIndicator, Box } from "@atoms";
import styles from "./onboarding-swiper.styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import EngagementTracking from "@services/logging/engagement-tracking";
import { ROUTES } from "@navigation/constants";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { t } from "@locale";
import { LETS_GO_BUTTON_DUEL_ONBOARDING, NEXT_BUTTON_DUEL_ONBOARDING } from "@ids";
import { useTheme } from "@app/modules/themes/hooks/useTheme";
import { Colours } from "@styles";
import { DETOX_ENABLED } from "@services/socket";

export interface OnboardingSwiperData {
  id: string;
  buttonLabel?: string;
  title?: string;
  subtitle?: string;
}

interface IOnboardingSwiperProps {
  data: OnboardingSwiperData[];
  onClose: () => void;
  renderItem: ListRenderItem<OnboardingSwiperData>;
  type: "yuscreen" | "duels";
}

const getScreenViewName = (type: IOnboardingSwiperProps["type"], page = 0) => {
  switch (type) {
    case "yuscreen":
      return `${ROUTES.yuScreen}.Onboarding.${page}`;
    case "duels":
      return `${ROUTES.duelsHub}.Onboarding.${page}`;
    default:
      return "";
  }
};

const viewabilityConfig = {
  viewAreaCoveragePercentThreshold: 80,
  waitForInteraction: true,
};

const OnboardingSwiper = ({ data, onClose, renderItem, type }: IOnboardingSwiperProps) => {
  const swiperRef = useRef<FlatList>(null);
  const [buttonLabel, setButtonLabel] = useState(t("labels.cta.next"));
  const [activePageIndex, setActivePageIndex] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const name = getScreenViewName(type, 0);
    if (name) {
      EngagementTracking.logMixpanelEvent("screen_view", { name });
    }
  }, [type]);

  const themedStyles = useMemo(
    () => ({
      actionButtonText: { color: theme.colors.primary.p600 },
      backButton: { color: theme.colors.primary.p600 },
      lastPageActionButton: { backgroundColor: theme.colors.primary.p600 },
      lastPageActionButtonText: { color: Colours.neutral.white },
    }),
    [theme]
  );

  const isFirstPage = activePageIndex === 0;
  const isLastPage = activePageIndex + 1 === data.length;

  const keyExtractor = useCallback((item: OnboardingSwiperData) => item?.id, []);

  const scrollToNext = useCallback(() => {
    const newIndex = activePageIndex + 1;
    if (newIndex < data.length) {
      const name = getScreenViewName(type, newIndex);
      swiperRef.current?.scrollToIndex({ index: newIndex, animated: !DETOX_ENABLED });
      setActivePageIndex(newIndex);
      setButtonLabel(data[newIndex]?.buttonLabel);
      EngagementTracking.logMixpanelEvent("screen_view", { name });
    }
  }, [activePageIndex, data, type]);

  const scrollBack = useCallback(() => {
    const newIndex = activePageIndex - 1;
    const name = getScreenViewName(type, newIndex);
    if (newIndex >= 0) {
      swiperRef.current?.scrollToIndex({ index: newIndex, animated: !DETOX_ENABLED });
      setActivePageIndex(newIndex);
      setButtonLabel(data[newIndex]?.buttonLabel);
      EngagementTracking.logMixpanelEvent("screen_view", { name });
    }
  }, [activePageIndex, data, type]);

  const handleSwipe = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      const visibleItem = viewableItems[0];

      if (visibleItem) {
        setActivePageIndex(visibleItem.index);
        setButtonLabel(data[visibleItem.index]?.buttonLabel || "Next");

        const name = getScreenViewName(type, visibleItem.index);
        EngagementTracking.logMixpanelEvent("screen_view", { name });
      }
    },
    [data, type]
  );

  return (
    <Box h={"100%"}>
      <FlatList
        pagingEnabled={true}
        renderItem={renderItem}
        decelerationRate="fast"
        keyExtractor={keyExtractor}
        data={data}
        ref={swiperRef}
        showsVerticalScrollIndicator={false}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleSwipe}
        viewabilityConfig={viewabilityConfig}
      />
      <View style={styles.navigationViewPad} />
      <View style={styles.navigationViewWrapper}>
        <View style={styles.pageIndicatorWrapper}>
          <PageIndicator activePage={activePageIndex} pageCount={3} />
        </View>
        {isFirstPage ? (
          <View />
        ) : (
          <TouchableOpacityWithDelay delay={300} onPress={scrollBack}>
            <Text style={[styles.backButton, themedStyles.backButton]}>{t("labels.cta.back")}</Text>
          </TouchableOpacityWithDelay>
        )}
        {isLastPage ? (
          <TouchableOpacityWithDelay
            delayPressIn={0}
            onPress={onClose}
            style={[styles.actionButton, styles.lastPageActionButton, themedStyles.lastPageActionButton]}
          >
            <Text
              bold={true}
              style={[
                styles.actionButtonText,
                styles.lastPageActionButtonText,
                themedStyles.actionButtonText,
                themedStyles.lastPageActionButtonText,
              ]}
              testID={LETS_GO_BUTTON_DUEL_ONBOARDING}
            >
              {buttonLabel}
            </Text>
          </TouchableOpacityWithDelay>
        ) : (
          <TouchableOpacityWithDelay delay={300} style={styles.actionButton} onPress={scrollToNext}>
            <Text
              bold={true}
              style={[styles.actionButtonText, themedStyles.actionButtonText]}
              testID={NEXT_BUTTON_DUEL_ONBOARDING}
            >
              {buttonLabel}
            </Text>
          </TouchableOpacityWithDelay>
        )}
      </View>
      <TopBarAbsolute rightIcon={null} />
    </Box>
  );
};

export default memo(OnboardingSwiper);
