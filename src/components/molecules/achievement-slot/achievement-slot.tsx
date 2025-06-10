import { Pressable } from "@molecules";
import { AddIcon } from "@atoms/icon/add-icon";
import { memo } from "react";
import { Image } from "@atoms";
import { StarEmptySlotIcon } from "@atoms/icon/star-empty-slot-icon";

interface IProps {
  onPress: () => void;
  showStarIcon?: boolean;
  icon: {
    uri?: string;
    id: string;
  };
}

const SIZE = 56;
const IMAGE_SIZE = SIZE + 4;
const AchievementSlot = ({ onPress, icon, showStarIcon }: IProps) => {
  return (
    <Pressable
      w={SIZE}
      h={SIZE}
      br={100}
      borderWidth={icon?.uri ? 0 : 1}
      bg="white"
      borderColor="#E3E3E1"
      alignItems="center"
      justifyContent="center"
      onPress={onPress}
    >
      {icon?.uri ? (
        <Image w={IMAGE_SIZE} h={IMAGE_SIZE} source={{ uri: icon.uri }} />
      ) : (
        <>{showStarIcon && !icon ? <StarEmptySlotIcon /> : <AddIcon color="#464647" showBorder={false} />}</>
      )}
    </Pressable>
  );
};

export default memo(AchievementSlot);
