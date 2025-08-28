import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Coin } from "./coin";
import { ProgressText } from "./progress-text";
import { ProgressBar, TouchableOpacityWithDelay } from "@components/molecules";
import { Navigation } from "@navigation/main";
import { ROUTES, bottomTabs } from "@navigation/constants";
import { CaretIcon } from "@atoms/icon/caret-icon";
import { MAXIMISE_TODAYS_EARNINGS } from "@ids";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

type Props = {
  progress: {
    current: number;
    max: number;
    title?: string;
  };
  animate?: boolean;
};

export const TodayEarnings = memo(({ animate, progress }: Props) => {
  const dispatch = useDispatch();

  const onPress = useCallback(() => {
    Navigation.push(ROUTES.yuScreen, {
      component: {
        id: ROUTES.todayEarnings,
        name: ROUTES.todayEarnings,
        passProps: { sourceId: ROUTES.yuScreen },
        options: {
          bottomTabs,
          sideMenu: {
            left: {
              enabled: false,
              visible: false,
            },
          },
        },
      },
    });

    dispatch(
      logMixpanelEventActionCreator("button_pressed", {
        name: "maximise_yu_earnings",
        button_id: "maximise_yu_earnings",
        location: "yu-screen",
      })
    );
  }, [dispatch]);

  return (
    <TouchableOpacityWithDelay activeOpacity={1} style={styles.todayEarnings} onPress={onPress}>
      <Coin />
      <View style={styles.todayEarningsContent}>
        {!progress?.title ? null : <TextTemplate type="l1">{progress.title}</TextTemplate>}
        <ProgressText animate={animate} progress={progress} />
        <View style={styles.progressBarWrapper} testID={MAXIMISE_TODAYS_EARNINGS(progress.current, progress.max)}>
          <ProgressBar
            currentPosition={progress.current}
            maxLength={progress.max}
            wrapperWidth={Style.adjust(180)}
            height={Style.adjust(8)}
            style={styles.progressBar}
            unfilledBackgroundColor={Colours.neutral.white}
            unfilledStrokeColor={Colours.neutral.n150}
            unfilledStrokeWidth={1.5}
          />
        </View>
      </View>
      <CaretIcon />
    </TouchableOpacityWithDelay>
  );
});

const styles = StyleSheet.create({
  todayEarnings: {
    paddingEnd: Style.adjust(12),
    paddingStart: Style.adjust(16),
    paddingTop: Style.adjust(24),
    flexDirection: "row",
  },
  todayEarningsContent: {
    marginStart: Style.adjust(16),
    flex: 1,
  },
  progressBar: {
    marginTop: 0,
    position: "absolute",
    top: 0,
    left: -2,
  },
  progressBarWrapper: {
    height: Style.adjust(8),
    width: Style.adjust(180),
  },
});
