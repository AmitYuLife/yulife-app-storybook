


export const scrollFromText = (text: string, direction: any, speed: any, percentage?: any) => async () => {
    const target = element(by.text(text))
    
    // await target.swipe(direction, speed, percentage)
    await target.scroll(5000, "up")
}

export const scrollFromID = (id: string, direction: any, speed: any, percentage?: any) => async () => {
    const target = element(by.id(id))

    await target.swipe(direction, speed, percentage)
} 
