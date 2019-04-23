import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import SignUpRewardScreen from "../signup-reward.screen";

describe("SignUpRewardScreen", () => {

    it("should render with required props", () => {
        const actual = shallow(
            <SignUpRewardScreen
                isLoading={false}
                onCollectPress={jest.fn()}
                reward={200}
                copy={{
                    heading: "",
                    subheading: "",
                    ctaLabel: ""
                }}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
