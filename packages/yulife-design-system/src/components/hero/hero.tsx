import React from "react";
import { NavigationHeader } from "../navigation-header";
import { Icon, CloseIcon } from "../../icons";
import { colors } from "../../tokens";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface HeroProps {
  /**
   * Full-bleed background photograph. Pass an imported PNG/JPG URL.
   * The image is displayed with `objectFit: cover` and a `rgba(0,0,0,0.4)`
   * dark scrim overlay to ensure text legibility.
   */
  backgroundImage: string;
  /**
   * Content rendered in the lower portion of the hero, below the navigation
   * header. Use a variant component (e.g. `HeroProductDetails`) or supply
   * custom markup directly.
   */
  children?: React.ReactNode;
  /**
   * Called when the close (×) button in the navigation bar is pressed.
   */
  onClose?: () => void;
  /**
   * Inline style overrides applied to the root element.
   * Use sparingly — prefer composing a variant component instead.
   */
  style?: React.CSSProperties;
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

/**
 * Hero
 *
 * Structural chassis for full-bleed page hero images. Renders a 375 × 290 px
 * container with a cover-fit background photograph, a dark scrim, and a dark-
 * mode `NavigationHeader` with a close button in the right slot.
 *
 * The lower content area is an open slot — pass a variant component
 * (e.g. `HeroProductDetails`) or custom markup as `children`.
 *
 * Figma reference: YuLife App Storybook → Hero → node 10972:1483
 * https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10972-1483
 */
export const Hero: React.FC<HeroProps> = ({ backgroundImage, children, onClose, style }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        // Participates in the SinglePageTemplate pull-down zoom interaction.
        // --spt-hero-height is set imperatively on the scroll container ancestor
        // and inherits through the DOM, allowing the hero to grow and fill the
        // revealed space when the user pulls the MainLayout downward.
        // Defaults to 290px when Hero is used outside SinglePageTemplate.
        height: "var(--spt-hero-height, 290px)",
        transition: "var(--spt-hero-transition, none)",
        overflow: "hidden",
        backgroundColor: colors.bgOverlay,
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {/* ── Background image + scrim ─────────────────────────────────────── */}
      <div
        aria-hidden={true}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <img
          alt=""
          src={backgroundImage}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        {/* Dark scrim for text legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        />
      </div>

      {/* ── Navigation header ────────────────────────────────────────────── */}
      <NavigationHeader
        darkMode={true}
        showLogo={false}
        rightSlot={
          <button
            aria-label="Close"
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              border: "none",
              padding: 0,
              cursor: onClose ? "pointer" : "default",
            }}
          >
            <Icon svg={CloseIcon} size={24} color={colors.textInverse} accessibilityLabel="" />
          </button>
        }
        style={{
          position: "relative",
          top: "auto",
          left: "auto",
          zIndex: "auto" as unknown as number,
          width: "100%",
        }}
      />

      {/* ── Content slot ─────────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          minHeight: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Hero;
