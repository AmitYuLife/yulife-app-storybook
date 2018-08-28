import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ChallengeComplete from "../challenge-complete.modal";

describe("ChallengeComplete", () => {

    it("should match snapshot", () => {
        const actual = shallow(
            <ChallengeComplete
                onCtaPress={jest.fn()}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
