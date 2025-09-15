import { Box, TextTemplate } from "@atoms";
import { ArrowIcon } from "@atoms/icon/arrow";
import { usePressEffect } from "@hooks";
import { Colours } from "@styles";
import { memo } from "react";
import { Pressable } from "react-native";

interface IBattlePassLeaderboardHeaderFilterButtonProps {
  onPress?: () => void;
  label: string;
}

const BattlePassLeaderboardHeaderFilterButton = ({ label, onPress }: IBattlePassLeaderboardHeaderFilterButtonProps) => {
  const { animatedStyle, onPressIn, onPressOut } = usePressEffect({ pressedScale: 0.98, pressedTranslation: 0 });

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPress} hitSlop={10}>
      <Box
        px={16}
        py={2}
        center={true}
        rounded={true}
        borderWidth={1}
        flexDirection="row"
        forceAnimated={true}
        style={animatedStyle}
        borderColor="rgba(0,0,0,.2)"
        maxWidth={200}
      >
        <TextTemplate numberOfLines={1} type="b2b">
          {label}
        </TextTemplate>
        <ArrowIcon size={22} direction="down" color={Colours.neutral.n800} />
      </Box>
    </Pressable>
  );
};

export default memo(BattlePassLeaderboardHeaderFilterButton);
