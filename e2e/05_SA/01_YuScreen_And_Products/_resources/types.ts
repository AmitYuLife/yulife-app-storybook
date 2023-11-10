
export interface SAProductData {
   productName: string,
   productLongName?: string,
   schemeType: string,
   rightImage: string,
   yuCoinPower: string,
   productDescription: string,
   yugiInfoImgSrc: string
   yugiInfotext: string
   longname?: string
}
export interface keyInfo {
    keyInfo: string
    membershipNumberText: string,
    membershipNumber: string,
    startDateText: string,
    startDate: string,
    coveredTypeText?: string,
    coverType?: string,
    keyInfoDescription?: string
}

export interface coverAmounts {
    coverAmountsText: string,
    youText: string,
    youAmmount: string,
    increaseCoverText?: string,
    increaseCoverTextImg?: string
    child_0_12_monthsText?: string
    child_0_12_ammount?: string
    child_1_5_yearsText?: string
    child_1_5_ammount?: string
    child_6_13_yearsText?: string
    child_6_13_ammount?: string
    child_14_21_yearsText?: string
    child_14_21_ammount?: string
    disclaimer_1?: string
    disclaimer_2?: string
    NOincreaseCoverText?: string,
    NOincreaseCoverTextImg?: string

}

export interface beneficiaries {
    beneficiaresText: string,
    beneficiary_Name_1?: string,
    benefeciary_benefit_1?: string,
    beneficiary_Name_2?: string,
    benefeciary_benefit_2?: string,
    noBeneficiaryText?: string,
    addBeneficiaryImage?: string,
    beneficiaryDescription_1: string
    beneficiaryDescription_2: string
}

export interface usefulLinks {
    usefulLinksText: string,
    editBeneficiariImg?: string,
    editBeneficiariText?: string,
    makeClaimText: string,
    makeClaimImg: string
    memberCertText: string,
    memberCertImg: string
}

export interface productAdditionalInfo {
    additionalInfo_1: string,
    additionalInfo_2: string,
}

export interface navButton {
    buttonName: string,
    middleImageSrc: string,
    titleText: string,
    subTitle: string,
    button: string
}

export interface furtherScreen {
    buttonName: string,
    middleImageSrc: string,
    titleText: string,
    button: string
}

export interface checkButton {
    buttonName: string,
    middleImageSrc: string,
    titleText: string,
    subTitle: string,
    button: string
    newRequestFormTitleText: string,
    requestedFormScreenTitleText: string,
    requestedFormScreenSubtitle?: string,
    finishFormScreenButton: string
}

export interface ProductSlot {
    name: string,
    scheme: string,
    img: string
}