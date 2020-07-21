import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";
import { Header, Heading, DEFAULT_TEXT_PAD_LEFT } from "./common";
import MinimalButton from "@atoms/button/minimalButton";
import Logger from "@services/logging/logger";

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
        <View style={styles.buttonWrapper}>
          <MinimalButton
            onPress={handlePress}
            title="edit salary"
            height={40}
            color={Colours.darkHotPink}
            titleStyle={{ textDecorationLine: "underline" }}
          />
        </View>
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
  buttonWrapper: {
    alignItems: "flex-end",
    flex: 1,
  } as ViewStyle,
  contentWrapper: {
    marginTop: Style.adjust(8),
    paddingRight: Style.adjust(16),
    alignItems: "center",
    flexDirection: "row",
  },
});
