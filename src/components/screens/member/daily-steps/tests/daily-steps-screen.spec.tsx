import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import DailyStepsScreen from "../daily-steps-screen";

describe("DailyStepsScreen", () => {

    it("should render", () => {

        const actual = shallow(
            <DailyStepsScreen
                coinsToday={0}
                coinsTotal={0}
                currentStreak={0}
                hasNotification={false}
                isDoneToday={false}
                labels={[
                    {
                        name: "yucoin",
                        onPress: jest.fn(),
                    },
                    {
                        name: "quest",
                        onPress: jest.fn(),
                    },
                    {
                        name: "rewards",
                        onPress: jest.fn(),
                    },
                ]}
                maxStreak={4}
                onCtaPress={jest.fn()}
                onMenuPress={jest.fn()}
                onStreakPress={jest.fn()}
                steps={0}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
