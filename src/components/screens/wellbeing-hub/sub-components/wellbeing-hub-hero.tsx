import { memo, ReactNode, useEffect, useRef } from "react";
import { ImageStyle, ViewStyle } from "react-native";
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";
import { Colours, Style, StyleSheet, TOP_BAR } from "@styles";
import WellbeingHeader from "./wellbeing-header";
import { BusinessAccountState } from "@components/molecules/business-picker";
import { ImageBackground } from "expo-image";
import { Box } from "@atoms";

interface IProps {
  scrollY: SharedValue<number>;
  title: string;
  description: string;
  businessAccountState: BusinessAccountState;
  backdropUri?: string | null;
  iconUri?: string | null;
  color?: string;
  setCollapseRange: (range: number) => void;
  headerHeight: number;
  setHeaderHeight: (height: number) => void;
  loading?: boolean;
}

const RADIUS_OVERLAP_PX = 8;
const RADIUS_OVERLAP = Style.adjust(RADIUS_OVERLAP_PX);

const WellbeingHubHero = ({
  scrollY,
  title,
  description,
  businessAccountState,
  backdropUri,
  iconUri,
  color = Colours.neutral.n800,
  setCollapseRange,
  headerHeight,
  setHeaderHeight,
  loading,
}: IProps) => {
  const EXPANDED_HEIGHT = TOP_BAR.TOP_BAR_WITH_PAD + headerHeight + RADIUS_OVERLAP;
  const COLLAPSED_HEIGHT = TOP_BAR.TOP_BAR_WITH_PAD + RADIUS_OVERLAP;
  const COLLAPSE_RANGE = EXPANDED_HEIGHT - COLLAPSED_HEIGHT;

  const hasMeasuredRef = useRef(false);
  const measured = headerHeight > 0;

  useEffect(() => {
    if (headerHeight === 0) {
      hasMeasuredRef.current = false;
    }
  }, [headerHeight]);

  const containerStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [0, COLLAPSE_RANGE],
      [EXPANDED_HEIGHT, COLLAPSED_HEIGHT],
      Extrapolation.CLAMP
    );
    return { height };
  });

  const contentStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, COLLAPSE_RANGE], [1, 0], Extrapolation.CLAMP);
    return { opacity };
  });

  return (
    <Animated.View style={[styles.container, measured && containerStyle]}>
      <Box>
        <Wrapper backdropUri={backdropUri}>
          {iconUri ? (
            <Animated.Image source={{ uri: iconUri }} style={[styles.icon, contentStyle]} resizeMode="contain" />
          ) : null}
          <Animated.View style={[styles.content, contentStyle]}>
            <Box
              py={32}
              onLayout={(e) => {
                if (hasMeasuredRef.current) {
                  return;
                }

                const { height } = e.nativeEvent.layout;
                setCollapseRange(height);
                hasMeasuredRef.current = true;
                setHeaderHeight(height);
              }}
            >
              <WellbeingHeader
                title={title}
                description={description}
                businessAccountState={businessAccountState}
                color={color}
                loading={loading}
              />
            </Box>
          </Animated.View>
          <Box
            pointerEvents="none"
            position="absolute"
            left={0}
            right={0}
            bottom={0}
            h={RADIUS_OVERLAP_PX}
            bg={Colours.neutral.white}
            borderTopLeftRadius={RADIUS_OVERLAP_PX}
            borderTopRightRadius={RADIUS_OVERLAP_PX}
          />
        </Wrapper>
      </Box>
    </Animated.View>
  );
};

const Wrapper = ({ children, backdropUri }: { children: ReactNode; backdropUri?: string | null }) => {
  if (backdropUri) {
    return (
      <ImageBackground source={{ uri: backdropUri }} style={styles.backdropBackground} contentFit="cover">
        {children}
      </ImageBackground>
    );
  }

  return (
    <Box w="100%" h="100%">
      {children}
    </Box>
  );
};

export default memo(WellbeingHubHero);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
  } as ViewStyle,
  backdropBackground: {
    width: "100%",
    height: "100%",
  } as ImageStyle,
  content: {
    paddingTop: TOP_BAR.TOP_BAR_WITH_PAD,
    paddingStart: Style.adjust(24),
  } as ViewStyle,
  icon: {
    position: "absolute",
    end: Style.adjust(-8),
    bottom: 0,
    width: Style.adjust(180),
    height: Style.adjust(220),
  } as ImageStyle,
});
