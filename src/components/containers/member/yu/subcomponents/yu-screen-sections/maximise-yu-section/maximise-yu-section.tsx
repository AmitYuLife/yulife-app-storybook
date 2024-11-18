import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Colours, Style } from "@styles";
import { Badge } from "./badge";
import { TodayEarnings } from "./today-earnings/today-earnings";
import { HorizontalList } from "./horizontal-list/horizontal-list";
import { BorderOpacityAnimation, GlowScaleAnimation, StarOpacityAnimation } from "./animation";
import { getRouteState } from "@redux/app/app.selectors";
import { ROUTES } from "@navigation/constants";
import { getShouldAnimateMaximiseYu } from "@redux/yu-screen/yu-screen.selectors";
import { updateYuScreenMaximiseYuAnimationSeen } from "@redux/yu-screen/yu-screen.actions";
import { MaximiseYuSection as IMaximiseYuSection } from "@redux/yu-screen/yu-screen.types";
import { DETOX_ENABLED } from "@services/socket";
import { MaximiseYuSkeleton } from "./maximise-yu-skeleton";

export const MaximiseYuSection = ({ sectionInstanceId, ready, content }: IMaximiseYuSection) => {
  const [startAnimation, setStartAnimation] = React.useState(false);

  const currentScreen = useSelector(getRouteState);
  const shouldAnimate = useSelector(getShouldAnimateMaximiseYu);
  const reduxDispatch = useDispatch();

  const progress = {
    current: content?.progress?.current,
    max: content?.progress?.max,
    title: content?.progress?.title,
  };

  useEffect(() => {
    const isScreenActive = currentScreen === ROUTES.yuScreen;

    if (!content?.progress) {
      return;
    }

    if (!shouldAnimate || !content.progress.max || !isScreenActive || content.progress.current < content.progress.max) {
      return;
    }

    if (DETOX_ENABLED) {
      setStartAnimation(false);
    }

    reduxDispatch(updateYuScreenMaximiseYuAnimationSeen({ timestamp: moment().format() }));
  }, [content, currentScreen, shouldAnimate]);

  if (!ready) {
    return <MaximiseYuSkeleton key={sectionInstanceId} />;
  }

  if (!content) {
    return null;
  }

  const { badge, scrollItems } = content || {};

  return (
    <View key={sectionInstanceId} style={styles.wrapper}>
      <GlowScaleAnimation animate={startAnimation} />
      <View style={styles.innerWrapper}>
        {!progress?.max ? null : <TodayEarnings animate={startAnimation} progress={progress} />}
        {!scrollItems?.length ? null : <HorizontalList data={scrollItems} />}
        <Badge badge={badge} animate={startAnimation} />
      </View>
      <BorderOpacityAnimation animate={startAnimation} />
      <StarOpacityAnimation animate={startAnimation} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Style.adjust(24),
    paddingBottom: Style.adjust(12),
    paddingTop: Style.adjust(12),
  },
  innerWrapper: {
    borderWidth: 1,
    paddingBottom: Style.adjust(16),
    backgroundColor: Colours.neutral.white,
    borderColor: Colours.neutral.n150,
    borderRadius: Style.adjust(8),
    marginTop: Style.adjust(12),
  },
  pad: {
    width: Style.adjust(8),
  },
  pad16: {
    width: Style.adjust(16),
  },
});
