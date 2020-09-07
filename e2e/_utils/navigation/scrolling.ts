import { booleanTextVisible } from "./common"

export const scrollFromText = (text: string, direction: any, speed: any, percentage?: any) => async () => {
    const target = element(by.text(text))
    await target.scroll(5000, "up")
}

export const scrollFromID = (id: string, direction: any, speed: any, percentage?: any) => async () => {
    const target = element(by.id(id))

    await target.swipe(direction, speed, percentage)
} 

export const swipeToText = (scrollID: any, targetText: string, direction: "up" | "down", maxAttempts = 10) => async()=>{
    let targetTextVisible = await booleanTextVisible(targetText)
    let scroller = element(by.id(scrollID))

    let currentAttempt = 0
    while(targetTextVisible === false && currentAttempt < maxAttempts){
        await scroller.swipe("up", "slow")
        targetTextVisible = await booleanTextVisible(targetText)
        
        if(targetTextVisible === true){
            await expect(element(by.text(targetText))).toBeVisible()
            targetTextVisible = await booleanTextVisible(targetText)
            currentAttempt = maxAttempts
            return true
        }
        
        if(targetTextVisible === false && currentAttempt === maxAttempts){
            throw new Error(`Could not find target text ${targetText} scrolling through ${scrollID}`)
        }
        currentAttempt +=1
    }
}