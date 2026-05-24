import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { UnorderedList, UnorderedListItem } from "./unordered-list";
import { CheckIcon, BulletIcon, StarFillIcon, StarLineIcon } from "../../icons";
import { palette } from "../../tokens/colors";

// ─── Meta ──────────────────────────────────────────────────────────────────────

const meta: Meta<typeof UnorderedList> = {
  title: "Typography/UnorderedList",
  component: UnorderedList,
  subcomponents: { UnorderedListItem },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;
type Story = StoryObj<typeof UnorderedList>;

// ─── Shared items ─────────────────────────────────────────────────────────────

const items = [
  "Complete your daily step goal",
  "Track your mindfulness session",
  "Log a healthy meal",
  "Hydrate — drink 8 glasses of water",
];

// ─── Checklist ────────────────────────────────────────────────────────────────

/** Checklist — the canonical usage from the Figma design, using `CheckIcon` as the marker. */
export const Checklist: Story = {
  name: "Checklist",
  render: () => (
    <UnorderedList marker={<CheckIcon width={24} height={24} />}>
      {items.map((item) => (
        <UnorderedListItem key={item}>{item}</UnorderedListItem>
      ))}
    </UnorderedList>
  ),
};

// ─── Bullet list ──────────────────────────────────────────────────────────────

/** Bullet list — using `BulletIcon` as the marker. */
export const BulletList: Story = {
  name: "Bullet list",
  render: () => (
    <UnorderedList marker={<BulletIcon width={24} height={24} />}>
      {items.map((item) => (
        <UnorderedListItem key={item}>{item}</UnorderedListItem>
      ))}
    </UnorderedList>
  ),
};

// ─── Star list ────────────────────────────────────────────────────────────────

/** Star list — using `StarFillIcon` as the marker. */
export const StarList: Story = {
  name: "Star list",
  render: () => (
    <UnorderedList marker={<StarFillIcon width={24} height={24} />}>
      {items.map((item) => (
        <UnorderedListItem key={item}>{item}</UnorderedListItem>
      ))}
    </UnorderedList>
  ),
};

// ─── Coloured markers ─────────────────────────────────────────────────────────

/**
 * Coloured markers — `markerColor` on `UnorderedList` tints every marker.
 * The `BulletIcon` and `StarLineIcon` use `fill="currentColor"` so they pick
 * up any CSS color automatically.
 */
export const ColouredMarkers: Story = {
  name: "Coloured markers",
  render: () => (
    <UnorderedList marker={<BulletIcon width={24} height={24} />} markerColor={palette.pink600}>
      {items.map((item) => (
        <UnorderedListItem key={item}>{item}</UnorderedListItem>
      ))}
    </UnorderedList>
  ),
};

// ─── Mixed markers ────────────────────────────────────────────────────────────

/**
 * Mixed markers — per-item `markerColor` overrides. Earned items show a filled
 * pink star; locked items use a muted outline star via both a different icon
 * and a different colour.
 */
export const MixedMarkers: Story = {
  name: "Mixed markers",
  render: () => (
    <UnorderedList marker={<StarFillIcon width={24} height={24} />} markerColor={palette.pink600}>
      <UnorderedListItem>Earned — daily step goal</UnorderedListItem>
      <UnorderedListItem>Earned — mindfulness session</UnorderedListItem>
      <UnorderedListItem marker={<StarLineIcon width={24} height={24} />} markerColor={palette.neutral400}>
        Locked — log a healthy meal
      </UnorderedListItem>
      <UnorderedListItem marker={<StarLineIcon width={24} height={24} />} markerColor={palette.neutral400}>
        Locked — drink 8 glasses of water
      </UnorderedListItem>
    </UnorderedList>
  ),
};
