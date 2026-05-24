import React from "react";
import { LevelDisc } from "../level-disc";
import type { LevelDiscState, LevelDiscType, YumojiPinProps } from "../level-disc";
import type { EpisodeLayout } from "./positions";

// ─── Types ──────────────────────────────────────────────────────────────────

export interface LevelSpec {
  id: string;
  state: LevelDiscState;
  type: LevelDiscType;
  label?: string;
  countdown?: string;
  iconBadge?: boolean;
  yumojiPin?: YumojiPinProps;
  onPress?: () => void;
}

export interface QuestMapSlice {
  /** URL of the episode background PNG. */
  src: string;
  /** Logical height of this PNG in CSS px (raw px ÷ 3 for @3x assets). */
  height: number;
  /** Episode number (1-8). */
  episode: number;
  /** Pathway layout metadata for this episode. */
  layout?: EpisodeLayout;
  /** 7 level specs ordered Level 1 (bottom) → Level 7 (top). */
  levels?: LevelSpec[];
}

export interface QuestMapProps {
  /** Episode slices, ordered bottom (Episode 1) → top (Episode 8). */
  slices: QuestMapSlice[];
  /** Logical width in CSS px. Default 375 (iPhone viewport). */
  width?: number;
}

// ─── Component ──────────────────────────────────────────────────────────────

const DISC_SIZE = 64;

export const QuestMap: React.FC<QuestMapProps> = ({ slices, width = 375 }) => {
  const totalHeight = slices.reduce((sum, s) => sum + s.height, 0);

  // Stack slices from top (highest episode) to bottom (Episode 1).
  const reversed = [...slices].reverse();

  let yOffset = 0;

  return (
    <div
      style={{
        position: "relative",
        width,
        height: totalHeight,
      }}
    >
      {reversed.map((slice) => {
        const sliceTop = yOffset;
        yOffset += slice.height;

        return (
          <div
            key={slice.episode}
            style={{
              position: "absolute",
              top: sliceTop,
              left: 0,
              width,
              height: slice.height,
            }}
          >
            {/* Background image */}
            <img
              src={slice.src}
              alt={`Episode ${slice.episode} background`}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "fill",
                pointerEvents: "none",
              }}
            />

            {/* Level discs */}
            {slice.layout &&
              slice.levels?.map((level, i) => {
                const placemat = slice.layout!.placemats[i];
                if (!placemat) {
                  return null;
                }

                const ox = slice.layout!.pathwayOffset.x;
                const oy = slice.layout!.pathwayOffset.y;

                return (
                  <LevelDisc
                    key={level.id}
                    state={level.state}
                    type={level.type}
                    label={level.label}
                    countdown={level.countdown}
                    iconBadge={level.iconBadge}
                    yumojiPin={level.yumojiPin}
                    onPress={level.onPress}
                    style={{
                      position: "absolute",
                      left: ox + placemat.x - DISC_SIZE / 2,
                      top: oy + placemat.y - DISC_SIZE / 2,
                    }}
                  />
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default QuestMap;
