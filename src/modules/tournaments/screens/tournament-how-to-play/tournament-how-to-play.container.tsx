import React, { useCallback } from "react";
import { Navigation } from "@navigation/main";
import TournamentHowToPlayScreen from "./tournament-how-to-play.screen";

interface ITournamentHowToPlayContainerProps {
  componentId: string;
  aboutTitle?: string;
  aboutMarkdown?: string;
}

const TournamentHowToPlayContainer = ({
  componentId,
  aboutTitle,
  aboutMarkdown,
}: ITournamentHowToPlayContainerProps) => {
  const handleClose = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  return <TournamentHowToPlayScreen aboutTitle={aboutTitle} aboutMarkdown={aboutMarkdown} onClose={handleClose} />;
};

export default TournamentHowToPlayContainer;
