import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";




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

export const FEEDBACK_FORM_2 = {
    type,
    modelName, 
    data:{
        _id:generateRandomMongoId(),
        label : "Hard-coded client NPS (level  100)", 
        title : "Feedback", 
        metric : "NPS",
        questions:[
            {
                key : "NPS_RATING", 
                type : "NUMBER_SLIDER", 
                questionText : "How likely are you to recommend YuLife to a co-worker?", 
                isRoot : true, 
                range : {
                    min : 0, 
                    max : 10
                }, 
                labels : {
                    left : "Not at all likely", 
                    right : "Extremely likely", 
                    submit : "Submit your rating"
                }, 
                nextConditions : [
                    {
                        questionKey : "COMMENT_VERY_LIKELY", 
                        regexMatch : "(10|9|8)"
                    }, 
                    {
                        questionKey : "COMMENT_MAYBE", 
                        regexMatch : "(7|6|5)"
                    }, 
                    {
                        questionKey : "COMMENT_NOT_LIKELY", 
                        regexMatch : "(4|3|2|1|0)"
                    }
                ]
            }, 
            {
                key : "COMMENT_VERY_LIKELY", 
                type : "COMMENT", 
                questionText : "Thank you! We’re so glad to have you on board!", 
                labels : {
                    placeholder : "Help us by explaining your score...", 
                    submit : "Submit feedback"
                }
            }, 
            {
                key : "COMMENT_MAYBE", 
                type : "COMMENT", 
                questionText : "Thank you for your score! What can we do better?", 
                labels : {
                    placeholder : "Help us build an app that’s perfect for you...", 
                    submit : "Submit feedback"
                }
            }, 
            {
                key : "COMMENT_NOT_LIKELY", 
                type : "COMMENT", 
                questionText : "We’re sorry you’re having a hard time. What’s one thing we can do to improve?", 
                labels : {
                    placeholder : "Help us by explaining your score...", 
                    submit : "Submit feedback"
                }
            }
        ]
    }
} as IDatabaseItem