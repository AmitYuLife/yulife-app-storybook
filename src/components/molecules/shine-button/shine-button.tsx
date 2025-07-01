import { Pressable } from "@components/molecules";
import { ReactNode, memo } from "react";
import { Box, TextTemplate } from "@atoms";
import { SHINE_BUTTON } from "@ids";

interface IShineButtonProps {
  onPress?: () => void;
  label?: string;
  icon?: ReactNode;
}

const ShineButton = ({ onPress, label, icon }: IShineButtonProps) => {
  return (
    <Box br={20} pb={4}>
      <Box
        w="97%"
        h={"100%"}
        bottom={0}
        bg="#E3E3E1"
        ml={"1.5%"}
        position="absolute"
        borderTopRadius={30}
        borderBottomRadius={30}
      />
      <Pressable
        pressedTranslation={3}
        enableAnimation={true}
        hitSlop={5}
        onPress={onPress}
        bg="white"
        br={100}
        borderWidth={1}
        borderColor="#E3E3E1"
      >
        <Box p={12} px={20} br={20} flexDirection="row" alignItems="center" gap={8}>
          {icon}
          {label ? (
            <TextTemplate type="b2b" color="#640038" testID={SHINE_BUTTON(label)}>
              {label}
            </TextTemplate>
          ) : null}
        </Box>
      </Pressable>
    </Box>
  );
};

export default memo(ShineButton);
