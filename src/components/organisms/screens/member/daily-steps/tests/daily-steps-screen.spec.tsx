import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import DailyStepsScreen from "../daily-steps-screen";

describe("DailyStepsScreen", () => {

    it("should render", () => {

        const actual = shallow(
            <DailyStepsScreen
                onMenuPress={jest.fn()}
                onCtaPress={jest.fn()}
                onStreakPress={jest.fn()}
                coinsTotal={0}
                coinsToday={0}
                steps={0}
                currentStreak={0}
                maxStreak={4}
                hasNotification={false}
                isDoneToday={false}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
