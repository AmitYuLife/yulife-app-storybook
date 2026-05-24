import React, { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { SinglePageTemplate } from "@yulife-private/design-system/templates";
import {
  HeroProductDetails,
  Card,
  CardInfoContent,
  Tile,
  TileImage,
  TileGroup,
  Button,
} from "@yulife-private/design-system";
import { phio, betterhelp, skinVision } from "@yulife-private/design-system/assets/services";
import {
  defaultHeroBackground,
  BupaLogo,
  BupaPipeSeparator,
} from "@yulife-private/design-system/assets/insurance-products";
import YuLifeSquareMonoSvg from "@yulife-private/design-system/icons/svg/YuLifeSquareMono.svg?react";
import {
  Icon,
  RightIcon,
  CoverDetailsColourIcon,
  PolicySummaryColourIcon,
  MembersColourIcon,
  CalendarColourIcon,
  HintsColourIcon,
  TalkColourIcon,
  FAQColourIcon,
} from "@yulife-private/design-system/icons";
import { palette, colors } from "@yulife-private/design-system/tokens/colors";
import { textStyles } from "@yulife-private/design-system/tokens/typography";
import { spacing, space } from "@yulife-private/design-system/tokens/spacing";

// ─── Story-level helpers ──────────────────────────────────────────────────────

const BupaYuLifeLogo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 0, height: 24 }}>
    <BupaLogo width={60} height={17} style={{ display: "block", flexShrink: 0 }} />
    <BupaPipeSeparator width={1} height={20} style={{ display: "block", flexShrink: 0, margin: "0 8px" }} />
    <YuLifeSquareMonoSvg width={20} height={20} style={{ display: "block", flexShrink: 0 }} />
  </div>
);

const trailing = <Icon svg={RightIcon} size={24} color={palette.pink700} accessibilityLabel="" />;

// ─── Drag-scrollable carousel ─────────────────────────────────────────────────

/**
 * Horizontal scroll container with hidden scrollbar and pointer drag-to-scroll.
 * A 5 px movement threshold distinguishes taps (passed through to children) from
 * intentional drags (scrolls the carousel).
 */
const DragCarousel: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  const ref = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const activePointer = useRef<number | null>(null);
  // isDraggingRef drives scroll logic (avoids stale closures); isDragging state drives cursor style
  const isDraggingRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== undefined && e.button !== 0) {
      return;
    }

    startX.current = e.clientX;
    startScrollLeft.current = ref.current?.scrollLeft ?? 0;
    activePointer.current = e.pointerId;
    isDraggingRef.current = false;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (activePointer.current === null || e.pointerId !== activePointer.current) {
      return;
    }

    const dx = e.clientX - startX.current;
    if (!isDraggingRef.current && Math.abs(dx) > 5) {
      // Threshold crossed — take ownership of the pointer so children don't receive it
      ref.current?.setPointerCapture(e.pointerId);
      isDraggingRef.current = true;
      setIsDragging(true);
    }

    if (isDraggingRef.current && ref.current) {
      ref.current.scrollLeft = startScrollLeft.current - dx;
    }
  };

  const stopDrag = () => {
    activePointer.current = null;
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  return (
    <>
      {/* WebKit browsers need this pseudo-element rule; all others use scrollbarWidth */}
      <style>{`.ds-carousel::-webkit-scrollbar { display: none; }`}</style>
      <div
        ref={ref}
        className="ds-carousel"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        style={{
          overflowX: "auto",
          scrollbarWidth: "none",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          ...style,
        }}
      >
        {children}
      </div>
    </>
  );
};

// ─── Service tile body text ───────────────────────────────────────────────────

const ServiceBody: React.FC<{ text: string }> = ({ text }) => (
  <span
    style={{
      ...textStyles.label1Bold,
      lineHeight: `${textStyles.label1Bold.lineHeight}px`,
      letterSpacing: `${textStyles.label1Bold.letterSpacing}px`,
      color: palette.neutral700,
      overflow: "hidden",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
    }}
  >
    {text}
  </span>
);

// ─── Page content ─────────────────────────────────────────────────────────────

const HealthCashPlanContent = () => (
  <>
    {/* ── 1. Tile group ─────────────────────────────────────────────────────── */}
    <TileGroup>
      <Tile colourIcon={<CoverDetailsColourIcon size={24} />} label="What I can claim for" />
      <Tile colourIcon={<PolicySummaryColourIcon size={24} />} label="Make a claim" />
      <Tile colourIcon={<HintsColourIcon size={24} />} label="Key policy information" />
    </TileGroup>

    {/* ── 2. Key info ───────────────────────────────────────────────────────── */}
    <Card overline="Key info" style={{ gap: spacing[4] }}>
      <CardInfoContent
        leftAsset="ColourIcon"
        leftSlot={<CoverDetailsColourIcon size={24} />}
        title="Cover level"
        description="[Key / Level 1]"
      />
      <CardInfoContent
        leftAsset="ColourIcon"
        leftSlot={<MembersColourIcon size={24} />}
        title="Membership no."
        description="[000000000000000]"
      />
      <CardInfoContent
        leftAsset="ColourIcon"
        leftSlot={<CalendarColourIcon size={24} />}
        title="Start date"
        description="[Key / Level 1]"
      />
    </Card>

    {/* ── 3. Resources and support ──────────────────────────────────────────── */}
    <Card overline="Resources and support" style={{ gap: spacing[4] }}>
      <CardInfoContent
        leftAsset="ColourIcon"
        leftSlot={<TalkColourIcon size={24} />}
        title="Talk to us"
        description="0345 606 6003"
        rightSlot={trailing}
      />
      <CardInfoContent
        leftAsset="ColourIcon"
        leftSlot={<HintsColourIcon size={24} />}
        title="Email us"
        rightSlot={trailing}
      />
      <CardInfoContent
        leftAsset="ColourIcon"
        leftSlot={<FAQColourIcon size={24} />}
        title="Find Bupa healthcare providers"
        rightSlot={trailing}
      />
    </Card>

    {/* ── 4. Included on your policy ────────────────────────────────────────── */}
    <Card overline="Included on your policy" style={{ gap: spacing[4] }}>
      <CardInfoContent
        title="[Full name]"
        description="[Relationship]"
        rightSlot={
          <Button colour="Primary" variant="Outline" size="Small">
            Invite
          </Button>
        }
      />
      <CardInfoContent title="[Full name]" description="[Relationship]" />
    </Card>

    {/* ── 5. Your health tools and services ────────────────────────────────── */}
    <div style={{ width: "100%" }}>
      <p
        style={{
          ...textStyles.label1Bold,
          lineHeight: `${textStyles.label1Bold.lineHeight}px`,
          letterSpacing: `${textStyles.label1Bold.letterSpacing}px`,
          color: colors.textPrimary,
          margin: 0,
          marginBottom: spacing[2],
        }}
      >
        Your health tools and services
      </p>
      <DragCarousel
        style={{
          display: "flex",
          gap: spacing[4],
          paddingBottom: spacing[2],
          // Extend flush to the MainLayout edges so cards bleed to padding
          marginLeft: -space.pagePaddingHorizontal,
          marginRight: -space.pagePaddingHorizontal,
          paddingLeft: space.pagePaddingHorizontal,
          paddingRight: space.pagePaddingHorizontal,
        }}
      >
        <TileImage
          imageSrc={phio}
          imageHeight={98}
          title="Phio."
          bodySlot={<ServiceBody text="Digital muscle & joint support" />}
        />
        <TileImage
          imageSrc={betterhelp}
          imageHeight={98}
          title="Betterhelp"
          bodySlot={<ServiceBody text="Online therapy & counselling" />}
        />
        <TileImage
          imageSrc={skinVision}
          imageHeight={98}
          title="SkinVision"
          bodySlot={<ServiceBody text="Skin health monitoring" />}
        />
      </DragCarousel>
    </div>

    {/* ── 6. Disclaimer ─────────────────────────────────────────────────────── */}
    <p
      style={{
        ...textStyles.label1Regular,
        lineHeight: `${textStyles.label1Regular.lineHeight}px`,
        letterSpacing: `${textStyles.label1Regular.letterSpacing}px`,
        color: palette.neutral600,
        margin: 0,
      }}
    >
      This is a group insurance product, should you have any questions about your cover, please contact your employer.
      {"\n\n"}
      Policies paid for by your employer may have implications on your tax status and take-home pay.
    </p>
  </>
);

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof SinglePageTemplate> = {
  title: "Screens/Examples/Health Cash Plan",
  component: SinglePageTemplate,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    referenceScreen: true,
    docs: {
      description: {
        component: `
## Health Cash Plan

A working example of a full product details page built from the
[Figma Product Details spec](https://www.figma.com/design/rcvmDvx5OVZQWEMMhhtqLa/Product-Details--Spec-?node-id=6239-736),
using \`SinglePageTemplate\` as the layout chassis.

### DS components used

| Section | Component |
|---------|-----------|
| Hero | \`HeroProductDetails\` (Bupa + YuLife co-brand logo) |
| Tile row | \`TileGroup\` with \`CoverDetailsColourIcon\`, \`PolicySummaryColourIcon\`, \`HintsColourIcon\` |
| Key info | \`Card\` (overline) + 3× \`CardInfoContent\` |
| Resources and support | \`Card\` + 3× \`CardInfoContent\` + \`RightIcon\` trailing |
| Included on your policy | \`Card\` + 2× \`CardInfoContent\` + \`Button\` (Outline / Small) |

### Assets

Service thumbnail images live in \`src/assets/services/\` and are imported
via the \`src/assets/services/index.ts\` barrel.
        `.trim(),
      },
    },
  },
  argTypes: {
    hero: { control: false },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof SinglePageTemplate>;

// ─── Story ────────────────────────────────────────────────────────────────────

/**
 * Health Cash Plan product page — Bupa + YuLife co-brand.
 *
 * Scroll to see the parallax overlap between hero and content.
 *
 * **Component gap:** `ServiceCarousel` (horizontally-scrollable service cards) — needs a DS component.
 *
 * Figma: https://www.figma.com/design/rcvmDvx5OVZQWEMMhhtqLa/Product-Details--Spec-?node-id=6239-736
 */
export const Default: Story = {
  args: {
    hero: (
      <HeroProductDetails
        backgroundImage={defaultHeroBackground}
        logo={<BupaYuLifeLogo />}
        heading="Health Cash Plan"
      />
    ),
    children: <HealthCashPlanContent />,
  },
};
