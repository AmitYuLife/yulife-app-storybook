import React from "react";
import { colors, space } from "../../tokens";
import { spacing } from "../../tokens/spacing";
import YuLifeSquareColourSvg from "../../icons/svg/YuLifeSquareColour.svg?react";
import YuLifeSquareMonoSvg from "../../icons/svg/YuLifeSquareMono.svg?react";

// ─── Status Bar Icons ──────────────────────────────────────────────────────────
// Inline SVG approximations of iOS system status icons (decorative only).

const CellSignalIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden={true}>
    <rect x="0" y="7" width="3" height="5" rx="0.5" fill={color} fillOpacity="0.4" />
    <rect x="4.5" y="5" width="3" height="7" rx="0.5" fill={color} fillOpacity="0.4" />
    <rect x="9" y="3" width="3" height="9" rx="0.5" fill={color} fillOpacity="0.4" />
    <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill={color} />
  </svg>
);

const WifiIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden={true}>
    <path
      d="M8 9.5C8.69 9.5 9.25 10.06 9.25 10.75C9.25 11.44 8.69 12 8 12C7.31 12 6.75 11.44 6.75 10.75C6.75 10.06 7.31 9.5 8 9.5Z"
      fill={color}
    />
    <path
      d="M8 6C9.38 6 10.63 6.56 11.56 7.46L12.56 6.46C11.37 5.3 9.77 4.58 8 4.58C6.23 4.58 4.63 5.3 3.44 6.46L4.44 7.46C5.37 6.56 6.62 6 8 6Z"
      fill={color}
    />
    <path
      d="M8 2.5C10.5 2.5 12.77 3.52 14.39 5.18L15.39 4.18C13.5 2.24 10.89 1 8 1C5.11 1 2.5 2.24 0.61 4.18L1.61 5.18C3.23 3.52 5.5 2.5 8 2.5Z"
      fill={color}
    />
  </svg>
);

const BatteryIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden={true}>
    <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke={color} strokeOpacity="0.35" />
    <rect x="2" y="2" width="18" height="8" rx="1.5" fill={color} />
    <path d="M23 3.5V8.5C23.83 8.17 24.5 7.17 24.5 6C24.5 4.83 23.83 3.83 23 3.5Z" fill={color} fillOpacity="0.4" />
  </svg>
);

// ─── StatusBar ─────────────────────────────────────────────────────────────────

interface StatusBarProps {
  darkMode?: boolean;
}

const StatusBar: React.FC<StatusBarProps> = ({ darkMode = false }) => {
  const iconColor = darkMode ? "#FFFFFF" : "#000000";

  return (
    <div
      aria-hidden={true}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 44,
        paddingLeft: 21,
        paddingRight: 14,
        opacity: 0.9,
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
          fontSize: 15,
          fontWeight: 700,
          lineHeight: "19px",
          color: iconColor,
          letterSpacing: 0,
          userSelect: "none",
        }}
      >
        9:41
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <CellSignalIcon color={iconColor} />
        <WifiIcon color={iconColor} />
        <BatteryIcon color={iconColor} />
      </div>
    </div>
  );
};

// ─── YuLifeLogo ────────────────────────────────────────────────────────────────

interface YuLifeLogoProps {
  darkMode?: boolean;
  size?: number;
}

const YuLifeLogo: React.FC<YuLifeLogoProps> = ({ darkMode = false, size = 24 }) => {
  const LogoSvg = darkMode ? YuLifeSquareMonoSvg : YuLifeSquareColourSvg;
  return <LogoSvg width={size} height={size} aria-label="YuLife" role="img" />;
};

// ─── NavigationHeader ──────────────────────────────────────────────────────────

export interface NavigationHeaderProps {
  /**
   * White background fill behind the header.
   * When false (default) the header is transparent, suitable for use over
   * full-bleed images or coloured screens.
   */
  background?: boolean;
  /**
   * Adds a subtle `0 2px 0 rgba(0,0,0,0.08)` bottom shadow.
   * Only visible when `background` is also true — communicates elevation
   * when content scrolls beneath the header.
   * @default false
   */
  shadow?: boolean;
  /**
   * Switches to white icons and time text for use on dark or image backgrounds.
   * Uses the monochrome YuLife logo.
   * @default false
   */
  darkMode?: boolean;
  /**
   * Content rendered in the left zone of the navigation bar.
   * Typically a back button, close icon, or icon + label combination.
   */
  leftSlot?: React.ReactNode;
  /**
   * Content rendered in the right zone of the navigation bar.
   * Typically action icons or a text label.
   */
  rightSlot?: React.ReactNode;
  /**
   * Whether to render the centred YuLife logo in the navigation bar.
   * Set to `false` when the logo is not needed — e.g. hero headers that
   * show a partner logo in the content area below.
   * @default true
   */
  showLogo?: boolean;
  /**
   * Whether to render the mock iOS status bar above the navigation bar.
   * Set to `false` for contexts where a status bar is not appropriate —
   * e.g. modal headers that overlay content mid-screen rather than at the
   * top of the viewport.
   * @default true
   */
  showStatusBar?: boolean;
  /**
   * Optional content for the 8px strip below the navigation bar.
   * When omitted the strip is empty space. Use for tab indicators,
   * progress bars, or thin dividers.
   */
  subNavSlot?: React.ReactNode;
  /**
   * Additional inline styles applied to the root element.
   * Note: `position`, `top`, `left`, and `zIndex` are set by the component
   * and can be overridden here if a non-fixed context is needed (e.g. tests).
   */
  style?: React.CSSProperties;
}

/**
 * NavigationHeader
 *
 * Mobile navigation header consisting of a mock iOS status bar, a navigation
 * bar with left/right composition slots and a centred YuLife logo, and an
 * optional 8px sub-navigation strip.
 *
 * Always fixed to the top of the screen (`position: fixed; top: 0; left: 0`).
 * Fixed at 375px wide to match the standard mobile frame used in prototypes.
 */
export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  background = false,
  shadow = false,
  darkMode = false,
  showLogo = true,
  showStatusBar = true,
  leftSlot,
  rightSlot,
  subNavSlot,
  style,
}) => {
  const showShadow = background && shadow;

  return (
    <div
      role="banner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        overflow: "hidden",
        backgroundColor: background ? colors.bgBase : "transparent",
        boxShadow: showShadow ? "0px 2px 0px 0px rgba(0,0,0,0.08)" : undefined,
        // When the status bar is hidden the nav bar needs its own top breathing
        // room — equal to the horizontal slot inset so icons don't crowd the edge.
        paddingTop: showStatusBar ? undefined : spacing[4],
        ...style,
      }}
    >
      {showStatusBar && <StatusBar darkMode={darkMode} />}

      {/* Navigation bar */}
      <div
        role="navigation"
        aria-label="App navigation"
        style={{
          position: "relative",
          height: 40,
          width: "100%",
          flexShrink: 0,
        }}
      >
        {/* Left slot */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 17,
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            gap: space.stackSM,
            paddingBlock: space.stackSM,
          }}
        >
          {leftSlot}
        </div>

        {/* Centred logo */}
        {showLogo && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <YuLifeLogo darkMode={darkMode} size={24} />
          </div>
        )}

        {/* Right slot */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: 16,
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            gap: space.stackSM,
            paddingBlock: space.stackSM,
          }}
        >
          {rightSlot}
        </div>
      </div>

      {/* Sub-navigation strip */}
      <div
        style={{
          height: 8,
          width: "100%",
          flexShrink: 0,
        }}
      >
        {subNavSlot}
      </div>
    </div>
  );
};

export default NavigationHeader;
