import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Box, SkeletonLoading } from "@atoms";
import { Style } from "@styles";

interface IProps {
  items?: number;
}

export const ListItemLoadingSkeleton = ({ items = 1 }: IProps) => {
  return (
    <>
      {Array.from({ length: items }, (_, i) => (
        <Box
          flexDirection="row"
          alignItems="center"
          pt={2}
          pb={3}
          pr={8}
          mb={8}
          key={`list-item-loading-skeleton_${i}`}
        >
          <SkeletonLoading style={styles.avatar} />
          <SkeletonLoading style={styles.name} />
          <SkeletonLoading style={styles.checkbox} />
        </Box>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  avatar: {
    marginRight: Style.adjust(9),
    width: Style.adjust(40),
    height: Style.adjust(40),
    borderRadius: Style.adjust(20),
  },
  name: {
    flexGrow: 1,
    marginRight: Style.adjust(8),
    height: Style.adjust(24),
    borderRadius: Style.adjust(4),
  },
  checkbox: {
    width: Style.adjust(24),
    height: Style.adjust(24),
    borderRadius: Style.adjust(4),
  },
});

export default memo(ListItemLoadingSkeleton);
