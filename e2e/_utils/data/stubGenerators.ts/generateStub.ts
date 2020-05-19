import { generateRandomMongoId } from "../utils"

export const generateChallenge = async () => {
    const challenge = {
        type: "mongo",
        modelName: "challenge",
        data: {
            "_id": generateRandomMongoId(),
            "challengeTemplateId": [],
            "data": [],
            "actions": [],
            "target": [],

        }
    }

    return challenge
}