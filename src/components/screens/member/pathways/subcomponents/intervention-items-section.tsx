import { Box, TextTemplate } from "@atoms";
import { YuScreenSection } from "@graphql/__generated";
import { Colours } from "@styles";
import { t } from "@locale";
import { renderSduiSection } from "@components/sdui-sections";

export const InterventionItemsSection = ({ sections }: { sections: YuScreenSection[] }) => {
  return (
    <Box gap={16}>
      <Box ph={8}>
        <TextTemplate type="b1b" color={Colours.neutral.white}>
          {t("screens.pathways.recommended_for_you")}
        </TextTemplate>
      </Box>
      {sections.map((section) =>
        renderSduiSection(section, {
          buttonColor: Colours.neutral.white,
        })
      )}
    </Box>
  );
};
