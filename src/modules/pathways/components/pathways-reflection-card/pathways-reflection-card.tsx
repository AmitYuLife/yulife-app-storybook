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
        <Box br={14} alignItems="center" justifyContent="center" flex={1} p={2} pb={0} top={-2} left={-1}>
          <Box
            flex={1}
            flexDirection="row"
            bg={isDisabled ? Colours.pathways.darkBackground : Colours.pathways.header}
            br={14}
            {...boxProps}
          >
            <Box opacity={isDisabled ? 0.5 : 1} w="100%" h="100%">
              {children}
            </Box>
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
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(PathwaysReflectionCard);
