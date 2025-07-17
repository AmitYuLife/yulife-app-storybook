import { Source } from "@atoms";
import { GetQuestMapQuery } from "@graphql/__generated";
import { TOP_BAR_TYPES } from "@organisms/top-bar/top-bar.helpers";

export interface IEpisodeLevelConfig {
  /**
   * X position of the bubble
   */
  x: number;
  /**
   * Y position of the bubble
   */
  y: number;
}

export interface IInteractiveElement {
  /**
   * Width of the interactive component
   */
  width: number;
  /**
   * Height of the interactive component
   */
  height: number;
  /**
   * X position of the interactive component
   */
  x: number;
  /**
   * Y position of the interactive component
   */
  y: number;
}

export interface IEpisodeConfig {
  /**
   * Image of the background of this episode
   */
  background: Source;

  /**
   * width / height ratio
   * used to calculate the height of the image based on device width
   */
  lottieAspectRatio?: number;
  /**
   * Bubble offset Y - moves every bubble by this amount
   */
  bubbleOffsetY?: number;
  /**
   * Snap position of this episode when scrolling
   */
  snapPosition?: "center" | "top";
  /**
   * Snap offset of this episode when scrolling
   */
  snapOffsetY?: number;
  /**
   * Width of the image
   */
  episodeWidth: number;
  /**
   * Height of the image
   */
  episodeHeight: number;
  /**
   * Levels of this episode
   */
  levels: Record<number, IEpisodeLevelConfig>;
  /**
   * Seperator
   */
  seperator?: ISeperatorConfig;

  episodeKey: number;

  topBarType?: TOP_BAR_TYPES;

  drawLines?: boolean;
}

export type IQuestMapLevel = QuestMapLevel & {
  isNext?: boolean;
  isActive?: boolean;
};

export interface IQuestMapItem {
  levels: IQuestMapLevel[];
  seperator?: ISeperatorConfig;
  episodeConfig: IEpisodeConfig;
}

export interface ISeperatorConfig {
  background: Source;
  width: number;
  height: number;
}

export interface IQuestMapConfig {
  episodes: Record<number, IEpisodeConfig>;
}

export type QuestMapLevel = GetQuestMapQuery["levels"][0];
