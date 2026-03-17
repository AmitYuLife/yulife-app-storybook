import { useSelector } from "react-redux";
import { Navigation } from "@navigation/main";
import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import { Animated, NativeScrollEvent, View } from "react-native";

import { t } from "@locale";
import { Colours, Style, StyleSheet } from "@styles";
import { useDispatch } from "react-redux";
import { MODALS } from "@navigation/constants";
import { Image, Box, TextTemplate } from "@atoms";
import { useBackHandler } from "@hooks";
import { getYuniversalProgress } from "@redux/levels/levels.selectors";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { ChallengeDetailsMilestone } from "./challenge-details-milestone";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { ChallengeDetailsBadge, ChallengeDetailsBadgeIntent } from "./challenge-details-badge";
import { showTooltipPopupRelativeToView } from "@organisms/tooltip-popup/tooltip-popup.helper";
import { Button, SecondaryButton, TouchableOpacityWithDelay, YucoinPowerButton } from "@molecules";
import { SET_UP_BUTTON, CHALLENGE_TYPE, CHALLENGE_DETAILS_SCREEN_NEW, CHALLENGE_PAGE_BOOST_SLOT } from "@ids";
import { showYuCoinPowerExplainedOverlay } from "@components/containers/member/yu/navigation/showYuCoinPowerExplainedOverlay";
import { GetQuestMapLevelQuery } from "@graphql/__generated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SMOOTH_GRADIENT_COLORS } from "../../events/event-dialog/event-dialog.styles";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

export interface IChallengeDetailsScreenProps {
  error?: string;
  isLoading?: boolean;
  currentWorld?: number;
  onPressCta: () => void;
  onPressBack: () => void;
  onPressClose: () => void;
  onPressSetUp?: () => void;
  slot: GetQuestMapLevelQuery["getQuestMapLevel"]["slots"][0];
}

export const HEADER_HEIGHT = 268;

const ChallengeDetailsScreen = ({
  slot,
  onPressCta,
  onPressBack,
  error = null,
  onPressClose,
  isLoading = false,
  onPressSetUp = null,
}: IChallengeDetailsScreenProps) => {
  const dispatch = useDispatch();
  const { bottom: safeAreaBottom } = useSafeAreaInsets();
  const bottom = Math.max(safeAreaBottom, 16);
  const bonusInfoButtonRef = useRef<View>(null);
  const scrollY = useRef(new Animated.Value(0));
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const { theme } = useTheme();

  useBackHandler(() => {
    onPressBack();
    return true;
  });

  const onPressBonusInfoButton = useCallback(() => {
    dispatch(
      logMixpanelEventActionCreator("information_viewed", {
        name: "Extra Yucoin Info",
        location: "challenge_details",
      })
    );

    showTooltipPopupRelativeToView({
      viewRef: bonusInfoButtonRef,
      beakPosition: "autoVertical",
      children: (
        <Box gap={16} style={styles.bonusInfoPopup}>
          <TextTemplate type="b2">{t("screens.challenges.details.bonus_info_popup.text")}</TextTemplate>
          <SecondaryButton
            wrapperStyle={styles.bonusInfoPopupButton}
            onPress={() => Navigation.dismissOverlay(MODALS.blurredOverlay)}
            translationKey="screens.challenges.details.bonus_info_popup.cta_label"
          />
        </Box>
      ),
    });
  }, [dispatch]);

  const onPressYucoinPowerButton = useCallback(() => {
    dispatch(
      logMixpanelEventActionCreator("button_pressed", {
        location: "challenge_details",
        button_id: "yucoin_power_button",
      })
    );

    showYuCoinPowerExplainedOverlay();
  }, [dispatch]);

  const onScroll = Animated.event<NativeScrollEvent>([{ nativeEvent: { contentOffset: { y: scrollY.current } } }], {
    useNativeDriver: true,
    listener: ({
      nativeEvent: {
        contentOffset: { y },
      },
    }) => {
      if (isHeaderVisible && y > HEADER_HEIGHT / 2) {
        setIsHeaderVisible(false);
      }

      if (!isHeaderVisible && y < HEADER_HEIGHT / 2) {
        setIsHeaderVisible(true);
      }
    },
  });

  const headingTextColor = useMemo((): string => {
    return yuniversalMap ? Colours.neutral.white : Colours.neutral.black;
  }, [yuniversalMap]);

  const navTextColor = useMemo((): string => {
    return yuniversalMap ? Colours.neutral.white : undefined;
  }, [yuniversalMap]);

  return (
    <>
      <Animated.ScrollView
        bounces={true}
        onScroll={onScroll}
        style={styles.wrapper}
        overScrollMode="never"
        scrollEventThrottle={32}
        testID={CHALLENGE_DETAILS_SCREEN_NEW}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="never"
        contentContainerStyle={styles.scrollContentContainer}
      >
        <View style={styles.headerWrapper}>
          <Image
            resizeMode="cover"
            suppressLoadingUi={true}
            width={Style.DEVICE_WIDTH}
            style={styles.headerBackgroundImage}
            height={Style.adjust(HEADER_HEIGHT)}
            source={{ uri: slot?.details?.backgroundImage?.uri }}
          />
          <Image
            theme="light"
            resizeMode="contain"
            width={Style.adjust(189)}
            height={Style.adjust(146)}
            style={styles.headerAnimalImage}
            source={{ uri: slot?.details?.image?.uri }}
          />
          <GenericHeadingPad />
          <TextTemplate type="b1b" textAlign="center" testID={CHALLENGE_TYPE(slot.heading)} color={headingTextColor}>
            {slot.heading}
          </TextTemplate>
        </View>
        <Box style={styles.innerWrapper} gap={16}>
          <View style={styles.bodyWrapper}>
            <Box style={styles.card} gap={10}>
              {slot.details.milestones.map((milestone, index) => (
                <ChallengeDetailsMilestone
                  key={index}
                  milestone={milestone}
                  bonusAmount={slot.bonusAmount}
                  surgeMultiplier={slot.surgeMultiplier}
                  stars={{
                    activeStars: index + 1,
                    totalStars: slot.details.milestones.length,
                  }}
                />
              ))}
            </Box>
          </View>

          {!slot.bonusAmount ? null : (
            <View style={styles.card} testID={CHALLENGE_PAGE_BOOST_SLOT(slot.bonusAmount)}>
              <View style={styles.row}>
                <Box gap={10} flexDirection={"column"}>
                  <TextTemplate type="b2">{t("screens.challenges.details.extra_yucoin")}</TextTemplate>
                  <TouchableOpacityWithDelay onPress={onPressBonusInfoButton}>
                    <View ref={bonusInfoButtonRef} collapsable={false}>
                      <Image
                        suppressLoadingUi={true}
                        width={Style.adjust(16)}
                        height={Style.adjust(16)}
                        source={require("@assets/icons/info.png")}
                      />
                    </View>
                  </TouchableOpacityWithDelay>
                </Box>
                <View style={styles.rewardWrapper}>
                  <ChallengeDetailsBadge
                    intent={ChallengeDetailsBadgeIntent.boost}
                    text={t("screens.challenges.details.boosted_badge")}
                  />
                  <View style={styles.rewardAmount}>
                    <TextTemplate textAlign="right" color={theme.colors.primary.p600} type="b2b">
                      {slot.bonusAmount}
                    </TextTemplate>
                  </View>
                </View>
                <Image width={Style.adjust(16)} source={require("@assets/icons/yucoin.png")} suppressLoadingUi={true} />
              </View>
            </View>
          )}

          <YucoinPowerButton onPress={onPressYucoinPowerButton} />
        </Box>
      </Animated.ScrollView>
      <Box w="100%" position="absolute" bottom={0}>
        <LinearGradient style={styles.footerWrapper} colors={SMOOTH_GRADIENT_COLORS} />
        <Box gap={10} pb={bottom} bottom={0} w="100%">
          <Button
            onPress={onPressCta}
            disabled={isLoading || slot.isCompleted}
            isLoading={isLoading}
            translationKey={
              isLoading
                ? "screens.challenges.details.loading"
                : slot.isCompleted
                ? "screens.challenge_list.level_completed"
                : "screens.challenges.details.cta_label"
            }
          />
          {!onPressSetUp ? null : (
            <SecondaryButton
              onPress={onPressSetUp}
              translationKey="screens.challenges.details.set_up_label"
              testID={SET_UP_BUTTON(t("screens.challenges.details.set_up_label"))}
            />
          )}
          {!error ? null : (
            <View style={styles.errorWrapper}>
              <TextTemplate textAlign="center" type="l2b">
                {error}
              </TextTemplate>
            </View>
          )}
        </Box>
      </Box>
      {!isHeaderVisible ? null : (
        <GenericHeadingAbsolute
          logo="yulife"
          color={navTextColor}
          backgroundColor="transparent"
          onLeftIconPress={onPressBack}
          onRightIconPress={onPressClose}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  scrollContentContainer: {
    minHeight: Style.DEVICE_HEIGHT,
    paddingBottom: Style.adjust(180),
    backgroundColor: Colours.neutral.n50,
  },
  innerWrapper: {
    paddingHorizontal: Style.adjust(35),
  },
  headerWrapper: {
    alignItems: "center",
    height: Style.adjust(HEADER_HEIGHT),
    backgroundColor: Colours.neutral.n100,
  },
  headerBackgroundImage: {
    top: 0,
    start: 0,
    position: "absolute",
    ...StyleSheet.absoluteFillObject,
  },
  headerAnimalImage: {
    bottom: 0,
    position: "absolute",
  },
  wrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.white,
  },
  bodyWrapper: {
    alignItems: "center",
    // To offset the cards over the header
    marginTop: Style.adjust(-32),
  },
  footerWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  rewardWrapper: {
    marginStart: "auto",
    alignItems: "center",
    flexDirection: "row",
    marginEnd: Style.adjust(5),
  },
  bonusInfoPopup: {
    paddingVertical: Style.adjust(15),
    paddingHorizontal: Style.adjust(20),
    width: Style.adjust(Style.DEVICE_WIDTH * 0.75),
  },
  bonusInfoPopupButton: {
    width: "100%",
  },
  rewardAmount: {
    minWidth: Style.adjust(30),
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  card: {
    width: "100%",
    borderWidth: 1,
    borderRadius: Style.adjust(10),
    paddingVertical: Style.adjust(17),
    borderColor: Colours.neutral.n200,
    paddingHorizontal: Style.adjust(20),
    backgroundColor: Colours.neutral.white,
  },
  errorWrapper: {
    paddingHorizontal: Style.adjust(20),
  },
});

export default memo(ChallengeDetailsScreen);
