import { navigation } from "@navigation";
import * as ids from "@ids"
import * as fixtures from "../_resources/fixtures"
import * as constants from "../_resources/constants"
import moment from "moment";
import { GHI_PAGE_INFO, GHI_REWARD_CLAIM_PAGE_DETAILS, GHI_TEASE_PAGE_DETAILS, GHI_VOUCHER_LIST_DETAILS, IMPORTANT_NOTES_PAGE_DETAILS } from "../_resources/types";
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
    case (completed >= 5 && completed < 10):
      for(let i = 0; i < 5; i ++) {     
        const target = element(by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsLockedImageURL))).atIndex(i)
        await waitFor(target).toExist().withTimeout(0)
        await expect(target).toExist()
        await idVisible(ids.TEXT_TEMPLATE(`${stringCompleted}/${constants.groupHealthRewardProgressLevels[i + 1]} Levels completed`, "l2b"))()
      }
      
      await idExist(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsUnlockedImageURL))()
      await idVisible(ids.TEXT_TEMPLATE("Unlocked", "l2b"))()

    break
    case (completed >= 10 && completed < 50):
      for(let i = 0; i < 4; i ++) {     
        const target = element(by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsLockedImageURL))).atIndex(i)
        await waitFor(target).toExist().withTimeout(0)
        await expect(target).toExist()
        await idVisible(ids.TEXT_TEMPLATE(`${stringCompleted}/${constants.groupHealthRewardProgressLevels[i + 2]} Levels completed`, "l2b"))()
      }
      for(let i = 0; i < 2; i ++) {     
        const target = element(by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsUnlockedImageURL))).atIndex(i)
        await waitFor(target).toExist().withTimeout(0)
        await expect(target).toExist()
        await idVisibleAtIndex(ids.TEXT_TEMPLATE("Unlocked", "l2b"), i)()
      }

    break
    case (completed >= 50 && completed < 100):
      for(let i = 0; i < 3; i ++) {     
        const target = element(by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsLockedImageURL))).atIndex(i)
        await waitFor(target).toExist().withTimeout(0)
        await expect(target).toExist()
        await idVisible(ids.TEXT_TEMPLATE(`${stringCompleted}/${constants.groupHealthRewardProgressLevels[i + 3]} Levels completed`, "l2b"))()
      }
      for(let i = 0; i < 3; i ++) {     
        const target = element(by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsUnlockedImageURL))).atIndex(i)
        await waitFor(target).toExist().withTimeout(0)
        await expect(target).toExist()
        await idVisibleAtIndex(ids.TEXT_TEMPLATE("Unlocked", "l2b"), i)()
      }

    break
    case (completed >= 100 && completed < 150):
      for(let i = 0; i < 2; i ++) {     
        const target = element(by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsLockedImageURL))).atIndex(i)
        await waitFor(target).toExist().withTimeout(0)
        await expect(target).toExist()
        await idVisible(ids.TEXT_TEMPLATE(`${stringCompleted}/${constants.groupHealthRewardProgressLevels[i + 4]} Levels completed`, "l2b"))()
      }
      for(let i = 0; i < 4; i ++) {     
        const target = element(by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsUnlockedImageURL))).atIndex(i)
        await waitFor(target).toExist().withTimeout(0)
        await expect(target).toExist()
        await idVisibleAtIndex(ids.TEXT_TEMPLATE("Unlocked", "l2b"), i)()
      }

    break
    case (completed >= 150 && completed < 200):
      
      await idExist(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsLockedImageURL))()
      await idVisible(ids.TEXT_TEMPLATE(`${stringCompleted}/${constants.groupHealthRewardProgressLevels[5]} Levels completed`, "l2b"))()

      for(let i = 0; i < 5; i ++) {     
        const target = element(by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsUnlockedImageURL))).atIndex(i)
        await waitFor(target).toExist().withTimeout(0)
        await expect(target).toExist()
        await idVisibleAtIndex(ids.TEXT_TEMPLATE("Unlocked", "l2b"), i)()
      }

    break
    case (completed >= 200):
      
      await idNotVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsLockedImageURL))()

      for(let i = 0; i < 6; i ++) {     
        const target = element(by.id(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.groupHealthRewardsUnlockedImageURL))).atIndex(i)
        await waitFor(target).toExist().withTimeout(0)
        await expect(target).toExist()
        await idVisibleAtIndex(ids.TEXT_TEMPLATE("Unlocked", "l2b"), i)()
      }

    break
  }
}

export const onRewardsTeasePage = (product: GHI_TEASE_PAGE_DETAILS) => async () => {
  await idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(product.topImageUrl))()
  await idVisible(ids.TEXT_TEMPLATE(product.headerText, "h1"))();
  product.description.forEach(description => async () => {
    await textVisible(description)()
  })
  await idVisible(ids.TEXT_TEMPLATE(constants.rewards_exclusive_pill, "b2b"))();
  await idVisible(ids.CONTENT_ITEM_BUTTON_IMAGE(""))();

}

export const onBootsAndYorkRewardsClaimPage = (product: GHI_REWARD_CLAIM_PAGE_DETAILS, preClaim: boolean, amount?: string, vouchers?: number) => async () => {
  const buttonText = preClaim? product.buttonText : constants.claimReward
  const voucherText = product.heading === "Urban" ? "Voucher" : "voucher"
  const voucherQuantity = product.heading === "Urban" ? "1 " : ""

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
    await textVisible(`${voucherQuantity}£${amount} ${product.heading} ${voucherText}`)()
    await textVisible(`Purchased date - ${moment().format("DD MMM YYYY")}`)()
    await textVisible(`Expiry date - ${moment().add(product.voucherExpiryYears, "y").format("DD MMM YYYY")}`)()
  }

  await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, buttonText, "down")()
  await rewardsClaimPageRewardStepsVisible(product)()
  await textVisible(buttonText)()
  await rewardsClaimPageBottomInfoVisible()
}

export const onUrbanRewardsClaimPage = (product: GHI_REWARD_CLAIM_PAGE_DETAILS, preClaim: boolean, amount?: string, vouchers?: number) => async () => {
  const buttonText = preClaim? product.buttonText : constants.claimReward
  const voucherText = vouchers > 1 ? "vouchers" : "voucher"
  const voucherQuantity = product.heading === "Urban" ? "1 " : ""

  if(preClaim){
    product.companyDescription.forEach(description => async () => {
      await textVisible(description)()
    })
    
    await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, constants.yourRewardJourneyHeader, "down")()
    await textVisible(`${vouchers.toString()} ${voucherText} left to claim`)()
    await textVisible(product.voucherDescription)()
    await textVisible(`${product.voucherClaimMessage[0]}${vouchers.toString()}${product.voucherClaimMessage[1]}${moment().add(1, "y").format("DD MMM YYYY")}.`)        
    
  } else {
    await textVisible(`${voucherQuantity}£${amount} ${product.heading} Voucher`)()
    await textVisible(`Purchased date - ${moment().format("DD MMM YYYY")}`)()
    await textVisible(`Expiry date - ${moment().add(product.voucherExpiryYears, "y").format("DD MMM YYYY")}`)()
    await textVisible("Voucher Code")()
  }

  await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, buttonText, "down")()
  await rewardsClaimPageRewardStepsVisible(product)()
  await textVisible(buttonText)()
  await rewardsClaimPageBottomInfoVisible()
}

export const rewardsClaimPageBottomInfoVisible = async () => {
  await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, constants.rewardsPolicy, "down")()

  await textVisible(constants.questionHeader)()
  await textVisible(constants.questionDescription)()
  await textVisible(constants.helpCentre)()
  await textVisible(constants.termsAndConditions)()
  await textVisible(constants.rewardsPolicy)()
}

export const rewardsClaimPageRewardStepsVisible = (product: GHI_REWARD_CLAIM_PAGE_DETAILS) => async () => {
  for(let i = 0; i < product.rewardStepsAmount; i++){
    await textVisible(`${(i + 1).toString()}.`)()
    await textVisible(product.rewardSteps[i])
  }
}

export const voucherOptionsVisible = (voucherDetails: GHI_VOUCHER_LIST_DETAILS) => async () => {
  voucherDetails.vouchers.forEach(voucher => async () => {
    await idVisible(ids.TEXT_TEMPLATE(`£${voucher.value} Voucher - ${voucher.cost} YuCoin`), undefined)()
  })
}

export const groupHealthRewardsPurchasedVisible = (product: GHI_REWARD_CLAIM_PAGE_DETAILS) => async () => {
  const prod = product.heading

  await textVisible(moment().format("DD"))()
  await textVisible(moment().format("MMM"))()
  switch(true){
    case (prod === "Boots"):
      await textVisible("£5 Boots voucher")()
      break
    case (prod === "Urban"):
      await textVisible("1 £10 Urban voucher")
      break
    case (prod === "Thriva"):
      await textVisible("1 Thriva Testing Kit")
      break
    case (prod === "Living DNA"):
      await textVisible("1 LivingDNA Testing Kit")
      await textVisible("0 YuCoin")
      break
    case (prod === "Health assessment"):
      await textVisible("1 Health assessment")
      await textVisible("0 YuCoin")
      break
    case (prod === "Garmin"):
      await textVisible("1 Watch")
      await textVisible("0 YuCoin")
      break
  }
}


export const onThrivaRewardsClaimPage = (product: GHI_REWARD_CLAIM_PAGE_DETAILS, preClaim: boolean) => async () => {
  const buttonText = preClaim? product.buttonText : "View vouchers"

  product.companyDescription.forEach(description => async () => {
    await textVisible(description)()
  })

  await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, product.secondaryHeader, "down")()
  await textVisible(constants.yourRewardHeader)()
    product.rewardDescription.forEach(description => async () => {
      await textVisible(description)()
    })

  if(preClaim){
    await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, "1 voucher left to claim", "down")()
    await textVisible(product.secondaryHeader)()
    product.secondaryDescription.forEach(description => async () => {
      await textVisible(description)()
    })
    await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, product.buttonText, "down")()
    await textVisible("1 voucher left to claim")()
    await textVisible(product.voucherDescription)()
    await textVisible(`${product.voucherClaimMessage[0]}1${product.voucherClaimMessage[1]}${moment().add(1, "y").format("DD MMM YYYY")}.`)
    await rewardsClaimPageRewardStepsVisible(product)()
    await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, buttonText, "down")()
    await textVisible(buttonText)()
  } else {

    await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, "You’ve claimed all your vouchers!", "down")()
    await textVisible(product.secondaryHeader)()
    product.secondaryDescription.forEach(description => async () => {
      await textVisible(description)()
    })
    await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, buttonText, "down")()
    await textVisible("You’ve claimed all your vouchers!")()
    await textVisible("For more details, check your email inbox.")()
    await textVisible(buttonText)()
      
  }

  await rewardsClaimPageBottomInfoVisible()
}

export const onLivingDNARewardsClaimPage = (product: GHI_REWARD_CLAIM_PAGE_DETAILS, preClaim: boolean) => async () => {
  const buttonText = preClaim? product.buttonText : "View vouchers"
  const voucherMessage = preClaim? "1 voucher left to claim" : "You’ve claimed all your vouchers!"

  await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, voucherMessage, "down")()

  product.companyDescription.forEach(description => async () => {
    await textVisible(description)()
  })

  if(preClaim){
    await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, product.buttonText, "down")()
    await textVisible(voucherMessage)()
    await textVisible(product.voucherDescription)()
    await textVisible(`${product.voucherClaimMessage[0]}1${product.voucherClaimMessage[1]}${moment().add(1, "y").format("DD MMM YYYY")}.`)
    await rewardsClaimPageRewardStepsVisible(product)()
    await textVisible(buttonText)()
  } else {
    await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, buttonText, "down")()
    await textVisible(voucherMessage)()
    await textVisible("For more details, check your email inbox.")()
    await textVisible(buttonText)()
  }

  await rewardsClaimPageBottomInfoVisible()
}

export const onBupaRewardsClaimPage = (product: GHI_REWARD_CLAIM_PAGE_DETAILS, preClaim: boolean, vouchers: number) => async () => {
  const buttonText = preClaim? product.buttonText : constants.claimReward

  if(preClaim){
    product.companyDescription.forEach(description => async () => {
      await textVisible(description)()
    })
  
    await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, product.secondaryHeader, "down")()
    await textVisible(constants.yourRewardHeader)()
      product.rewardDescription.forEach(description => async () => {
        await textVisible(description)()
    })

    if(vouchers > 0){
      await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, product.buttonText, "down")()
      await textVisible("1 voucher left to claim")()
      await textVisible(product.voucherDescription)()
      await textVisible(`${product.voucherClaimMessage[0]}1${product.voucherClaimMessage[1]}${moment().add(1, "y").format("DD MMM YYYY")}.`)
      await rewardsClaimPageRewardStepsVisible(product)()
      await textVisible(buttonText)()
    } else {
      await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, "View vouchers", "down")()
      await textVisible("You’ve claimed all your vouchers!")()
      await textVisible("For more details, check your email inbox.")()
      await textVisible("View vouchers")()
      return
    }
  } else {
    await textVisible(`1 Health assessment`)()
    await textVisible(`Purchased date - ${moment().format("DD MMM YYYY")}`)()
    await textVisible(`Expiry date - ${moment().format("DD MMM YYYY")}`)()
  }
  await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, buttonText, "down")()
  await rewardsClaimPageRewardStepsVisible(product)()
  await textVisible(buttonText)()
  await rewardsClaimPageBottomInfoVisible()
}

export const onGarminRewardsClaimPage = (product: GHI_REWARD_CLAIM_PAGE_DETAILS, preClaim: boolean, vouchers: number) => async () => {
  const buttonText = preClaim? product.buttonText : constants.claimReward
  const voucherMessage = vouchers > 0 ? "1 voucher left to claim" : "You’ve claimed all your vouchers!"
  console.log("preclaim = ", preClaim, " and the button message is ", voucherMessage)

  if(preClaim){
    product.companyDescription.forEach(description => async () => {
      await textVisible(description)()
    })
  
    await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, voucherMessage, "down")()
    await textVisible(constants.yourRewardHeader)()
      product.rewardDescription.forEach(description => async () => {
        await textVisible(description)()
    })
    
    if(vouchers > 0){
      await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, product.buttonText, "down")()
      await textVisible("1 voucher left to claim")()
      await textVisible(product.voucherDescription)()
      await textVisible(`${product.voucherClaimMessage[0]}1${product.voucherClaimMessage[1]}${moment().add(1, "y").format("DD MMM YYYY")}.`)
      await rewardsClaimPageRewardStepsVisible(product)()
      await textVisible(buttonText)()
    } else {
      await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, constants.rewardsPolicy, "down")()
      await textVisible("You’ve claimed all your vouchers!")()
      await textVisible("For more details, check your email inbox.")()
    }
  } else {
    await textVisible(`1 Watch`)()
    await textVisible(`Purchased date - ${moment().format("DD MMM YYYY")}`)()
    await textVisible(`Expiry date - ${moment().format("DD MMM YYYY")}`)()
    await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, buttonText, "down")()
    await rewardsClaimPageRewardStepsVisible(product)()
    await textVisible(buttonText)()
  }
  await rewardsClaimPageBottomInfoVisible()
}

export const importantNotesPageVisible = (notes: IMPORTANT_NOTES_PAGE_DETAILS) => async () => {
  await idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.importantNotesHeaderImage))()
  await textVisible(notes.heading)()

  notes.subheadings.forEach(subheading => async () => {
    await textVisible(subheading)()
  })

  await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, constants.importantNotesButtonText, "down")()

  notes.importantNotes.forEach(note => async () => {
    await textVisible(note)()
  })
}


export const thrivaDetailsPageVisible = async () => {
  await idVisible(ids.TEXT_TEMPLATE(constants.detailsPageHeading, "h3"))()
  await idVisible(ids.CONTENT_ITEM_INPUT("firstName"))()
  await idVisible(ids.CONTENT_ITEM_INPUT("lastName"))()
  await idVisible(ids.DATE_INPUT)()
  await idVisible(ids.TEXT_TEMPLATE(constants.thrivaDetailsGender, "l1"))()
  await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, "Submit", "down")()
  await idVisible(ids.CONTENT_ITEM_INPUT("address1"))()
  await idVisible(ids.CONTENT_ITEM_INPUT("address2"))()
  await idVisible(ids.CONTENT_ITEM_INPUT("town"))()
  await idVisible(ids.CONTENT_ITEM_INPUT("postcode"))()
  await idVisible(ids.CONTENT_ITEM_INPUT("email"))()

  await detailsWarningsVisible()

  await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, constants.detailsPageHeading, "up")()  
  
}

export const livingDNADetailsPageVisible = async () => {
  await idVisible(ids.TEXT_TEMPLATE(constants.detailsPageHeading, "h3"))()
  await idVisible(ids.CONTENT_ITEM_INPUT("firstName"))()
  await idVisible(ids.CONTENT_ITEM_INPUT("lastName"))()
  await idVisible(ids.CONTENT_ITEM_INPUT("address1"))()
  await idVisible(ids.CONTENT_ITEM_INPUT("address2"))()
  await idVisible(ids.CONTENT_ITEM_INPUT("town"))()
  await idVisible(ids.CONTENT_ITEM_INPUT("county"))()
  await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, "Submit", "down")()
  await idVisible(ids.CONTENT_ITEM_INPUT("postcode"))()
  await idVisible(ids.CONTENT_ITEM_INPUT("phone"))()
  await idVisible(ids.CONTENT_ITEM_INPUT("email"))()

  await detailsWarningsVisible()

  await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, constants.detailsPageHeading, "up")()  
  
}

export const detailsWarningsVisible = async () => {
  await idVisible(ids.INFO_PANEL_IMAGE(constants.detailsCorrectWarningYugiImg))()
  constants.detailsCorrectWarningMessages.forEach(message => async () => {
    await textVisible(message)()
  })
}

export const genderOptionsVisible = async () => {
  await textVisible("Male")()
  await textVisible("Female")()
  await textVisible("Prefer not to say")()
}

export const kitOrderedScreenVisible = (header: string, messages: string []) => async () => {
  await idVisible (ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.parcelImg))()
  await idVisible (ids.TEXT_TEMPLATE(header, "h1"))()
  
  messages.forEach(message => async () => {
    await textVisible(message)()
  })

  await textVisible(constants.kitOrderedSuccessButtonText)()
}