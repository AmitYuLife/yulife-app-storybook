import React, { memo, useState, useEffect, useContext } from "react";
import { View } from "react-native-animatable";
import { StyleSheet, ViewStyle } from "react-native";
import { Loading } from "@atoms";
import { Style } from "@styles";
import { QuestsMapContext } from "../quests.context";

const ANIMATION_DURATION = 750;

function _QuestsLoadingOverlay() {
  const { isLoading } = useContext(QuestsMapContext);
  const [loadingClone, setLoadingClone] = useState(isLoading);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> = null;

    if (!isLoading) {
      timeout = setTimeout(() => {
        setLoadingClone(false);
      }, ANIMATION_DURATION);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isLoading]);

  if (!loadingClone) {
    return null;
  }

  return (
    <View
      duration={ANIMATION_DURATION}
      animation={isLoading ? "fadeIn" : "fadeOut"}
      useNativeDriver={true}
      style={styles.wrapper}
    >
      <View style={styles.indicatorWrapper}>
        <Loading size="small" />
      </View>
    </View>
  );
}

const QuestsLoadingOverlay = memo(_QuestsLoadingOverlay);

export default QuestsLoadingOverlay;

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.5)",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  indicatorWrapper: {
    backgroundColor: "white",
    height: Style.adjust(65),
    width: Style.adjust(65),
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
});
