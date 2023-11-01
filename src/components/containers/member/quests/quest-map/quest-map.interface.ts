import { GetQuestMap_levels } from "@graphql/_core/schema";
import { Source } from "react-native-fast-image";

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
}

export interface IQuestMapLevel extends GetQuestMap_levels {
  isNext?: boolean;
  isActive?: boolean;
}

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
