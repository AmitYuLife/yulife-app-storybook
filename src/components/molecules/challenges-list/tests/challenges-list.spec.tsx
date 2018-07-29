import { shallow } from "enzyme";
import * as React from "react";
import { ChallengeTile } from "../..";
import ChallengesList from "../challenges-list";

describe("ChallengesList", () => {

    it("should render when unlocked only first level", () => {

        const actual = shallow(
            <ChallengesList
                challenges={[
                    {
                        activity: "brisk walk",
                        duration: "10",
                        image: ChallengeTile.Images.SQUIRREL,
                        reward: "0-3",
                    },
                    {
                        image: ChallengeTile.Images.SQUIRREL,
                        isLocked: true,
                        minimumLevel: 4,
                    },
                    {
                        image: ChallengeTile.Images.ELEPHANT,
                        isLocked: true,
                        minimumLevel: 2,
                    },
                    {
                        image: ChallengeTile.Images.BIRD,
                        isLocked: true,
                        minimumLevel: 10,
                    },
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
                        activity: "brisk walk",
                        duration: "10",
                        image: ChallengeTile.Images.SQUIRREL,
                        reward: "0-3",
                    },
                    {
                        activity: "long walk",
                        duration: "30",
                        image: ChallengeTile.Images.OSTRICH,
                        reward: "0-6",
                    },
                    {
                        activity: "short stroll",
                        duration: "5",
                        image: ChallengeTile.Images.ELEPHANT,
                        reward: "0-1",
                    },
                    {
                        activity: "meditation",
                        duration: "3-10",
                        image: ChallengeTile.Images.BIRD,
                        reward: "0-3",
                    },
                ]}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
