export interface GHI_PAGE_INFO {
    productId: string,
    startDate: string,
}

export interface GHI_TEASE_PAGE_DETAILS {
    topImageUrl: string,
    headerText: string,
    description: string
}

export interface GHI_REWARD_CLAIM_PAGE_DETAILS {
    heading: string,
    companyDescription: string [],
    rewardDescription: string [],
    rewardStepsAmount: number,
    rewardSteps: string [],
    buttonText: string
}

export type GHI_SINGLE_VOUCHER_DETAILS = {
    value: string,
    cost: string
}

export interface GHI_VOUCHER_LIST_DETAILS {
    vouchers: GHI_SINGLE_VOUCHER_DETAILS[]
}