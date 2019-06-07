import { shallow } from "enzyme";
import * as React from "react";
import ChallengesList from "../challenges-list";

describe("ChallengesList", () => {
    it("should render when unlocked only first level", () => {
        const actual = shallow(
            <ChallengesList
                challenges={[
                    {
                        challengeType: "brisk walk",
                        currentWorld: 0,
                        duration: "10",
                        reward: "0-3"
                    },
                    {
                        currentWorld: 0,
                        isLocked: true,
                        minimumLevel: 4
                    },
                    {
                        currentWorld: 0,
                        isLocked: true,
                        minimumLevel: 2
                    },
                    {
                        currentWorld: 0,
                        isLocked: true,
                        minimumLevel: 10
                    }
                ]}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render when unlocked all levels", () => {
        const actual = shallow(
            <ChallengesList
                challenges={[
                    {
                        challengeType: "brisk walk",
                        currentWorld: 0,
                        duration: "10",
                        reward: "0-3"
                    },
                    {
                        challengeType: "long walk",
                        currentWorld: 0,
                        duration: "30",
                        reward: "0-6"
                    },
                    {
                        challengeType: "short stroll",
                        currentWorld: 0,
                        duration: "5",
                        reward: "0-1"
                    },
                    {
                        challengeType: "meditation",
                        currentWorld: 0,
                        duration: "3-10",
                        reward: "0-3"
                    }
                ]}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
