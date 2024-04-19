import React, { FC, memo, useEffect } from "react";
import { YuScreenLayout } from "./yu-screen-layout";
import { renderSection } from "../yu-screen-sections";
import { useSelector } from "react-redux";
import { getYuScreenLastLayoutUpdate, getYuScreenSections } from "@redux/yu-screen/yu-screen.selectors";
import { getRouteState } from "@redux/app/app.selectors";
import { ROUTES } from "@navigation/constants";
import { useDispatch } from "react-redux";
import { queryYuScreenSections } from "@redux/yu-screen/yu-screen.actions";

interface Props {
  componentId: string;
}

export const YuScreen: FC<Props> = memo(() => {
  const sections = useSelector(getYuScreenSections);
  const lastLayoutUpdate = useSelector(getYuScreenLastLayoutUpdate);
  const currentScreen = useSelector(getRouteState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentScreen === ROUTES.yuScreen) {
      const sectionsToUpdate = sections.filter((section) => !section.ready || section.updateOnView);

      if (sectionsToUpdate?.length) {
        const ids = sectionsToUpdate.map((section) => section.id);
        dispatch(queryYuScreenSections(ids));
      }
    }
  }, [currentScreen, lastLayoutUpdate]);

  return <YuScreenLayout>{sections.map(renderSection)}</YuScreenLayout>;
});
