import { persistor, store } from "@redux/_core/store";
import { setMainRoot } from "@redux/app/app.actions";
import { SplashScreen } from "@screens/index";
import * as React from "react";
import { PureComponent } from "react";
import { Linking, Platform, StyleSheet, Text, View } from "react-native";
import { PersistGate } from "redux-persist/integration/react";

interface IProps {
    componentId: string;
}

const initialState = {
    renderPersistor: false,
    animationEnded: false,
    url: ""
};
type IState = typeof initialState;

export default class AppLoadingContainer extends PureComponent<IProps, IState> {
    public state = initialState;
    private interval: NodeJS.Timer;

    constructor(props: IProps) {
        super(props);

        (Text as any).defaultProps = (Text as any).defaultProps || {};
        (Text as any).defaultProps.allowFontScaling = false;
    }

    public async componentWillMount() {
        if (Platform.OS === "android") {
            try {
                const url = await Linking.getInitialURL();

                if (url) {
                    this.setState({ url });
                }
            } catch (e) {
                // console.log(e.message);
            }
        } else {
            Linking.addEventListener("url", ({ url }: any) => this.setState({ url }));
        }
    }

    public componentWillUnmount() {
        if (this.interval) {
            global.clearInterval(this.interval);
        }
    }

    public render() {
        const { renderPersistor } = this.state;

        return (
            <View style={StyleSheet.absoluteFill}>
                <SplashScreen
                    onAnimationStart={this.handleInitialPersistLayout}
                    onAnimationEnd={this.handleAnimationEnd}
                />
                {!renderPersistor ? null : (
                    <PersistGate persistor={persistor}>
                        {(bootstrapped: boolean) => {
                            if (!bootstrapped) {
                                return null;
                            }

                            return <View onLayout={this.handleBootstrappedPersistor} />;
                        }}
                    </PersistGate>
                )}
            </View>
        );
    }

    private handleInitialPersistLayout = () => {
        this.setState({ renderPersistor: true });
    };

    private handleAnimationEnd = () => {
        this.setState({ animationEnded: true });
    };

    private handleBootstrappedPersistor = () => {
        this.interval = global.setInterval(() => {
            if (this.state.renderPersistor && this.state.animationEnded) {
                this.handleInitialAuhtorization();
                global.clearInterval(this.interval);
            }
        }, 200);
    };

    private handleInitialAuhtorization = async () => {
        const { url } = this.state;

        store.dispatch(setMainRoot(url));
    };
}
