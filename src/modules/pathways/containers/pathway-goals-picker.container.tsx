import { memo } from "react";
import { useBackHandler } from "@hooks";
import { usePathwayGoalsPicker } from "../hooks/usePathwayGoalsPicker";
import PathwayGoalsPickerScreen from "../screens/pathway-goals-picker/pathway-goals-picker.screen";

interface IPathwayGoalsPickerContainerProps {
  componentId: string;
}

const PathwayGoalsPickerContainer = ({ componentId }: IPathwayGoalsPickerContainerProps) => {
  const { handleHardwareBack, ...pickerArgs } = usePathwayGoalsPicker({ componentId });

  useBackHandler(handleHardwareBack);

  return <PathwayGoalsPickerScreen {...pickerArgs} />;
};

export default memo(PathwayGoalsPickerContainer);
