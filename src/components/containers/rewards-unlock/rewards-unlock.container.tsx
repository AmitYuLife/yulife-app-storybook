import { memo, useCallback, useMemo } from "react";
import { ActivityIndicator, ScrollView, useWindowDimensions } from "react-native";
import { Box, Image, TextTemplate } from "@atoms";
import { Style, StyleSheet } from "@styles";
import LinearGradient from "react-native-linear-gradient";
import { gql, MobileGameBattlePassReward } from "@graphql/__generated";
import { ContentItemWrapper } from "@components/sdui";
import { ProductGames } from "./_subcomponents/product-games";
import { FutureGame } from "./_subcomponents/future-game";
import { useQueryOnScreenSeen } from "@hooks";
import { useNavigation } from "@navigation/navigation.context";
import RewardsUnlockEmpty from "@organisms/rewards-unlock-empty/rewards-unlock-empty";
import { GenericHeadingPad, TopBarAbsolute } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { Navigation } from "@navigation/main";
import NoStoreWalletButton from "@components/screens/member/rewards/list/subcomponents/no-store-wallet-button/no-store-wallet-button";
import { useMutation } from "@apollo/client";
import { REWARDS_UNLOCK_SCROLL } from "@ids";
import { TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";

interface RewardsUnlockContainerProps {
  showNavigation?: boolean;
  onPressWallet?: () => void;
  isInnerScreen?: boolean;
}

// TODO: Move UI to a screen..
const RewardsUnlockContainer = ({
  showNavigation = false,
  isInnerScreen,
  onPressWallet,
}: RewardsUnlockContainerProps) => {
  const { componentId } = useNavigation();
  const { height } = useWindowDimensions();
  const [refetchUnlockables, { data: queryResult }] = useQueryOnScreenSeen(
    gql("GetMobileUnlockableBattlePassVouchersDocument"),
    componentId
  );

  const [claimMobileGameBattlePassRewards] = useMutation(gql("ClaimMobileGameBattlePassRewardsDocument"), {
    onCompleted: () => refetchUnlockables().catch(),
  });

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
            <LinearGradient {...linearGradient} style={StyleSheet.absoluteFill} />
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

const linearGradient = {
  start: { x: 0, y: 0.8 },
  end: { x: 0, y: 0.4 },
  colors: ["#FFFFFFFF", "#FFFFFF00"],
};

const styles = StyleSheet.create({
  scrollView: { height: Style.DEVICE_HEIGHT },
  contentContainerStyle: { backgroundColor: "white", flexGrow: 1 },
});

export default memo(RewardsUnlockContainer);
