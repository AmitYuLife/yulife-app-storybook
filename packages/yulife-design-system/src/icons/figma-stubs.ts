/**
 * Lightweight stub components for Figma Code Connect.
 *
 * The real icons are loaded via Vite's ?react SVG import (see index.ts).
 * The @figma/code-connect CLI cannot process Vite-specific import syntax,
 * so this file provides named stub components with the same interface that
 * Code Connect can parse and upload to Figma without Vite in the pipeline.
 *
 * Colour icon stubs use FC<ColourIconProps> to match the real component interface.
 */
import type { FC, SVGProps } from "react";
import type { ColourIconProps } from "./colour";

const mkStub = (): FC<SVGProps<SVGSVGElement>> => (): null => null;

// ─── Navigation ───────────────────────────────────────────────────────────────
export const HamburgerIcon = mkStub();
export const CheckIcon = mkStub();
export const LeftIcon = mkStub();
export const RightIcon = mkStub();
export const UpIcon = mkStub();
export const DownIcon = mkStub();
export const CloseIcon = mkStub();
export const AddIcon = mkStub();
export const CaretIcon = mkStub();
export const BulletIcon = mkStub();

// ─── Action ───────────────────────────────────────────────────────────────────
export const BellIcon = mkStub();
export const ChatHelpIcon = mkStub();
export const LogOutIcon = mkStub();
export const ClockIcon = mkStub();
export const StarLineIcon = mkStub();
export const SettingsGearIcon = mkStub();
export const InfoIcon = mkStub();
export const StatusInfoIcon = mkStub();
export const StatusSuccessIcon = mkStub();
export const StatusErrorIcon = mkStub();
export const StatusWarningIcon = mkStub();
export const StarFillIcon = mkStub();
export const AvailableRewardsIcon = mkStub();
export const QuestionOutlineIcon = mkStub();
export const InviteIcon = mkStub();
export const WorldIcon = mkStub();

// ─── Activities ───────────────────────────────────────────────────────────────
export const StreakIcon = mkStub();
export const WellbeingHubIcon = mkStub();
export const HeartIcon = mkStub();
export const ActivityHistoryIcon = mkStub();
export const CyclingIcon = mkStub();
export const MindfulnessIcon = mkStub();
export const FiitIcon = mkStub();
export const YuniversityIcon = mkStub();
export const YudokuIcon = mkStub();
export const PigIcon = mkStub();
export const SmartPensionIcon = mkStub();
export const EmotionIcon = mkStub();
export const AccountIcon = mkStub();
export const SleepIcon = mkStub();
export const PlantIcon = mkStub();
export const CalendarIcon = mkStub();
export const DropIcon = mkStub();
export const MealIcon = mkStub();
export const PlasticIcon = mkStub();

// ─── Logos ────────────────────────────────────────────────────────────────────
export const YuLifeSquareColourIcon = mkStub();
export const YuLifeSquareMonoIcon = mkStub();

// ─── YuLife ───────────────────────────────────────────────────────────────────
export const TodaysYuCoinIcon = mkStub();
export const MapIcon = mkStub();
export const TrophyIcon = mkStub();
export const CoinStackIcon = mkStub();
export const YugiHeadIcon = mkStub();
export const ChestIcon = mkStub();
export const TreasureChestIcon = mkStub();
export const UnityIcon = mkStub();
export const LevelIcon = mkStub();

// ─── Colour Icons ─────────────────────────────────────────────────────────────
const mkColourStub = (): FC<ColourIconProps> => (): null => null;

export const YuCoinColourIcon = mkColourStub();
export const TrophyColourIcon = mkColourStub();
export const ChestColourIcon = mkColourStub();
export const GiftBoxColourIcon = mkColourStub();
export const YudokuColourIcon = mkColourStub();
export const MapColourIcon = mkColourStub();
export const SurgeColourIcon = mkColourStub();
export const FlameColourIcon = mkColourStub();
export const LotusColourIcon = mkColourStub();
export const PlantTreeColourIcon = mkColourStub();
export const TreeColourIcon = mkColourStub();
export const FoodDonationColourIcon = mkColourStub();
export const MealColourIcon = mkColourStub();
export const GlassColourIcon = mkColourStub();
export const WaterColourIcon = mkColourStub();
export const OceanColourIcon = mkColourStub();
export const EarthColourIcon = mkColourStub();
export const AppleHealthColourIcon = mkColourStub();
export const TimeColourIcon = mkColourStub();
export const StepsColourIcon = mkColourStub();
export const ChangeArmourColourIcon = mkColourStub();
export const GlovesColourIcon = mkColourStub();
export const WalletColourIcon = mkColourStub();
export const LockColourIcon = mkColourStub();
export const WorkoutColourIcon = mkColourStub();
export const TagColourIcon = mkColourStub();
export const VoucherColourIcon = mkColourStub();
export const CalculatorColourIcon = mkColourStub();
export const BirthdayColourIcon = mkColourStub();
export const WeightColourIcon = mkColourStub();
export const HeightColourIcon = mkColourStub();
export const CompareCoverColourIcon = mkColourStub();
export const ContactDetailsColourIcon = mkColourStub();
export const GPDetailsColourIcon = mkColourStub();
export const PaymentDetailsColourIcon = mkColourStub();
export const PrimaryColourIcon = mkColourStub();
export const CancelPolicyColourIcon = mkColourStub();
export const CertificateColourIcon = mkColourStub();
export const TandCsColourIcon = mkColourStub();
export const CoverDetailsColourIcon = mkColourStub();
export const PolicySummaryColourIcon = mkColourStub();
export const PaymentHistoryColourIcon = mkColourStub();
export const PDFColourIcon = mkColourStub();
export const ContributionColourIcon = mkColourStub();
export const StreakSaverColourIcon = mkColourStub();
export const CalendarColourIcon = mkColourStub();
export const StreakColourIcon = mkColourStub();
export const WeeklyColourIcon = mkColourStub();
export const PolicyScheduleColourIcon = mkColourStub();
export const FAQColourIcon = mkColourStub();
export const HintsColourIcon = mkColourStub();
export const TalkColourIcon = mkColourStub();
export const UnlinkColourIcon = mkColourStub();
export const TurnsColourIcon = mkColourStub();
export const MistakesColourIcon = mkColourStub();
export const PiggyBankColourIcon = mkColourStub();
export const DonateColourIcon = mkColourStub();
export const CustomCoverColourIcon = mkColourStub();
export const MembersColourIcon = mkColourStub();
export const BeneficiaryColourIcon = mkColourStub();
export const LevelBubbleColourIcon = mkColourStub();
export const ExtraChallengeColourIcon = mkColourStub();
export const BoostedChallengeColourIcon = mkColourStub();
export const DrinkColourIcon = mkColourStub();
export const DesertParodiaColourIcon = mkColourStub();
export const DesertSaguaroColourIcon = mkColourStub();
export const ForestLeavesColourIcon = mkColourStub();
export const MountainFeatherColourIcon = mkColourStub();
export const OceanJellyfishColourIcon = mkColourStub();
export const OceanShellColourIcon = mkColourStub();
export const BellColourIcon = mkColourStub();
export const DuelsColourIcon = mkColourStub();
export const PhoneColourIcon = mkColourStub();
export const YugiStatusErrorColourIcon = mkColourStub();
export const YugiStatusWarningColourIcon = mkColourStub();
export const YugiStatusSuccessColourIcon = mkColourStub();
export const YugiStatusInfoColourIcon = mkColourStub();
