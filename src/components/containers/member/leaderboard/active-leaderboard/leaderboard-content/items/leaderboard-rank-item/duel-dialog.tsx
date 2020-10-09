import React, { useEffect, memo } from "react";
import { Animated } from "react-native";
import { styles } from "./duel-dialog.styles";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { Button } from "@atoms";

const _DuelDialog = ({ id }: { id: string }) => {
  const opacity = new Animated.Value(0.15);
  const height = new Animated.Value(0);

  const fadeIn = Animated.timing(opacity, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  });

  const grow = Animated.timing(height, {
    toValue: 1,
    duration: 150,
    useNativeDriver: true,
  });

  useEffect(() => {
    fadeIn.start();
    grow.start();

    return () => {
      fadeIn.stop();
      grow.stop();
    };
  }, [fadeIn, grow]);

  return (
    <Animated.View style={[styles.centered, { opacity, transform: [{ scaleY: height }] }]}>
      <Button
        label="challenge to duel"
        type="Primary"
        size="Large"
        onPress={async () => {
          await Navigation.showModal({
            component: {
              id: MODALS.duelInvite,
              name: MODALS.duelInvite,
              passProps: {
                opponentId: id.replace("lead_", ""),
              },
            },
          });
        }}
      />
    </Animated.View>
  );
};

export const DuelDialog = memo(_DuelDialog);
