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
  const isActive = status === "active";

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
          bg={isActive ? Colours.pathways.header : Colours.pathways.darkBackground}
          {...boxProps}
        >
          <Box opacity={isActive ? 1 : 0.5} w="100%" h="100%">
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
