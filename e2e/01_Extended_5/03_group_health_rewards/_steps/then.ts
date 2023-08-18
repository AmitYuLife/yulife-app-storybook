import { navigation } from "@navigation";
import * as ids from "@ids"
import * as fixtures from "../_resources/fixtures"
import * as constants from "../_resources/constants"
import moment from "moment";
import { GHI_PAGE_INFO, GHI_REWARD_CLAIM_PAGE_DETAILS, GHI_TEASE_PAGE_DETAILS, GHI_VOUCHER_LIST_DETAILS } from "../_resources/types";
import { screens } from "@appScreens";

export const {
  scrollUntilTextVisible,
  scrollUntilIdVisible
} = navigation.scrolling

export const {
  idVisible,
  textVisible,
  idExist,
  idNotVisible,
  wait,
  completedTodayStreakCopyVisible,
  textNotVisible,
  tapID,
  idVisibleAtIndex
} = navigation.common;

export const {
  onChallengeComplete,
} = screens.challenges

export const onGHIProductPage = ( product: GHI_PAGE_INFO) => async () => {
  console.log(product)
  const policyName = "Health Insurance";
  const policyDescription =
    "Your workplace health insurance from Bupa to support your mental, physical and financial wellbeing";
  const policyInfoYugi =
    "This policy is paid for by your employer. Remember if you change jobs, you’ll lose this cover.";
  
  await idVisible(ids.TEXT_TEMPLATE(policyName))();
  await expect(element(by.text(constants.paidBy))).toBeVisible();
  await expect(element(by.text(policyDescription))).toBeVisible();
  await expect(element(by.text(policyInfoYugi))).toBeVisible();
  await expect(element(by.text(constants.keyInfo))).toBeVisible();
  await scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.coverlevel, "down")()
  await expect(element(by.text(constants.schemeNumber))).toBeVisible();
  await expect(element(by.text(fixtures.GHI_REWARDS_PAGE_DETAILS_1.productId))).toBeVisible();
  await expect(element(by.text(constants.coverlevel))).toBeVisible();
  await scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.startDateText, "down")()
  await expect(element(by.text(constants.startDateText))).toBeVisible();
  await expect(element(by.text(product.startDate))).toBeVisible(); 
  await scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.faq, "down")()
  await expect(element(by.text(constants.coverForWApos))).toBeVisible();
  await expect(element(by.text(constants.howToClaim))).toBeVisible();
  await expect(element(by.text(constants.faq))).toBeVisible();

  await scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_2, "down")()
  await expect(element(by.text(constants.Bupa_markdown_1))).toBeVisible();
  await expect(element(by.text(constants.Bupa_markdown_2))).toBeVisible();

}

export const GHIRewardsHeadingsVisible = (completed: string) => async () => {
  await idVisible(ids.TEXT_TEMPLATE(constants.groupHealthRewardsHeading, "h2"))();
  await idVisible(ids.TEXT_TEMPLATE(constants.groupHealthRewardsCompleted(completed), "l1b"))();
  await idVisible(ids.TEXT_TEMPLATE(constants.groupHealthRewardsDescription, "l1"))();
  await idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.yugiRewardsImageURL))()
}

export const GHIRewardsProgressBarsVisible = (completed: number) => async () => {
  const stringCompleted = completed.toString()

  constants.groupHealthRewardProgressNames.forEach(name => async () => {
    await idVisible(ids.TEXT_TEMPLATE(name, "l1b"))()
  })
  
  switch (true) {
    case (completed < 5):
      for(let i = 0; i < 6; i ++) {     
        const target = element(by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsLockedImageURL))).atIndex(i)
        await waitFor(target).toExist().withTimeout(0)
        await expect(target).toExist()

        await idVisible(ids.TEXT_TEMPLATE(`${stringCompleted}/${constants.groupHealthRewardProgressLevels[i]} Levels completed`, "l2b"))()
      }
      
      await idNotVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsUnlockedImageURL))()

    break
    case (completed >= 5):
      for(let i = 0; i < 5; i ++) {     
        const target = element(by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsLockedImageURL))).atIndex(i)
        await waitFor(target).toExist().withTimeout(0)
        await expect(target).toExist()

        await idVisible(ids.TEXT_TEMPLATE(`${stringCompleted}/${constants.groupHealthRewardProgressLevels[i + 1]} Levels completed`, "l2b"))()
      }
      
      await idExist(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsUnlockedImageURL))()
      await idVisible(ids.TEXT_TEMPLATE("Unlocked", "l2b"))()

    break

  }
}

export const onRewardsTeasePage = (product: GHI_TEASE_PAGE_DETAILS) => async () => {
  await idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(product.topImageUrl))()
  await idVisible(ids.TEXT_TEMPLATE(product.headerText, "h1"))();
  await textVisible(product.description)()
  await idVisible(ids.TEXT_TEMPLATE(constants.rewards_exclusive_pill, "b2b"))();
  await idVisible(ids.CONTENT_ITEM_BUTTON_IMAGE(""))();

}

export const onRewardsClaimPage = (product: GHI_REWARD_CLAIM_PAGE_DETAILS, preClaim: boolean, amount?: string) => async () => {
  const buttonText = preClaim? product.buttonText : constants.claimReward

  if(preClaim){
    product.companyDescription.forEach(description => async () => {
      await textVisible(description)()
    })
    
    await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, constants.yourRewardJourneyHeader, "down")()
    await textVisible(constants.yourRewardHeader)()
    
    product.rewardDescription.forEach(description => async () => {
      await textVisible(description)()
    })
  } else {
    await textVisible(`£${amount} ${product.heading} voucher`)()
    await textVisible(`Purchased date - ${moment().format("DD MMM YYYY")}`)()
    await textVisible(`Expiry date - ${moment().add(2, "y").format("DD MMM YYYY")}`)()
  }

  await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, buttonText, "down")()

  for(let i = 0; i < product.rewardStepsAmount; i++){
    await textVisible(`${(i + 1).toString()}.`)()
    await textVisible(product.rewardSteps[i])
  }

  await textVisible(buttonText)()

  await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, constants.rewardsPolicy, "down")()

  await textVisible(constants.questionHeader)()
  await textVisible(constants.questionDescription)()
  await textVisible(constants.helpCentre)()
  await textVisible(constants.termsAndConditions)()
  await textVisible(constants.rewardsPolicy)()
}

export const voucherOptionsVisible = (voucherDetails: GHI_VOUCHER_LIST_DETAILS) => async () => {
  voucherDetails.vouchers.forEach(voucher => async () => {
    await idVisible(ids.TEXT_TEMPLATE(`£${voucher.value} Voucher - ${voucher.cost} YuCoin`), undefined)()
  })
}

