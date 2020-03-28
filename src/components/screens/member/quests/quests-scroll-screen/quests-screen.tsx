// import { Style } from "@styles/index";
import { QUESTS_SCREEN } from "@ids";
import { TopBarTypes } from "@molecules/top-bar/top-bar";
import { getCurrentEpisode, getCurrentWorld } from "@services/utils";
import * as React from "react";
import { FlatList, SafeAreaView, View, ViewabilityConfigCallbackPair } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Navigation } from "react-native-navigation";
import { GetCurrentWorld_getCurrentWorld } from "../../../../../graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import { NavBar, TopBar } from "../../../../molecules";
import { IMapSlice, loadingSlices, mapSlices } from "./assets";
import offsets from "./assets/offsets";
import styles from "./quests-screen.styles";
import ScrollyQuest from "./scrolly-quest";
import getUnity from "./unity-movies/unity";

export interface IChallenge extends GetCurrentWorld_getCurrentWorld {
    isActive?: boolean;
    isDone?: boolean;
    isNext?: boolean;
    isChestLevel?: boolean;
    nextAvailableAt?: string;
    onPress?: () => void;
}

interface IProps extends IConnectedScreenProps {
    currentLevel: number;
    activeLevel: number;
    data: IChallenge[];
    hideUnity?: () => void | null;
    unity: number;
}

type CurrentWorld = 0 | 1 | 2 | 3;

interface IState {
    UI: {
        topBarType: TopBarTypes;
    };
}

class QuestsScreen extends React.Component<IProps, IState> {
    public state: IState = {
        UI: getInitialState(this.props.currentLevel)
    };
    public flatList: FlatList<IMapSlice>;

    public constructor(props: IProps) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    public componentDidMount() {
        this.scrollToActiveLevel();
    }

    public componentDidAppear() {
        this.scrollToActiveLevel();
    }

    public componentDidUpdate(prevProps: IProps) {
        if (prevProps.unity && !this.props.unity) {
            this.scrollToActiveLevel();
        }
    }

    public shouldComponentUpdate(nextProps: IProps, nextState: IState) {
        return (
            this.props.activeLevel !== nextProps.activeLevel ||
            this.props.currentLevel !== nextProps.currentLevel ||
            this.props.unity !== nextProps.unity ||
            this.props.totalCoins !== nextProps.totalCoins ||
            this.state.UI.topBarType !== nextState.UI.topBarType
        );
    }

    public render() {
        const { UI } = this.state;
        const { activeLevel, currentLevel, data, onLeftMenuPress, unity, totalCoins } = this.props;

        if (unity) {
            const currentWorld = getCurrentWorld(unity);
            const Unity = getUnity(currentWorld);
            return (
                <View style={styles.wrapper}>
                    <Unity data={data[50 + currentWorld * 50]} onSkip={this.handleSkipUnity} />
                </View>
            );
        }

        const { initialScrollIndex, slices, snapOffsets } = this.getWorldData();

        return (
            <SafeAreaView style={styles.wrapper} testID={QUESTS_SCREEN(getCurrentWorld(currentLevel))}>
                <ScrollyQuest
                    currentLevel={currentLevel}
                    activeLevel={activeLevel}
                    initialScrollIndex={initialScrollIndex}
                    data={slices}
                    levels={data}
                    offsets={snapOffsets}
                    onViewableItemsChanged={this.handleViewableItemsChanged}
                    setFlatListRef={this.setFlatListRef}
                />
                <TopBar type={UI.topBarType} onPressLeftIcon={onLeftMenuPress} coins={totalCoins} />
                <NavBar activeIndex={1} hasNotification={false} />
            </SafeAreaView>
        );
    }

    private setFlatListRef = (ref: any) => {
        this.flatList = ref;
    };

    private scrollToActiveLevel = () => {
        const { activeLevel } = this.props;
        const result = mapSlices.find((slice) => slice.slots.some((item) => item.index === activeLevel - 1));

        if (result && result.episodeSettings) {
            const { topBarType } = result.episodeSettings;

            global.setTimeout(() => {
                if (this.flatList) {
                    this.setState({ UI: { topBarType } }, () => {
                        const currentWorld = getCurrentWorld(this.props.activeLevel);
                        const currentEpisode = getCurrentEpisode(this.props.activeLevel);
                        this.flatList.scrollToOffset({
                            offset:
                                offsets[activeLevel % 50 === 0 ? "withUnity" : "withoutUnity"][
                                    currentWorld as CurrentWorld
                                ][currentEpisode]
                        });
                    });
                }
            }, 600);
        }
    };

    private handleSkipUnity = () => {
        this.props.hideUnity();
    };

    private handleViewableItemsChanged: ViewabilityConfigCallbackPair["onViewableItemsChanged"] = ({
        viewableItems
    }) => {
        const first = viewableItems[0];
        const last = viewableItems[viewableItems.length - 1];

        if (first && last) {
            this.setState({ UI: { topBarType: last.item.topBarType } });
        }
    };

    private getWorldData = () => {
        const { currentLevel } = this.props;
        const iphoneX = isIphoneX();

        switch (getCurrentWorld(currentLevel)) {
            case 3:
                return {
                    initialScrollIndex: iphoneX ? 93 : 92,
                    slices:
                        currentLevel < 200
                            ? [...mapSlices.slice(0, iphoneX ? 122 : 121), loadingSlices.mountain]
                            : mapSlices.slice(0, iphoneX ? 136 : 134),
                    snapOffsets: offsets.withUnity[3]
                };
            case 2:
                return {
                    initialScrollIndex: iphoneX ? 62 : 61,
                    slices:
                        currentLevel < 150
                            ? [...mapSlices.slice(0, iphoneX ? 90 : 89), loadingSlices.desert]
                            : mapSlices.slice(0, iphoneX ? 94 : 92),
                    snapOffsets: currentLevel < 150 ? offsets.withUnity[2] : offsets.withoutUnity[2]
                };
            case 1:
                return {
                    initialScrollIndex: iphoneX ? 31 : 30,
                    slices:
                        currentLevel < 100
                            ? [...mapSlices.slice(0, iphoneX ? 58 : 57), loadingSlices.ocean]
                            : mapSlices.slice(0, iphoneX ? 63 : 61),
                    snapOffsets: currentLevel < 100 ? offsets.withUnity[1] : offsets.withoutUnity[1]
                };
            case 0:
            default:
                return {
                    initialScrollIndex: 0,
                    slices:
                        currentLevel < 50
                            ? [...mapSlices.slice(0, iphoneX ? 27 : 26), loadingSlices.forest]
                            : mapSlices.slice(0, iphoneX ? 32 : 30),
                    snapOffsets: currentLevel < 50 ? offsets.withUnity[0] : offsets.withoutUnity[0]
                };
        }
    };
}

export default QuestsScreen;

function getInitialState(currentLevel: number) {
    switch (getCurrentWorld(currentLevel)) {
        case 3:
            return {
                topBarType: "white" as TopBarTypes
            };
        case 2:
            return {
                topBarType: "desert" as TopBarTypes
            };
        case 1:
            return {
                topBarType: "white" as TopBarTypes
            };
        case 0:
        default:
            return {
                topBarType: "forest" as TopBarTypes
            };
    }
}
