import { IDatabaseItem } from "_utils/data/types"
import { generateRandomMongoId } from "_utils/data/utils"



const type = "mongo"
const modelName = "feedbackform"

export const FEEDBACK_FORM_1 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        questions:[
            {
                isRoot:true,
                key:"Q1",
                questionText:"How much do you like the yulife app?",
                labels:{
                    left:"not at all", 
                    right:"it's amazing",
                    placeholder:"placeholder_test",
                    submit:"next question"
                },
                range:{
                    min:1,
                    max:10
                },
                type:"NUMBER_SLIDER",
                nextConditions:[
                    {
                        questionKey: "Q2",
                        regexMatch: "(0|1|2|3|4|5)"
                    },
                    {
                        questionKey:"Q3",
                        regexMatch: "(6|7|8|9|10)"
                    }
                ]
            },
            {
                key:"Q2",
                questionText:"What can we do better?",
                type:"COMMENT",
                labels:{
                    placeholder:"input text",
                    submit:"submit"
                }
            },
            {
                key: "Q3",
                questionText: "What's your favourite part of the app?",
                type: "COMMENT",
                labels: {
                    placeholder: "input text",
                    submit: "submit"
                }
            }
        ],
        label: "DETOX FEEDBACK FORM",
        title: "Detox feedback",
        metric: "Any",
    }
} as IDatabaseItem