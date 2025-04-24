import { Box, TextTemplate } from "@atoms";
import { AchievementPointIcon } from "@atoms/icon/achievement-point-icon";
import { memo, useMemo } from "react";
import { ViewStyle } from "react-native";

interface IProps {
  label: string;
  autoWidth?: boolean;
  locked?: boolean;
  alignTextInCenter?: boolean;
}

const AchievementPoints = ({ label, autoWidth, locked, alignTextInCenter }: IProps) => {
  const textColor = useMemo(() => (label === "0" ? "#D9D9D7" : "#464647"), [label]);
  const backgroundColor = useMemo(() => (locked ? "#E3E3E1" : "#F4F0FF"), [locked]);

  const alignText = useMemo(() => (alignTextInCenter ? { pl: 8, pr: 2 } : {}), [alignTextInCenter]);

  const autoWidthStyle = useMemo(
    () => (autoWidth ? { flexGrow: 0, flexShrink: 0, alignSelf: "flex-start" } : { width: 104 }),
    [autoWidth]
  ) as ViewStyle;
  return (
    <Box
      pr={8}
      bg={backgroundColor}
      h={24}
      br={20}
      borderColor={"#EAE1FF"}
      borderWidth={1}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      {...autoWidthStyle}
    >
      <Box left={-1.7} top={1.5}>
        <AchievementPointIcon size={28} locked={locked} />
      </Box>
      <Box {...alignText}>
        <TextTemplate color={textColor} type="l1b">
          {label}
        </TextTemplate>
      </Box>
    </Box>
  );
};

export default memo(AchievementPoints);
