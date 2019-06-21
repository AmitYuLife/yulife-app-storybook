// import { Style } from "@styles/index";
import { QUESTS_SCREEN } from "@ids";
import { TopBarTypes } from "@molecules/top-bar/top-bar";
import { getCurrentWorld } from "@services/utils";
import * as React from "react";
import { PureComponent } from "react";
import { FlatList, SafeAreaView, View, ViewabilityConfigCallbackPair } from "react-native";
import { Navigation } from "react-native-navigation";
import { GetCurrentWorld_getCurrentWorld } from "../../../../../graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import { COLOURS, IColours, NavBar, TopBar } from "../../../../molecules";
import { IMapSlice, loadingSlices, mapSlices } from "./assets";
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

interface IState {
    UI: {
        navBarColour: IColours;
        topBarType: TopBarTypes;
    };
}

class QuestsScreen extends PureComponent<IProps, IState> {
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
        if (prevProps.hideUnity && !this.props.hideUnity) {
            this.scrollToActiveLevel();
        }
    }

    public render() {
        const { UI } = this.state;
        const { currentLevel, data, labels, onLeftMenuPress, unity, totalCoins } = this.props;

        if (unity) {
            const currentWorld = getCurrentWorld(unity);
            const Unity = getUnity(currentWorld);
            return (
                <View style={styles.wrapper}>
                    <Unity data={data[50 + currentWorld * 50]} onSkip={this.handleSkipUnity} />
                </View>
            );
        }

        const { initialScrollIndex, slices } = this.getWorldData();

        return (
            <SafeAreaView style={styles.wrapper} testID={QUESTS_SCREEN(getCurrentWorld(currentLevel))} >
                <ScrollyQuest
                    currentLevel={currentLevel}
                    initialScrollIndex={initialScrollIndex}
                    data={slices}
                    levels={data}
                    onViewableItemsChanged={this.handleViewableItemsChanged}
                    setFlatListRef={this.setFlatListRef}
                />
                <TopBar type={UI.topBarType} onPressLeftIcon={onLeftMenuPress} coins={totalCoins} />
                <View style={styles.navBarWrapper}>
                    <NavBar activeIndex={1} colour={UI.navBarColour} hasNotification={false} labels={labels} />
                </View>
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
            const { navBarType, offset, topBarType } = result.episodeSettings;

            global.setTimeout(() => {
                if (this.flatList) {
                    this.setState({ UI: { topBarType, navBarColour: navBarType } }, () =>
                        this.flatList.scrollToOffset({
                            animated: true,
                            offset
                        })
                    );
                }
            }, 1200);
        }
    };

    private handleSkipUnity = () => {
        this.props.hideUnity();
        this.scrollToActiveLevel();
    };

    private handleViewableItemsChanged: ViewabilityConfigCallbackPair["onViewableItemsChanged"] = ({
        viewableItems
    }) => {
        const first = viewableItems[0];
        const last = viewableItems[viewableItems.length - 1];

        if (first && last) {
            this.setState({ UI: { topBarType: last.item.topBarType, navBarColour: first.item.navBarColour } });
        }
    };

    private getWorldData = () => {
        const { currentLevel } = this.props;

        switch (getCurrentWorld(currentLevel)) {
            case 3:
                return {
                    initialScrollIndex: 92,
                    slices:
                        currentLevel < 200
                            ? [...mapSlices.slice(0, 121), loadingSlices.mountain]
                            : mapSlices.slice(0, 134)
                };
            case 2:
                return {
                    initialScrollIndex: 61,
                    slices:
                        currentLevel < 150 ? [...mapSlices.slice(0, 89), loadingSlices.desert] : mapSlices.slice(0, 92)
                };
            case 1:
                return {
                    initialScrollIndex: 30,
                    slices:
                        currentLevel < 100 ? [...mapSlices.slice(0, 57), loadingSlices.ocean] : mapSlices.slice(0, 61)
                };
            case 0:
            default:
                return {
                    initialScrollIndex: 0,
                    slices:
                        currentLevel < 50 ? [...mapSlices.slice(0, 26), loadingSlices.forest] : mapSlices.slice(0, 30)
                };
        }
    };
}

export default QuestsScreen;

function getInitialState(currentLevel: number) {
    switch (getCurrentWorld(currentLevel)) {
        case 3:
            return {
                navBarColour: COLOURS.LIGHT,
                topBarType: "white" as TopBarTypes
            };
        case 2:
            return {
                navBarColour: COLOURS.DESERT,
                topBarType: "desert" as TopBarTypes
            };
        case 1:
            return {
                navBarColour: COLOURS.LIGHT,
                topBarType: "white" as TopBarTypes
            };
        case 0:
        default:
            return {
                navBarColour: COLOURS.FOREST,
                topBarType: "forest" as TopBarTypes
            };
    }
}
