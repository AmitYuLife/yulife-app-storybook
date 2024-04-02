export interface yuScreenSlot {
    name: string,
    img: string
}

export interface deeperEnvironmentSlot {
    name: string,
    img: string,
    text: string
}

export interface sassPageSlot {
    title: string,
    text: string,
    img: string
}

export interface sassScreenContent {
    title: string,
    heading: string,
    slots: sassPageSlot[]
}