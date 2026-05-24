import { useEffect, useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Popover } from "./popover";
import type { PopoverBeakDirection, PopoverBeakPosition } from "./popover";
import { ActionBar } from "../action-bar";
import type { ActionBarItem } from "../action-bar";
import { TodaysYuCoinIcon, MapIcon, HeartIcon, TrophyIcon, ChestIcon } from "../../icons";
import gameBackground from "../../assets/game-backgrounds/Earth/Planet=Earth, World=Forest, Challenge=None, Online=On, Section=YuCoin.png";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Popover> = {
  title: "Feedback/Popover",
  component: Popover,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
## Popover

A floating tooltip / onboarding bubble that renders elevated above all other content.
Supports a directional beak (arrow) on any of the four cardinal edges, an optional
call-to-action button, and an optional close button.

### Use cases

- **Tooltip** — shown on button press to provide contextual help.
- **POI onboarding tour** — sequenced steps that highlight UI points of interest
  and guide the user through a feature.

### Beak directions

The \`beakDirection\` prop places the triangular arrow on one edge of the bubble.
Use this to visually anchor the popover to the element it describes.

| Value | Arrow points toward |
|-------|---------------------|
| \`"top"\`    | up (bubble is below the trigger) |
| \`"right"\`  | right (bubble is to the left of the trigger) |
| \`"bottom"\` | down (bubble is above the trigger) |
| \`"left"\`   | left (bubble is to the right of the trigger) |
| \`"none"\`   | no beak (free-floating bubble) |

### Animation

When \`isVisible\` is provided, the popover fades in and rises up on entry, then
fades out and falls down on exit — matching the system enter/exit animation tokens.

### Dismiss behaviour

When \`onDismiss\` is provided an invisible full-screen overlay captures taps outside
the bubble. Set \`showCloseButton\` to also show a × button inside the bubble.

### Usage

\`\`\`tsx
import { Popover } from "@/components";

// Tooltip (no animation — parent mounts/unmounts)
<Popover
  title="New feature"
  description="Tap here to explore your activity summary."
  beakDirection="bottom"
  action={{ label: "Got it", onClick: handleDismiss }}
/>

// Onboarding step (animated, with close and outside-tap dismiss)
<Popover
  title="Step 1 of 3"
  description="Complete a challenge to earn YuCoin."
  beakDirection="top"
  isVisible={visible}
  onDismiss={() => setVisible(false)}
  showCloseButton
  action={{ label: "Next", onClick: handleNext }}
/>
\`\`\`

### Figma reference

[YuLife App Storybook — Popover](https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=9314-19961)
        `,
      },
    },
  },
  argTypes: {
    beakDirection: {
      control: "radio",
      options: ["top", "right", "bottom", "left", "none"],
      description: "Which edge the beak protrudes from.",
    },
    beakPosition: {
      control: "radio",
      options: ["start", "center", "end"],
      description: "Where along the beak edge the beak is placed.",
    },
    title: { control: "text" },
    description: { control: "text" },
    showCloseButton: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

// ─── Default ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    title: "Your heading here.",
    description: "Your popover description here. This should be no longer than 4 lines long.",
    beakDirection: "bottom",
    action: { label: "Button text", onClick: () => {} },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default popover with a downward beak, heading, description, and action button — as shown in the Figma spec.",
      },
    },
  },
};

// ─── Beak directions ──────────────────────────────────────────────────────────

const BEAK_DIRECTIONS: PopoverBeakDirection[] = ["top", "right", "bottom", "left"];

export const BeakDirections: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 240px)",
        gap: 48,
        padding: 32,
      }}
    >
      {BEAK_DIRECTIONS.map((dir) => (
        <div key={dir} style={{ padding: 12 }}>
          <Popover
            title="Your heading here."
            description="Your popover description here. This should be no longer than 4 lines long."
            beakDirection={dir}
            action={{ label: "Button text", onClick: () => {} }}
          />
          <p
            style={{
              marginTop: 8,
              fontSize: 11,
              color: "#9CA3AF",
              fontFamily: "monospace",
              textAlign: "center",
            }}
          >
            {`beakDirection="${dir}"`}
          </p>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All four cardinal beak directions. Position the popover so the beak points toward the trigger element.",
      },
    },
  },
};

// ─── No beak ──────────────────────────────────────────────────────────────────

export const NoBeak: Story = {
  args: {
    title: "Your heading here.",
    description: "Your popover description here. This should be no longer than 4 lines long.",
    beakDirection: "none",
    action: { label: "Button text", onClick: () => {} },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Popover without a beak — useful when the popover is centred on screen rather than anchored to a specific element.",
      },
    },
  },
};

// ─── Beak positions ───────────────────────────────────────────────────────────

export const BeakPositions: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 40, padding: 20 }}>
      {(["start", "center", "end"] as const).map((pos) => (
        <div key={pos}>
          <Popover
            title={`beakPosition="${pos}"`}
            description="Beak alignment along the top edge."
            beakDirection="top"
            beakPosition={pos}
          />
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Beak alignment: `start` (left-aligned), `center` (default), and `end` (right-aligned) on the top edge.",
      },
    },
  },
};

// ─── With close button ────────────────────────────────────────────────────────

export const WithCloseButton: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);
    return (
      <div style={{ minHeight: 200, padding: 16 }}>
        {visible ? (
          <Popover
            title="Your heading here."
            description="Your popover description here. This should be no longer than 4 lines long."
            beakDirection="bottom"
            onDismiss={() => setVisible(false)}
            showCloseButton={true}
            action={{ label: "Button text", onClick: () => {} }}
          />
        ) : (
          <button
            onClick={() => setVisible(true)}
            style={{ fontSize: 13, color: "#5A89D8", background: "none", border: "none", cursor: "pointer" }}
          >
            Reset
          </button>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Popover with `showCloseButton` enabled. The × button calls `onDismiss`.",
      },
    },
  },
};

// ─── Title only ───────────────────────────────────────────────────────────────

export const TitleOnly: Story = {
  args: {
    title: "Your heading here.",
    beakDirection: "bottom",
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal popover with only a heading — no description, action, or close button.",
      },
    },
  },
};

// ─── Action bar tour demo ─────────────────────────────────────────────────────

const NAV_ITEMS: ActionBarItem[] = [
  { id: "yucoin", icon: TodaysYuCoinIcon, label: "YuCoin", accessibilityLabel: "YuCoin" },
  { id: "quests", icon: MapIcon, label: "Quests", accessibilityLabel: "Quests" },
  { id: "yu", icon: HeartIcon, label: "Yu", accessibilityLabel: "Yu" },
  { id: "leaderboard", icon: TrophyIcon, label: "Leaderboard", accessibilityLabel: "Leaderboard" },
  { id: "rewards", icon: ChestIcon, label: "Rewards", accessibilityLabel: "Rewards" },
];

const TOUR_STEPS = [
  {
    itemId: "yucoin",
    title: "YuCoin",
    description: "Earn YuCoin by completing daily health challenges. Spend them in the rewards store.",
  },
  {
    itemId: "quests",
    title: "Quests",
    description: "Take on multi-day quests for bonus YuCoin and exclusive rewards.",
  },
  {
    itemId: "yu",
    title: "Yu",
    description: "Track your wellbeing score across steps, sleep, mindfulness, and more.",
  },
  {
    itemId: "leaderboard",
    title: "Leaderboard",
    description: "See how you rank against colleagues and friends this week.",
  },
  {
    itemId: "rewards",
    title: "Rewards",
    description: "Redeem your YuCoin for vouchers, experiences, and charitable donations.",
  },
];

/**
 * Measures the centre X and top Y of a child button at a given index inside
 * a container element. Returns null if the container or buttons are not yet
 * in the DOM.
 */
function measureButton(container: HTMLElement | null, index: number): { centerX: number; top: number } | null {
  if (!container) {
    return null;
  }

  const buttons = container.querySelectorAll<HTMLButtonElement>("button");
  const btn = buttons[index];
  if (!btn) {
    return null;
  }

  const r = btn.getBoundingClientRect();
  return { centerX: r.left + r.width / 2, top: r.top };
}

const ActionBarTourComponent: React.FC = () => {
  const [step, setStep] = useState<number | null>(null);
  const [popoverPos, setPopoverPos] = useState<{ left: number; bottom: number } | null>(null);
  const [beakPos, setBeakPos] = useState<PopoverBeakPosition>("center");
  const navRef = useRef<HTMLDivElement>(null);

  const active = step !== null ? TOUR_STEPS[step] : null;
  const POPOVER_WIDTH = 240;
  const POPOVER_GAP = 12; // gap between action bar top and popover bottom

  // Re-measure whenever the step changes so the popover snaps to the correct tab.
  useEffect(() => {
    if (step === null) {
      setPopoverPos(null);
      return;
    }

    const measure = () => {
      const pos = measureButton(navRef.current, step);
      if (!pos) {
        return;
      }

      const vpW = window.innerWidth;
      const MARGIN = 16;
      const rawLeft = pos.centerX - POPOVER_WIDTH / 2;
      const maxLeft = vpW - POPOVER_WIDTH - MARGIN;
      const clampedLeft = Math.max(MARGIN, Math.min(rawLeft, maxLeft));

      // When the popover is pushed away from the tab centre due to screen-edge
      // clamping, shift the beak to point toward where the tab actually is.
      const newBeakPos: PopoverBeakPosition = rawLeft < MARGIN ? "start" : rawLeft > maxLeft ? "end" : "center";

      setBeakPos(newBeakPos);
      setPopoverPos({
        left: clampedLeft,
        bottom: window.innerHeight - pos.top + POPOVER_GAP,
      });
    };

    // Measure after the browser has painted the step change.
    const raf = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(raf);
  }, [step]);

  const handleStart = () => setStep(0);

  const handleNext = () => {
    if (step === null) {
      return;
    }

    if (step < TOUR_STEPS.length - 1) {
      setStep(step + 1);
    } else {
      handleDismiss();
    }
  };

  const handleDismiss = () => {
    setStep(null);
    setPopoverPos(null);
  };

  const isRunning = step !== null;

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative", overflow: "hidden" }}>
      {/* Background */}
      <img
        aria-hidden={true}
        alt=""
        src={gameBackground}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
      />

      {/* Dim overlay while tour is active */}
      {isRunning && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: "rgba(0,0,0,0.45)",
            transition: "opacity 200ms ease",
          }}
        />
      )}

      {/* Start button — visible only when tour is not running */}
      {!isRunning && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={handleStart}
            style={{
              padding: "14px 32px",
              borderRadius: 9999,
              background: "#E30D76",
              color: "#fff",
              border: "none",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.4px",
              cursor: "pointer",
              fontFamily: "system-ui, sans-serif",
              boxShadow: "0 4px 0 #900860",
            }}
          >
            Start tour
          </button>
        </div>
      )}

      {/* Action bar — always visible at the bottom.
          z-index 1201: above the Popover's dismiss overlay (1200) so tabs
          remain tappable, but below the popover card (1203). */}
      <div
        ref={navRef}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1201,
          padding: "0 16px",
        }}
      >
        <ActionBar
          items={NAV_ITEMS}
          activeId={active?.itemId ?? "yucoin"}
          onPress={(id) => {
            const idx = TOUR_STEPS.findIndex((s) => s.itemId === id);
            if (idx !== -1) {
              setStep(idx);
            }
          }}
        />
      </div>

      {/* Popover — positioned directly via the style prop so its dismiss
          overlay renders as a true document-level fixed element at z-1200,
          while the card itself sits at z-1203 above the action bar.
          Wrapping in a positioned div would create a stacking context that
          traps both the overlay and the card at the wrapper's z-level. */}
      {isRunning && active && popoverPos && (
        <Popover
          title={active.title}
          description={active.description}
          beakDirection="bottom"
          beakPosition={beakPos}
          isVisible={isRunning}
          onDismiss={handleDismiss}
          showCloseButton={true}
          action={{
            label: step < TOUR_STEPS.length - 1 ? `Next (${step + 1}/${TOUR_STEPS.length})` : "Done",
            onClick: handleNext,
          }}
          style={{
            position: "fixed",
            left: popoverPos.left,
            bottom: popoverPos.bottom,
            width: POPOVER_WIDTH,
            zIndex: 1203,
          }}
        />
      )}
    </div>
  );
};

export const DismissDemo: Story = {
  render: () => <ActionBarTourComponent />,
  name: "Action Bar Tour",
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "iphone15" },
    docs: {
      description: {
        story: `
An onboarding tour that walks the user through each tab in the action bar one at a time.

- The popover anchors above the highlighted tab with a downward beak
- **Next** advances through all five tabs; **Done** (on the last step) closes the tour
- Tapping outside or the × button exits the tour at any point
- The action bar remains interactive during the tour — tapping a tab jumps directly to that step
        `,
      },
    },
  },
};

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    title: "Your heading here.",
    description: "Your popover description here. This should be no longer than 4 lines long.",
    beakDirection: "bottom",
    beakPosition: "center",
    showCloseButton: false,
    action: { label: "Button text", onClick: () => {} },
  },
  parameters: {
    docs: {
      description: { story: "Use the controls panel to explore all prop combinations." },
    },
  },
};
