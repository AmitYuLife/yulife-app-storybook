import { SharedValue } from "react-native-reanimated";
import { Box, TextTemplate } from "@atoms";
import { FeatureCardSection, WellbeingHubSection } from "@graphql/__generated";
import { Colours } from "@styles";
import { t } from "@locale";
import { renderSduiSection } from "@components/sdui-sections";
import PathwaysVisibilityWrapper from "../pathways-visibility-wrapper/pathways-visibility-wrapper";

type InterventionSection = FeatureCardSection | WellbeingHubSection;

interface IPathwaysInterventionSectionProps {
  sections: InterventionSection[];
  scrollY?: SharedValue<number>;
}

export const PathwaysInterventionSection = ({ sections, scrollY }: IPathwaysInterventionSectionProps) => {
  return (
    <Box gap={16}>
      <Box ph={8}>
        <TextTemplate type="b1b" color={Colours.neutral.white}>
          {t("screens.pathways.recommended_for_you")}
        </TextTemplate>
      </Box>
      {sections.map((section) => (
        <PathwaysVisibilityWrapper
          key={section.id}
          scrollY={scrollY}
          onScrollIntoView={section.onScrollIntoView ?? undefined}
        >
          {renderSduiSection(section, {
            buttonColor: Colours.neutral.white,
          })}
        </PathwaysVisibilityWrapper>
      ))}
    </Box>
  );
};
