import { memo } from "react";
import { Box, TextTemplate } from "@atoms";
import { DETOX_ENABLED } from "@services/socket";
import ChestAnimatedRaysBackground from "@components/modals/open-random-chest/subcomponents/chest-animated-rays-background";
import { ImageBackground } from "expo-image";
import { ScrollView } from "react-native";
import { StyleSheet } from "@styles";
import colours from "@styles/colours";
import PathwayStreaks from "../../components/pathway-streaks/pathway-streaks";
import { Button } from "@components/molecules";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ItemDetailsReward } from "@organisms";
import { noop } from "@utils";
import { t } from "@locale";

const TODO_REFLECTION_DAYS = 5;

const PathwaysReflectedScreen = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Box w="100%" h="100%" justifyContent="space-between" alignItems="center" bg="red">
      <ImageBackground source={require("./assets/pathways-reflected-bg.webp")} style={styles.imageBackground} />
      {DETOX_ENABLED ? null : <ChestAnimatedRaysBackground />}
      <ScrollView>
        <Box mt={90} justifyContent="center" alignItems="center">
          <Box justifyContent="center" alignItems="center" gap={50}>
            <ItemDetailsReward size={120} source={require("./assets/pathways-mystery-box.webp")} />

            <Box gap={50} px={20}>
              <Box>
                <TextTemplate type="big64" textAlign="center" color={colours.neutral.white}>
                  {TODO_REFLECTION_DAYS}
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

              <Box bg="white" br={10} px={20} py={35}>
                <PathwayStreaks
                  currentStreak={1}
                  reflectedToday={true}
                  maxProgress={5}
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
      </ScrollView>
      <Box position="absolute" bottom={0} width="100%" pb={bottom}>
        <Button testID="continue_button" onPress={noop} translatedLabel="Continue" />
      </Box>
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
