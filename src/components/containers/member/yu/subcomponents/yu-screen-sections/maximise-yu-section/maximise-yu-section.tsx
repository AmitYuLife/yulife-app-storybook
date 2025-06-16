import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Colours } from "@styles";
import { Badge } from "./badge";
import { TodayEarnings } from "./today-earnings/today-earnings";
import { HorizontalList } from "./horizontal-list/horizontal-list";
import { getRouteState } from "@redux/app/app.selectors";
import { ROUTES } from "@navigation/constants";
import { getShouldAnimateMaximiseYu } from "@redux/yu-screen/yu-screen.selectors";
import { updateYuScreenMaximiseYuAnimationSeen } from "@redux/yu-screen/yu-screen.actions";
import { MaximiseYuSection as IMaximiseYuSection } from "@redux/yu-screen/yu-screen.types";
import { DETOX_ENABLED } from "@services/socket";
import { MaximiseYuSkeleton } from "./maximise-yu-skeleton";
import GoldenSheenAnimation from "./golden-sheen-animation";
import { Box } from "@atoms";
import { BorderOpacityAnimation, StarOpacityAnimation } from "./animation";
import { TOTAL_ANIMATION_DURATION } from "./animation/animation-constants";
import { MAXIMISE_YU_COMPONENT, MAXIMISE_YU } from "@ids";

export const MaximiseYuSection = ({ sectionInstanceId, ready, content }: IMaximiseYuSection) => {
  const [showTransitionAnimation, setShowTransitionAnimation] = useState(false);

  const currentScreen = useSelector(getRouteState);
  const canShowTransitionAnimation = useSelector(getShouldAnimateMaximiseYu);
  const reduxDispatch = useDispatch();

  const progress = {
    current: content?.progress?.current ?? 0,
    max: content?.progress?.max ?? 1,
    title: content?.progress?.title ?? "",
  };

  const showAnimation = progress.current >= progress.max;

  useEffect(() => {
    const isScreenActive = currentScreen === ROUTES.yuScreen;

    if (!content?.progress) {
      return;
    }

    if (
      DETOX_ENABLED ||
      !canShowTransitionAnimation ||
      !content.progress.max ||
      !isScreenActive ||
      progress.current < progress.max
    ) {
      return;
    }

    setShowTransitionAnimation(true);

    const timeout = setTimeout(
      () => reduxDispatch(updateYuScreenMaximiseYuAnimationSeen({ timestamp: moment().format() })),
      TOTAL_ANIMATION_DURATION
    );

    return () => clearTimeout(timeout);
  }, [content, currentScreen, canShowTransitionAnimation]);

  const showPersistentAnimation = showAnimation && !canShowTransitionAnimation;

  if (!ready) {
    return <MaximiseYuSkeleton key={sectionInstanceId} />;
  }

  if (!content) {
    return null;
  }

  const { badge, scrollItems } = content || {};

  const showProgress = !!content?.progress?.max;
  const showItems = !!scrollItems?.length;

  if (!showProgress && !showItems) {
    return null;
  }

  return (
    <Box key={sectionInstanceId} testID={MAXIMISE_YU_COMPONENT}>
      {showTransitionAnimation ? <BorderOpacityAnimation /> : null}
      <Box pb={12} pt={12}>
        {showTransitionAnimation ? <StarOpacityAnimation /> : null}
        <Box
          mt={12}
          mh={24}
          pb={16}
          br={8}
          borderWidth={1}
          borderColor={showAnimation ? Colours.yellow.y100 : Colours.neutral.n150}
          overflow="hidden"
          bg={Colours.neutral.white}
          testID={MAXIMISE_YU(showProgress, showItems)}
        >
          {showPersistentAnimation ? <GoldenSheenAnimation /> : null}
          {showProgress ? <TodayEarnings animate={showTransitionAnimation} progress={progress} /> : null}
          {showItems ? <HorizontalList data={scrollItems} /> : null}
          <Badge badge={badge} animate={showTransitionAnimation} />
        </Box>
      </Box>
    </Box>
  );
};
