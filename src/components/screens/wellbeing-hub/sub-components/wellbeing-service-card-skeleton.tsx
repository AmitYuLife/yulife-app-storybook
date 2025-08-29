import React, { FC } from "react";
import { View, ViewStyle } from "react-native";
import { Style, StyleSheet } from "@styles";
import { SkeletonLoading } from "@atoms";

interface IProps {
  limit: number;
}

const WellBeingServiceCardSkeleton: FC<IProps> = ({ limit }) => {
  return (
    <>
      {Array.from({ length: limit }).map((_, i) => (
        <View key={i} style={styles.wrapper}>
          <SkeletonLoading style={styles.picture} />
          <View style={styles.card}>
            <SkeletonLoading style={styles.title} />
            <View style={styles.descriptionWrapper}>
              <SkeletonLoading style={styles.description} />
              <SkeletonLoading style={styles.button} />
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginBottom: Style.adjust(24),
  } as ViewStyle,
  picture: {
    width: Style.adjust(120),
    height: Style.adjust(104),
  } as ViewStyle,
  card: {
    marginTop: Style.adjust(8),
    flex: 1,
    flexDirection: "column",
    paddingStart: Style.adjust(16),
  } as ViewStyle,
  title: {
    width: Style.adjust(112),
    height: Style.adjust(24),
    marginBottom: Style.adjust(8),
  } as ViewStyle,
  descriptionWrapper: {
    flexDirection: "row",
  } as ViewStyle,
  description: {
    width: Style.adjust(159),
    height: Style.adjust(56),
  } as ViewStyle,
  button: {
    width: Style.adjust(24),
    height: Style.adjust(24),
    marginStart: Style.adjust(8),
  } as ViewStyle,
});

export default WellBeingServiceCardSkeleton;
