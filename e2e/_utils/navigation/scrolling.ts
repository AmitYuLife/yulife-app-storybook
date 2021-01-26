import { booleanIdVisible, booleanTextVisible, navigateViaText } from "./common"

export const scrollFromText = (text: string, direction: any, speed: any, percentage?: any) => async () => {
    const target = element(by.text(text))
    await target.scroll(5000, "up")
}

export const scrollFromID = (id: string, direction: any, speed: any, percentage?: any) => async () => {
    const target = element(by.id(id))

    await target.swipe(direction, speed, percentage)
} 

// down is down
export const scrollUntilTextVisible = (scrollViewid:string, text:string, direction:"up"|"down", xscroll=0.5, yscroll=0.5) => async()=>{
    await waitFor(element(by.text(text))).toBeVisible().whileElement(by.id(scrollViewid)).scroll(100, direction, xscroll, yscroll)
}

export const scrollUntilIdVisible = (scrollViewid: string, id: string, direction: "up" | "down" | "left" | "right", xscroll = 0.5, yscroll = 0.5) => async () => {
    await waitFor(element(by.id(id))).toBeVisible().whileElement(by.id(scrollViewid)).scroll(100, direction, xscroll, yscroll)
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


export const swipeToID = (scrollID: any, targetID: string, direction: 'left' | 'right' | 'top' | 'bottom' | 'up' | 'down', maxAttempts = 10) => async () => {
    try{
        expect(element(by.id(targetID))).toBeVisible()
    }catch(e){
        let targetIDVisible = await booleanIdVisible(targetID)
        let scroller = element(by.id(scrollID))
        
        let currentAttempt = 0
        while (targetIDVisible === false && currentAttempt < maxAttempts) {
            console.log("starting scroll.........")
            await scroller.swipe(direction, "slow")
            console.log("just scrolled.........")
            targetIDVisible = await booleanIdVisible(targetID)
            
            if (targetIDVisible === true) {
                await expect(element(by.text(targetID))).toBeVisible()
                targetIDVisible = await booleanIdVisible(targetID)
                currentAttempt = maxAttempts
                return true
            }
            
            if (targetIDVisible === false && currentAttempt === maxAttempts) {
                throw new Error(`Could not find target text ${targetID} scrolling through ${scrollID}`)
            }
            currentAttempt += 1
        }
    }
}