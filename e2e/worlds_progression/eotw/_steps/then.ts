import { navigation } from "@utils";
import { screens } from "@appScreens";
import { USER_2 } from "../../_data";
import { expect } from "detox";
import * as ids from "@ids";

export const {
    idVisible,
    idNotVisible,
    textVisible,
    textNotVisible,
    idExist,
    textVisibleAtIndex,
    navigateViaText,
    wait,
} = navigation.common;

export const {
    onChallengeComplete,
    onMeditationChallengeComplete,
    canSeeChallengeTiles,
    yunityRewardsVisible,
    successScreenNotHintVisible,
} = screens.challenges;

export const { swipeFromText, scrollUntilIdVisible } = navigation.scrolling;

export const { onCreateAvatarScreen, unlockedYumojiItemsVisible, yumojiItemLockedModalVisible } = screens.yuscreen;

export const yunityCorrect = (worldType: "Forest" | "Ocean" | "Desert" | "Mountain") => async () => {
    await wait(5000)();
    let label = "";

    switch (worldType) {
        case "Forest":
            label = "You've achieved Yunity with the Forest";
            break;
        case "Ocean":
            label = "You've achieved Yunity with the Ocean";
            break;
        case "Desert":
            label = "You've achieved Yunity with the Desert";
            break;
        case "Mountain":
            label = "You've achieved Yunity with the Mountain...";
    }
    await textVisible(label, 3000)();
    await navigateViaText("Continue", 3000);
    await textVisible(`You've earned the\nYunity ${worldType} Chest!`, 3000)();
    await navigateViaText("Open the chest", 3000);
};

export const mountainTwoRewardsVisible =
    (level400 = false) =>
    async () => {
        await textVisible("6 Levels\nBoost")();
        await textVisible("The Yuniversal\nReflection")();
        if (level400) {
            // @bug missing 300 yucoin text
            // await textVisible("300\nYuCoin")()
        }
    };

export const isOnExploreYuniverseScreen = async () => {
    await textVisible(
        "Now is a time for reflection and gratitude as you drift amongst the stars. Familiar friends will guide you on your path towards the Celestial Chest.",
        3000
    )();
};

export const yuniverseChallengesVisible = async () => {
    await idVisible(ids.CHALLENGE_SET)();
    await idVisible(ids.CHALLENGE_TILE("Short Stroll"))();
    await idVisible(ids.CHALLENGE_TILE("Brisk Walk"))();
    await idVisible(ids.CHALLENGE_TILE("Long Walk"))();
    await idVisible(ids.CHALLENGE_TILE("Meditation"))();
    await swipeFromText("Meditation", "up", "fast")();
    await idVisible(ids.CHALLENGE_TILE("Fiit Class"))();
    await swipeFromText("Fiit Class", "down", "fast")();
};

export const yucoinTodayEarnedWithSurge =
    (yucoinStart: number, yucoinEarned: number, waitTime = 0) =>
    async () => {
        await wait(waitTime)();
        const totalYuCoin = yucoinStart + yucoinEarned;
        await textVisible(`${totalYuCoin} YuCoin today`, 2500)();
    };

export function addCommasToNumber(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const stepsDoneToday = (steps: number) => async () => {
    const stepsComma = addCommasToNumber(steps);
    await textVisible(`${stepsComma} steps`)();
};

export const stepsChallengeDataCorrect = (stage: number, yucoinEarned: number, steps: number) => async () => {
    await textVisible(`Stage ${stage}`)();
    await textVisible(`${yucoinEarned}`)();
    await textVisible(`${steps} steps`)();
};

export const meditationChallengeDataCorrect = (stage: number, yucoinEarned: number, mins: number) => async () => {
    await textVisible(`Stage ${stage}`)();
    await textVisible(`${yucoinEarned}`)();
    await textVisible(`${mins} minutes`)();
};

export const celestialChestEarned = async () => {
    await wait(2000)();
    await idVisible(ids.CELESTIAL_CHEST_SCREEN)();
    await textVisible("You've earned the\nCelestial Chest!")();
};
export const celestialChestAwardsVisible = (user: typeof USER_2) => async () => {
    const yuCoinEarnt = user.data.earnRate * 50;

    await textVisible("You have earned")();
    await idVisible(ids.CELESTIAL_CARD("3\nDonations"))();
    await idVisible(ids.CELESTIAL_CARD(`${yuCoinEarnt}\nYuCoin`))();
};

export const challengesAvailableVisible = async () => {
    await idVisible(ids.CHALLENGE_SET)();
    await idVisible(ids.CHALLENGE_TILE("Short Stroll"))();
    await idVisible(ids.CHALLENGE_TILE("Brisk Walk"))();
    await idVisible(ids.CHALLENGE_TILE("Long Walk"))();
    await idVisible(ids.CHALLENGE_TILE("Meditation"))();
    await swipeFromText("Meditation", "up", "fast")();
    await idVisible(ids.CHALLENGE_TILE("Fiit Class"))();
    await swipeFromText("Fiit Class", "down", "fast")();
};

export const challengeStarsCorrect = (starCount: number, challengeType: string) => async () => {
    for (let i = 0; i < starCount; i += 1) {
        await expect(element(by.id(ids.CHALLENGE_HISTORY_STARS(i, challengeType)))).toBeVisible();
    }
};

export const challengesAndYuCoinsAwardedVisible = async () => {
    await idVisible(ids.CHALLENGE_HISTORY_NEW_SLOT("Short Stroll", "24", 3))();
    await idVisible(ids.CHALLENGE_HISTORY_NEW_SLOT("Brisk Walk", "36", 3))();
    await idVisible(ids.CHALLENGE_HISTORY_NEW_SLOT("Long Walk", "48", 3))();
    await idVisible(ids.CHALLENGE_HISTORY_NEW_SLOT("Meditation", "12", 1))();
};

export const weeklyChallengeIsVisible = (amount: string) => async () => {
    await textVisible(`${amount} coins`)();
    await textVisible(amount)();
};

export const weeklyQuestsPopUpVisible = async () => {
    await textVisible("Weekly quest", 1000)();
    await textVisible("Pick your challenge.")();
    await weeklyChallengeIsVisible("100")();
    await textVisible("Let's go")();
};

export const challengeSelectedModalVisible = (amount: string, challengeAmount: string) => async () => {
    await textVisible("Reward", 500)();
    await textVisible(amount)();
    await textVisible(`0 / ${challengeAmount} challenge(s)`)();
    await textVisible("Close")();
};

export const challengeProgressShown = (progress: number, max: number, color: string) => async () => {
    const completedChallenge = progress / 10;
    const totalChallenges = max / 10;

    await idVisible(ids.WEEKLY_PROGRESS_BAR(progress, max, color), 1000)();
    await textVisible(`${completedChallenge} / ${totalChallenges} challenge(s)`)();
};

export const completedChallengeModalVisible = async () => {
    await textVisible("Done! Claim your reward.", 1000)();
    await textVisible("Claim")();
};

export const challengeIsClaimed = (progress: number, max: number) => async () => {
    await textVisible("Good job! Be sure to return next week.", 750)();
    await textVisible("Claimed")();
    await idVisible(ids.WEEKLY_PROGRESS_BAR(progress, max, "#40C057"))();
};

export const nextYuniversalStageLocked = async () => {
    await textVisible("You have just completed a stage")();
    await idVisible(ids.CHALLENGE_UNAVAILABLE)();
};

export const planetsVisible = (planets: ids.Planet[]) => async () => {
    planets.forEach((planet) => async () => {
        await textVisible(planet, 2000)();
        idVisible(ids.PLANET(planet));
    });
};

export const planetsNotVisible = (planets: ids.Planet[]) => async () => {
    planets.forEach((planet) => async () => {
        idNotVisible(ids.PLANET(planet));
    });
};
