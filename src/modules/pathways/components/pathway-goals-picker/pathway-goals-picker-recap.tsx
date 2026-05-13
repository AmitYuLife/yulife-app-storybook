import { memo } from "react";
import { ImageBackground } from "expo-image";
import { useSelector } from "react-redux";
import { Box, Image, TextTemplate } from "@atoms";
import { ControlledYuCoinCounter } from "@organisms/generic-heading";
import BlurredRaysWrapper from "@organisms/blurred-rays-wrapper/blurred-rays-wrapper";
import RaysSpotlightFocal from "@organisms/rays/rays-spotlight-focal";
import { Colours, StyleSheet, TOP_BAR } from "@styles";
import { t } from "@locale";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { PATHWAY_GOALS_PICKER_CONFIRM, PATHWAY_GOALS_PICKER_RECAP, PATHWAY_GOALS_PICKER_RECAP_ROW } from "@ids";
import { IPathwayGoalsPickerOption } from "../../types/pathway-goals-picker.types";

interface IPathwayGoalsPickerRecapProps {
  selectedGoals: IPathwayGoalsPickerOption[];
  isSubmitting: boolean;
  onConfirm: () => void;
}

const PathwayGoalsPickerRecap = ({ selectedGoals, isSubmitting, onConfirm }: IPathwayGoalsPickerRecapProps) => {
  const currentCoins = useSelector(getTotalCoins);

  return (
    <Box w="100%" h="100%" testID={PATHWAY_GOALS_PICKER_RECAP}>
      <ImageBackground
        source={require("../../screens/pathways-reflected/assets/pathways-reflected-bg.webp")}
        style={StyleSheet.absoluteFill}
      />
      <ControlledYuCoinCounter
        coins={currentCoins}
        backgroundColor="transparent"
        textStyle={{ color: Colours.neutral.white }}
      />
      <BlurredRaysWrapper
        title={t("screens.pathways.goals_picker.recap.title")}
        titlePaddingTop={TOP_BAR.TOP_BAR_WITH_PAD + 16}
        buttonLabel={t("screens.pathways.goals_picker.recap.cta")}
        buttonTestID={PATHWAY_GOALS_PICKER_CONFIRM}
        onButtonPress={onConfirm}
        isLoading={isSubmitting}
        isBlurred={false}
        backgroundColor="transparent"
        centerContent={false}
      >
        <RaysSpotlightFocal w="100%" ph={24}>
          <Box br={16} bg={Colours.neutral.white} p={16} gap={8}>
            {selectedGoals.map((goal) => (
              <Box
                key={goal.id}
                testID={PATHWAY_GOALS_PICKER_RECAP_ROW(goal.id)}
                flexDirection="row"
                alignItems="center"
                pv={12}
                ph={12}
                br={12}
                withBorder={Colours.neutral.n200}
                gap={12}
              >
                {goal.smallIcon.uri ? (
                  <Image source={{ uri: goal.smallIcon.uri }} width={24} height={24} contentFit="contain" />
                ) : null}
                <Box flex={1}>
                  <TextTemplate type="b2" color={Colours.inkStrong}>
                    {goal.title}
                  </TextTemplate>
                </Box>
              </Box>
            ))}
          </Box>
        </RaysSpotlightFocal>
      </BlurredRaysWrapper>
    </Box>
  );
};

export default memo(PathwayGoalsPickerRecap);
