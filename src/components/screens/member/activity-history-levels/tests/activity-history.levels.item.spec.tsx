import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ActivityHistoryLevelsItem, { ItemProps } from "../activity-history-levels.item";

const defaultProps = {
    id: "1",
    dayOfMonth: "13",
    dayOfWeek: "SAT",
    steps: 4098,
    sources: {},
    yucoin: 3,
    challenges: [
        {
            earned: 1,
            milestones: 1,
            name: "long walk"
        },
        {
            earned: 3,
            milestones: 2,
            name: "meditation",
            score: "08m 00s"
        },
        {
            earned: 1,
            milestones: 3,
            name: "short stroll",
            score: "1299 steps"
        }
    ]
} as ItemProps;

describe("ActivityHistoryLevelsItem", () => {
    it("should render", () => {
        const actual = shallow(<ActivityHistoryLevelsItem {...defaultProps} level={6} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render without level circle", () => {
        const actual = shallow(<ActivityHistoryLevelsItem {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render text step instead of steps", () => {
        const actual = shallow(<ActivityHistoryLevelsItem {...defaultProps} steps={1} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render without any challenges", () => {
        const actual = shallow(<ActivityHistoryLevelsItem {...defaultProps} challenges={[]} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a mindful seconds & mindful yucoin of 0", () => {
        const actual = shallow(<ActivityHistoryLevelsItem {...defaultProps} mindfulSeconds={2000} challenges={[]} />);

        expect(actual).toMatchSnapshot();
    });
});
