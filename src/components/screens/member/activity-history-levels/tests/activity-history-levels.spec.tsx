import { shallow } from "enzyme";
import * as React from "react";
import ActivityHistoryLevels from "../activity-history-levels";

const defaultProps = {
    loading: false,
    onPressClose: jest.fn(),
    onRefresh: jest.fn(),
    onSetLargelistRef: jest.fn(),
    copy: {
        headerLeft: "",
        headerLevel: "",
        headerMid: "",
        headerRight: "",
        heading: ""
    },
    isAllDataLoaded: true,
    items: [
        {
            title: "January 2019",
            items: [
                {
                    id: "1",
                    dayOfMonth: "13",
                    dayOfWeek: "SAT",
                    level: 4,
                    steps: 4098,
                    sources: {},
                    yucoin: 3,
                    challenges: [
                        {
                            earned: 1,
                            milestones: 1,
                            name: "long walk",
                            score: "8000 steps"
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
                }
            ]
        }
    ]
};

describe("ActivityHistoryLevels", () => {
    it("should render", () => {
        const actual = shallow(<ActivityHistoryLevels {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with the flatlist loading", () => {
        const actual = shallow(<ActivityHistoryLevels {...defaultProps} loading={true} />);

        expect(actual).toMatchSnapshot();
    });
});
