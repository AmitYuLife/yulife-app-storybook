import React, { memo, useMemo } from "react";
import { ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import { Box, Image, TextTemplate } from "@atoms";
import { Style } from "@styles";
import LinearGradient from "react-native-linear-gradient";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { ContentItemWrapper } from "@components/sdui";
import { ProductGames } from "./_subcomponents/product-games";
import { FutureGame } from "./_subcomponents/future-game";

const RewardsUnlockContainer = () => {
  const { data: queryResult, loading } = useQuery(gql("GetMobileUnlockableBattlePassVouchersDocument"), {
    fetchPolicy: "no-cache",
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

  if (loading || !queryResult?.getMobileUnlockableBattlePassVouchers) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator />
      </Box>
    );
  }

  const data = queryResult.getMobileUnlockableBattlePassVouchers;

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
        >
          <Box right={0} left={0} bg={data.header.background.color} pt={20} pl={20} pr={20} pb={84}>
            <Box position="absolute" right={0}>
              <Image width={Style.adjust(240)} source={data.header.background.image} />
            </Box>
            <Box flex={1}>
              <Box mt={8} w={230}>
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
          <Box mt={-75}>
            <ProductGames games={data.games} />
          </Box>
          {!data.futureGames.length
            ? null
            : data.futureGames.map((game, gameIndex) => <FutureGame key={gameIndex} {...game} />)}
          <ContentItemWrapper {...data.content} />
          <Box h={264} />
        </ScrollView>
        <Box pointerEvents="none" position="absolute" left={0} right={0} bottom={0} height={200}>
          <LinearGradient {...linearGradient} style={StyleSheet.absoluteFill} />
        </Box>
      </Box>
    </>
  );
};

const linearGradient = {
  start: { x: 0, y: 1 },
  end: { x: 0, y: 0 },
  colors: ["#FFFFFF", "#FFFFFFEE"],
};

const styles = StyleSheet.create({
  contentContainerStyle: { backgroundColor: "white", flexGrow: 1 },
});

export default memo(RewardsUnlockContainer);
