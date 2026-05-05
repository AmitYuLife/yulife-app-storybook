import { memo } from "react";
import { ImageBackground } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, TextTemplate } from "@atoms";
import { Button } from "@molecules";
import { Colours, Style, StyleSheet } from "@styles";
import { t } from "@locale";
import { TrophyIcon } from "@components/atoms/icon/trophy-icon";
import RaysSpotlightLayout from "@organisms/rays/rays-spotlight-layout";
import RaysSpotlightFocal from "@organisms/rays/rays-spotlight-focal";
import { MIN_SAFE_BOTTOM_PADDING } from "@styles/safeAreaViewOffset";
import { PATHWAYS_GOALS_SUCCESS_CTA, PATHWAYS_GOALS_SUCCESS_SCREEN } from "@ids";

interface IPathwaysGoalsSuccessScreenProps {
  onPressCta: () => void;
}

const PathwaysGoalsSuccessScreen = ({ onPressCta }: IPathwaysGoalsSuccessScreenProps) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Box w="100%" h="100%" testID={PATHWAYS_GOALS_SUCCESS_SCREEN}>
      <ImageBackground
        source={require("./pathways-reflected/assets/pathways-reflected-bg.webp")}
        style={StyleSheet.absoluteFill}
      />
      <RaysSpotlightLayout opacity={0.85} raysStyle="thin">
        <Box flex={1} alignItems="center" justifyContent="flex-start" pt="40%" px={24}>
          <RaysSpotlightFocal mb={60} pb={80}>
            <TrophyIcon width={116} height={110} />
          </RaysSpotlightFocal>
          <Box alignItems="center" gap={16}>
            <TextTemplate type="h1" textAlign="center" color={Colours.neutral.white}>
              {t("screens.pathways.goals.success.title")}
            </TextTemplate>
            <TextTemplate type="b1" textAlign="center" color={Colours.neutral.white}>
              {t("screens.pathways.goals.success.body")}
            </TextTemplate>
          </Box>
        </Box>
      </RaysSpotlightLayout>
      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        disableAutoAdjust={true}
        pb={Math.max(bottom, MIN_SAFE_BOTTOM_PADDING)}
        ph={Style.adjust(24)}
      >
        <Button
          testID={PATHWAYS_GOALS_SUCCESS_CTA}
          onPress={onPressCta}
          translationKey="screens.pathways.goals.success.cta"
        />
      </Box>
    </Box>
  );
};

export default memo(PathwaysGoalsSuccessScreen);
