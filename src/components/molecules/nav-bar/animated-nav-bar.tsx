import React, { Component } from "react";
import { Animated, View } from "react-native";
import styles from "./animated-nav-bar.styles";
import NavBar, { IColours, ILabel } from "./nav-bar";

interface IProps {
    labels?: ILabel[];
    colour?: IColours;
    hasNotification: boolean;
    activeIndex: number;
}

interface IState {
    transitionFromOpacity: Animated.Value;
    transitionFromColour: IColours;
    transitionToOpacity: Animated.Value;
    transitionToColour: IColours;
}

class AnimatedNavBar extends Component<IProps, IState> {
    public static defaultProps = {
        colour: NavBar.Colours.LIGHT
    };

    public static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
        if (!prevState.transitionToColour) {
            return {
                transitionFromColour: prevState.transitionToColour,
                transitionToColour: nextProps.colour
            } as Partial<IState>;
        }
        const transitionFromReset = Animated.timing(prevState.transitionFromOpacity, {
            duration: 0,
            toValue: 1
        });
        const transitionToReset = Animated.timing(prevState.transitionToOpacity, {
            duration: 0,
            toValue: 0
        });
        const transitionFromAnimate = Animated.timing(prevState.transitionFromOpacity, {
            toValue: 0
        });
        const transitionToAnimate = Animated.timing(prevState.transitionToOpacity, {
            toValue: 1
        });
        const reset = Animated.parallel([transitionFromReset, transitionToReset]);
        const animate = Animated.parallel([transitionFromAnimate, transitionToAnimate]);
        Animated.sequence([reset, animate]).start();
        return {
            transitionFromColour: prevState.transitionToColour,
            transitionToColour: nextProps.colour
        } as Partial<IState>;
    }

    public state = {
        transitionFromColour: null,
        transitionFromOpacity: new Animated.Value(0),
        transitionToColour: null,
        transitionToOpacity: new Animated.Value(1)
    } as IState;

    public render() {
        const { hasNotification, activeIndex, labels } = this.props;
        const { transitionFromOpacity, transitionFromColour, transitionToOpacity, transitionToColour } = this.state;
        return (
            <View style={styles.wrapper}>
                <Animated.View style={[styles.navBarWrapper, { opacity: transitionFromOpacity }]}>
                    <NavBar colour={transitionFromColour} activeIndex={activeIndex} hasNotification={hasNotification} />
                </Animated.View>
                <Animated.View style={[styles.navBarWrapper, { opacity: transitionToOpacity }]}>
                    <NavBar
                        labels={labels}
                        colour={transitionToColour}
                        activeIndex={activeIndex}
                        hasNotification={hasNotification}
                    />
                </Animated.View>
            </View>
        );
    }
}

export default AnimatedNavBar;
