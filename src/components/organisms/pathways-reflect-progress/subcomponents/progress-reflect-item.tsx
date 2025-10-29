import { memo } from "react";
import { TextTemplate } from "@components/atoms/text/text-template";
import { Box, Image } from "@atoms";
import { Colours } from "@styles";

interface Props {
  label: string;
  icon?: number;
  isToday?: boolean;
  isDone?: boolean;
}

const ProgressReflectItem = ({ label, isToday, icon, isDone }: Props) => {
  return (
    <Box key={label} flexDirection="column" justifyContent="space-between" alignItems="center">
      <Box mb={12}>
        <TextTemplate type={isToday ? "b2b" : "b2"} color={Colours.neutral.white}>
          {label}
        </TextTemplate>
      </Box>
      <Box alignItems="center" justifyContent="center">
        <Image source={icon} width={32} height={32} resizeMode="cover" />
        {isDone ? (
          <Box
            size={14}
            br={7}
            bg={"#258DFF"}
            position="absolute"
            bottom={-6}
            alignSelf="center"
            alignItems="center"
            justifyContent="center"
          >
            <Image source={require("@assets/icons/check-green.png")} width={12} height={12} resizeMode="cover" />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default memo(ProgressReflectItem);
