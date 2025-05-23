import { navigation } from "@navigation";
import * as ids from "@ids";
import * as constants from "../_resources/constants";
import moment from "moment";
import {
  CAROUSEL_CARD,
  GHI_PAGE_INFO,
  GHI_REWARD_CLAIM_PAGE_DETAILS,
  GHI_VOUCHER_LIST_DETAILS,
  IMPORTANT_NOTES_PAGE_DETAILS,
} from "../_resources/types";
import { screens } from "@appScreens";
import { readInbox } from "@yu-life/yulife-bdd-framework";
import { expect } from "detox";
import { swipeFromText } from "./when";
import * as ghRewards from "../_data/mongo/goal_reward_milestones";

export const { scrollUntilTextVisible, scrollUntilIdVisible } = navigation.scrolling;

export const {
  idVisible,
  textVisible,
  idExist,
  idNotVisible,
  wait,
  completedTodayStreakCopyVisible,
  textNotVisible,
  tapID,
  idVisibleAtIndex,
  textVisibleAtIndex,
  testMultipleIndexesVisibility,
} = navigation.common;

export const { onChallengeComplete } = screens.challenges;

export const onGHIProductPage = (product: GHI_PAGE_INFO) => async () => {
  const policyName = "Health Insurance";
  const policyDescription =
    "Your workplace health insurance from Bupa to support your mental, physical and financial wellbeing";
  const policyInfoYugi =
    "This policy is paid for by your employer. Remember if you change jobs, you’ll lose this cover.";

  await idVisible(ids.TEXT_TEMPLATE(policyName))();
  await textVisible(constants.paidBy)();
  await textVisible(policyDescription)();
  await textVisible(policyInfoYugi)();
  await textVisible(constants.keyInfo)();
  await scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.coverlevel, "down")();
  await textVisible(constants.coverlevel)();
  await scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.startDateText, "down")();
  await textVisible(constants.startDateText)();
  await textVisible(product.startDate)();
  await scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.faq, "down")();
  product.membershipNumber && (await textVisible(constants.membershipNumberText)());
  product.membershipNumber && (await textVisible(product.membershipNumber)());
  product.membershipNumber! && (await textVisible(constants.membershipNumberText)());
  await textVisible(constants.coverForWApos)();
  await textVisible(constants.howToClaim)();
  await textVisible(constants.faq)();

  await scrollUntilTextVisible(
    ids.PRODUCT_DETAILS_SCROLL_VIEW,
    constants.Bupa_markdown_2,
    "down"
  )();
  await textVisible(constants.Bupa_markdown_1)();
  await textVisible(constants.Bupa_markdown_2)();
};

export const GHIRewardsHeadingsVisible = (completed: string) => async () => {
  await idVisible(ids.TEXT_TEMPLATE(constants.groupHealthRewardsHeading, "h2"), 3000)();
  await idVisible(
    ids.TEXT_TEMPLATE(constants.groupHealthRewardsCompleted(completed), "l1b"),
    3000
  )();
  await idVisible(ids.TEXT_TEMPLATE(constants.groupHealthRewardsDescription, "l1"), 3000)();
  await idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.yugiRewardsImageURL))();
};

export const GHIRewardsProgressBarsVisible = (completed: number) => async () => {
  const stringCompleted = completed.toString();

  constants.groupHealthRewardProgressNames.forEach((name) => async () => {
    await idVisible(ids.TEXT_TEMPLATE(name, "l1b"), 2000)();
  });

  switch (true) {
    case completed < 5:
      for (let i = 0; i < 6; i++) {
        const target = element(
          by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsLockedImageURL))
        ).atIndex(i);
        await waitFor(target).toExist().withTimeout(0);
        await expect(target).toExist();
        await idVisible(
          ids.TEXT_TEMPLATE(
            `${stringCompleted}/${constants.groupHealthRewardProgressLevels[i]} Levels completed`,
            "l2b"
          )
        )();
      }

      await idNotVisible(
        ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsUnlockedImageURL)
      )();

      break;
    case completed >= 5 && completed < 10:
      for (let i = 0; i < 5; i++) {
        const target = element(
          by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsLockedImageURL))
        ).atIndex(i);
        await waitFor(target).toExist().withTimeout(0);
        await expect(target).toExist();
        await idVisible(
          ids.TEXT_TEMPLATE(
            `${stringCompleted}/${
              constants.groupHealthRewardProgressLevels[i + 1]
            } Levels completed`,
            "l2b"
          )
        )();
      }

      await idExist(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsUnlockedImageURL))();
      await idVisible(ids.TEXT_TEMPLATE("Unlocked", "l2b"))();

      break;
    case completed >= 10 && completed < 50:
      for (let i = 0; i < 4; i++) {
        const target = element(
          by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsLockedImageURL))
        ).atIndex(i);
        await waitFor(target).toExist().withTimeout(0);
        await expect(target).toExist();
        await idVisible(
          ids.TEXT_TEMPLATE(
            `${stringCompleted}/${
              constants.groupHealthRewardProgressLevels[i + 2]
            } Levels completed`,
            "l2b"
          )
        )();
      }
      for (let i = 0; i < 2; i++) {
        const target = element(
          by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsUnlockedImageURL))
        ).atIndex(i);
        await waitFor(target).toExist().withTimeout(0);
        await expect(target).toExist();
        await idVisibleAtIndex(ids.TEXT_TEMPLATE("Unlocked", "l2b"), i)();
      }

      break;
    case completed >= 50 && completed < 100:
      for (let i = 0; i < 3; i++) {
        const target = element(
          by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsLockedImageURL))
        ).atIndex(i);
        await waitFor(target).toExist().withTimeout(0);
        await expect(target).toExist();
        await idVisible(
          ids.TEXT_TEMPLATE(
            `${stringCompleted}/${
              constants.groupHealthRewardProgressLevels[i + 3]
            } Levels completed`,
            "l2b"
          )
        )();
      }
      for (let i = 0; i < 3; i++) {
        const target = element(
          by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsUnlockedImageURL))
        ).atIndex(i);
        await waitFor(target).toExist().withTimeout(0);
        await expect(target).toExist();
        await idVisibleAtIndex(ids.TEXT_TEMPLATE("Unlocked", "l2b"), i)();
      }

      break;
    case completed >= 100 && completed < 150:
      for (let i = 0; i < 2; i++) {
        const target = element(
          by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsLockedImageURL))
        ).atIndex(i);
        await waitFor(target).toExist().withTimeout(0);
        await expect(target).toExist();
        await idVisible(
          ids.TEXT_TEMPLATE(
            `${stringCompleted}/${
              constants.groupHealthRewardProgressLevels[i + 4]
            } Levels completed`,
            "l2b"
          )
        )();
      }
      for (let i = 0; i < 4; i++) {
        const target = element(
          by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsUnlockedImageURL))
        ).atIndex(i);
        await waitFor(target).toExist().withTimeout(0);
        await expect(target).toExist();
        await idVisibleAtIndex(ids.TEXT_TEMPLATE("Unlocked", "l2b"), i)();
      }

      break;
    case completed >= 150 && completed < 200:
      await idExist(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsLockedImageURL))();
      await idVisible(
        ids.TEXT_TEMPLATE(
          `${stringCompleted}/${constants.groupHealthRewardProgressLevels[5]} Levels completed`,
          "l2b"
        )
      )();

      for (let i = 0; i < 5; i++) {
        const target = element(
          by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsUnlockedImageURL))
        ).atIndex(i);
        await waitFor(target).toExist().withTimeout(0);
        await expect(target).toExist();
        await idVisibleAtIndex(ids.TEXT_TEMPLATE("Unlocked", "l2b"), i)();
      }

      break;
    case completed >= 200:
      await idNotVisible(
        ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsLockedImageURL)
      )();

      for (let i = 0; i < 6; i++) {
        const target = element(
          by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsUnlockedImageURL))
        ).atIndex(i);
        await waitFor(target).toExist().withTimeout(0);
        await expect(target).toExist();
        await idVisibleAtIndex(ids.TEXT_TEMPLATE("Unlocked", "l2b"), i)();
      }

      break;
  }
};

export const onBootsAndYorkRewardsClaimPage =
  (product: GHI_REWARD_CLAIM_PAGE_DETAILS, preClaim: boolean, amount?: string) => async () => {
    const buttonText = preClaim ? product.buttonText : constants.claimReward;
    const voucherText = product.heading === "Urban" ? "Voucher" : "voucher";
    const voucherQuantity = product.heading === "Urban" ? "1 " : "";

    if (preClaim) {
      product.companyDescription.forEach((description) => async () => {
        await textVisible(description)();
      });

      await scrollUntilTextVisible(
        ids.SDUI_BODY_SCROLL,
        constants.yourRewardJourneyHeader,
        "down"
      )();
      await textVisible(constants.yourRewardHeader)();
      product.rewardDescription.forEach((description) => async () => {
        await textVisible(description)();
      });
    } else {
      await textVisible(`${voucherQuantity}£${amount} ${product.heading} ${voucherText}`)();
      await textVisible(`Purchased date - ${moment().format("DD MMM YYYY")}`)();
      // @bug - expiry date not showing - Might remove, according to Giles
      // await textVisible(`Expiry date - ${moment().add(product.voucherExpiryYears, "y").format("DD MMM YYYY")}`)()
    }

    await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, buttonText, "down")();
    await rewardsClaimPageRewardStepsVisible(product)();
    await textVisible(buttonText)();
    await rewardsClaimPageBottomInfoVisible();
  };

export const onUrbanRewardsClaimPage =
  (product: GHI_REWARD_CLAIM_PAGE_DETAILS, preClaim: boolean, amount?: string, vouchers?: number) =>
  async () => {
    const buttonText = preClaim ? product.buttonText : constants.claimReward;
    const voucherText = vouchers > 1 ? "vouchers" : "voucher";
    const voucherQuantity = product.heading === "Urban" ? "1 " : "";

    if (preClaim) {
      product.companyDescription.forEach((description) => async () => {
        await textVisible(description)();
      });

      await scrollUntilTextVisible(
        ids.SDUI_BODY_SCROLL,
        constants.yourRewardJourneyHeader,
        "down"
      )();
      await textVisible(`${vouchers.toString()} ${voucherText} left to claim`)();
      await textVisible(product.voucherDescription)();
      await textVisible(
        `${product.voucherClaimMessage[0]}${vouchers.toString()}${
          product.voucherClaimMessage[1]
        }${moment().add(1, "y").format("DD MMM YYYY")}.`
      );
    } else {
      await textVisible(`${voucherQuantity}£${amount} ${product.heading} Voucher`)();
      await textVisible(`Purchased date - ${moment().format("DD MMM YYYY")}`)();
      // @update bitrise date showing as today, locally it's showing as tomorrow
      // await textVisible(`Expiry date - ${moment().add(product.voucherExpiryYears, "y").add(1, "day").format("DD MMM YYYY")}`)()
      await textVisible("Gift Card Number")();
    }

    await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, buttonText, "down")();
    await rewardsClaimPageRewardStepsVisible(product)();
    await textVisible(buttonText)();
    await rewardsClaimPageBottomInfoVisible();
  };

export const rewardsClaimPageBottomInfoVisible = async () => {
  await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, constants.termsAndConditions, "down")();

  await textVisible(constants.questionHeader)();
  await textVisible(constants.questionDescription)();
  await textVisible(constants.helpCentre)();
  await textVisible(constants.termsAndConditions)();
};

export const rewardsClaimPageRewardStepsVisible =
  (product: GHI_REWARD_CLAIM_PAGE_DETAILS) => async () => {
    for (let i = 0; i < product.rewardStepsAmount; i++) {
      await textVisible(`${(i + 1).toString()}.`)();
      await textVisible(product.rewardSteps[i]);
    }
  };

export const voucherOptionsVisible = (voucherDetails: GHI_VOUCHER_LIST_DETAILS) => async () => {
  voucherDetails.vouchers.forEach((voucher) => async () => {
    await idVisible(
      ids.TEXT_TEMPLATE(`£${voucher.value} Voucher - ${voucher.cost} YuCoin`),
      undefined
    )();
  });
};

export const groupHealthRewardsPurchasedVisible =
  (product?: GHI_REWARD_CLAIM_PAGE_DETAILS, waitTime?: number) => async () => {
    const prod = product ? product.heading : "GOSH";

    await textVisible(moment().format("DD"))();
    await textVisible(moment().format("MMM"))();
    switch (true) {
      case prod === "Boots":
        await textVisible("£5 Boots voucher", waitTime)();
        break;
      case prod === "Urban":
        await textVisible("1 £10 Urban Voucher", waitTime)();
        break;
      case prod === "Thriva":
        await textVisible("1 Thriva Testing kit", waitTime)();
        break;
      case prod === "Living DNA":
        await textVisible("1 LivingDNA Testing kit", waitTime)();
        await textVisible("0 YuCoin")();
        break;
      case prod === "Health assessment":
        await textVisible("1 Health assessment", waitTime)();
        await textVisible("0 YuCoin")();
        break;
      case prod === "Garmin":
        await textVisible("1 Watch", waitTime)();
        await textVisible("0 YuCoin")();
        break;
      case prod === "GOSH":
        await textVisible("100 £ Donation to GOSH", waitTime)();
        await textVisible("0 YuCoin")();
        break;
    }
  };

export const onThrivaRewardsClaimPage =
  (product: GHI_REWARD_CLAIM_PAGE_DETAILS, preClaim: boolean, vouchers?: number) => async () => {
    const buttonText = preClaim ? product.buttonText : constants.claimReward;
    const voucherMessage =
      vouchers > 0 ? "1 voucher left to claim" : "You’ve claimed all your vouchers!";

    if (preClaim) {
      product.companyDescription.forEach((description) => async () => {
        await textVisible(description)();
      });
      await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, product.secondaryHeader, "down")();
      await textVisible("Your reward")();
      product.rewardDescription.forEach((description) => async () => {
        await textVisible(description)();
      });
      await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, voucherMessage, "down")();
      await textVisible(product.secondaryHeader)();
      product.secondaryDescription.forEach((description) => async () => {
        await textVisible(description)();
      });
      if (vouchers > 0) {
        await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, product.buttonText, "down")();
        await textVisible(product.voucherDescription)();
        await textVisible(
          `${product.voucherClaimMessage[0]}1${product.voucherClaimMessage[1]}${moment()
            .add(1, "y")
            .format("DD MMM YYYY")}.`
        );
        await rewardsClaimPageRewardStepsVisible(product)();
        await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, buttonText, "down")();
        await textVisible(buttonText)();
      }
    } else {
      await textVisible(`1 Thriva Testing kit`)();
      await textVisible(`Purchased date - ${moment().format("DD MMM YYYY")}`)();
      await textVisible(`Expiry date - ${moment().format("DD MMM YYYY")}`)();
      await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, buttonText, "down")();
      await rewardsClaimPageRewardStepsVisible(product)();
      await textVisible(buttonText)();
    }

    await rewardsClaimPageBottomInfoVisible();
  };

export const onLivingDNARewardsClaimPage =
  (product: GHI_REWARD_CLAIM_PAGE_DETAILS, preClaim: boolean) => async () => {
    const buttonText = preClaim ? product.buttonText : "View vouchers";
    const voucherMessage = preClaim
      ? "1 voucher left to claim"
      : "You’ve claimed all your vouchers!";

    await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, voucherMessage, "down")();

    product.companyDescription.forEach((description) => async () => {
      await textVisible(description)();
    });

    if (preClaim) {
      await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, product.buttonText, "down")();
      await textVisible(voucherMessage)();
      await textVisible(product.voucherDescription)();
      await textVisible(
        `${product.voucherClaimMessage[0]}1${product.voucherClaimMessage[1]}${moment()
          .add(1, "y")
          .format("DD MMM YYYY")}.`
      );
      await rewardsClaimPageRewardStepsVisible(product)();
      await textVisible(buttonText)();
    } else {
      await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, buttonText, "down")();
      await textVisible(voucherMessage)();
      await textVisible("For more details, check your email inbox.")();
      await textVisible(buttonText)();
    }

    await rewardsClaimPageBottomInfoVisible();
  };

export const onBupaRewardsClaimPage =
  (product: GHI_REWARD_CLAIM_PAGE_DETAILS, preClaim: boolean, vouchers: number) => async () => {
    const buttonText = preClaim ? product.buttonText : constants.claimReward;

    if (preClaim) {
      product.companyDescription.forEach((description) => async () => {
        await textVisible(description)();
      });

      await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, product.secondaryHeader, "down")();
      await textVisible(constants.yourRewardHeader)();
      product.rewardDescription.forEach((description) => async () => {
        await textVisible(description)();
      });

      if (vouchers > 0) {
        await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, product.buttonText, "down")();
        await textVisible("1 voucher left to claim")();
        await textVisible(product.voucherDescription)();
        await textVisible(
          `${product.voucherClaimMessage[0]}1${product.voucherClaimMessage[1]}${moment()
            .add(1, "y")
            .format("DD MMM YYYY")}.`
        );
        await rewardsClaimPageRewardStepsVisible(product)();
        await textVisible(buttonText)();
      } else {
        await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, "View vouchers", "down")();
        await textVisible("You’ve claimed all your vouchers!")();
        await textVisible("For more details, check your email inbox.")();
        await textVisible("View vouchers")();
        return;
      }
    } else {
      await textVisible(`1 Health assessment`)();
      await textVisible(`Purchased date - ${moment().format("DD MMM YYYY")}`)();
      await textVisible(`Expiry date - ${moment().format("DD MMM YYYY")}`)();
    }
    await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, buttonText, "down")();
    await rewardsClaimPageRewardStepsVisible(product)();
    await textVisible(buttonText)();
    await rewardsClaimPageBottomInfoVisible();
  };

export const onGarminRewardsClaimPage =
  (product: GHI_REWARD_CLAIM_PAGE_DETAILS, preClaim: boolean, vouchers: number) => async () => {
    const buttonText = preClaim ? product.buttonText : constants.claimReward;
    const voucherMessage =
      vouchers > 0 ? "1 voucher left to claim" : "You’ve claimed all your vouchers!";

    if (preClaim) {
      product.companyDescription.forEach((description) => async () => {
        await textVisible(description)();
      });

      await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, voucherMessage, "down")();
      await textVisible(constants.yourRewardHeader)();
      product.rewardDescription.forEach((description) => async () => {
        await textVisible(description)();
      });

      if (vouchers > 0) {
        await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, product.buttonText, "down")();
        await textVisible("1 voucher left to claim")();
        await textVisible(product.voucherDescription)();
        await textVisible(
          `${product.voucherClaimMessage[0]}1${product.voucherClaimMessage[1]}${moment()
            .add(1, "y")
            .format("DD MMM YYYY")}.`
        );
        await rewardsClaimPageRewardStepsVisible(product)();
        await textVisible(buttonText)();
      } else {
        await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, constants.termsAndConditions, "down")();
        await textVisible("You’ve claimed all your vouchers!")();
        await textVisible("For more details, check your email inbox.")();
      }
    } else {
      await textVisible(`1 Watch`)();
      await textVisible(`Purchased date - ${moment().format("DD MMM YYYY")}`)();
      await textVisible(`Expiry date - ${moment().format("DD MMM YYYY")}`)();
      await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, buttonText, "down")();
      await rewardsClaimPageRewardStepsVisible(product)();
      await textVisible(buttonText)();
    }
    await rewardsClaimPageBottomInfoVisible();
  };

export const importantNotesPageVisible = (notes: IMPORTANT_NOTES_PAGE_DETAILS) => async () => {
  await idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.importantNotesHeaderImage))();
  await textVisible(notes.heading)();

  notes.subheadings.forEach((subheading) => async () => {
    await textVisible(subheading)();
  });

  await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, constants.importantNotesButtonText, "down")();

  notes.importantNotes.forEach((note) => async () => {
    await textVisible(note)();
  });
};

export const livingDNADetailsPageVisible = async () => {
  await idVisible(ids.TEXT_TEMPLATE(constants.detailsPageHeading, "h3"))();
  await idVisible(ids.CONTENT_ITEM_INPUT("firstName"))();
  await idVisible(ids.CONTENT_ITEM_INPUT("lastName"))();
  await idVisible(ids.CONTENT_ITEM_INPUT("address1"))();
  await idVisible(ids.CONTENT_ITEM_INPUT("address2"))();
  await idVisible(ids.CONTENT_ITEM_INPUT("town"))();
  await idVisible(ids.CONTENT_ITEM_INPUT("county"))();
  await scrollUntilIdVisible(
    ids.SDUI_BODY_SCROLL,
    ids.INFO_PANEL_IMAGE(constants.detailsCorrectWarningYugiImg),
    "down"
  )();
  await idVisible(ids.CONTENT_ITEM_INPUT("postcode"))();
  await idVisible(ids.CONTENT_ITEM_INPUT("phone"))();
  await idVisible(ids.CONTENT_ITEM_INPUT("email"))();

  await detailsWarningsVisible();

  await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, constants.detailsPageHeading, "up")();
};

export const detailsWarningsVisible = async () => {
  await idVisible(ids.INFO_PANEL_IMAGE(constants.detailsCorrectWarningYugiImg))();
  constants.detailsCorrectWarningMessages.forEach((message) => async () => {
    await textVisible(message)();
  });
};

export const genderOptionsVisible = async () => {
  await textVisible("Male")();
  await textVisible("Female")();
  await textVisible("Prefer not to say")();
};

export const kitOrderedScreenVisible = (header: string, messages: string[]) => async () => {
  await idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.parcelImg))();
  await idVisible(ids.TEXT_TEMPLATE(header, "h1"))();

  messages.forEach((message) => async () => {
    await textVisible(message)();
  });

  await textVisible(constants.kitOrderedSuccessButtonText)();
};

export const logInbox = (email: string) => async () => {
  const inbox = await readInbox(email, true);

  console.log(inbox[0].subject);
  console.log(inbox[0].text);
};

export const GHIRewardEmailReceived = (emailAddress: string, emailSubject: string) => async () => {
  const inbox = await readInbox(emailAddress, true);

  if (inbox[0].subject !== emailSubject) {
    throw new Error("Email subject is incorrect");
  }
};

export const goshConfirmationModalVisible = async () => {
  await textVisible(constants.areYouSure)();
  await textVisible(constants.goshWarningMessage)();
  await textVisible(constants.makeDonation)();
  await textVisible("Cancel")();
};

export const onGOSHRewardsClaimPage = async () => {
  await textVisible(`100 £ Donation to GOSH`)();
  await textVisible(`Purchased date - ${moment().format("DD MMM YYYY")}`)();
  await textVisible(constants.donationHeader)();
  await textVisible(constants.donationMessage)();
};

export const lockedLevelHalfModalVisible =
  (level: number, chest: boolean, hint: boolean, reward?: string, levels?: string) => async () => {
    await idVisible(ids.QUEST_DETAIL_HALF_MODAL(constants.lockedLevelText(level)))();
    await textVisible(constants.lockedLevelText(level))();
    await idVisible(ids.CHALLENGE_LOCKED_ICON)();

    chest && (await textVisible(constants.chestTease)());
    hint && (await moreRewardsAheadModalVisible(true)());
    reward && (await textVisible(reward)());
    levels && (await textVisible(`${levels} Levels completed`)());
  };

export const multipleRewardsNotVisible = (idArr: string[]) => async () => {
  idArr.forEach((id) => async () => {
    await idNotVisible(ids.REWARD_ITEM(id));
  });
};

export const unlockedLevelHalfModalVisible = (reward: string, levels: string) => async () => {
  await idVisible(ids.QUEST_DETAIL_HALF_MODAL(constants.takeChallengeText))();
  await textVisible(constants.takeChallengeText)();
  await idVisible(ids.CHALLENGE_LOCKED_ICON)();
  await textVisible(reward)();
  await textVisible(`${levels} Levels completed`)();
  await moreRewardsAheadModalVisible(true)();
};

export const moreRewardsAheadModalVisible = (modalView: boolean) => async () => {
  const headerText = modalView ? constants.moreRewardsAheadHeader : constants.getMoreRewardsHeader;
  await textVisible(headerText)();
  await textVisible(constants.moreRewardsAheadText)();
  await textVisible(constants.learnMoreButton)();
};

export const ghiRewardsTeaseVisible = async () => {
  await textVisible(constants.rewardsTeaseHeader)();
  await textVisible(constants.rewardsTeaseText)();
};

export const onGHIRewardsLearnMorePage =
  (state: "started" | "pre" | "finished", unlocked: string, date: string) => async () => {
    await wait(2500)();
    const timeToGameEnd = moment.duration(moment(date).diff(moment()));
    const timeToGameStart = moment.duration(moment(date).endOf("day").diff(moment()));
    const days =
      state === "started" || state === "finished"
        ? Math.floor(timeToGameEnd.asDays())
        : Math.floor(timeToGameStart.asDays());
    const gameStartDate = moment(date).endOf("day").format("DD.MM.YYYY");
    const headerMessage =
      state === "finished" ? constants.learnMorePageFinishedHeader : constants.learnMorePageHeader;
    let description = "";
    if (state === "started") {
      description = constants.learnMorePageDesc(days);
    } else if (state === "pre") {
      description = constants.learnMoreTeaseDesc(days);
    } else if (state === "finished") {
      description = constants.learnMoreFinishedDec;
    }

    await idVisible(ids.TEXT_TEMPLATE(headerMessage, "h2"))();
    state !== "pre" && (await textVisible(`${unlocked}/200 levels`)());
    state !== "pre" && (await textVisible(`${days} days left`)());
    state === "pre" && (await textVisible(`Starts on ${gameStartDate}`)());
    await idVisible(ids.TEXT_TEMPLATE(description, "b2"))();
    await swipeFromText(headerMessage, "up", "fast")();
    state !== "pre" && (await textVisible(constants.learnMorePageButton)());
    await idVisible(ids.TEXT_TEMPLATE(constants.learnMoreFAQ1, "b2b"))();
    await idVisible(ids.TEXT_TEMPLATE(constants.learnMoreFAQ2, "b2b"))();
    await idVisible(ids.TEXT_TEMPLATE(constants.learnMoreFAQ3, "b2b"))();
    await swipeFromText(constants.learnMoreFAQ3, "down", "fast")();
  };

export const onFAQPage = (content: string[]) => async () => {
  content.forEach((text) => async () => {
    await textVisible(text)();
  });
};

export const rewardStoreGameProgressVisible =
  (unlocked: string, date: string, fontColor: string) => async () => {
    const timeToGameEnd = moment.duration(moment(date).diff(moment()));
    const days = Math.floor(timeToGameEnd.asDays());

    await idVisible(ids.REWARDS_STORE_GAME_PROGRESS)();
    await idVisible(ids.EVENT_DESCRIPTION(`${unlocked}/200 levels`, fontColor))();
    await textVisible(`${days} days left`)();
  };

export const rewardGameStreakModalVisible =
  (unlocked: boolean, reward: string, levels: string) => async () => {
    const modalHeader = unlocked
      ? constants.streakModalGameHeaderUnlocked
      : constants.streakModalGameHeaderTease;

    await textVisible(modalHeader)();
    await textVisible(reward)();
    await textVisible(`${levels} Levels completed`)();
  };

export const carouselCardVisible = (card: CAROUSEL_CARD, unlocked: boolean) => async () => {
  unlocked && (await idVisible(ids.BATTLE_PASS_LIST_IMAGE_UNLOCKED(card.title)));
  await textVisible(card.title)();
  !unlocked && (await idVisible(ids.BATTLE_PASS_LIST_IMAGE_LOCKED(card.title))());
};

const carouselImageVisible =
  (id: string, waitTime = 0) =>
  async () => {
    const target = element(by.id(id));
    await waitFor(target).toBeVisible(10).withTimeout(waitTime);
    await expect(target).toBeVisible(10);
  };

export const genericLevelHalfModalVisible =
  (gameActive: boolean, level: number, gameLevel: string) => async () => {
    await idVisible(ids.QUEST_DETAIL_HALF_MODAL(constants.lockedLevelText(level)))();
    await idVisible(ids.CHALLENGE_LOCKED_ICON)();
    await textNotVisible(`${gameLevel} Levels completed`)();
    gameActive && (await moreRewardsAheadModalVisible(true)());
  };

export const moreRewardsAheadNotVisible = (modalView: boolean) => async () => {
  const headerText = modalView ? constants.moreRewardsAheadHeader : constants.getMoreRewardsHeader;
  await textNotVisible(headerText)();
  await textNotVisible(constants.moreRewardsAheadText)();
  await textNotVisible(constants.learnMoreButton)();
};

export const ghiRewardsTeaseNotVisible = async () => {
  await textNotVisible(constants.rewardsTeaseHeader)();
  await textNotVisible(constants.rewardsTeaseText)();
};

export const groupHealthRewardsNotVisible =
  (language = "en-GB") =>
  async () => {
    for (const key of Object.keys(ghRewards)) {
      const description = ghRewards[key].data.rewardDescription[language];
      await textNotVisible(description)();
    }
  };
