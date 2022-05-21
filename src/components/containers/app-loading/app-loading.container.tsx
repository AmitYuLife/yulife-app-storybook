import { persistor, store } from "@redux/_core/store";
import { setMainRoot } from "@redux/app/app.actions";
import { SplashScreen } from "@screens/index";
import * as React from "react";
import { Linking, Platform, StyleSheet, Text, View } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import Logger from "@services/logging/logger";

interface IProps {
  componentId: string;
}

(Text as any).defaultProps = { ...((Text as any).defaultProps || {}), allowFontScaling: false };

export const AppLoadingContainer: React.FC<IProps> = () => {
  const [url, setUrl] = React.useState("");
  const [renderPersistor, setRenderPersistor] = React.useState(false);
  const [animationEnded, setAnimationEnded] = React.useState(false);
  const [persistorBoostrapped, setPersistorBoostrapped] = React.useState(false);

  React.useEffect(() => {
    if (Platform.OS === "android") {
      Linking.getInitialURL()
        .then(setUrl)
        .catch((error) => {
          Logger.error(error, { file: "app-loading-container" });
        });
    }
  }, []);

  React.useEffect(() => {
    if (persistorBoostrapped && animationEnded) {
      store.dispatch(setMainRoot(url));
    }

    return () => null;
  }, [persistorBoostrapped, animationEnded, url]);

  const handleAnimationStart = React.useCallback(() => setRenderPersistor(true), []);
  const handleAnimationEnd = React.useCallback(() => setAnimationEnded(true), []);
  const handleLayout = React.useCallback(() => setPersistorBoostrapped(true), []);

  return (
    <View style={styles.wrapper}>
      <SplashScreen onAnimationStart={handleAnimationStart} onAnimationEnd={handleAnimationEnd} />
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
  );
};

export default AppLoadingContainer;

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "white",
  },
});
