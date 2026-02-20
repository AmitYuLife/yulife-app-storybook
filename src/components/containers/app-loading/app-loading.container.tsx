import { persistor, store } from "@redux/_core/store";
import { setMainRoot } from "@redux/app/app.actions";
import SplashScreen from "@screens/splash/splash.screen";
import * as React from "react";

import { LayoutChangeEvent, SafeAreaView, View } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { useSafeAreaViewOffset } from "@hooks";
import { TextTemplate } from "@atoms";
import { Style, StyleSheet } from "@styles";
import { DETOX_ENABLED } from "@services/socket";

interface IProps {
  componentId: string;
  loadingText?: string;
}

export const AppLoadingContainer: React.FC<IProps> = ({ loadingText }) => {
  const [renderPersistor, setRenderPersistor] = React.useState(DETOX_ENABLED);
  const [animationEnded, setAnimationEnded] = React.useState(DETOX_ENABLED);
  const [persistorBoostrapped, setPersistorBoostrapped] = React.useState(false);

  React.useEffect(() => {
    if (persistorBoostrapped && animationEnded) {
      store.dispatch(setMainRoot());
    }

    return () => null;
  }, [persistorBoostrapped, animationEnded]);

  const handleAnimationStart = React.useCallback(() => setRenderPersistor(true), []);
  const handleAnimationEnd = React.useCallback(() => setAnimationEnded(true), []);
  const handleLayout = React.useCallback(() => setPersistorBoostrapped(true), []);
  const { setSafeAreaViewOffset } = useSafeAreaViewOffset();

  const handleWrapperLayout = (event: LayoutChangeEvent) => {
    setSafeAreaViewOffset({ y: event.nativeEvent.layout.y });
  };

  return (
    <SafeAreaView style={styles.flex}>
      <View onLayout={handleWrapperLayout} style={styles.flex}>
        <View style={styles.wrapper}>
          {!DETOX_ENABLED ? (
            <SplashScreen onAnimationStart={handleAnimationStart} onAnimationEnd={handleAnimationEnd} />
          ) : null}
          {!renderPersistor ? null : (
            <PersistGate persistor={persistor}>
              {(bootstrapped: boolean) => {
                if (!bootstrapped) {
                  return null;
                }

                return <View onLayout={handleLayout} />;
              }}
            </PersistGate>
          )}
        </View>
      </View>
      {!loadingText ? null : (
        <View style={styles.textWrapper}>
          <TextTemplate type="l2" numberOfLines={2}>
            {loadingText}
          </TextTemplate>
        </View>
      )}
    </SafeAreaView>
  );
};

export default AppLoadingContainer;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "white",
  },
  textWrapper: {
    position: "absolute",
    bottom: Style.adjust(50),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
