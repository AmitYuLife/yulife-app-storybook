import { memo, ReactNode } from "react";
import { Box, StackedShadowWrapper } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { IBoxProps } from "@atoms/box/box.types";
import { Pressable } from "@components/molecules";
import { PathwaysReflectionStatus } from "../../pathways.types";

interface IPathwaysReflectionCardProps extends IBoxProps {
  children: ReactNode;
  onPress: () => void;
  status: PathwaysReflectionStatus;
}

const BORDER_COLORS = [Colours.pathways.darkBackground];

const PathwaysReflectionCard = ({ children, onPress, status, ...boxProps }: IPathwaysReflectionCardProps) => {
  const isLocked = status === "locked";

  return (
    <Pressable enableAnimation={true} pressedTranslation={3} onPress={onPress} disabled={!onPress} w="100%">
      <StackedShadowWrapper stackColors={BORDER_COLORS} style={styles.shadowWrapper}>
        <Box
          br={14}
          h="100%"
          w="100%"
          borderWidth={1}
          flexDirection="row"
          borderRightWidth={1}
          borderColor={Colours.pathways.darkBackground}
          bg={isLocked ? Colours.pathways.darkBackground : Colours.pathways.header}
          {...boxProps}
        >
          <Box opacity={isLocked ? 0.5 : 1} w="100%" h="100%">
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
    height: "100%",
    borderRadius: Style.adjust(16),
  },
});

export default memo(PathwaysReflectionCard);
