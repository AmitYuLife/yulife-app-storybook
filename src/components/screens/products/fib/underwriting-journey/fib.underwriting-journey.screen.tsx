import React, { memo } from "react";
import { View, StyleSheet, Platform, ScrollView, ViewStyle } from "react-native";
import { Style } from "@styles";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";
import { GenericHeading } from "@atoms";
import ProgressBar from "../../../../molecules/progress-bar/progresss-bar";
import TitleWithIcon from "@atoms/fib/title-with-icon/title-with-icon";
import FibTitle from "@atoms/fib/title/title";
import Footer from "./subcomponents/footer/footer";
import { UnderwritingJourneyScreen } from "@components/containers/products/fib/data/underwriting-journey-data";

interface IFibUnderwritingJourneyScreenProps {
  onNavigateBack: () => void;
  data: UnderwritingJourneyScreen;
  onFirstButtonPressed: () => void;
  onSecondButtonPressed?: () => void;
  onPreviousButtonPressed?: () => void;
}

export const FibUnderwritingJourneyScreen = memo(function (props: IFibUnderwritingJourneyScreenProps) {
  const { onNavigateBack, data, onFirstButtonPressed, onSecondButtonPressed, onPreviousButtonPressed } = props;

  const backHandler = React.useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  const firstButton = { action: onFirstButtonPressed, label: data.firstButton.label };

  const secondButton = !onSecondButtonPressed
    ? null
    : { action: onSecondButtonPressed, label: data.secondButton.label };

  return (
    <View style={styles.wrapper}>
      <GenericHeading heading={data.heading} rightIcon={{ icon: "CLOSE" }} onRightIconPress={onNavigateBack} />
      <ProgressBar maxLength={30} currentPosition={5} />
      <ScrollView contentContainerStyle={styles.scrollViewContentStyle}>
        <TitleWithIcon icon={data.icon} title={data.title} />
        <FibTitle title={data.question} />
      </ScrollView>
      <Footer firstButton={firstButton} secondButton={secondButton} onPreviousButtonPressed={onPreviousButtonPressed} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
    height: "100%",
  },
  scrollViewContentStyle: {
    paddingBottom: 130,
  } as ViewStyle,
});
