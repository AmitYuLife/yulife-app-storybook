import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { InlineBanner } from "./inline-banner";
import type { InlineBannerStatus } from "./inline-banner";
import { NavigationHeader } from "../navigation-header";
import { ActionBar } from "../action-bar";
import type { ActionBarItem } from "../action-bar";
import { TodaysYuCoinIcon, MapIcon, HeartIcon, TrophyIcon, ChestIcon } from "../../icons";
import gameBackground from "../../assets/game-backgrounds/Earth/Planet=Earth, World=Forest, Challenge=None, Online=On, Section=YuCoin.png";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof InlineBanner> = {
  title: "Feedback/InlineBanner",
  component: InlineBanner,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
## InlineBanner

A contextual feedback component that communicates a status message with an optional
Yugi mascot icon, supporting text, an action button, and a dismiss control.

### Status variants

| Status | Border / Button | Background |
|--------|-----------------|------------|
| \`error\`   | \`feedbackDanger\`  (#FF5F5F) | \`dangerSurface\`  (#FFF2F2) |
| \`warning\` | \`feedbackWarning\` (#F19E22) | \`warningSurface\` (#FFF7E6) |
| \`success\` | \`feedbackSuccess\` (#66CC78) | \`successSurface\` (#ECF9EE) |
| \`info\`    | \`feedbackInfo\`    (#5A89D8) | \`infoSurface\`    (#E6EDF9) |

### Modes

- **\`"inline"\`** (default) — rendered in the document flow, suitable for form feedback
  and single-page layouts.
- **\`"toast"\`** — fixed at the bottom of the viewport with slide-up enter and slide-down
  exit animations. Controlled via the \`isVisible\` prop using the same pattern as
  \`ModalTemplate\`.

### Usage

\`\`\`tsx
import { InlineBanner } from "@/components";

// Inline
<InlineBanner
  status="error"
  title="Something went wrong"
  description="Please check your connection and try again."
  action={{ label: "Retry", onClick: handleRetry }}
/>

// Toast
<InlineBanner
  mode="toast"
  status="success"
  title="Saved!"
  isVisible={showToast}
  onDismiss={() => setShowToast(false)}
/>
\`\`\`

### Figma reference

[App — Core UI / InlineBanner](https://www.figma.com/design/aNnODOQlMlk38LrQVs63oq/App---Core-UI?node-id=7074-19458)
        `,
      },
    },
  },
  argTypes: {
    status: {
      control: "radio",
      options: ["error", "warning", "success", "info"],
      description: "Status determines the colour scheme and YugiStatus icon.",
    },
    title: { control: "text" },
    description: { control: "text" },
    showIcon: { control: "boolean" },
    mode: { control: "radio", options: ["inline", "toast"] },
  },
};

export default meta;
type Story = StoryObj<typeof InlineBanner>;

// ─── Default ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    status: "error",
    title: "Error notification",
    description:
      "Body text goes here. Ideally a minimum of two lines and a maximum of three lines of text or four without a title.",
    action: { label: "Call to action", onClick: () => {} },
  },
  parameters: {
    docs: { description: { story: "Default error banner with icon, title, description, and action button." } },
  },
};

// ─── All statuses ─────────────────────────────────────────────────────────────

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 393 }}>
      {(["error", "warning", "success", "info"] as InlineBannerStatus[]).map((status) => (
        <InlineBanner
          key={status}
          status={status}
          title={`${status.charAt(0).toUpperCase() + status.slice(1)} notification`}
          description="Body text goes here. Ideally a minimum of two lines and a maximum of three lines of text or four without a title."
          action={{ label: "Call to action", onClick: () => {} }}
        />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All four status variants — Error, Warning, Success, Info — each with icon, content, and action button.",
      },
    },
  },
};

// ─── Without icon ─────────────────────────────────────────────────────────────

export const WithoutIcon: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 393 }}>
      {(["error", "warning", "success", "info"] as InlineBannerStatus[]).map((status) => (
        <InlineBanner
          key={status}
          status={status}
          showIcon={false}
          title={`${status.charAt(0).toUpperCase() + status.slice(1)} notification`}
          description="Body text goes here. Ideally a minimum of two lines and a maximum of three lines of text or four without a title."
        />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Compact layout without the YugiStatus icon — suitable for tight spaces or when the icon is not needed.",
      },
    },
  },
};

// ─── Dismissable ──────────────────────────────────────────────────────────────

export const Dismissable: Story = {
  render: () => {
    const [visible, setVisible] = useState<Record<InlineBannerStatus, boolean>>({
      error: true,
      warning: true,
      success: true,
      info: true,
    });

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 393 }}>
        {(["error", "warning", "success", "info"] as InlineBannerStatus[]).map((status) =>
          visible[status] ? (
            <InlineBanner
              key={status}
              status={status}
              title={`${status.charAt(0).toUpperCase() + status.slice(1)} notification`}
              description="Body text goes here. Ideally a minimum of two lines and a maximum of three lines of text or four without a title."
              onDismiss={() => setVisible((v) => ({ ...v, [status]: false }))}
            />
          ) : (
            <div
              key={status}
              style={{
                height: 48,
                borderRadius: 16,
                background: "#F3F4F6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                color: "#9CA3AF",
                fontFamily: "sans-serif",
              }}
            >
              {status} banner dismissed
            </div>
          )
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Banners with a dismiss (×) button. Click to dismiss each one.",
      },
    },
  },
};

// ─── With action + dismiss ────────────────────────────────────────────────────

export const WithActionAndDismiss: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);
    return (
      <div style={{ maxWidth: 393 }}>
        {visible ? (
          <InlineBanner
            status="warning"
            title="Warning notification"
            description="Body text goes here. Ideally a minimum of two lines and a maximum of three lines of text or four without a title."
            action={{ label: "Call to action", onClick: () => {} }}
            onDismiss={() => setVisible(false)}
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
      description: { story: "Banner with both an action button and a dismiss control." },
    },
  },
};

// ─── Title only ───────────────────────────────────────────────────────────────

export const TitleOnly: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 393 }}>
      {(["error", "warning", "success", "info"] as InlineBannerStatus[]).map((status) => (
        <InlineBanner
          key={status}
          status={status}
          title={`${status.charAt(0).toUpperCase() + status.slice(1)} notification`}
        />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Minimal banners with only a title — no description, action, or dismiss.",
      },
    },
  },
};

// ─── Toast mode ───────────────────────────────────────────────────────────────

const STATUS_COLORS: Record<InlineBannerStatus, string> = {
  error: "#FF5F5F",
  warning: "#F19E22",
  success: "#66CC78",
  info: "#5A89D8",
};

const STATUS_LABELS: Record<InlineBannerStatus, string> = {
  error: "Something went wrong",
  warning: "Action required",
  success: "Challenge complete!",
  info: "New reward available",
};

const STATUS_DESCRIPTIONS: Record<InlineBannerStatus, string> = {
  error: "We couldn't save your progress. Please try again.",
  warning: "Your streak ends tonight. Complete a challenge to keep it alive.",
  success: "You earned 50 YuCoin for completing today's steps challenge.",
  info: "A new reward has been unlocked in your chest.",
};

const NAV_ITEMS: ActionBarItem[] = [
  { id: "yucoin", icon: TodaysYuCoinIcon, label: "YuCoin", accessibilityLabel: "YuCoin" },
  { id: "quests", icon: MapIcon, label: "Quests", accessibilityLabel: "Quests" },
  { id: "yu", icon: HeartIcon, label: "Yu", accessibilityLabel: "Yu" },
  { id: "leaderboard", icon: TrophyIcon, label: "Leaderboard", accessibilityLabel: "Leaderboard" },
  { id: "rewards", icon: ChestIcon, label: "Rewards", accessibilityLabel: "Rewards" },
];

/**
 * Self-contained demo component that builds a lightweight app shell — game
 * background, NavigationHeader, ActionBar — as a realistic backdrop behind the
 * toast, so you can see the animation and positioning in full in-app context.
 */
const ToastDemo: React.FC = () => {
  const [current, setCurrent] = useState<{ status: InlineBannerStatus; visible: boolean } | null>(null);
  const [activeTab, setActiveTab] = useState("yucoin");

  const show = (status: InlineBannerStatus) => {
    setCurrent({ status, visible: true });
  };

  const dismiss = () => {
    if (!current) {
      return;
    }

    setCurrent((c) => (c ? { ...c, visible: false } : null));
    setTimeout(() => setCurrent(null), 250);
  };

  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden", position: "relative" }}>
      {/* ── Game background ───────────────────────────────────────────────── */}
      <img
        aria-hidden={true}
        alt=""
        src={gameBackground}
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* ── Navigation header ─────────────────────────────────────────────── */}
      <NavigationHeader darkMode={false} />

      {/* ── Trigger panel — floats in the middle of the screen ───────────── */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: 16,
          right: 16,
          transform: "translateY(-50%)",
          zIndex: 500,
          background: "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: 16,
          padding: "14px 16px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.4px",
            color: "#5A5A5C",
            fontFamily: "Inter, system-ui, sans-serif",
            textTransform: "uppercase",
          }}
        >
          Trigger a toast
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          {(["success", "info", "warning", "error"] as InlineBannerStatus[]).map((status) => (
            <button
              key={status}
              onClick={() => show(status)}
              style={{
                flex: 1,
                padding: "8px 0",
                borderRadius: 20,
                border: "none",
                background: STATUS_COLORS[status],
                color: "#fff",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.3px",
                cursor: "pointer",
                fontFamily: "Inter, system-ui, sans-serif",
                textTransform: "capitalize",
              }}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* ── Action bar ────────────────────────────────────────────────────── */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, padding: "0 16px", zIndex: 100 }}>
        <ActionBar items={NAV_ITEMS} activeId={activeTab} onPress={setActiveTab} />
      </div>

      {/* ── Toast — fixed at bottom, zIndex above everything ─────────────── */}
      {current && (
        <InlineBanner
          mode="toast"
          status={current.status}
          isVisible={current.visible}
          title={STATUS_LABELS[current.status]}
          description={STATUS_DESCRIPTIONS[current.status]}
          onDismiss={dismiss}
        />
      )}
    </div>
  );
};

export const Toast: Story = {
  render: () => <ToastDemo />,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "iphone15" },
    docs: {
      description: {
        story: `
Toast mode fixes the banner at the bottom of the viewport (24 px from all edges) with enter/exit animations:

- **Enter**: slides up from off-screen + fades in (\`slow\` duration, \`enter\` easing)
- **Exit**: slides back down + fades out (\`exit\` duration, \`exit\` easing)

The story renders the **HomeScreen** as a full-screen app backdrop so you can see the
toast in context. Tap any status button in the trigger panel to fire a notification.
The \`isVisible\` prop controls the animation — same pattern as \`ModalTemplate\`.
        `,
      },
    },
  },
};

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    status: "info",
    title: "Informational notification",
    description:
      "Body text goes here. Ideally a minimum of two lines and a maximum of three lines of text or four without a title.",
    showIcon: true,
    action: { label: "Call to action", onClick: () => {} },
  },
  parameters: {
    docs: {
      description: { story: "Use the controls panel to explore all prop combinations." },
    },
  },
};
