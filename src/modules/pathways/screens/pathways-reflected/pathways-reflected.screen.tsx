import { memo } from "react";
import { Box, TextTemplate } from "@atoms";
import { ImageBackground } from "expo-image";
import { ScrollView, useWindowDimensions } from "react-native";
import { Colours, StyleSheet } from "@styles";
import colours from "@styles/colours";
import PathwayStreaks from "../../components/pathway-streaks/pathway-streaks";
import { AnimatedPlusPoints, Button } from "@components/molecules";
import { t } from "@locale";
import { FadeIn } from "react-native-reanimated";
import { GetUserPathwaysQuery } from "@graphql/__generated";
import { ItemDetailsReward } from "@organisms";
import ChestAnimatedRaysBackground from "@components/modals/open-random-chest/subcomponents/chest-animated-rays-background";
import { DETOX_ENABLED } from "@services/socket";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IPathwaysReflectedScreenProps {
  onClose: () => void;
  isLoading: boolean;
  todayReward: number;
  currentProgress: number;
  isStreakComplete: boolean;
  reflectionProgress?: GetUserPathwaysQuery["getUserPathways"]["reflectionProgress"];
}

const MYSTERY_BOX_ICON = require("./assets/pathways-mystery-box.webp");
const YUCOIN_SHADOW_ICON = require("./assets/yucoin-shadow.webp");
const REWARD_SIZE_MYSTERY_BOX = 120;
const REWARD_IMAGE_SIZE_MYSTERY_BOX = 100;
const REWARD_SIZE_YUCOIN = 190;
const REWARD_IMAGE_SIZE_YUCOIN = 120;

const PathwaysReflectedScreen = ({
  onClose,
  isLoading,
  todayReward,
  currentProgress,
  isStreakComplete,
  reflectionProgress,
}: IPathwaysReflectedScreenProps) => {
  const { maxProgress = 5, reflectedToday = false } = reflectionProgress ?? {};
  const { bottom, top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const rewardSize = isStreakComplete ? REWARD_SIZE_MYSTERY_BOX : REWARD_SIZE_YUCOIN;

  return (
    <PathwaysReflectedScreenWrapper isLoading={isLoading}>
      <Box flex={1} w="100%" entering={FadeIn.duration(300)}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {DETOX_ENABLED ? null : <ChestAnimatedRaysBackground top={top - width * 0.2} />}
          <Box mt={20 + top} disableAutoAdjust={true}>
            <Box justifyContent="center" alignItems="center" pb={90}>
              <Box justifyContent="center" alignItems="center" gap={50}>
                <Box>
                  <ItemDetailsReward
                    size={rewardSize}
                    imageSize={isStreakComplete ? REWARD_IMAGE_SIZE_MYSTERY_BOX : REWARD_IMAGE_SIZE_YUCOIN}
                    source={isStreakComplete ? MYSTERY_BOX_ICON : YUCOIN_SHADOW_ICON}
                  />
                  {todayReward > 0 ? (
                    <Box alignItems="center" position="absolute" justifyContent="center" w={rewardSize} top={-30}>
                      <AnimatedPlusPoints type="challenge-success" coins={todayReward} textType="h3" />
                    </Box>
                  ) : null}
                </Box>
                <Box gap={50} px={20}>
                  <Box>
                    <TextTemplate type="big64" textAlign="center" color={colours.neutral.white}>
                      {currentProgress}
                    </TextTemplate>
                    <Box gap={5}>
                      <TextTemplate type="h3" textAlign="center" color={colours.neutral.white}>
                        {t("screens.pathways.reflected.title")}
                      </TextTemplate>
                      <TextTemplate type="b1" textAlign="center" color={colours.neutral.white}>
                        {t("screens.pathways.reflected.subtitle")}
                      </TextTemplate>
                    </Box>
                  </Box>

                  <Box bg={Colours.neutral.white} br={10} px={20} py={20}>
                    <PathwayStreaks
                      currentStreak={currentProgress}
                      reflectedToday={reflectedToday}
                      maxProgress={maxProgress}
                      textColor={colours.neutral.n900}
                      completedBorderColor={null}
                      notCompletedBorderColor={colours.pathways.reflectionCompletedStreakBorder}
                      notCompletedColor={colours.pathways.reflectionCompletedStreakBackground}
                      notCompletedChestForegroundColor={colours.pathways.reflectionCompletedStreakBackground}
                      notCompletedChestBackgroundColor={colours.pathways.reflectionCompletedStreakBorder}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </ScrollView>
        <Box position="absolute" bottom={0} width="100%" pb={bottom}>
          <Button testID="continue_button" onPress={onClose} translatedLabel="Continue" />
        </Box>
      </Box>
    </PathwaysReflectedScreenWrapper>
  );
};

const PathwaysReflectedScreenWrapper = ({ children, isLoading }: { isLoading: boolean; children: React.ReactNode }) => {
  return (
    <Box w="100%" h="100%" justifyContent="space-between" alignItems="center">
      <ImageBackground source={require("./assets/pathways-reflected-bg.webp")} style={styles.imageBackground} />
      {!isLoading ? children : null}
    </Box>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default memo(PathwaysReflectedScreen);
