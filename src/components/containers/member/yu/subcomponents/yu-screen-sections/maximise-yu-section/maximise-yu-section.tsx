import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Colours, Style } from "@styles";
import { MaximiseYuSection as MaximiseYuSectionGql } from "@graphql/__generated";
import { Badge } from "./badge";
import { TodayEarnings } from "./today-earnings/today-earnings";
import { HorizontalList } from "./horizontal-list/horizontal-list";
import { BorderOpacityAnimation, GlowScaleAnimation, StarOpacityAnimation } from "./animation";
import { useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";
import { ROUTES } from "@navigation/constants";
import { getYuScreenMaximiseYuAnimationSeen } from "@redux/yu-screen/yu-screen.selectors";
import moment from "moment";
import { useDispatch } from "react-redux";
import { updateYuScreenMaximiseYuAnimationSeen } from "@redux/yu-screen/yu-screen.actions";

export const MaximiseYuSection = ({ id, content }: MaximiseYuSectionGql) => {
  const [startAnimation, setStartAnimation] = React.useState(false);

  const currentScreen = useSelector(getRouteState);
  const lastAnimationSeen = useSelector(getYuScreenMaximiseYuAnimationSeen);
  const seenToday = !!lastAnimationSeen && moment(lastAnimationSeen).isSame(moment(), "day");
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

    if (seenToday || !content.progress.max || !isScreenActive || content.progress.current < content.progress.max) {
      return;
    }

    setStartAnimation(true);
    reduxDispatch(updateYuScreenMaximiseYuAnimationSeen());
  }, [content, currentScreen, seenToday]);

  if (!content) {
    return null;
  }

  const { badge, scrollItems } = content || {};

  return (
    <View key={id} style={styles.wrapper}>
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
