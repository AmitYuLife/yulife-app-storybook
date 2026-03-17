import * as React from "react";
import { View, ViewStyle } from "react-native";
import { TouchableOpacityWithDelay } from "@molecules";

import { StyleSheet } from "@styles";
import { useTheme } from "@app/modules/themes/hooks/useTheme";
import { useMemo } from "react";
interface IProps {
  pageCount: number;
  activePage: number;
  onPress?: (pressIndex: number) => void;
}

const PageIndicator = ({ pageCount, activePage, onPress }: IProps) => {
  const { theme } = useTheme();

  const activePageStyle = useMemo(() => {
    return {
      backgroundColor: theme.colors.primary.p400,
      width: 12,
      height: 12,
    };
  }, [theme]);

  return (
    <View style={styles.container}>
      {Array.from({ length: pageCount }).map((_, i: number) => {
        const isActivePage = i === activePage;
        const indicatorStyles = [styles.pageIndicator, isActivePage ? activePageStyle : styles.inactivePage];
        const testId = `indicator-${i}-${isActivePage ? "active" : "inactive"}`;

        return onPress ? (
          <TouchableOpacityWithDelay hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }} onPress={() => onPress(i)}>
            <View testID={testId} key={i} style={indicatorStyles} />
          </TouchableOpacityWithDelay>
        ) : (
          <View testID={testId} key={i} style={indicatorStyles} />
        );
      })}
    </View>
  );
};

export default PageIndicator;

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginVertical: 20, justifyContent: "center", alignItems: "center" } as ViewStyle,
  inactivePage: {
    width: 8,
    height: 8,
    backgroundColor: "#e7e7eb",
  } as ViewStyle,
  pageIndicator: {
    marginHorizontal: 16,
    borderRadius: 10,
  } as ViewStyle,
});
