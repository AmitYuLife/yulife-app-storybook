import { Pressable } from "@molecules";
import { memo, useMemo } from "react";
import { Box, Image } from "@atoms";
import { StarEmptySlotIcon } from "@atoms/icon/star-empty-slot-icon";
import { ACHIEVEMENT_EMPTY_SLOT } from "@ids";

interface IProps {
  onPress: () => void;
  showStarIcon?: boolean;
  icon: {
    uri?: string;
    id: string;
  };
  testID?: string;
}

const IMAGE_SIZE = 171;
const SLOT_SIZE = 144;

const AchievementSlot = ({ onPress, icon, testID }: IProps) => {
  const borderStyle = useMemo(() => {
    if (icon?.uri) {
      return {};
    }

    return {
      borderWidth: 2,
      borderStyle: "dashed",
      borderColor: "#A0A09B",
    };
  }, [icon?.uri]);

  return (
    <Pressable onPress={onPress} testID={testID}>
      <Box w={SLOT_SIZE} h={SLOT_SIZE} bg="white" br={100} alignItems="center" justifyContent="center" {...borderStyle}>
        {icon?.uri ? (
          <Box mb={12} alignItems="center" justifyContent="center">
            <Image w={IMAGE_SIZE} h={IMAGE_SIZE} source={{ uri: icon.uri }} />
          </Box>
        ) : (
          <Box
            testID={ACHIEVEMENT_EMPTY_SLOT(testID)}
            w={112}
            h={112}
            bg="#FAFAFE"
            br={100}
            alignItems="center"
            justifyContent="center"
            borderWidth={1}
            borderColor="#E3E3E1"
          >
            <StarEmptySlotIcon size={38} />
          </Box>
        )}
      </Box>
    </Pressable>
  );
};

export default memo(AchievementSlot);
