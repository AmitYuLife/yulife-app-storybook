import React, { memo, useCallback } from "react";
import { View, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Text, Button } from "@atoms";
import { Style } from "@styles";
import { FibUnderwritingJourneyLayout } from "../../layouts/fib.underwriting-journey-layout";
import { useBackHandler } from "../../../../../../services/hooks/useBackHandler";
import FibTitle from "../../../../../atoms/fib/title/title";
import { Navigation } from "react-native-navigation";
import { MODALS } from "../../../../../../navigation/constants";
import { FibLocalNavigation, FIB_CONFIRM_PACKAGES } from "../../../../../containers/products/fib/fib.types";
import { ScreeningStatus } from "../../../../../../graphql/_core/schema/globalTypes";
import Logger from "../../../../../../services/logging/logger";

export interface IFibResultsInScreenProps {
  onClose?: () => void;
  navigation: FibLocalNavigation;
  showRejectedScreen: () => void;
  showCongratulationScreen: () => void;
  fibStatus: ScreeningStatus;
}

export const FibResultsInScreen = memo(function (props: IFibResultsInScreenProps) {
  const { onClose, showRejectedScreen, showCongratulationScreen, fibStatus, navigation } = props;

  const backHandler = useCallback(() => {
    onClose();
    return true;
  }, [onClose]);

  useBackHandler(backHandler);
  // TODO: Display price change modal when removing this screen.
  const priceChanged = useCallback(() => {
    return Navigation.showModal({
      component: {
        id: MODALS.generic,
        name: MODALS.generic,
        passProps: {
          onPress: async () => {
            await Navigation.dismissModal(MODALS.generic);
            navigation.push(FIB_CONFIRM_PACKAGES);
          },
          heading: "Price change",
          subheading: "After processing your data, your price was changed",
          ctaLabel: "Continue",
        },
      },
    });
  }, [navigation]);

  const onPressContinue = useCallback(() => {
    switch (fibStatus) {
      case ScreeningStatus.RGA_LOADING:
        priceChanged();
        break;
      case ScreeningStatus.RGA_REJECTED:
        showRejectedScreen();
        break;
      case ScreeningStatus.RGA_APPLIED:
        showCongratulationScreen();
        break;
      default:
        Logger.logMixpanelEvent("Unhandled ScreeningStatus", { screeningStatus: fibStatus });
    }
  }, [fibStatus, priceChanged, showRejectedScreen, showCongratulationScreen]);

  return (
    <FibUnderwritingJourneyLayout heading={"Results"} progressBarHideType="unrendered" onPreviousQuestion={onClose}>
      <View style={styles.wrapper}>
        <FibTitle title="Your results are in" textStyle={{ fontSize: 20, lineHeight: 24 }} />
        <Text style={styles.message}>{`We assessed your case it's done`}</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <Button type="Primary" size={"Large"} onPress={onPressContinue} label={"Continue"} />
      </View>
    </FibUnderwritingJourneyLayout>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 12,
    paddingHorizontal: 32,
  } as ViewStyle,
  buttonWrapper: {
    marginTop: "auto",
    marginBottom: 48,
  } as ViewStyle,
  message: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    letterSpacing: 1,
    color: "#5A5A5C",
    marginTop: 20,
  } as TextStyle,
});
