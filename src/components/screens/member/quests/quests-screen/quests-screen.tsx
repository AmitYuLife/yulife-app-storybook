import React, { PureComponent } from "react";
import {
    PanResponder,
    SafeAreaView,
    ScrollView,
    StatusBar,
    View
} from "react-native";
import { Style } from "../../../../../styles";
import {
    handlePanResponderGrant,
    handlePanResponderMove
} from "./quests-screen.helpers";
import styles from "./quests-screen.styles";
import { Episode, UnityLockerImage, UnityLockerLabel } from "./subcomponents";

export interface IChallenge {
    id?: string;
    rating?: number;
    isNext?: boolean;
    nextAvailable?: number;
}

interface ISwipeCallback {
    prevIndex: number;
    currIndex: number;
}

interface IProps {
    data: IChallenge[];
    nextAvailable: number;
}

const indices = Array.from({ length: 8 }).map((_, i) => (
    !i
        ? Style.DEVICE_HEIGHT / 1.5
        : i * Style.DEVICE_HEIGHT
));

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

    public state = {
        activeIndex: indices.length - 1,
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
                    y: indices[indices.length - 1]
                });
            },
            500);
    }

    public render() {
        const {
            data,
            nextAvailable
        } = this.props;
        return (
            <SafeAreaView style={styles.wrapper}>
                <StatusBar translucent={true} />
                <View style={styles.scrollViewWrapper}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={styles.platformAdjust}
                        ref={(ref) =>
                            (this.scrollView = ref)
                        }
                        pagingEnabled={true}
                    >
                        <UnityLockerLabel />
                        {indices.map(
                            (_, index) => {
                                const sliceFrom = (indices.length - index - 1) * 7;
                                const sliceTo = (indices.length - index) * 7;
                                const isNextLevel = index + 1 === indices.length;
                                const items = data.slice(sliceFrom, sliceTo).concat(
                                    isNextLevel
                                        ? [{ isNext: true, nextAvailable }]
                                        : []
                                );
                                return <Episode
                                    setUnityLockerRef={this.setUnityLockerRef}
                                    key={index}
                                    level={index}
                                    data={
                                        !index
                                            ? []
                                            : items
                                    }
                                />;
                            })
                        }
                    </ScrollView>
                </View>
                <View
                    {...this.panResponder.panHandlers}
                    style={styles.panResponder}
                />
            </SafeAreaView>
        );
    }

    public setUnityLockerRef = (ref: UnityLockerImage) => {
        this.unityLocker = ref;
    }

    public swipeCallback = ({ prevIndex, currIndex }: ISwipeCallback) => {
        const isLockedLastLevel = true; // TODO: condition
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
                                y: indices[this.state.activeIndex]
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
                                y: indices[this.state.activeIndex]
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
                y: indices[this.state.activeIndex]
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
            activeIndex + 1 === indices.length &&
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
