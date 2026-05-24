import React from "react";
// ─── SVG assets ──────────────────────────────────────────────────────────────

import yuCoinSrc from "./svg/YuCoin.svg";
import trophySrc from "./svg/Trophy.svg";
import chestSrc from "./svg/Chest.svg";
import yudokuSrc from "./svg/Yudoku.svg";
import mapSrc from "./svg/Map.svg";
import surgeSrc from "./svg/Surge.svg";
import flameSrc from "./svg/Flame.svg";
import plantTreeSrc from "./svg/PlantTree.svg";
import treeSrc from "./svg/Tree.svg";
import mealSrc from "./svg/Meal.svg";
import glassSrc from "./svg/Glass.svg";
import waterSrc from "./svg/Water.svg";
import oceanSrc from "./svg/Ocean.svg";
import earthSrc from "./svg/Earth.svg";
import appleHealthSrc from "./svg/AppleHealth.svg";
import timeSrc from "./svg/Time.svg";
import stepsSrc from "./svg/Steps.svg";
import changeArmourSrc from "./svg/ChangeArmour.svg";
import glovesSrc from "./svg/Gloves.svg";
import walletSrc from "./svg/Wallet.svg";
import lockSrc from "./svg/Lock.svg";
import workoutSrc from "./svg/Workout.svg";
import tagSrc from "./svg/Tag.svg";
import voucherSrc from "./svg/Voucher.svg";
import weightSrc from "./svg/Weight.svg";
import heightSrc from "./svg/Height.svg";
import compareCoverSrc from "./svg/CompareCover.svg";
import contactDetailsSrc from "./svg/ContactDetails.svg";
import gpDetailsSrc from "./svg/GPDetails.svg";
import paymentDetailsSrc from "./svg/PaymentDetails.svg";
import primarySrc from "./svg/Primary.svg";
import cancelPolicySrc from "./svg/CancelPolicy.svg";
import certificateSrc from "./svg/Certificate.svg";
import contributionSrc from "./svg/Contribution.svg";
import streakSrc from "./svg/Streak.svg";
import weeklySrc from "./svg/Weekly.svg";
import policyScheduleSrc from "./svg/PolicySchedule.svg";
import faqSrc from "./svg/FAQ.svg";
import hintsSrc from "./svg/Hints.svg";
import talkSrc from "./svg/Talk.svg";
import unlinkSrc from "./svg/Unlink.svg";
import turnsSrc from "./svg/Turns.svg";
import mistakesSrc from "./svg/Mistakes.svg";
import levelBubbleSrc from "./svg/LevelBubble.svg";
import extraChallengeSrc from "./svg/ExtraChallenge.svg";
import boostedChallengeSrc from "./svg/BoostedChallenge.svg";
import desertSaguaroSrc from "./svg/DesertSaguaro.svg";
import forestLeavesSrc from "./svg/ForestLeaves.svg";
import mountainFeatherSrc from "./svg/MountainFeather.svg";
import oceanJellyfishSrc from "./svg/OceanJellyfish.svg";
import oceanShellSrc from "./svg/OceanShell.svg";
import bellSrc from "./svg/Bell.svg";
import phoneSrc from "./svg/Phone.svg";
import paymentHistorySrc from "./svg/PaymentHistory.svg";
import pdfSrc from "./svg/PDF.svg";

// Multi-part assets
import giftBoxBowSrc from "./svg/GiftBox_bow.svg";
import giftBoxBoxSrc from "./svg/GiftBox_box.svg";
import lotusLeavesSrc from "./svg/Lotus_leaves.svg";
import lotusFlowerSrc from "./svg/Lotus_flower.svg";
import foodDonationVectorSrc from "./svg/FoodDonation_vector.svg";
import foodDonationGroupSrc from "./svg/FoodDonation_group.svg";
import foodDonationBagSrc from "./svg/FoodDonation_bag.svg";
import foodDonationTraySrc from "./svg/FoodDonation_tray.svg";
import calculatorBodySrc from "./svg/Calculator_body.svg";
import calculatorControlsSrc from "./svg/Calculator_controls.svg";
import birthdayCakeSrc from "./svg/Birthday_cake.svg";
import birthdayCandleSrc from "./svg/Birthday_candle.svg";
import birthdayIcingSrc from "./svg/Birthday_icing.svg";
import birthdayFlamesSrc from "./svg/Birthday_flames.svg";
import tandCsBaseSrc from "./svg/TandCs_base.svg";
import tandCsTextSrc from "./svg/TandCs_text.svg";
import coverDetailsSheetSrc from "./svg/CoverDetails_sheet.svg";
import coverDetailsCircleSrc from "./svg/CoverDetails_circle.svg";
import policySummaryDocSrc from "./svg/PolicySummary_doc.svg";
import policySummaryAvatarSrc from "./svg/PolicySummary_avatar.svg";
import streakSaverFreezeSrc from "./svg/StreakSaver_freeze.svg";
import streakSaverCalSrc from "./svg/StreakSaver_cal.svg";
import streakSaverCheckSrc from "./svg/StreakSaver_check.svg";
import calendarGridSrc from "./svg/Calendar_grid.svg";
import piggyBankEarSrc from "./svg/PiggyBank_ear.svg";
import piggyBankLeg1Src from "./svg/PiggyBank_leg1.svg";
import piggyBankLeg2Src from "./svg/PiggyBank_leg2.svg";
import piggyBankBodySrc from "./svg/PiggyBank_body.svg";
import piggyBankTailSrc from "./svg/PiggyBank_tail.svg";
import piggyBankSnoutSrc from "./svg/PiggyBank_snout.svg";
import piggyBankCoinSrc from "./svg/PiggyBank_coin.svg";
import piggyBankSlotSrc from "./svg/PiggyBank_slot.svg";
import piggyBankNostrilSrc from "./svg/PiggyBank_nostril.svg";
import piggyBankEyeSrc from "./svg/PiggyBank_eye.svg";
import piggyBankPupilSrc from "./svg/PiggyBank_pupil.svg";
import donateHeartSrc from "./svg/Donate_heart.svg";
import donateLeftSrc from "./svg/Donate_left.svg";
import donateRightSrc from "./svg/Donate_right.svg";
import customCoverPaperSrc from "./svg/CustomCover_paper.svg";
import customCoverBadgeSrc from "./svg/CustomCover_badge.svg";
import membersDocSrc from "./svg/Members_doc.svg";
import membersUserSrc from "./svg/Members_user.svg";
import beneficiaryDocSrc from "./svg/Beneficiary_doc.svg";
import beneficiaryUserSrc from "./svg/Beneficiary_user.svg";
import desertParodiaBodySrc from "./svg/DesertParodia_body.svg";
import desertParodiaArm1Src from "./svg/DesertParodia_arm1.svg";
import desertParodiaArm2Src from "./svg/DesertParodia_arm2.svg";
import desertParodiaPotSrc from "./svg/DesertParodia_pot.svg";
import drinkStrawSrc from "./svg/Drink_straw.svg";
import drinkCupSrc from "./svg/Drink_cup.svg";
import drinkBaseSrc from "./svg/Drink_base.svg";
import drinkUmbrellaSrc from "./svg/Drink_umbrella.svg";
import duelsBackSrc from "./svg/Duels_back.svg";
import duelsFrontSrc from "./svg/Duels_front.svg";
import starSrc from "./svg/Star.svg";
import rankGoldSrc from "./svg/RankGold.svg";
import rankSilverSrc from "./svg/RankSilver.svg";
import rankBronzeSrc from "./svg/RankBronze.svg";
import rankBronze3Src from "./svg/RankBronze_3.svg";
import rankDrawSrc from "./svg/RankDraw.svg";
import rankPurpleSrc from "./svg/RankPurple.svg";
import rankBlueSrc from "./svg/RankBlue.svg";
import rankGreenSrc from "./svg/RankGreen.svg";
import rankGreen3Src from "./svg/RankGreen_3.svg";

// ─── Shared types ─────────────────────────────────────────────────────────────

/** Supported size steps for colour icons — 8 px increments from 16 to 48. */
export type ColourIconSize = 16 | 24 | 32 | 40 | 48;

export interface ColourIconProps {
  /** Rendered size in pixels (width and height). Default: 24. */
  size?: ColourIconSize;
  /** Accessible label. When provided the element is announced as an image. */
  accessibilityLabel?: string;
  className?: string;
}

// ─── Internal helpers ─────────────────────────────────────────────────────────

/** Base styles for the outer 24×24 clipping container. */
function outerStyle(size: number, clip = true): React.CSSProperties {
  return {
    position: "relative",
    width: size,
    height: size,
    flexShrink: 0,
    ...(clip ? { overflow: "hidden" } : {}),
  };
}

/** Fully-covering img within a positioned parent. */
const IMG_FILL: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  display: "block",
  maxWidth: "none",
};

function ariaProps(label?: string) {
  return label ? { role: "img" as const, "aria-label": label } : { "aria-hidden": true as const };
}

// ─── Simple one-piece icons ───────────────────────────────────────────────────

/** A single positioned img in a clipping container. */
const SimpleColourIcon = ({
  src,
  inset,
  clip = true,
  size = 24,
  accessibilityLabel,
  className,
}: ColourIconProps & { src: string; inset: string; clip?: boolean }) => {
  return (
    <div style={outerStyle(size, clip)} className={className} {...ariaProps(accessibilityLabel)}>
      <div style={{ position: "absolute", inset }}>
        <img alt="" src={src} style={IMG_FILL} />
      </div>
    </div>
  );
};

// ─── Colour Icons ─────────────────────────────────────────────────────────────

/** YuCoin — yucoin, currency, money, reward, points, coin, value */
export const YuCoinColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={yuCoinSrc} inset="8.33%" />;
};

/** Trophy — trophy, achievement, award, success, victory, prize, recognition */
export const TrophyColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={trophySrc} inset="12.5%" />;
};

/** Chest — chest, treasure, container, storage, inventory, box, vault */
export const ChestColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={chestSrc} inset="16.67% 8.33%" />;
};

/** Yudoku — yudoku, game, puzzle, sudoku, brain, number, logic */
export const YudokuColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={yudokuSrc} inset="12.5%" />;
};

/** Map — map, location, navigation, direction, place, route, travel */
export const MapColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={mapSrc} inset="8.36% 4.4% 8.44% 4.47%" clip={false} />;
};

/** Surge — surge, increase, spike, boost, growth, rise, jump */
export const SurgeColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={surgeSrc} inset="4.17% 16.67% 4.17% 25%" />;
};

/** Flame — flame, fire, heat, energy, burn, hot, light, passion */
export const FlameColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={flameSrc} inset="4.41% 14.71% 8.54% 14.7%" />;
};

/** Plant Tree — plant, tree, nature, growth, environment, flora, green */
export const PlantTreeColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={plantTreeSrc} inset="12.5% 16.67% 8.33% 16.67%" />;
};

/** Tree — tree, nature, plant, growth, forest, flora, green */
export const TreeColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={treeSrc} inset="12.5% 16.67% 8.33% 16.67%" />;
};

/** Meal — meal, food, eat, dining, nutrition, lunch, dinner */
export const MealColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={mealSrc} inset="8.33%" />;
};

/** Glass — glass, water, drink, beverage, cup, container, clear */
export const GlassColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={glassSrc} inset="8.33% 15.04% 8.38% 14.96%" />;
};

/** Water — water, drink, hydration, liquid, beverage, cup, pure */
export const WaterColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={waterSrc} inset="8.33% 14.58%" />;
};

/** Ocean — ocean, sea, water, waves, marine, aquatic, blue */
export const OceanColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={oceanSrc} inset="8.47% 17.51% 8.47% 17.47%" />;
};

/** Earth — earth, world, globe, planet, environment, nature, geography */
export const EarthColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={earthSrc} inset="8.33%" clip={false} />;
};

/** Apple Health — health, fitness, wellness, medical, vitality, healthcare */
export const AppleHealthColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={appleHealthSrc} inset="11.81% 7.98% 12.57% 8.1%" clip={false} />;
};

/** Time — time, clock, schedule, duration, timeline, hours, watch */
export const TimeColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={timeSrc} inset="8.33% 4.17% 8.33% 8.33%" />;
};

/** Steps — steps, walking, distance, activity, fitness, movement, progress */
export const StepsColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={stepsSrc} inset="12.5% 4.17% 16.67% 4.17%" />;
};

/** Change Armour — change, armor, equipment, outfit, customize, modify, swap */
export const ChangeArmourColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={changeArmourSrc} inset="12.5% 4.76% 12.5% 4.17%" />;
};

/** Gloves — gloves, clothing, protection, hands, wear, apparel, safety */
export const GlovesColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={glovesSrc} inset="8.33% 6.65% 3.09% 8.33%" />;
};

/** Wallet — wallet, money, payment, finance, cash, purse, account */
export const WalletColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={walletSrc} inset="4.74% 4.17% 8.33% 8.33%" />;
};

/** Lock — lock, security, private, safe, protected, secure, closed */
export const LockColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={lockSrc} inset="8.33% 19.3%" />;
};

/** Workout — workout, exercise, fitness, activity, training, movement, sport */
export const WorkoutColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={workoutSrc} inset="5.89% 5.74% 5.74% 5.89%" />;
};

/** Tag — tag, label, categorize, mark, identification, identify, organize */
export const TagColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={tagSrc} inset="8.33% 9.05% 11.24% 12.5%" />;
};

/** Voucher — voucher, coupon, discount, offer, code, promo, savings */
export const VoucherColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={voucherSrc} inset="16.67% 8.33%" />;
};

/** Weight — weight, measurement, scale, body, fitness, heavy, load */
export const WeightColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={weightSrc} inset="12.5%" clip={false} />;
};

/** Height — height, measurement, size, stature, dimension, length, tall */
export const HeightColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={heightSrc} inset="8.33%" clip={false} />;
};

/** Compare Cover — compare, cover, insurance, policy, contrast, difference */
export const CompareCoverColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={compareCoverSrc} inset="8.33%" />;
};

/** Contact Details — contact, details, information, profile, address, phone, email */
export const ContactDetailsColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={contactDetailsSrc} inset="16.67% 8.33% 20.83% 8.33%" />;
};

/** GP Details — gp, doctor, general practitioner, medical, health, physician, care */
export const GPDetailsColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={gpDetailsSrc} inset="12.5% 8.33% 16.67% 8.33%" />;
};

/** Payment Details — payment, details, billing, financial, information, transaction, card */
export const PaymentDetailsColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={paymentDetailsSrc} inset="16.67% 8.33%" />;
};

/** Primary — primary, main, principal, default, key, first */
export const PrimaryColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={primarySrc} inset="12.5%" />;
};

/** Cancel Policy — cancel, policy, settings, options, remove, delete, terminate */
export const CancelPolicyColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={cancelPolicySrc} inset="8.33% 12.5% 4.17% 16.67%" />;
};

/** Certificate — certificate, badge, award, credential, achievement, document */
export const CertificateColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={certificateSrc} inset="8.33% 6.25% 4.17% 16.67%" />;
};

/** Contribution — contribution, donation, give, support, gift, charity, share */
export const ContributionColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={contributionSrc} inset="8.33% 16.67%" />;
};

/** Streak — streak, series, continuous, achievement, progress, win, success */
export const StreakColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={streakSrc} inset="8.33% 12.5% 12.5% 12.5%" />;
};

/** Weekly — weekly, week, recurring, schedule, regular, pattern, repeat */
export const WeeklyColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={weeklySrc} inset="8.33% 12.5% 12.5% 12.5%" clip={false} />;
};

/** Policy Schedule — policy, schedule, insurance, plan, timeline, dates */
export const PolicyScheduleColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={policyScheduleSrc} inset="8.33%" />;
};

/** FAQ — faq, help, question, support, information, guide, answers */
export const FAQColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={faqSrc} inset="12.5% 4.17% 7.11% 8.33%" clip={false} />;
};

/** Hints — hints, help, tips, clues, guidance, suggestion, assist */
export const HintsColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={hintsSrc} inset="12.5% 4.17% 7.11% 8.33%" clip={false} />;
};

/** Talk — talk, chat, conversation, message, communicate, discuss, speak */
export const TalkColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={talkSrc} inset="12.5% 4.17% 7.11% 8.33%" clip={false} />;
};

/** Unlink — unlink, disconnect, separate, remove, detach, break */
export const UnlinkColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={unlinkSrc} inset="4.39% 4.39% 4.35% 4.35%" />;
};

/** Turns — turns, game, round, play, move, rotation, alternate */
export const TurnsColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={turnsSrc} inset="8.33% 4.17% 8.33% 8.33%" />;
};

/** Mistakes — mistakes, error, incorrect, wrong, failed, problem, issue */
export const MistakesColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={mistakesSrc} inset="8.33% 4.17% 8.33% 8.33%" />;
};

/** Level Bubble — level, bubble, progress, game, achievement, advancement, rank */
export const LevelBubbleColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={levelBubbleSrc} inset="8.33% 8.33% 4.17% 8.33%" />;
};

/** Extra Challenge — challenge, extra, bonus, quest, task, additional, special */
export const ExtraChallengeColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={extraChallengeSrc} inset="8.33% 8.33% 4.17% 8.33%" />;
};

/** Boosted Challenge — challenge, boost, quest, task, competition, enhanced, power */
export const BoostedChallengeColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={boostedChallengeSrc} inset="8.33% 8.33% 4.17% 8.33%" />;
};

/** Desert Saguaro — desert, saguaro, cactus, plant, flora, nature, landscape */
export const DesertSaguaroColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={desertSaguaroSrc} inset="0 12.5% 0 8.33%" />;
};

/** Forest Leaves — forest, leaves, nature, plant, tree, greenery, foliage */
export const ForestLeavesColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={forestLeavesSrc} inset="8.33% 0 12.5% 0" />;
};

/** Mountain Feather — mountain, feather, nature, landscape, altitude, peak, light */
export const MountainFeatherColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={mountainFeatherSrc} inset="0 12.5% 0 8.33%" />;
};

/** Ocean Jellyfish — jellyfish, ocean, sea, water, marine, aquatic, creature */
export const OceanJellyfishColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={oceanJellyfishSrc} inset="0 4.17%" />;
};

/** Ocean Shell — shell, ocean, sea, marine, beach, seashell, coast */
export const OceanShellColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={oceanShellSrc} inset="0" />;
};

/** Bell — notification, alert, ring, chime, sound, reminder, attention */
export const BellColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={bellSrc} inset="7.64% 12.56% 8.31% 12.5%" clip={false} />;
};

/** Phone — phone, call, contact, communication, mobile, telephone */
export const PhoneColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size, false)} className={className} {...ariaProps(accessibilityLabel)}>
      <div style={{ position: "absolute", inset: "4.17% 7.75% 8.33% 8.33%" }}>
        <img alt="" src={phoneSrc} style={IMG_FILL} />
      </div>
    </div>
  );
};

/** Payment History — payment, history, transactions, billing, records, past, activity */
export const PaymentHistoryColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={paymentHistorySrc} inset="8.33% 16.67%" />;
};

/** PDF — pdf, document, file, download, report, paper, text */
export const PDFColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={pdfSrc} inset="8.33% 16.67%" />;
};

// ─── Multi-part icons ─────────────────────────────────────────────────────────

/** Gift Box — gift, box, present, surprise, reward, package, special */
export const GiftBoxColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size)} className={className} {...ariaProps(accessibilityLabel)}>
      {/* bow */}
      <div style={{ position: "absolute", inset: "12.5% 16.15% 63.65% 16.67%" }}>
        <img alt="" src={giftBoxBowSrc} style={IMG_FILL} />
      </div>
      {/* box */}
      <div style={{ position: "absolute", top: "25%", right: "12.5%", bottom: "8.33%", left: "12.5%" }}>
        <img alt="" src={giftBoxBoxSrc} style={IMG_FILL} />
      </div>
    </div>
  );
};

/** Lotus — lotus, flower, plant, water, meditation, peace, serenity */
export const LotusColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size)} className={className} {...ariaProps(accessibilityLabel)}>
      {/* leaves */}
      <div style={{ position: "absolute", inset: "56.25% 14.58% 10.42% 14.58%" }}>
        <img alt="" src={lotusLeavesSrc} style={IMG_FILL} />
      </div>
      {/* flower */}
      <div style={{ position: "absolute", inset: "10.42% 2.08% 24.58% 2.08%" }}>
        <img alt="" src={lotusFlowerSrc} style={IMG_FILL} />
      </div>
    </div>
  );
};

/** Food Donation — food, donation, meal, give, charity, contribute, hunger */
export const FoodDonationColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size)} className={className} {...ariaProps(accessibilityLabel)}>
      <div style={{ position: "absolute", inset: "8.33% 65.15% 76.21% 22.64%" }}>
        <img alt="" src={foodDonationVectorSrc} style={IMG_FILL} />
      </div>
      <div style={{ position: "absolute", inset: "11.79% 44.54% 48.34% 12.01%", transform: "rotate(4.48deg)" }}>
        <img alt="" src={foodDonationGroupSrc} style={IMG_FILL} />
      </div>
      <div style={{ position: "absolute", inset: "8.81% 10.76% 21.94% 33.86%" }}>
        <img alt="" src={foodDonationBagSrc} style={IMG_FILL} />
      </div>
      <div style={{ position: "absolute", inset: "40.1% 8.32% 8.33% 8.32%" }}>
        <img alt="" src={foodDonationTraySrc} style={IMG_FILL} />
      </div>
    </div>
  );
};

/** Calculator — calculator, math, compute, calculate, numbers, arithmetic, tool */
export const CalculatorColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size)} className={className} {...ariaProps(accessibilityLabel)}>
      {/* body */}
      <div style={{ position: "absolute", inset: "8.33% 12.5%" }}>
        <img alt="" src={calculatorBodySrc} style={IMG_FILL} />
      </div>
      {/* controls */}
      <div style={{ position: "absolute", inset: "45.83% 33.33% 18.75% 22.92%" }}>
        <img alt="" src={calculatorControlsSrc} style={IMG_FILL} />
      </div>
    </div>
  );
};

/** Birthday — birthday, celebration, cake, party, age, anniversary, festive */
export const BirthdayColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size, false)} className={className} {...ariaProps(accessibilityLabel)}>
      {/* cake base */}
      <div style={{ position: "absolute", inset: "45.83% 16.67% 12.5% 16.67%" }}>
        <img alt="" src={birthdayCakeSrc} style={IMG_FILL} />
      </div>
      {/* candles (center) */}
      <div style={{ position: "absolute", inset: "8.33% 45.83% 58.07% 45.83%" }}>
        <img alt="" src={birthdayCandleSrc} style={IMG_FILL} />
      </div>
      {/* candles (right) */}
      <div style={{ position: "absolute", inset: "8.33% 25%, 58.07%, 66.67%" }}>
        <img alt="" src={birthdayCandleSrc} style={IMG_FILL} />
      </div>
      {/* candles (left) */}
      <div style={{ position: "absolute", top: "8.33%", right: "66.67%", bottom: "58.07%", left: "25%" }}>
        <img alt="" src={birthdayCandleSrc} style={IMG_FILL} />
      </div>
      {/* icing */}
      <div style={{ position: "absolute", inset: "37.5% 8.33% 8.33% 8.33%" }}>
        <img alt="" src={birthdayIcingSrc} style={IMG_FILL} />
      </div>
      {/* flames */}
      <div style={{ position: "absolute", inset: "58.33% 12.5% 29.17% 12.5%" }}>
        <img alt="" src={birthdayFlamesSrc} style={IMG_FILL} />
      </div>
    </div>
  );
};

/** T&Cs — terms, conditions, agreement, legal, policy, rules, compliance */
export const TandCsColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size)} className={className} {...ariaProps(accessibilityLabel)}>
      {/* base document */}
      <div style={{ position: "absolute", inset: "8.33% 16.67%" }}>
        <img alt="" src={tandCsBaseSrc} style={IMG_FILL} />
      </div>
      {/* text lines */}
      <div style={{ position: "absolute", inset: "34.5% 25.67% 22.58% 27.24%" }}>
        <img alt="" src={tandCsTextSrc} style={IMG_FILL} />
      </div>
    </div>
  );
};

/** Cover Details — cover, details, insurance, policy, information, plan, coverage */
export const CoverDetailsColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size)} className={className} {...ariaProps(accessibilityLabel)}>
      {/* sheet */}
      <div style={{ position: "absolute", inset: "8.33% 16.67%" }}>
        <img alt="" src={coverDetailsSheetSrc} style={IMG_FILL} />
      </div>
      {/* circle badge */}
      <div style={{ position: "absolute", inset: "60.42% 5.42% 5% 58.33%" }}>
        <img alt="" src={coverDetailsCircleSrc} style={IMG_FILL} />
      </div>
    </div>
  );
};

/** Policy Summary — policy, summary, insurance, overview, details, brief, plan */
export const PolicySummaryColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size)} className={className} {...ariaProps(accessibilityLabel)}>
      {/* document */}
      <div style={{ position: "absolute", inset: "8.33% 12.5% 8.33% 20.83%" }}>
        <img alt="" src={policySummaryDocSrc} style={IMG_FILL} />
      </div>
      {/* avatar */}
      <div style={{ position: "absolute", inset: "6.25% 41.67% 39.58% 8.33%" }}>
        <img alt="" src={policySummaryAvatarSrc} style={IMG_FILL} />
      </div>
    </div>
  );
};

/** Streak Saver — streak, saver, protection, safety, maintain, preserve, keep */
export const StreakSaverColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size)} className={className} {...ariaProps(accessibilityLabel)}>
      {/* freeze background */}
      <div style={{ position: "absolute", inset: "4.17% 8.33% 4.35% 8.33%" }}>
        <img alt="" src={streakSaverFreezeSrc} style={IMG_FILL} />
      </div>
      {/* calendar background */}
      <div
        style={{ position: "absolute", inset: "12.5% 12.5% 16.67% 12.5%", background: "#6bdcff", borderRadius: 2 }}
      />
      {/* calendar grid */}
      <div style={{ position: "absolute", inset: "12.5% 12.5% 16.67% 12.5%" }}>
        <img alt="" src={streakSaverCalSrc} style={IMG_FILL} />
      </div>
      {/* calendar knob left */}
      <div
        style={{
          position: "absolute",
          top: "8.33%",
          right: "62.5%",
          bottom: "75%",
          left: "29.17%",
          background: "#00c2ff",
          borderRadius: 2,
        }}
      />
      {/* calendar knob right */}
      <div
        style={{
          position: "absolute",
          top: "8.33%",
          right: "33.33%",
          bottom: "75%",
          left: "58.33%",
          background: "#00c2ff",
          borderRadius: 2,
        }}
      />
      {/* check mark */}
      <div style={{ position: "absolute", inset: "44.79% 38.54% 32.29% 30.21%" }}>
        <img alt="" src={streakSaverCheckSrc} style={IMG_FILL} />
      </div>
    </div>
  );
};

/** Calendar — calendar, date, schedule, month, day, planning, events */
export const CalendarColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size)} className={className} {...ariaProps(accessibilityLabel)}>
      {/* calendar body background */}
      <div
        style={{ position: "absolute", inset: "16.67% 12.5% 12.5% 12.5%", background: "#b9a2ff", borderRadius: 2 }}
      />
      {/* calendar grid */}
      <div style={{ position: "absolute", inset: "16.67% 12.5% 12.5% 12.5%" }}>
        <img alt="" src={calendarGridSrc} style={IMG_FILL} />
      </div>
      {/* left knob */}
      <div
        style={{
          position: "absolute",
          top: "8.33%",
          right: "62.5%",
          bottom: "70.83%",
          left: "29.17%",
          background: "#7b46fe",
          borderRadius: 2,
        }}
      />
      {/* right knob */}
      <div
        style={{
          position: "absolute",
          top: "8.33%",
          right: "33.33%",
          bottom: "70.83%",
          left: "58.33%",
          background: "#7b46fe",
          borderRadius: 2,
        }}
      />
    </div>
  );
};

/** Piggy Bank — piggy bank, savings, money, finance, secure, save, account */
export const PiggyBankColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size, false)} className={className} {...ariaProps(accessibilityLabel)}>
      {/* ear */}
      <div style={{ position: "absolute", inset: "34.64% 3.79% 44.19% 80.87%" }}>
        <img alt="" src={piggyBankEarSrc} style={IMG_FILL} />
      </div>
      {/* leg 1 */}
      <div style={{ position: "absolute", inset: "37.39% 73.06% 47.97% 4.17%" }}>
        <img alt="" src={piggyBankLeg1Src} style={IMG_FILL} />
      </div>
      {/* leg 2 */}
      <div style={{ position: "absolute", inset: "41.3% 73.06% 39.98% 4.17%" }}>
        <img alt="" src={piggyBankLeg2Src} style={IMG_FILL} />
      </div>
      {/* body */}
      <div style={{ position: "absolute", inset: "17.49% 16.94% 16.76% 12.93%" }}>
        <img alt="" src={piggyBankBodySrc} style={IMG_FILL} />
      </div>
      {/* tail */}
      <div style={{ position: "absolute", inset: "67.56% 57.71% 8.33% 25.67%" }}>
        <img alt="" src={piggyBankTailSrc} style={IMG_FILL} />
      </div>
      {/* snout */}
      <div style={{ position: "absolute", inset: "40.83% 16.94% 16.76% 15.38%" }}>
        <img alt="" src={piggyBankSnoutSrc} style={IMG_FILL} />
      </div>
      {/* coin slot */}
      <div style={{ position: "absolute", inset: "7.6% 52.14% 72.31% 26.52%" }}>
        <img alt="" src={piggyBankCoinSrc} style={IMG_FILL} />
      </div>
      {/* coin */}
      <div style={{ position: "absolute", inset: "8.48% 65.64% 58.71% 14.34%" }}>
        <img alt="" src={piggyBankSlotSrc} style={IMG_FILL} />
      </div>
      {/* nostril */}
      <div style={{ position: "absolute", inset: "71.16% 26% 8.33% 58.04%" }}>
        <img alt="" src={piggyBankNostrilSrc} style={IMG_FILL} />
      </div>
      {/* eye */}
      <div style={{ position: "absolute", inset: "34.39% 58.51% 55.5% 27.69%", transform: "rotate(-14.99deg)" }}>
        <img alt="" src={piggyBankEyeSrc} style={IMG_FILL} />
      </div>
      {/* pupil */}
      <div style={{ position: "absolute", inset: "45.38% 56.52% 40.88% 28.78%" }}>
        <img alt="" src={piggyBankPupilSrc} style={IMG_FILL} />
      </div>
    </div>
  );
};

/** Donate — donate, give, charity, contribution, support, share, gift */
export const DonateColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size, false)} className={className} {...ariaProps(accessibilityLabel)}>
      {/* heart */}
      <div style={{ position: "absolute", top: "11.91%", right: "28.76%", bottom: "50%", left: "28.61%" }}>
        <img alt="" src={donateHeartSrc} style={IMG_FILL} />
      </div>
      {/* left hand */}
      <div style={{ position: "absolute", inset: "23.24% 52.33% 8.32% 4.22%" }}>
        <img alt="" src={donateLeftSrc} style={IMG_FILL} />
      </div>
      {/* right hand (mirrored) */}
      <div style={{ position: "absolute", inset: "23.19% 4.36% 8.37% 52.18%", transform: "scaleX(-1)" }}>
        <img alt="" src={donateRightSrc} style={IMG_FILL} />
      </div>
    </div>
  );
};

/** Custom Cover — custom, cover, insurance, policy, personalize, create, design */
export const CustomCoverColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size, false)} className={className} {...ariaProps(accessibilityLabel)}>
      {/* paper */}
      <div style={{ position: "absolute", inset: "8.33% 30% 20.59% 8.33%" }}>
        <img alt="" src={customCoverPaperSrc} style={IMG_FILL} />
      </div>
      {/* badge */}
      <div style={{ position: "absolute", inset: "16.67% 7.1% 8.33% 47.92%" }}>
        <img alt="" src={customCoverBadgeSrc} style={IMG_FILL} />
      </div>
    </div>
  );
};

/** Members — members, people, group, team, users, participants, individuals */
export const MembersColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size)} className={className} {...ariaProps(accessibilityLabel)}>
      {/* document */}
      <div style={{ position: "absolute", inset: "8.33% 16.67%" }}>
        <img alt="" src={membersDocSrc} style={IMG_FILL} />
      </div>
      {/* user */}
      <div style={{ position: "absolute", inset: "41.67% 6.25% 7.15% 47.92%" }}>
        <img alt="" src={membersUserSrc} style={IMG_FILL} />
      </div>
    </div>
  );
};

/** Beneficiary — beneficiary, recipient, dependent, person, individual */
export const BeneficiaryColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size)} className={className} {...ariaProps(accessibilityLabel)}>
      {/* document */}
      <div style={{ position: "absolute", inset: "8.33% 16.67%" }}>
        <img alt="" src={beneficiaryDocSrc} style={IMG_FILL} />
      </div>
      {/* user */}
      <div style={{ position: "absolute", inset: "41.67% 6.25% 7.15% 47.92%" }}>
        <img alt="" src={beneficiaryUserSrc} style={IMG_FILL} />
      </div>
    </div>
  );
};

/** Desert Parodia — desert, parodia, cactus, plant, flora, succulent, nature */
export const DesertParodiaColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size)} className={className} {...ariaProps(accessibilityLabel)}>
      {/* body */}
      <div style={{ position: "absolute", inset: "11.02% 15.08% 50.24% 16.27%" }}>
        <img alt="" src={desertParodiaBodySrc} style={IMG_FILL} />
      </div>
      {/* arm 1 (rotated) */}
      <div style={{ position: "absolute", inset: "15.88% 74.2% 62.78% 8.33%", transform: "rotate(-72.66deg)" }}>
        <img alt="" src={desertParodiaArm1Src} style={IMG_FILL} />
      </div>
      {/* arm 2 (rotated) */}
      <div style={{ position: "absolute", inset: "0 8.33% 80.64% 69.17%", transform: "rotate(6.12deg)" }}>
        <img alt="" src={desertParodiaArm2Src} style={IMG_FILL} />
      </div>
      {/* pot */}
      <div style={{ position: "absolute", inset: "45.54% 29.26% 0 24.92%" }}>
        <img alt="" src={desertParodiaPotSrc} style={IMG_FILL} />
      </div>
    </div>
  );
};

/** Drink — drink, water, beverage, hydration, cup, glass, liquid */
export const DrinkColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size, false)} className={className} {...ariaProps(accessibilityLabel)}>
      {/* straw */}
      <div style={{ position: "absolute", inset: "51.11% 28.61% 4.17% 28.61%" }}>
        <img alt="" src={drinkStrawSrc} style={IMG_FILL} />
      </div>
      {/* cup */}
      <div style={{ position: "absolute", inset: "8.33% 19.54% 36.9% 20.83%" }}>
        <img alt="" src={drinkCupSrc} style={IMG_FILL} />
      </div>
      {/* base/shadow */}
      <div style={{ position: "absolute", inset: "86.15% 43.03% 10.04% 42.81%" }}>
        <img alt="" src={drinkBaseSrc} style={IMG_FILL} />
      </div>
      {/* umbrella */}
      <div style={{ position: "absolute", inset: "14.04% 26.33% 71.91% 64.58%" }}>
        <img alt="" src={drinkUmbrellaSrc} style={IMG_FILL} />
      </div>
    </div>
  );
};

/** Duels — duels, challenge, battle, competition, game, fight, versus */
export const DuelsColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size)} className={className} {...ariaProps(accessibilityLabel)}>
      {/* back shoe (rotated) */}
      <div style={{ position: "absolute", inset: "8.33% 4.32% 8.36% -1.67%", transform: "rotate(8.39deg)" }}>
        <img alt="" src={duelsBackSrc} style={IMG_FILL} />
      </div>
      {/* front shoe (mirrored + rotated) */}
      <div
        style={{ position: "absolute", inset: "8.33% -1.67% 8.36% 4.32%", transform: "scaleX(-1) rotate(-8.39deg)" }}
      >
        <img alt="" src={duelsFrontSrc} style={IMG_FILL} />
      </div>
    </div>
  );
};

/** Star — star, reward, rating, favourite, achievement, gold */
export const StarColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={starSrc} inset="0%" clip={false} />;
};

// ─── Rank icons ───────────────────────────────────────────────────────────────

/** Rank Gold — rank, leaderboard, medal, gold, first, 1st, position, special */
export const RankGoldColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={rankGoldSrc} inset="2.08% 8.33% 0.38% 8.33%" />;
};

/** Rank Silver — rank, leaderboard, medal, silver, second, 2nd, position, special */
export const RankSilverColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={rankSilverSrc} inset="2.08% 8.33% 0.38% 8.33%" />;
};

/** Rank Bronze — rank, leaderboard, medal, bronze, third, 3rd, position, special */
export const RankBronzeColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size)} className={className} {...ariaProps(accessibilityLabel)}>
      <div style={{ position: "absolute", inset: "2.08% 8.33% 0.38% 8.33%" }}>
        <img alt="" src={rankBronzeSrc} style={IMG_FILL} />
      </div>
      <div style={{ position: "absolute", top: "25%", right: "37.5%", bottom: "39.57%", left: "37.5%" }}>
        <img alt="" src={rankBronze3Src} style={IMG_FILL} />
      </div>
    </div>
  );
};

/** Rank Draw — rank, leaderboard, draw, tie, tied, equal, position, special */
export const RankDrawColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={rankDrawSrc} inset="2.08% 8.33% 0.38% 8.33%" />;
};

/** Rank Purple — rank, leaderboard, position, purple, bubble, number, standard */
export const RankPurpleColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={rankPurpleSrc} inset="2.08% 8.33% 0.38% 8.33%" />;
};

/** Rank Blue — rank, leaderboard, position, blue, bubble, number, standard */
export const RankBlueColourIcon = (p: ColourIconProps) => {
  return <SimpleColourIcon {...p} src={rankBlueSrc} inset="2.08% 8.33% 0.38% 8.33%" />;
};

/** Rank Green — rank, leaderboard, position, green, bubble, number, standard */
export const RankGreenColourIcon = ({ size = 24, accessibilityLabel, className }: ColourIconProps) => {
  return (
    <div style={outerStyle(size)} className={className} {...ariaProps(accessibilityLabel)}>
      <div style={{ position: "absolute", inset: "2.08% 8.33% 0.38% 8.33%" }}>
        <img alt="" src={rankGreenSrc} style={IMG_FILL} />
      </div>
      <div style={{ position: "absolute", top: "25%", right: "37.5%", bottom: "39.57%", left: "37.5%" }}>
        <img alt="" src={rankGreen3Src} style={IMG_FILL} />
      </div>
    </div>
  );
};

// ─── YugiStatus icons ─────────────────────────────────────────────────────────

import yugiStatusErrorSrc from "./png/Status=Error.png";
import yugiStatusWarningSrc from "./png/Status=Warning.png";
import yugiStatusSuccessSrc from "./png/Status=Success.png";
import yugiStatusInfoSrc from "./png/Status=Info.png";

const YugiStatusPngIcon = ({ src, size = 48, accessibilityLabel, className }: ColourIconProps & { src: string }) => {
  const s = size as number;
  return (
    <img
      src={src}
      width={s}
      height={s}
      style={{ display: "block", flexShrink: 0 }}
      className={className}
      {...(accessibilityLabel
        ? { role: "img" as const, "aria-label": accessibilityLabel }
        : { "aria-hidden": true as const })}
    />
  );
};

/** YugiStatus Error — inline banner error state, notification, alert, danger */
export const YugiStatusErrorColourIcon = (p: ColourIconProps) => {
  return <YugiStatusPngIcon {...p} src={yugiStatusErrorSrc} />;
};

/** YugiStatus Warning — inline banner warning state, caution, alert */
export const YugiStatusWarningColourIcon = (p: ColourIconProps) => {
  return <YugiStatusPngIcon {...p} src={yugiStatusWarningSrc} />;
};

/** YugiStatus Success — inline banner success state, complete, done, confirmed */
export const YugiStatusSuccessColourIcon = (p: ColourIconProps) => {
  return <YugiStatusPngIcon {...p} src={yugiStatusSuccessSrc} />;
};

/** YugiStatus Info — inline banner info state, information, notice */
export const YugiStatusInfoColourIcon = (p: ColourIconProps) => {
  return <YugiStatusPngIcon {...p} src={yugiStatusInfoSrc} />;
};
