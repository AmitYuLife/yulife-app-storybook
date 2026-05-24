/**
 * Figma Code Connect — Iconography
 *
 * Maps each icon to its Figma component node.
 * File: https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography
 *
 * Stubs (figma-stubs.ts) stand in for the real SVG components so that
 * @figma/code-connect can parse this file without the Vite pipeline.
 *
 * To publish:
 *   FIGMA_ACCESS_TOKEN=<token> npx figma connect publish
 *
 * To unpublish:
 *   FIGMA_ACCESS_TOKEN=<token> npx figma connect unpublish
 */

import React from "react";
import figma from "@figma/code-connect";
import { Icon } from "./icon";
import type { FC, SVGProps } from "react";

import {
  HamburgerIcon,
  CheckIcon,
  LeftIcon,
  RightIcon,
  UpIcon,
  DownIcon,
  CloseIcon,
  AddIcon,
  CaretIcon,
  BulletIcon,
  ChatHelpIcon,
  LogOutIcon,
  ClockIcon,
  StarLineIcon,
  SettingsGearIcon,
  InfoIcon,
  StatusInfoIcon,
  StatusSuccessIcon,
  StarFillIcon,
  AvailableRewardsIcon,
  QuestionOutlineIcon,
  InviteIcon,
  WorldIcon,
  StreakIcon,
  WellbeingHubIcon,
  HeartIcon,
  ActivityHistoryIcon,
  CyclingIcon,
  MindfulnessIcon,
  FiitIcon,
  YuniversityIcon,
  YudokuIcon,
  PigIcon,
  SmartPensionIcon,
  EmotionIcon,
  AccountIcon,
  SleepIcon,
  PlantIcon,
  CalendarIcon,
  DropIcon,
  MealIcon,
  PlasticIcon,
  TodaysYuCoinIcon,
  MapIcon,
  TrophyIcon,
  CoinStackIcon,
  YugiHeadIcon,
  ChestIcon,
  TreasureChestIcon,
  UnityIcon,
  LevelIcon,
} from "./figma-stubs";

type SvgStub = FC<SVGProps<SVGSVGElement>>;

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3082", {
  imports: ['import { Icon, HamburgerIcon } from "@/icons"'],
  example: () => <Icon svg={HamburgerIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Hamburger" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3202", {
  imports: ['import { Icon, CheckIcon } from "@/icons"'],
  example: () => <Icon svg={CheckIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Check" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3212", {
  imports: ['import { Icon, LeftIcon } from "@/icons"'],
  example: () => <Icon svg={LeftIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Left" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3214", {
  imports: ['import { Icon, RightIcon } from "@/icons"'],
  example: () => <Icon svg={RightIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Right" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3216", {
  imports: ['import { Icon, UpIcon } from "@/icons"'],
  example: () => <Icon svg={UpIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Up" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3218", {
  imports: ['import { Icon, DownIcon } from "@/icons"'],
  example: () => <Icon svg={DownIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Down" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3220", {
  imports: ['import { Icon, CloseIcon } from "@/icons"'],
  example: () => <Icon svg={CloseIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Close" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=6525:2082", {
  imports: ['import { Icon, AddIcon } from "@/icons"'],
  example: () => <Icon svg={AddIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Add" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3367", {
  imports: ['import { Icon, CaretIcon } from "@/icons"'],
  example: () => <Icon svg={CaretIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Caret" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=8365:118", {
  imports: ['import { Icon, BulletIcon } from "@/icons"'],
  example: () => <Icon svg={BulletIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Bullet" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3135", {
  imports: ['import { Icon, ChatHelpIcon } from "@/icons"'],
  example: () => <Icon svg={ChatHelpIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Chat Help" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3137", {
  imports: ['import { Icon, LogOutIcon } from "@/icons"'],
  example: () => <Icon svg={LogOutIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Log Out" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3165", {
  imports: ['import { Icon, ClockIcon } from "@/icons"'],
  example: () => <Icon svg={ClockIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Clock" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3169", {
  imports: ['import { Icon, StarLineIcon } from "@/icons"'],
  example: () => <Icon svg={StarLineIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Star Line" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3208", {
  imports: ['import { Icon, SettingsGearIcon } from "@/icons"'],
  example: () => (
    <Icon svg={SettingsGearIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Settings Gear" />
  ),
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3277", {
  imports: ['import { Icon, InfoIcon } from "@/icons"'],
  example: () => <Icon svg={InfoIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Info" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3281", {
  imports: ['import { Icon, StatusInfoIcon } from "@/icons"'],
  example: () => (
    <Icon svg={StatusInfoIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Status Info" />
  ),
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3289", {
  imports: ['import { Icon, StatusSuccessIcon } from "@/icons"'],
  example: () => (
    <Icon svg={StatusSuccessIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Status Success" />
  ),
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3328", {
  imports: ['import { Icon, StarFillIcon } from "@/icons"'],
  example: () => <Icon svg={StarFillIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Star Fill" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3395", {
  imports: ['import { Icon, AvailableRewardsIcon } from "@/icons"'],
  example: () => (
    <Icon svg={AvailableRewardsIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Available Rewards" />
  ),
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3414", {
  imports: ['import { Icon, QuestionOutlineIcon } from "@/icons"'],
  example: () => (
    <Icon svg={QuestionOutlineIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Question Outline" />
  ),
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=7450:10", {
  imports: ['import { Icon, InviteIcon } from "@/icons"'],
  example: () => <Icon svg={InviteIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Invite" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=6710:35", {
  imports: ['import { Icon, WorldIcon } from "@/icons"'],
  example: () => <Icon svg={WorldIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="World" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3094", {
  imports: ['import { Icon, StreakIcon } from "@/icons"'],
  example: () => <Icon svg={StreakIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Streak" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3102", {
  imports: ['import { Icon, WellbeingHubIcon } from "@/icons"'],
  example: () => (
    <Icon svg={WellbeingHubIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Wellbeing Hub" />
  ),
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3131", {
  imports: ['import { Icon, HeartIcon } from "@/icons"'],
  example: () => <Icon svg={HeartIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Heart" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3194", {
  imports: ['import { Icon, ActivityHistoryIcon } from "@/icons"'],
  example: () => (
    <Icon svg={ActivityHistoryIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Activity History" />
  ),
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3300", {
  imports: ['import { Icon, CyclingIcon } from "@/icons"'],
  example: () => <Icon svg={CyclingIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Cycling" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3302", {
  imports: ['import { Icon, MindfulnessIcon } from "@/icons"'],
  example: () => (
    <Icon svg={MindfulnessIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Mindfulness" />
  ),
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5110:2085", {
  imports: ['import { Icon, FiitIcon } from "@/icons"'],
  example: () => <Icon svg={FiitIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Fiit" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5813:2082", {
  imports: ['import { Icon, YuniversityIcon } from "@/icons"'],
  example: () => (
    <Icon svg={YuniversityIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Yuniversity" />
  ),
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=6074:2084", {
  imports: ['import { Icon, YudokuIcon } from "@/icons"'],
  example: () => <Icon svg={YudokuIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Yudoku" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=6301:2096", {
  imports: ['import { Icon, PigIcon } from "@/icons"'],
  example: () => <Icon svg={PigIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Pig" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=6384:2089", {
  imports: ['import { Icon, SmartPensionIcon } from "@/icons"'],
  example: () => (
    <Icon svg={SmartPensionIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Smart Pension" />
  ),
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=7424:573", {
  imports: ['import { Icon, EmotionIcon } from "@/icons"'],
  example: () => <Icon svg={EmotionIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Emotion" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=7424:576", {
  imports: ['import { Icon, AccountIcon } from "@/icons"'],
  example: () => <Icon svg={AccountIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Account" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=7424:577", {
  imports: ['import { Icon, SleepIcon } from "@/icons"'],
  example: () => <Icon svg={SleepIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Sleep" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=7758:72", {
  imports: ['import { Icon, PlantIcon } from "@/icons"'],
  example: () => <Icon svg={PlantIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Plant" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=8132:9", {
  imports: ['import { Icon, CalendarIcon } from "@/icons"'],
  example: () => <Icon svg={CalendarIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Calendar" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=7758:73", {
  imports: ['import { Icon, DropIcon } from "@/icons"'],
  example: () => <Icon svg={DropIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Drop" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=7758:74", {
  imports: ['import { Icon, MealIcon } from "@/icons"'],
  example: () => <Icon svg={MealIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Meal" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=7758:75", {
  imports: ['import { Icon, PlasticIcon } from "@/icons"'],
  example: () => <Icon svg={PlasticIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Plastic" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3039", {
  imports: ['import { Icon, TodaysYuCoinIcon } from "@/icons"'],
  example: () => (
    <Icon svg={TodaysYuCoinIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Todays YuCoin" />
  ),
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3049", {
  imports: ['import { Icon, MapIcon } from "@/icons"'],
  example: () => <Icon svg={MapIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Map" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3067", {
  imports: ['import { Icon, TrophyIcon } from "@/icons"'],
  example: () => <Icon svg={TrophyIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Trophy" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3087", {
  imports: ['import { Icon, CoinStackIcon } from "@/icons"'],
  example: () => <Icon svg={CoinStackIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Coin Stack" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3142", {
  imports: ['import { Icon, YugiHeadIcon } from "@/icons"'],
  example: () => <Icon svg={YugiHeadIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Yugi Head" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3185", {
  imports: ['import { Icon, ChestIcon } from "@/icons"'],
  example: () => <Icon svg={ChestIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Chest" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5099:3382", {
  imports: ['import { Icon, TreasureChestIcon } from "@/icons"'],
  example: () => (
    <Icon svg={TreasureChestIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Treasure Chest" />
  ),
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=5110:2088", {
  imports: ['import { Icon, UnityIcon } from "@/icons"'],
  example: () => <Icon svg={UnityIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Unity" />,
});

figma.connect(Icon, "https://www.figma.com/design/sDuXCE69U5qvWYkOhEFHBd/App---Iconography?node-id=7424:575", {
  imports: ['import { Icon, LevelIcon } from "@/icons"'],
  example: () => <Icon svg={LevelIcon as SvgStub} size={24} color="currentColor" accessibilityLabel="Level" />,
});
