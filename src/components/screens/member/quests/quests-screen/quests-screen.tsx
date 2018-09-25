import React, { PureComponent } from "react";
import { PanResponder, SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { GetCurrentWorld_getCurrentWorld } from "../../../../../graphql/_core/schema";
import { Style } from "../../../../../styles";
import { IConnectedScreenProps } from "../../../../../typings";
import { AnimatedNavBar, COLOURS, IColours, TopBar } from "../../../../molecules";
import { handlePanResponderGrant, handlePanResponderMove, onStartShouldSetPanResponder } from "./quests-screen.helpers";
import styles from "./quests-screen.styles";
import { Episode, UnityLockerImage, UnityLockerLabel } from "./subcomponents";

export interface IChallenge extends GetCurrentWorld_getCurrentWorld {
    isDone?: boolean;
    isNext?: boolean;
    nextAvailable?: number;
    onPress?: () => void;
}

interface ISwipeCallback {
    prevIndex: number;
    currIndex: number;
}

interface IProps extends IConnectedScreenProps {
    data: IChallenge[];
}

const calculateIndices = (levelsCompleted: number) => {
    return Array.from({ length: 8 }).map((_, i) => {
        const episodeHeight = i * Style.DEVICE_HEIGHT;
        const lockHeight = Style.DEVICE_HEIGHT / 1.5;
        return !i ? (levelsCompleted < 50 ? lockHeight : episodeHeight) : episodeHeight;
    });
};

interface IState {
    activeIndex: number;
    colour: IColours;
    hasInitialized: boolean;
    isAnimatingUnity: boolean;
    isSwipeDisabled: boolean;
}

class QuestsScreen extends PureComponent<IProps, IState> {
    public scrollTimer: NodeJS.Timer;
    public unityLocker: UnityLockerImage;
    public animateInDelay: NodeJS.Timer;
    public animateOutDelay: NodeJS.Timer;
    public indices = calculateIndices(this.props.data.length);
    public activeIndex = this.indices.length - Math.ceil(this.props.data.length / 7);
    public state = {
        activeIndex: 7,
        colour: COLOURS.LIGHT,
        hasInitialized: false,
        isAnimatingUnity: false,
        isSwipeDisabled: false
    };
    public scrollView: ScrollView;
    public activeIndexOnPanResponderGrant: number;

    public panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: (_, gestureState) => gestureState.dx !== 0 && gestureState.dy !== 0,
        onPanResponderGrant: handlePanResponderGrant(this),
        onPanResponderMove: handlePanResponderMove(this),
        onStartShouldSetPanResponder
    });

    public componentWillUnmount() {
        if (this.animateOutDelay) {
            clearTimeout(this.animateOutDelay);
        }
        if (this.animateInDelay) {
            clearTimeout(this.animateInDelay);
        }
    }

    public componentDidMount() {
        this.scrollTimer = global.setTimeout(() => {
            this.scrollView.scrollTo({
                y: this.indices[this.state.activeIndex]
            });
        }, 500);
    }

    public render() {
        const { data, labels, onLeftMenuPress, totalCoins } = this.props;
        const isLockedLastLevel = this.props.data.length < 50;

        return (
            <SafeAreaView style={styles.wrapper}>
                <StatusBar translucent={true} />
                <View {...this.panResponder.panHandlers} style={styles.scrollViewWrapper}>
                    <ScrollView
                        scrollEnabled={false}
                        scrollsToTop={false}
                        showsVerticalScrollIndicator={false}
                        style={styles.platformAdjust}
                        ref={(ref) => (this.scrollView = ref)}
                    >
                        {!isLockedLastLevel ? null : <UnityLockerLabel />}
                        {this.indices.map((_, index) => {
                            const sliceFrom = (this.indices.length - index - 1) * 7;
                            const sliceTo = (this.indices.length - index) * 7;
                            const items = data.slice(sliceFrom, sliceTo);
                            return (
                                <Episode
                                    isLockedLastLevel={isLockedLastLevel}
                                    setUnityLockerRef={this.setUnityLockerRef}
                                    key={index}
                                    level={index}
                                    data={!index && isLockedLastLevel ? [] : items}
                                />
                            );
                        })}
                    </ScrollView>
                </View>
                <AnimatedNavBar activeIndex={1} colour={this.state.colour} labels={labels} hasNotification={false} />
                <TopBar onPressLeftIcon={onLeftMenuPress} coins={totalCoins} />
            </SafeAreaView>
        );
    }

    public setUnityLockerRef = (ref: UnityLockerImage) => {
        this.unityLocker = ref;
    }

    public swipeCallback = ({ prevIndex, currIndex }: ISwipeCallback) => {
        const isLockedLastLevel = this.props.data.length < 50;
        const toUnity = isLockedLastLevel && prevIndex === 1 && currIndex === 0;
        const fromUnity = isLockedLastLevel && prevIndex === 0 && currIndex === 1;
        if (toUnity) {
            this.setState(
                {
                    isSwipeDisabled: true
                },
                () => {
                    this.unityLocker.animateIn();
                    this.animateInDelay = global.setTimeout(() => {
                        this.setState({ isSwipeDisabled: false });
                        this.scrollView.scrollTo({
                            y: this.indices[this.state.activeIndex]
                        });
                    }, 150);
                }
            );
        } else if (fromUnity) {
            this.setState(
                {
                    isSwipeDisabled: true
                },
                () => {
                    this.setState({ isSwipeDisabled: true }, () => {
                        this.scrollView.scrollTo({
                            y: this.indices[this.state.activeIndex]
                        });
                    });
                    this.animateOutDelay = global.setTimeout(() => {
                        this.unityLocker.animateOut(() => {
                            this.setState({ isSwipeDisabled: false });
                        });
                    }, 200);
                }
            );
        } else {
            this.scrollView.scrollTo({
                y: this.indices[this.state.activeIndex]
            });
            const hasDarkNavBar = [6, 5, 4, 3, 1, 0];
            this.setState({
                colour: hasDarkNavBar.indexOf(this.state.activeIndex) !== -1 ? COLOURS.DARKER : COLOURS.LIGHT
            });
        }
    }

    public handleSwipe = (direction: "up" | "down"): null => {
        const { activeIndex } = this.state;
        const topEdge = activeIndex === 0 && direction === "down";
        const bottomEdge = activeIndex + 1 === this.indices.length && direction === "up";
        if (topEdge || bottomEdge) {
            return null;
        }
        const prevIndex = activeIndex;
        this.setState(
            (prevState) => ({
                activeIndex: prevState.activeIndex + (direction === "up" ? 1 : -1)
            }),
            () =>
                this.swipeCallback({
                    currIndex: this.state.activeIndex,
                    prevIndex
                })
        );
    }
}

export default QuestsScreen;
