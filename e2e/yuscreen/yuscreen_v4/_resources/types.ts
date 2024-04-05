

export interface OnboardingYuScreenInfo {
    mainYuCoinPower: string
    firstSlotYucoinPower: string,
    firstSlotProductTitle: string,
    firstSlotProductSubtitle: string,
    firstSlotLeftBackgroundImgSrc?: string,
    firstSlotRightImgSrc?: string,
    secondSlotYucoinPower?: string,
    secondSlotProductTitle?: string,
    secondSlotProductSubtitle?: string
    thirdSlotYucoinPower?: string,
    thirdSlotProductTitle?: string,
    thirdlotProductSubtitle?: string,
    lastSlotProductTitle: string,
}

export interface ProductStartsSoon {
    productName: string,
    goLiveDate: any,
    yugiInfoText: string,
    additionalProductInfo: string,
    coverDetailsText: string,
    planName: string,
    pricePerMonth: string,
    yuCoinPower: string,
    coveredForText: string,
    coveredForImgSlot: string,
    membershipGuideImgSlot: string,
    membershipText: string
    faqImageSlot: string,
    faqText: string,
    button: string
}

export interface AccordionDatum {
    leftText: string;
    rightTextBody: string;
    rightTextLabel?: string;
}