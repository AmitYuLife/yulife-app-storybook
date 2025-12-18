import { memo, ReactNode } from "react";
import { Box, StackedShadowWrapper } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { IBoxProps } from "@atoms/box/box.types";
import { Pressable } from "@components/molecules";

interface IPathwaysReflectionCardProps extends IBoxProps {
  children: ReactNode;
  onPress: () => void;
  isDisabled: boolean;
}

const BORDER_COLORS = [Colours.pathways.darkBackground];

const PathwaysReflectionCard = ({ children, onPress, isDisabled, ...boxProps }: IPathwaysReflectionCardProps) => {
  return (
    <Pressable
      enableAnimation={true}
      pressedTranslation={3}
      onPress={onPress}
      disabled={!onPress}
      w="100%"
      flexDirection="row"
    >
      <StackedShadowWrapper stackColors={BORDER_COLORS} style={styles.shadowWrapper}>
        <Box
          w="100%"
          flexDirection="row"
          bg={isDisabled ? Colours.pathways.darkBackground : Colours.pathways.header}
          {...boxProps}
        >
          <Box opacity={isDisabled ? 0.5 : 1} w="100%" h="100%">
            {children}
          </Box>
        </Box>
      </StackedShadowWrapper>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  shadowWrapper: {
    width: "100%",
    borderRadius: Style.adjust(14),
  },
});

export default memo(PathwaysReflectionCard);
