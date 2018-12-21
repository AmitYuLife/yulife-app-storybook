import React, { PureComponent } from "react";
import { PanResponder, Platform, SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { Navigation } from "react-native-navigation";
import { GetCurrentWorld_getCurrentWorld } from "../../../../../graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import { AnimatedNavBar, COLOURS, IColours, TopBar } from "../../../../molecules";
import {
    calculateIndexOfLevel,
    calculateIndices,
    calculateSlicing,
    checkIfIsLastWorld,
    checkIfIsLockedLastLevel,
    handlePanResponderGrant,
    handlePanResponderMove,
    onStartShouldSetPanResponder,
    questScreenUI
} from "./quests-screen.helpers";
import styles from "./quests-screen.styles";
import { Episode, UnityLockerImage, UnityLockerLabel } from "./subcomponents";
export interface IChallenge extends GetCurrentWorld_getCurrentWorld {
    isDone?: boolean;
    isNext?: boolean;
    nextAvailableAt?: string;
    onPress?: () => void;
}
interface IProps extends IConnectedScreenProps {
    currentLevel: number;
    data: IChallenge[];
}
interface IState {
    UI: {
        isTopBarLight: boolean;
        navBarColour: IColours;
    };
    activeIndex: number;
    activeWorldIndex: number;
    hasInitialized: boolean;
    isAnimatingUnity: boolean;
    isSwipeDisabled: boolean;
}

class QuestsScreen extends PureComponent<IProps, IState> {
    public unityLocker: UnityLockerImage;
    public animateInDelay: NodeJS.Timer;
    public animateOutDelay: NodeJS.Timer;
    public indices = calculateIndices(this.props.currentLevel, true);
    public state = {
        UI: {
            isTopBarLight: false,
            navBarColour: COLOURS.LIGHT
        },
        activeIndex: 7,
        activeWorldIndex: 0,
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

    public constructor(props: IProps) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    public componentDidMount() {
        this.scrollToCurrentLevel();
    }

    public componentDidAppear() {
        this.scrollToCurrentLevel();
    }

    public componentDidDissappear() {
        if (this.animateOutDelay) {
            clearTimeout(this.animateOutDelay);
        }
        if (this.animateInDelay) {
            clearTimeout(this.animateInDelay);
        }
    }

    public render() {
        const { activeIndex, activeWorldIndex, UI } = this.state;
        const { currentLevel, data, labels, onLeftMenuPress, totalCoins } = this.props;
        const isLastWorld = checkIfIsLastWorld(activeWorldIndex, currentLevel);
        const isLockedLastLevel = isLastWorld && checkIfIsLockedLastLevel(currentLevel);

        return (
            <SafeAreaView style={styles.wrapper}>
                {Platform.OS === "ios" && <StatusBar translucent={true} />}
                <View {...this.panResponder.panHandlers} style={styles.scrollViewWrapper}>
                    <ScrollView
                        scrollEnabled={false}
                        scrollsToTop={false}
                        showsVerticalScrollIndicator={false}
                        style={styles.platformAdjust}
                        ref={(ref) => (this.scrollView = ref)}
                    >
                        {!isLockedLastLevel ? null : <UnityLockerLabel currentLevel={currentLevel} />}
                        {this.indices.map((_, index) => {
                            const { sliceFrom, sliceTo } = calculateSlicing(activeWorldIndex, index);
                            const items = data.slice(sliceFrom, sliceTo);
                            return (
                                <Episode
                                    currentLevel={currentLevel}
                                    isLoading={![activeIndex - 1, activeIndex, activeIndex + 1].includes(index)}
                                    isLockedLastLevel={isLockedLastLevel}
                                    setUnityLockerRef={index !== 1 ? null : this.setUnityLockerRef}
                                    key={index}
                                    episodeNumber={index}
                                    data={items}
                                    firstLevelNumber={sliceFrom}
                                    worldNumber={activeWorldIndex}
                                    onScrollToCurrentLevel={this.scrollToCurrentLevel}
                                    hasActivePulse={activeIndex === index}
                                />
                            );
                        })}
                    </ScrollView>
                </View>
                {!activeIndex ? null : (
                    <>
                        <AnimatedNavBar
                            activeIndex={1}
                            colour={UI.navBarColour}
                            labels={labels}
                            hasNotification={false}
                        />
                        <TopBar isLight={UI.isTopBarLight} onPressLeftIcon={onLeftMenuPress} coins={totalCoins} />
                    </>
                )}
            </SafeAreaView>
        );
    }

    public scrollToCurrentLevel = () => {
        const { currentLevel } = this.props;
        const activeWorldIndex = Math.floor((currentLevel - 1) / 50);
        const activeIndex = calculateIndexOfLevel(currentLevel);

        this.indices = calculateIndices(currentLevel, true);
        this.setState(
            {
                UI: questScreenUI[activeWorldIndex][activeIndex],
                activeIndex,
                activeWorldIndex
            },
            () => {
                global.setTimeout(() => {
                    if (this.scrollView) {
                        this.scrollView.scrollTo({
                            y: this.indices[activeIndex]
                        });
                    }
                }, 250);
            }
        );
    }

    public setUnityLockerRef = (ref: UnityLockerImage) => {
        this.unityLocker = ref;
    }

    public handleSwipe = (direction: "up" | "down"): null => {
        const { activeIndex, activeWorldIndex } = this.state;
        const { currentLevel } = this.props;
        const lastIndice = this.indices.length - 1;
        const isCurrentWorldTopEdge = activeIndex === 0 && direction === "down";
        const isCurrentWorldBottomEdge = activeIndex === lastIndice && direction === "up";
        const isLastWorld = checkIfIsLastWorld(activeWorldIndex, currentLevel);
        const isFirstWorld = activeWorldIndex === 0;

        if ((isLastWorld && isCurrentWorldTopEdge) || (isFirstWorld && isCurrentWorldBottomEdge)) {
            return null;
        }

        if (isCurrentWorldTopEdge || isCurrentWorldBottomEdge) {
            const nextActiveWorldIndex = activeWorldIndex + (direction === "up" ? -1 : 1);
            const nextActiveIndex = direction === "up" ? 0 : lastIndice;
            this.indices = calculateIndices(currentLevel, checkIfIsLastWorld(nextActiveWorldIndex, currentLevel));
            this.setState(
                {
                    UI: questScreenUI[nextActiveWorldIndex][nextActiveIndex],
                    activeIndex: nextActiveIndex,
                    activeWorldIndex: nextActiveWorldIndex
                },
                () => {
                    if (this.scrollView) {
                        this.scrollView.scrollTo({
                            animated: false,
                            y: this.indices[this.state.activeIndex]
                        });
                    }
                }
            );
            return null;
        }

        const isLockedLastLevel = isLastWorld && checkIfIsLockedLastLevel(currentLevel);
        const prevIndex = activeIndex;
        const nextIndex = activeIndex + (direction === "up" ? 1 : -1);
        const toUnity = isLockedLastLevel && prevIndex === 1 && nextIndex === 0;
        const fromUnity = isLockedLastLevel && prevIndex === 0 && nextIndex === 1;
        this.setState(
            {
                activeIndex: nextIndex,
                isSwipeDisabled: toUnity || fromUnity
            },
            () => {
                if (toUnity) {
                    this.unityLocker.animateIn();
                    this.animateInDelay = global.setTimeout(() => {
                        this.setState({ isSwipeDisabled: false });
                        if (this.scrollView) {
                            this.scrollView.scrollTo({
                                y: this.indices[this.state.activeIndex]
                            });
                        }
                    }, 150);
                } else if (fromUnity) {
                    this.setState({ isSwipeDisabled: true }, () => {
                        if (this.scrollView) {
                            this.scrollView.scrollTo({
                                y: this.indices[this.state.activeIndex]
                            });
                        }
                    });
                    this.animateOutDelay = global.setTimeout(() => {
                        this.unityLocker.animateOut(() => {
                            this.setState({ isSwipeDisabled: false });
                        });
                    }, 200);
                } else {
                    if (this.scrollView) {
                        this.scrollView.scrollTo({
                            y: this.indices[this.state.activeIndex]
                        });
                    }
                    this.setState({
                        UI: questScreenUI[this.state.activeWorldIndex][this.state.activeIndex]
                    });
                }
            }
        );
        return null;
    }
}
export default QuestsScreen;
