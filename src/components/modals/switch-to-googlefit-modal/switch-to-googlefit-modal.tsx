import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Button, ChecklistInfoCard, TextTemplate, Wrapper } from "@atoms";
import { GoogleFitIcon } from "@atoms/icon/google-fit-icon";
import { Colours, Style } from "@styles";
import GenericOverlay from "@components/modals/generic-overlay/generic-overlay";
import { MODALS } from "@navigation/constants";
import { Navigation } from "react-native-navigation";

const list = [
  {
    label: "Steps",
    checked: true,
  },
  {
    label: "Meditation",
    checked: true,
  },
  {
    label: "3rd party apps",
    checked: true,
  },
];

const SwitchToGoogleFitModal = () => {
  const onClose = useCallback(() => Navigation.dismissModal(MODALS.switchToGoogleFit), []);
  return (
    <GenericOverlay onClose={onClose}>
      <View style={styles.wrapper}>
        <Wrapper alignItems="center">
          <ChecklistInfoCard
            icon={<GoogleFitIcon />}
            title="Google Fit"
            description="Supports all activities for the full experience & rewards"
            isSelected={true}
            selectedStyle={styles.selectedStyle}
            list={list}
          />

          <View style={styles.title}>
            <TextTemplate type="h1">Heads up!</TextTemplate>
          </View>
          <TextTemplate type="b2" textAlign="center">
            Samsung Health does not currently sync the data we need in order to reward you for your session. To sync
            mindful minutes & 3rd party apps, please switch to Google Fit.
          </TextTemplate>

          <Button
            label="Switch to Google Fit"
            onPress={() => console.log("press me")}
            wrapperStyle={{ marginTop: Style.adjust(32) }}
          />
        </Wrapper>
      </View>
    </GenericOverlay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(32),
    alignItems: "center",
  },
  title: {
    marginTop: Style.adjust(32),
    marginBottom: Style.adjust(16),
  },
  selectedStyle: {
    backgroundColor: Colours.neutral.white,
    borderColor: Colours.metallic.m100,
  },
});

export default memo(SwitchToGoogleFitModal);
