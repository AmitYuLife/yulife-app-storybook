import React, { memo, PureComponent } from "react";
import { QUESTS_SCREEN } from "@ids";
import { getCurrentEpisode, getCurrentWorld, getNormalizedLevel } from "@services/utils";
import { FlatList, SafeAreaView, View, ViewabilityConfigCallbackPair } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Navigation } from "react-native-navigation";
import { GetQuestMapLevelList_getQuestMapLevelList } from "@graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import { IMapSlice, loadingSlices, mapSlices } from "./assets";
import offsets from "./assets/offsets";
import styles from "./quests-screen.styles";
import ScrollyQuest from "./subcomponents/scrolly-quest";
import Unity from "./unity-movies/unity";
import { NavBar } from "@components/organisms";
import QuestsLoadingOverlay from "./subcomponents/quests.loading";
import { TopBarTypes } from "@components/organisms/top-bar/top-bar.helpers";
import { TopBar } from "@components/organisms";

export interface IChallenge extends GetQuestMapLevelList_getQuestMapLevelList {
  isActive?: boolean;
  isDone?: boolean;
  isNext?: boolean;
  isChestLevel?: boolean;
  nextAvailableAt?: string;
  onPress?: () => void;
}

interface IProps extends IConnectedScreenProps {
  componentId: string;
  currentLevel: number;
  activeLevel: number;
  data: IChallenge[];
  hideUnity?: () => void | null;
  unity: number;
  loading: boolean;
}

type CurrentWorld = 0 | 1 | 2 | 3;

interface IState {
  UI: {
    topBarType: TopBarTypes;
  };
}

class QuestsScreen extends PureComponent<IProps, IState> {
  public state: IState = {
    UI: getInitialState(this.props.currentLevel),
  };
  public flatList: FlatList<IMapSlice>;
  public timer: NodeJS.Timeout = null;

  public constructor(props: IProps) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  public componentDidAppear() {
    if (!this.props.loading) {
      this.scrollToActiveLevel();
    }
  }

  public componentDidUpdate(prevProps: IProps) {
    const hasFinishedLoading = prevProps.loading && !this.props.loading;
    const hasLeftUnity = prevProps.unity && !this.props.unity;
    const hasChangedLevel = prevProps.activeLevel !== this.props.activeLevel;

    if (hasFinishedLoading || hasLeftUnity || hasChangedLevel) {
      this.scrollToActiveLevel();
    }
  }

  public componentWillUnmount() {
    clearTimeout(this.timer);
  }

  public render() {
    const { handleSkipUnity, props, state } = this;
    const { UI } = state;
    const { activeLevel, currentLevel, data, onLeftMenuPress, unity, loading } = props;

    if (unity) {
      return (
        <View style={styles.wrapper}>
          <Unity level={unity} onSkip={handleSkipUnity} />
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
        <View style={styles.topBarWrapper}>
          <TopBar type={UI.topBarType} onPressLeftIcon={onLeftMenuPress} />
        </View>
        <NavBar activeIndex={1} />
        <QuestsLoadingOverlay loading={loading} />
      </SafeAreaView>
    );
  }

  private setFlatListRef = (ref: any) => {
    this.flatList = ref;
  };

  private scrollToActiveLevel = () => {
    const { activeLevel } = this.props;
    const currentWorld = getCurrentWorld(activeLevel);
    const normalizedLevel = getNormalizedLevel(activeLevel);
    const result = mapSlices.find((slice) => slice.slots.some((item) => item.index === normalizedLevel - 1));

    if (result && result.episodeSettings) {
      const { topBarType } = result.episodeSettings;

      this.timer = global.setTimeout(() => {
        if (this.flatList) {
          this.setState({ UI: { topBarType } }, () => {
            const currentEpisode = getCurrentEpisode(normalizedLevel);
            this.flatList.scrollToOffset({
              offset:
                offsets[activeLevel % 50 === 0 ? "withUnity" : "withoutUnity"][currentWorld as CurrentWorld][
                  currentEpisode
                ],
            });
          });
        }
      }, 600);
    }
  };

  private handleSkipUnity = () => {
    this.props.hideUnity();
  };

  private handleViewableItemsChanged: ViewabilityConfigCallbackPair["onViewableItemsChanged"] = ({ viewableItems }) => {
    const first = viewableItems[0];
    const last = viewableItems[viewableItems.length - 1];

    if (first && last) {
      this.setState({ UI: { topBarType: last.item.topBarType } });
    }
  };

  private getWorldData = () => {
    const { currentLevel } = this.props;
    const iphoneX = isIphoneX();
    const currentWorld = getCurrentWorld(currentLevel);
    const normalizedLevel = getNormalizedLevel(currentLevel);

    switch (currentWorld) {
      case 3:
        return {
          initialScrollIndex: iphoneX ? 93 : 92,
          slices:
            normalizedLevel < 200
              ? [...mapSlices.slice(0, iphoneX ? 122 : 121), loadingSlices.mountain]
              : mapSlices.slice(0, iphoneX ? 136 : 134),
          snapOffsets: offsets.withUnity[3],
        };
      case 2:
        return {
          initialScrollIndex: iphoneX ? 62 : 61,
          slices:
            normalizedLevel < 150
              ? [...mapSlices.slice(0, iphoneX ? 90 : 89), loadingSlices.desert]
              : mapSlices.slice(0, iphoneX ? 94 : 92),
          snapOffsets: normalizedLevel < 150 ? offsets.withUnity[2] : offsets.withoutUnity[2],
        };
      case 1:
        return {
          initialScrollIndex: iphoneX ? 31 : 30,
          slices:
            normalizedLevel < 100
              ? [...mapSlices.slice(0, iphoneX ? 58 : 57), loadingSlices.ocean]
              : mapSlices.slice(0, iphoneX ? 63 : 61),
          snapOffsets: normalizedLevel < 100 ? offsets.withUnity[1] : offsets.withoutUnity[1],
        };
      case 0:
      default:
        return {
          initialScrollIndex: 0,
          slices:
            normalizedLevel < 50
              ? [...mapSlices.slice(0, iphoneX ? 27 : 26), loadingSlices.forest]
              : mapSlices.slice(0, iphoneX ? 32 : 30),
          snapOffsets: normalizedLevel < 50 ? offsets.withUnity[0] : offsets.withoutUnity[0],
        };
    }
  };
}

export default memo(QuestsScreen);

function getInitialState(currentLevel: number) {
  const topBarTypes: { [key: number]: TopBarTypes } = {
    0: "forest",
    1: "white",
    2: "desert",
    3: "white",
  };

  const currentWorld = getCurrentWorld(currentLevel);

  return { topBarType: topBarTypes[currentWorld] ?? "forest" };
}
