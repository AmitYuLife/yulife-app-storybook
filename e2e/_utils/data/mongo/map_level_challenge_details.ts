import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment = require('moment');

export const MAP_LEVEL_CHALLENGE_DETAIL_1 = {
    type: "mongo",
    modelName: "map_level_challenge_details",
    updateKey: "id",
    data: {
        "_id": {
            "id": generateRandomMongoId(),
        },
        "backgroundColour": "rgb(255,255,255)",
        "progressBar": {
            "id": generateRandomMongoId(),
        },
        "assets": {
            "detailsImageKey": "quest_map/1.1/challenge/details/dolphin.png",
            "historyImageKey": "quest_map/1.1/challenge/history/dolphin.png",
            "tileImageKey": "quest_map/1.1/challenge/tile/dolphin.png",
            "backgroundImageKey": "quest_map/1.1/challenge/background/dolphin.png"
        },
        "topBarType": "default",
        "actionStyles": {
            "primaryColour": "#CCCCCC",
            "secondaryColour": "white"
        },
        "internalContent": [
            {
                "contentType": "meditopia",
                "contentMediaTags": [
                    "meditopia_challenges"
                ],
                "title": "Meditation",
                "description": "Meditate inside the YuLife app with Meditopia",
                "logoKey": "logos/meditopia-logo.png",
                "buttons": [
                    {
                        "title": "Use Meditopia app",
                        "logo": "logos/meditopia-logo-icon.png",
                        "color": "#3BB4FF",
                        "width": 93,
                        "height": 72,
                        "options": {
                            "iosUrl": "meditopia://",
                            "androidUrl": "android-app://app.meditasyon",
                            "appName": "meditopia-meditation-sleep",
                            "appStoreId": "1190294015",
                            "appStoreLocale": "gb",
                            "playStoreId": "app.meditasyon"
                        }
                    },
                    {
                        "title": "Use Calm app",
                        "color": "#4276CE",
                        "width": 150,
                        "height": 60,
                        "logo": "logos/calm-logo.svg",
                        "options": {
                            "iosUrl": "calm://",
                            "androidUrl": "android-app://com.calm.android",
                            "appName": "calm",
                            "appStoreId": "571800810",
                            "appStoreLocale": "gb",
                            "playStoreId": "com.calm.android"
                        }
                    },
                    {
                        "title": "Use Headspace app",
                        "color": "#F47D31",
                        "logo": "logos/headspace-logo.svg",
                        "width": 72,
                        "height": 72,
                        "options": {
                            "iosUrl": "headspace://",
                            "androidUrl": "android-app://com.getsomeheadspace.android",
                            "appName": "headspace-meditation",
                            "appStoreId": "493145008",
                            "appStoreLocale": "gb",
                            "playStoreId": "com.getsomeheadspace.android"
                        }
                    }
                ]
            }
        ]
    }
} as IDatabaseItem