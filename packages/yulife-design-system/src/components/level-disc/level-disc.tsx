import React, { useState } from "react";
import { palette } from "../../tokens/colors";
import { fontFamily, fontSize, fontWeight } from "../../tokens/typography";
import { radii } from "../../tokens/radii";
import { spacing } from "../../tokens/spacing";
import { ChestColourIcon } from "../../icons/colour";
import CheckIcon from "../../icons/svg/Check.svg?react";

// ─── Constants ──────────────────────────────────────────────────────────────

const DISC_SIZE = 64;
const INNER_SIZE = 56;
const BADGE_SIZE = 24;
const BADGE_ICON_SIZE = 16;
const SHADOW_OFFSET = 4;

const DISC_SHADOW = `0px ${SHADOW_OFFSET}px 0px 0px ${palette.transBlack8}`;

// ─── Types ──────────────────────────────────────────────────────────────────

export type LevelDiscState = "active" | "locked" | "completed" | "yuniversal";
export type LevelDiscType = "level" | "countdown" | "chest";

export interface YumojiPinProps {
  src: string;
  alt?: string;
}

export interface LevelDiscProps {
  state?: LevelDiscState;
  type?: LevelDiscType;
  label?: string;
  countdown?: string;
  pressed?: boolean;
  iconBadge?: boolean;
  yumojiPin?: YumojiPinProps;
  onPress?: () => void;
  style?: React.CSSProperties;
}

// ─── Colour helpers ─────────────────────────────────────────────────────────

function getDiscColors(state: LevelDiscState, type: LevelDiscType, pressed: boolean) {
  switch (state) {
    case "active":
      if (type === "chest") {
        return {
          bg: pressed ? palette.pink800 : palette.pink700,
          border: palette.neutral100,
        };
      }

      return {
        bg: pressed ? palette.pink800 : palette.pink700,
        border: palette.neutralWhite,
      };
    case "locked":
      return {
        bg: pressed ? palette.neutral300 : palette.neutral200,
        border: palette.neutral100,
      };
    case "completed":
      return {
        bg: palette.yellow600,
        border: palette.yellow100,
      };
    case "yuniversal":
      return {
        bg: undefined,
        border: palette.neutral100,
        gradient: "linear-gradient(180deg, #FF7DFF 0%, #9796FE 100%)",
      };
  }
}

function getLabelColor(state: LevelDiscState): string {
  switch (state) {
    case "active":
      return palette.neutralWhite;
    case "locked":
      return palette.neutral500;
    case "completed":
      return palette.miscBurgundy;
    default:
      return palette.neutralWhite;
  }
}

// ─── Sub-components ─────────────────────────────────────────────────────────

const GiftBoxIcon: React.FC = () => (
  <svg
    width={BADGE_ICON_SIZE}
    height={BADGE_ICON_SIZE}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden={true}
  >
    <rect x="2" y="7" width="12" height="8" rx="1" fill="#FF7DFF" />
    <rect x="1" y="5" width="14" height="4" rx="1" fill="#C547FF" />
    <rect x="7" y="5" width="2" height="10" fill="#9796FE" />
    <path d="M8 5C8 5 5 2 3.5 3.5S5 5 8 5Z" fill="#FFD600" />
    <path d="M8 5C8 5 11 2 12.5 3.5S11 5 8 5Z" fill="#FFD600" />
  </svg>
);

// ─── LevelDisc ──────────────────────────────────────────────────────────────

export const LevelDisc: React.FC<LevelDiscProps> = ({
  state = "active",
  type = "level",
  label = "1",
  countdown,
  pressed: pressedProp,
  iconBadge = false,
  yumojiPin,
  onPress,
  style: externalStyle,
}) => {
  const [internalPressed, setInternalPressed] = useState(false);
  const pressed = pressedProp ?? internalPressed;

  const colors = getDiscColors(state, type, pressed);
  const isInteractive = state !== "completed";
  const showLabel = type === "level" && state !== "yuniversal";
  const showCountdown = type === "countdown";
  const showChest = type === "chest" || state === "yuniversal";
  const showBadge = iconBadge && !pressed && (state === "active" || state === "locked");
  const showPin = yumojiPin && state === "active" && type === "level" && !pressed;
  const showCheck = state === "completed" && type === "level";

  const discTopOffset = pressed ? SHADOW_OFFSET : 0;

  return (
    <div
      style={{
        position: "relative",
        width: DISC_SIZE,
        height: DISC_SIZE,
        cursor: isInteractive ? "pointer" : undefined,
        userSelect: "none",
        flexShrink: 0,
        ...externalStyle,
      }}
      role={isInteractive ? "button" : undefined}
      aria-label={`Level ${label}`}
      onPointerDown={pressedProp === undefined && isInteractive ? () => setInternalPressed(true) : undefined}
      onPointerUp={
        pressedProp === undefined && isInteractive
          ? () => {
              setInternalPressed(false);
              onPress?.();
            }
          : undefined
      }
      onPointerLeave={pressedProp === undefined && isInteractive ? () => setInternalPressed(false) : undefined}
    >
      {/* Yumoji Pin — positioned above the disc */}
      {showPin && (
        <div
          style={{
            position: "absolute",
            top: -48,
            left: spacing[2],
            width: 48,
            height: 60,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <img
            src={yumojiPin!.src}
            alt={yumojiPin!.alt ?? "Player avatar"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
      )}

      {/* Disc body */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: `calc(50% + ${discTopOffset}px)`,
          transform: "translate(-50%, -50%)",
          width: INNER_SIZE,
          height: INNER_SIZE,
          borderRadius: radii.pill,
          border: `2px solid ${colors.border}`,
          background: colors.gradient ?? colors.bg,
          boxShadow: pressed ? "none" : DISC_SHADOW,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Sheen overlay — active/completed only */}
        {(state === "active" || state === "completed") && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(255,255,255,0.24) 0%, transparent 50%)",
              pointerEvents: "none",
            }}
          />
        )}

        {/* Level number label */}
        {showLabel && (
          <span
            style={{
              fontFamily: fontFamily.sans,
              fontSize: fontSize.lg,
              fontWeight: state === "active" || state === "completed" ? fontWeight.bold : fontWeight.regular,
              lineHeight: `${fontSize.lg}px`,
              color: getLabelColor(state),
              textAlign: "center",
              opacity: state === "completed" ? 0.4 : 1,
              position: "relative",
              zIndex: 1,
            }}
          >
            {label}
          </span>
        )}

        {/* Countdown text */}
        {showCountdown && (
          <div
            style={{
              fontFamily: fontFamily.sans,
              fontSize: fontSize["3xs"],
              fontWeight: fontWeight.bold,
              letterSpacing: 0.4,
              textAlign: "center",
              color: state === "active" ? palette.neutralWhite : palette.neutral700,
              lineHeight: "normal",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div>in</div>
            <div>{countdown ?? "08:09:29"}</div>
          </div>
        )}

        {/* Chest icon */}
        {showChest && (
          <div style={{ position: "relative", zIndex: 1 }}>
            <ChestColourIcon size={32} />
          </div>
        )}

        {/* Completed check mark */}
        {showCheck && (
          <div style={{ marginTop: -4, position: "relative", zIndex: 1 }}>
            <CheckIcon
              width={16}
              height={16}
              aria-hidden={true}
              style={{ color: palette.miscBurgundy, display: "block" }}
            />
          </div>
        )}
      </div>

      {/* Reward icon badge */}
      {showBadge && (
        <div
          style={{
            position: "absolute",
            top: pressed ? SHADOW_OFFSET : 0,
            right: 0,
            width: BADGE_SIZE,
            height: BADGE_SIZE,
            borderRadius: radii.pill,
            backgroundColor: palette.neutralWhite,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <GiftBoxIcon />
        </div>
      )}
    </div>
  );
};

export default LevelDisc;
