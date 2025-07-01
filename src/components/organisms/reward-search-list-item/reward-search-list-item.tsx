import { Box, Image, SkeletonLoading, TextTemplate } from "@atoms";
import { ChevronIcon } from "@atoms/icon/chevron-icon";
import { Pressable } from "@components/molecules";
import { IPressableProps } from "@components/molecules/pressable/pressable";
import { REWARD_ITEM } from "@ids";
import { Colours } from "@styles";
import { memo } from "react";

interface IRewardSearchListItemProps extends IPressableProps {
  label?: string;
  imageUrl?: string;
  isLoading?: boolean;
  onPress?: () => void;
}

const RewardSearchListItem = ({ label, imageUrl, isLoading, onPress, ...props }: IRewardSearchListItemProps) => {
  return (
    <Pressable
      enableAnimation={true}
      flexDirection="row"
      justifyContent="space-between"
      pressedTranslation={1}
      alignItems="center"
      p={2}
      onPress={onPress}
      {...props}
    >
      <Box flexDirection="row" gap={10} alignItems="center" flex={1}>
        {isLoading ? (
          <>
            <SkeletonLoading w={50} h={50} br={100} bg={Colours.metallic.m100} />
            <SkeletonLoading h={25} flex={1} bg={Colours.metallic.m100} />
          </>
        ) : (
          <>
            <Image
              br={100}
              width={50}
              height={50}
              resizeMode="cover"
              suppressLoadingUi={true}
              source={{ uri: imageUrl }}
              bg={Colours.metallic.m200}
            />
            <TextTemplate type="b2b" testID={REWARD_ITEM(label)}>
              {label}
            </TextTemplate>
          </>
        )}
      </Box>
      {!isLoading ? <ChevronIcon /> : null}
    </Pressable>
  );
};

export default memo(RewardSearchListItem);
