import { memo, useCallback, useContext, useMemo } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { Box, Image, TextTemplate } from "@atoms";
import { Style, TOP_BAR, StyleSheet } from "@styles";
import LinearGradient from "react-native-linear-gradient";
import { gql, MobileGameBattlePassReward } from "@graphql/__generated";
import { ContentItemWrapper } from "@components/sdui";
import { ProductGames } from "./_subcomponents/product-games";
import { FutureGame } from "./_subcomponents/future-game";
import { useQueryOnScreenSeen } from "@hooks";
import { useNavigation } from "@navigation/navigation.context";
import RewardsUnlockEmpty from "@organisms/rewards-unlock-empty/rewards-unlock-empty";
import { RewardsManagerContext } from "../member/rewards/rewards.manager.context";
import { TopBarAbsolute } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { Navigation } from "@navigation/main";
import { IRewardContainerProps } from "../member/rewards/rewards.types";
import NoStoreWalletButton from "@components/screens/member/rewards/list/subcomponents/no-store-wallet-button/no-store-wallet-button";
import { isAndroid } from "@utils";
import { useMutation } from "@apollo/client";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { REWARDS_UNLOCK_SCROLL } from "@ids";

const RewardsUnlockContainer = ({ showNavigation = false, isInnerScreen, onPressWallet }: IRewardContainerProps) => {
  const { componentId } = useNavigation();
  const [refetchUnlockables, { data: queryResult }] = useQueryOnScreenSeen(
    gql("GetMobileUnlockableBattlePassVouchersDocument"),
    componentId
  );
  const { onScroll } = useContext(RewardsManagerContext);

  const insets = useSafeAreaInsets();

  const [claimMobileGameBattlePassRewards] = useMutation(gql("ClaimMobileGameBattlePassRewardsDocument"), {
    onCompleted: () => refetchUnlockables().catch(),
  });

  const calculated = useMemo(() => {
    return {
      styles: {
        scrollView: {
          height: Style.DEVICE_HEIGHT,
          backgroundColor: queryResult?.getMobileUnlockableBattlePassVouchers?.header?.background?.color,
        },
      },
    };
  }, [queryResult?.getMobileUnlockableBattlePassVouchers?.header?.background?.color]);

  const getClaimRewardCallback = useCallback(
    (reward: MobileGameBattlePassReward, participationId: string) => {
      if (reward.onPress) {
        return reward.onPress;
      }

      return async () => {
        try {
          const result = await claimMobileGameBattlePassRewards({
            variables: { rewardIds: [reward.id], participationId },
          });

          return result;
        } catch {}
      };
    },
    [claimMobileGameBattlePassRewards]
  );

  const games = useMemo(() => {
    return (queryResult?.getMobileUnlockableBattlePassVouchers?.games || []).map((game) => ({
      ...game,
      rewards: game.rewards.map((reward) => ({
        ...reward,
        onPress: getClaimRewardCallback(reward, game.id),
      })),
    }));
  }, [queryResult?.getMobileUnlockableBattlePassVouchers?.games, getClaimRewardCallback]);

  const onBack = useCallback(() => {
    if (showNavigation) {
      Navigation.pop(componentId);
    }
  }, [componentId, showNavigation]);

  const topPadding = useMemo(() => {
    if (isInnerScreen || showNavigation) {
      if (Style.isIphone13ProMax()) {
        return insets.top;
      }

      return isAndroid() ? TOP_BAR.TOP_BAR_WITH_PAD : TOP_BAR.PADDING_TOP;
    }

    return Style.adjust(8);
  }, [isInnerScreen, showNavigation, insets.top]);

  if (!queryResult?.getMobileUnlockableBattlePassVouchers) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator />
      </Box>
    );
  }

  const data = queryResult.getMobileUnlockableBattlePassVouchers;

  const isEmpty = !data?.games?.length && !data?.futureGames?.length;

  if (isEmpty) {
    return <RewardsUnlockEmpty />;
  }

  return (
    <>
      <Box>
        <ScrollView
          style={calculated.styles.scrollView}
          contentContainerStyle={styles.contentContainerStyle}
          automaticallyAdjustContentInsets={true}
          overScrollMode="never"
          bounces={false}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={onScroll}
          testID={REWARDS_UNLOCK_SCROLL}
        >
          <Box>
            <Box bg={data.header.background.color} pt={topPadding} disableAutoAdjust={true}>
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
            <LinearGradient {...linearGradient} style={StyleSheet.absoluteFill} />
          </Box>
        )}
      </Box>
      {showNavigation ? (
        <Box
          position="absolute"
          top={0}
          w="100%"
          pt={TOP_BAR.PADDING_TOP}
          disableAutoAdjust={true}
          h={TOP_BAR.TOP_BAR_WITH_PAD}
          bg={data.header.background.color}
        >
          <TopBarAbsolute type="white" leftIcon={LeftIcon.BACK} onPressLeftIcon={onBack} />
        </Box>
      ) : null}
    </>
  );
};

const linearGradient = {
  start: { x: 0, y: 0.8 },
  end: { x: 0, y: 0.4 },
  colors: ["#FFFFFFFF", "#FFFFFF00"],
};

const styles = StyleSheet.create({
  contentContainerStyle: { backgroundColor: "white", flexGrow: 1 },
});

export default memo(RewardsUnlockContainer);
