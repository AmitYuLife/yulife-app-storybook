import React, { FC, memo } from "react";
import { ProcessingTimer } from "@molecules";
import LinearGradient from "react-native-linear-gradient";
import { mapServerStyles } from "@components/sdui";
import { Style } from "@styles";
import { Button } from "@components/molecules";
import { StyleSheet, View } from "react-native";
import { useSduiActionHandler } from "../../hooks/useSduiActionHandler";
import { YuScreenEnrolTimerFragment } from "@graphql/__generated";

export const EnrolmentTimer: FC<YuScreenEnrolTimerFragment> = memo(
  ({ heading, styles: serverStyles, secondsUntilTarget, button, backgroundGradientList }) => {
    const handlePress = useSduiActionHandler({ event: button?.event, onPress: button?.onPress });

    return (
      <View style={mapServerStyles(serverStyles)}>
        <LinearGradient
          colors={backgroundGradientList}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBackground}
        >
          <ProcessingTimer heading={heading} secondsUntilTarget={secondsUntilTarget} />
          {!button ? null : (
            <Button wrapperStyle={styles.buttonStyle} translatedLabel={button.label} onPress={handlePress} />
          )}
        </LinearGradient>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  gradientBackground: {
    paddingTop: Style.adjust(66),
    paddingBottom: Style.adjust(40),
  },
  buttonStyle: {
    marginTop: Style.adjust(20),
  },
});
