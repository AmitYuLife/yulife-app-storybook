import { memo, useEffect, useState } from "react";
import { Box, TextTemplate, Image } from "@atoms";
import { DETOX_ENABLED } from "@services/socket";
import ChestAnimatedRaysBackground from "@components/modals/open-random-chest/subcomponents/chest-animated-rays-background";
import { ImageBackground } from "expo-image";
import { ScrollView } from "react-native";
import { Colours, StyleSheet } from "@styles";
import colours from "@styles/colours";
import { Button } from "@components/molecules";
import ShowcaseStackGrid from "@components/molecules/showcase-stack/subcomponents/showcase-stack-grid";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { t } from "@locale";
import Hint from "@components/molecules/hint/hint";
import ClaimedRewardCard from "@organisms/claimed-reward-card/claimed-reward-card";
import { ControlledYuCoinCounter } from "@organisms/generic-heading";
import { useSelector } from "react-redux";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { getUserAvatar } from "@redux/user/user.selectors";
import { addCommasToNumber } from "@utils";
import PathwayNoAvatar from "@components/molecules/challenge-tile/pathway-no-avatar";
import { TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";

interface Props {
  onClose: () => void;
  yucoinReward?: number;
  healthChallenge?: boolean;
}

const PathwaysClaimScreen = ({ onClose, healthChallenge, yucoinReward }: Props) => {
  const { bottom } = useSafeAreaInsets();
  const currentCoins = useSelector(getTotalCoins);
  const userAvatar = useSelector(getUserAvatar);
  const [yucoinValue, setYucoinValue] = useState(currentCoins);

  useEffect(() => {
    setYucoinValue(currentCoins + (yucoinReward ?? 0));
  }, [currentCoins, yucoinReward]);

  return (
    <Box w="100%" h="100%" justifyContent="space-between" alignItems="center">
      <ImageBackground
        source={require("../pathways-reflected/assets/pathways-reflected-bg.webp")}
        style={styles.imageBackground}
      />
      <ControlledYuCoinCounter
        coins={yucoinValue}
        backgroundColor="transparent"
        textStyle={{ color: colours.neutral.white }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <Box mt={TOP_BAR_WITH_PAD} pb={bottom + 100} disableAutoAdjust={true}>
          {DETOX_ENABLED ? null : <ChestAnimatedRaysBackground />}

          <Box justifyContent="center" alignItems="center">
            <Box justifyContent="center" alignItems="center" gap={10}>
              <Box px={20} mb={35}>
                <TextTemplate type="h2" textAlign="center" color={colours.neutral.white}>
                  {t("screens.pathways.claim.title")}
                </TextTemplate>
              </Box>

              <ShowcaseStackGrid pb={20} itemProps={{ pb: 0 }} gap={30}>
                {yucoinReward ? (
                  <ClaimedRewardCard
                    image={<Image source={require("@assets/icons/yucoin.png")} w={60} h={60} />}
                    backgroundColor={Colours.yellow.y100}
                    borderColor={Colours.pathways.brown}
                    sparkles={{ enabled: true }}
                  >
                    <Box gap={2} alignContent="center" justifyContent="center" h="100%">
                      <TextTemplate type="b2b" textAlign="center" color={colours.inkStrong}>
                        {addCommasToNumber(yucoinReward ?? 0)}
                      </TextTemplate>
                      <TextTemplate type="b2b" textAlign="center" color={colours.inkStrong}>
                        {t("screens.pathways.claim.yucoin")}
                      </TextTemplate>
                    </Box>
                  </ClaimedRewardCard>
                ) : null}
                {healthChallenge ? (
                  <ClaimedRewardCard
                    image={
                      <Box
                        w={65}
                        h={65}
                        br={100}
                        overflow="hidden"
                        alignItems="center"
                        justifyContent="center"
                        bg={Colours.pathways.lightOrange}
                      >
                        {userAvatar?.avatarRemoteFiles?.svgFull ? (
                          <Image
                            source={{ uri: userAvatar.avatarRemoteFiles.pngMini }}
                            width={120}
                            height={200}
                            top={62}
                            theme="light"
                            suppressLoadingUi={true}
                          />
                        ) : (
                          <PathwayNoAvatar width={65} height={65} />
                        )}
                      </Box>
                    }
                    backgroundGradient={[Colours.pathways.brightYellow, Colours.pathways.orange]}
                    borderGradient={[Colours.pathways.brightYellow, colours.neutral.white, Colours.pathways.darkOrange]}
                    sparkles={{ enabled: true, delay: 1000 }}
                  >
                    <Box gap={2} alignContent="center" justifyContent="center" h={45}>
                      <TextTemplate type="b2b" textAlign="center" color={Colours.darkPink} numberOfLines={2}>
                        {t("screens.pathways.claim.health_challenge")}
                      </TextTemplate>
                    </Box>
                  </ClaimedRewardCard>
                ) : null}
              </ShowcaseStackGrid>
            </Box>
          </Box>
        </Box>
      </ScrollView>
      <Box position="absolute" bottom={0} width="100%" pb={bottom} px={20} gap={20} alignItems="center">
        {healthChallenge ? (
          <Hint
            label={t("screens.pathways.claim.reward_title")}
            description={t("screens.pathways.claim.reward_subtitle")}
            image={{
              Element: <Image source={require("../../assets/pathways-chest-golden-stars.png")} w={80} h={80} />,
            }}
          />
        ) : null}
        <Button testID="claim_button" onPress={onClose} translatedLabel="Claim" />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    height: "100%",
  },
  imageBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  noAvatar: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default memo(PathwaysClaimScreen);
