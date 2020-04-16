import { persistor, store } from "@redux/_core/store";
import { setMainRoot } from "@redux/app/app.actions";
import { SplashScreen } from "@screens/index";
import * as React from "react";
import { Linking, Platform, StyleSheet, Text, View } from "react-native";
import { PersistGate } from "redux-persist/integration/react";

interface IProps {
    componentId: string;
}

if (Platform.OS === "ios") {
    (Text as any).defaultProps = { ...((Text as any).defaultProps || {}), allowFontScaling: false };
}

export const AppLoadingContainer: React.FC<IProps> = () => {
    const [url, setUrl] = React.useState("");
    const [renderPersistor, setRenderPersistor] = React.useState(false);
    const [animationEnded, setAnimationEnded] = React.useState(false);
    const [persistorBoostrapped, setPersistorBoostrapped] = React.useState(false);

    React.useEffect(() => {
        if (Platform.OS === "android") {
            Linking.getInitialURL()
                .then(setUrl)
                .catch(() => {
                    // console.log(e.message);
                });
        }
    }, []);

    React.useEffect(() => {
        if (persistorBoostrapped && animationEnded) {
            store.dispatch(setMainRoot(url));
        }
        return () => null;
    }, [persistorBoostrapped, animationEnded, url]);

    return (
        <View style={StyleSheet.absoluteFill}>
            <SplashScreen
                onAnimationStart={() => setRenderPersistor(true)}
                onAnimationEnd={() => setAnimationEnded(true)}
            />
            {!renderPersistor ? null : (
                <PersistGate persistor={persistor}>
                    {(bootstrapped: boolean) => {
                        if (!bootstrapped) {
                            return null;
                        }
                        return <View onLayout={() => setPersistorBoostrapped(true)} />;
                    }}
                </PersistGate>
            )}
        </View>
    );
};

export default AppLoadingContainer;
