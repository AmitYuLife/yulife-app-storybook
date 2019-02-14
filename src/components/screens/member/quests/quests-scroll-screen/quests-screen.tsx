// import { Style } from "@styles/index";
import { TopBarTypes } from "@molecules/top-bar/top-bar";
import { getCurrentWorld } from "@services/utils";
import * as React from "react";
import { PureComponent } from "react";
import { FlatList, SafeAreaView, View, ViewabilityConfigCallbackPair } from "react-native";
import { Navigation } from "react-native-navigation";
import { GetCurrentWorld_getCurrentWorld } from "../../../../../graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import { COLOURS, IColours, NavBar, TopBar } from "../../../../molecules";
import { IMapSlice, mapSlices } from "./assets";
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
    public state = {
        UI: getInitialState(this.props.currentLevel)
    };
    public flatList: FlatList<IMapSlice>;

    public constructor(props: IProps) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    public componentDidAppear() {
        this.scrollToCurrentLevel();
    }

    public componentDidMount() {
        this.scrollToCurrentLevel();
    }

    public componentDidUpdate(prevProps: IProps) {
        if (prevProps.hideUnity && !this.props.hideUnity) {
            this.scrollToCurrentLevel();
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
            <SafeAreaView style={styles.wrapper}>
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
                    <NavBar
                        activeIndex={1}
                        areIconsHidden={false}
                        colour={UI.navBarColour}
                        hasNotification={false}
                        labels={labels}
                    />
                </View>
            </SafeAreaView>
        );
    }

    private setFlatListRef = (ref: any) => {
        this.flatList = ref;
    };

    private scrollToCurrentLevel = () => {
        const { currentLevel } = this.props;
        const result = mapSlices.find((slice) => slice.slots.some((item) => item.index === currentLevel - 1));

        if (result && result.offset) {
            global.setTimeout(() => {
                if (this.flatList) {
                    this.flatList.scrollToOffset({
                        animated: true,
                        offset: result.offset
                    });
                }
            }, 1200);
        }
    };

    private handleSkipUnity = () => {
        this.props.hideUnity();
        this.scrollToCurrentLevel();
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
        switch (getCurrentWorld(this.props.currentLevel)) {
            case 2:
                return { initialScrollIndex: 58, slices: mapSlices.slice(0, 87) };
            case 1:
                return { initialScrollIndex: 29, slices: mapSlices.slice(0, 58) };
            case 0:
            default:
                return { initialScrollIndex: 0, slices: mapSlices.slice(0, 29) };
        }
    };
}

export default QuestsScreen;

function getInitialState(currentLevel: number) {
    switch (getCurrentWorld(currentLevel)) {
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
                navBarColour: COLOURS.LIGHT,
                topBarType: "default" as TopBarTypes
            };
    }
}
