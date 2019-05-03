import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import DailyStepsFitKitAuthorise from "../daily-steps-fitkit-authorise";

describe("DailyStepsFitKitAuthorise", () => {
    it("should render default values", () => {
        const actual = shallow(
            <DailyStepsFitKitAuthorise
                onPress={jest.fn()}
                copy={{
                    permission: "",
                    permissionCta: ""
                }}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
