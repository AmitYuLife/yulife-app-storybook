import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Icon } from "./icon";
import type { IconSize } from "./icon";

import AccountIcon from "./svg/Account.svg?react";
import ActivityHistoryIcon from "./svg/ActivityHistory.svg?react";
import AddIcon from "./svg/Add.svg?react";
import AvailableRewardsIcon from "./svg/AvailableRewards.svg?react";
import BulletIcon from "./svg/Bullet.svg?react";
import CalendarIcon from "./svg/Calendar.svg?react";
import CaretIcon from "./svg/Caret.svg?react";
import ChatHelpIcon from "./svg/ChatHelp.svg?react";
import CheckIcon from "./svg/Check.svg?react";
import ChestIcon from "./svg/Chest.svg?react";
import ClockIcon from "./svg/Clock.svg?react";
import CloseIcon from "./svg/Close.svg?react";
import CoinStackIcon from "./svg/CoinStack.svg?react";
import CyclingIcon from "./svg/Cycling.svg?react";
import DownIcon from "./svg/Down.svg?react";
import DropIcon from "./svg/Drop.svg?react";
import EmotionIcon from "./svg/Emotion.svg?react";
import FiitIcon from "./svg/Fiit.svg?react";
import HamburgerIcon from "./svg/Hamburger.svg?react";
import HeartIcon from "./svg/Heart.svg?react";
import InfoIcon from "./svg/Info.svg?react";
import InviteIcon from "./svg/Invite.svg?react";
import LeftIcon from "./svg/Left.svg?react";
import LevelIcon from "./svg/Level.svg?react";
import LogOutIcon from "./svg/LogOut.svg?react";
import MapIcon from "./svg/Map.svg?react";
import MealIcon from "./svg/Meal.svg?react";
import MindfulnessIcon from "./svg/Mindfulness.svg?react";
import PigIcon from "./svg/Pig.svg?react";
import PlantIcon from "./svg/Plant.svg?react";
import PlasticIcon from "./svg/Plastic.svg?react";
import QuestionOutlineIcon from "./svg/QuestionOutline.svg?react";
import RightIcon from "./svg/Right.svg?react";
import SettingsGearIcon from "./svg/SettingsGear.svg?react";
import SleepIcon from "./svg/Sleep.svg?react";
import SmartPensionIcon from "./svg/SmartPension.svg?react";
import StarFillIcon from "./svg/StarFill.svg?react";
import StarLineIcon from "./svg/StarLine.svg?react";
import StatusInfoIcon from "./svg/StatusInfo.svg?react";
import StatusSuccessIcon from "./svg/StatusSuccess.svg?react";
import StatusErrorIcon from "./svg/StatusError.svg?react";
import StatusWarningIcon from "./svg/StatusWarning.svg?react";
import StreakIcon from "./svg/Streak.svg?react";
import TodaysYuCoinIcon from "./svg/TodaysYuCoin.svg?react";
import TreasureChestIcon from "./svg/TreasureChest.svg?react";
import TrophyIcon from "./svg/Trophy.svg?react";
import UnityIcon from "./svg/Unity.svg?react";
import UpIcon from "./svg/Up.svg?react";
import WellbeingHubIcon from "./svg/WellbeingHub.svg?react";
import WorldIcon from "./svg/World.svg?react";
import YugiHeadIcon from "./svg/YugiHead.svg?react";
import YudokuIcon from "./svg/Yudoku.svg?react";
import YuniversityIcon from "./svg/Yuniversity.svg?react";

// ─── Icon catalogue ───────────────────────────────────────────────────────────

type IconEntry = {
  name: string;
  export: string;
  component: React.FC<React.SVGProps<SVGSVGElement>>;
  category: string;
  tags: string;
};

const ALL_ICONS: IconEntry[] = [
  {
    name: "Account",
    export: "AccountIcon",
    component: AccountIcon,
    category: "Line Icons",
    tags: "profile user person settings login identity",
  },
  {
    name: "Activity History",
    export: "ActivityHistoryIcon",
    component: ActivityHistoryIcon,
    category: "Line Icons",
    tags: "history log past activity record timeline progress",
  },
  { name: "Add", export: "AddIcon", component: AddIcon, category: "Line Icons", tags: "plus create new more increase" },
  {
    name: "Available Rewards",
    export: "AvailableRewardsIcon",
    component: AvailableRewardsIcon,
    category: "Line Icons",
    tags: "rewards available gift claim earn voucher unlock",
  },
  {
    name: "Bullet",
    export: "BulletIcon",
    component: BulletIcon,
    category: "Line Icons",
    tags: "dot point list item marker",
  },
  {
    name: "Calendar",
    export: "CalendarIcon",
    component: CalendarIcon,
    category: "Line Icons",
    tags: "date schedule month planner events agenda time",
  },
  {
    name: "Caret",
    export: "CaretIcon",
    component: CaretIcon,
    category: "Line Icons",
    tags: "arrow dropdown expand chevron select",
  },
  {
    name: "Chat Help",
    export: "ChatHelpIcon",
    component: ChatHelpIcon,
    category: "Line Icons",
    tags: "chat help support question ask message assistance",
  },
  {
    name: "Check",
    export: "CheckIcon",
    component: CheckIcon,
    category: "Line Icons",
    tags: "done ready complete finish tick mark",
  },
  {
    name: "Chest",
    export: "ChestIcon",
    component: ChestIcon,
    category: "Line Icons",
    tags: "treasure reward loot yucoins prize achievement",
  },
  {
    name: "Clock",
    export: "ClockIcon",
    component: ClockIcon,
    category: "Line Icons",
    tags: "time hour minute schedule timer watch",
  },
  {
    name: "Close",
    export: "CloseIcon",
    component: CloseIcon,
    category: "Line Icons",
    tags: "exit x cancel dismiss remove",
  },
  {
    name: "Coin Stack",
    export: "CoinStackIcon",
    component: CoinStackIcon,
    category: "Line Icons",
    tags: "coins yucoins money points earn rewards balance",
  },
  {
    name: "Cycling",
    export: "CyclingIcon",
    component: CyclingIcon,
    category: "Line Icons",
    tags: "bike bicycle wheels ride exercise sport fitness",
  },
  {
    name: "Down",
    export: "DownIcon",
    component: DownIcon,
    category: "Line Icons",
    tags: "arrow direction bottom navigate scroll",
  },
  {
    name: "Drop",
    export: "DropIcon",
    component: DropIcon,
    category: "Line Icons",
    tags: "water drop h2o drink hydrate humidity health",
  },
  {
    name: "Emotion",
    export: "EmotionIcon",
    component: EmotionIcon,
    category: "Line Icons",
    tags: "mood feel happy sad feeling wellbeing mental health",
  },
  {
    name: "Fiit",
    export: "FiitIcon",
    component: FiitIcon,
    category: "Line Icons",
    tags: "workout fitness exercise training gym hiit",
  },
  {
    name: "Hamburger",
    export: "HamburgerIcon",
    component: HamburgerIcon,
    category: "Line Icons",
    tags: "menu list navigation sidebar drawer",
  },
  {
    name: "Heart",
    export: "HeartIcon",
    component: HeartIcon,
    category: "Line Icons",
    tags: "love health favourite like care life",
  },
  {
    name: "Info",
    export: "InfoIcon",
    component: InfoIcon,
    category: "Line Icons",
    tags: "information more read explain describe guide detail",
  },
  {
    name: "Invite",
    export: "InviteIcon",
    component: InviteIcon,
    category: "Line Icons",
    tags: "add invite share join send friend refer",
  },
  {
    name: "Left",
    export: "LeftIcon",
    component: LeftIcon,
    category: "Line Icons",
    tags: "arrow direction back previous navigate",
  },
  {
    name: "Level",
    export: "LevelIcon",
    component: LevelIcon,
    category: "Line Icons",
    tags: "level up progress achievement rank tier xp",
  },
  {
    name: "Log Out",
    export: "LogOutIcon",
    component: LogOutIcon,
    category: "Line Icons",
    tags: "leave exit sign out logout arrow",
  },
  {
    name: "Map",
    export: "MapIcon",
    component: MapIcon,
    category: "Line Icons",
    tags: "quest guide world journey navigate location explore",
  },
  {
    name: "Meal",
    export: "MealIcon",
    component: MealIcon,
    category: "Line Icons",
    tags: "food nutrition eat diet health energy meal",
  },
  {
    name: "Mindfulness",
    export: "MindfulnessIcon",
    component: MindfulnessIcon,
    category: "Line Icons",
    tags: "meditation mind calm breathe relax zen focus",
  },
  {
    name: "Pig",
    export: "PigIcon",
    component: PigIcon,
    category: "Line Icons",
    tags: "pig savings piggy bank money finance",
  },
  {
    name: "Plant",
    export: "PlantIcon",
    component: PlantIcon,
    category: "Line Icons",
    tags: "tree nature plant esg green environment forest",
  },
  {
    name: "Plastic",
    export: "PlasticIcon",
    component: PlasticIcon,
    category: "Line Icons",
    tags: "ocean plastic trash planet save esg waste rubbish",
  },
  {
    name: "Question Outline",
    export: "QuestionOutlineIcon",
    component: QuestionOutlineIcon,
    category: "Line Icons",
    tags: "question help ask faq support unknown query",
  },
  {
    name: "Right",
    export: "RightIcon",
    component: RightIcon,
    category: "Line Icons",
    tags: "arrow direction forward next navigate continue",
  },
  {
    name: "Settings Gear",
    export: "SettingsGearIcon",
    component: SettingsGearIcon,
    category: "Line Icons",
    tags: "settings configure gear tools preferences cog",
  },
  {
    name: "Sleep",
    export: "SleepIcon",
    component: SleepIcon,
    category: "Line Icons",
    tags: "rest night moon bed nap recovery wellness",
  },
  {
    name: "Smart Pension",
    export: "SmartPensionIcon",
    component: SmartPensionIcon,
    category: "Line Icons",
    tags: "smart pension savings retirement finance",
  },
  {
    name: "Star Fill",
    export: "StarFillIcon",
    component: StarFillIcon,
    category: "Line Icons",
    tags: "star favourite saved bookmarked important rating filled",
  },
  {
    name: "Star Line",
    export: "StarLineIcon",
    component: StarLineIcon,
    category: "Line Icons",
    tags: "star favourite save bookmark important rating",
  },
  {
    name: "Status Error",
    export: "StatusErrorIcon",
    component: StatusErrorIcon,
    category: "Line Icons",
    tags: "status error danger alert exclamation red circle",
  },
  {
    name: "Status Info",
    export: "StatusInfoIcon",
    component: StatusInfoIcon,
    category: "Line Icons",
    tags: "status information notice alert blue",
  },
  {
    name: "Status Success",
    export: "StatusSuccessIcon",
    component: StatusSuccessIcon,
    category: "Line Icons",
    tags: "status success complete done check green ok",
  },
  {
    name: "Status Warning",
    export: "StatusWarningIcon",
    component: StatusWarningIcon,
    category: "Line Icons",
    tags: "status warning caution triangle exclamation amber",
  },
  {
    name: "Streak",
    export: "StreakIcon",
    component: StreakIcon,
    category: "Line Icons",
    tags: "days consecutive calendar challenge fire progress habit",
  },
  {
    name: "Todays YuCoin",
    export: "TodaysYuCoinIcon",
    component: TodaysYuCoinIcon,
    category: "Line Icons",
    tags: "yucoin coin daily today earn points reward",
  },
  {
    name: "Treasure Chest",
    export: "TreasureChestIcon",
    component: TreasureChestIcon,
    category: "Line Icons",
    tags: "treasure chest reward loot yucoins prize achievement open",
  },
  {
    name: "Trophy",
    export: "TrophyIcon",
    component: TrophyIcon,
    category: "Line Icons",
    tags: "win winner achievement gold leaderboard prize",
  },
  {
    name: "Unity",
    export: "UnityIcon",
    component: UnityIcon,
    category: "Line Icons",
    tags: "team together community people collaboration social",
  },
  {
    name: "Up",
    export: "UpIcon",
    component: UpIcon,
    category: "Line Icons",
    tags: "arrow direction top navigate scroll",
  },
  {
    name: "Wellbeing Hub",
    export: "WellbeingHubIcon",
    component: WellbeingHubIcon,
    category: "Line Icons",
    tags: "health wellness centre dashboard portal hub resources benefits",
  },
  {
    name: "World",
    export: "WorldIcon",
    component: WorldIcon,
    category: "Line Icons",
    tags: "globe world planet web site link international",
  },
  {
    name: "Yugi Head",
    export: "YugiHeadIcon",
    component: YugiHeadIcon,
    category: "Line Icons",
    tags: "yugi character avatar head yulife mascot",
  },
  {
    name: "Yudoku",
    export: "YudokuIcon",
    component: YudokuIcon,
    category: "Line Icons",
    tags: "puzzle game brain sudoku challenge",
  },
  {
    name: "Yuniversity",
    export: "YuniversityIcon",
    component: YuniversityIcon,
    category: "Line Icons",
    tags: "learn education course school study university yulife",
  },
];

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: "Foundations/Iconography/Line Icons",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
## Line Icons

Single-colour icons exported from the [App — Iconography](https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography) Figma file.

Line Icons use \`currentColor\` and respond to any CSS colour value, making them fully themeable.

### Usage

\`\`\`tsx
import { Icon, HeartIcon } from "@/icons";

<Icon svg={HeartIcon} size={24} color="#DC2626" accessibilityLabel="Health" />
\`\`\`

### Sizes

| Token | px |
|-------|----|
| xs | 16 |
| sm | 20 |
| md | 24 (default) |
| lg | 28 |
| xl | 32 |

### Adding an icon

1. Export the SVG from Figma at 24 × 24.
2. Drop it in \`src/icons/svg/\`.
3. Add an export to \`src/icons/index.ts\`.
4. Add an entry to the \`ALL_ICONS\` array in \`Icons.stories.tsx\`.
5. Add a \`figma.connect()\` call in \`Icons.figma.ts\`.
        `,
      },
    },
  },
};

export default meta;

// ─── Line Icons gallery ───────────────────────────────────────────────────────

const IconGallery = ({ size, color }: { size: IconSize; color: string }) => {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const categories = [...new Set(ALL_ICONS.map((i) => i.category))];

  const filtered = ALL_ICONS.filter(
    (icon) => icon.name.toLowerCase().includes(query.toLowerCase()) || icon.tags.includes(query.toLowerCase())
  );

  const grouped = categories.reduce<Record<string, IconEntry[]>>((acc, cat) => {
    const items = filtered.filter((i) => i.category === cat);
    if (items.length) {
      acc[cat] = items;
    }

    return acc;
  }, {});

  function handleCopy(entry: IconEntry) {
    navigator.clipboard.writeText(`import { ${entry.export} } from "@/icons";`).then(() => {
      setCopied(entry.name);
      setTimeout(() => setCopied(null), 1800);
    });
  }

  return (
    <div style={{ padding: "24px", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ marginBottom: 24 }}>
        <input
          type="search"
          placeholder={"Search icons\u2026 (try \u201cheart\u201d, \u201carrow\u201d, \u201cmoon\u201d)"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            maxWidth: 440,
            padding: "10px 14px",
            fontSize: 14,
            border: "1.5px solid #E5E5E5",
            borderRadius: 8,
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {Object.entries(grouped).map(([category, icons]) => (
        <div key={category} style={{ marginBottom: 40 }}>
          <h3
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#9CA3AF",
              marginBottom: 12,
              borderBottom: "1px solid #F3F4F6",
              paddingBottom: 8,
            }}
          >
            {category} <span style={{ fontWeight: 400 }}>({icons.length})</span>
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
              gap: 10,
            }}
          >
            {icons.map((icon) => (
              <button
                key={icon.name}
                title={`Click to copy import\nimport { ${icon.export} } from "@/icons";`}
                onClick={() => handleCopy(icon)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  padding: "16px 8px 12px",
                  border: "1.5px solid",
                  borderColor: copied === icon.name ? "#0066FF" : "#F0F0F0",
                  borderRadius: 10,
                  background: copied === icon.name ? "#EFF6FF" : "#FAFAFA",
                  cursor: "pointer",
                  transition: "all 0.12s ease",
                }}
              >
                <Icon svg={icon.component} size={size} color={copied === icon.name ? "#0066FF" : color} />
                <span
                  style={{
                    fontSize: 10,
                    color: copied === icon.name ? "#0066FF" : "#374151",
                    fontWeight: 500,
                    textAlign: "center",
                    lineHeight: 1.3,
                    wordBreak: "break-word",
                  }}
                >
                  {copied === icon.name ? "Copied!" : icon.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}

      {Object.keys(grouped).length === 0 && (
        <p style={{ color: "#9CA3AF", textAlign: "center", marginTop: 48, fontSize: 15 }}>
          No icons match &ldquo;{query}&rdquo;
        </p>
      )}
    </div>
  );
};

export const LineIcons: StoryObj<{ size: IconSize; color: string }> = {
  name: "Line Icons",
  args: { size: 24, color: "#1A1A1A" },
  argTypes: {
    size: { control: { type: "select" }, options: [16, 20, 24, 28, 32], description: "Icon size in pixels" },
    color: { control: { type: "color" }, description: "Icon colour" },
  },
  render: (args) => <IconGallery size={args.size} color={args.color} />,
};

// ─── Size scale ───────────────────────────────────────────────────────────────

export const SizeScale: StoryObj = {
  name: "Size Scale",
  render: () => (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 32, padding: 40, flexWrap: "wrap" }}>
      {([16, 20, 24, 28, 32] as IconSize[]).map((s) => (
        <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <Icon svg={HeartIcon} size={s} color="#1A1A1A" />
          <span style={{ fontSize: 11, color: "#9CA3AF" }}>{s}px</span>
        </div>
      ))}
    </div>
  ),
  parameters: { docs: { description: { story: "Five canonical icon sizes." } } },
};

// ─── Colour variants ──────────────────────────────────────────────────────────

export const ColourVariants: StoryObj = {
  name: "Colour Variants",
  render: () => {
    const colours = [
      { label: "Default", value: "#1A1A1A" },
      { label: "Primary", value: "#0066FF" },
      { label: "Success", value: "#16A34A" },
      { label: "Warning", value: "#D97706" },
      { label: "Danger", value: "#DC2626" },
      { label: "Muted", value: "#9CA3AF" },
    ];
    return (
      <div style={{ display: "flex", gap: 24, padding: 40, flexWrap: "wrap" }}>
        {colours.map(({ label, value }) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "#F8F8F8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #F0F0F0",
              }}
            >
              <Icon svg={HeartIcon} size={24} color={value} />
            </div>
            <span style={{ fontSize: 11, color: "#6B7280" }}>{label}</span>
            <span style={{ fontSize: 10, color: "#9CA3AF", fontFamily: "monospace" }}>{value}</span>
          </div>
        ))}
      </div>
    );
  },
  parameters: { docs: { description: { story: "Icons use `currentColor` and respond to any CSS colour." } } },
};
