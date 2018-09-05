import * as React from "react";
import {
    Animated,
    findNodeHandle,
    StyleSheet,
    View
} from "react-native";
import Blur from "./blur";
import styles from "./blur-provider.styles";

enum TYPES {
    DEFAULT = "default",
    DARK = "dark"
}

export type Types = "default" | "dark";

export interface IToggleBlur {
    hideOverlay: () => void;
    showOverlay: () => void;
    toggleOverlay: () => void;
}

interface IProps {
    renderOverlay?: (prop: IToggleBlur) => React.ReactNode;
    render?: (prop: IToggleBlur) => React.ReactNode;
    displayOverlay?: boolean;
    type?: Types;
}

interface IState {
    viewRef: number;
    isVisible: boolean;
}

class BlurProvider extends React.PureComponent<IProps, IState> {
    public static Types = TYPES;
    public state: IState = {
        isVisible: false,
        viewRef: null
    };

    public viewRef: View = null;
    private animatedWrapperOpacity = new Animated.Value(0);
    private animatedWrapperPosition = new Animated.Value(-1000);

    public setRef = (ref: View) => {
        this.viewRef = ref;
    }

    // tslint:disable:variable-name
    public componentDidUpdate(_prevProps: IProps, prevState: IState) {
        if (this.props.displayOverlay && this.state.viewRef !== prevState.viewRef) {
            this.showOverlay();
        }
    }

    public showOverlay = () => {
        this.setState(
            () => ({ isVisible: true }),
            this.animate(this.state.isVisible)
        );
    }

    public hideOverlay = () => {
        this.setState(
            () => ({ isVisible: false }),
            this.animate(this.state.isVisible)
        );
    }

    public toggleOverlay = () => {
        this.setState(
            (state) => ({ isVisible: !state.isVisible }),
            this.animate(this.state.isVisible)
        );
    }

    public render() {
        const { viewRef } = this.state;
        const { render, renderOverlay, type } = this.props;

        return (
            <View style={styles.wrapper}>
                <View
                    ref={this.setRef}
                    onLayout={this.handleLayout}
                    style={styles.flex}
                >
                    {!render
                        ? null
                        : render({
                            hideOverlay: this.hideOverlay,
                            showOverlay: this.showOverlay,
                            toggleOverlay: this.toggleOverlay
                        })
                    }
                </View>
                {viewRef && type === "default" ? (
                    <Blur
                        blurRef={viewRef}
                        wrapperOpacity={this.animatedWrapperOpacity}
                        wrapperPosition={this.animatedWrapperPosition}
                    />
                ) : null}
                <Animated.View
                    style={{
                        backgroundColor: type === "dark" ? "rgba(0,0,0,0.5)" : "transparent",
                        ...StyleSheet.absoluteFillObject,
                        opacity: this.animatedWrapperOpacity,
                        transform: [
                            {
                                translateX: this.animatedWrapperPosition
                            }
                        ]
                    }}
                >
                    {!renderOverlay
                        ? null
                        : renderOverlay({
                            hideOverlay: this.hideOverlay,
                            showOverlay: this.showOverlay,
                            toggleOverlay: this.toggleOverlay
                        })
                    }
                </Animated.View>
            </View>
        );
    }

    private animate = (isVisible: boolean) => {
        const animateOpacity = Animated.timing(
            this.animatedWrapperOpacity,
            {
                duration: 300,
                toValue: isVisible ? 0 : 1
            }
        );
        const animatePosition = Animated.timing(
            this.animatedWrapperPosition,
            {
                duration: 0,
                toValue: isVisible ? -1000 : 0
            }
        );
        let sequence: Animated.CompositeAnimation;

        if (isVisible) {
            sequence = Animated.sequence([
                animateOpacity,
                animatePosition
            ]);
        } else {
            sequence = Animated.sequence([
                animatePosition,
                animateOpacity
            ]);
        }

        return () => sequence.start();
    }

    private handleLayout = () => {
        this.setState({
            viewRef: findNodeHandle(this.viewRef)
        });
    }
}

export default BlurProvider;
