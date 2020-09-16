import { toOrdinalWord, getCurrentYuniverse, getCurrentWorldName, WorldName } from "@services/utils";

interface HeadlineObject {
  [WorldName.forest]: string;
  [WorldName.ocean]: string;
  [WorldName.desert]: string;
  [WorldName.mountain]: string;
}

interface TextObject {
  [WorldName.forest]: string[];
  [WorldName.ocean]: string[];
  [WorldName.desert]: string[];
  [WorldName.mountain]: string[];
}

export function getHeading(level: number): string {
  const world = getCurrentWorldName(level);
  const yuniverse = getCurrentYuniverse(level);

  const headline: HeadlineObject = {
    [WorldName.forest]: "You’ve achieved Yunity with the Forest",
    [WorldName.ocean]: "You’ve achieved Yunity with the Ocean",
    [WorldName.desert]: "You’ve achieved Yunity with the Desert",
    [WorldName.mountain]: `You’ve completed your ${toOrdinalWord(yuniverse + 1)} Yuniversal Journey`,
  };

  return headline[world];
}

export function getText(level: number): string[] {
  const world = getCurrentWorldName(level);
  const yuniverse = getCurrentYuniverse(level);

  const text: TextObject = {
    [WorldName.forest]: [
      "Take a deep, celebratory breath. You’ve unlocked a bonus daily challenge from now on, and double YuCoin until midnight tomorrow. That’s 2x YuCoin for every 2,000 steps you take!",
    ],
    [WorldName.ocean]: [
      "You took the plunge and ascended victorious! Enjoy a bonus daily challenge from now on, and double YuCoin until midnight tomorrow. That’s 2x YuCoin for every 2,000 steps you take!",
    ],
    [WorldName.desert]: [
      "You are your own wellbeing oasis! Celebrate with a bonus daily challenge from now on, and double YuCoin until midnight tomorrow. That’s 2x YuCoin for every 2,000 steps you take!",
    ],
    [WorldName.mountain]: [
      `By achieving Yunity in all four worlds, your ${toOrdinalWord(
        yuniverse + 1
      )} Yuniversal Journey is complete (you superstar, you)!`,
      "You’ve unlocked a 7-day surge, doubling your YuCoin Power. That’s 2x YuCoin for every 2,000 steps you take!",
      "Now it’s time to dive back into the Yuniverse in your new, enlightened state. Enjoy your journey through the four worlds, this time with 4 available challenges per day!",
    ],
  };

  return text[world];
}

export function getButtonLabel(level: number): string {
  const isYuniversal = level % 200 === 0;
  return isYuniversal ? "Continue" : "On to the next world";
}
