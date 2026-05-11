import { memo } from "react";
import { Box, TextTemplate } from "@atoms";
import { Colours } from "@styles";
import { t } from "@locale";
import GenericHeaderLeftIcon from "@organisms/generic-heading/subcomponents/generic-header-left-icon";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { PATHWAY_GOALS_PICKER_BACK } from "@ids";

interface IPathwayGoalsPickerHeaderProps {
  current?: number;
  total?: number;
  onBack?: () => void;
}

const PathwayGoalsPickerHeader = ({ current, total, onBack }: IPathwayGoalsPickerHeaderProps) => {
  const showPagination = typeof current === "number" && typeof total === "number" && total > 0;

  return (
    <Box px={16} pt={8} pb={8} gap={8}>
      <Box flexDirection="row" alignItems="center" minHeight={44}>
        <Box w={44} alignItems="flex-start" justifyContent="center">
          {onBack ? (
            <GenericHeaderLeftIcon
              icon={LeftIcon.BACK}
              color={Colours.inkStrong}
              onPress={onBack}
              testID={PATHWAY_GOALS_PICKER_BACK}
            />
          ) : null}
        </Box>
        <Box flex={1} alignItems="center" justifyContent="center">
          <TextTemplate type="b1b" color={Colours.inkStrong} numberOfLines={1}>
            {t("screens.pathways.goals_picker.header.title")}
          </TextTemplate>
        </Box>
        <Box w={44} alignItems="flex-end" justifyContent="center">
          {showPagination ? (
            <TextTemplate type="l1b" color={Colours.inkSubtle}>
              {t("screens.pathways.goals_picker.header.pagination", { current, total })}
            </TextTemplate>
          ) : null}
        </Box>
      </Box>
      <Box px={8}>
        <TextTemplate type="b2" color={Colours.inkStrong}>
          {t("screens.pathways.goals_picker.header.subtitle")}
        </TextTemplate>
      </Box>
    </Box>
  );
};

export default memo(PathwayGoalsPickerHeader);
