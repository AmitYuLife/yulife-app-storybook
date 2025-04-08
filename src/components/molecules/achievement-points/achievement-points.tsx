import { Box, TextTemplate } from "@atoms";
import { AchievementPointIcon } from "@atoms/icon/achievement-point-icon";
import { memo, useMemo } from "react";
import { ViewStyle } from "react-native";

interface IProps {
  label: string;
  autoWidth?: boolean;
}

const AchievementPoints = ({ label, autoWidth }: IProps) => {
  const textColor = useMemo(() => (label === "0" ? "#D9D9D7" : "#464647"), [label]);

  const autoWidthStyle = useMemo(
    () => (autoWidth ? { flexGrow: 0, flexShrink: 0, alignSelf: "flex-start" } : { width: 104 }),
    [autoWidth]
  ) as ViewStyle;
  return (
    <Box
      pr={8}
      bg="#F4F0FF"
      h={24}
      br={20}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      {...autoWidthStyle}
    >
      <Box left={-1.7} top={1.5}>
        <AchievementPointIcon size={28} />
      </Box>
      <TextTemplate color={textColor} type="l1b">
        {label}
      </TextTemplate>
    </Box>
  );
};

export default memo(AchievementPoints);
