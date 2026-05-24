import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button } from "./button";
import { Icon, CheckIcon, StatusErrorIcon, StatusWarningIcon, StatusSuccessIcon, StatusInfoIcon } from "../../icons";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Button> = {
  title: "Inputs/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Button

The primary interactive element across the YuLife app. Supports two colour
schemes, three visual styles, two sizes, optional leading/trailing icons, and
enabled/disabled states.

| Prop | Values | Default |
|------|--------|---------|
| \`colour\` | \`Primary\` · \`Secondary\` | \`Primary\` |
| \`variant\` | \`Solid\` · \`Outline\` · \`Text\` | \`Solid\` |
| \`size\` | \`Large\` · \`Small\` | \`Large\` |
| \`disabled\` | \`true\` · \`false\` | \`false\` |

### When to use

- **Primary Solid** — main call-to-action; use once per screen.
- **Primary Outline / Text** — secondary actions alongside a Primary Solid CTA.
- **Secondary Solid** — actions on light/white surfaces where pink would be too prominent.
- **Secondary Outline / Text** — tertiary or destructive-adjacent actions.

### Figma reference

[YuLife App Storybook — Buttons](https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=12783-985)
        `,
      },
    },
  },
  argTypes: {
    colour: {
      control: "radio",
      options: ["Primary", "Secondary", "Success", "Warning", "Error", "Info"],
      description:
        "Colour scheme. Primary/Secondary are general-purpose; Success/Warning/Error/Info are status colours for use in InlineBanner.",
    },
    variant: {
      control: "radio",
      options: ["Solid", "Outline", "Text"],
      description: "Visual style.",
    },
    size: {
      control: "radio",
      options: ["Large", "Small"],
      description: "Large (48 px tall, 224 px wide) or Small (content-sized).",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button and applies muted styling.",
    },
    children: {
      control: "text",
      description: "Button label.",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ─── Default ──────────────────────────────────────────────────────────────────

/**
 * The standard primary call-to-action — Large, Primary Solid.
 */
export const Default: Story = {
  args: {
    children: "Button text",
  },
  parameters: {
    layout: "centered",
    docs: {
      description: { story: "Large Primary Solid — the default CTA style." },
    },
  },
};

// ─── Colour × Variant matrix ──────────────────────────────────────────────────

/**
 * All six colour × variant combinations at a glance.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {(["Primary", "Secondary"] as const).map((colour) =>
        (["Solid", "Outline", "Text"] as const).map((variant) => (
          <div key={`${colour}-${variant}`} style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ width: 160, fontSize: 12, color: "#5A5A5C", fontFamily: "sans-serif" }}>
              {colour} · {variant}
            </span>
            <Button colour={colour} variant={variant}>
              Button text
            </Button>
            <Button colour={colour} variant={variant} disabled={true}>
              Button text
            </Button>
          </div>
        ))
      )}
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "Every colour × variant combination, each shown enabled (left) and disabled (right).",
      },
    },
  },
};

// ─── Size ─────────────────────────────────────────────────────────────────────

/**
 * Both sizes side-by-side.
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Button size="Large">Large</Button>
      <Button size="Small">Small</Button>
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "Large (48 px, 224 px wide) and Small (content-sized) variants.",
      },
    },
  },
};

// ─── With icons ───────────────────────────────────────────────────────────────

/**
 * Buttons with a leading icon, trailing icon, or both.
 */
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Button leadingIcon={<Icon svg={CheckIcon} size={16} color="#FFFFFF" accessibilityLabel="" />}>
        Leading icon
      </Button>
      <Button trailingIcon={<Icon svg={CheckIcon} size={16} color="#FFFFFF" accessibilityLabel="" />}>
        Trailing icon
      </Button>
      <Button
        leadingIcon={<Icon svg={CheckIcon} size={16} color="#FFFFFF" accessibilityLabel="" />}
        trailingIcon={<Icon svg={CheckIcon} size={16} color="#FFFFFF" accessibilityLabel="" />}
      >
        Both icons
      </Button>
      <Button colour="Secondary" leadingIcon={<Icon svg={CheckIcon} size={16} color="#5A5A5C" accessibilityLabel="" />}>
        Secondary leading
      </Button>
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "Leading and trailing icon slots accept any `ReactNode` — typically an `<Icon>` from the design system.",
      },
    },
  },
};

// ─── Disabled ─────────────────────────────────────────────────────────────────

/**
 * All disabled states for Primary.
 */
export const DisabledPrimary: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <Button disabled={true}>Solid</Button>
      <Button variant="Outline" disabled={true}>
        Outline
      </Button>
      <Button variant="Text" disabled={true}>
        Text
      </Button>
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "Primary disabled states. Solid uses a lighter fill; Outline and Text reduce content opacity.",
      },
    },
  },
};

/**
 * All disabled states for Secondary.
 */
export const DisabledSecondary: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <Button colour="Secondary" disabled={true}>
        Solid
      </Button>
      <Button colour="Secondary" variant="Outline" disabled={true}>
        Outline
      </Button>
      <Button colour="Secondary" variant="Text" disabled={true}>
        Text
      </Button>
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "Secondary disabled states.",
      },
    },
  },
};

// ─── Status colours ───────────────────────────────────────────────────────────

/**
 * Status-coloured buttons used inside InlineBanner action slots.
 * These are always flat (no shadow, no press travel) and default to Solid.
 */
export const StatusColours: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {(["Error", "Warning", "Success", "Info"] as const).map((colour) => {
        const statusIcon = {
          Error: <Icon svg={StatusErrorIcon} size={16} color="#FFFFFF" accessibilityLabel="" />,
          Warning: <Icon svg={StatusWarningIcon} size={16} color="#FFFFFF" accessibilityLabel="" />,
          Success: <Icon svg={StatusSuccessIcon} size={16} color="#FFFFFF" accessibilityLabel="" />,
          Info: <Icon svg={StatusInfoIcon} size={16} color="#FFFFFF" accessibilityLabel="" />,
        }[colour];
        return (
          <div key={colour} style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ width: 80, fontSize: 12, color: "#5A5A5C", fontFamily: "sans-serif" }}>{colour}</span>
            <Button colour={colour} size="Small" leadingIcon={statusIcon}>
              Call to action
            </Button>
            <Button colour={colour} size="Small" leadingIcon={statusIcon} disabled={true}>
              Disabled
            </Button>
          </div>
        );
      })}
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story:
          "Status colour variants — flat buttons (no shadow) used as action buttons in InlineBanner. Each carries its matching status icon as a leading icon.",
      },
    },
  },
};

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    children: "Join challenge",
    colour: "Primary",
    variant: "Solid",
    size: "Large",
    disabled: false,
  },
};
