import React, { memo, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { CloseSvg, Image } from "@atoms";
import { PressableWithDelay } from "@molecules";
import { Navigation } from "@navigation/main";
import { useMutation, useQuery } from "@apollo/client";
import { gql, MobileGameChestCollectionType } from "@graphql/__generated";
import { Style } from "@styles";
import ListPickReward from "./subcomponents/stages/pick-stages/list-pick-reward-stage";
import { ChestStage, IPickStageProps } from "./open-random-chest.types";
import GlowPickReward from "./subcomponents/stages/pick-stages/glow-pick-reward-stage";
import ChestRedeemedStage from "./subcomponents/stages/chest-redeemed-stage";
import { ChestStagingStage } from "./subcomponents/stages/chest-staging-stage";
import { useSafeAreaViewOffset } from "@hooks";
import ChestImagePreloader from "./subcomponents/chest-image-preloader";

interface IOpenRandomChestModalProps {
  overlayImage?: string;
  backgroundImage?: string;
  milestoneId: string;
}

const CHEST_PICK_STAGE_TYPES: Record<MobileGameChestCollectionType, (props: IPickStageProps) => ReactNode> = {
  [MobileGameChestCollectionType.List]: ListPickReward,
  [MobileGameChestCollectionType.Glow]: GlowPickReward,
};

const OpenRandomChestModal = ({ milestoneId, backgroundImage, overlayImage }: IOpenRandomChestModalProps) => {
  const { data } = useQuery(gql("GetMobileGameBattlePassChestDetailsDocument"), {
    variables: { milestoneId },
    fetchPolicy: "network-only",
  });

  const [openChest, { loading: openLoading }] = useMutation(gql("OpenMobileGameBattlePassChestDocument"));
  const [claimPrizes, { loading: claimLoading }] = useMutation(gql("ClaimMobileGameBattlePassChestPrizesDocument"));

  const [stage, setStage] = useState<ChestStage>(ChestStage.loading);
  const [isDetailsLoading, setIsDetailsLoading] = useState(false);

  const setNewStage = useCallback(() => {
    const { openedRewards, possibleRewards, redeemedRewards } = data?.getMobileGameBattlePassChestDetails || {};

    setStage(ChestStage.staging);
    if (openedRewards?.length) {
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

  const onClaimItem = useCallback(
    async (rewardId: string) => {
      await claimPrizes({
        variables: {
          rewardId: data?.getMobileGameBattlePassChestDetails?.id,
          prizeIds: [rewardId],
        },
      });

      Navigation.dismissAllModals();
    },
    [claimPrizes, data?.getMobileGameBattlePassChestDetails?.id]
  );

  const possibleItems = data?.getMobileGameBattlePassChestDetails?.possibleRewards;
  const openedItems = data?.getMobileGameBattlePassChestDetails?.openedRewards;
  const redeemedItems = data?.getMobileGameBattlePassChestDetails?.redeemedRewards;
  const collectionType = data?.getMobileGameBattlePassChestDetails?.collectionType;

  const contentNode = useMemo((): ReactNode => {
    if (stage === ChestStage.staging || stage === ChestStage.ingest) {
      return (
        <ChestImagePreloader images={[overlayImage, ...possibleItems.map((item) => item.image.uri)]}>
          <ChestStagingStage
            stage={stage}
            overlayImage={overlayImage}
            isLoading={openLoading || isDetailsLoading}
            possibleItems={possibleItems}
            onFinish={setNewStage}
            onOpen={onOpenPress}
          />
        </ChestImagePreloader>
      );
    }

    if (stage === "redeemed") {
      return (
        <ChestImagePreloader images={redeemedItems.map((item) => item.image.uri)}>
          <ChestRedeemedStage redeemedItems={redeemedItems} onClose={onClosePress} />
        </ChestImagePreloader>
      );
    }

    if (stage === "pick") {
      const PickStage =
        CHEST_PICK_STAGE_TYPES[collectionType] ?? CHEST_PICK_STAGE_TYPES[MobileGameChestCollectionType.List];

      return (
        <ChestImagePreloader images={[overlayImage, ...openedItems.map((item) => item.item.image.uri)]}>
          <PickStage
            overlayImage={overlayImage}
            openedItems={openedItems}
            isLoading={claimLoading}
            onClaim={onClaimItem}
          />
        </ChestImagePreloader>
      );
    }

    return null;
  }, [
    stage,
    onClaimItem,
    onOpenPress,
    openLoading,
    openedItems,
    setNewStage,
    claimLoading,
    onClosePress,
    overlayImage,
    possibleItems,
    redeemedItems,
    collectionType,
    isDetailsLoading,
  ]);

  const backgroundSource = useMemo(() => ({ uri: backgroundImage }), [backgroundImage]);
  const insets = useSafeAreaViewOffset();
  const scrollStyles = useMemo(
    () => ({ minHeight: Style.DEVICE_HEIGHT - insets.safeAreaViewOffset.y - Style.adjust(50) }),
    [insets.safeAreaViewOffset.y]
  );

  const closeStyles = useMemo(() => {
    return [styles.closeButton, { top: insets.safeAreaViewOffset.y + Style.adjust(10) }];
  }, [insets?.safeAreaViewOffset?.y]);

  return (
    <View style={styles.container}>
      <Image
        suppressLoadingUi={true}
        source={backgroundSource}
        width={Style.DEVICE_WIDTH}
        style={styles.backgroundImage}
      />
      {data ? (
        <ScrollView contentContainerStyle={scrollStyles} showsVerticalScrollIndicator={false} bounces={false}>
          <SafeAreaView>
            <View>{contentNode}</View>
          </SafeAreaView>
        </ScrollView>
      ) : null}

      <View style={closeStyles}>
        <PressableWithDelay onPress={onClosePress} delay={1000}>
          <CloseSvg />
        </PressableWithDelay>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#290163",
  },
  backgroundImage: {
    position: "absolute",
    top: Style.adjust(32),
    opacity: 0.4,
  },
  closeButton: { position: "absolute", right: Style.adjust(24), top: Style.adjust(38) },
});

export default memo(OpenRandomChestModal);
