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

export interface IFibResultsInScreenProps {
  onClose?: () => void;
  navigation: FibLocalNavigation;
}

export const FibResultsInScreen = memo(function (props: IFibResultsInScreenProps) {
  const { onClose, navigation } = props;

  const backHandler = useCallback(() => {
    onClose();
    return true;
  }, [onClose]);

  useBackHandler(backHandler);

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

  return (
    <FibUnderwritingJourneyLayout
      heading={"Results"}
      progressBar={{ maxLength: 0, currentPosition: 0, isHidden: true }}
      hideHeadingBorder={false}
      onPreviousQuestion={onClose}
    >
      <View style={styles.wrapper}>
        <FibTitle title="Your results are in" textStyle={{ fontSize: 20, lineHeight: 24 }} />
        <Text style={styles.message}>{`We assessed your case it's done`}</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <Button type="Primary" size={"Large"} onPress={priceChanged} label={"Continue"} />
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
