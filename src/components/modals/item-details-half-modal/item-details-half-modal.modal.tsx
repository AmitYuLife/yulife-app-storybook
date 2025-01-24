import { StyleSheet, View } from "react-native";
import { Colours, Style } from "@styles";
import { ReactNode, memo, useMemo, useState } from "react";
import { Button } from "@components/molecules";
import { GetItemDetailsHookResponse, HalfModalItemDetails, useAsyncEffect, useBackHandler } from "@hooks";
import { ItemDetailsContainer, ItemDetailsReward, ScrollableFloatingModal } from "@organisms";
import PodiumRays from "@organisms/podium/podium-rays";
import { prefetchImages as prefetchImagesFunction, TextTemplate } from "@atoms";
import Box from "@atoms/box/box";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import { MAX_SCROLL_HEIGHT, REWARD_HEADER_HEIGHT, REWARD_SIZE } from "./item-details-constants";
import { useItemDetailsAnimations } from "./use-item-details-animations";
import LinearGradient from "react-native-linear-gradient";
import { LevelComponent } from "./level-component";
import { DETOX_ENABLED } from "@services/socket";
import { ImageSource } from "expo-image";
import { HALF_MODAL_CTA } from "@ids";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import ItemDetailsItemReward from "@organisms/item-details/item-details-item-reward";

export interface IItemDetailsHalfModalProps<
  T extends (...args: unknown[]) => GetItemDetailsHookResponse = (...args: unknown[]) => GetItemDetailsHookResponse
> {
  level?: string;
  title?: string;
  useGetData?: T;
  subtitle?: string;
  onClose: () => void;
  levelTextColor?: string;
  details?: HalfModalItemDetails[];
  levelRewardColor: string;
  prefetchImages?: boolean;
  overlayIcon?: ImageSource;
  levelComponent?: ReactNode;
  useGetDataArgs?: Parameters<T>;
  rewardImageComponent?: ReactNode;
  rewardSubtitleComponent?: ReactNode;
  // TODO: Refactor, this prop & its imlementation is very specific to how we use this modal in the app
  detailsContainerComponent?: ReactNode;
}

const MODAL_DESIRED_HEIGHT = 660;
const HEADER_TOP_PADDING = 60;
const TOP_BORDER_RADIUS = 20;

const AnimatedFlashList = Animated.createAnimatedComponent(FlashList);

const ItemDetailsHalfModal = ({
  level,
  title,
  onClose,
  subtitle,
  overlayIcon,
  levelComponent,
  prefetchImages,
  levelRewardColor,
  rewardImageComponent,
  details: propDetails,
  rewardSubtitleComponent,
  detailsContainerComponent,
  levelTextColor = Colours.neutral.white,
  useGetDataArgs = [],
  useGetData = () => ({ isLoading: false, details: [], error: undefined }),
}: IItemDetailsHalfModalProps) => {
  const [isPreloading, setIsPreloading] = useState(true);
  const { isLoading: isDataLoading, details: dataDetails } = useGetData(...useGetDataArgs);

  const isLoading = isDataLoading || isPreloading;
  const details = propDetails || dataDetails;

  useAsyncEffect(async () => {
    if (prefetchImages && details?.length) {
      try {
        await prefetchImagesFunction(details.map((d) => d.image.uri));
      } catch {}
    }

    setIsPreloading(false);
  }, [prefetchImages, details]);

  const shadowGradient = useMemo(
    () => ({
      start: { x: 0, y: 0 },
      end: { x: 0, y: 1 },
      colors: [`rgba(217, 217, 217, 0.8)`, "#D9D9D900"],
    }),
    []
  );

  useBackHandler(() => {
    onClose();
    return true;
  });

  const {
    shadowStyle,
    scrollHandler,
    showSmallTitle,
    raysContainerStyle,
    rewardContainerStyle,
    headerTopContainerStyle,
  } = useItemDetailsAnimations();

  const items = useMemo(() => {
    return details?.filter((d) => d.type === "itemReward") || [];
  }, [details]);

  const listHeader = useMemo(() => {
    return (
      <View style={styles.bodyContainer}>
        <View style={styles.innerBodyContainer}>
          <View style={styles.contentContainer}>
            <Box gap={10} center={true} px={20}>
              <Box px={32}>
                <TextTemplate textAlign="center" type="h2">
                  {title}
                </TextTemplate>
              </Box>
              {rewardSubtitleComponent ||
                (subtitle ? (
                  <TextTemplate type="b2" textAlign="center">
                    {subtitle}
                  </TextTemplate>
                ) : null)}
            </Box>
            {detailsContainerComponent || (
              <ItemDetailsContainer isLoading={isLoading} details={details} containerStyles={styles.detailsContainer} />
            )}
          </View>
        </View>
      </View>
    );
  }, [details, detailsContainerComponent, isLoading, rewardSubtitleComponent, subtitle, title]);

  return (
    <ScrollableFloatingModal
      renderHeaderShadow={false}
      closeIconColor={levelTextColor}
      onClose={onClose}
      footer={
        <View style={styles.buttonContainer}>
          <Button testID={HALF_MODAL_CTA} translationKey="modals.reward_info.got_it" onPress={onClose} />
        </View>
      }
    >
      <View style={styles.headerContent}>
        <View style={[styles.headerBackground, { backgroundColor: levelRewardColor }]}>
          {!DETOX_ENABLED && (
            <Animated.View style={[styles.podiumRays, raysContainerStyle]}>
              <PodiumRays backgroundColor={"transparent"} style="alternate" />
            </Animated.View>
          )}
        </View>

        <View style={styles.headerContainer}>
          <View style={styles.headerInnerContainer}>
            <Animated.View style={rewardContainerStyle}>
              <ItemDetailsReward size={REWARD_SIZE} source={overlayIcon}>
                {rewardImageComponent}
              </ItemDetailsReward>
            </Animated.View>

            <View style={styles.rewardLevelContainer}>
              <LevelComponent
                rewardLevel={level}
                textColor={levelTextColor}
                rewardLevelComponent={levelComponent}
                color={levelRewardColor}
              />
              <View style={styles.smallTitle}>
                {showSmallTitle ? (
                  <Animated.View entering={FadeInDown} exiting={FadeOutDown}>
                    <TextTemplate numberOfLines={1} textAlign="center" type="b2b" color={levelTextColor}>
                      {showSmallTitle ? title : ""}
                    </TextTemplate>
                  </Animated.View>
                ) : null}
              </View>
              <View style={styles.headerRightPadding} />
            </View>
          </View>
        </View>
        <Animated.View style={[headerTopContainerStyle, styles.topHeader]}>
          <Animated.View style={[styles.shadowContainer, shadowStyle]}>
            <LinearGradient {...shadowGradient} style={styles.shadow} />
          </Animated.View>
        </Animated.View>

        <Box mt={60} height={"100%"}>
          <AnimatedFlashList
            data={items}
            numColumns={2}
            estimatedItemSize={186}
            renderItem={renderItem}
            onScroll={scrollHandler}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flashlist}
            ListHeaderComponent={listHeader}
          />
        </Box>
      </View>
    </ScrollableFloatingModal>
  );
};

const renderItem = ({ item }: ListRenderItemInfo<HalfModalItemDetails>) => (
  <ItemDetailsItemReward image={item.image} label={item.title} />
);

const styles = StyleSheet.create({
  buttonContainer: {
    paddingBottom: Style.adjust(25),
    gap: Style.adjust(8),
  },
  contentContainer: {
    borderTopLeftRadius: Style.adjust(20),
    borderTopRightRadius: Style.adjust(20),
    marginTop: -Style.adjust(10),
  },
  headerContainer: {
    overflow: "hidden",
    height: REWARD_HEADER_HEIGHT,
    position: "absolute",
    borderTopLeftRadius: Style.adjust(20),
    borderTopRightRadius: Style.adjust(20),
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  headerBackground: {
    position: "absolute",
    width: "100%",
    height: Math.min(Style.DEVICE_HEIGHT * 0.8, Style.adjust(MODAL_DESIRED_HEIGHT)),
  },
  topHeader: {
    backgroundColor: Colours.neutral.white,
    height: Style.DEVICE_HEIGHT,
    width: "100%",
    overflow: "hidden",
    position: "absolute",
    top: MAX_SCROLL_HEIGHT + HEADER_TOP_PADDING,
    borderTopLeftRadius: Style.adjust(TOP_BORDER_RADIUS),
    borderTopRightRadius: Style.adjust(TOP_BORDER_RADIUS),
  },
  headerInnerContainer: {
    position: "absolute",
    height: MAX_SCROLL_HEIGHT + 50,
    width: "100%",
    paddingBottom: Style.adjust(20),
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContainer: {
    paddingTop: MAX_SCROLL_HEIGHT + HEADER_TOP_PADDING / 1.5,
    marginTop: -20,
  },
  innerBodyContainer: {
    paddingTop: 30,
  },
  podiumRays: {
    width: "100%",
    height: "100%",
    opacity: 0.4,
    position: "absolute",
    top: -(Math.min(Style.DEVICE_HEIGHT * 0.8, Style.adjust(MODAL_DESIRED_HEIGHT)) / 2) - 10,
  },
  flashlist: {
    paddingBottom: Style.adjust(230),
  },
  detailsContainer: {
    paddingHorizontal: Style.adjust(30),
    marginTop: Style.adjust(30),
    paddingBottom: Style.adjust(20),
  },

  smallTitle: {
    position: "absolute",
    left: Style.adjust(48),
    right: Style.adjust(48),
    justifyContent: "center",
    alignItems: "center",
  },
  headerRightPadding: {
    width: Style.adjust(30),
  },
  headerContent: {
    overflow: "hidden",
    width: "100%",
    borderTopLeftRadius: Style.adjust(TOP_BORDER_RADIUS),
    borderTopRightRadius: Style.adjust(TOP_BORDER_RADIUS),
  },
  rewardLevelContainer: {
    width: "100%",
    height: Style.adjust(55),
    top: Style.adjust(-20),
    paddingHorizontal: 15,
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-between",
  },
  shadowContainer: {
    position: "absolute",
    height: Style.adjust(100),
    top: 0,
    width: "100%",
    overflow: "hidden",
    borderRadius: Style.adjust(TOP_BORDER_RADIUS),
  },
  shadow: { height: Style.adjust(8), width: "100%", position: "absolute" },
});

export default memo(ItemDetailsHalfModal);
