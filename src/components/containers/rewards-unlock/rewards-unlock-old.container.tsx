import { memo, useCallback } from "react";
import { ActivityIndicator, ScrollView, useWindowDimensions } from "react-native";
import { Box, Image, TextTemplate } from "@atoms";
import { Style, StyleSheet } from "@styles";
import LinearGradient from "react-native-linear-gradient";
import { ContentItemWrapper } from "@components/sdui";
import { ProductGames } from "./_subcomponents/product-games-old";
import { FutureGame } from "./_subcomponents/future-game";
import RewardsUnlockEmpty from "@organisms/rewards-unlock-empty/rewards-unlock-empty";
import { GenericHeadingPad, TopBarAbsolute } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { Navigation } from "@navigation/main";
import NoStoreWalletButton from "@components/screens/member/rewards/list/subcomponents/no-store-wallet-button/no-store-wallet-button";
import { REWARDS_UNLOCK_SCROLL } from "@ids";
import { TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";
import useRewardsUnlock from "./use-rewards-unlock";

interface RewardsUnlockOldContainerProps {
  showNavigation?: boolean;
  onPressWallet?: () => void;
  isInnerScreen?: boolean;
  passType?: string;
}

const RewardsUnlockOldContainer = ({
  showNavigation = false,
  isInnerScreen,
  onPressWallet,
  passType,
}: RewardsUnlockOldContainerProps) => {
  const { componentId, data, games, isEmpty } = useRewardsUnlock(passType);
  const { height } = useWindowDimensions();

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
          testID={REWARDS_UNLOCK_SCROLL}
        >
          <GenericHeadingPad hideBorder={true} />
          <Box
            position="absolute"
            top={-height / 2 + TOP_BAR_WITH_PAD}
            width={"100%"}
            bg={data.header.background.color}
            h={height / 2}
          />

          <Box>
            <Box bg={data.header.background.color} pt={10}>
              <Box right={0} left={0} pl={20} pr={20} pb={84}>
                <Box position="absolute" right={0}>
                  <Image width={Style.adjust(240)} source={data.header.background.image} />
                </Box>
                <Box flex={1}>
                  <Box w={230}>
                    <TextTemplate color={"white"} type="h3">
                      {data.header.heading}
                    </TextTemplate>
                  </Box>
                  <Box mt={8} w={230}>
                    <TextTemplate color={"white"} type="l1">
                      {data.header.description}
                    </TextTemplate>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box mt={-75}>
            <ProductGames games={games} />
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
            <LinearGradient {...linearGradientConfig} style={StyleSheet.absoluteFill} />
          </Box>
        )}
      </Box>
      {showNavigation ? (
        <TopBarAbsolute
          type="white"
          leftIcon={LeftIcon.BACK}
          onPressLeftIcon={onBack}
          backgroundColor={data.header.background.color}
        />
      ) : null}
    </>
  );
};

const linearGradientConfig = {
  start: { x: 0, y: 0.8 },
  end: { x: 0, y: 0.4 },
  colors: ["#FFFFFFFF", "#FFFFFF00"],
};

const styles = StyleSheet.create({
  scrollView: { flex: 1 },
  contentContainerStyle: { backgroundColor: "white", flexGrow: 1 },
});

export default memo(RewardsUnlockOldContainer);
