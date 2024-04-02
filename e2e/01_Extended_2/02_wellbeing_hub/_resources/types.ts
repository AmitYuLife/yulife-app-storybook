export interface BupaWellbeingHubItem {
    title: string,
    buttonImg: string,
    buttonDesc: string,
    content: WellbeingHubItemContent[],
}

export interface WellbeingHubItemContent {
    header: string,
    text: string[]
}