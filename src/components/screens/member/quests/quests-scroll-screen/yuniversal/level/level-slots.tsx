import { ILevelBubbleProps } from "./level-bubble";

interface LevelSlot {
  level: number;
  x: number;
  y: number;
  text?: string;
  name?: string;
  lockIcon?: ILevelBubbleProps["icon"];
}

export const slots: LevelSlot[] = [
  {
    level: 1,
    x: 187,
    y: 537,
    text: "I",
    name: "Yuniversal I",
    lockIcon: "lock",
  },
  {
    level: 2,
    x: 187,
    y: 627,
    text: "II",
    name: "Yuniversal II",
    lockIcon: "lock",
  },
  {
    level: 3,
    x: 277,
    y: 537,
    text: "III",
    name: "Yuniversal III",
    lockIcon: "lock",
  },
  {
    level: 4,
    x: 97,
    y: 537,
    text: "IV",
    name: "Yuniversal IV",
    lockIcon: "lock",
  },
  {
    level: 5,
    x: 187,
    y: 447,
    text: "V",
    name: "Yuniversal V",
    lockIcon: "lock",
  },
  {
    level: 6,
    x: 187,
    y: 355,
    text: "VI",
    name: "Yuniversal VI",
    lockIcon: "lock",
  },
  {
    level: 7,
    x: 187,
    y: 263,
    text: "VII",
    name: "Yuniversal VII",
    lockIcon: "chest",
  },
];
