import * as React from "react";
import {
    Animated,
    findNodeHandle,
    StyleSheet,
    View,
    ViewStyle,
} from "react-native";
import Blur from "./blur";

export interface IToggleBlur {
    handleToggleBlur: () => void;
}

interface IProps {
    renderOverlay?: (
        prop: IToggleBlur
    ) => /* tslint:disable-next-line */
        React.ReactElement<any>;
    /* tslint:disable-next-line */
    render?: (prop: IToggleBlur) => React.ReactElement<any>;
}

interface IState {
    viewRef: number;
    isVisible: boolean;
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    } as ViewStyle,
    wrapper: {
        flex: 1,
        marginBottom: -2,
    } as ViewStyle,
});

class BlurProvider extends React.PureComponent<IProps, IState> {

    public state: IState = {
        isVisible: false,
        viewRef: null,
    };

    public viewRef: View = null;
    private animatedWrapperOpacity = new Animated.Value(0);
    private animatedWrapperPosition = new Animated.Value(-1000);

    public setRef = (ref: View) => {
        this.viewRef = ref;
    }

    public render() {
        const { viewRef } = this.state;
        const { render, renderOverlay } = this.props;

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
                            handleToggleBlur: this
                                .handleToggleBlur,
                        })}
                </View>
                {viewRef ? (
                    <Blur
                        blurRef={viewRef}
                        wrapperOpacity={
                            this.animatedWrapperOpacity
                        }
                        wrapperPosition={
                            this.animatedWrapperPosition
                        }
                    />
                ) : null}
                <Animated.View
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        opacity: this
                            .animatedWrapperOpacity,
                        transform: [
                            {
                                translateX: this
                                    .animatedWrapperPosition,
                            },
                        ],
                    }}
                >
                    {!renderOverlay
                        ? null
                        : renderOverlay({
                            handleToggleBlur: this
                                .handleToggleBlur,
                        })}
                </Animated.View>
            </View>
        );
    }

    private animate = (isVisible: boolean) => {
        const animateOpacity = Animated.timing(
            this.animatedWrapperOpacity,
            {
                duration: 300,
                toValue: isVisible ? 0 : 1,
            }
        );
        const animatePosition = Animated.timing(
            this.animatedWrapperPosition,
            {
                duration: 0,
                toValue: isVisible ? -1000 : 0,
            }
        );
        let sequence: Animated.CompositeAnimation;

        if (isVisible) {
            sequence = Animated.sequence([
                animateOpacity,
                animatePosition,
            ]);
        } else {
            sequence = Animated.sequence([
                animatePosition,
                animateOpacity,
            ]);
        }

        return () => sequence.start();
    }

    private handleToggleBlur = () => {
        this.setState(
            (state) => ({ isVisible: !state.isVisible }),
            this.animate(this.state.isVisible)
        );
    }

    private handleLayout = () => {
        this.setState({
            viewRef: findNodeHandle(this.viewRef),
        });
    }
}

export default BlurProvider;
