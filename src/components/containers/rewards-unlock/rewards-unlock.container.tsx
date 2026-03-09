import { memo, useCallback, useState } from "react";
import {
  ActivityIndicator,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { Box, Image } from "@atoms";
import { StyleSheet } from "@styles";
import LinearGradient from "react-native-linear-gradient";
import { ContentItemWrapper } from "@components/sdui";
import ProductGames from "./_subcomponents/product-games";
import { FutureGame } from "./_subcomponents/future-game";
import RewardsUnlockEmpty from "@organisms/rewards-unlock-empty/rewards-unlock-empty";
import { Rays, TopBarAbsolute } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { Navigation } from "@navigation/main";
import NoStoreWalletButton from "@components/screens/member/rewards/list/subcomponents/no-store-wallet-button/no-store-wallet-button";
import { REWARDS_UNLOCK_SCROLL } from "@ids";
import { TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";
import RewardPassLottieStars from "@organisms/reward-pass/subcomponents/reward-pass-lottie-stars/reward-pass-lottie-stars";
import { DETOX_ENABLED } from "@services/socket";
import useRewardsUnlock from "./use-rewards-unlock";

interface RewardsUnlockContainerProps {
  showNavigation?: boolean;
  onPressWallet?: () => void;
  isInnerScreen?: boolean;
  passType?: string;
}

const RewardsUnlockContainer = ({
  showNavigation = false,
  isInnerScreen,
  onPressWallet,
  passType,
}: RewardsUnlockContainerProps) => {
  const { componentId, data, games, isEmpty } = useRewardsUnlock(passType);
  const { height, width } = useWindowDimensions();

  const [showTopBar, setShowTopBar] = useState(false);

  const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowTopBar(offsetY > TOP_BAR_WITH_PAD);
  }, []);

  const onBack = useCallback(() => {
    if (showNavigation) {
      Navigation.pop(componentId);
    }
  }, [componentId, showNavigation]);

  if (!data) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator />
      </Box>
    );
  }

  if (isEmpty) {
    return <RewardsUnlockEmpty />;
  }

  const passBackground = data.header.background?.passBackground;
  const headerColor = passBackground?.color ?? data.header.background.color;
  const headerGradient = passBackground?.gradient;

  return (
    <>
      <Box flex={1}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainerStyle}
          automaticallyAdjustContentInsets={true}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={onScroll}
          testID={REWARDS_UNLOCK_SCROLL}
        >
          <Box position="absolute" top={-height / 2} width={"100%"} bg={headerColor} h={height / 2}>
            {headerGradient ? (
              <LinearGradient
                colors={headerGradient.colors}
                locations={headerGradient.stops}
                angle={headerGradient.angle}
                useAngle={true}
                style={StyleSheet.absoluteFill}
              />
            ) : null}
          </Box>

          <Box dir="ltr">
            <Box bg={headerColor} overflow="hidden">
              {headerGradient ? (
                <LinearGradient
                  colors={headerGradient.colors}
                  locations={headerGradient.stops}
                  angle={headerGradient.angle}
                  useAngle={true}
                  style={StyleSheet.absoluteFill}
                />
              ) : null}

              {!DETOX_ENABLED ? (
                <>
                  <Box position="absolute" w={"100%"} h={"100%"} top={"-165%"} right={"-50%"}>
                    <Rays backgroundColor="transparent" style="thin" duration={RAYS_DURATION} />
                  </Box>
                  <Box position="absolute" w="100%" h="100%" right={100}>
                    <RewardPassLottieStars delay={0} />
                  </Box>
                </>
              ) : null}
              {passBackground ? (
                <Box right={0} left={0}>
                  <Image width={width * 0.7} source={passBackground.backgroundImage} />
                  <Box position="absolute" bottom={20} left={0} right={0} alignItems="center" justifyContent="center">
                    <Image width={width * 0.5} source={passBackground.foregroundImage} />
                  </Box>
                </Box>
              ) : null}
            </Box>
          </Box>
          <Box>
            <ProductGames title={data.header?.title} description={data.header?.heading} games={games} />
          </Box>
          {!data.futureGames.length
            ? null
            : data.futureGames.map((game, gameIndex) => <FutureGame key={gameIndex} {...game} />)}

          <ContentItemWrapper {...data.content} />
          {isInnerScreen ? (
            <Box mt={15} pb={30}>
              <NoStoreWalletButton onPress={onPressWallet} />
            </Box>
          ) : null}
          {isInnerScreen || showNavigation ? <Box mb={-50} h={100} bg="white" /> : <Box h={250} />}
        </ScrollView>
        {!isInnerScreen && showNavigation ? null : (
          <Box pointerEvents="none" position="absolute" left={0} right={0} bottom={0} height={200}>
            <LinearGradient {...linearGradient} style={StyleSheet.absoluteFill} />
          </Box>
        )}
      </Box>
      {showNavigation ? (
        <TopBarAbsolute
          type="white"
          leftIcon={LeftIcon.BACK}
          onPressLeftIcon={onBack}
          backgroundColor={showTopBar ? headerColor : "transparent"}
        />
      ) : null}
    </>
  );
};

const RAYS_DURATION = 20000;

const linearGradient = {
  start: { x: 0, y: 0.8 },
  end: { x: 0, y: 0.4 },
  colors: ["#FFFFFFFF", "#FFFFFF00"],
};

const styles = StyleSheet.create({
  scrollView: { flex: 1 },
  contentContainerStyle: { backgroundColor: "white", flexGrow: 1 },
});

export default memo(RewardsUnlockContainer);
