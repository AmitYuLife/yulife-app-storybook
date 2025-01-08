import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Box, SkeletonLoading } from "@atoms";
import { Style } from "@styles";

const NotificationLoading = () => (
  <Box mt={16} mh={20} mb={22}>
    <SkeletonLoading style={styles.lastDays} />
    <Box flexDirection="row">
      <SkeletonLoading style={styles.picture} />
      <Box ml={10}>
        <SkeletonLoading style={styles.title} />
        <SkeletonLoading style={styles.description} />
        <SkeletonLoading style={styles.date} />
      </Box>
    </Box>
  </Box>
);

const styles = StyleSheet.create({
  lastDays: {
    width: Style.adjust(100),
    height: Style.adjust(16),
    borderRadius: 3,
    marginBottom: Style.adjust(15),
  },
  picture: {
    width: Style.adjust(64),
    height: Style.adjust(64),
  },
  title: {
    width: Style.adjust(198),
    height: Style.adjust(16),
    borderRadius: 3,
  },
  description: {
    width: Style.adjust(138),
    height: Style.adjust(16),
    borderRadius: 3,
    marginTop: Style.adjust(10),
  },
  date: {
    width: Style.adjust(108),
    height: Style.adjust(10),
    borderRadius: 3,
    marginTop: Style.adjust(10),
  },
});

export default memo(NotificationLoading);
