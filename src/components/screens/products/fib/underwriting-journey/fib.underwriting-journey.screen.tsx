import React, { memo } from "react";
import { View, StyleSheet, Platform, ScrollView, ViewStyle } from "react-native";
import { Style } from "@styles";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";
import { GenericHeading } from "@atoms";
import ProgressBar from "../../../../molecules/progress-bar/progresss-bar";
import TitleWithIcon from "@atoms/fib/title-with-icon/title-with-icon";
import FibTitle from "@atoms/fib/title/title";
import Footer from "./subcomponents/footer/footer";

interface IFibUnderwritingJourneyScreenProps {
  onNavigateBack: () => void;
  data: any;
  onFirstButtonPressed: () => void;
  onSecondButtonPressed?: () => void;
}

export const FibUnderwritingJourneyScreen = memo(function (props: IFibUnderwritingJourneyScreenProps) {
  const { onNavigateBack, data, onFirstButtonPressed, onSecondButtonPressed } = props;

  const backHandler = React.useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  return (
    <View style={styles.wrapper}>
      <GenericHeading heading={data.heading} rightIcon={{ icon: "CLOSE" }} onRightIconPress={onNavigateBack} />
      <ProgressBar maxLength={30} currentPosition={5} />
      <ScrollView contentContainerStyle={styles.scrollViewContentStyle}>
        <TitleWithIcon icon={data.icon} title={data.title} />
        <FibTitle title={data.question} />
      </ScrollView>
      <Footer
        firstButton={{ action: onFirstButtonPressed, label: data.firstButtonLabel }}
        secondButton={{ action: onSecondButtonPressed, label: data.secondButtonLabel }}
      />
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
