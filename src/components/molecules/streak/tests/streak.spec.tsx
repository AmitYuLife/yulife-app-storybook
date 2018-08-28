import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Streak from "../streak";

const allFillers = {
    currentStreak: 0,
    maxStreak: 0,
    onPress: jest.fn()
};
const onPressFiller = { onPress: jest.fn() };

describe("Streak", () => {

    it("should render unfinished state", () => {
        const actual = shallow(
            <Streak isFinished={false} {...allFillers} />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render finished state", () => {
        const actual = shallow(
            <Streak isFinished={false} {...allFillers} />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render 0% progress state", () => {
        const actual = shallow(
            <Streak
                isFinished={false}
                {...onPressFiller}
                currentStreak={0}
                maxStreak={1}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render 100% progress state", () => {
        const actual = shallow(
            <Streak
                isFinished={false}
                {...onPressFiller}
                currentStreak={1}
                maxStreak={1}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render 50% progress state", () => {
        const actual = shallow(
            <Streak
                isFinished={false}
                {...onPressFiller}
                currentStreak={1}
                maxStreak={2}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
