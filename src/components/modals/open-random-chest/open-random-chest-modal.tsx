import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { Button } from "@molecules";
import { Navigation } from "@navigation/main";
import Animated, { FadeInDown, FadeInUp, FadeOutDown } from "react-native-reanimated";
import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import SpinningRewards from "@components/molecules/spinning-rewards/spinning-rewards";
import YumojiRewardPicker from "../../molecules/yumoji-reward-picker/yumoji-reward-picker";
import ListPickStageHeader from "./list-pick-stage-header";
import RadioBattlePassRewardItem from "@components/molecules/radio-battle-pass-reward-item/radio-battle-pass-reward-item";
import { Style } from "@styles";

interface IOpenRandomChestModalProps {
  overlayImage?: string;
  milestoneId: string;
}

enum ChestCollectionType {
  glow = "glow",
  list = "list",
}

enum ChestStage {
  loading = "loading",
  staging = "staging",
  ingest = "ingest",
  pick = "pick",
  redeemed = "redeemed",
}

// TODO: This should come from chest config, but is hardcoded for now
// It is the UI that is shown to collect, either a glow or a list. (And in the future - a chest)
// All chests support all collection types
const COLLECTION_TYPE: ChestCollectionType = ChestCollectionType.list as ChestCollectionType;

const OpenRandomChestModal = ({ milestoneId, overlayImage }: IOpenRandomChestModalProps) => {
  const { data } = useQuery(gql("GetMobileGameBattlePassChestDetailsDocument"), {
    variables: { milestoneId },
    fetchPolicy: "network-only",
  });

  const [openChest, { loading: openLoading }] = useMutation(gql("OpenMobileGameBattlePassChestDocument"));
  const [claimPrizes, { loading: claimLoading }] = useMutation(gql("ClaimMobileGameBattlePassChestPrizesDocument"));

  const [selectedReward, setSelectedReward] = useState<string>(null);
  const [stage, setStage] = useState<ChestStage>(ChestStage.loading);

  const [isDetailsLoading, setIsDetailsLoading] = useState(false);

  const selectedItem = useMemo(() => {
    return data?.getMobileGameBattlePassChestDetails?.openedRewards.find((item) => item.id === selectedReward);
  }, [data?.getMobileGameBattlePassChestDetails?.openedRewards, selectedReward]);

  const setNewStage = useCallback(() => {
    const { openedRewards, possibleRewards, redeemedRewards } = data?.getMobileGameBattlePassChestDetails || {};
    if (openedRewards?.length) {
      if (openedRewards.length === 1) {
        setSelectedReward(openedRewards[0].id);
      }

      setStage(ChestStage.pick);
      return;
    }

    if (possibleRewards?.length) {
      setStage(ChestStage.staging);
      return;
    }

    if (redeemedRewards?.length) {
      setStage(ChestStage.redeemed);
      return;
    }
  }, [data]);

  useEffect(() => {
    if (!data?.getMobileGameBattlePassChestDetails || stage !== "loading") {
      return;
    }

    setNewStage();
  }, [data?.getMobileGameBattlePassChestDetails, setNewStage, stage]);

  const onOpenPress = useCallback(async () => {
    setIsDetailsLoading(true);
    try {
      await openChest({
        variables: { rewardId: data?.getMobileGameBattlePassChestDetails?.id },
      });

      setStage(ChestStage.ingest);
    } finally {
      setIsDetailsLoading(false);
    }
  }, [data?.getMobileGameBattlePassChestDetails?.id, openChest]);

  const onClosePress = useCallback(async () => {
    Navigation.dismissAllModals();
  }, []);

  const onClaimItem = useCallback(async () => {
    await claimPrizes({
      variables: {
        rewardId: data?.getMobileGameBattlePassChestDetails?.id,
        prizeIds: [selectedReward],
      },
    });

    Navigation.dismissAllModals();
  }, [claimPrizes, data?.getMobileGameBattlePassChestDetails?.id, selectedReward]);

  if (!data) {
    return;
  }

  const possibleItems = data?.getMobileGameBattlePassChestDetails?.possibleRewards;
  const openedItems = data?.getMobileGameBattlePassChestDetails?.openedRewards;
  const redeemedItems = data?.getMobileGameBattlePassChestDetails?.redeemedRewards;

  return (
    <View style={styles.container}>
      {stage === "staging" || stage === "ingest" ? (
        <Animated.View>
          <SpinningRewards
            stage={stage}
            images={possibleItems.map((item) => item.image)}
            overlayImage={overlayImage}
            onFinish={setNewStage}
          />
          {stage === "staging" ? (
            <Animated.View exiting={FadeOutDown.duration(800)}>
              <Button
                translationKey="modals.open_random_chest.open_chest"
                onPress={onOpenPress}
                isLoading={openLoading || isDetailsLoading}
              />
            </Animated.View>
          ) : null}
        </Animated.View>
      ) : null}

      {stage === "redeemed" ? (
        <>
          <View style={styles.pickHeader}>
            <Animated.View style={styles.pickTitle}>
              <TextTemplate type="b1b" color="white">
                {/* Temporary text, should come from API */}
                You already redeemed your prize
              </TextTemplate>
            </Animated.View>
            <View style={styles.listSelectPicker}>
              {redeemedItems.map((item) => (
                <RadioBattlePassRewardItem
                  key={item.id}
                  onPress={onClosePress}
                  theme={"dark"}
                  reward={{ id: item.id, title: item.title }}
                  checked={true}
                />
              ))}
            </View>
            <Animated.View exiting={FadeOutDown.duration(800)} style={styles.buttonContainer}>
              <Button translationKey="labels.cta.close" onPress={onClosePress} />
            </Animated.View>
          </View>
        </>
      ) : null}

      {stage === "pick" ? (
        <>
          <View style={styles.pickHeader}>
            <Animated.View entering={FadeInUp.duration(500)} style={styles.pickTitle}>
              <TextTemplate type="b1b" color="white">
                {/* Temporary text, should come from API */}
                You have won!
              </TextTemplate>
            </Animated.View>
            {COLLECTION_TYPE === "glow" ? (
              <Animated.View entering={FadeInUp.duration(600).delay(500)}>
                <TextTemplate type="b2" color="white">
                  {/* Temporary text, should come from the API */}
                  Select your prize to continue
                </TextTemplate>
              </Animated.View>
            ) : null}

            {COLLECTION_TYPE === "list" ? <ListPickStageHeader image={overlayImage} /> : null}

            <Animated.View entering={FadeInUp.delay(400).duration(1000)} style={styles.contentContainer}>
              {COLLECTION_TYPE === "glow" ? (
                <>
                  <TextTemplate type="b2" color="white">
                    {selectedItem?.item?.title}
                  </TextTemplate>
                  <YumojiRewardPicker
                    activeItem={selectedReward}
                    onPress={(i: string) => {
                      if (selectedReward === i) {
                        setSelectedReward(null);
                        return;
                      }

                      setSelectedReward(i);
                    }}
                    items={openedItems.map((item) => ({ image: item.item.image, id: item.id }))}
                  />
                </>
              ) : null}
              {COLLECTION_TYPE === ChestCollectionType.list ? (
                <View style={styles.listSelectPicker}>
                  {openedItems.map((item) => (
                    <RadioBattlePassRewardItem
                      key={item.id}
                      onPress={() => {
                        if (selectedReward === item.id) {
                          setSelectedReward(null);
                          return;
                        }

                        setSelectedReward(item.id);
                      }}
                      theme={"dark"}
                      reward={{ id: item.item.id, title: item.item.title }}
                      checked={selectedReward === item.id}
                    />
                  ))}
                </View>
              ) : null}
            </Animated.View>

            {selectedReward ? (
              <Animated.View entering={FadeInDown.duration(700)} style={styles.buttonContainer}>
                <Button
                  testID="claimChestPrize"
                  translationKey="modals.open_random_chest.claim_prize"
                  onPress={onClaimItem}
                  isLoading={claimLoading}
                />
              </Animated.View>
            ) : null}
          </View>
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#290163",
  },
  listSelectPicker: {
    width: "100%",
    paddingHorizontal: Style.adjust(30),
    gap: Style.adjust(15),
  },
  pickHeader: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: Style.adjust(48),
  },
  pickTitle: { paddingVertical: 16 },
  buttonContainer: {
    marginTop: Style.adjust(150),
  },
  contentContainer: { marginTop: 50, width: "100%", justifyContent: "center", alignItems: "center" },
});

export default memo(OpenRandomChestModal);
