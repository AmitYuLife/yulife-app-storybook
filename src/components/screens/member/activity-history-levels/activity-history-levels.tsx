import { countSources, IFormattedDatesByMonth } from "@containers/member/activity-history/activity-history.helpers";
import { ACTIVITY_HISTORY_SCREEN } from "@ids";
import { YulifeLoadingFooter, YulifeRefreshHeader } from "@molecules/index";
import { Style, Colours } from "@styles/index";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { IndexPath, LargeList } from "react-native-largelist-v3";
import { Loading, TextTemplate } from "@atoms";
import Item from "./activity-history-levels.item";
import styles, { rowHeight, dividerHeight, bottomDividerHeight } from "./activity-history-levels.styles";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { DistanceMeasurementType } from "@graphql/_core/schema/globalTypes";
import { t } from "@locale";

export interface IServerProps {
  items: IFormattedDatesByMonth[];
}

export interface IOwnProps {
  loading: boolean;
  onPressClose: () => void;
  onRefresh: () => Promise<void>;
  onFetchMoreData?: () => void;
  largeListRef: React.MutableRefObject<LargeList>;
  cyclingMeasurement: DistanceMeasurementType;
}

type IProps = IOwnProps & IServerProps;

interface IState {
  isAllDataLoaded: boolean;
  willGetMoreData: boolean;
  fetchTries: number;
}

export default class ActivityHistoryLevels extends React.Component<IProps, IState> {
  public state = {
    isAllDataLoaded: false,
    willGetMoreData: false,
    fetchTries: 0,
  };

  public largeList: LargeList = null;

  public shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    // Check if there are items first then check if there are new items for current month
    return (
      (!!this.props.items.length && this.props.items[0].items.length !== nextProps?.items[0]?.items.length) ||
      this.props.cyclingMeasurement !== nextProps.cyclingMeasurement ||
      this.props.items.length !== nextProps.items.length ||
      this.props.loading !== nextProps.loading ||
      this.state.willGetMoreData !== nextState.willGetMoreData ||
      this.state.isAllDataLoaded !== nextState.isAllDataLoaded ||
      this.state.fetchTries !== nextState.fetchTries
    );
  }

  public componentDidUpdate(prevProps: IProps) {
    const { isAllDataLoaded, willGetMoreData, fetchTries } = this.state;
    const { items } = this.props;
    const wasLoading = !this.props.loading && prevProps.loading;
    // Make sure there items.length > 0 before checking oldest items for level of 1
    const hasLevel1Item =
      Boolean(items.length) && items[items.length - 1].items.findIndex((level) => level.level === 1) !== -1;
    const hasSameNumberOfItems = this.props.items.length === prevProps.items.length;

    if ((hasLevel1Item || items.length === 0) && !isAllDataLoaded) {
      this.setState({
        isAllDataLoaded: true,
      });
    }

    // as long as there are more items, should stop fetching
    if (!hasSameNumberOfItems && willGetMoreData) {
      return this.setState({
        willGetMoreData: false,
        fetchTries: 0,
      });
    }

    if (wasLoading && hasSameNumberOfItems && willGetMoreData && fetchTries < 3) {
      return this.fetchMoreData();
    }

    if (wasLoading && hasSameNumberOfItems && willGetMoreData && fetchTries === 3) {
      this.setState({
        willGetMoreData: false,
        fetchTries: 0,
        isAllDataLoaded: true,
      });
    }
  }

  public renderItem = ({ section, row }: IndexPath) => {
    const { items, cyclingMeasurement } = this.props;
    const item = items[section].items[row];

    if (item) {
      return (
        <View>
          <Item {...item} cyclingMeasurement={cyclingMeasurement} />
        </View>
      );
    }
  };

  public renderSection = (section: number) => {
    const { items } = this.props;
    const item = items[section];

    if (item) {
      return (
        <View style={styles.dividerWrappers}>
          <View style={styles.dividerLeft} />
          <View style={styles.dividerRight}>
            <View style={styles.dividerRightLabelWrapper}>
              <TextTemplate type="b2b" color={Colours.neutral.white} numberOfLines={1}>
                {item.title}
              </TextTemplate>
            </View>
          </View>
        </View>
      );
    }
  };

  public render() {
    const { isAllDataLoaded } = this.state;
    const { items, onPressClose, largeListRef, onRefresh } = this.props;
    return (
      <View style={styles.wrapper} testID={ACTIVITY_HISTORY_SCREEN}>
        <GenericHeadingPad />
        <View style={styles.headersWrapper}>
          <View style={StyleSheet.flatten([styles.headerBase, styles.headerOneWrapper])}>
            <TextTemplate type="b2b" color={Colours.activityHistoryHeading} numberOfLines={1}>
              {t("screens.activity_history_levels.header_level")}
            </TextTemplate>
          </View>
          <View style={StyleSheet.flatten([styles.headerBase, styles.headerTwoWrapper])}>
            <TextTemplate type="b2" color={Colours.primary.p600} numberOfLines={1}>
              {t("screens.activity_history_levels.header_left")}
            </TextTemplate>
          </View>
          <View style={StyleSheet.flatten([styles.headerBase, styles.headerThreeWrapper])}>
            <TextTemplate type="b2" color={Colours.primary.p600} numberOfLines={1}>
              {t("screens.activity_history_levels.header_mid")}
            </TextTemplate>
          </View>
          <View style={StyleSheet.flatten([styles.headerBase, styles.headerFourWrapper])}>
            <TextTemplate type="b2" color={Colours.primary.p600} numberOfLines={1}>
              {t("screens.activity_history_levels.header_right")}
            </TextTemplate>
          </View>
        </View>

        <View style={styles.scrollView}>
          <LargeList
            ref={largeListRef}
            data={items}
            onRefresh={onRefresh}
            heightForIndexPath={this.handleHeightForIndexPath}
            heightForSection={this.handleHeightForSection}
            renderIndexPath={this.renderItem}
            renderSection={this.renderSection}
            renderEmpty={this.renderEmpty}
            onLoading={this.fetchMoreData}
            refreshHeader={YulifeRefreshHeader}
            loadingFooter={YulifeLoadingFooter}
            allLoaded={isAllDataLoaded}
          />
        </View>
        <GenericHeadingAbsolute
          heading={t("screens.activity_history_levels.heading")}
          onRightIconPress={onPressClose}
        />
      </View>
    );
  }

  private fetchMoreData = () => {
    const { isAllDataLoaded, fetchTries } = this.state;
    const { loading } = this.props;
    if (!isAllDataLoaded && !loading) {
      this.setState(
        {
          willGetMoreData: true,
          fetchTries: fetchTries + 1,
        },
        this.props.onFetchMoreData
      );
    }
  };

  private renderEmpty = () => {
    const { loading } = this.props;
    if (loading) {
      return <Loading />;
    }

    return null;
  };

  private handleHeightForSection = () => dividerHeight;

  private handleHeightForIndexPath = ({ section, row }: IndexPath) => {
    const { items } = this.props;

    const item = items[section].items[row];
    const challengeCount = item.challenges.length ? item.challenges.length : 1;
    const rows =
      (item.mindfulSeconds ? 1 : 0) +
      (item.cycling ? 1 : 0) +
      countSources(item.sources) +
      countSources(item.cyclingSources) +
      challengeCount;
    const dividers = Style.adjust(40);
    const height = rows * rowHeight + dividers + bottomDividerHeight;

    return height;
  };
}
