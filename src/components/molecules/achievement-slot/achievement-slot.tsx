import { Pressable } from "@molecules";
import { AddIcon } from "@atoms/icon/add-icon";
import { memo } from "react";
import { Image } from "@atoms";

interface IProps {
  onPress: () => void;
  icon: {
    uri: string;
    id?: string;
  };
}

const SIZE = 56;
const AchievementSlot = ({ onPress, icon }: IProps) => {
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
        <Image w={SIZE} h={SIZE} source={{ uri: icon.uri }} />
      ) : (
        <AddIcon color="#464647" showBorder={false} />
      )}
    </Pressable>
  );
};

export default memo(AchievementSlot);
