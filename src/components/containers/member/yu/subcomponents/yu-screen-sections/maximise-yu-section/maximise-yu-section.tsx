import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Colours, Style } from "@styles";
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
import { MAX_YU_HEIGHT } from "./constants";
import { Box } from "@atoms";

export const MaximiseYuSection = ({ sectionInstanceId, ready, content }: IMaximiseYuSection) => {
  const [startAnimation, setStartAnimation] = useState(false);

  const currentScreen = useSelector(getRouteState);
  const shouldAnimate = useSelector(getShouldAnimateMaximiseYu);
  const reduxDispatch = useDispatch();

  const progress = {
    current: content?.progress?.current ?? 0,
    max: content?.progress?.max ?? 1,
    title: content?.progress?.title ?? "",
  };

  const showOverachieverState = progress.current >= progress.max;

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
    <Box key={sectionInstanceId} ph={Style.adjust(24)} pb={Style.adjust(12)} pt={Style.adjust(12)}>
      <Box
        height={MAX_YU_HEIGHT}
        mt={Style.adjust(12)}
        pb={Style.adjust(16)}
        borderWidth={1}
        br={Style.adjust(8)}
        borderColor={showOverachieverState ? Colours.yellow.y100 : Colours.neutral.n150}
        overflow="hidden"
      >
        {!showOverachieverState ? null : <GoldenSheenAnimation />}
        {!progress?.max ? null : <TodayEarnings animate={startAnimation} progress={progress} />}
        {!scrollItems?.length ? null : <HorizontalList data={scrollItems} />}
        <Badge badge={badge} animate={startAnimation} />
      </Box>
    </Box>
  );
};
