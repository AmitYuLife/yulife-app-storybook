import moment from "moment";
import { Platform, PlatformOSType } from "react-native";
import PushNotification from "react-native-push-notification";
import { call, select } from "redux-saga/effects";
import { compareSagaActionsWithNoVisualDifference } from "../../../../../jest/tests-utils";
import { ChallengeStartPayload } from "../../../levels/levels.actions";
import { defaultNotificationSettings, getNotificationTitleAndMessage, numericId } from "../../notifications.helpers";
import { getChallengeCompletionNotification, IYulifeNotification } from "../../notifications.selectors";
import scheduleChallengeNotificationSaga from "../scheduleChallengeNotification.saga";

describe("Challenge Notification Saga scheduleChallengeNotificationSaga", () => {
    it("return if challenge is not provided", () => {
        const mockData: ChallengeStartPayload = {
            createActiveChallenge: {
                challenge: null,
                levelSlot: null,
                nextLevelAvailableAt: "mock",
                chest: null
            },
            initialPedometerResult: 1,
            levelSlotId: "string"
        };

        const testSaga = scheduleChallengeNotificationSaga({ payload: mockData, type: "" });
        const actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });

    it(
        "get challenge completion notification if challenge is provided," +
            "end the logic if challengeCompletion.active = false",
        () => {
            const mockData: ChallengeStartPayload = {
                createActiveChallenge: {
                    challenge: {
                        level: 1,
                        levelSlotId: "mock",
                        status: "mock",
                        startDateTime: "mock",
                        endDateTime: "mock"
                    },
                    levelSlot: null,
                    nextLevelAvailableAt: "mock",
                    chest: null
                },
                initialPedometerResult: 1,
                levelSlotId: "string"
            };

            const testSaga = scheduleChallengeNotificationSaga({ payload: mockData, type: "" });

            let actual: any = testSaga.next();
            const expected = select(getChallengeCompletionNotification);
            expect(actual.value).toEqual(expected);

            const mockNotification: IYulifeNotification = {
                active: false,
                available: false,
                id: "mock",
                name: "mock",
                snooze: 1,
                time: "mock"
            };
            actual = testSaga.next(mockNotification);
            expect(actual.done).toEqual(true);
        }
    );

    it("schedule local notification if challenge completion is active on iOS platform", () => {
        scheduleLocalNotificationBasedOnPlatformOs("ios");
    });

    it("schedule local notification if challenge completion is active on Android platform", () => {
        scheduleLocalNotificationBasedOnPlatformOs("android");
    });
});

function scheduleLocalNotificationBasedOnPlatformOs(platform: PlatformOSType) {
    Platform.OS = platform;

    const mockData: ChallengeStartPayload = {
        createActiveChallenge: {
            challenge: {
                level: 1,
                levelSlotId: "mock",
                status: "mock",
                startDateTime: "mock",
                endDateTime: "mock"
            },
            levelSlot: null,
            nextLevelAvailableAt: "mock",
            chest: null
        },
        initialPedometerResult: 1,
        levelSlotId: "string"
    };

    const testSaga = scheduleChallengeNotificationSaga({ payload: mockData, type: "" });

    let actual: any = testSaga.next();
    let expected: any = select(getChallengeCompletionNotification);
    expect(actual.value).toEqual(expected);

    const mockNotification: IYulifeNotification = {
        active: true,
        available: false,
        id: "mock",
        name: "mock",
        snooze: 1,
        time: "mock"
    };
    const fixedId = numericId(mockData.createActiveChallenge.challenge.levelSlotId);
    actual = testSaga.next(mockNotification);
    expected = call(() =>
        PushNotification.localNotificationSchedule({
            ...defaultNotificationSettings,
            date: moment(mockData.createActiveChallenge.challenge.endDateTime).toDate(),
            group: "Yu Life Challenges", // (optional) add group to message
            id: fixedId, // (optional)
            tag: "challenge_complete", // (optional) add tag to message
            userInfo: Platform.OS === "ios" ? { id: fixedId } : null, // required to cancel iOS local notification
            ...getNotificationTitleAndMessage(mockNotification.id)
        })
    );
    compareSagaActionsWithNoVisualDifference(actual, expected);

    actual = testSaga.next();
    expect(actual.done).toEqual(true);
}
