import { Style } from "@styles/index";
import * as React from "react";
import { PureComponent } from "react";
import { FlatList, SafeAreaView, View, ViewabilityConfigCallbackPair } from "react-native";
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
}

interface IState {
    UI: {
        isTopBarLight: boolean;
        navBarColour: IColours;
    };
}

class QuestsScreen extends PureComponent<IProps, IState> {
    public state = {
        UI: {
            isTopBarLight: false,
            navBarColour: COLOURS.LIGHT
        }
    };
    public flatList: FlatList<IMapSlice>;

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
        const { currentLevel, data, labels, onLeftMenuPress, hideUnity, totalCoins } = this.props;

        if (hideUnity) {
            const currentWorld = Math.floor((currentLevel - 1) / 50);
            const Unity = getUnity(currentWorld);

            return (
                <View style={styles.wrapper}>
                    <Unity data={data[50 + currentWorld * 50]} onSkip={hideUnity} />
                </View>
            );
        }

        return (
            <SafeAreaView style={styles.wrapper}>
                <ScrollyQuest
                    currentLevel={currentLevel}
                    data={this.getSlices()}
                    levels={data}
                    onViewableItemsChanged={this.handleViewableItemsChanged}
                    setFlatListRef={this.setFlatListRef}
                />
                <TopBar isLight={UI.isTopBarLight} onPressLeftIcon={onLeftMenuPress} coins={totalCoins} />
                <View style={styles.navBarWrapper}>
                    <NavBar
                        activeIndex={1}
                        areIconsHidden={false}
                        colour={NavBar.Colours.DARK}
                        hasNotification={false}
                        labels={labels}
                    />
                </View>
            </SafeAreaView>
        );
    }

    private setFlatListRef = (ref: any) => {
        this.flatList = ref;
    }

    private scrollToCurrentLevel = () => {
        const { currentLevel } = this.props;
        const { offset } = mapSlices.reduce(
            (acc, curr) => {
                if (acc.level < currentLevel) {
                    return { offset: curr.height + acc.offset, level: curr.slots.length + acc.level };
                }
                return acc;
            },
            { level: 1, offset: 0 }
        );

        global.setTimeout(
            () => this.flatList.scrollToOffset({ animated: true, offset: offset - Style.DEVICE_HEIGHT / 2 }),
            1000
        );
    }

    private handleViewableItemsChanged: ViewabilityConfigCallbackPair["onViewableItemsChanged"] = ({
        viewableItems
    }) => {
        const first = viewableItems[0];
        const last = viewableItems[viewableItems.length - 1];

        if (first && last) {
            this.setState({ UI: { isTopBarLight: last.item.isTopBarLight, navBarColour: first.item.navBarColour } });
        }
    }

    private getSlices = () => {
        const { currentLevel } = this.props;
        const currentWorld = Math.floor((currentLevel - 1) / 50);

        switch (currentWorld) {
            case 1:
                return mapSlices.slice(0, 70);
            case 0:
            default:
                return mapSlices.slice(0, 36);
        }
    }
}
export default QuestsScreen;
