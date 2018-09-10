import React, { PureComponent } from "react";
import {
    PanResponder,
    SafeAreaView,
    ScrollView,
    StatusBar,
    View
} from "react-native";
import { GetCurrentWorld_getCurrentWorld } from "../../../../../graphql/_core/schema";
import { Style } from "../../../../../styles";
import {
    handlePanResponderGrant,
    handlePanResponderMove
} from "./quests-screen.helpers";
import styles from "./quests-screen.styles";
import { Episode, UnityLockerImage, UnityLockerLabel } from "./subcomponents";

export type IChallenge = GetCurrentWorld_getCurrentWorld;

interface ISwipeCallback {
    prevIndex: number;
    currIndex: number;
}

interface IProps {
    data: IChallenge[];
}

const calculateIndices = (levelsCompleted: number) => {
    return Array.from({ length: 8 }).map((_, i) => {
        const episodeHeight = i * Style.DEVICE_HEIGHT;
        const lockHeight = Style.DEVICE_HEIGHT / 1.5;
        return !i
            ? levelsCompleted < 50 ? lockHeight : episodeHeight
            : episodeHeight;
    });
};

interface IState {
    hasInitialized: boolean;
    activeIndex: number;
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
        activeIndex: this.activeIndex,
        hasInitialized: false,
        isAnimatingUnity: false,
        isSwipeDisabled: false
    };
    public scrollView: ScrollView;
    public activeIndexOnPanResponderGrant: number;

    public panResponder = PanResponder.create({
        onPanResponderGrant: handlePanResponderGrant(this),
        onPanResponderMove: handlePanResponderMove(this),
        onStartShouldSetPanResponder: () => true
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
        this.scrollTimer = setTimeout(
            () => {
                this.scrollView.scrollTo({
                    y: this.indices[this.state.activeIndex]
                });
            },
            500);
    }

    public render() {
        const {
            data
        } = this.props;
        const isLockedLastLevel = this.props.data.length < 50;
        return (
            <SafeAreaView style={styles.wrapper}>
                <StatusBar translucent={true} />
                <View
                    {...this.panResponder.panHandlers}
                    style={styles.scrollViewWrapper}
                >
                    <ScrollView
                        scrollEnabled={false}
                        scrollsToTop={false}
                        showsVerticalScrollIndicator={false}
                        style={styles.platformAdjust}
                        ref={(ref) =>
                            (this.scrollView = ref)
                        }
                    >
                        {
                            !isLockedLastLevel
                                ? null
                                : <UnityLockerLabel />
                        }
                        {this.indices.map(
                            (_, index) => {
                                const sliceFrom = (this.indices.length - index - 1) * 7;
                                const sliceTo = (this.indices.length - index) * 7;
                                const items = data.slice(sliceFrom, sliceTo);
                                return <Episode
                                    isLockedLastLevel={isLockedLastLevel}
                                    setUnityLockerRef={this.setUnityLockerRef}
                                    key={index}
                                    level={index}
                                    data={
                                        !index && isLockedLastLevel
                                            ? []
                                            : items
                                    }
                                />;
                            })
                        }
                    </ScrollView>
                </View>
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
                    this.animateInDelay = setTimeout(
                        () => {
                            this.setState({ isSwipeDisabled: false });
                            this.scrollView.scrollTo({
                                y: this.indices[this.state.activeIndex]
                            });
                        },
                        150
                    );
                });
        } else if (fromUnity) {
            this.setState(
                {
                    isSwipeDisabled: true
                },
                () => {
                    this.setState(
                        { isSwipeDisabled: true },
                        () => {
                            this.scrollView.scrollTo({
                                y: this.indices[this.state.activeIndex]
                            });
                        }
                    );
                    this.animateOutDelay = setTimeout(
                        () => {
                            this.unityLocker.animateOut(() => {
                                this.setState({ isSwipeDisabled: false });
                            });
                        },
                        200
                    );
                });
        } else {
            this.scrollView.scrollTo({
                y: this.indices[this.state.activeIndex]
            });
            const hasDarkNavBar = [6, 5, 4, 3, 1, 0];
            if (
                hasDarkNavBar.indexOf(this.state.activeIndex) !== -1
            ) {
                // dispatch action to change colour
            }
        }
    }

    public handleSwipe = (
        direction: "up" | "down"
    ): null => {
        const { activeIndex } = this.state;
        const topEdge =
            activeIndex === 0 && direction === "down";
        const bottomEdge =
            activeIndex + 1 === this.indices.length &&
            direction === "up";
        if (topEdge || bottomEdge) {
            return null;
        }
        const prevIndex = activeIndex;
        this.setState(
            (prevState) => ({
                activeIndex:
                    prevState.activeIndex +
                    (direction === "up" ? 1 : -1)
            }),
            () => this.swipeCallback({
                currIndex: this.state.activeIndex,
                prevIndex
            })
        );
    }
}

export default QuestsScreen;
