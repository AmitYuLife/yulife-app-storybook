import { getNotificationTitleAndMessage } from "../notifications.helpers";
describe("Notification Helper getNotificationTitleAndMessage", () => {
    it("challenge completed", () => {
        const actual = getNotificationTitleAndMessage("99999901");

        const expected = {
            title: "Challenge Completed",
            message: "Time's up! Check how you did on your latest challenge."
        };

        expect(actual).toEqual(expected);
    });

    it("return correct object for Streak saver", () => {
        const actual = getNotificationTitleAndMessage("99999904");

        const expected = {
            title: "Streak Saver!",
            message: "Keep your streak going and take a challenge now!"
        };

        expect(actual).toEqual(expected);
    });

    it("return correct object for challenge remider", () => {
        const actual = getNotificationTitleAndMessage("99999902");

        const expected = {
            title: "Challenge reminder",
            message: "Start your walk or meditation challenge now!"
        };

        expect(actual).toEqual(expected);
    });
});
