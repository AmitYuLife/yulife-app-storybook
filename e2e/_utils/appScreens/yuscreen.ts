import * as ids from "@ids";
import moment from "moment";
import { expect } from "detox";
import { navigation } from "@utils";
import { yuscreenImages } from "@images";
import { getFullName } from "_utils/users";
import { yumojiCreateCopy } from "yuscreen/yuscreen_v5/_resources/constants";
import {
  scrollUntilTextVisible,
  scrollFromID,
  scrollUntilIdVisible,
} from "_utils/navigation/scrolling";

export const {
  idVisible,
  idNotVisible,
  textVisible,
  textNotVisible,
  expectIsVisibleViaID,
  expectIsVisibleViaText,
  multipleTextVisible,
  textVisibleAtIndex,
  idVisibleAtIndex,
  tapID,
  tapIDNotBeingVisible,
  tapText,
} = navigation.common;

export const onEmptyYuscreen = (customer) => async () => {
  const firstName = customer.data.firstName;
  const lastName = customer.data.lastName;

  const yuscreen = element(by.id(ids.YUSCREEN));
  const getStartedButton = element(by.id(ids.GET_STARTED_BUTTON));
  const copy = element(by.id(ids.EMPTY_YUSCREEN_COPY));

  await expect(yuscreen).toBeVisible();
  await expect(getStartedButton).toBeVisible();
  await expect(copy).toBeVisible();

  await expect(element(by.text(`${firstName} ${lastName}`))).toBeVisible();
};

export const onYuscreen = (customer: any) => async () => {
  const fullName = getFullName(customer);
  const yuscreen = element(by.id(ids.YUSCREEN));

  await expect(yuscreen).toBeVisible();

  await expect(element(by.text(fullName))).toBeVisible();
};

export const onCreateAvatarScreen = async () => {
  const createTitle = element(by.text("Create your Yumoji to step into the Yuniverse"));
  const editTitle = element(by.text("Pick a body type"));

  const maleBody = element(by.id(ids.MALE_BODY));
  await expect(maleBody).toBeVisible();

  const femaleBody = element(by.id(ids.FEMALE_BODY));
  await expect(femaleBody).toBeVisible();

  try {
    await expect(createTitle).toBeVisible();
  } catch (e) {
    await expect(editTitle).toBeVisible();
  }

  await textVisible("Continue")();
};

export const onAvatarBuilder = (screen: string) => async () => {
  const createTitle = element(by.text("Create your Yumoji"));
  const editTitle = element(by.text("Edit your Yumoji"));

  try {
    await expect(element(by.id(ids.BODY_ITEM_TITLE(screen)))).toBeVisible();
  } catch (e) {
    await expect(element(by.text(screen))).toBeVisible();
  }

  try {
    await expect(createTitle).toBeVisible();
  } catch (e) {
    await expect(editTitle).toBeVisible();
  }
};

export const onAvatarCompletionScreen = async () => {
  const copy = ["Great work! \nYour Yumoji is ready for adventure.", "Done"];

  await multipleTextVisible(copy)();
};

export const onYourYuCoin = async () => {
  const copy = ["2000 steps", "5 mindful mins", "1 challenge", "Streaks", "Chests"];

  const value = [1, 1, 6, 250, 20];

  await expect(element(by.text("Your YuCoin Power"))).toBeVisible();

  for (let i = 0; i < copy.length; i++) {
    await expect(element(by.id(ids.EARN_RATE_ROW(copy[i], value[i])))).toBeVisible();
  }
};

export const avatarBodyVisible =
  (eyes: string, hair: string, facialHair: string, glasses: string) => async () => {
    try {
      await expect(
        element(by.id(ids.AVATAR_BODY([eyes, hair, facialHair, glasses])))
      ).toBeVisible();
    } catch (e) {
      await expect(
        element(by.id(ids.BUILDER_BODY([eyes, hair, facialHair, glasses])))
      ).toBeVisible();
    }
  };

export const avatarBodyVisibleWithUser = (user) => async () => {
  const eyes = user.data.avatar.leftEye.partId;
  const hair = user.data.avatar.hair.partId;
  const facialHair = user.data.avatar.facialHair.partId;
  const glasses = user.data.avatar.glasses.partId;

  const partsList = [eyes, hair, facialHair, glasses];

  await expect(element(by.id(ids.AVATAR_BODY(partsList)))).toBeVisible();
};

export const leaderboardAvatarVisible =
  (facialHair: string, eyes: string, hair: string, glasses: string) => async () => {
    await expect(element(by.id(ids.AVATAR_BODY([facialHair, eyes, hair, glasses])))).toBeVisible();
  };

export const personalProductsVisible = async () => {
  const products = [
    "Income Protection",
    "Family Income Benefit",
    "Critical Illness",
    "Travel Insurance",
  ];

  for (const i of products) {
    await expect(element(by.id(ids.PERSONAL_PRODUCT(i)))).toBeVisible();
  }
};

export const onSurveyScreen = async () => {
  const surveyScreen = element(by.id(ids.SURVEY_SCREEN));
  const title = element(by.text("What Would You Like To See?"));

  await expect(surveyScreen).toBeVisible();
  await expect(title).toBeVisible();
};

export const onSurveySubmitScreen = async () => {
  const bodyCopy = element(
    by.text(
      "We appreciate your feedback. Thank you for helping us make YuLife the best insurance company in the world!"
    )
  );
  const buttonCopy = element(by.text("Close"));

  await expect(bodyCopy).toBeVisible();
  await expect(buttonCopy).toBeVisible();
};

export const onPackageScreen = async () => {
  await expectIsVisibleViaID(ids.PACKAGE_INFO);
  await multipleTextVisible(["Common", "Rare", "Epic"])();
};

export const packageScreenCorrect = async () => {
  const textElements = [
    "How it works",
    "How much would it pay out?",
    "Other benefits",
    "YuLife app",
    "Smart Health",
    "Documents",
    "Terms & Conditions",
    "Privacy Policy",
    "Rewards Policy",
    "Key Facts",
    "Policy Guide",
    "General Terms of Business",
    "Have a question?",
    "FAQs",
  ];

  for (const i of textElements) {
    try {
      await scrollUntilTextVisible(ids.FIB_BROWSE_SCREEN, i, "down")();
      await expect(element(by.text(i))).toBeVisible();
    } catch (e) {
      await scrollUntilTextVisible(ids.SUMMARY_SCROLL_VIEW, i, "down")();
      await expect(element(by.text(i))).toBeVisible();
    }
  }
};

export const onProductDetails =
  (coverType: string, productName: string, earnRate: number) => async () => {
    const lumpSum = `x salary as lump sum`;
    const yuCoin = `YuCoin Power`;

    const product = ids.TEXT_TEMPLATE(productName);
    const power = ids.VALUE_DESCRIPTION(earnRate, yuCoin);

    const documents = ids.TEXT_TEMPLATE("Documents");

    await expect(element(by.text(coverType))).toBeVisible();
    await expect(element(by.id(product))).toBeVisible();
    await expect(element(by.id(power))).toBeVisible();
    await expect(element(by.id(documents))).toBeVisible();
    await expect(element(by.text("Policy Details"))).toBeVisible();
  };

export const onCertificate =
  (
    productName: string,
    customer: any,
    customerGroupPol: any,
    business: any,
    businessEmployee: any
  ) =>
  async () => {
    const customerName = `${customer.data.firstName} ${customer.data.lastName}`;
    const companyName = business.data.business_account_name;
    const policyNumber = customerGroupPol.data.business_product_id;
    const dateJoined = moment(businessEmployee.data.start_date).format("DD/MM/YYYY");

    await expect(element(by.text(productName))).toBeVisible();

    await expect(element(by.text("Client name"))).toBeVisible();
    await expect(element(by.text(customerName))).toBeVisible();

    await expect(element(by.text("Company name"))).toBeVisible();
    await expect(element(by.text(companyName))).toBeVisible();

    await expect(element(by.text("Policy number"))).toBeVisible();
    await expect(element(by.text(policyNumber))).toBeVisible();

    await expect(element(by.text("Cover start date"))).toBeVisible();
    await expect(element(by.text(dateJoined))).toBeVisible();
  };

export const onChooseAvatarBodyScreen = async () => {
  const createTitle = element(by.text("Create your Yumoji to step into the Yuniverse"));
  await expect(createTitle).toBeVisible();

  const femaleBody = element(by.id(ids.FEMALE_BODY));
  await expect(femaleBody).toBeVisible();

  const maleBody = element(by.id(ids.MALE_BODY));
  await expect(maleBody).toBeVisible();

  const continueButtonText = element(by.text("Continue"));
  await expect(continueButtonText).toBeVisible();

  const laterButtonText = element(by.text("I'll do this later"));
  await expect(laterButtonText).toBeVisible();
};

export const onSkinToneScreen = (screen: string) => async () => {
  try {
    await expect(element(by.id(ids.BODY_ITEM_TITLE(screen)))).toBeVisible();
  } catch (e) {
    await expect(element(by.text(screen))).toBeVisible();
  }
};

export const onFacialHairScreen = (screen: string) => async () => {
  try {
    await expect(element(by.id(ids.BODY_ITEM_TITLE(screen)))).toBeVisible();
  } catch (e) {
    await expect(element(by.text(screen))).toBeVisible();
  }
};

export const yuCoinPowerInfoVisible = (earnRate: number) => async () => {
  const mindfulnessMultiple = earnRate * 4;
  const yucoinPowerUp = "Power up to earn more YuCoin";
  const passiveRewards = ["Steps", "Mindfulness", "Cycling"];

  await idVisible(ids.EARN_RATE(earnRate.toString()), 1000)();
  await textVisible(yucoinPowerUp, 2000)();
  await textVisible("Daily core activities", 1500)();

  for (const title of passiveRewards) {
    await waitFor(element(by.id(ids.ACTIVITY_PANEL_TITLE(title))))
      .toBeVisible()
      .withTimeout(3000);
  }

  await idVisible(ids.ACTIVITY_PANEL_REWARD(`up to ${mindfulnessMultiple}`), 1500)();

  const activeRewards = [
    { title: "Chest", reward: Math.round(earnRate * 20) },
    { title: "Streaks", reward: Math.round(earnRate * 30) },
    { title: "Challenges", reward: `up to ${Math.round(earnRate * 8)}` },
  ];

  for (const item of activeRewards) {
    await waitFor(element(by.id(ids.ACTIVITY_PANEL_TITLE(item.title))))
      .toBeVisible()
      .withTimeout(3000);
    await waitFor(element(by.id(ids.ACTIVITY_PANEL_REWARD(item.reward))))
      .toBeVisible()
      .withTimeout(3000);
  }
};

export const goToYuScreenAndDismissIntro = async () => {
  await tapID(ids.NAV_BAR("yu"))();
  await tapText("Check out my power", 2500)();
  await tapText("I'll do this later", 2500)();
};

export const goToYuScreenAndDismissPower = async () => {
  await tapID(ids.NAV_BAR("yu"))();
  await tapText("Check out my power", 2500)();
};

export const startYumojiBuilder = (bodyTypeID: string) => async () => {
  await tapID(ids.YUMOJI_PROMPT_CTA, 2500)();
  await tapID(bodyTypeID, 3000)();
  await tapID(ids.LABELS_CTA_CONTINUE, 300)();
};

export const unlockedYumojiItemsVisible =
  (gender: string, itemLevel: string, itemWorld: any, tapItem = true, scrollFromItemTab = true) =>
  async () => {
    scrollFromItemTab &&
      (await scrollFromID(ids.CATEGORY_TYPE("hairStyle"), "left", "fast", undefined, 4000)());

    await tapID(ids.CATEGORY_TYPE("chest"), 4000)();

    if (itemWorld !== "forest") {
      await scrollUntilIdVisible(
        ids.AVATAR_BUILDER_LIST,
        ids.YUMOJI_PART_ID(`yumoji_${gender}_chest_${itemLevel}_${itemWorld}`),
        "down",
        undefined,
        undefined,
        undefined,
        3000
      )();
      await scrollFromID(ids.AVATAR_BUILDER_LIST, "up", "fast", 0.1, 3000)();
    }
    await idVisible(
      ids.YUMOJI_PART_ID_STATUS("available", `yumoji_${gender}_chest_${itemLevel}_${itemWorld}`),
      5000
    )();
    tapItem &&
      (await tapID(ids.YUMOJI_PART_ID(`yumoji_${gender}_chest_${itemLevel}_${itemWorld}`), 5000)());

    await tapID(ids.CATEGORY_TYPE("pants"), 5000)();
    if (itemWorld !== "forest") {
      await scrollUntilIdVisible(
        ids.AVATAR_BUILDER_LIST,
        ids.YUMOJI_PART_ID(`yumoji_${gender}_pants_${itemLevel}_${itemWorld}`),
        "down",
        undefined,
        undefined,
        undefined,
        3000
      )();
      await scrollFromID(ids.AVATAR_BUILDER_LIST, "up", "fast", 0.1, 3000)();
    }
    await idVisible(
      ids.YUMOJI_PART_ID_STATUS("available", `yumoji_${gender}_pants_${itemLevel}_${itemWorld}`),
      4000
    )();
    tapItem &&
      (await tapID(ids.YUMOJI_PART_ID(`yumoji_${gender}_pants_${itemLevel}_${itemWorld}`), 5000)());

    await tapID(ids.CATEGORY_TYPE("boots"), 5000)();
    if (itemWorld !== "forest") {
      await scrollUntilIdVisible(
        ids.AVATAR_BUILDER_LIST,
        ids.YUMOJI_PART_ID(`yumoji_${gender}_boots_${itemLevel}_${itemWorld}`),
        "down",
        undefined,
        undefined,
        undefined,
        3000
      )();
    }
    await idVisible(
      ids.YUMOJI_PART_ID_STATUS("available", `yumoji_${gender}_boots_${itemLevel}_${itemWorld}`),
      4000
    )();
    tapItem &&
      (await tapID(ids.YUMOJI_PART_ID(`yumoji_${gender}_boots_${itemLevel}_${itemWorld}`), 5000)());

    if (itemLevel != "base") {
      await scrollFromID(ids.CATEGORY_TYPE("chest"), "left", "slow", undefined, 3000)();
      await tapID(ids.CATEGORY_TYPE("gloves"), 5000)();
      await scrollUntilIdVisible(
        ids.AVATAR_BUILDER_LIST,
        ids.YUMOJI_PART_ID(`yumoji_${gender}_gloves_${itemLevel}_${itemWorld}`),
        "down",
        undefined,
        undefined,
        undefined,
        3000
      )();
      await idVisible(
        ids.YUMOJI_PART_ID_STATUS("available", `yumoji_${gender}_gloves_${itemLevel}_${itemWorld}`),
        5000
      )();
      tapItem &&
        (await tapID(
          ids.YUMOJI_PART_ID(`yumoji_${gender}_gloves_${itemLevel}_${itemWorld}`),
          5000
        )());
    }
  };

export const saveYumoji =
  (firstTime = true) =>
  async () => {
    await tapID(ids.BUTTON_CLOSE_HEADER("Edit your Yumoji"), 2500)();
    await tapID(ids.GENERIC_SCREEN_CTA("Save changes"), 3500)();
    firstTime && (await tapID(ids.COLLECT_REWARD_CTA, 3000)());
  };

export const yumojiItemLockedModalVisible = (level: number) => async () => {
  await textVisible("Item locked 🔒")();
  await textVisible(`Unlock this item at level ${level} on the quest map!`)();
  await textVisible("Take a challenge")();
  await textVisible("Close")();
};

export const maximiseYucoinVisible = (current: number, max: number) => async () => {
  await textVisible("Earned from activities today", 2000)();
  await idVisible(ids.MAXIMISE_TODAYS_EARNINGS(current, max), 4000)();
};

export const chestNudgeVisible =
  (yuCoinAmount = 200) =>
  async () => {
    const nudgeCopy = `Unlock a chest to earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`;
    await idVisible(ids.NUDGE_ITEM(nudgeCopy))();
  };
export const walkingNudgeVisible =
  (steps = "12,000", yuCoinAmount = 60) =>
  async () => {
    const walkingMarkdown = `Walk ${steps} steps to earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`;
    await idVisible(ids.NUDGE_ITEM(walkingMarkdown))();
  };

export const challengeNudgeVisible =
  (challengeAmount: number, yuCoinAmount: number) => async () => {
    let challengeText = "challenges";
    if (challengeAmount === 1) challengeText = "challenge";
    const nudgeMarkdown = `Complete ${challengeAmount} ${challengeText} to earn up to ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`;
    await idVisible(ids.NUDGE_ITEM(nudgeMarkdown))();
  };

export const streakNudgeVisible =
  (yuCoinAmount = 400) =>
  async () => {
    const streakMarkdown = `Complete your streak to earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`;
    await idVisible(ids.NUDGE_ITEM(streakMarkdown))();
  };

export const meditationNudeVisible =
  (minutes = 30, yuCoinAmount = 40) =>
  async () => {
    const meditationMarkdown = `Meditate for ${minutes} mins to earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`;
    await idVisible(ids.NUDGE_ITEM(meditationMarkdown))();
  };

export const cyclingNudgeVisible =
  (km = 9.6, yuCoinAmount = 60) =>
  async () => {
    const cycleMarkdown = `Cycle ${km}km to earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`;
    await idVisible(ids.NUDGE_ITEM(cycleMarkdown))();
  };

export const hqNudgeVisible =
  (yuCoinAmount = 40) =>
  async () => {
    const hqMarkdown = `Check in on your health to earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`;
    await idVisible(ids.NUDGE_ITEM(hqMarkdown))();
  };

export const moodMonitorNudgeVisible = async () => {
  const moodMonitorMarkdown =
    "Keep track of how you're feeling to earn 30 ![](https://yulife-develop.imgix.net/referral/YuCoin.png?ixlib=js-3.2.1&s=127f8080324e842a2d943842f26e51c7)";
  await idVisible(ids.NUDGE_ITEM(moodMonitorMarkdown))();
};

export const completedChestNudgeVisible =
  (yuCoinAmount = 200) =>
  async () => {
    const nudgeCopy = `Unlock a chest to earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`;
    await idVisible(ids.DONE_NUDGE_ICON(nudgeCopy))();
  };

export const completedWalkingNudgeVisible =
  (steps = "12,000", yuCoinAmount = 60) =>
  async () => {
    const walkingMarkdown = `Walk ${steps} steps to earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`;
    await idVisible(ids.DONE_NUDGE_ICON(walkingMarkdown), 4000)();
  };

export const completedChallengeNudgeVisible =
  (challengeAmount: number, yuCoinAmount: number) => async () => {
    let challengeText = "challenges";
    if (challengeAmount === 1) challengeText = "challenge";
    const nudgeMarkdown = `Complete ${challengeAmount} ${challengeText} to earn up to ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`;
    await idVisible(ids.DONE_NUDGE_ICON(nudgeMarkdown), 4000)();
  };

export const completedMeditationNudeVisible =
  (minutes = 30, yuCoinAmount = 40) =>
  async () => {
    const meditationMarkdown = `Meditate for ${minutes} mins to earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`;
    await idVisible(ids.DONE_NUDGE_ICON(meditationMarkdown), 4000)();
  };

export const completedCyclingNudgeVisible =
  (km = 9.6, yuCoinAmount = 60) =>
  async () => {
    const cycleMarkdown = `Cycle ${km}km to earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`;
    await idVisible(ids.DONE_NUDGE_ICON(cycleMarkdown), 4000)();
  };

export const completedStreakNudgeVisible =
  (yuCoinAmount = 400) =>
  async () => {
    const streakMarkdown = `Complete your streak to earn ${yuCoinAmount} ![](${yuscreenImages.yuCoinEmblem})`;
    await idVisible(ids.DONE_NUDGE_ICON(streakMarkdown), 4000)();
  };

export const completedMoodMonitorNudgeVisible = async () => {
  const moodMonitorMarkdown =
    "Keep track of how you're feeling to earn 30 ![](https://yulife-develop.imgix.net/referral/YuCoin.png?ixlib=js-3.2.1&s=127f8080324e842a2d943842f26e51c7)";
  await idVisible(ids.DONE_NUDGE_ICON(moodMonitorMarkdown))();
};

export const yuscreenV5CreateYumojiVisible = async () => {
  await idVisible(ids.YUMOJI_PROMPT_CTA)();
  await idVisible(ids.YUMOJI_PROMPT_COPY(yumojiCreateCopy))();
  await idVisible(ids.EMPTY_USER_YUMOJI_AVATAR)();
};

export const yuScreenV5HeaderVisible =
  (collapsed: boolean, name: string, world: string, level: string, emptyAvatar = false) =>
  async () => {
    await idVisibleAtIndex(ids.YUSCREEN_V5_USERNAME(name), 0)();
    await idVisibleAtIndex(ids.YUSCREEN_V5_WORLD_AND_LEVEL(world, level), 0)();

    if (!collapsed && emptyAvatar) {
      await idVisible(ids.EMPTY_USER_YUMOJI_AVATAR)();
    } else {
      await idNotVisible(ids.EMPTY_USER_YUMOJI_AVATAR)();
    }

    if (!collapsed && !emptyAvatar) {
      await idVisible(ids.YUMOJI_YUSCREEN_V5)();
    } else {
      await idNotVisible(ids.YUMOJI_YUSCREEN_V5)();
    }
  };
