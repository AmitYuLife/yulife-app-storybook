import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Style } from "@styles";
import { Header, Heading, DEFAULT_TEXT_PAD_LEFT } from "./common";
import Logger from "@services/logging/logger";
import { LinkButton } from "@atoms";

interface Props {
  heading: string;
  loading: boolean;
  navigateToEditSalary: () => void;
}

export const EstimatedCost = memo(({ heading, loading, navigateToEditSalary }: Props) => {
  function handlePress() {
    Logger.logEvent("salary_edit");
    navigateToEditSalary();
  }

  return (
    <View style={styles.wrapper}>
      <Header title="Estimated cost" />
      <View style={styles.contentWrapper}>
        <Heading title={loading ? "£... per month" : heading} />
        <LinkButton onPress={handlePress} label="edit salary" />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    width: Style.DEVICE_WIDTH,
    marginTop: Style.adjust(16),
    paddingTop: Style.adjust(32),
    paddingBottom: Style.adjust(16),
    paddingLeft: DEFAULT_TEXT_PAD_LEFT,
    backgroundColor: "white",
  } as ViewStyle,
  contentWrapper: {
    marginTop: Style.adjust(8),
    marginRight: Style.adjust(32),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
