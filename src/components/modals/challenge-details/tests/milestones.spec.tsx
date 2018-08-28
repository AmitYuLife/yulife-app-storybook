import { shallow } from "enzyme";
import * as React from "react";
import Milestones from "../milestones";

describe("Milestones", () => {

    it("should render with units as minutes", () => {
        const actual = shallow(
            <Milestones
                milestones={[
                    {
                        reward: 1,
                        target: 120
                    },
                    {
                        reward: 2,
                        target: 240
                    },
                    {
                        reward: 3,
                        target: 480
                    }
                ]}
                unit="minutes"
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with units as steps", () => {
        const actual = shallow(
            <Milestones
                milestones={[
                    {
                        reward: 1,
                        target: 1000
                    },
                    {
                        reward: 2,
                        target: 2000
                    },
                    {
                        reward: 3,
                        target: 3000
                    }
                ]}
                unit="steps"
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
