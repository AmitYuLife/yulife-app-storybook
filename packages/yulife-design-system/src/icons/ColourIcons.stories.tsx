import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import type { ColourIconProps, ColourIconSize } from "./colour";
import {
  YuCoinColourIcon,
  TrophyColourIcon,
  ChestColourIcon,
  GiftBoxColourIcon,
  YudokuColourIcon,
  MapColourIcon,
  SurgeColourIcon,
  FlameColourIcon,
  LotusColourIcon,
  PlantTreeColourIcon,
  TreeColourIcon,
  FoodDonationColourIcon,
  MealColourIcon,
  GlassColourIcon,
  WaterColourIcon,
  OceanColourIcon,
  EarthColourIcon,
  AppleHealthColourIcon,
  TimeColourIcon,
  StepsColourIcon,
  ChangeArmourColourIcon,
  GlovesColourIcon,
  WalletColourIcon,
  LockColourIcon,
  WorkoutColourIcon,
  TagColourIcon,
  VoucherColourIcon,
  CalculatorColourIcon,
  BirthdayColourIcon,
  WeightColourIcon,
  HeightColourIcon,
  CompareCoverColourIcon,
  ContactDetailsColourIcon,
  GPDetailsColourIcon,
  PaymentDetailsColourIcon,
  PrimaryColourIcon,
  CancelPolicyColourIcon,
  CertificateColourIcon,
  TandCsColourIcon,
  CoverDetailsColourIcon,
  PolicySummaryColourIcon,
  PaymentHistoryColourIcon,
  PDFColourIcon,
  ContributionColourIcon,
  StreakSaverColourIcon,
  CalendarColourIcon,
  StreakColourIcon,
  WeeklyColourIcon,
  PolicyScheduleColourIcon,
  FAQColourIcon,
  HintsColourIcon,
  TalkColourIcon,
  UnlinkColourIcon,
  TurnsColourIcon,
  MistakesColourIcon,
  PiggyBankColourIcon,
  DonateColourIcon,
  CustomCoverColourIcon,
  MembersColourIcon,
  BeneficiaryColourIcon,
  LevelBubbleColourIcon,
  ExtraChallengeColourIcon,
  BoostedChallengeColourIcon,
  DrinkColourIcon,
  DesertParodiaColourIcon,
  DesertSaguaroColourIcon,
  ForestLeavesColourIcon,
  MountainFeatherColourIcon,
  OceanJellyfishColourIcon,
  OceanShellColourIcon,
  BellColourIcon,
  DuelsColourIcon,
  PhoneColourIcon,
  StarColourIcon,
  YugiStatusErrorColourIcon,
  YugiStatusWarningColourIcon,
  YugiStatusSuccessColourIcon,
  YugiStatusInfoColourIcon,
  RankGoldColourIcon,
  RankSilverColourIcon,
  RankBronzeColourIcon,
  RankDrawColourIcon,
  RankPurpleColourIcon,
  RankBlueColourIcon,
  RankGreenColourIcon,
} from "./colour";

// ─── Icon catalogue ───────────────────────────────────────────────────────────

type ColourIconEntry = {
  name: string;
  export: string;
  component: React.FC<ColourIconProps>;
  tags: string;
};

const ALL_COLOUR_ICONS: ColourIconEntry[] = [
  {
    name: "Apple Health",
    export: "AppleHealthColourIcon",
    component: AppleHealthColourIcon,
    tags: "health fitness wellness medical vitality healthcare",
  },
  {
    name: "Bell",
    export: "BellColourIcon",
    component: BellColourIcon,
    tags: "notification alert ring chime sound reminder attention",
  },
  {
    name: "Beneficiary",
    export: "BeneficiaryColourIcon",
    component: BeneficiaryColourIcon,
    tags: "beneficiary recipient dependent person individual",
  },
  {
    name: "Birthday",
    export: "BirthdayColourIcon",
    component: BirthdayColourIcon,
    tags: "birthday celebration cake party age anniversary festive",
  },
  {
    name: "Boosted Challenge",
    export: "BoostedChallengeColourIcon",
    component: BoostedChallengeColourIcon,
    tags: "challenge boost quest task competition enhanced power",
  },
  {
    name: "Calculator",
    export: "CalculatorColourIcon",
    component: CalculatorColourIcon,
    tags: "calculator math compute calculate numbers arithmetic tool",
  },
  {
    name: "Calendar",
    export: "CalendarColourIcon",
    component: CalendarColourIcon,
    tags: "calendar date schedule month day planning events",
  },
  {
    name: "Cancel Policy",
    export: "CancelPolicyColourIcon",
    component: CancelPolicyColourIcon,
    tags: "cancel policy settings options remove delete terminate",
  },
  {
    name: "Certificate",
    export: "CertificateColourIcon",
    component: CertificateColourIcon,
    tags: "certificate badge award credential achievement document",
  },
  {
    name: "Change Armour",
    export: "ChangeArmourColourIcon",
    component: ChangeArmourColourIcon,
    tags: "change armor equipment outfit customize modify swap",
  },
  {
    name: "Chest",
    export: "ChestColourIcon",
    component: ChestColourIcon,
    tags: "chest treasure container storage inventory box vault",
  },
  {
    name: "Compare Cover",
    export: "CompareCoverColourIcon",
    component: CompareCoverColourIcon,
    tags: "compare cover insurance policy contrast difference",
  },
  {
    name: "Contact Details",
    export: "ContactDetailsColourIcon",
    component: ContactDetailsColourIcon,
    tags: "contact details information profile address phone email",
  },
  {
    name: "Contribution",
    export: "ContributionColourIcon",
    component: ContributionColourIcon,
    tags: "contribution donation give support gift charity share",
  },
  {
    name: "Cover Details",
    export: "CoverDetailsColourIcon",
    component: CoverDetailsColourIcon,
    tags: "cover details insurance policy information plan coverage",
  },
  {
    name: "Custom Cover",
    export: "CustomCoverColourIcon",
    component: CustomCoverColourIcon,
    tags: "custom cover insurance policy personalize create design",
  },
  {
    name: "Desert Parodia",
    export: "DesertParodiaColourIcon",
    component: DesertParodiaColourIcon,
    tags: "desert parodia cactus plant flora succulent nature",
  },
  {
    name: "Desert Saguaro",
    export: "DesertSaguaroColourIcon",
    component: DesertSaguaroColourIcon,
    tags: "desert saguaro cactus plant flora nature landscape",
  },
  {
    name: "Donate",
    export: "DonateColourIcon",
    component: DonateColourIcon,
    tags: "donate give charity contribution support share gift",
  },
  {
    name: "Drink",
    export: "DrinkColourIcon",
    component: DrinkColourIcon,
    tags: "drink water beverage hydration cup glass liquid",
  },
  {
    name: "Duels",
    export: "DuelsColourIcon",
    component: DuelsColourIcon,
    tags: "duels challenge battle competition game fight versus",
  },
  {
    name: "Earth",
    export: "EarthColourIcon",
    component: EarthColourIcon,
    tags: "earth world globe planet environment nature geography",
  },
  {
    name: "Extra Challenge",
    export: "ExtraChallengeColourIcon",
    component: ExtraChallengeColourIcon,
    tags: "challenge extra bonus quest task additional special",
  },
  {
    name: "FAQ",
    export: "FAQColourIcon",
    component: FAQColourIcon,
    tags: "faq help question support information guide answers",
  },
  {
    name: "Flame",
    export: "FlameColourIcon",
    component: FlameColourIcon,
    tags: "flame fire heat energy burn hot light passion",
  },
  {
    name: "Food Donation",
    export: "FoodDonationColourIcon",
    component: FoodDonationColourIcon,
    tags: "food donation meal give charity contribute hunger",
  },
  {
    name: "Forest Leaves",
    export: "ForestLeavesColourIcon",
    component: ForestLeavesColourIcon,
    tags: "forest leaves nature plant tree greenery foliage",
  },
  {
    name: "Gift Box",
    export: "GiftBoxColourIcon",
    component: GiftBoxColourIcon,
    tags: "gift box present surprise reward package special",
  },
  {
    name: "Glass",
    export: "GlassColourIcon",
    component: GlassColourIcon,
    tags: "glass water drink beverage cup container clear",
  },
  {
    name: "Gloves",
    export: "GlovesColourIcon",
    component: GlovesColourIcon,
    tags: "gloves clothing protection hands wear apparel safety",
  },
  {
    name: "GP Details",
    export: "GPDetailsColourIcon",
    component: GPDetailsColourIcon,
    tags: "gp doctor general practitioner medical health physician",
  },
  {
    name: "Height",
    export: "HeightColourIcon",
    component: HeightColourIcon,
    tags: "height measurement size stature dimension length tall",
  },
  {
    name: "Hints",
    export: "HintsColourIcon",
    component: HintsColourIcon,
    tags: "hints help tips clues guidance suggestion assist",
  },
  {
    name: "Level Bubble",
    export: "LevelBubbleColourIcon",
    component: LevelBubbleColourIcon,
    tags: "level bubble progress game achievement advancement rank",
  },
  {
    name: "Lock",
    export: "LockColourIcon",
    component: LockColourIcon,
    tags: "lock security private safe protected secure closed",
  },
  {
    name: "Lotus",
    export: "LotusColourIcon",
    component: LotusColourIcon,
    tags: "lotus flower plant water meditation peace serenity",
  },
  {
    name: "Map",
    export: "MapColourIcon",
    component: MapColourIcon,
    tags: "map location navigation direction place route travel",
  },
  {
    name: "Meal",
    export: "MealColourIcon",
    component: MealColourIcon,
    tags: "meal food eat dining nutrition lunch dinner",
  },
  {
    name: "Members",
    export: "MembersColourIcon",
    component: MembersColourIcon,
    tags: "members people group team users participants individuals",
  },
  {
    name: "Mistakes",
    export: "MistakesColourIcon",
    component: MistakesColourIcon,
    tags: "mistakes error incorrect wrong failed problem issue",
  },
  {
    name: "Mountain Feather",
    export: "MountainFeatherColourIcon",
    component: MountainFeatherColourIcon,
    tags: "mountain feather nature landscape altitude peak light",
  },
  {
    name: "Ocean",
    export: "OceanColourIcon",
    component: OceanColourIcon,
    tags: "ocean sea water waves marine aquatic blue",
  },
  {
    name: "Ocean Jellyfish",
    export: "OceanJellyfishColourIcon",
    component: OceanJellyfishColourIcon,
    tags: "jellyfish ocean sea water marine aquatic creature",
  },
  {
    name: "Ocean Shell",
    export: "OceanShellColourIcon",
    component: OceanShellColourIcon,
    tags: "shell ocean sea marine beach seashell coast",
  },
  {
    name: "Payment Details",
    export: "PaymentDetailsColourIcon",
    component: PaymentDetailsColourIcon,
    tags: "payment details billing financial information transaction card",
  },
  {
    name: "Payment History",
    export: "PaymentHistoryColourIcon",
    component: PaymentHistoryColourIcon,
    tags: "payment history transactions billing records past activity",
  },
  {
    name: "PDF",
    export: "PDFColourIcon",
    component: PDFColourIcon,
    tags: "pdf document file download report paper text",
  },
  {
    name: "Phone",
    export: "PhoneColourIcon",
    component: PhoneColourIcon,
    tags: "phone call contact communication mobile telephone",
  },
  {
    name: "Piggy Bank",
    export: "PiggyBankColourIcon",
    component: PiggyBankColourIcon,
    tags: "piggy bank savings money finance secure save account",
  },
  {
    name: "Plant Tree",
    export: "PlantTreeColourIcon",
    component: PlantTreeColourIcon,
    tags: "plant tree nature growth environment flora green",
  },
  {
    name: "Policy Schedule",
    export: "PolicyScheduleColourIcon",
    component: PolicyScheduleColourIcon,
    tags: "policy schedule insurance plan timeline dates",
  },
  {
    name: "Policy Summary",
    export: "PolicySummaryColourIcon",
    component: PolicySummaryColourIcon,
    tags: "policy summary insurance overview details brief plan",
  },
  {
    name: "Primary",
    export: "PrimaryColourIcon",
    component: PrimaryColourIcon,
    tags: "primary main principal default key first",
  },
  {
    name: "Rank Blue",
    export: "RankBlueColourIcon",
    component: RankBlueColourIcon,
    tags: "rank leaderboard position blue bubble number standard",
  },
  {
    name: "Rank Bronze",
    export: "RankBronzeColourIcon",
    component: RankBronzeColourIcon,
    tags: "rank leaderboard medal bronze third 3rd position special",
  },
  {
    name: "Rank Draw",
    export: "RankDrawColourIcon",
    component: RankDrawColourIcon,
    tags: "rank leaderboard draw tie tied equal position special",
  },
  {
    name: "Rank Gold",
    export: "RankGoldColourIcon",
    component: RankGoldColourIcon,
    tags: "rank leaderboard medal gold first 1st position special",
  },
  {
    name: "Rank Green",
    export: "RankGreenColourIcon",
    component: RankGreenColourIcon,
    tags: "rank leaderboard position green bubble number standard",
  },
  {
    name: "Rank Purple",
    export: "RankPurpleColourIcon",
    component: RankPurpleColourIcon,
    tags: "rank leaderboard position purple bubble number standard",
  },
  {
    name: "Rank Silver",
    export: "RankSilverColourIcon",
    component: RankSilverColourIcon,
    tags: "rank leaderboard medal silver second 2nd position special",
  },
  {
    name: "Star",
    export: "StarColourIcon",
    component: StarColourIcon,
    tags: "star reward rating favourite achievement gold prize",
  },
  {
    name: "Steps",
    export: "StepsColourIcon",
    component: StepsColourIcon,
    tags: "steps walking distance activity fitness movement progress",
  },
  {
    name: "Streak",
    export: "StreakColourIcon",
    component: StreakColourIcon,
    tags: "streak series continuous achievement progress win success",
  },
  {
    name: "Streak Saver",
    export: "StreakSaverColourIcon",
    component: StreakSaverColourIcon,
    tags: "streak saver protection safety maintain preserve keep",
  },
  {
    name: "Surge",
    export: "SurgeColourIcon",
    component: SurgeColourIcon,
    tags: "surge increase spike boost growth rise jump",
  },
  {
    name: "T&Cs",
    export: "TandCsColourIcon",
    component: TandCsColourIcon,
    tags: "terms conditions agreement legal policy rules compliance",
  },
  {
    name: "Tag",
    export: "TagColourIcon",
    component: TagColourIcon,
    tags: "tag label categorize mark identification identify organize",
  },
  {
    name: "Talk",
    export: "TalkColourIcon",
    component: TalkColourIcon,
    tags: "talk chat conversation message communicate discuss speak",
  },
  {
    name: "Time",
    export: "TimeColourIcon",
    component: TimeColourIcon,
    tags: "time clock schedule duration timeline hours watch",
  },
  {
    name: "Tree",
    export: "TreeColourIcon",
    component: TreeColourIcon,
    tags: "tree nature plant growth forest flora green",
  },
  {
    name: "Trophy",
    export: "TrophyColourIcon",
    component: TrophyColourIcon,
    tags: "trophy achievement award success victory prize",
  },
  {
    name: "Turns",
    export: "TurnsColourIcon",
    component: TurnsColourIcon,
    tags: "turns game round play move rotation alternate",
  },
  {
    name: "Unlink",
    export: "UnlinkColourIcon",
    component: UnlinkColourIcon,
    tags: "unlink disconnect separate remove detach break",
  },
  {
    name: "Voucher",
    export: "VoucherColourIcon",
    component: VoucherColourIcon,
    tags: "voucher coupon discount offer code promo savings",
  },
  {
    name: "Wallet",
    export: "WalletColourIcon",
    component: WalletColourIcon,
    tags: "wallet money payment finance cash purse account",
  },
  {
    name: "Water",
    export: "WaterColourIcon",
    component: WaterColourIcon,
    tags: "water drink hydration liquid beverage cup pure",
  },
  {
    name: "Weekly",
    export: "WeeklyColourIcon",
    component: WeeklyColourIcon,
    tags: "weekly week recurring schedule regular pattern repeat",
  },
  {
    name: "Weight",
    export: "WeightColourIcon",
    component: WeightColourIcon,
    tags: "weight measurement scale body fitness heavy load",
  },
  {
    name: "Workout",
    export: "WorkoutColourIcon",
    component: WorkoutColourIcon,
    tags: "workout exercise fitness activity training movement sport",
  },
  {
    name: "YuCoin",
    export: "YuCoinColourIcon",
    component: YuCoinColourIcon,
    tags: "yucoin currency money reward points coin value",
  },
  {
    name: "Yudoku",
    export: "YudokuColourIcon",
    component: YudokuColourIcon,
    tags: "yudoku game puzzle sudoku brain number logic",
  },
  {
    name: "Yugi Status Error",
    export: "YugiStatusErrorColourIcon",
    component: YugiStatusErrorColourIcon,
    tags: "yugi status error danger alert notification banner",
  },
  {
    name: "Yugi Status Warning",
    export: "YugiStatusWarningColourIcon",
    component: YugiStatusWarningColourIcon,
    tags: "yugi status warning caution alert notification banner",
  },
  {
    name: "Yugi Status Success",
    export: "YugiStatusSuccessColourIcon",
    component: YugiStatusSuccessColourIcon,
    tags: "yugi status success complete done notification banner",
  },
  {
    name: "Yugi Status Info",
    export: "YugiStatusInfoColourIcon",
    component: YugiStatusInfoColourIcon,
    tags: "yugi status info information notice notification banner",
  },
];

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: "Foundations/Iconography/Colour Icons",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
## Colour Icons

Multi-colour illustration icons from the [App — Iconography](https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography) Figma file.

Colour Icons render with baked-in colours and **do not support colour theming**. Import and use them directly — no \`color\` prop needed.

### Usage

\`\`\`tsx
import { EarthColourIcon } from "@/icons";

<EarthColourIcon size={24} accessibilityLabel="Earth" />
\`\`\`
        `,
      },
    },
  },
};

export default meta;

// ─── Gallery ─────────────────────────────────────────────────────────────────

const ColourIconGallery = ({ size }: { size: ColourIconSize }) => {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = ALL_COLOUR_ICONS.filter(
    (icon) => icon.name.toLowerCase().includes(query.toLowerCase()) || icon.tags.includes(query.toLowerCase())
  );

  function handleCopy(entry: ColourIconEntry) {
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
          placeholder={"Search colour icons\u2026 (try \u201ccoin\u201d, \u201ctrophy\u201d, \u201cearth\u201d)"}
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
        Colour Icons <span style={{ fontWeight: 400 }}>({filtered.length})</span>
      </h3>

      {filtered.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
            gap: 10,
          }}
        >
          {filtered.map((icon) => {
            const IconComponent = icon.component;
            return (
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
                <IconComponent size={size} />
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
            );
          })}
        </div>
      ) : (
        <p style={{ color: "#9CA3AF", textAlign: "center", marginTop: 48, fontSize: 15 }}>
          No icons match &ldquo;{query}&rdquo;
        </p>
      )}
    </div>
  );
};

export const ColourIcons: StoryObj<{ size: ColourIconSize }> = {
  name: "Colour Icons",
  args: { size: 24 },
  argTypes: {
    size: { control: { type: "select" }, options: [16, 24, 32, 40, 48], description: "Icon size in pixels" },
  },
  render: (args) => <ColourIconGallery size={args.size} />,
};

// ─── Size Scale ───────────────────────────────────────────────────────────────

export const SizeScale: StoryObj = {
  name: "Size Scale",
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#9CA3AF",
          marginBottom: 32,
        }}
      >
        Colour icon size scale
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: 32 }}>
        {([16, 24, 32, 40, 48] as const).map((size) => (
          <div key={size} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <EarthColourIcon size={size} />
            <code
              style={{
                fontSize: 11,
                background: "#F3F4F6",
                padding: "2px 7px",
                borderRadius: 4,
                color: "#374151",
                fontFamily: "monospace",
              }}
            >
              {size}
            </code>
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story:
          "Five size steps in 8 px increments from 16 px (compact inline) to 48 px (large hero / banner icon): 16 for tight UI slots, 24 as the standard default, 32 and 40 for medium emphasis, and 48 for the YugiStatus icon used in InlineBanner.",
      },
    },
  },
};
